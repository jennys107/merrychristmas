import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

// --- 1. CONSTANTS & STATE ---
// Now using 'let' for colors so we can update them globally
let CURRENT_TREE_COLOR_1 = new THREE.Color('#F6A5C0'); // Pink
let CURRENT_TREE_COLOR_2 = new THREE.Color('#D4A5F6'); // Purple
let CURRENT_HEART_COLOR = new THREE.Color('#ff3366');

let isExploded = false;
let starProgress = 0, isShooting = false;
let targetRotationY = 0;
const startVec = new THREE.Vector3();
const ornaments = [];
const fwCount = 1500;
const fwVelocities = new Float32Array(fwCount * 3);

function generateRandomUsername() {
  const prefixes = ['Anon', 'Star', 'Cyber', 'Data', 'Cosmic', 'Pixel'];
  const suffixes = ['Wisher', 'Byte', 'Dreamer', 'Voyager', 'Node', 'Spirit'];
  return `${prefixes[Math.floor(Math.random() * prefixes.length)]}_${suffixes[Math.floor(Math.random() * suffixes.length)]}${Math.floor(Math.random() * 99) + 1}`;
}

// --- 2. SCENE SETUP ---
const scene = new THREE.Scene();
scene.background = new THREE.Color('#050505');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 6);
scene.add(camera); 

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.getElementById('canvas-container').appendChild(renderer.domElement);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
composer.addPass(bloomPass);

// --- 3. TREE SHADER ---
const PARTICLE_COUNT = 150000;
const treeGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(PARTICLE_COUNT * 3);
const colors = new Float32Array(PARTICLE_COUNT * 3);
const sizes = new Float32Array(PARTICLE_COUNT);

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const height = Math.random() * 5; 
  const progress = height / 5;
  const radius = (1.1 - progress) * 1.6; 
  const angle = (progress * Math.PI * 8) + (i > PARTICLE_COUNT / 2 ? Math.PI : 0) + (Math.random() * 0.6); 
  const spread = Math.pow(Math.random(), 0.8);

  positions[i * 3] = Math.cos(angle) * (radius * spread);
  positions[i * 3 + 1] = height - 2;
  positions[i * 3 + 2] = Math.sin(angle) * (radius * spread);

  let baseColor = i > PARTICLE_COUNT / 2 ? CURRENT_TREE_COLOR_2 : CURRENT_TREE_COLOR_1;
  colors[i * 3] = baseColor.r; colors[i * 3 + 1] = baseColor.g; colors[i * 3 + 2] = baseColor.b;
  sizes[i] = (1.0 - progress) * 0.035 + 0.005;
}

treeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
treeGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
treeGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

const treeMaterial = new THREE.ShaderMaterial({
  uniforms: {
    pointTexture: { value: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png') },
    uExplode: { value: 0.0 },
    uFillLevel: { value: 5.0 }
  },
  vertexShader: `
    uniform float uExplode;
    attribute float size;
    varying vec3 vColor;
    void main() {
      vColor = color;
      vec3 direction = normalize(position);
      float noise = sin(position.x * 20.0) * cos(position.z * 20.0);
      float speed = 1.5 + noise;
      vec3 newPosition = position + (direction * uExplode * 12.0 * speed);
      vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
      gl_PointSize = size * (1.0 + uExplode * 2.0) * (350.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform sampler2D pointTexture;
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
      if (gl_FragColor.a < 0.1) discard;
    }
  `,
  transparent: true, blending: THREE.AdditiveBlending, depthTest: false, vertexColors: true
});

const tree = new THREE.Points(treeGeometry, treeMaterial);
scene.add(tree);

// --- 4. WIREFRAME HEART ---
const heartShape = new THREE.Shape();
heartShape.moveTo(0, -1.5); 
heartShape.bezierCurveTo(-1, -1, -2, 0.5, -2, 1.5);
heartShape.bezierCurveTo(-2, 3, -0.5, 3.5, 0, 2);
heartShape.bezierCurveTo(0.5, 3.5, 2, 3, 2, 1.5);
heartShape.bezierCurveTo(2, 0.5, 1, -1, 0, -1.5);

const heartMat = new THREE.MeshStandardMaterial({ 
  color: CURRENT_HEART_COLOR, 
  emissive: CURRENT_HEART_COLOR, 
  emissiveIntensity: 3, 
  wireframe: true 
});

const heartMesh = new THREE.Mesh(new THREE.ShapeGeometry(heartShape), heartMat);
heartMesh.scale.set(0.12, 0.12, 0.12); 
heartMesh.position.set(0, 3.2, 0); 
tree.add(heartMesh);

// --- 5. NEW COLOR LOGIC ---
function updatePermanentColors(newCol1, newCol2) {
  // Update the global state
  CURRENT_TREE_COLOR_1.copy(newCol1);
  CURRENT_TREE_COLOR_2.copy(newCol2);
  
  // Update the Particle Attribute Buffer
  const colorAttr = tree.geometry.attributes.color;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    let baseColor = i > PARTICLE_COUNT / 2 ? CURRENT_TREE_COLOR_2 : CURRENT_TREE_COLOR_1;
    colorAttr.array[i * 3] = baseColor.r;
    colorAttr.array[i * 3 + 1] = baseColor.g;
    colorAttr.array[i * 3 + 2] = baseColor.b;
  }
  colorAttr.needsUpdate = true;

  // Update Heart Color
  const heartNewColor = new THREE.Color().setHSL(Math.random(), 0.8, 0.5);
  heartMat.color.copy(heartNewColor);
  heartMat.emissive.copy(heartNewColor);
}

// --- 6. MESSAGE SYSTEM ---
function createMessage(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024; canvas.height = 160;
  const ctx = canvas.getContext('2d');
  const user = generateRandomUsername();
  const fullText = `> [${user}] : "${text}"`;
  const tex = new THREE.CanvasTexture(canvas);
  
  const card = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 0.2), 
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthTest: false })
  );
  
  card.position.set((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 2, -2);
  card.userData = { fullText, charCount: 0, lastUpdate: 0, canvas, ctx, texture: tex };
  camera.add(card);
  return card;
}

function updateTypewriter(card) {
  const data = card.userData;
  const now = Date.now();
  if (now - data.lastUpdate > 70 && data.charCount < data.fullText.length) {
    data.charCount++;
    data.lastUpdate = now;
    const ctx = data.ctx;
    ctx.clearRect(0, 0, data.canvas.width, data.canvas.height);
    ctx.fillStyle = CURRENT_TREE_COLOR_1.getStyle(); // Match current tree color
    ctx.font = '42px monospace';
    ctx.shadowColor = CURRENT_TREE_COLOR_1.getStyle(); ctx.shadowBlur = 12;
    const currentString = data.fullText.substring(0, data.charCount);
    ctx.fillText(currentString + (Math.floor(now / 350) % 2 === 0 ? "_" : ""), 50, 95);
    data.texture.needsUpdate = true;
  }
}

// --- 7. SNOW & FIREWORKS ---
const snowCount = 5000;
const snowGeo = new THREE.BufferGeometry();
const snowPosArr = new Float32Array(snowCount * 3);
for (let i = 0; i < snowCount; i++) {
  snowPosArr[i*3] = (Math.random()-0.5)*20; snowPosArr[i*3+1] = Math.random()*10; snowPosArr[i*3+2] = (Math.random()-0.5)*20;
}
snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPosArr, 3));
const snow = new THREE.Points(snowGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.02, transparent: true, opacity: 0.4 }));
scene.add(snow);

const fwGeo = new THREE.BufferGeometry();
fwGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(fwCount * 3), 3));
fwGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(fwCount * 3), 3));
const fwMat = new THREE.PointsMaterial({ size: 0.1, vertexColors: true, map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png'), transparent: true, opacity: 0, blending: THREE.AdditiveBlending });
const firework = new THREE.Points(fwGeo, fwMat);
scene.add(firework);

const shootingStar = new THREE.Mesh(new THREE.SphereGeometry(0.06), new THREE.MeshBasicMaterial({ color: 0xffffff }));
shootingStar.visible = false;
scene.add(shootingStar);

// --- 8. ANIMATION LOOP ---
function animate() {
  requestAnimationFrame(animate);
  
  tree.rotation.y = THREE.MathUtils.lerp(tree.rotation.y, targetRotationY, 0.1);
  targetRotationY += 0.002;

  const lerpSpeed = isExploded ? 0.01 : 0.07;
  treeMaterial.uniforms.uExplode.value = THREE.MathUtils.lerp(treeMaterial.uniforms.uExplode.value, isExploded ? 1.0 : 0.0, lerpSpeed);

  const sPos = snow.geometry.attributes.position.array;
  for (let i = 1; i < sPos.length; i += 3) { sPos[i] -= 0.02; if (sPos[i] < -2) sPos[i] = 8; }
  snow.geometry.attributes.position.needsUpdate = true;

  ornaments.forEach(orn => {
    const targetOpacity = isExploded ? 1.0 : 0.0;
    orn.material.opacity = THREE.MathUtils.lerp(orn.material.opacity, targetOpacity, 0.05);
    orn.visible = orn.material.opacity > 0.01;
    if (orn.visible) updateTypewriter(orn);
    else orn.userData.charCount = 0;
  });

  if (isShooting) {
    starProgress += 0.025;
    shootingStar.position.copy(startVec).lerp(new THREE.Vector3(0, 3.2, 0), starProgress);
    if (starProgress >= 1) {
      isShooting = false; shootingStar.visible = false;
      
      // Generate new Colors
      const newTreeC1 = new THREE.Color().setHSL(Math.random(), 0.7, 0.6);
      const newTreeC2 = new THREE.Color().setHSL(Math.random(), 0.7, 0.6);
      
      // APPLY THE CHANGE PERMANENTLY
      updatePermanentColors(newTreeC1, newTreeC2);

      // Fireworks
      firework.material.opacity = 1.0;
      const fPos = firework.geometry.attributes.position.array;
      const fCol = firework.geometry.attributes.color.array;
      for (let i = 0; i < fwCount; i++) {
        fPos[i * 3] = 0; fPos[i * 3 + 1] = 3.2; fPos[i * 3 + 2] = 0;
        const chosen = Math.random() > 0.5 ? newTreeC1 : newTreeC2;
        fCol[i * 3] = chosen.r; fCol[i * 3 + 1] = chosen.g; fCol[i * 3 + 2] = chosen.b;
        fwVelocities[i * 3] = (Math.random() - 0.5) * 0.4;
        fwVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
        fwVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
      }
      firework.geometry.attributes.position.needsUpdate = true;
      firework.geometry.attributes.color.needsUpdate = true;
      
      const wishInput = document.getElementById('wish-input');
      ornaments.push(createMessage(wishInput.dataset.lastWish || "Wish Sent"));
    }
  }

  if (firework.material.opacity > 0) {
    firework.material.opacity -= 0.015;
    const fPos = firework.geometry.attributes.position.array;
    for (let i = 0; i < fwCount; i++) {
      fPos[i*3]+=fwVelocities[i*3]; fPos[i*3+1]+=fwVelocities[i*3+1]; fPos[i*3+2]+=fwVelocities[i*3+2];
    }
    firework.geometry.attributes.position.needsUpdate = true;
  }

  composer.render();
}
animate();

// --- 9. HANDS & UI ---
document.getElementById('send-button').addEventListener('click', () => {
  const input = document.getElementById('wish-input');
  if (input.value.trim() && !isShooting) {
    input.dataset.lastWish = input.value;
    startVec.set((Math.random()-0.5)*10, -5, 1);
    starProgress = 0; isShooting = true; shootingStar.visible = true;
    input.value = "";
  }
});

const hands = new Hands({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}` });
hands.setOptions({ maxNumHands: 1, modelComplexity: 1, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });

hands.onResults((res) => {
  if (res.multiHandLandmarks?.length > 0) {
    const landmarks = res.multiHandLandmarks[0];
    targetRotationY = (0.5 - landmarks[0].x) * 6;
    const dx = landmarks[12].x - landmarks[0].x;
    const dy = landmarks[12].y - landmarks[0].y;
    isExploded = Math.sqrt(dx*dx + dy*dy) > 0.35;
  } else { 
    isExploded = false; 
  }
});

new Camera(document.querySelector('.input_video'), { 
  onFrame: async () => { await hands.send({ image: document.querySelector('.input_video') }); }, 
  width: 640, height: 480 
}).start();

new OrbitControls(camera, renderer.domElement);