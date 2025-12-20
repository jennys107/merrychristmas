(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Za="182",nr={ROTATE:0,DOLLY:1,PAN:2},er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yh=0,Bl=1,Eh=2,Fs=1,Th=2,Cr=3,fi=0,ln=1,Zn=2,On=0,ir=1,sr=2,zl=3,Vl=4,bh=5,Ti=100,Ah=101,wh=102,Ch=103,Rh=104,Ph=200,Dh=201,Lh=202,Uh=203,qo=204,Zo=205,Ih=206,Nh=207,Fh=208,Oh=209,Bh=210,zh=211,Vh=212,Hh=213,Gh=214,Ko=0,Jo=1,$o=2,or=3,Qo=4,ta=5,ea=6,na=7,Zc=0,kh=1,Wh=2,Bn=0,Kc=1,Jc=2,$c=3,Qc=4,tu=5,eu=6,nu=7,iu=300,Ci=301,ar=302,ia=303,ra=304,Qs=306,sa=1e3,Kn=1001,oa=1002,Xe=1003,Xh=1004,cs=1005,$e=1006,ho=1007,Ai=1008,En=1009,ru=1010,su=1011,Or=1012,Ka=1013,zn=1014,Nn=1015,gn=1016,Ja=1017,$a=1018,Br=1020,ou=35902,au=35899,lu=1021,cu=1022,Pn=1023,$n=1026,wi=1027,uu=1028,Qa=1029,lr=1030,tl=1031,el=1033,Os=33776,Bs=33777,zs=33778,Vs=33779,aa=35840,la=35841,ca=35842,ua=35843,ha=36196,fa=37492,da=37496,pa=37488,ma=37489,ga=37490,_a=37491,va=37808,xa=37809,Ma=37810,Sa=37811,ya=37812,Ea=37813,Ta=37814,ba=37815,Aa=37816,wa=37817,Ca=37818,Ra=37819,Pa=37820,Da=37821,La=36492,Ua=36494,Ia=36495,Na=36283,Fa=36284,Oa=36285,Ba=36286,Yh=3200,hu=0,jh=1,ci="",Sn="srgb",cr="srgb-linear",qs="linear",xe="srgb",Bi=7680,Hl=519,qh=512,Zh=513,Kh=514,nl=515,Jh=516,$h=517,il=518,Qh=519,Gl=35044,kl="300 es",Fn=2e3,Zs=2001;function fu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tf(){const i=zr("canvas");return i.style.display="block",i}const Wl={};function Xl(...i){const t="THREE."+i.shift();console.log(t,...i)}function jt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function fe(...i){const t="THREE."+i.shift();console.error(t,...i)}function Vr(...i){const t=i.join(" ");t in Wl||(Wl[t]=!0,jt(...i))}function ef(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Dr=Math.PI/180,Hr=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function rl(i,t){return(i%t+t)%t}function nf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function rf(i,t,e){return i!==t?(e-i)/(t-i):0}function Lr(i,t,e){return(1-e)*i+e*t}function sf(i,t,e,n){return Lr(i,t,1-Math.exp(-e*n))}function of(i,t=1){return t-Math.abs(rl(i,t*2)-t)}function af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uf(i,t){return i+Math.random()*(t-i)}function hf(i){return i*(.5-Math.random())}function ff(i){i!==void 0&&(Yl=i);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function df(i){return i*Dr}function pf(i){return i*Hr}function mf(i){return(i&i-1)===0&&i!==0}function gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vf(i,t,e,n,r){const s=Math.cos,a=Math.sin,l=s(e/2),c=a(e/2),u=s((t+n)/2),f=a((t+n)/2),d=s((t-n)/2),g=a((t-n)/2),_=s((n-t)/2),y=a((n-t)/2);switch(r){case"XYX":i.set(l*f,c*d,c*g,l*u);break;case"YZY":i.set(c*g,l*f,c*d,l*u);break;case"ZXZ":i.set(c*d,c*g,l*f,l*u);break;case"XZX":i.set(l*f,c*y,c*_,l*u);break;case"YXY":i.set(c*_,l*f,c*y,l*u);break;case"ZYZ":i.set(c*y,c*_,l*f,l*u);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function tr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hs={DEG2RAD:Dr,RAD2DEG:Hr,generateUUID:Li,clamp:ne,euclideanModulo:rl,mapLinear:nf,inverseLerp:rf,lerp:Lr,damp:sf,pingpong:of,smoothstep:af,smootherstep:lf,randInt:cf,randFloat:uf,randFloatSpread:hf,seededRandom:ff,degToRad:df,radToDeg:pf,isPowerOfTwo:mf,ceilPowerOfTwo:gf,floorPowerOfTwo:_f,setQuaternionFromProperEuler:vf,normalize:rn,denormalize:tr};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ri{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,l){let c=n[r+0],u=n[r+1],f=n[r+2],d=n[r+3],g=s[a+0],_=s[a+1],y=s[a+2],b=s[a+3];if(l<=0){t[e+0]=c,t[e+1]=u,t[e+2]=f,t[e+3]=d;return}if(l>=1){t[e+0]=g,t[e+1]=_,t[e+2]=y,t[e+3]=b;return}if(d!==b||c!==g||u!==_||f!==y){let v=c*g+u*_+f*y+d*b;v<0&&(g=-g,_=-_,y=-y,b=-b,v=-v);let m=1-l;if(v<.9995){const D=Math.acos(v),R=Math.sin(D);m=Math.sin(m*D)/R,l=Math.sin(l*D)/R,c=c*m+g*l,u=u*m+_*l,f=f*m+y*l,d=d*m+b*l}else{c=c*m+g*l,u=u*m+_*l,f=f*m+y*l,d=d*m+b*l;const D=1/Math.sqrt(c*c+u*u+f*f+d*d);c*=D,u*=D,f*=D,d*=D}}t[e]=c,t[e+1]=u,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const l=n[r],c=n[r+1],u=n[r+2],f=n[r+3],d=s[a],g=s[a+1],_=s[a+2],y=s[a+3];return t[e]=l*y+f*d+c*_-u*g,t[e+1]=c*y+f*g+u*d-l*_,t[e+2]=u*y+f*_+l*g-c*d,t[e+3]=f*y-l*d-c*g-u*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,l=Math.cos,c=Math.sin,u=l(n/2),f=l(r/2),d=l(s/2),g=c(n/2),_=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=g*f*d+u*_*y,this._y=u*_*d-g*f*y,this._z=u*f*y+g*_*d,this._w=u*f*d-g*_*y;break;case"YXZ":this._x=g*f*d+u*_*y,this._y=u*_*d-g*f*y,this._z=u*f*y-g*_*d,this._w=u*f*d+g*_*y;break;case"ZXY":this._x=g*f*d-u*_*y,this._y=u*_*d+g*f*y,this._z=u*f*y+g*_*d,this._w=u*f*d-g*_*y;break;case"ZYX":this._x=g*f*d-u*_*y,this._y=u*_*d+g*f*y,this._z=u*f*y-g*_*d,this._w=u*f*d+g*_*y;break;case"YZX":this._x=g*f*d+u*_*y,this._y=u*_*d+g*f*y,this._z=u*f*y-g*_*d,this._w=u*f*d-g*_*y;break;case"XZY":this._x=g*f*d-u*_*y,this._y=u*_*d-g*f*y,this._z=u*f*y+g*_*d,this._w=u*f*d+g*_*y;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],l=e[5],c=e[9],u=e[2],f=e[6],d=e[10],g=n+l+d;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(f-c)*_,this._y=(s-u)*_,this._z=(a-r)*_}else if(n>l&&n>d){const _=2*Math.sqrt(1+n-l-d);this._w=(f-c)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+u)/_}else if(l>d){const _=2*Math.sqrt(1+l-n-d);this._w=(s-u)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(c+f)/_}else{const _=2*Math.sqrt(1+d-n-l);this._w=(a-r)/_,this._x=(s+u)/_,this._y=(c+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,l=e._x,c=e._y,u=e._z,f=e._w;return this._x=n*f+a*l+r*u-s*c,this._y=r*f+a*c+s*l-n*u,this._z=s*f+a*u+n*c-r*l,this._w=a*f-n*l-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,s=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,r=-r,s=-s,a=-a,l=-l);let c=1-e;if(l<.9995){const u=Math.acos(l),f=Math.sin(u);c=Math.sin(c*u)/f,e=Math.sin(e*u)/f,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,l=t.z,c=t.w,u=2*(a*r-l*n),f=2*(l*e-s*r),d=2*(s*n-a*e);return this.x=e+c*u+a*d-l*f,this.y=n+c*f+l*u-s*d,this.z=r+c*d+s*f-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,l=e.y,c=e.z;return this.x=r*c-s*l,this.y=s*a-n*c,this.z=n*l-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new k,jl=new Ri;class Qt{constructor(t,e,n,r,s,a,l,c,u){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,c,u)}set(t,e,n,r,s,a,l,c,u){const f=this.elements;return f[0]=t,f[1]=r,f[2]=l,f[3]=e,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[3],c=n[6],u=n[1],f=n[4],d=n[7],g=n[2],_=n[5],y=n[8],b=r[0],v=r[3],m=r[6],D=r[1],R=r[4],w=r[7],I=r[2],N=r[5],F=r[8];return s[0]=a*b+l*D+c*I,s[3]=a*v+l*R+c*N,s[6]=a*m+l*w+c*F,s[1]=u*b+f*D+d*I,s[4]=u*v+f*R+d*N,s[7]=u*m+f*w+d*F,s[2]=g*b+_*D+y*I,s[5]=g*v+_*R+y*N,s[8]=g*m+_*w+y*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],c=t[6],u=t[7],f=t[8];return e*a*f-e*l*u-n*s*f+n*l*c+r*s*u-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],c=t[6],u=t[7],f=t[8],d=f*a-l*u,g=l*c-f*s,_=u*s-a*c,y=e*d+n*g+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return t[0]=d*b,t[1]=(r*u-f*n)*b,t[2]=(l*n-r*a)*b,t[3]=g*b,t[4]=(f*e-r*c)*b,t[5]=(r*s-l*e)*b,t[6]=_*b,t[7]=(n*c-u*e)*b,t[8]=(a*e-n*s)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*l)+a+t,-r*u,r*c,-r*(-u*a+c*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Qt,ql=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){const i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xe&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(r.r=rr(r.r),r.g=rr(r.g),r.b=rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?qs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:t,whitePoint:n,transfer:qs,toXYZ:ql,fromXYZ:Zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:ql,fromXYZ:Zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}const le=xf();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class Mf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=zr("canvas")),zi.width=t.width,zi.height=t.height;const r=zi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Jn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sf=0;class sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(mo(r[a].image)):s.push(mo(r[a]))}else s=mo(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let yf=0;const go=new k;class je extends Di{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=Kn,r=Kn,s=$e,a=Ai,l=Pn,c=En,u=je.DEFAULT_ANISOTROPY,f=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Li(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sa:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sa:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=iu;je.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,r=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],f=c[4],d=c[8],g=c[1],_=c[5],y=c[9],b=c[2],v=c[6],m=c[10];if(Math.abs(f-g)<.01&&Math.abs(d-b)<.01&&Math.abs(y-v)<.01){if(Math.abs(f+g)<.1&&Math.abs(d+b)<.1&&Math.abs(y+v)<.1&&Math.abs(u+_+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(u+1)/2,w=(_+1)/2,I=(m+1)/2,N=(f+g)/4,F=(d+b)/4,q=(y+v)/4;return R>w&&R>I?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=N/n,s=F/n):w>I?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=N/r,s=q/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=F/s,r=q/s),this.set(n,r,s,e),this}let D=Math.sqrt((v-y)*(v-y)+(d-b)*(d-b)+(g-f)*(g-f));return Math.abs(D)<.001&&(D=1),this.x=(v-y)/D,this.y=(d-b)/D,this.z=(g-f)/D,this.w=Math.acos((u+_+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ef extends Di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new je(r);this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new sl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Ef{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class du extends je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tf extends je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),hs.subVectors(this.max,yr),Vi.subVectors(t.a,yr),Hi.subVectors(t.b,yr),Gi.subVectors(t.c,yr),ni.subVectors(Hi,Vi),ii.subVectors(Gi,Hi),vi.subVectors(Vi,Gi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-vi.z,vi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,vi.z,0,-vi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-vi.y,vi.x,0];return!_o(e,Vi,Hi,Gi,hs)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,Vi,Hi,Gi,hs))?!1:(fs.crossVectors(ni,ii),e=[fs.x,fs.y,fs.z],_o(e,Vi,Hi,Gi,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new k,new k,new k,new k,new k,new k,new k,new k],An=new k,us=new Kr,Vi=new k,Hi=new k,Gi=new k,ni=new k,ii=new k,vi=new k,yr=new k,hs=new k,fs=new k,xi=new k;function _o(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){xi.fromArray(i,s);const l=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),c=t.dot(xi),u=e.dot(xi),f=n.dot(xi);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>l)return!1}return!0}const bf=new Kr,Er=new k,vo=new k;class to{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Er,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(vo)),this.expandByPoint(Er.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xn=new k,xo=new k,ds=new k,ri=new k,Mo=new k,ps=new k,So=new k;class ol{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){xo.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(xo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ds),l=ri.dot(this.direction),c=-ri.dot(ds),u=ri.lengthSq(),f=Math.abs(1-a*a);let d,g,_,y;if(f>0)if(d=a*c-l,g=a*l-c,y=s*f,d>=0)if(g>=-y)if(g<=y){const b=1/f;d*=b,g*=b,_=d*(d+a*g+2*l)+g*(a*d+g+2*c)+u}else g=s,d=Math.max(0,-(a*g+l)),_=-d*d+g*(g+2*c)+u;else g=-s,d=Math.max(0,-(a*g+l)),_=-d*d+g*(g+2*c)+u;else g<=-y?(d=Math.max(0,-(-a*s+l)),g=d>0?-s:Math.min(Math.max(-s,-c),s),_=-d*d+g*(g+2*c)+u):g<=y?(d=0,g=Math.min(Math.max(-s,-c),s),_=g*(g+2*c)+u):(d=Math.max(0,-(a*s+l)),g=d>0?s:Math.min(Math.max(-s,-c),s),_=-d*d+g*(g+2*c)+u);else g=a>0?-s:s,d=Math.max(0,-(a*g+l)),_=-d*d+g*(g+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xo).addScaledVector(ds,g),_}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,l,c;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,g=this.origin;return u>=0?(n=(t.min.x-g.x)*u,r=(t.max.x-g.x)*u):(n=(t.max.x-g.x)*u,r=(t.min.x-g.x)*u),f>=0?(s=(t.min.y-g.y)*f,a=(t.max.y-g.y)*f):(s=(t.max.y-g.y)*f,a=(t.min.y-g.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(l=(t.min.z-g.z)*d,c=(t.max.z-g.z)*d):(l=(t.max.z-g.z)*d,c=(t.min.z-g.z)*d),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,r,s){Mo.subVectors(e,t),ps.subVectors(n,t),So.crossVectors(Mo,ps);let a=this.direction.dot(So),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ri.subVectors(this.origin,t);const c=l*this.direction.dot(ps.crossVectors(ri,ps));if(c<0)return null;const u=l*this.direction.dot(Mo.cross(ri));if(u<0||c+u>a)return null;const f=-l*ri.dot(So);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,n,r,s,a,l,c,u,f,d,g,_,y,b,v){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,l,c,u,f,d,g,_,y,b,v)}set(t,e,n,r,s,a,l,c,u,f,d,g,_,y,b,v){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=l,m[13]=c,m[2]=u,m[6]=f,m[10]=d,m[14]=g,m[3]=_,m[7]=y,m[11]=b,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/ki.setFromMatrixColumn(t,0).length(),s=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const g=a*f,_=a*d,y=l*f,b=l*d;e[0]=c*f,e[4]=-c*d,e[8]=u,e[1]=_+y*u,e[5]=g-b*u,e[9]=-l*c,e[2]=b-g*u,e[6]=y+_*u,e[10]=a*c}else if(t.order==="YXZ"){const g=c*f,_=c*d,y=u*f,b=u*d;e[0]=g+b*l,e[4]=y*l-_,e[8]=a*u,e[1]=a*d,e[5]=a*f,e[9]=-l,e[2]=_*l-y,e[6]=b+g*l,e[10]=a*c}else if(t.order==="ZXY"){const g=c*f,_=c*d,y=u*f,b=u*d;e[0]=g-b*l,e[4]=-a*d,e[8]=y+_*l,e[1]=_+y*l,e[5]=a*f,e[9]=b-g*l,e[2]=-a*u,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){const g=a*f,_=a*d,y=l*f,b=l*d;e[0]=c*f,e[4]=y*u-_,e[8]=g*u+b,e[1]=c*d,e[5]=b*u+g,e[9]=_*u-y,e[2]=-u,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){const g=a*c,_=a*u,y=l*c,b=l*u;e[0]=c*f,e[4]=b-g*d,e[8]=y*d+_,e[1]=d,e[5]=a*f,e[9]=-l*f,e[2]=-u*f,e[6]=_*d+y,e[10]=g-b*d}else if(t.order==="XZY"){const g=a*c,_=a*u,y=l*c,b=l*u;e[0]=c*f,e[4]=-d,e[8]=u*f,e[1]=g*d+b,e[5]=a*f,e[9]=_*d-y,e[2]=y*d-_,e[6]=l*f,e[10]=b*d+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,wf)}lookAt(t,e,n){const r=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),si.crossVectors(n,pn),si.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),si.crossVectors(n,pn)),si.normalize(),ms.crossVectors(pn,si),r[0]=si.x,r[4]=ms.x,r[8]=pn.x,r[1]=si.y,r[5]=ms.y,r[9]=pn.y,r[2]=si.z,r[6]=ms.z,r[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],l=n[4],c=n[8],u=n[12],f=n[1],d=n[5],g=n[9],_=n[13],y=n[2],b=n[6],v=n[10],m=n[14],D=n[3],R=n[7],w=n[11],I=n[15],N=r[0],F=r[4],q=r[8],T=r[12],x=r[1],A=r[5],Y=r[9],H=r[13],$=r[2],Q=r[6],B=r[10],G=r[14],tt=r[3],ut=r[7],ht=r[11],Tt=r[15];return s[0]=a*N+l*x+c*$+u*tt,s[4]=a*F+l*A+c*Q+u*ut,s[8]=a*q+l*Y+c*B+u*ht,s[12]=a*T+l*H+c*G+u*Tt,s[1]=f*N+d*x+g*$+_*tt,s[5]=f*F+d*A+g*Q+_*ut,s[9]=f*q+d*Y+g*B+_*ht,s[13]=f*T+d*H+g*G+_*Tt,s[2]=y*N+b*x+v*$+m*tt,s[6]=y*F+b*A+v*Q+m*ut,s[10]=y*q+b*Y+v*B+m*ht,s[14]=y*T+b*H+v*G+m*Tt,s[3]=D*N+R*x+w*$+I*tt,s[7]=D*F+R*A+w*Q+I*ut,s[11]=D*q+R*Y+w*B+I*ht,s[15]=D*T+R*H+w*G+I*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],l=t[5],c=t[9],u=t[13],f=t[2],d=t[6],g=t[10],_=t[14],y=t[3],b=t[7],v=t[11],m=t[15],D=c*_-u*g,R=l*_-u*d,w=l*g-c*d,I=a*_-u*f,N=a*g-c*f,F=a*d-l*f;return e*(b*D-v*R+m*w)-n*(y*D-v*I+m*N)+r*(y*R-b*I+m*F)-s*(y*w-b*N+v*F)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],l=t[5],c=t[6],u=t[7],f=t[8],d=t[9],g=t[10],_=t[11],y=t[12],b=t[13],v=t[14],m=t[15],D=d*v*u-b*g*u+b*c*_-l*v*_-d*c*m+l*g*m,R=y*g*u-f*v*u-y*c*_+a*v*_+f*c*m-a*g*m,w=f*b*u-y*d*u+y*l*_-a*b*_-f*l*m+a*d*m,I=y*d*c-f*b*c-y*l*g+a*b*g+f*l*v-a*d*v,N=e*D+n*R+r*w+s*I;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return t[0]=D*F,t[1]=(b*g*s-d*v*s-b*r*_+n*v*_+d*r*m-n*g*m)*F,t[2]=(l*v*s-b*c*s+b*r*u-n*v*u-l*r*m+n*c*m)*F,t[3]=(d*c*s-l*g*s-d*r*u+n*g*u+l*r*_-n*c*_)*F,t[4]=R*F,t[5]=(f*v*s-y*g*s+y*r*_-e*v*_-f*r*m+e*g*m)*F,t[6]=(y*c*s-a*v*s-y*r*u+e*v*u+a*r*m-e*c*m)*F,t[7]=(a*g*s-f*c*s+f*r*u-e*g*u-a*r*_+e*c*_)*F,t[8]=w*F,t[9]=(y*d*s-f*b*s-y*n*_+e*b*_+f*n*m-e*d*m)*F,t[10]=(a*b*s-y*l*s+y*n*u-e*b*u-a*n*m+e*l*m)*F,t[11]=(f*l*s-a*d*s-f*n*u+e*d*u+a*n*_-e*l*_)*F,t[12]=I*F,t[13]=(f*b*r-y*d*r+y*n*g-e*b*g-f*n*v+e*d*v)*F,t[14]=(y*l*r-a*b*r-y*n*c+e*b*c+a*n*v-e*l*v)*F,t[15]=(a*d*r-f*l*r+f*n*c-e*d*c-a*n*g+e*l*g)*F,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,l=t.y,c=t.z,u=s*a,f=s*l;return this.set(u*a+n,u*l-r*c,u*c+r*l,0,u*l+r*c,f*l+n,f*c-r*a,0,u*c-r*l,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,l=e._z,c=e._w,u=s+s,f=a+a,d=l+l,g=s*u,_=s*f,y=s*d,b=a*f,v=a*d,m=l*d,D=c*u,R=c*f,w=c*d,I=n.x,N=n.y,F=n.z;return r[0]=(1-(b+m))*I,r[1]=(_+w)*I,r[2]=(y-R)*I,r[3]=0,r[4]=(_-w)*N,r[5]=(1-(g+m))*N,r[6]=(v+D)*N,r[7]=0,r[8]=(y+R)*F,r[9]=(v-D)*F,r[10]=(1-(g+b))*F,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=ki.set(r[0],r[1],r[2]).length();const a=ki.set(r[4],r[5],r[6]).length(),l=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),wn.copy(this);const u=1/s,f=1/a,d=1/l;return wn.elements[0]*=u,wn.elements[1]*=u,wn.elements[2]*=u,wn.elements[4]*=f,wn.elements[5]*=f,wn.elements[6]*=f,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,e.setFromRotationMatrix(wn),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,a,l=Fn,c=!1){const u=this.elements,f=2*s/(e-t),d=2*s/(n-r),g=(e+t)/(e-t),_=(n+r)/(n-r);let y,b;if(c)y=s/(a-s),b=a*s/(a-s);else if(l===Fn)y=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(l===Zs)y=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=d,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,s,a,l=Fn,c=!1){const u=this.elements,f=2/(e-t),d=2/(n-r),g=-(e+t)/(e-t),_=-(n+r)/(n-r);let y,b;if(c)y=1/(a-s),b=a/(a-s);else if(l===Fn)y=-2/(a-s),b=-(a+s)/(a-s);else if(l===Zs)y=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=d,u[9]=0,u[13]=_,u[2]=0,u[6]=0,u[10]=y,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new k,wn=new Pe,Af=new k(0,0,0),wf=new k(1,1,1),si=new k,ms=new k,pn=new k,Kl=new Pe,Jl=new Ri;class Vn{constructor(t=0,e=0,n=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],f=r[9],d=r[2],g=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,_),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cf=0;const $l=new k,Wi=new Ri,Yn=new Pe,gs=new k,Tr=new k,Rf=new k,Pf=new Ri,Ql=new k(1,0,0),tc=new k(0,1,0),ec=new k(0,0,1),nc={type:"added"},Df={type:"removed"},Xi={type:"childadded",child:null},yo={type:"childremoved",child:null};class un extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const t=new k,e=new Vn,n=new Ri,r=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Qt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Ql,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ql,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Tr,gs,this.up):Yn.lookAt(gs,Tr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const d=c[u];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(t.materials,this.material[c]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(t.animations,c))}}if(e){const l=a(t.geometries),c=a(t.materials),u=a(t.textures),f=a(t.images),d=a(t.shapes),g=a(t.skeletons),_=a(t.animations),y=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),g.length>0&&(n.skeletons=g),_.length>0&&(n.animations=_),y.length>0&&(n.nodes=y)}return n.object=r,n;function a(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}un.DEFAULT_UP=new k(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new k,jn=new k,Eo=new k,qn=new k,Yi=new k,ji=new k,ic=new k,To=new k,bo=new k,Ao=new k,wo=new De,Co=new De,Ro=new De;class Rn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Cn.subVectors(t,e),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Cn.subVectors(r,e),jn.subVectors(n,e),Eo.subVectors(t,e);const a=Cn.dot(Cn),l=Cn.dot(jn),c=Cn.dot(Eo),u=jn.dot(jn),f=jn.dot(Eo),d=a*u-l*l;if(d===0)return s.set(0,0,0),null;const g=1/d,_=(u*c-l*f)*g,y=(a*f-l*c)*g;return s.set(1-_-y,y,_)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,r,s,a,l,c){return this.getBarycoord(t,e,n,r,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(l,qn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return wo.setScalar(0),Co.setScalar(0),Ro.setScalar(0),wo.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,n),Ro.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(wo,s.x),a.addScaledVector(Co,s.y),a.addScaledVector(Ro,s.z),a}static isFrontFacing(t,e,n,r){return Cn.subVectors(n,e),jn.subVectors(t,e),Cn.cross(jn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Cn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,l;Yi.subVectors(r,n),ji.subVectors(s,n),To.subVectors(t,n);const c=Yi.dot(To),u=ji.dot(To);if(c<=0&&u<=0)return e.copy(n);bo.subVectors(t,r);const f=Yi.dot(bo),d=ji.dot(bo);if(f>=0&&d<=f)return e.copy(r);const g=c*d-f*u;if(g<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Yi,a);Ao.subVectors(t,s);const _=Yi.dot(Ao),y=ji.dot(Ao);if(y>=0&&_<=y)return e.copy(s);const b=_*u-c*y;if(b<=0&&u>=0&&y<=0)return l=u/(u-y),e.copy(n).addScaledVector(ji,l);const v=f*y-_*d;if(v<=0&&d-f>=0&&_-y>=0)return ic.subVectors(s,r),l=(d-f)/(d-f+(_-y)),e.copy(r).addScaledVector(ic,l);const m=1/(v+b+g);return a=b*m,l=g*m,e.copy(n).addScaledVector(Yi,a).addScaledVector(ji,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=le.workingColorSpace){if(t=rl(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Po(a,s,t+1/3),this.g=Po(a,s,t),this.b=Po(a,s,t-1/3)}return le.colorSpaceToWorking(this,r),this}setStyle(t,e=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return le.workingToColorSpace(Je.copy(this),t),Math.round(ne(Je.r*255,0,255))*65536+Math.round(ne(Je.g*255,0,255))*256+Math.round(ne(Je.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Je.copy(this),e);const n=Je.r,r=Je.g,s=Je.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let c,u;const f=(l+a)/2;if(l===a)c=0,u=0;else{const d=a-l;switch(u=f<=.5?d/(a+l):d/(2-a-l),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=u,t.l=f,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Sn){le.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,r=Je.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(_s);const n=Lr(oi.h,_s.h,e),r=Lr(oi.s,_s.s,e),s=Lr(oi.l,_s.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Jt;Jt.NAMES=mu;let Lf=0;class dr extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=ir,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Zo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jr extends dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new k,vs=new St;let Uf=0;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=tr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class gu extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _u extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qe extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let If=0;const Mn=new Pe,Do=new un,qi=new k,mn=new Kr,br=new Kr,Ve=new k;class tn extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fu(t)?_u:gu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const l=e[s];br.setFromBufferAttribute(l),this.morphTargetsRelative?(Ve.addVectors(mn.min,br.min),mn.expandByPoint(Ve),Ve.addVectors(mn.max,br.max),mn.expandByPoint(Ve)):(mn.expandByPoint(br.min),mn.expandByPoint(br.max))}mn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){const l=e[s],c=this.morphTargetsRelative;for(let u=0,f=l.count;u<f;u++)Ve.fromBufferAttribute(l,u),c&&(qi.fromBufferAttribute(t,u),Ve.add(qi)),r=Math.max(r,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let q=0;q<n.count;q++)l[q]=new k,c[q]=new k;const u=new k,f=new k,d=new k,g=new St,_=new St,y=new St,b=new k,v=new k;function m(q,T,x){u.fromBufferAttribute(n,q),f.fromBufferAttribute(n,T),d.fromBufferAttribute(n,x),g.fromBufferAttribute(s,q),_.fromBufferAttribute(s,T),y.fromBufferAttribute(s,x),f.sub(u),d.sub(u),_.sub(g),y.sub(g);const A=1/(_.x*y.y-y.x*_.y);isFinite(A)&&(b.copy(f).multiplyScalar(y.y).addScaledVector(d,-_.y).multiplyScalar(A),v.copy(d).multiplyScalar(_.x).addScaledVector(f,-y.x).multiplyScalar(A),l[q].add(b),l[T].add(b),l[x].add(b),c[q].add(v),c[T].add(v),c[x].add(v))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let q=0,T=D.length;q<T;++q){const x=D[q],A=x.start,Y=x.count;for(let H=A,$=A+Y;H<$;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const R=new k,w=new k,I=new k,N=new k;function F(q){I.fromBufferAttribute(r,q),N.copy(I);const T=l[q];R.copy(T),R.sub(I.multiplyScalar(I.dot(T))).normalize(),w.crossVectors(N,T);const A=w.dot(c[q])<0?-1:1;a.setXYZW(q,R.x,R.y,R.z,A)}for(let q=0,T=D.length;q<T;++q){const x=D[q],A=x.start,Y=x.count;for(let H=A,$=A+Y;H<$;H+=3)F(t.getX(H+0)),F(t.getX(H+1)),F(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,_=n.count;g<_;g++)n.setXYZ(g,0,0,0);const r=new k,s=new k,a=new k,l=new k,c=new k,u=new k,f=new k,d=new k;if(t)for(let g=0,_=t.count;g<_;g+=3){const y=t.getX(g+0),b=t.getX(g+1),v=t.getX(g+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,b),a.fromBufferAttribute(e,v),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),l.add(f),c.add(f),u.add(f),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let g=0,_=e.count;g<_;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(l,c){const u=l.array,f=l.itemSize,d=l.normalized,g=new u.constructor(c.length*f);let _=0,y=0;for(let b=0,v=c.length;b<v;b++){l.isInterleavedBufferAttribute?_=c[b]*l.data.stride+l.offset:_=c[b]*f;for(let m=0;m<f;m++)g[y++]=u[_++]}return new Qe(g,f,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=t(c,n);e.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let f=0,d=u.length;f<d;f++){const g=u[f],_=t(g,n);c.push(_)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let d=0,g=u.length;d<g;d++){const _=u[d];f.push(_.toJSON(t.data))}f.length>0&&(r[c]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(e))}const s=t.morphAttributes;for(const u in s){const f=[],d=s[u];for(let g=0,_=d.length;g<_;g++)f.push(d[g].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,f=a.length;u<f;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new Pe,Mi=new ol,xs=new to,sc=new k,Ms=new k,Ss=new k,ys=new k,Lo=new k,Es=new k,oc=new k,Ts=new k;class _n extends un{constructor(t=new tn,e=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){Es.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=l[c],d=s[c];f!==0&&(Lo.fromBufferAttribute(d,t),a?Es.addScaledVector(Lo,f):Es.addScaledVector(Lo.sub(e),f))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),Mi.copy(t.ray).recast(t.near),!(xs.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(xs,sc)===null||Mi.origin.distanceToSquared(sc)>(t.far-t.near)**2))&&(rc.copy(s).invert(),Mi.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,g=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(a))for(let y=0,b=g.length;y<b;y++){const v=g[y],m=a[v.materialIndex],D=Math.max(v.start,_.start),R=Math.min(l.count,Math.min(v.start+v.count,_.start+_.count));for(let w=D,I=R;w<I;w+=3){const N=l.getX(w),F=l.getX(w+1),q=l.getX(w+2);r=bs(this,m,t,n,u,f,d,N,F,q),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const y=Math.max(0,_.start),b=Math.min(l.count,_.start+_.count);for(let v=y,m=b;v<m;v+=3){const D=l.getX(v),R=l.getX(v+1),w=l.getX(v+2);r=bs(this,a,t,n,u,f,d,D,R,w),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,b=g.length;y<b;y++){const v=g[y],m=a[v.materialIndex],D=Math.max(v.start,_.start),R=Math.min(c.count,Math.min(v.start+v.count,_.start+_.count));for(let w=D,I=R;w<I;w+=3){const N=w,F=w+1,q=w+2;r=bs(this,m,t,n,u,f,d,N,F,q),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const y=Math.max(0,_.start),b=Math.min(c.count,_.start+_.count);for(let v=y,m=b;v<m;v+=3){const D=v,R=v+1,w=v+2;r=bs(this,a,t,n,u,f,d,D,R,w),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function Nf(i,t,e,n,r,s,a,l){let c;if(t.side===ln?c=n.intersectTriangle(a,s,r,!0,l):c=n.intersectTriangle(r,s,a,t.side===fi,l),c===null)return null;Ts.copy(l),Ts.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Ts);return u<e.near||u>e.far?null:{distance:u,point:Ts.clone(),object:i}}function bs(i,t,e,n,r,s,a,l,c,u){i.getVertexPosition(l,Ms),i.getVertexPosition(c,Ss),i.getVertexPosition(u,ys);const f=Nf(i,t,e,n,Ms,Ss,ys,oc);if(f){const d=new k;Rn.getBarycoord(oc,Ms,Ss,ys,d),r&&(f.uv=Rn.getInterpolatedAttribute(r,l,c,u,d,new St)),s&&(f.uv1=Rn.getInterpolatedAttribute(s,l,c,u,d,new St)),a&&(f.normal=Rn.getInterpolatedAttribute(a,l,c,u,d,new k),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const g={a:l,b:c,c:u,normal:new k,materialIndex:0};Rn.getNormal(Ms,Ss,ys,g.normal),f.face=g,f.barycoord=d}return f}class $r extends tn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],d=[];let g=0,_=0;y("z","y","x",-1,-1,n,e,t,a,s,0),y("z","y","x",1,-1,n,e,-t,a,s,1),y("x","z","y",1,1,t,n,e,r,a,2),y("x","z","y",1,-1,t,n,-e,r,a,3),y("x","y","z",1,-1,t,e,n,r,s,4),y("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(d,2));function y(b,v,m,D,R,w,I,N,F,q,T){const x=w/F,A=I/q,Y=w/2,H=I/2,$=N/2,Q=F+1,B=q+1;let G=0,tt=0;const ut=new k;for(let ht=0;ht<B;ht++){const Tt=ht*A-H;for(let Ht=0;Ht<Q;Ht++){const Gt=Ht*x-Y;ut[b]=Gt*D,ut[v]=Tt*R,ut[m]=$,u.push(ut.x,ut.y,ut.z),ut[b]=0,ut[v]=0,ut[m]=N>0?1:-1,f.push(ut.x,ut.y,ut.z),d.push(Ht/F),d.push(1-ht/q),G+=1}}for(let ht=0;ht<q;ht++)for(let Tt=0;Tt<F;Tt++){const Ht=g+Tt+Q*ht,Gt=g+Tt+Q*(ht+1),pe=g+(Tt+1)+Q*(ht+1),ce=g+(Tt+1)+Q*ht;c.push(Ht,Gt,ce),c.push(Gt,pe,ce),tt+=6}l.addGroup(_,tt,T),_+=tt,g+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=ur(i[e]);for(const r in n)t[r]=n[r]}return t}function Ff(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Ks={clone:ur,merge:sn};var Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xu extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new k,ac=new St,lc=new St;class yn extends xu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,ac,lc),e.subVectors(lc,ac)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ki=1;class zf extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Zi,Ki,t,e);r.layers=this.layers,this.add(r);const s=new yn(Zi,Ki,t,e);s.layers=this.layers,this.add(s);const a=new yn(Zi,Ki,t,e);a.layers=this.layers,this.add(a);const l=new yn(Zi,Ki,t,e);l.layers=this.layers,this.add(l);const c=new yn(Zi,Ki,t,e);c.layers=this.layers,this.add(c);const u=new yn(Zi,Ki,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,l,c]=e;for(const u of e)this.remove(u);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,f]=this.children,d=t.getRenderTarget(),g=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(d,g,_),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Mu extends je{constructor(t=[],e=Ci,n,r,s,a,l,c,u,f){super(t,e,n,r,s,a,l,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Su extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Mu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $r(5,5,5),s=new Ye({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:On});s.uniforms.tEquirect.value=e;const a=new _n(r,s),l=e.minFilter;return e.minFilter===Ai&&(e.minFilter=$e),new zf(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class As extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vf={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const b of t.hand.values()){const v=e.getJointPose(b,n),m=this._getHandJoint(u,b);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],g=f.position.distanceTo(d.position),_=.02,y=.005;u.inputState.pinching&&g>_+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&g<=_-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Hf extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gf extends je{constructor(t=null,e=1,n=1,r,s,a,l,c,u=Xe,f=Xe,d,g){super(null,a,l,c,u,f,r,s,d,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Io=new k,kf=new k,Wf=new Qt;class li{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Io.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Io),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wf.getNormalMatrix(t),r=this.coplanarPoint(Io).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new to,Xf=new St(.5,.5),ws=new k;class yu{constructor(t=new li,e=new li,n=new li,r=new li,s=new li,a=new li){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){const r=this.planes,s=t.elements,a=s[0],l=s[1],c=s[2],u=s[3],f=s[4],d=s[5],g=s[6],_=s[7],y=s[8],b=s[9],v=s[10],m=s[11],D=s[12],R=s[13],w=s[14],I=s[15];if(r[0].setComponents(u-a,_-f,m-y,I-D).normalize(),r[1].setComponents(u+a,_+f,m+y,I+D).normalize(),r[2].setComponents(u+l,_+d,m+b,I+R).normalize(),r[3].setComponents(u-l,_-d,m-b,I-R).normalize(),n)r[4].setComponents(c,g,v,w).normalize(),r[5].setComponents(u-c,_-g,m-v,I-w).normalize();else if(r[4].setComponents(u-c,_-g,m-v,I-w).normalize(),e===Fn)r[5].setComponents(u+c,_+g,m+v,I+w).normalize();else if(e===Zs)r[5].setComponents(c,g,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);const e=Xf.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ws.x=r.normal.x>0?t.max.x:t.min.x,ws.y=r.normal.y>0?t.max.y:t.min.y,ws.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends dr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cc=new Pe,za=new ol,Cs=new to,Rs=new k;class ll extends un{constructor(t=new tn,e=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=s,t.ray.intersectsSphere(Cs)===!1)return;cc.copy(r).invert(),za.copy(t.ray).applyMatrix4(cc);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=n.index,d=n.attributes.position;if(u!==null){const g=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=g,b=_;y<b;y++){const v=u.getX(y);Rs.fromBufferAttribute(d,v),uc(Rs,v,c,r,t,e,this)}}else{const g=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=g,b=_;y<b;y++)Rs.fromBufferAttribute(d,y),uc(Rs,y,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function uc(i,t,e,n,r,s,a){const l=za.distanceSqToPoint(i);if(l<e){const c=new k;za.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Yf extends je{constructor(t,e,n,r,s,a,l,c,u){super(t,e,n,r,s,a,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gr extends je{constructor(t,e,n=zn,r,s,a,l=Xe,c=Xe,u,f=$n,d=1){if(f!==$n&&f!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:d};super(g,r,s,a,l,c,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class jf extends Gr{constructor(t,e=zn,n=Ci,r,s,a=Xe,l=Xe,c,u=$n){const f={width:t,height:t,depth:1},d=[f,f,f,f,f,f];super(t,t,e,n,r,s,a,l,c,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Eu extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let l=0,c=s-1,u;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),u=n[r]-a,u<0)l=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const f=n[r],g=n[r+1]-f,_=(a-f)/g;return(r+_)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),l=this.getPoint(s),c=e||(a.isVector2?new St:new k);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new k,r=[],s=[],a=[],l=new k,c=new Pe;for(let _=0;_<=t;_++){const y=_/t;r[_]=this.getTangentAt(y,new k)}s[0]=new k,a[0]=new k;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),g=Math.abs(r[0].z);f<=u&&(u=f,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),g<=u&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),a[0].crossVectors(r[0],s[0]);for(let _=1;_<=t;_++){if(s[_]=s[_-1].clone(),a[_]=a[_-1].clone(),l.crossVectors(r[_-1],r[_]),l.length()>Number.EPSILON){l.normalize();const y=Math.acos(ne(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(c.makeRotationAxis(l,y))}a[_].crossVectors(r[_],s[_])}if(e===!0){let _=Math.acos(ne(s[0].dot(s[t]),-1,1));_/=t,r[0].dot(l.crossVectors(s[0],s[t]))>0&&(_=-_);for(let y=1;y<=t;y++)s[y].applyMatrix4(c.makeRotationAxis(r[y],_*y)),a[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cl extends Hn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new St){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const l=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),g=c-this.aX,_=u-this.aY;c=g*f-_*d+this.aX,u=g*d+_*f+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qf extends cl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ul(){let i=0,t=0,e=0,n=0;function r(s,a,l,c){i=s,t=l,e=-3*s+3*a-2*l-c,n=2*s-2*a+l+c}return{initCatmullRom:function(s,a,l,c,u){r(a,l,u*(l-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,l,c,u,f,d){let g=(a-s)/u-(l-s)/(u+f)+(l-a)/f,_=(l-a)/f-(c-a)/(f+d)+(c-l)/d;g*=f,_*=f,r(a,l,g,_)},calc:function(s){const a=s*s,l=a*s;return i+t*s+e*a+n*l}}}const Ps=new k,No=new ul,Fo=new ul,Oo=new ul;class Zf extends Hn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new k){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:c===0&&l===s-1&&(l=s-2,c=1);let u,f;this.closed||l>0?u=r[(l-1)%s]:(Ps.subVectors(r[0],r[1]).add(r[0]),u=Ps);const d=r[l%s],g=r[(l+1)%s];if(this.closed||l+2<s?f=r[(l+2)%s]:(Ps.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let y=Math.pow(u.distanceToSquared(d),_),b=Math.pow(d.distanceToSquared(g),_),v=Math.pow(g.distanceToSquared(f),_);b<1e-4&&(b=1),y<1e-4&&(y=b),v<1e-4&&(v=b),No.initNonuniformCatmullRom(u.x,d.x,g.x,f.x,y,b,v),Fo.initNonuniformCatmullRom(u.y,d.y,g.y,f.y,y,b,v),Oo.initNonuniformCatmullRom(u.z,d.z,g.z,f.z,y,b,v)}else this.curveType==="catmullrom"&&(No.initCatmullRom(u.x,d.x,g.x,f.x,this.tension),Fo.initCatmullRom(u.y,d.y,g.y,f.y,this.tension),Oo.initCatmullRom(u.z,d.z,g.z,f.z,this.tension));return n.set(No.calc(c),Fo.calc(c),Oo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new k().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,l=i*i,c=i*l;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*l+s*i+e}function Kf(i,t){const e=1-i;return e*e*t}function Jf(i,t){return 2*(1-i)*i*t}function $f(i,t){return i*i*t}function Ur(i,t,e,n){return Kf(i,t)+Jf(i,e)+$f(i,n)}function Qf(i,t){const e=1-i;return e*e*e*t}function td(i,t){const e=1-i;return 3*e*e*i*t}function ed(i,t){return 3*(1-i)*i*i*t}function nd(i,t){return i*i*i*t}function Ir(i,t,e,n,r){return Qf(i,t)+td(i,e)+ed(i,n)+nd(i,r)}class Tu extends Hn{constructor(t=new St,e=new St,n=new St,r=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new St){const n=e,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(Ir(t,r.x,s.x,a.x,l.x),Ir(t,r.y,s.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class id extends Hn{constructor(t=new k,e=new k,n=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new k){const n=e,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(Ir(t,r.x,s.x,a.x,l.x),Ir(t,r.y,s.y,a.y,l.y),Ir(t,r.z,s.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bu extends Hn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rd extends Hn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Au extends Hn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Ur(t,r.x,s.x,a.x),Ur(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sd extends Hn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Ur(t,r.x,s.x,a.x),Ur(t,r.y,s.y,a.y),Ur(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),l=s-a,c=r[a===0?a:a-1],u=r[a],f=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(hc(l,c.x,u.x,f.x,d.x),hc(l,c.y,u.y,f.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new St().fromArray(r))}return this}}var fc=Object.freeze({__proto__:null,ArcCurve:qf,CatmullRomCurve3:Zf,CubicBezierCurve:Tu,CubicBezierCurve3:id,EllipseCurve:cl,LineCurve:bu,LineCurve3:rd,QuadraticBezierCurve:Au,QuadraticBezierCurve3:sd,SplineCurve:wu});class od extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,l=this.curves[s],c=l.getLength(),u=c===0?0:1-a/c;return l.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let u=0;u<c.length;u++){const f=c[u];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new fc[r.type]().fromJSON(r))}return this}}class dc extends od{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bu(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Au(this.currentPoint.clone(),new St(t,e),new St(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const l=new Tu(this.currentPoint.clone(),new St(t,e),new St(n,r),new St(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,l,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+u,e+f,n,r,s,a,l,c),this}absellipse(t,e,n,r,s,a,l,c){const u=new cl(t,e,n,r,s,a,l,c);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cu extends dc{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new dc().fromJSON(r))}return this}}function ad(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Ru(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let l,c,u;if(n&&(s=fd(i,t,s,e)),i.length>80*e){l=i[0],c=i[1];let f=l,d=c;for(let g=e;g<r;g+=e){const _=i[g],y=i[g+1];_<l&&(l=_),y<c&&(c=y),_>f&&(f=_),y>d&&(d=y)}u=Math.max(f-l,d-c),u=u!==0?32767/u:0}return kr(s,a,e,l,c,u,0),a}function Ru(i,t,e,n,r){let s;if(r===Ed(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=pc(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=pc(a/n|0,i[a],i[a+1],s);return s&&hr(s,s.next)&&(Xr(s),s=s.next),s}function Pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hr(e,e.next)||Re(e.prev,e,e.next)===0)){if(Xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&_d(i,n,r,s);let l=i;for(;i.prev!==i.next;){const c=i.prev,u=i.next;if(s?cd(i,n,r,s):ld(i)){t.push(c.i,i.i,u.i),Xr(i),i=u.next,l=u.next;continue}if(i=u,i===l){a?a===1?(i=ud(Pi(i),t),kr(i,t,e,n,r,s,2)):a===2&&hd(i,t,e,n,r,s):kr(Pi(i),t,e,n,r,s,1);break}}}function ld(i){const t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,l=t.y,c=e.y,u=n.y,f=Math.min(r,s,a),d=Math.min(l,c,u),g=Math.max(r,s,a),_=Math.max(l,c,u);let y=n.next;for(;y!==t;){if(y.x>=f&&y.x<=g&&y.y>=d&&y.y<=_&&Rr(r,l,s,c,a,u,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function cd(i,t,e,n){const r=i.prev,s=i,a=i.next;if(Re(r,s,a)>=0)return!1;const l=r.x,c=s.x,u=a.x,f=r.y,d=s.y,g=a.y,_=Math.min(l,c,u),y=Math.min(f,d,g),b=Math.max(l,c,u),v=Math.max(f,d,g),m=Va(_,y,t,e,n),D=Va(b,v,t,e,n);let R=i.prevZ,w=i.nextZ;for(;R&&R.z>=m&&w&&w.z<=D;){if(R.x>=_&&R.x<=b&&R.y>=y&&R.y<=v&&R!==r&&R!==a&&Rr(l,f,c,d,u,g,R.x,R.y)&&Re(R.prev,R,R.next)>=0||(R=R.prevZ,w.x>=_&&w.x<=b&&w.y>=y&&w.y<=v&&w!==r&&w!==a&&Rr(l,f,c,d,u,g,w.x,w.y)&&Re(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;R&&R.z>=m;){if(R.x>=_&&R.x<=b&&R.y>=y&&R.y<=v&&R!==r&&R!==a&&Rr(l,f,c,d,u,g,R.x,R.y)&&Re(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;w&&w.z<=D;){if(w.x>=_&&w.x<=b&&w.y>=y&&w.y<=v&&w!==r&&w!==a&&Rr(l,f,c,d,u,g,w.x,w.y)&&Re(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function ud(i,t){let e=i;do{const n=e.prev,r=e.next.next;!hr(n,r)&&Du(n,e,e.next,r)&&Wr(n,r)&&Wr(r,n)&&(t.push(n.i,e.i,r.i),Xr(e),Xr(e.next),e=i=r),e=e.next}while(e!==i);return Pi(e)}function hd(i,t,e,n,r,s){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Md(a,l)){let c=Lu(a,l);a=Pi(a,a.next),c=Pi(c,c.next),kr(a,t,e,n,r,s,0),kr(c,t,e,n,r,s,0);return}l=l.next}a=a.next}while(a!==i)}function fd(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const l=t[s]*n,c=s<a-1?t[s+1]*n:i.length,u=Ru(i,l,c,n,!1);u===u.next&&(u.steiner=!0),r.push(xd(u))}r.sort(dd);for(let s=0;s<r.length;s++)e=pd(r[s],e);return e}function dd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function pd(i,t){const e=md(i,t);if(!e)return t;const n=Lu(e,i);return Pi(n,n.next),Pi(e,e.next)}function md(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(hr(i,e))return e;do{if(hr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const l=a,c=a.x,u=a.y;let f=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Pu(r<u?n:s,r,c,u,r<u?s:n,r,e.x,e.y)){const d=Math.abs(r-e.y)/(n-e.x);Wr(e,i)&&(d<f||d===f&&(e.x>a.x||e.x===a.x&&gd(a,e)))&&(a=e,f=d)}e=e.next}while(e!==l);return a}function gd(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function _d(i,t,e,n){let r=i;do r.z===0&&(r.z=Va(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,vd(r)}function vd(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,l=0;for(let u=0;u<e&&(l++,a=a.nextZ,!!a);u++);let c=e;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,l--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function Va(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pu(i,t,e,n,r,s,a,l){return(r-a)*(t-l)>=(i-a)*(s-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(s-l)>=(r-a)*(n-l)}function Rr(i,t,e,n,r,s,a,l){return!(i===a&&t===l)&&Pu(i,t,e,n,r,s,a,l)}function Md(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sd(i,t)&&(Wr(i,t)&&Wr(t,i)&&yd(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||hr(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hr(i,t){return i.x===t.x&&i.y===t.y}function Du(i,t,e,n){const r=Ls(Re(i,t,e)),s=Ls(Re(i,t,n)),a=Ls(Re(e,n,i)),l=Ls(Re(e,n,t));return!!(r!==s&&a!==l||r===0&&Ds(i,e,t)||s===0&&Ds(i,n,t)||a===0&&Ds(e,i,n)||l===0&&Ds(e,t,n))}function Ds(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ls(i){return i>0?1:i<0?-1:0}function Sd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Du(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Wr(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function yd(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lu(i,t){const e=Ha(i.i,i.x,i.y),n=Ha(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function pc(i,t,e,n){const r=Ha(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ha(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ed(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Td{static triangulate(t,e,n=2){return ad(t,e,n)}}class Nr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Nr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];mc(t),gc(n,t);let a=t.length;e.forEach(mc);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,gc(n,e[c]);const l=Td.triangulate(n,r);for(let c=0;c<l.length;c+=3)s.push(l.slice(c,c+3));return s}}function mc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Qr extends tn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,l=Math.floor(n),c=Math.floor(r),u=l+1,f=c+1,d=t/l,g=e/c,_=[],y=[],b=[],v=[];for(let m=0;m<f;m++){const D=m*g-a;for(let R=0;R<u;R++){const w=R*d-s;y.push(w,-D,0),b.push(0,0,1),v.push(R/l),v.push(1-m/c)}}for(let m=0;m<c;m++)for(let D=0;D<l;D++){const R=D+u*m,w=D+u*(m+1),I=D+1+u*(m+1),N=D+1+u*m;_.push(R,w,N),_.push(w,I,N)}this.setIndex(_),this.setAttribute("position",new qe(y,3)),this.setAttribute("normal",new qe(b,3)),this.setAttribute("uv",new qe(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.widthSegments,t.heightSegments)}}class hl extends tn{constructor(t=new Cu([new St(0,.5),new St(-.5,-.5),new St(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let l=0,c=0;if(Array.isArray(t)===!1)u(t);else for(let f=0;f<t.length;f++)u(t[f]),this.addGroup(l,c,f),l+=c,c=0;this.setIndex(n),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(s,3)),this.setAttribute("uv",new qe(a,2));function u(f){const d=r.length/3,g=f.extractPoints(e);let _=g.shape;const y=g.holes;Nr.isClockWise(_)===!1&&(_=_.reverse());for(let v=0,m=y.length;v<m;v++){const D=y[v];Nr.isClockWise(D)===!0&&(y[v]=D.reverse())}const b=Nr.triangulateShape(_,y);for(let v=0,m=y.length;v<m;v++){const D=y[v];_=_.concat(D)}for(let v=0,m=_.length;v<m;v++){const D=_[v];r.push(D.x,D.y,0),s.push(0,0,1),a.push(D.x,D.y)}for(let v=0,m=b.length;v<m;v++){const D=b[v],R=D[0]+d,w=D[1]+d,I=D[2]+d;n.push(R,w,I),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return bd(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new hl(n,t.curveSegments)}}function bd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class fl extends tn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let u=0;const f=[],d=new k,g=new k,_=[],y=[],b=[],v=[];for(let m=0;m<=n;m++){const D=[],R=m/n;let w=0;m===0&&a===0?w=.5/e:m===n&&c===Math.PI&&(w=-.5/e);for(let I=0;I<=e;I++){const N=I/e;d.x=-t*Math.cos(r+N*s)*Math.sin(a+R*l),d.y=t*Math.cos(a+R*l),d.z=t*Math.sin(r+N*s)*Math.sin(a+R*l),y.push(d.x,d.y,d.z),g.copy(d).normalize(),b.push(g.x,g.y,g.z),v.push(N+w,1-R),D.push(u++)}f.push(D)}for(let m=0;m<n;m++)for(let D=0;D<e;D++){const R=f[m][D+1],w=f[m][D],I=f[m+1][D],N=f[m+1][D+1];(m!==0||a>0)&&_.push(R,w,N),(m!==n-1||c<Math.PI)&&_.push(w,I,N)}this.setIndex(_),this.setAttribute("position",new qe(y,3)),this.setAttribute("normal",new qe(b,3)),this.setAttribute("uv",new qe(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ad extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wd extends dr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cd extends dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rd extends dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Pd{constructor(t,e,n){const r=this;let s=!1,a=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){l++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,l),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,g=u.length;d<g;d+=2){const _=u[d],y=u[d+1];if(_.global&&(_.lastIndex=0),_.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Dd=new Pd;class dl{constructor(t){this.manager=t!==void 0?t:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}dl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji=new WeakMap;class Ld extends dl{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Bo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let d=Ji.get(a);d===void 0&&(d=[],Ji.set(a,d)),d.push({onLoad:e,onError:r})}return a}const l=zr("img");function c(){f(),e&&e(this);const d=Ji.get(this)||[];for(let g=0;g<d.length;g++){const _=d[g];_.onLoad&&_.onLoad(this)}Ji.delete(this),s.manager.itemEnd(t)}function u(d){f(),r&&r(d),Bo.remove(`image:${t}`);const g=Ji.get(this)||[];for(let _=0;_<g.length;_++){const y=g[_];y.onError&&y.onError(d)}Ji.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),Bo.add(`image:${t}`,l),s.manager.itemStart(t),l.src=t,l}}class Uu extends dl{constructor(t){super(t)}load(t,e,n,r){const s=new je,a=new Ld(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(l){s.image=l,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class pl extends xu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,l=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ud extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Id{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class _c{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nd extends Di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){jt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function vc(i,t,e,n){const r=Fd(n);switch(e){case lu:return i*t;case uu:return i*t/r.components*r.byteLength;case Qa:return i*t/r.components*r.byteLength;case lr:return i*t*2/r.components*r.byteLength;case tl:return i*t*2/r.components*r.byteLength;case cu:return i*t*3/r.components*r.byteLength;case Pn:return i*t*4/r.components*r.byteLength;case el:return i*t*4/r.components*r.byteLength;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zs:case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:case ua:return Math.max(i,16)*Math.max(t,8)/4;case aa:case ca:return Math.max(i,8)*Math.max(t,8)/2;case ha:case fa:case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case da:case ga:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case La:case Ua:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Na:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fd(i){switch(i){case En:case ru:return{byteLength:1,components:1};case Or:case su:case gn:return{byteLength:2,components:1};case Ja:case $a:return{byteLength:2,components:4};case zn:case Ka:case Nn:return{byteLength:4,components:1};case ou:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);function Iu(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Od(i){const t=new WeakMap;function e(l,c){const u=l.array,f=l.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)_=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,u){const f=c.array,d=c.updateRanges;if(i.bindBuffer(u,l),d.length===0)i.bufferSubData(u,0,f);else{d.sort((_,y)=>_.start-y.start);let g=0;for(let _=1;_<d.length;_++){const y=d[g],b=d[_];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++g,d[g]=b)}d.length=g+1;for(let _=0,y=d.length;_<y;_++){const b=d[_];i.bufferSubData(u,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=t.get(l);if(u===void 0)t.set(l,e(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ng=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Bd,alphahash_pars_fragment:zd,alphamap_fragment:Vd,alphamap_pars_fragment:Hd,alphatest_fragment:Gd,alphatest_pars_fragment:kd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:Yd,batching_vertex:jd,begin_vertex:qd,beginnormal_vertex:Zd,bsdfs:Kd,iridescence_fragment:Jd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:ep,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:rp,color_pars_vertex:sp,color_vertex:op,common:ap,cube_uv_reflection_fragment:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:up,displacementmap_vertex:hp,emissivemap_fragment:fp,emissivemap_pars_fragment:dp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:_p,envmap_pars_fragment:vp,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Pp,envmap_vertex:Mp,fog_vertex:Sp,fog_pars_vertex:yp,fog_fragment:Ep,fog_pars_fragment:Tp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:Ap,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Rp,lights_toon_fragment:Dp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Up,lights_phong_pars_fragment:Ip,lights_physical_fragment:Np,lights_physical_pars_fragment:Fp,lights_fragment_begin:Op,lights_fragment_maps:Bp,lights_fragment_end:zp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:kp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:Yp,map_particle_pars_fragment:jp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:Kp,morphcolor_vertex:Jp,morphnormal_vertex:$p,morphtarget_pars_vertex:Qp,morphtarget_vertex:tm,normal_fragment_begin:em,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:rm,normal_vertex:sm,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:um,opaque_fragment:hm,packing:fm,premultiplied_alpha_fragment:dm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:xm,shadowmap_pars_vertex:Mm,shadowmap_vertex:Sm,shadowmask_pars_fragment:ym,skinbase_vertex:Em,skinning_pars_vertex:Tm,skinning_vertex:bm,skinnormal_vertex:Am,specularmap_fragment:wm,specularmap_pars_fragment:Cm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Pm,transmission_fragment:Dm,transmission_pars_fragment:Lm,uv_pars_fragment:Um,uv_pars_vertex:Im,uv_vertex:Nm,worldpos_vertex:Fm,background_vert:Om,background_frag:Bm,backgroundCube_vert:zm,backgroundCube_frag:Vm,cube_vert:Hm,cube_frag:Gm,depth_vert:km,depth_frag:Wm,distance_vert:Xm,distance_frag:Ym,equirect_vert:jm,equirect_frag:qm,linedashed_vert:Zm,linedashed_frag:Km,meshbasic_vert:Jm,meshbasic_frag:$m,meshlambert_vert:Qm,meshlambert_frag:tg,meshmatcap_vert:eg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:rg,meshphong_vert:sg,meshphong_frag:og,meshphysical_vert:ag,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:ug,points_vert:hg,points_frag:fg,shadow_vert:dg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},Et={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},In={basic:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:sn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:sn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:sn([Et.points,Et.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:sn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:sn([Et.common,Et.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:sn([Et.sprite,Et.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:sn([Et.common,Et.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:sn([Et.lights,Et.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};In.physical={uniforms:sn([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Us={r:0,b:0,g:0},yi=new Vn,_g=new Pe;function vg(i,t,e,n,r,s,a){const l=new Jt(0);let c=s===!0?0:1,u,f,d=null,g=0,_=null;function y(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?e:t).get(w)),w}function b(R){let w=!1;const I=y(R);I===null?m(l,c):I&&I.isColor&&(m(I,1),w=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(R,w){const I=y(w);I&&(I.isCubeTexture||I.mapping===Qs)?(f===void 0&&(f=new _n(new $r(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:ur(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),yi.copy(w.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),f.material.uniforms.envMap.value=I,f.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(yi)),f.material.toneMapped=le.getTransfer(I.colorSpace)!==xe,(d!==I||g!==I.version||_!==i.toneMapping)&&(f.material.needsUpdate=!0,d=I,g=I.version,_=i.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null)):I&&I.isTexture&&(u===void 0&&(u=new _n(new Qr(2,2),new Ye({name:"BackgroundMaterial",uniforms:ur(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=I,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.toneMapped=le.getTransfer(I.colorSpace)!==xe,I.matrixAutoUpdate===!0&&I.updateMatrix(),u.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||g!==I.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=I,g=I.version,_=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function m(R,w){R.getRGB(Us,vu(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,w,a)}function D(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(R,w=1){l.set(R),c=w,m(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,m(l,c)},render:b,addToRenderList:v,dispose:D}}function xg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,a=!1;function l(x,A,Y,H,$){let Q=!1;const B=d(H,Y,A);s!==B&&(s=B,u(s.object)),Q=_(x,H,Y,$),Q&&y(x,H,Y,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,w(x,A,Y,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function f(x){return i.deleteVertexArray(x)}function d(x,A,Y){const H=Y.wireframe===!0;let $=n[x.id];$===void 0&&($={},n[x.id]=$);let Q=$[A.id];Q===void 0&&(Q={},$[A.id]=Q);let B=Q[H];return B===void 0&&(B=g(c()),Q[H]=B),B}function g(x){const A=[],Y=[],H=[];for(let $=0;$<e;$++)A[$]=0,Y[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:Y,attributeDivisors:H,object:x,attributes:{},index:null}}function _(x,A,Y,H){const $=s.attributes,Q=A.attributes;let B=0;const G=Y.getAttributes();for(const tt in G)if(G[tt].location>=0){const ht=$[tt];let Tt=Q[tt];if(Tt===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(Tt=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(Tt=x.instanceColor)),ht===void 0||ht.attribute!==Tt||Tt&&ht.data!==Tt.data)return!0;B++}return s.attributesNum!==B||s.index!==H}function y(x,A,Y,H){const $={},Q=A.attributes;let B=0;const G=Y.getAttributes();for(const tt in G)if(G[tt].location>=0){let ht=Q[tt];ht===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const Tt={};Tt.attribute=ht,ht&&ht.data&&(Tt.data=ht.data),$[tt]=Tt,B++}s.attributes=$,s.attributesNum=B,s.index=H}function b(){const x=s.newAttributes;for(let A=0,Y=x.length;A<Y;A++)x[A]=0}function v(x){m(x,0)}function m(x,A){const Y=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;Y[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),$[x]!==A&&(i.vertexAttribDivisor(x,A),$[x]=A)}function D(){const x=s.newAttributes,A=s.enabledAttributes;for(let Y=0,H=A.length;Y<H;Y++)A[Y]!==x[Y]&&(i.disableVertexAttribArray(Y),A[Y]=0)}function R(x,A,Y,H,$,Q,B){B===!0?i.vertexAttribIPointer(x,A,Y,$,Q):i.vertexAttribPointer(x,A,Y,H,$,Q)}function w(x,A,Y,H){b();const $=H.attributes,Q=Y.getAttributes(),B=A.defaultAttributeValues;for(const G in Q){const tt=Q[G];if(tt.location>=0){let ut=$[G];if(ut===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),ut!==void 0){const ht=ut.normalized,Tt=ut.itemSize,Ht=t.get(ut);if(Ht===void 0)continue;const Gt=Ht.buffer,pe=Ht.type,ce=Ht.bytesPerElement,it=pe===i.INT||pe===i.UNSIGNED_INT||ut.gpuType===Ka;if(ut.isInterleavedBufferAttribute){const ot=ut.data,Ct=ot.stride,Zt=ut.offset;if(ot.isInstancedInterleavedBuffer){for(let Dt=0;Dt<tt.locationSize;Dt++)m(tt.location+Dt,ot.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Dt=0;Dt<tt.locationSize;Dt++)v(tt.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Dt=0;Dt<tt.locationSize;Dt++)R(tt.location+Dt,Tt/tt.locationSize,pe,ht,Ct*ce,(Zt+Tt/tt.locationSize*Dt)*ce,it)}else{if(ut.isInstancedBufferAttribute){for(let ot=0;ot<tt.locationSize;ot++)m(tt.location+ot,ut.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ot=0;ot<tt.locationSize;ot++)v(tt.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let ot=0;ot<tt.locationSize;ot++)R(tt.location+ot,Tt/tt.locationSize,pe,ht,Tt*ce,Tt/tt.locationSize*ot*ce,it)}}else if(B!==void 0){const ht=B[G];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(tt.location,ht);break;case 3:i.vertexAttrib3fv(tt.location,ht);break;case 4:i.vertexAttrib4fv(tt.location,ht);break;default:i.vertexAttrib1fv(tt.location,ht)}}}}D()}function I(){q();for(const x in n){const A=n[x];for(const Y in A){const H=A[Y];for(const $ in H)f(H[$].object),delete H[$];delete A[Y]}delete n[x]}}function N(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const Y in A){const H=A[Y];for(const $ in H)f(H[$].object),delete H[$];delete A[Y]}delete n[x.id]}function F(x){for(const A in n){const Y=n[A];if(Y[x.id]===void 0)continue;const H=Y[x.id];for(const $ in H)f(H[$].object),delete H[$];delete Y[x.id]}}function q(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:q,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:v,disableUnusedAttributes:D}}function Mg(i,t,e){let n;function r(u){n=u}function s(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function a(u,f,d){d!==0&&(i.drawArraysInstanced(n,u,f,d),e.update(f,n,d))}function l(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=f[y];e.update(_,n,1)}function c(u,f,d,g){if(d===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<u.length;y++)a(u[y],f[y],g[y]);else{_.multiDrawArraysInstancedWEBGL(n,u,0,f,0,g,0,d);let y=0;for(let b=0;b<d;b++)y+=f[b]*g[b];e.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Sg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==Pn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(F){const q=F===gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==En&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Nn&&!q)}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const f=c(u);f!==u&&(jt("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),N=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:w,maxSamples:I,samples:N}}function yg(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new li,l=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,g){const _=d.length!==0||g||n!==0||r;return r=g,n=d.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,g){e=f(d,g,0)},this.setState=function(d,g,_){const y=d.clippingPlanes,b=d.clipIntersection,v=d.clipShadows,m=i.get(d);if(!r||y===null||y.length===0||s&&!v)s?f(null):u();else{const D=s?0:n,R=D*4;let w=m.clippingState||null;c.value=w,w=f(y,g,R,_);for(let I=0;I!==R;++I)w[I]=e[I];m.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,g,_,y){const b=d!==null?d.length:0;let v=null;if(b!==0){if(v=c.value,y!==!0||v===null){const m=_+b*4,D=g.matrixWorldInverse;l.getNormalMatrix(D),(v===null||v.length<m)&&(v=new Float32Array(m));for(let R=0,w=_;R!==b;++R,w+=4)a.copy(d[R]).applyMatrix4(D,l),a.normal.toArray(v,w),v[w+3]=a.constant}c.value=v,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,v}}function Eg(i){let t=new WeakMap;function e(a,l){return l===ia?a.mapping=Ci:l===ra&&(a.mapping=ar),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===ia||l===ra)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Su(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ui=4,xc=[.125,.215,.35,.446,.526,.582],bi=20,Tg=256,Ar=new pl,Mc=new Jt;let zo=null,Vo=0,Ho=0,Go=!1;const bg=new k;class Sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:l=bg}=s;zo=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zo,Vo,Ho),this._renderer.xr.enabled=Go,t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zo=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:gn,format:Pn,colorSpace:cr,depthBuffer:!1},r=yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ag(s)),this._blurMaterial=Cg(s,t,e),this._ggxMaterial=wg(s,t,e)}return r}_compileMaterial(t){const e=new _n(new tn,t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,n,r,s){const c=new yn(90,1,e,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,g=d.autoClear,_=d.toneMapping;d.getClearColor(Mc),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new $r,new Jr({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,v=b.material;let m=!1;const D=t.background;D?D.isColor&&(v.color.copy(D),t.background=null,m=!0):(v.color.copy(Mc),m=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(c.up.set(0,u[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[R],s.y,s.z)):w===1?(c.up.set(0,0,u[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[R],s.z)):(c.up.set(0,u[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[R]));const I=this._cubeSize;$i(r,w*I,R>2?I:0,I,I),d.setRenderTarget(r),m&&d.render(b,c),d.render(t,c)}d.toneMapping=_,d.autoClear=g,t.background=D}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ci||t.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=t;const c=this._cubeSize;$i(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;const c=a.uniforms,u=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),d=Math.sqrt(u*u-f*f),g=0+u*1.25,_=d*g,{_lodMax:y}=this,b=this._sizeLods[n],v=3*b*(n>y-ui?n-y+ui:0),m=4*(this._cubeSize-b);c.envMap.value=t.texture,c.roughness.value=_,c.mipInt.value=y-e,$i(s,v,m,3*b,2*b),r.setRenderTarget(s),r.render(l,Ar),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=y-n,$i(t,v,m,3*b,2*b),r.setRenderTarget(t),r.render(l,Ar)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&fe("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=u;const g=u.uniforms,_=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*bi-1),b=s/y,v=isFinite(s)?1+Math.floor(f*b):bi;v>bi&&jt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${bi}`);const m=[];let D=0;for(let F=0;F<bi;++F){const q=F/b,T=Math.exp(-q*q/2);m.push(T),F===0?D+=T:F<v&&(D+=2*T)}for(let F=0;F<m.length;F++)m[F]=m[F]/D;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=a==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:R}=this;g.dTheta.value=y,g.mipInt.value=R-n;const w=this._sizeLods[r],I=3*w*(r>R-ui?r-R+ui:0),N=4*(this._cubeSize-w);$i(e,I,N,3*w,2*w),c.setRenderTarget(e),c.render(d,Ar)}}function Ag(i){const t=[],e=[],n=[];let r=i;const s=i-ui+1+xc.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);t.push(l);let c=1/l;a>i-ui?c=xc[a-i+ui-1]:a===0&&(c=0),e.push(c);const u=1/(l-2),f=-u,d=1+u,g=[f,f,d,f,d,d,f,f,d,d,f,d],_=6,y=6,b=3,v=2,m=1,D=new Float32Array(b*y*_),R=new Float32Array(v*y*_),w=new Float32Array(m*y*_);for(let N=0;N<_;N++){const F=N%3*2/3-1,q=N>2?0:-1,T=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];D.set(T,b*y*N),R.set(g,v*y*N);const x=[N,N,N,N,N,N];w.set(x,m*y*N)}const I=new tn;I.setAttribute("position",new Qe(D,b)),I.setAttribute("uv",new Qe(R,v)),I.setAttribute("faceIndex",new Qe(w,m)),n.push(new _n(I,null)),r>ui&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function yc(i,t,e){const n=new cn(i,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function wg(i,t,e){return new Ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Cg(i,t,e){const n=new Float32Array(bi),r=new k(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ec(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Tc(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rg(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===ia||c===ra,f=c===Ci||c===ar;if(u||f){let d=t.get(l);const g=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return e===null&&(e=new Sc(i)),d=u?e.fromEquirectangular(l,d):e.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{const _=l.image;return u&&_&&_.height>0||f&&_&&r(_)?(e===null&&(e=new Sc(i)),d=u?e.fromEquirectangular(l):e.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function r(l){let c=0;const u=6;for(let f=0;f<u;f++)l[f]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Pg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Vr("WebGLRenderer: "+n+" extension not supported."),r}}}function Dg(i,t,e,n){const r={},s=new WeakMap;function a(d){const g=d.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",a),delete r[g.id];const _=s.get(g);_&&(t.remove(_),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(d,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,e.memory.geometries++),g}function c(d){const g=d.attributes;for(const _ in g)t.update(g[_],i.ARRAY_BUFFER)}function u(d){const g=[],_=d.index,y=d.attributes.position;let b=0;if(_!==null){const D=_.array;b=_.version;for(let R=0,w=D.length;R<w;R+=3){const I=D[R+0],N=D[R+1],F=D[R+2];g.push(I,N,N,F,F,I)}}else if(y!==void 0){const D=y.array;b=y.version;for(let R=0,w=D.length/3-1;R<w;R+=3){const I=R+0,N=R+1,F=R+2;g.push(I,N,N,F,F,I)}}else return;const v=new(fu(g)?_u:gu)(g,1);v.version=b;const m=s.get(d);m&&t.remove(m),s.set(d,v)}function f(d){const g=s.get(d);if(g){const _=d.index;_!==null&&g.version<_.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:f}}function Lg(i,t,e){let n;function r(g){n=g}let s,a;function l(g){s=g.type,a=g.bytesPerElement}function c(g,_){i.drawElements(n,_,s,g*a),e.update(_,n,1)}function u(g,_,y){y!==0&&(i.drawElementsInstanced(n,_,s,g*a,y),e.update(_,n,y))}function f(g,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,g,0,y);let v=0;for(let m=0;m<y;m++)v+=_[m];e.update(v,n,1)}function d(g,_,y,b){if(y===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)u(g[m]/a,_[m],b[m]);else{v.multiDrawElementsInstancedWEBGL(n,_,0,s,g,0,b,0,y);let m=0;for(let D=0;D<y;D++)m+=_[D]*b[D];e.update(m,n,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Ug(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:fe("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ig(i,t,e){const n=new WeakMap,r=new De;function s(a,l,c){const u=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=f!==void 0?f.length:0;let g=n.get(l);if(g===void 0||g.count!==d){let x=function(){q.dispose(),n.delete(l),l.removeEventListener("dispose",x)};var _=x;g!==void 0&&g.texture.dispose();const y=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],D=l.morphAttributes.normal||[],R=l.morphAttributes.color||[];let w=0;y===!0&&(w=1),b===!0&&(w=2),v===!0&&(w=3);let I=l.attributes.position.count*w,N=1;I>t.maxTextureSize&&(N=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*N*4*d),q=new du(F,I,N,d);q.type=Nn,q.needsUpdate=!0;const T=w*4;for(let A=0;A<d;A++){const Y=m[A],H=D[A],$=R[A],Q=I*N*4*A;for(let B=0;B<Y.count;B++){const G=B*T;y===!0&&(r.fromBufferAttribute(Y,B),F[Q+G+0]=r.x,F[Q+G+1]=r.y,F[Q+G+2]=r.z,F[Q+G+3]=0),b===!0&&(r.fromBufferAttribute(H,B),F[Q+G+4]=r.x,F[Q+G+5]=r.y,F[Q+G+6]=r.z,F[Q+G+7]=0),v===!0&&(r.fromBufferAttribute($,B),F[Q+G+8]=r.x,F[Q+G+9]=r.y,F[Q+G+10]=r.z,F[Q+G+11]=$.itemSize===4?r.w:1)}}g={count:d,texture:q,size:new St(I,N)},n.set(l,g),l.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let y=0;for(let v=0;v<u.length;v++)y+=u[v];const b=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function Ng(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const Fg={[Kc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[$c]:"CINEON_TONE_MAPPING",[Qc]:"ACES_FILMIC_TONE_MAPPING",[eu]:"AGX_TONE_MAPPING",[nu]:"NEUTRAL_TONE_MAPPING",[tu]:"CUSTOM_TONE_MAPPING"};function Og(i,t,e,n,r){const s=new cn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),a=new cn(t,e,{type:gn,depthBuffer:!1,stencilBuffer:!1}),l=new tn;l.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new qe([0,2,0,0,2,0],2));const c=new Ad({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new _n(l,c),f=new pl(-1,1,1,-1,0,1);let d=null,g=null,_=!1,y,b=null,v=[],m=!1;this.setSize=function(D,R){s.setSize(D,R),a.setSize(D,R);for(let w=0;w<v.length;w++){const I=v[w];I.setSize&&I.setSize(D,R)}},this.setEffects=function(D){v=D,m=v.length>0&&v[0].isRenderPass===!0;const R=s.width,w=s.height;for(let I=0;I<v.length;I++){const N=v[I];N.setSize&&N.setSize(R,w)}},this.begin=function(D,R){if(_||D.toneMapping===Bn&&v.length===0)return!1;if(b=R,R!==null){const w=R.width,I=R.height;(s.width!==w||s.height!==I)&&this.setSize(w,I)}return m===!1&&D.setRenderTarget(s),y=D.toneMapping,D.toneMapping=Bn,!0},this.hasRenderPass=function(){return m},this.end=function(D,R){D.toneMapping=y,_=!0;let w=s,I=a;for(let N=0;N<v.length;N++){const F=v[N];if(F.enabled!==!1&&(F.render(D,I,w,R),F.needsSwap!==!1)){const q=w;w=I,I=q}}if(d!==D.outputColorSpace||g!==D.toneMapping){d=D.outputColorSpace,g=D.toneMapping,c.defines={},le.getTransfer(d)===xe&&(c.defines.SRGB_TRANSFER="");const N=Fg[g];N&&(c.defines[N]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,D.setRenderTarget(b),D.render(u,f),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),l.dispose(),c.dispose()}}const Nu=new je,Ga=new Gr(1,1),Fu=new du,Ou=new Tf,Bu=new Mu,bc=[],Ac=[],wc=new Float32Array(16),Cc=new Float32Array(9),Rc=new Float32Array(4);function pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=bc[r];if(s===void 0&&(s=new Float32Array(r),bc[r]=s),t!==0){n.toArray(s,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(s,l)}return s}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function no(i,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),Oe(e,n)}}function kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Cc.set(n),i.uniformMatrix3fv(this.addr,!1,Cc),Oe(e,n)}}function Wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),Oe(e,n)}}function Xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Zg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function $g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Qg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ga.compareFunction=e.isReversedDepthBuffer()?il:nl,s=Ga):s=Nu,e.setTexture2D(t||s,r)}function t_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ou,r)}function e_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bu,r)}function n_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Fu,r)}function i_(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return Vg;case 35666:return Hg;case 35674:return Gg;case 35675:return kg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return jg;case 35669:case 35673:return qg;case 5125:return Zg;case 36294:return Kg;case 36295:return Jg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}function r_(i,t){i.uniform1fv(this.addr,t)}function s_(i,t){const e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function o_(i,t){const e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function a_(i,t){const e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function l_(i,t){const e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function c_(i,t){const e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function u_(i,t){const e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h_(i,t){i.uniform1iv(this.addr,t)}function f_(i,t){i.uniform2iv(this.addr,t)}function d_(i,t){i.uniform3iv(this.addr,t)}function p_(i,t){i.uniform4iv(this.addr,t)}function m_(i,t){i.uniform1uiv(this.addr,t)}function g_(i,t){i.uniform2uiv(this.addr,t)}function __(i,t){i.uniform3uiv(this.addr,t)}function v_(i,t){i.uniform4uiv(this.addr,t)}function x_(i,t,e){const n=this.cache,r=t.length,s=no(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ga:a=Nu;for(let l=0;l!==r;++l)e.setTexture2D(t[l]||a,s[l])}function M_(i,t,e){const n=this.cache,r=t.length,s=no(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ou,s[a])}function S_(i,t,e){const n=this.cache,r=t.length,s=no(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Bu,s[a])}function y_(i,t,e){const n=this.cache,r=t.length,s=no(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Fu,s[a])}function E_(i){switch(i){case 5126:return r_;case 35664:return s_;case 35665:return o_;case 35666:return a_;case 35674:return l_;case 35675:return c_;case 35676:return u_;case 5124:case 35670:return h_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return y_}}class T_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=i_(e.type)}}class b_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E_(e.type)}}class A_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(t,e[l.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Pc(i,t){i.seq.push(t),i.map[t.id]=t}function w_(i,t,e){const n=i.name,r=n.length;for(ko.lastIndex=0;;){const s=ko.exec(n),a=ko.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Pc(e,u===void 0?new T_(l,i,t):new b_(l,i,t));break}else{let d=e.map[l];d===void 0&&(d=new A_(l),Pc(e,d)),e=d}}}class Gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);w_(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const l=e[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Dc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const C_=37297;let R_=0;function P_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const Lc=new Qt;function D_(i){le._getMatrix(Lc,le.workingColorSpace,i);const t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case qs:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+P_(i.getShaderSource(t),l)}else return s}function L_(i,t){const e=D_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const U_={[Kc]:"Linear",[Jc]:"Reinhard",[$c]:"Cineon",[Qc]:"ACESFilmic",[eu]:"AgX",[nu]:"Neutral",[tu]:"Custom"};function I_(i,t){const e=U_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new k;function N_(){le.getLuminanceCoefficients(Is);const i=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function O_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function Pr(i){return i!==""}function Ic(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(i){return i.replace(z_,H_)}const V_=new Map;function H_(i,t){let e=ee[t];if(e===void 0){const n=V_.get(t);if(n!==void 0)e=ee[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ka(e)}const G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(i){return i.replace(G_,k_)}function k_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const W_={[Fs]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function X_(i){return W_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Y_={[Ci]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function j_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Y_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const q_={[ar]:"ENVMAP_MODE_REFRACTION"};function Z_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":q_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K_={[Zc]:"ENVMAP_BLENDING_MULTIPLY",[kh]:"ENVMAP_BLENDING_MIX",[Wh]:"ENVMAP_BLENDING_ADD"};function J_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":K_[i.combine]||"ENVMAP_BLENDING_NONE"}function $_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Q_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,l=e.fragmentShader;const c=X_(e),u=j_(e),f=Z_(e),d=J_(e),g=$_(e),_=F_(e),y=O_(s),b=r.createProgram();let v,m,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Pr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(v=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?ee.tonemapping_pars_fragment:"",e.toneMapping!==Bn?I_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,L_("linearToOutputTexel",e.outputColorSpace),N_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),a=ka(a),a=Ic(a,e),a=Nc(a,e),l=ka(l),l=Ic(l,e),l=Nc(l,e),a=Fc(a),l=Fc(l),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,v=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=D+v+a,w=D+m+l,I=Dc(r,r.VERTEX_SHADER,R),N=Dc(r,r.FRAGMENT_SHADER,w);r.attachShader(b,I),r.attachShader(b,N),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function F(A){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(b)||"",H=r.getShaderInfoLog(I)||"",$=r.getShaderInfoLog(N)||"",Q=Y.trim(),B=H.trim(),G=$.trim();let tt=!0,ut=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,I,N);else{const ht=Uc(r,I,"vertex"),Tt=Uc(r,N,"fragment");fe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+Q+`
`+ht+`
`+Tt)}else Q!==""?jt("WebGLProgram: Program Info Log:",Q):(B===""||G==="")&&(ut=!1);ut&&(A.diagnostics={runnable:tt,programLog:Q,vertexShader:{log:B,prefix:v},fragmentShader:{log:G,prefix:m}})}r.deleteShader(I),r.deleteShader(N),q=new Gs(r,b),T=B_(r,b)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(b,C_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=N,this}let t0=0;class e0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new n0(t),e.set(t,n)),n}}class n0{constructor(t){this.id=t0++,this.code=t,this.usedTimes=0}}function i0(i,t,e,n,r,s,a){const l=new pu,c=new e0,u=new Set,f=[],d=new Map,g=r.logarithmicDepthBuffer;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return u.add(T),T===0?"uv":`uv${T}`}function v(T,x,A,Y,H){const $=Y.fog,Q=H.geometry,B=T.isMeshStandardMaterial?Y.environment:null,G=(T.isMeshStandardMaterial?e:t).get(T.envMap||B),tt=G&&G.mapping===Qs?G.image.height:null,ut=y[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&jt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const ht=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tt=ht!==void 0?ht.length:0;let Ht=0;Q.morphAttributes.position!==void 0&&(Ht=1),Q.morphAttributes.normal!==void 0&&(Ht=2),Q.morphAttributes.color!==void 0&&(Ht=3);let Gt,pe,ce,it;if(ut){const oe=In[ut];Gt=oe.vertexShader,pe=oe.fragmentShader}else Gt=T.vertexShader,pe=T.fragmentShader,c.update(T),ce=c.getVertexShaderID(T),it=c.getFragmentShaderID(T);const ot=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Zt=H.isInstancedMesh===!0,Dt=H.isBatchedMesh===!0,re=!!T.map,Le=!!T.matcap,zt=!!G,qt=!!T.aoMap,me=!!T.lightMap,$t=!!T.bumpMap,we=!!T.normalMap,O=!!T.displacementMap,Ce=!!T.emissiveMap,ae=!!T.metalnessMap,_e=!!T.roughnessMap,Lt=T.anisotropy>0,P=T.clearcoat>0,M=T.dispersion>0,W=T.iridescence>0,nt=T.sheen>0,st=T.transmission>0,et=Lt&&!!T.anisotropyMap,It=P&&!!T.clearcoatMap,_t=P&&!!T.clearcoatNormalMap,Ut=P&&!!T.clearcoatRoughnessMap,kt=W&&!!T.iridescenceMap,at=W&&!!T.iridescenceThicknessMap,pt=nt&&!!T.sheenColorMap,Rt=nt&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,mt=!!T.specularColorMap,Kt=!!T.specularIntensityMap,z=st&&!!T.transmissionMap,xt=st&&!!T.thicknessMap,ft=!!T.gradientMap,At=!!T.alphaMap,lt=T.alphaTest>0,rt=!!T.alphaHash,dt=!!T.extensions;let Wt=Bn;T.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const ve={shaderID:ut,shaderType:T.type,shaderName:T.name,vertexShader:Gt,fragmentShader:pe,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Dt,batchingColor:Dt&&H._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&H.instanceColor!==null,instancingMorph:Zt&&H.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:cr,alphaToCoverage:!!T.alphaToCoverage,map:re,matcap:Le,envMap:zt,envMapMode:zt&&G.mapping,envMapCubeUVHeight:tt,aoMap:qt,lightMap:me,bumpMap:$t,normalMap:we,displacementMap:O,emissiveMap:Ce,normalMapObjectSpace:we&&T.normalMapType===jh,normalMapTangentSpace:we&&T.normalMapType===hu,metalnessMap:ae,roughnessMap:_e,anisotropy:Lt,anisotropyMap:et,clearcoat:P,clearcoatMap:It,clearcoatNormalMap:_t,clearcoatRoughnessMap:Ut,dispersion:M,iridescence:W,iridescenceMap:kt,iridescenceThicknessMap:at,sheen:nt,sheenColorMap:pt,sheenRoughnessMap:Rt,specularMap:Nt,specularColorMap:mt,specularIntensityMap:Kt,transmission:st,transmissionMap:z,thicknessMap:xt,gradientMap:ft,opaque:T.transparent===!1&&T.blending===ir&&T.alphaToCoverage===!1,alphaMap:At,alphaTest:lt,alphaHash:rt,combine:T.combine,mapUv:re&&b(T.map.channel),aoMapUv:qt&&b(T.aoMap.channel),lightMapUv:me&&b(T.lightMap.channel),bumpMapUv:$t&&b(T.bumpMap.channel),normalMapUv:we&&b(T.normalMap.channel),displacementMapUv:O&&b(T.displacementMap.channel),emissiveMapUv:Ce&&b(T.emissiveMap.channel),metalnessMapUv:ae&&b(T.metalnessMap.channel),roughnessMapUv:_e&&b(T.roughnessMap.channel),anisotropyMapUv:et&&b(T.anisotropyMap.channel),clearcoatMapUv:It&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:_t&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:at&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:mt&&b(T.specularColorMap.channel),specularIntensityMapUv:Kt&&b(T.specularIntensityMap.channel),transmissionMapUv:z&&b(T.transmissionMap.channel),thicknessMapUv:xt&&b(T.thicknessMap.channel),alphaMapUv:At&&b(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(we||Lt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(re||At),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ct,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ht,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:re&&T.map.isVideoTexture===!0&&le.getTransfer(T.map.colorSpace)===xe,decodeVideoTextureEmissive:Ce&&T.emissiveMap.isVideoTexture===!0&&le.getTransfer(T.emissiveMap.colorSpace)===xe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Zn,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:dt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&T.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ve.vertexUv1s=u.has(1),ve.vertexUv2s=u.has(2),ve.vertexUv3s=u.has(3),u.clear(),ve}function m(T){const x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(const A in T.defines)x.push(A),x.push(T.defines[A]);return T.isRawShaderMaterial===!1&&(D(x,T),R(x,T),x.push(i.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function D(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function R(T,x){l.disableAll(),x.instancing&&l.enable(0),x.instancingColor&&l.enable(1),x.instancingMorph&&l.enable(2),x.matcap&&l.enable(3),x.envMap&&l.enable(4),x.normalMapObjectSpace&&l.enable(5),x.normalMapTangentSpace&&l.enable(6),x.clearcoat&&l.enable(7),x.iridescence&&l.enable(8),x.alphaTest&&l.enable(9),x.vertexColors&&l.enable(10),x.vertexAlphas&&l.enable(11),x.vertexUv1s&&l.enable(12),x.vertexUv2s&&l.enable(13),x.vertexUv3s&&l.enable(14),x.vertexTangents&&l.enable(15),x.anisotropy&&l.enable(16),x.alphaHash&&l.enable(17),x.batching&&l.enable(18),x.dispersion&&l.enable(19),x.batchingColor&&l.enable(20),x.gradientMap&&l.enable(21),T.push(l.mask),l.disableAll(),x.fog&&l.enable(0),x.useFog&&l.enable(1),x.flatShading&&l.enable(2),x.logarithmicDepthBuffer&&l.enable(3),x.reversedDepthBuffer&&l.enable(4),x.skinning&&l.enable(5),x.morphTargets&&l.enable(6),x.morphNormals&&l.enable(7),x.morphColors&&l.enable(8),x.premultipliedAlpha&&l.enable(9),x.shadowMapEnabled&&l.enable(10),x.doubleSided&&l.enable(11),x.flipSided&&l.enable(12),x.useDepthPacking&&l.enable(13),x.dithering&&l.enable(14),x.transmission&&l.enable(15),x.sheen&&l.enable(16),x.opaque&&l.enable(17),x.pointsUvs&&l.enable(18),x.decodeVideoTexture&&l.enable(19),x.decodeVideoTextureEmissive&&l.enable(20),x.alphaToCoverage&&l.enable(21),T.push(l.mask)}function w(T){const x=y[T.type];let A;if(x){const Y=In[x];A=Ks.clone(Y.uniforms)}else A=T.uniforms;return A}function I(T,x){let A=d.get(x);return A!==void 0?++A.usedTimes:(A=new Q_(i,x,T,s),f.push(A),d.set(x,A)),A}function N(T){if(--T.usedTimes===0){const x=f.indexOf(T);f[x]=f[f.length-1],f.pop(),d.delete(T.cacheKey),T.destroy()}}function F(T){c.remove(T)}function q(){c.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:I,releaseProgram:N,releaseShaderCache:F,programs:f,dispose:q}}function r0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,c){i.get(a)[l]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function s0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,g,_,y,b,v){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:g,material:_,groupOrder:y,renderOrder:d.renderOrder,z:b,group:v},i[t]=m):(m.id=d.id,m.object=d,m.geometry=g,m.material=_,m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=b,m.group=v),t++,m}function l(d,g,_,y,b,v){const m=a(d,g,_,y,b,v);_.transmission>0?n.push(m):_.transparent===!0?r.push(m):e.push(m)}function c(d,g,_,y,b,v){const m=a(d,g,_,y,b,v);_.transmission>0?n.unshift(m):_.transparent===!0?r.unshift(m):e.unshift(m)}function u(d,g){e.length>1&&e.sort(d||s0),n.length>1&&n.sort(g||Bc),r.length>1&&r.sort(g||Bc)}function f(){for(let d=t,g=i.length;d<g;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function o0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new zc,i.set(n,[a])):r>=s.length?(a=new zc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function a0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Jt};break;case"SpotLight":e={position:new k,direction:new k,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function l0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let c0=0;function u0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h0(i){const t=new a0,e=l0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);const r=new k,s=new Pe,a=new Pe;function l(u){let f=0,d=0,g=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let _=0,y=0,b=0,v=0,m=0,D=0,R=0,w=0,I=0,N=0,F=0;u.sort(u0);for(let T=0,x=u.length;T<x;T++){const A=u[T],Y=A.color,H=A.intensity,$=A.distance;let Q=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===lr?Q=A.shadow.map.texture:Q=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=Y.r*H,d+=Y.g*H,g+=Y.b*H;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],H);F++}else if(A.isDirectionalLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const G=A.shadow,tt=e.get(A);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,n.directionalShadow[_]=tt,n.directionalShadowMap[_]=Q,n.directionalShadowMatrix[_]=A.shadow.matrix,D++}n.directional[_]=B,_++}else if(A.isSpotLight){const B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(Y).multiplyScalar(H),B.distance=$,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[b]=B;const G=A.shadow;if(A.map&&(n.spotLightMap[I]=A.map,I++,G.updateMatrices(A),A.castShadow&&N++),n.spotLightMatrix[b]=G.matrix,A.castShadow){const tt=e.get(A);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,n.spotShadow[b]=tt,n.spotShadowMap[b]=Q,w++}b++}else if(A.isRectAreaLight){const B=t.get(A);B.color.copy(Y).multiplyScalar(H),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[v]=B,v++}else if(A.isPointLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const G=A.shadow,tt=e.get(A);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,tt.shadowCameraNear=G.camera.near,tt.shadowCameraFar=G.camera.far,n.pointShadow[y]=tt,n.pointShadowMap[y]=Q,n.pointShadowMatrix[y]=A.shadow.matrix,R++}n.point[y]=B,y++}else if(A.isHemisphereLight){const B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(H),B.groundColor.copy(A.groundColor).multiplyScalar(H),n.hemi[m]=B,m++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=g;const q=n.hash;(q.directionalLength!==_||q.pointLength!==y||q.spotLength!==b||q.rectAreaLength!==v||q.hemiLength!==m||q.numDirectionalShadows!==D||q.numPointShadows!==R||q.numSpotShadows!==w||q.numSpotMaps!==I||q.numLightProbes!==F)&&(n.directional.length=_,n.spot.length=b,n.rectArea.length=v,n.point.length=y,n.hemi.length=m,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=w+I-N,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=F,q.directionalLength=_,q.pointLength=y,q.spotLength=b,q.rectAreaLength=v,q.hemiLength=m,q.numDirectionalShadows=D,q.numPointShadows=R,q.numSpotShadows=w,q.numSpotMaps=I,q.numLightProbes=F,n.version=c0++)}function c(u,f){let d=0,g=0,_=0,y=0,b=0;const v=f.matrixWorldInverse;for(let m=0,D=u.length;m<D;m++){const R=u[m];if(R.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),d++}else if(R.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),_++}else if(R.isRectAreaLight){const w=n.rectArea[y];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(v),a.identity(),s.copy(R.matrixWorld),s.premultiply(v),a.extractRotation(s),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(R.isPointLight){const w=n.point[g];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(v),g++}else if(R.isHemisphereLight){const w=n.hemi[b];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(v),b++}}}return{setup:l,setupView:c,state:n}}function Vc(i){const t=new h0(i),e=[],n=[];function r(f){u.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(){t.setup(e)}function c(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function f0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new Vc(i),t.set(r,[l])):s>=a.length?(l=new Vc(i),a.push(l)):l=a[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,m0=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],g0=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Hc=new Pe,wr=new k,Wo=new k;function _0(i,t,e){let n=new yu;const r=new St,s=new St,a=new De,l=new Cd,c=new Rd,u={},f=e.maxTextureSize,d={[fi]:ln,[ln]:fi,[Zn]:Zn},g=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:d0,fragmentShader:p0}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const y=new tn;y.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new _n(y,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let m=this.type;this.render=function(N,F,q){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;N.type===Th&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),N.type=Fs);const T=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(On),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const H=m!==this.type;H&&F.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(Q=>Q.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,Q=N.length;$<Q;$++){const B=N[$],G=B.shadow;if(G===void 0){jt("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const tt=G.getFrameExtents();if(r.multiply(tt),s.copy(G.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/tt.x),r.x=s.x*tt.x,G.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/tt.y),r.y=s.y*tt.y,G.mapSize.y=s.y)),G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Cr){if(B.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new cn(r.x,r.y,{format:lr,type:gn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new Gr(r.x,r.y,Nn),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=$n,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xe,G.map.depthTexture.magFilter=Xe}else{B.isPointLight?(G.map=new Su(r.x),G.map.depthTexture=new jf(r.x,zn)):(G.map=new cn(r.x,r.y),G.map.depthTexture=new Gr(r.x,r.y,zn)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=$n;const ht=i.state.buffers.depth.getReversed();this.type===Fs?(G.map.depthTexture.compareFunction=ht?il:nl,G.map.depthTexture.minFilter=$e,G.map.depthTexture.magFilter=$e):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Xe,G.map.depthTexture.magFilter=Xe)}G.camera.updateProjectionMatrix()}const ut=G.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<ut;ht++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ht),i.clear();else{ht===0&&(i.setRenderTarget(G.map),i.clear());const Tt=G.getViewport(ht);a.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),Y.viewport(a)}if(B.isPointLight){const Tt=G.camera,Ht=G.matrix,Gt=B.distance||Tt.far;Gt!==Tt.far&&(Tt.far=Gt,Tt.updateProjectionMatrix()),wr.setFromMatrixPosition(B.matrixWorld),Tt.position.copy(wr),Wo.copy(Tt.position),Wo.add(m0[ht]),Tt.up.copy(g0[ht]),Tt.lookAt(Wo),Tt.updateMatrixWorld(),Ht.makeTranslation(-wr.x,-wr.y,-wr.z),Hc.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Hc,Tt.coordinateSystem,Tt.reversedDepth)}else G.updateMatrices(B);n=G.getFrustum(),w(F,q,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Cr&&D(G,q),G.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(T,x,A)};function D(N,F){const q=t.update(b);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new cn(r.x,r.y,{format:lr,type:gn})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(F,null,q,g,b,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(F,null,q,_,b,null)}function R(N,F,q,T){let x=null;const A=q.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(A!==void 0)x=A;else if(x=q.isPointLight===!0?c:l,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Y=x.uuid,H=F.uuid;let $=u[Y];$===void 0&&($={},u[Y]=$);let Q=$[H];Q===void 0&&(Q=x.clone(),$[H]=Q,F.addEventListener("dispose",I)),x=Q}if(x.visible=F.visible,x.wireframe=F.wireframe,T===Cr?x.side=F.shadowSide!==null?F.shadowSide:F.side:x.side=F.shadowSide!==null?F.shadowSide:d[F.side],x.alphaMap=F.alphaMap,x.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,x.map=F.map,x.clipShadows=F.clipShadows,x.clippingPlanes=F.clippingPlanes,x.clipIntersection=F.clipIntersection,x.displacementMap=F.displacementMap,x.displacementScale=F.displacementScale,x.displacementBias=F.displacementBias,x.wireframeLinewidth=F.wireframeLinewidth,x.linewidth=F.linewidth,q.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Y=i.properties.get(x);Y.light=q}return x}function w(N,F,q,T,x){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&x===Cr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,N.matrixWorld);const H=t.update(N),$=N.material;if(Array.isArray($)){const Q=H.groups;for(let B=0,G=Q.length;B<G;B++){const tt=Q[B],ut=$[tt.materialIndex];if(ut&&ut.visible){const ht=R(N,ut,T,x);N.onBeforeShadow(i,N,F,q,H,ht,tt),i.renderBufferDirect(q,null,H,ht,N,tt),N.onAfterShadow(i,N,F,q,H,ht,tt)}}}else if($.visible){const Q=R(N,$,T,x);N.onBeforeShadow(i,N,F,q,H,Q,null),i.renderBufferDirect(q,null,H,Q,N,null),N.onAfterShadow(i,N,F,q,H,Q,null)}}const Y=N.children;for(let H=0,$=Y.length;H<$;H++)w(Y[H],F,q,T,x)}function I(N){N.target.removeEventListener("dispose",I);for(const q in u){const T=u[q],x=N.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}const v0={[Ko]:Jo,[$o]:ea,[Qo]:na,[or]:ta,[Jo]:Ko,[ea]:$o,[na]:Qo,[ta]:or};function x0(i,t){function e(){let z=!1;const xt=new De;let ft=null;const At=new De(0,0,0,0);return{setMask:function(lt){ft!==lt&&!z&&(i.colorMask(lt,lt,lt,lt),ft=lt)},setLocked:function(lt){z=lt},setClear:function(lt,rt,dt,Wt,ve){ve===!0&&(lt*=Wt,rt*=Wt,dt*=Wt),xt.set(lt,rt,dt,Wt),At.equals(xt)===!1&&(i.clearColor(lt,rt,dt,Wt),At.copy(xt))},reset:function(){z=!1,ft=null,At.set(-1,0,0,0)}}}function n(){let z=!1,xt=!1,ft=null,At=null,lt=null;return{setReversed:function(rt){if(xt!==rt){const dt=t.get("EXT_clip_control");rt?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),xt=rt;const Wt=lt;lt=null,this.setClear(Wt)}},getReversed:function(){return xt},setTest:function(rt){rt?ot(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(rt){ft!==rt&&!z&&(i.depthMask(rt),ft=rt)},setFunc:function(rt){if(xt&&(rt=v0[rt]),At!==rt){switch(rt){case Ko:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=rt}},setLocked:function(rt){z=rt},setClear:function(rt){lt!==rt&&(xt&&(rt=1-rt),i.clearDepth(rt),lt=rt)},reset:function(){z=!1,ft=null,At=null,lt=null,xt=!1}}}function r(){let z=!1,xt=null,ft=null,At=null,lt=null,rt=null,dt=null,Wt=null,ve=null;return{setTest:function(oe){z||(oe?ot(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(oe){xt!==oe&&!z&&(i.stencilMask(oe),xt=oe)},setFunc:function(oe,en,Tn){(ft!==oe||At!==en||lt!==Tn)&&(i.stencilFunc(oe,en,Tn),ft=oe,At=en,lt=Tn)},setOp:function(oe,en,Tn){(rt!==oe||dt!==en||Wt!==Tn)&&(i.stencilOp(oe,en,Tn),rt=oe,dt=en,Wt=Tn)},setLocked:function(oe){z=oe},setClear:function(oe){ve!==oe&&(i.clearStencil(oe),ve=oe)},reset:function(){z=!1,xt=null,ft=null,At=null,lt=null,rt=null,dt=null,Wt=null,ve=null}}}const s=new e,a=new n,l=new r,c=new WeakMap,u=new WeakMap;let f={},d={},g=new WeakMap,_=[],y=null,b=!1,v=null,m=null,D=null,R=null,w=null,I=null,N=null,F=new Jt(0,0,0),q=0,T=!1,x=null,A=null,Y=null,H=null,$=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(tt)[1]),B=G>=1):tt.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),B=G>=2);let ut=null,ht={};const Tt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Gt=new De().fromArray(Tt),pe=new De().fromArray(Ht);function ce(z,xt,ft,At){const lt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(z,rt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<ft;dt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(xt+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return rt}const it={};it[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ot(i.DEPTH_TEST),a.setFunc(or),$t(!1),we(Bl),ot(i.CULL_FACE),qt(On);function ot(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function Ct(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function Zt(z,xt){return d[z]!==xt?(i.bindFramebuffer(z,xt),d[z]=xt,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Dt(z,xt){let ft=_,At=!1;if(z){ft=g.get(xt),ft===void 0&&(ft=[],g.set(xt,ft));const lt=z.textures;if(ft.length!==lt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,dt=lt.length;rt<dt;rt++)ft[rt]=i.COLOR_ATTACHMENT0+rt;ft.length=lt.length,At=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,At=!0);At&&i.drawBuffers(ft)}function re(z){return y!==z?(i.useProgram(z),y=z,!0):!1}const Le={[Ti]:i.FUNC_ADD,[Ah]:i.FUNC_SUBTRACT,[wh]:i.FUNC_REVERSE_SUBTRACT};Le[Ch]=i.MIN,Le[Rh]=i.MAX;const zt={[Ph]:i.ZERO,[Dh]:i.ONE,[Lh]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Bh]:i.SRC_ALPHA_SATURATE,[Fh]:i.DST_COLOR,[Ih]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[Zo]:i.ONE_MINUS_SRC_ALPHA,[Oh]:i.ONE_MINUS_DST_COLOR,[Nh]:i.ONE_MINUS_DST_ALPHA,[zh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Hh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(z,xt,ft,At,lt,rt,dt,Wt,ve,oe){if(z===On){b===!0&&(Ct(i.BLEND),b=!1);return}if(b===!1&&(ot(i.BLEND),b=!0),z!==bh){if(z!==v||oe!==T){if((m!==Ti||w!==Ti)&&(i.blendEquation(i.FUNC_ADD),m=Ti,w=Ti),oe)switch(z){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sr:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:fe("WebGLState: Invalid blending: ",z);break}else switch(z){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",z);break}D=null,R=null,I=null,N=null,F.set(0,0,0),q=0,v=z,T=oe}return}lt=lt||xt,rt=rt||ft,dt=dt||At,(xt!==m||lt!==w)&&(i.blendEquationSeparate(Le[xt],Le[lt]),m=xt,w=lt),(ft!==D||At!==R||rt!==I||dt!==N)&&(i.blendFuncSeparate(zt[ft],zt[At],zt[rt],zt[dt]),D=ft,R=At,I=rt,N=dt),(Wt.equals(F)===!1||ve!==q)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ve),F.copy(Wt),q=ve),v=z,T=!1}function me(z,xt){z.side===Zn?Ct(i.CULL_FACE):ot(i.CULL_FACE);let ft=z.side===ln;xt&&(ft=!ft),$t(ft),z.blending===ir&&z.transparent===!1?qt(On):qt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const At=z.stencilWrite;l.setTest(At),At&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ce(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(z){x!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),x=z)}function we(z){z!==yh?(ot(i.CULL_FACE),z!==A&&(z===Bl?i.cullFace(i.BACK):z===Eh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),A=z}function O(z){z!==Y&&(B&&i.lineWidth(z),Y=z)}function Ce(z,xt,ft){z?(ot(i.POLYGON_OFFSET_FILL),(H!==xt||$!==ft)&&(i.polygonOffset(xt,ft),H=xt,$=ft)):Ct(i.POLYGON_OFFSET_FILL)}function ae(z){z?ot(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function _e(z){z===void 0&&(z=i.TEXTURE0+Q-1),ut!==z&&(i.activeTexture(z),ut=z)}function Lt(z,xt,ft){ft===void 0&&(ut===null?ft=i.TEXTURE0+Q-1:ft=ut);let At=ht[ft];At===void 0&&(At={type:void 0,texture:void 0},ht[ft]=At),(At.type!==z||At.texture!==xt)&&(ut!==ft&&(i.activeTexture(ft),ut=ft),i.bindTexture(z,xt||it[z]),At.type=z,At.texture=xt)}function P(){const z=ht[ut];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(z){fe("WebGLState:",z)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(z){fe("WebGLState:",z)}}function nt(){try{i.texSubImage2D(...arguments)}catch(z){fe("WebGLState:",z)}}function st(){try{i.texSubImage3D(...arguments)}catch(z){fe("WebGLState:",z)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(z){fe("WebGLState:",z)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(z){fe("WebGLState:",z)}}function _t(){try{i.texStorage2D(...arguments)}catch(z){fe("WebGLState:",z)}}function Ut(){try{i.texStorage3D(...arguments)}catch(z){fe("WebGLState:",z)}}function kt(){try{i.texImage2D(...arguments)}catch(z){fe("WebGLState:",z)}}function at(){try{i.texImage3D(...arguments)}catch(z){fe("WebGLState:",z)}}function pt(z){Gt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Gt.copy(z))}function Rt(z){pe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),pe.copy(z))}function Nt(z,xt){let ft=u.get(xt);ft===void 0&&(ft=new WeakMap,u.set(xt,ft));let At=ft.get(z);At===void 0&&(At=i.getUniformBlockIndex(xt,z.name),ft.set(z,At))}function mt(z,xt){const At=u.get(xt).get(z);c.get(xt)!==At&&(i.uniformBlockBinding(xt,At,z.__bindingPointIndex),c.set(xt,At))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ut=null,ht={},d={},g=new WeakMap,_=[],y=null,b=!1,v=null,m=null,D=null,R=null,w=null,I=null,N=null,F=new Jt(0,0,0),q=0,T=!1,x=null,A=null,Y=null,H=null,$=null,Gt.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ot,disable:Ct,bindFramebuffer:Zt,drawBuffers:Dt,useProgram:re,setBlending:qt,setMaterial:me,setFlipSided:$t,setCullFace:we,setLineWidth:O,setPolygonOffset:Ce,setScissorTest:ae,activeTexture:_e,bindTexture:Lt,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:kt,texImage3D:at,updateUBOMapping:Nt,uniformBlockBinding:mt,texStorage2D:_t,texStorage3D:Ut,texSubImage2D:nt,texSubImage3D:st,compressedTexSubImage2D:et,compressedTexSubImage3D:It,scissor:pt,viewport:Rt,reset:Kt}}function M0(i,t,e,n,r,s,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new St,f=new WeakMap;let d;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,M){return _?new OffscreenCanvas(P,M):zr("canvas")}function b(P,M,W){let nt=1;const st=Lt(P);if((st.width>W||st.height>W)&&(nt=W/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(nt*st.width),It=Math.floor(nt*st.height);d===void 0&&(d=y(et,It));const _t=M?y(et,It):d;return _t.width=et,_t.height=It,_t.getContext("2d").drawImage(P,0,0,et,It),jt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+et+"x"+It+")."),_t}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function v(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(P,M,W,nt,st=!1){if(P!==null){if(i[P]!==void 0)return i[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=M;if(M===i.RED&&(W===i.FLOAT&&(et=i.R32F),W===i.HALF_FLOAT&&(et=i.R16F),W===i.UNSIGNED_BYTE&&(et=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.R8UI),W===i.UNSIGNED_SHORT&&(et=i.R16UI),W===i.UNSIGNED_INT&&(et=i.R32UI),W===i.BYTE&&(et=i.R8I),W===i.SHORT&&(et=i.R16I),W===i.INT&&(et=i.R32I)),M===i.RG&&(W===i.FLOAT&&(et=i.RG32F),W===i.HALF_FLOAT&&(et=i.RG16F),W===i.UNSIGNED_BYTE&&(et=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RG8UI),W===i.UNSIGNED_SHORT&&(et=i.RG16UI),W===i.UNSIGNED_INT&&(et=i.RG32UI),W===i.BYTE&&(et=i.RG8I),W===i.SHORT&&(et=i.RG16I),W===i.INT&&(et=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGB8UI),W===i.UNSIGNED_SHORT&&(et=i.RGB16UI),W===i.UNSIGNED_INT&&(et=i.RGB32UI),W===i.BYTE&&(et=i.RGB8I),W===i.SHORT&&(et=i.RGB16I),W===i.INT&&(et=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),W===i.UNSIGNED_INT&&(et=i.RGBA32UI),W===i.BYTE&&(et=i.RGBA8I),W===i.SHORT&&(et=i.RGBA16I),W===i.INT&&(et=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),M===i.RGBA){const It=st?qs:le.getTransfer(nt);W===i.FLOAT&&(et=i.RGBA32F),W===i.HALF_FLOAT&&(et=i.RGBA16F),W===i.UNSIGNED_BYTE&&(et=It===xe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function w(P,M){let W;return P?M===null||M===zn||M===Br?W=i.DEPTH24_STENCIL8:M===Nn?W=i.DEPTH32F_STENCIL8:M===Or&&(W=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zn||M===Br?W=i.DEPTH_COMPONENT24:M===Nn?W=i.DEPTH_COMPONENT32F:M===Or&&(W=i.DEPTH_COMPONENT16),W}function I(P,M){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xe&&P.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function N(P){const M=P.target;M.removeEventListener("dispose",N),q(M),M.isVideoTexture&&f.delete(M)}function F(P){const M=P.target;M.removeEventListener("dispose",F),x(M)}function q(P){const M=n.get(P);if(M.__webglInit===void 0)return;const W=P.source,nt=g.get(W);if(nt){const st=nt[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&T(P),Object.keys(nt).length===0&&g.delete(W)}n.remove(P)}function T(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const W=P.source,nt=g.get(W);delete nt[M.__cacheKey],a.memory.textures--}function x(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let st=0;st<M.__webglFramebuffer[nt].length;st++)i.deleteFramebuffer(M.__webglFramebuffer[nt][st]);else i.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[nt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=P.textures;for(let nt=0,st=W.length;nt<st;nt++){const et=n.get(W[nt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(W[nt])}n.remove(P)}let A=0;function Y(){A=0}function H(){const P=A;return P>=r.maxTextures&&jt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),A+=1,P}function $(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Q(P,M){const W=n.get(P);if(P.isVideoTexture&&ae(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const nt=P.image;if(nt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(W,P,M);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function B(P,M){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){it(W,P,M);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function G(P,M){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){it(W,P,M);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function tt(P,M){const W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){ot(W,P,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const ut={[sa]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},ht={[Xe]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[ho]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Tt={[qh]:i.NEVER,[Qh]:i.ALWAYS,[Zh]:i.LESS,[nl]:i.LEQUAL,[Kh]:i.EQUAL,[il]:i.GEQUAL,[Jh]:i.GREATER,[$h]:i.NOTEQUAL};function Ht(P,M){if(M.type===Nn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===$e||M.magFilter===ho||M.magFilter===cs||M.magFilter===Ai||M.minFilter===$e||M.minFilter===ho||M.minFilter===cs||M.minFilter===Ai)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ut[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ut[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ut[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ht[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ht[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xe||M.minFilter!==cs&&M.minFilter!==Ai||M.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Gt(P,M){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",N));const nt=M.source;let st=g.get(nt);st===void 0&&(st={},g.set(nt,st));const et=$(M);if(et!==P.__cacheKey){st[et]===void 0&&(st[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),st[et].usedTimes++;const It=st[P.__cacheKey];It!==void 0&&(st[P.__cacheKey].usedTimes--,It.usedTimes===0&&T(M)),P.__cacheKey=et,P.__webglTexture=st[et].texture}return W}function pe(P,M,W){return Math.floor(Math.floor(P/W)/M)}function ce(P,M,W,nt){const et=P.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,nt,M.data);else{et.sort((at,pt)=>at.start-pt.start);let It=0;for(let at=1;at<et.length;at++){const pt=et[It],Rt=et[at],Nt=pt.start+pt.count,mt=pe(Rt.start,M.width,4),Kt=pe(pt.start,M.width,4);Rt.start<=Nt+1&&mt===Kt&&pe(Rt.start+Rt.count-1,M.width,4)===mt?pt.count=Math.max(pt.count,Rt.start+Rt.count-pt.start):(++It,et[It]=Rt)}et.length=It+1;const _t=i.getParameter(i.UNPACK_ROW_LENGTH),Ut=i.getParameter(i.UNPACK_SKIP_PIXELS),kt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let at=0,pt=et.length;at<pt;at++){const Rt=et[at],Nt=Math.floor(Rt.start/4),mt=Math.ceil(Rt.count/4),Kt=Nt%M.width,z=Math.floor(Nt/M.width),xt=mt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Kt,z,xt,ft,W,nt,M.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function it(P,M,W){let nt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=i.TEXTURE_3D);const st=Gt(P,M),et=M.source;e.bindTexture(nt,P.__webglTexture,i.TEXTURE0+W);const It=n.get(et);if(et.version!==It.__version||st===!0){e.activeTexture(i.TEXTURE0+W);const _t=le.getPrimaries(le.workingColorSpace),Ut=M.colorSpace===ci?null:le.getPrimaries(M.colorSpace),kt=M.colorSpace===ci||_t===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let at=b(M.image,!1,r.maxTextureSize);at=_e(M,at);const pt=s.convert(M.format,M.colorSpace),Rt=s.convert(M.type);let Nt=R(M.internalFormat,pt,Rt,M.colorSpace,M.isVideoTexture);Ht(nt,M);let mt;const Kt=M.mipmaps,z=M.isVideoTexture!==!0,xt=It.__version===void 0||st===!0,ft=et.dataReady,At=I(M,at);if(M.isDepthTexture)Nt=w(M.format===wi,M.type),xt&&(z?e.texStorage2D(i.TEXTURE_2D,1,Nt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,pt,Rt,null));else if(M.isDataTexture)if(Kt.length>0){z&&xt&&e.texStorage2D(i.TEXTURE_2D,At,Nt,Kt[0].width,Kt[0].height);for(let lt=0,rt=Kt.length;lt<rt;lt++)mt=Kt[lt],z?ft&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,lt,Nt,mt.width,mt.height,0,pt,Rt,mt.data);M.generateMipmaps=!1}else z?(xt&&e.texStorage2D(i.TEXTURE_2D,At,Nt,at.width,at.height),ft&&ce(M,at,pt,Rt)):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,pt,Rt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,Kt[0].width,Kt[0].height,at.depth);for(let lt=0,rt=Kt.length;lt<rt;lt++)if(mt=Kt[lt],M.format!==Pn)if(pt!==null)if(z){if(ft)if(M.layerUpdates.size>0){const dt=vc(mt.width,mt.height,M.format,M.type);for(const Wt of M.layerUpdates){const ve=mt.data.subarray(Wt*dt/mt.data.BYTES_PER_ELEMENT,(Wt+1)*dt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Wt,mt.width,mt.height,1,pt,ve)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,mt.width,mt.height,at.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Nt,mt.width,mt.height,at.depth,0,mt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,mt.width,mt.height,at.depth,pt,Rt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Nt,mt.width,mt.height,at.depth,0,pt,Rt,mt.data)}else{z&&xt&&e.texStorage2D(i.TEXTURE_2D,At,Nt,Kt[0].width,Kt[0].height);for(let lt=0,rt=Kt.length;lt<rt;lt++)mt=Kt[lt],M.format!==Pn?pt!==null?z?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Nt,mt.width,mt.height,0,mt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ft&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(i.TEXTURE_2D,lt,Nt,mt.width,mt.height,0,pt,Rt,mt.data)}else if(M.isDataArrayTexture)if(z){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,at.width,at.height,at.depth),ft)if(M.layerUpdates.size>0){const lt=vc(at.width,at.height,M.format,M.type);for(const rt of M.layerUpdates){const dt=at.data.subarray(rt*lt/at.data.BYTES_PER_ELEMENT,(rt+1)*lt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,at.width,at.height,1,pt,Rt,dt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,pt,Rt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,at.width,at.height,at.depth,0,pt,Rt,at.data);else if(M.isData3DTexture)z?(xt&&e.texStorage3D(i.TEXTURE_3D,At,Nt,at.width,at.height,at.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,pt,Rt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,at.width,at.height,at.depth,0,pt,Rt,at.data);else if(M.isFramebufferTexture){if(xt)if(z)e.texStorage2D(i.TEXTURE_2D,At,Nt,at.width,at.height);else{let lt=at.width,rt=at.height;for(let dt=0;dt<At;dt++)e.texImage2D(i.TEXTURE_2D,dt,Nt,lt,rt,0,pt,Rt,null),lt>>=1,rt>>=1}}else if(Kt.length>0){if(z&&xt){const lt=Lt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,At,Nt,lt.width,lt.height)}for(let lt=0,rt=Kt.length;lt<rt;lt++)mt=Kt[lt],z?ft&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,pt,Rt,mt):e.texImage2D(i.TEXTURE_2D,lt,Nt,pt,Rt,mt);M.generateMipmaps=!1}else if(z){if(xt){const lt=Lt(at);e.texStorage2D(i.TEXTURE_2D,At,Nt,lt.width,lt.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Rt,at)}else e.texImage2D(i.TEXTURE_2D,0,Nt,pt,Rt,at);v(M)&&m(nt),It.__version=et.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ot(P,M,W){if(M.image.length!==6)return;const nt=Gt(P,M),st=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const et=n.get(st);if(st.version!==et.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);const It=le.getPrimaries(le.workingColorSpace),_t=M.colorSpace===ci?null:le.getPrimaries(M.colorSpace),Ut=M.colorSpace===ci||It===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const kt=M.isCompressedTexture||M.image[0].isCompressedTexture,at=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let rt=0;rt<6;rt++)!kt&&!at?pt[rt]=b(M.image[rt],!0,r.maxCubemapSize):pt[rt]=at?M.image[rt].image:M.image[rt],pt[rt]=_e(M,pt[rt]);const Rt=pt[0],Nt=s.convert(M.format,M.colorSpace),mt=s.convert(M.type),Kt=R(M.internalFormat,Nt,mt,M.colorSpace),z=M.isVideoTexture!==!0,xt=et.__version===void 0||nt===!0,ft=st.dataReady;let At=I(M,Rt);Ht(i.TEXTURE_CUBE_MAP,M);let lt;if(kt){z&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Kt,Rt.width,Rt.height);for(let rt=0;rt<6;rt++){lt=pt[rt].mipmaps;for(let dt=0;dt<lt.length;dt++){const Wt=lt[dt];M.format!==Pn?Nt!==null?z?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt,0,0,Wt.width,Wt.height,Nt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt,Kt,Wt.width,Wt.height,0,Wt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt,0,0,Wt.width,Wt.height,Nt,mt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt,Kt,Wt.width,Wt.height,0,Nt,mt,Wt.data)}}}else{if(lt=M.mipmaps,z&&xt){lt.length>0&&At++;const rt=Lt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(at){z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt[rt].width,pt[rt].height,Nt,mt,pt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,pt[rt].width,pt[rt].height,0,Nt,mt,pt[rt].data);for(let dt=0;dt<lt.length;dt++){const ve=lt[dt].image[rt].image;z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt+1,0,0,ve.width,ve.height,Nt,mt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt+1,Kt,ve.width,ve.height,0,Nt,mt,ve.data)}}else{z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Nt,mt,pt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Nt,mt,pt[rt]);for(let dt=0;dt<lt.length;dt++){const Wt=lt[dt];z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt+1,0,0,Nt,mt,Wt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt+1,Kt,Nt,mt,Wt.image[rt])}}}v(M)&&m(i.TEXTURE_CUBE_MAP),et.__version=st.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ct(P,M,W,nt,st,et){const It=s.convert(W.format,W.colorSpace),_t=s.convert(W.type),Ut=R(W.internalFormat,It,_t,W.colorSpace),kt=n.get(M),at=n.get(W);if(at.__renderTarget=M,!kt.__hasExternalTextures){const pt=Math.max(1,M.width>>et),Rt=Math.max(1,M.height>>et);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,et,Ut,pt,Rt,M.depth,0,It,_t,null):e.texImage2D(st,et,Ut,pt,Rt,0,It,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Ce(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,st,at.__webglTexture,0,O(M)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,st,at.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(P,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const nt=M.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,et=w(M.stencilBuffer,st),It=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(M),et,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(M),et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,et,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,P)}else{const nt=M.textures;for(let st=0;st<nt.length;st++){const et=nt[st],It=s.convert(et.format,et.colorSpace),_t=s.convert(et.type),Ut=R(et.internalFormat,It,_t,et.colorSpace);Ce(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(M),Ut,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(M),Ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(P,M,W){const nt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(M.depthTexture);if(st.__renderTarget=M,(!st.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),nt){if(st.__webglInit===void 0&&(st.__webglInit=!0,M.depthTexture.addEventListener("dispose",N)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,M.depthTexture);const kt=s.convert(M.depthTexture.format),at=s.convert(M.depthTexture.type);let pt;M.depthTexture.format===$n?pt=i.DEPTH_COMPONENT24:M.depthTexture.format===wi&&(pt=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,pt,M.width,M.height,0,kt,at,null)}}else Q(M.depthTexture,0);const et=st.__webglTexture,It=O(M),_t=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Ut=M.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===$n)Ce(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,_t,et,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,_t,et,0);else if(M.depthTexture.format===wi)Ce(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,_t,et,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,_t,et,0);else throw new Error("Unknown depthTexture format")}function re(P){const M=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const nt=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),nt){const st=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),M.__depthDisposeCallback=st}M.__boundDepthTexture=nt}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let nt=0;nt<6;nt++)Dt(M.__webglFramebuffer[nt],P,nt);else{const nt=P.texture.mipmaps;nt&&nt.length>0?Dt(M.__webglFramebuffer[0],P,0):Dt(M.__webglFramebuffer,P,0)}else if(W){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]===void 0)M.__webglDepthbuffer[nt]=i.createRenderbuffer(),Zt(M.__webglDepthbuffer[nt],P,!1);else{const st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,et)}}else{const nt=P.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Zt(M.__webglDepthbuffer,P,!1);else{const st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(P,M,W){const nt=n.get(P);M!==void 0&&Ct(nt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&re(P)}function zt(P){const M=P.texture,W=n.get(P),nt=n.get(M);P.addEventListener("dispose",F);const st=P.textures,et=P.isWebGLCubeRenderTarget===!0,It=st.length>1;if(It||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=M.version,a.memory.textures++),et){W.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[_t]=[];for(let Ut=0;Ut<M.mipmaps.length;Ut++)W.__webglFramebuffer[_t][Ut]=i.createFramebuffer()}else W.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let _t=0;_t<M.mipmaps.length;_t++)W.__webglFramebuffer[_t]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(It)for(let _t=0,Ut=st.length;_t<Ut;_t++){const kt=n.get(st[_t]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Ce(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _t=0;_t<st.length;_t++){const Ut=st[_t];W.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[_t]);const kt=s.convert(Ut.format,Ut.colorSpace),at=s.convert(Ut.type),pt=R(Ut.internalFormat,kt,at,Ut.colorSpace,P.isXRRenderTarget===!0),Rt=O(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,pt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,W.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Zt(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,M);for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)Ct(W.__webglFramebuffer[_t][Ut],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut);else Ct(W.__webglFramebuffer[_t],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);v(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let _t=0,Ut=st.length;_t<Ut;_t++){const kt=st[_t],at=n.get(kt);let pt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,at.__webglTexture),Ht(pt,kt),Ct(W.__webglFramebuffer,P,kt,i.COLOR_ATTACHMENT0+_t,pt,0),v(kt)&&m(pt)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,nt.__webglTexture),Ht(_t,M),M.mipmaps&&M.mipmaps.length>0)for(let Ut=0;Ut<M.mipmaps.length;Ut++)Ct(W.__webglFramebuffer[Ut],P,M,i.COLOR_ATTACHMENT0,_t,Ut);else Ct(W.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,_t,0);v(M)&&m(_t),e.unbindTexture()}P.depthBuffer&&re(P)}function qt(P){const M=P.textures;for(let W=0,nt=M.length;W<nt;W++){const st=M[W];if(v(st)){const et=D(P),It=n.get(st).__webglTexture;e.bindTexture(et,It),m(et),e.unbindTexture()}}}const me=[],$t=[];function we(P){if(P.samples>0){if(Ce(P)===!1){const M=P.textures,W=P.width,nt=P.height;let st=i.COLOR_BUFFER_BIT;const et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(P),_t=M.length>1;if(_t)for(let kt=0;kt<M.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Ut=P.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let kt=0;kt<M.length;kt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[kt]);const at=n.get(M[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,W,nt,0,0,W,nt,st,i.NEAREST),c===!0&&(me.length=0,$t.length=0,me.push(i.COLOR_ATTACHMENT0+kt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(me.push(et),$t.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let kt=0;kt<M.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,It.__webglColorRenderbuffer[kt]);const at=n.get(M[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function O(P){return Math.min(r.maxSamples,P.samples)}function Ce(P){const M=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(P){const M=a.render.frame;f.get(P)!==M&&(f.set(P,M),P.update())}function _e(P,M){const W=P.colorSpace,nt=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==cr&&W!==ci&&(le.getTransfer(W)===xe?(nt!==Pn||st!==En)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",W)),M}function Lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=Y,this.setTexture2D=Q,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=tt,this.rebindTextures=Le,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function S0(i,t){function e(n,r=ci){let s;const a=le.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return i.BYTE;if(n===su)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===lu)return i.ALPHA;if(n===cu)return i.RGB;if(n===Pn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===uu)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===lr)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===Os||n===Bs||n===zs||n===Vs)if(a===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===la||n===ca||n===ua)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===la)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===fa||n===da||n===pa||n===ma||n===ga||n===_a)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ha||n===fa)return a===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===da)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===pa)return s.COMPRESSED_R11_EAC;if(n===ma)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ga)return s.COMPRESSED_RG11_EAC;if(n===_a)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===va||n===xa||n===Ma||n===Sa||n===ya||n===Ea||n===Ta||n===ba||n===Aa||n===wa||n===Ca||n===Ra||n===Pa||n===Da)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===va)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Ua||n===Ia)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===La)return a===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ia)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===Ba)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Na)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Eu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ye({vertexShader:y0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _n(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b0 extends Di{constructor(t,e){super();const n=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,f=null,d=null,g=null,_=null,y=null;const b=typeof XRWebGLBinding<"u",v=new T0,m={},D=e.getContextAttributes();let R=null,w=null;const I=[],N=[],F=new St;let q=null;const T=new yn;T.viewport=new De;const x=new yn;x.viewport=new De;const A=[T,x],Y=new Ud;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ot=I[it];return ot===void 0&&(ot=new Uo,I[it]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(it){let ot=I[it];return ot===void 0&&(ot=new Uo,I[it]=ot),ot.getGripSpace()},this.getHand=function(it){let ot=I[it];return ot===void 0&&(ot=new Uo,I[it]=ot),ot.getHandSpace()};function Q(it){const ot=N.indexOf(it.inputSource);if(ot===-1)return;const Ct=I[ot];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,u||a),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let it=0;it<I.length;it++){const ot=N[it];ot!==null&&(N[it]=null,I[it].disconnect(ot))}H=null,$=null,v.reset();for(const it in m)delete m[it];t.setRenderTarget(R),_=null,g=null,d=null,r=null,w=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(q),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){l=it,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(R=t.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await e.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(F),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Zt=null,Dt=null;D.depth&&(Dt=D.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=D.stencil?wi:$n,Zt=D.stencil?Br:zn);const re={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:s};d=this.getBinding(),g=d.createProjectionLayer(re),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),w=new cn(g.textureWidth,g.textureHeight,{format:Pn,type:En,depthTexture:new Gr(g.textureWidth,g.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ct={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,Ct),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),w=new cn(_.framebufferWidth,_.framebufferHeight,{format:Pn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(it){for(let ot=0;ot<it.removed.length;ot++){const Ct=it.removed[ot],Zt=N.indexOf(Ct);Zt>=0&&(N[Zt]=null,I[Zt].disconnect(Ct))}for(let ot=0;ot<it.added.length;ot++){const Ct=it.added[ot];let Zt=N.indexOf(Ct);if(Zt===-1){for(let re=0;re<I.length;re++)if(re>=N.length){N.push(Ct),Zt=re;break}else if(N[re]===null){N[re]=Ct,Zt=re;break}if(Zt===-1)break}const Dt=I[Zt];Dt&&Dt.connect(Ct)}}const tt=new k,ut=new k;function ht(it,ot,Ct){tt.setFromMatrixPosition(ot.matrixWorld),ut.setFromMatrixPosition(Ct.matrixWorld);const Zt=tt.distanceTo(ut),Dt=ot.projectionMatrix.elements,re=Ct.projectionMatrix.elements,Le=Dt[14]/(Dt[10]-1),zt=Dt[14]/(Dt[10]+1),qt=(Dt[9]+1)/Dt[5],me=(Dt[9]-1)/Dt[5],$t=(Dt[8]-1)/Dt[0],we=(re[8]+1)/re[0],O=Le*$t,Ce=Le*we,ae=Zt/(-$t+we),_e=ae*-$t;if(ot.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(_e),it.translateZ(ae),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Dt[10]===-1)it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Lt=Le+ae,P=zt+ae,M=O-_e,W=Ce+(Zt-_e),nt=qt*zt/P*Lt,st=me*zt/P*Lt;it.projectionMatrix.makePerspective(M,W,nt,st,Lt,P),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Tt(it,ot){ot===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ot.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let ot=it.near,Ct=it.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(Ct=v.depthFar)),Y.near=x.near=T.near=ot,Y.far=x.far=T.far=Ct,(H!==Y.near||$!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),H=Y.near,$=Y.far),Y.layers.mask=it.layers.mask|6,T.layers.mask=Y.layers.mask&3,x.layers.mask=Y.layers.mask&5;const Zt=it.parent,Dt=Y.cameras;Tt(Y,Zt);for(let re=0;re<Dt.length;re++)Tt(Dt[re],Zt);Dt.length===2?ht(Y,T,x):Y.projectionMatrix.copy(T.projectionMatrix),Ht(it,Y,Zt)};function Ht(it,ot,Ct){Ct===null?it.matrix.copy(ot.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ot.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Hr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&_===null))return c},this.setFoveation=function(it){c=it,g!==null&&(g.fixedFoveation=it),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=it)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Y)},this.getCameraTexture=function(it){return m[it]};let Gt=null;function pe(it,ot){if(f=ot.getViewerPose(u||a),y=ot,f!==null){const Ct=f.views;_!==null&&(t.setRenderTargetFramebuffer(w,_.framebuffer),t.setRenderTarget(w));let Zt=!1;Ct.length!==Y.cameras.length&&(Y.cameras.length=0,Zt=!0);for(let zt=0;zt<Ct.length;zt++){const qt=Ct[zt];let me=null;if(_!==null)me=_.getViewport(qt);else{const we=d.getViewSubImage(g,qt);me=we.viewport,zt===0&&(t.setRenderTargetTextures(w,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(w))}let $t=A[zt];$t===void 0&&($t=new yn,$t.layers.enable(zt),$t.viewport=new De,A[zt]=$t),$t.matrix.fromArray(qt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(qt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(me.x,me.y,me.width,me.height),zt===0&&(Y.matrix.copy($t.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Zt===!0&&Y.cameras.push($t)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=n.getBinding();const zt=d.getDepthInformation(Ct[0]);zt&&zt.isValid&&zt.texture&&v.init(zt,r.renderState)}if(Dt&&Dt.includes("camera-access")&&b){t.state.unbindTexture(),d=n.getBinding();for(let zt=0;zt<Ct.length;zt++){const qt=Ct[zt].camera;if(qt){let me=m[qt];me||(me=new Eu,m[qt]=me);const $t=d.getCameraImage(qt);me.sourceTexture=$t}}}}for(let Ct=0;Ct<I.length;Ct++){const Zt=N[Ct],Dt=I[Ct];Zt!==null&&Dt!==void 0&&Dt.update(Zt,ot,u||a)}Gt&&Gt(it,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),y=null}const ce=new Iu;ce.setAnimationLoop(pe),this.setAnimationLoop=function(it){Gt=it},this.dispose=function(){}}}const Ei=new Vn,A0=new Pe;function w0(i,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,vu(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,D,R,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),d(v,m)):m.isMeshPhongMaterial?(s(v,m),f(v,m)):m.isMeshStandardMaterial?(s(v,m),g(v,m),m.isMeshPhysicalMaterial&&_(v,m,w)):m.isMeshMatcapMaterial?(s(v,m),y(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),b(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(a(v,m),m.isLineDashedMaterial&&l(v,m)):m.isPointsMaterial?c(v,m,D,R):m.isSpriteMaterial?u(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===ln&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===ln&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const D=t.get(m),R=D.envMap,w=D.envMapRotation;R&&(v.envMap.value=R,Ei.copy(w),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),v.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Ei)),v.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function a(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function l(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function c(v,m,D,R){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*D,v.scale.value=R*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function u(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function f(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function d(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function _(v,m,D){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=D.texture,v.transmissionSamplerSize.value.set(D.width,D.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,m){m.matcap&&(v.matcap.value=m.matcap)}function b(v,m){const D=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(D.matrixWorld),v.nearDistance.value=D.shadow.camera.near,v.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function C0(i,t,e,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(D,R){const w=R.program;n.uniformBlockBinding(D,w)}function u(D,R){let w=r[D.id];w===void 0&&(y(D),w=f(D),r[D.id]=w,D.addEventListener("dispose",v));const I=R.program;n.updateUBOMapping(D,I);const N=t.render.frame;s[D.id]!==N&&(g(D),s[D.id]=N)}function f(D){const R=d();D.__bindingPointIndex=R;const w=i.createBuffer(),I=D.__size,N=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,w),w}function d(){for(let D=0;D<l;D++)if(a.indexOf(D)===-1)return a.push(D),D;return fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const R=r[D.id],w=D.uniforms,I=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let N=0,F=w.length;N<F;N++){const q=Array.isArray(w[N])?w[N]:[w[N]];for(let T=0,x=q.length;T<x;T++){const A=q[T];if(_(A,N,T,I)===!0){const Y=A.__offset,H=Array.isArray(A.value)?A.value:[A.value];let $=0;for(let Q=0;Q<H.length;Q++){const B=H[Q],G=b(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,Y+$,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,$),$+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(D,R,w,I){const N=D.value,F=R+"_"+w;if(I[F]===void 0)return typeof N=="number"||typeof N=="boolean"?I[F]=N:I[F]=N.clone(),!0;{const q=I[F];if(typeof N=="number"||typeof N=="boolean"){if(q!==N)return I[F]=N,!0}else if(q.equals(N)===!1)return q.copy(N),!0}return!1}function y(D){const R=D.uniforms;let w=0;const I=16;for(let F=0,q=R.length;F<q;F++){const T=Array.isArray(R[F])?R[F]:[R[F]];for(let x=0,A=T.length;x<A;x++){const Y=T[x],H=Array.isArray(Y.value)?Y.value:[Y.value];for(let $=0,Q=H.length;$<Q;$++){const B=H[$],G=b(B),tt=w%I,ut=tt%G.boundary,ht=tt+ut;w+=ut,ht!==0&&I-ht<G.storage&&(w+=I-ht),Y.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=G.storage}}}const N=w%I;return N>0&&(w+=I-N),D.__size=w,D.__cache={},this}function b(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):jt("WebGLRenderer: Unsupported uniform value type.",D),R}function v(D){const R=D.target;R.removeEventListener("dispose",v);const w=a.indexOf(R.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function m(){for(const D in r)i.deleteBuffer(r[D]);a=[],r={},s={}}return{bind:c,update:u,dispose:m}}const R0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function P0(){return Ln===null&&(Ln=new Gf(R0,16,16,lr,gn),Ln.name="DFG_LUT",Ln.minFilter=$e,Ln.magFilter=$e,Ln.wrapS=Kn,Ln.wrapT=Kn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class D0{constructor(t={}){const{canvas:e=tf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:g=!1,outputBufferType:_=En}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;const b=_,v=new Set([el,tl,Qa]),m=new Set([En,zn,Or,Br,Ja,$a]),D=new Uint32Array(4),R=new Int32Array(4);let w=null,I=null;const N=[],F=[];let q=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let x=!1;this._outputColorSpace=Sn;let A=0,Y=0,H=null,$=-1,Q=null;const B=new De,G=new De;let tt=null;const ut=new Jt(0);let ht=0,Tt=e.width,Ht=e.height,Gt=1,pe=null,ce=null;const it=new De(0,0,Tt,Ht),ot=new De(0,0,Tt,Ht);let Ct=!1;const Zt=new yu;let Dt=!1,re=!1;const Le=new Pe,zt=new k,qt=new De,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function we(){return H===null?Gt:1}let O=n;function Ce(E,X){return e.getContext(E,X)}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",oe,!1),O===null){const X="webgl2";if(O=Ce(X,E),O===null)throw Ce(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw fe("WebGLRenderer: "+E.message),E}let ae,_e,Lt,P,M,W,nt,st,et,It,_t,Ut,kt,at,pt,Rt,Nt,mt,Kt,z,xt,ft,At,lt;function rt(){ae=new Pg(O),ae.init(),ft=new S0(O,ae),_e=new Sg(O,ae,t,ft),Lt=new x0(O,ae),_e.reversedDepthBuffer&&g&&Lt.buffers.depth.setReversed(!0),P=new Ug(O),M=new r0,W=new M0(O,ae,Lt,M,_e,ft,P),nt=new Eg(T),st=new Rg(T),et=new Od(O),At=new xg(O,et),It=new Dg(O,et,P,At),_t=new Ng(O,It,et,P),Kt=new Ig(O,_e,W),Rt=new yg(M),Ut=new i0(T,nt,st,ae,_e,At,Rt),kt=new w0(T,M),at=new o0,pt=new f0(ae),mt=new vg(T,nt,st,Lt,_t,y,c),Nt=new _0(T,_t,_e),lt=new C0(O,P,_e,Lt),z=new Mg(O,ae,P),xt=new Lg(O,ae,P),P.programs=Ut.programs,T.capabilities=_e,T.extensions=ae,T.properties=M,T.renderLists=at,T.shadowMap=Nt,T.state=Lt,T.info=P}rt(),b!==En&&(q=new Og(b,e.width,e.height,r,s));const dt=new b0(T,O);this.xr=dt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Gt},this.setPixelRatio=function(E){E!==void 0&&(Gt=E,this.setSize(Tt,Ht,!1))},this.getSize=function(E){return E.set(Tt,Ht)},this.setSize=function(E,X,K=!0){if(dt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=E,Ht=X,e.width=Math.floor(E*Gt),e.height=Math.floor(X*Gt),K===!0&&(e.style.width=E+"px",e.style.height=X+"px"),q!==null&&q.setSize(e.width,e.height),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(Tt*Gt,Ht*Gt).floor()},this.setDrawingBufferSize=function(E,X,K){Tt=E,Ht=X,Gt=K,e.width=Math.floor(E*K),e.height=Math.floor(X*K),this.setViewport(0,0,E,X)},this.setEffects=function(E){if(b===En){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let X=0;X<E.length;X++)if(E[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(it)},this.setViewport=function(E,X,K,Z){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,X,K,Z),Lt.viewport(B.copy(it).multiplyScalar(Gt).round())},this.getScissor=function(E){return E.copy(ot)},this.setScissor=function(E,X,K,Z){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,X,K,Z),Lt.scissor(G.copy(ot).multiplyScalar(Gt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(E){Lt.setScissorTest(Ct=E)},this.setOpaqueSort=function(E){pe=E},this.setTransparentSort=function(E){ce=E},this.getClearColor=function(E){return E.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(E=!0,X=!0,K=!0){let Z=0;if(E){let j=!1;if(H!==null){const gt=H.texture.format;j=v.has(gt)}if(j){const gt=H.texture.type,yt=m.has(gt),Mt=mt.getClearColor(),Pt=mt.getClearAlpha(),Ft=Mt.r,Vt=Mt.g,Bt=Mt.b;yt?(D[0]=Ft,D[1]=Vt,D[2]=Bt,D[3]=Pt,O.clearBufferuiv(O.COLOR,0,D)):(R[0]=Ft,R[1]=Vt,R[2]=Bt,R[3]=Pt,O.clearBufferiv(O.COLOR,0,R))}else Z|=O.COLOR_BUFFER_BIT}X&&(Z|=O.DEPTH_BUFFER_BIT),K&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),mt.dispose(),at.dispose(),pt.dispose(),M.dispose(),nt.dispose(),st.dispose(),_t.dispose(),At.dispose(),lt.dispose(),Ut.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",gr),dt.removeEventListener("sessionend",Ae),Be.stop()};function Wt(E){E.preventDefault(),Xl("WebGLRenderer: Context Lost."),x=!0}function ve(){Xl("WebGLRenderer: Context Restored."),x=!1;const E=P.autoReset,X=Nt.enabled,K=Nt.autoUpdate,Z=Nt.needsUpdate,j=Nt.type;rt(),P.autoReset=E,Nt.enabled=X,Nt.autoUpdate=K,Nt.needsUpdate=Z,Nt.type=j}function oe(E){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function en(E){const X=E.target;X.removeEventListener("dispose",en),Tn(X)}function Tn(E){Qn(E),M.remove(E)}function Qn(E){const X=M.get(E).programs;X!==void 0&&(X.forEach(function(K){Ut.releaseProgram(K)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,K,Z,j,gt){X===null&&(X=me);const yt=j.isMesh&&j.matrixWorld.determinant()<0,Mt=vr(E,X,K,Z,j);Lt.setMaterial(Z,yt);let Pt=K.index,Ft=1;if(Z.wireframe===!0){if(Pt=It.getWireframeAttribute(K),Pt===void 0)return;Ft=2}const Vt=K.drawRange,Bt=K.attributes.position;let te=Vt.start*Ft,de=(Vt.start+Vt.count)*Ft;gt!==null&&(te=Math.max(te,gt.start*Ft),de=Math.min(de,(gt.start+gt.count)*Ft)),Pt!==null?(te=Math.max(te,0),de=Math.min(de,Pt.count)):Bt!=null&&(te=Math.max(te,0),de=Math.min(de,Bt.count));const Ee=de-te;if(Ee<0||Ee===1/0)return;At.setup(j,Z,Mt,K,Pt);let Te,ge=z;if(Pt!==null&&(Te=et.get(Pt),ge=xt,ge.setIndex(Te)),j.isMesh)Z.wireframe===!0?(Lt.setLineWidth(Z.wireframeLinewidth*we()),ge.setMode(O.LINES)):ge.setMode(O.TRIANGLES);else if(j.isLine){let wt=Z.linewidth;wt===void 0&&(wt=1),Lt.setLineWidth(wt*we()),j.isLineSegments?ge.setMode(O.LINES):j.isLineLoop?ge.setMode(O.LINE_LOOP):ge.setMode(O.LINE_STRIP)}else j.isPoints?ge.setMode(O.POINTS):j.isSprite&&ge.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Vr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ge.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const wt=j._multiDrawStarts,ue=j._multiDrawCounts,se=j._multiDrawCount,ze=Pt?et.get(Pt).bytesPerElement:1,kn=M.get(Z).currentProgram.getUniforms();for(let Ze=0;Ze<se;Ze++)kn.setValue(O,"_gl_DrawID",Ze),ge.render(wt[Ze]/ze,ue[Ze])}else if(j.isInstancedMesh)ge.renderInstances(te,Ee,j.count);else if(K.isInstancedBufferGeometry){const wt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ue=Math.min(K.instanceCount,wt);ge.renderInstances(te,Ee,ue)}else ge.render(te,Ee)};function is(E,X,K){E.transparent===!0&&E.side===Zn&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,Dn(E,X,K),E.side=fi,E.needsUpdate=!0,Dn(E,X,K),E.side=Zn):Dn(E,X,K)}this.compile=function(E,X,K=null){K===null&&(K=E),I=pt.get(K),I.init(X),F.push(I),K.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(I.pushLight(j),j.castShadow&&I.pushShadow(j))}),E!==K&&E.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(I.pushLight(j),j.castShadow&&I.pushShadow(j))}),I.setupLights();const Z=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const gt=j.material;if(gt)if(Array.isArray(gt))for(let yt=0;yt<gt.length;yt++){const Mt=gt[yt];is(Mt,K,j),Z.add(Mt)}else is(gt,K,j),Z.add(gt)}),I=F.pop(),Z},this.compileAsync=function(E,X,K=null){const Z=this.compile(E,X,K);return new Promise(j=>{function gt(){if(Z.forEach(function(yt){M.get(yt).currentProgram.isReady()&&Z.delete(yt)}),Z.size===0){j(E);return}setTimeout(gt,10)}ae.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let hn=null;function Gn(E){hn&&hn(E)}function gr(){Be.stop()}function Ae(){Be.start()}const Be=new Iu;Be.setAnimationLoop(Gn),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(E){hn=E,dt.setAnimationLoop(E),E===null?Be.stop():Be.start()},dt.addEventListener("sessionstart",gr),dt.addEventListener("sessionend",Ae),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;const K=dt.enabled===!0&&dt.isPresenting===!0,Z=q!==null&&(H===null||K)&&q.begin(T,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(X),X=dt.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,X,H),I=pt.get(E,F.length),I.init(X),F.push(I),Le.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Zt.setFromProjectionMatrix(Le,Fn,X.reversedDepth),re=this.localClippingEnabled,Dt=Rt.init(this.clippingPlanes,re),w=at.get(E,N.length),w.init(),N.push(w),dt.enabled===!0&&dt.isPresenting===!0){const yt=T.xr.getDepthSensingMesh();yt!==null&&di(yt,X,-1/0,T.sortObjects)}di(E,X,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(pe,ce),$t=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,$t&&mt.addToRenderList(w,E),this.info.render.frame++,Dt===!0&&Rt.beginShadows();const j=I.state.shadowsArray;if(Nt.render(j,E,X),Dt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&q.hasRenderPass())===!1){const yt=w.opaque,Mt=w.transmissive;if(I.setupLights(),X.isArrayCamera){const Pt=X.cameras;if(Mt.length>0)for(let Ft=0,Vt=Pt.length;Ft<Vt;Ft++){const Bt=Pt[Ft];pi(yt,Mt,E,Bt)}$t&&mt.render(E);for(let Ft=0,Vt=Pt.length;Ft<Vt;Ft++){const Bt=Pt[Ft];rs(w,E,Bt,Bt.viewport)}}else Mt.length>0&&pi(yt,Mt,E,X),$t&&mt.render(E),rs(w,E,X)}H!==null&&Y===0&&(W.updateMultisampleRenderTarget(H),W.updateRenderTargetMipmap(H)),Z&&q.end(T),E.isScene===!0&&E.onAfterRender(T,E,X),At.resetDefaultState(),$=-1,Q=null,F.pop(),F.length>0?(I=F[F.length-1],Dt===!0&&Rt.setGlobalState(T.clippingPlanes,I.state.camera)):I=null,N.pop(),N.length>0?w=N[N.length-1]:w=null};function di(E,X,K,Z){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)I.pushLight(E),E.castShadow&&I.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Zt.intersectsSprite(E)){Z&&qt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Le);const yt=_t.update(E),Mt=E.material;Mt.visible&&w.push(E,yt,Mt,K,qt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Zt.intersectsObject(E))){const yt=_t.update(E),Mt=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qt.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),qt.copy(yt.boundingSphere.center)),qt.applyMatrix4(E.matrixWorld).applyMatrix4(Le)),Array.isArray(Mt)){const Pt=yt.groups;for(let Ft=0,Vt=Pt.length;Ft<Vt;Ft++){const Bt=Pt[Ft],te=Mt[Bt.materialIndex];te&&te.visible&&w.push(E,yt,te,K,qt.z,Bt)}}else Mt.visible&&w.push(E,yt,Mt,K,qt.z,null)}}const gt=E.children;for(let yt=0,Mt=gt.length;yt<Mt;yt++)di(gt[yt],X,K,Z)}function rs(E,X,K,Z){const{opaque:j,transmissive:gt,transparent:yt}=E;I.setupLightsView(K),Dt===!0&&Rt.setGlobalState(T.clippingPlanes,K),Z&&Lt.viewport(B.copy(Z)),j.length>0&&ti(j,X,K),gt.length>0&&ti(gt,X,K),yt.length>0&&ti(yt,X,K),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function pi(E,X,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[Z.id]===void 0){const te=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[Z.id]=new cn(1,1,{generateMipmaps:!0,type:te?gn:En,minFilter:Ai,samples:_e.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace})}const gt=I.state.transmissionRenderTarget[Z.id],yt=Z.viewport||B;gt.setSize(yt.z*T.transmissionResolutionScale,yt.w*T.transmissionResolutionScale);const Mt=T.getRenderTarget(),Pt=T.getActiveCubeFace(),Ft=T.getActiveMipmapLevel();T.setRenderTarget(gt),T.getClearColor(ut),ht=T.getClearAlpha(),ht<1&&T.setClearColor(16777215,.5),T.clear(),$t&&mt.render(K);const Vt=T.toneMapping;T.toneMapping=Bn;const Bt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),I.setupLightsView(Z),Dt===!0&&Rt.setGlobalState(T.clippingPlanes,Z),ti(E,K,Z),W.updateMultisampleRenderTarget(gt),W.updateRenderTargetMipmap(gt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let de=0,Ee=X.length;de<Ee;de++){const Te=X[de],{object:ge,geometry:wt,material:ue,group:se}=Te;if(ue.side===Zn&&ge.layers.test(Z.layers)){const ze=ue.side;ue.side=ln,ue.needsUpdate=!0,mi(ge,K,Z,wt,ue,se),ue.side=ze,ue.needsUpdate=!0,te=!0}}te===!0&&(W.updateMultisampleRenderTarget(gt),W.updateRenderTargetMipmap(gt))}T.setRenderTarget(Mt,Pt,Ft),T.setClearColor(ut,ht),Bt!==void 0&&(Z.viewport=Bt),T.toneMapping=Vt}function ti(E,X,K){const Z=X.isScene===!0?X.overrideMaterial:null;for(let j=0,gt=E.length;j<gt;j++){const yt=E[j],{object:Mt,geometry:Pt,group:Ft}=yt;let Vt=yt.material;Vt.allowOverride===!0&&Z!==null&&(Vt=Z),Mt.layers.test(K.layers)&&mi(Mt,X,K,Pt,Vt,Ft)}}function mi(E,X,K,Z,j,gt){E.onBeforeRender(T,X,K,Z,j,gt),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(T,X,K,Z,E,gt),j.transparent===!0&&j.side===Zn&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,T.renderBufferDirect(K,X,Z,j,E,gt),j.side=fi,j.needsUpdate=!0,T.renderBufferDirect(K,X,Z,j,E,gt),j.side=Zn):T.renderBufferDirect(K,X,Z,j,E,gt),E.onAfterRender(T,X,K,Z,j,gt)}function Dn(E,X,K){X.isScene!==!0&&(X=me);const Z=M.get(E),j=I.state.lights,gt=I.state.shadowsArray,yt=j.state.version,Mt=Ut.getParameters(E,j.state,gt,X,K),Pt=Ut.getProgramCacheKey(Mt);let Ft=Z.programs;Z.environment=E.isMeshStandardMaterial?X.environment:null,Z.fog=X.fog,Z.envMap=(E.isMeshStandardMaterial?st:nt).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?X.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",en),Ft=new Map,Z.programs=Ft);let Vt=Ft.get(Pt);if(Vt!==void 0){if(Z.currentProgram===Vt&&Z.lightsStateVersion===yt)return Ii(E,Mt),Vt}else Mt.uniforms=Ut.getUniforms(E),E.onBeforeCompile(Mt,T),Vt=Ut.acquireProgram(Mt,Pt),Ft.set(Pt,Vt),Z.uniforms=Mt.uniforms;const Bt=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=Rt.uniform),Ii(E,Mt),Z.needsLights=fn(E),Z.lightsStateVersion=yt,Z.needsLights&&(Bt.ambientLightColor.value=j.state.ambient,Bt.lightProbe.value=j.state.probe,Bt.directionalLights.value=j.state.directional,Bt.directionalLightShadows.value=j.state.directionalShadow,Bt.spotLights.value=j.state.spot,Bt.spotLightShadows.value=j.state.spotShadow,Bt.rectAreaLights.value=j.state.rectArea,Bt.ltc_1.value=j.state.rectAreaLTC1,Bt.ltc_2.value=j.state.rectAreaLTC2,Bt.pointLights.value=j.state.point,Bt.pointLightShadows.value=j.state.pointShadow,Bt.hemisphereLights.value=j.state.hemi,Bt.directionalShadowMap.value=j.state.directionalShadowMap,Bt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Bt.spotShadowMap.value=j.state.spotShadowMap,Bt.spotLightMatrix.value=j.state.spotLightMatrix,Bt.spotLightMap.value=j.state.spotLightMap,Bt.pointShadowMap.value=j.state.pointShadowMap,Bt.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.currentProgram=Vt,Z.uniformsList=null,Vt}function _r(E){if(E.uniformsList===null){const X=E.currentProgram.getUniforms();E.uniformsList=Gs.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Ii(E,X){const K=M.get(E);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.batchingColor=X.batchingColor,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function vr(E,X,K,Z,j){X.isScene!==!0&&(X=me),W.resetTextureUnits();const gt=X.fog,yt=Z.isMeshStandardMaterial?X.environment:null,Mt=H===null?T.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:cr,Pt=(Z.isMeshStandardMaterial?st:nt).get(Z.envMap||yt),Ft=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Vt=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Bt=!!K.morphAttributes.position,te=!!K.morphAttributes.normal,de=!!K.morphAttributes.color;let Ee=Bn;Z.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ee=T.toneMapping);const Te=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ge=Te!==void 0?Te.length:0,wt=M.get(Z),ue=I.state.lights;if(Dt===!0&&(re===!0||E!==Q)){const Ue=E===Q&&Z.id===$;Rt.setState(Z,E,Ue)}let se=!1;Z.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ue.state.version||wt.outputColorSpace!==Mt||j.isBatchedMesh&&wt.batching===!1||!j.isBatchedMesh&&wt.batching===!0||j.isBatchedMesh&&wt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&wt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&wt.instancing===!1||!j.isInstancedMesh&&wt.instancing===!0||j.isSkinnedMesh&&wt.skinning===!1||!j.isSkinnedMesh&&wt.skinning===!0||j.isInstancedMesh&&wt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&wt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&wt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&wt.instancingMorph===!1&&j.morphTexture!==null||wt.envMap!==Pt||Z.fog===!0&&wt.fog!==gt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Rt.numPlanes||wt.numIntersection!==Rt.numIntersection)||wt.vertexAlphas!==Ft||wt.vertexTangents!==Vt||wt.morphTargets!==Bt||wt.morphNormals!==te||wt.morphColors!==de||wt.toneMapping!==Ee||wt.morphTargetsCount!==ge)&&(se=!0):(se=!0,wt.__version=Z.version);let ze=wt.currentProgram;se===!0&&(ze=Dn(Z,X,j));let kn=!1,Ze=!1,_i=!1;const Me=ze.getUniforms(),He=wt.uniforms;if(Lt.useProgram(ze.program)&&(kn=!0,Ze=!0,_i=!0),Z.id!==$&&($=Z.id,Ze=!0),kn||Q!==E){Lt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Me.setValue(O,"projectionMatrix",E.projectionMatrix),Me.setValue(O,"viewMatrix",E.matrixWorldInverse);const Ge=Me.map.cameraPosition;Ge!==void 0&&Ge.setValue(O,zt.setFromMatrixPosition(E.matrixWorld)),_e.logarithmicDepthBuffer&&Me.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Me.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,Ze=!0,_i=!0)}if(wt.needsLights&&(ue.state.directionalShadowMap.length>0&&Me.setValue(O,"directionalShadowMap",ue.state.directionalShadowMap,W),ue.state.spotShadowMap.length>0&&Me.setValue(O,"spotShadowMap",ue.state.spotShadowMap,W),ue.state.pointShadowMap.length>0&&Me.setValue(O,"pointShadowMap",ue.state.pointShadowMap,W)),j.isSkinnedMesh){Me.setOptional(O,j,"bindMatrix"),Me.setOptional(O,j,"bindMatrixInverse");const Ue=j.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Me.setValue(O,"boneTexture",Ue.boneTexture,W))}j.isBatchedMesh&&(Me.setOptional(O,j,"batchingTexture"),Me.setValue(O,"batchingTexture",j._matricesTexture,W),Me.setOptional(O,j,"batchingIdTexture"),Me.setValue(O,"batchingIdTexture",j._indirectTexture,W),Me.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&Me.setValue(O,"batchingColorTexture",j._colorsTexture,W));const nn=K.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Kt.update(j,K,ze),(Ze||wt.receiveShadow!==j.receiveShadow)&&(wt.receiveShadow=j.receiveShadow,Me.setValue(O,"receiveShadow",j.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(He.envMap.value=Pt,He.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&X.environment!==null&&(He.envMapIntensity.value=X.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=P0()),Ze&&(Me.setValue(O,"toneMappingExposure",T.toneMappingExposure),wt.needsLights&&ss(He,_i),gt&&Z.fog===!0&&kt.refreshFogUniforms(He,gt),kt.refreshMaterialUniforms(He,Z,Gt,Ht,I.state.transmissionRenderTarget[E.id]),Gs.upload(O,_r(wt),He,W)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Gs.upload(O,_r(wt),He,W),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Me.setValue(O,"center",j.center),Me.setValue(O,"modelViewMatrix",j.modelViewMatrix),Me.setValue(O,"normalMatrix",j.normalMatrix),Me.setValue(O,"modelMatrix",j.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ue=Z.uniformsGroups;for(let Ge=0,Ni=Ue.length;Ge<Ni;Ge++){const dn=Ue[Ge];lt.update(dn,ze),lt.bind(dn,ze)}}return ze}function ss(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function fn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,X,K){const Z=M.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),M.get(E.texture).__webglTexture=X,M.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,X){const K=M.get(E);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0};const vn=O.createFramebuffer();this.setRenderTarget=function(E,X=0,K=0){H=E,A=X,Y=K;let Z=null,j=!1,gt=!1;if(E){const Mt=M.get(E);if(Mt.__useDefaultFramebuffer!==void 0){Lt.bindFramebuffer(O.FRAMEBUFFER,Mt.__webglFramebuffer),B.copy(E.viewport),G.copy(E.scissor),tt=E.scissorTest,Lt.viewport(B),Lt.scissor(G),Lt.setScissorTest(tt),$=-1;return}else if(Mt.__webglFramebuffer===void 0)W.setupRenderTarget(E);else if(Mt.__hasExternalTextures)W.rebindTextures(E,M.get(E.texture).__webglTexture,M.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Vt=E.depthTexture;if(Mt.__boundDepthTexture!==Vt){if(Vt!==null&&M.has(Vt)&&(E.width!==Vt.image.width||E.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(E)}}const Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(gt=!0);const Ft=M.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[X])?Z=Ft[X][K]:Z=Ft[X],j=!0):E.samples>0&&W.useMultisampledRTT(E)===!1?Z=M.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?Z=Ft[K]:Z=Ft,B.copy(E.viewport),G.copy(E.scissor),tt=E.scissorTest}else B.copy(it).multiplyScalar(Gt).floor(),G.copy(ot).multiplyScalar(Gt).floor(),tt=Ct;if(K!==0&&(Z=vn),Lt.bindFramebuffer(O.FRAMEBUFFER,Z)&&Lt.drawBuffers(E,Z),Lt.viewport(B),Lt.scissor(G),Lt.setScissorTest(tt),j){const Mt=M.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,Mt.__webglTexture,K)}else if(gt){const Mt=X;for(let Pt=0;Pt<E.textures.length;Pt++){const Ft=M.get(E.textures[Pt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pt,Ft.__webglTexture,K,Mt)}}else if(E!==null&&K!==0){const Mt=M.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,K)}$=-1},this.readRenderTargetPixels=function(E,X,K,Z,j,gt,yt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=M.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Pt=Pt[yt]),Pt){Lt.bindFramebuffer(O.FRAMEBUFFER,Pt);try{const Ft=E.textures[Mt],Vt=Ft.format,Bt=Ft.type;if(!_e.textureFormatReadable(Vt)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Bt)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-Z&&K>=0&&K<=E.height-j&&(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt),O.readPixels(X,K,Z,j,ft.convert(Vt),ft.convert(Bt),gt))}finally{const Ft=H!==null?M.get(H).__webglFramebuffer:null;Lt.bindFramebuffer(O.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(E,X,K,Z,j,gt,yt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=M.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Pt=Pt[yt]),Pt)if(X>=0&&X<=E.width-Z&&K>=0&&K<=E.height-j){Lt.bindFramebuffer(O.FRAMEBUFFER,Pt);const Ft=E.textures[Mt],Vt=Ft.format,Bt=Ft.type;if(!_e.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,te),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt),O.readPixels(X,K,Z,j,ft.convert(Vt),ft.convert(Bt),0);const de=H!==null?M.get(H).__webglFramebuffer:null;Lt.bindFramebuffer(O.FRAMEBUFFER,de);const Ee=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ef(O,Ee,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,te),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.deleteBuffer(te),O.deleteSync(Ee),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,X=null,K=0){const Z=Math.pow(2,-K),j=Math.floor(E.image.width*Z),gt=Math.floor(E.image.height*Z),yt=X!==null?X.x:0,Mt=X!==null?X.y:0;W.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,yt,Mt,j,gt),Lt.unbindTexture()};const gi=O.createFramebuffer(),xr=O.createFramebuffer();this.copyTextureToTexture=function(E,X,K=null,Z=null,j=0,gt=null){gt===null&&(j!==0?(Vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=j,j=0):gt=0);let yt,Mt,Pt,Ft,Vt,Bt,te,de,Ee;const Te=E.isCompressedTexture?E.mipmaps[gt]:E.image;if(K!==null)yt=K.max.x-K.min.x,Mt=K.max.y-K.min.y,Pt=K.isBox3?K.max.z-K.min.z:1,Ft=K.min.x,Vt=K.min.y,Bt=K.isBox3?K.min.z:0;else{const nn=Math.pow(2,-j);yt=Math.floor(Te.width*nn),Mt=Math.floor(Te.height*nn),E.isDataArrayTexture?Pt=Te.depth:E.isData3DTexture?Pt=Math.floor(Te.depth*nn):Pt=1,Ft=0,Vt=0,Bt=0}Z!==null?(te=Z.x,de=Z.y,Ee=Z.z):(te=0,de=0,Ee=0);const ge=ft.convert(X.format),wt=ft.convert(X.type);let ue;X.isData3DTexture?(W.setTexture3D(X,0),ue=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(W.setTexture2DArray(X,0),ue=O.TEXTURE_2D_ARRAY):(W.setTexture2D(X,0),ue=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const se=O.getParameter(O.UNPACK_ROW_LENGTH),ze=O.getParameter(O.UNPACK_IMAGE_HEIGHT),kn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ze=O.getParameter(O.UNPACK_SKIP_ROWS),_i=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Te.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Te.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ft),O.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Bt);const Me=E.isDataArrayTexture||E.isData3DTexture,He=X.isDataArrayTexture||X.isData3DTexture;if(E.isDepthTexture){const nn=M.get(E),Ue=M.get(X),Ge=M.get(nn.__renderTarget),Ni=M.get(Ue.__renderTarget);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let dn=0;dn<Pt;dn++)Me&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,M.get(E).__webglTexture,j,Bt+dn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,M.get(X).__webglTexture,gt,Ee+dn)),O.blitFramebuffer(Ft,Vt,yt,Mt,te,de,yt,Mt,O.DEPTH_BUFFER_BIT,O.NEAREST);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||M.has(E)){const nn=M.get(E),Ue=M.get(X);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,gi),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,xr);for(let Ge=0;Ge<Pt;Ge++)Me?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,nn.__webglTexture,j,Bt+Ge):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,nn.__webglTexture,j),He?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,gt,Ee+Ge):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ue.__webglTexture,gt),j!==0?O.blitFramebuffer(Ft,Vt,yt,Mt,te,de,yt,Mt,O.COLOR_BUFFER_BIT,O.NEAREST):He?O.copyTexSubImage3D(ue,gt,te,de,Ee+Ge,Ft,Vt,yt,Mt):O.copyTexSubImage2D(ue,gt,te,de,Ft,Vt,yt,Mt);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else He?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(ue,gt,te,de,Ee,yt,Mt,Pt,ge,wt,Te.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(ue,gt,te,de,Ee,yt,Mt,Pt,ge,Te.data):O.texSubImage3D(ue,gt,te,de,Ee,yt,Mt,Pt,ge,wt,Te):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,gt,te,de,yt,Mt,ge,wt,Te.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,gt,te,de,Te.width,Te.height,ge,Te.data):O.texSubImage2D(O.TEXTURE_2D,gt,te,de,yt,Mt,ge,wt,Te);O.pixelStorei(O.UNPACK_ROW_LENGTH,se),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ze),O.pixelStorei(O.UNPACK_SKIP_PIXELS,kn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_i),gt===0&&X.generateMipmaps&&O.generateMipmap(ue),Lt.unbindTexture()},this.initRenderTarget=function(E){M.get(E).__webglFramebuffer===void 0&&W.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?W.setTextureCube(E,0):E.isData3DTexture?W.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?W.setTexture2DArray(E,0):W.setTexture2D(E,0),Lt.unbindTexture()},this.resetState=function(){A=0,Y=0,H=null,Lt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const Gc={type:"change"},ml={type:"start"},zu={type:"end"},Ns=new ol,kc=new li,L0=Math.cos(70*Hs.DEG2RAD),Ne=new k,an=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xo=1e-6;class U0 extends Nd{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:er.ROTATE,TWO:er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Ri,this._lastTargetPosition=new k,this._quat=new Ri().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _c,this._sphericalDelta=new _c,this._scale=1,this._panOffset=new k,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new k,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=N0.bind(this),this._onPointerDown=I0.bind(this),this._onPointerUp=F0.bind(this),this._onContextMenu=k0.bind(this),this._onMouseWheel=z0.bind(this),this._onKeyDown=V0.bind(this),this._onTouchStart=H0.bind(this),this._onTouchMove=G0.bind(this),this._onMouseDown=O0.bind(this),this._onMouseMove=B0.bind(this),this._interceptControlDown=W0.bind(this),this._interceptControlUp=X0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gc),this.update(),this.state=Se.NONE}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),r<-Math.PI?r+=an:r>Math.PI&&(r-=an),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=Ne.length();a=this._clampDistance(l*this._scale);const c=l-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const l=new k(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const u=new k(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(l),this.object.updateMatrixWorld(),a=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ns.origin.copy(this.object.position),Ns.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ns.direction))<L0?this.object.lookAt(this.target):(kc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ns.intersectPlane(kc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Xo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xo||this._lastTargetPosition.distanceToSquared(this.target)>Xo?(this.dispatchEvent(Gc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ne.copy(r).sub(this.target);let s=Ne.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,l=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new St,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function I0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function N0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function F0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zu),this.state=Se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function O0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Se.DOLLY;break;case nr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}break;case nr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(ml)}function B0(i){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function z0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(i.preventDefault(),this.dispatchEvent(ml),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zu))}function V0(i){this.enabled!==!1&&this._handleKeyDown(i)}function H0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Se.TOUCH_ROTATE;break;case er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Se.TOUCH_DOLLY_PAN;break;case er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(ml)}function G0(i){switch(this._trackPointer(i),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Se.NONE}}function k0(i){this.enabled!==!1&&i.preventDefault()}function W0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function X0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Y0=new pl(-1,1,1,-1,0,1);class j0 extends tn{constructor(){super(),this.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qe([0,2,0,0,2,0],2))}}const q0=new j0;class Vu{constructor(t){this._mesh=new _n(q0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Y0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Z0 extends ts{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ks.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Vu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wc extends ts{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class K0 extends ts{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class J0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new St);this._width=n.width,this._height=n.height,e=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Z0(ks),this.copyPass.material.blending=On,this.clock=new Id}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Wc!==void 0&&(a instanceof Wc?n=!0:a instanceof K0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $0 extends ts{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Jt}render(t,e,n){const r=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=r}}const Q0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Jt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class fr extends ts{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new Jt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(s,a,{type:gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new cn(s,a,{type:gn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const g=new cn(s,a,{type:gn});g.texture.name="UnrealBloomPass.v"+f,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),s=Math.round(s/2),a=Math.round(a/2)}const l=Q0;this.highPassUniforms=Ks.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new St(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ks.clone(ks.uniforms),this.blendMaterial=new Ye({uniforms:this.copyUniforms,vertexShader:ks.vertexShader,fragmentShader:ks.fragmentShader,premultipliedAlpha:!0,blending:sr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Jt,this._oldClearAlpha=1,this._basic=new Jr,this._fsQuad=new Vu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new St(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=fr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=fr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let r=0;r<t;r++)e.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new Ye({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}fr.BlurDirectionX=new St(1,0);fr.BlurDirectionY=new St(0,1);var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yo={},Xc;function tv(){return Xc||(Xc=1,(function(){var i;function t(o){var h=0;return function(){return h<o.length?{done:!1,value:o[h++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,p){return o==Array.prototype||o==Object.prototype||(o[h]=p.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Js=="object"&&Js];for(var h=0;h<o.length;++h){var p=o[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(o,h){if(h)t:{var p=r;o=o.split(".");for(var S=0;S<o.length-1;S++){var C=o[S];if(!(C in p))break t;p=p[C]}o=o[o.length-1],S=p[o],h=h(S),h!=S&&h!=null&&e(p,o,{configurable:!0,writable:!0,value:h})}}s("Symbol",function(o){function h(U){if(this instanceof h)throw new TypeError("Symbol is not a constructor");return new p(S+(U||"")+"_"+C++,U)}function p(U,L){this.h=U,e(this,"description",{configurable:!0,writable:!0,value:L})}if(o)return o;p.prototype.toString=function(){return this.h};var S="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",C=0;return h}),s("Symbol.iterator",function(o){if(o)return o;o=Symbol("Symbol.iterator");for(var h="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),p=0;p<h.length;p++){var S=r[h[p]];typeof S=="function"&&typeof S.prototype[o]!="function"&&e(S.prototype,o,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return o});function a(o){return o={next:o},o[Symbol.iterator]=function(){return this},o}function l(o){var h=typeof Symbol<"u"&&Symbol.iterator&&o[Symbol.iterator];return h?h.call(o):{next:t(o)}}function c(o){if(!(o instanceof Array)){o=l(o);for(var h,p=[];!(h=o.next()).done;)p.push(h.value);o=p}return o}var u=typeof Object.assign=="function"?Object.assign:function(o,h){for(var p=1;p<arguments.length;p++){var S=arguments[p];if(S)for(var C in S)Object.prototype.hasOwnProperty.call(S,C)&&(o[C]=S[C])}return o};s("Object.assign",function(o){return o||u});var f=typeof Object.create=="function"?Object.create:function(o){function h(){}return h.prototype=o,new h},d;if(typeof Object.setPrototypeOf=="function")d=Object.setPrototypeOf;else{var g;t:{var _={a:!0},y={};try{y.__proto__=_,g=y.a;break t}catch{}g=!1}d=g?function(o,h){if(o.__proto__=h,o.__proto__!==h)throw new TypeError(o+" is not extensible");return o}:null}var b=d;function v(o,h){if(o.prototype=f(h.prototype),o.prototype.constructor=o,b)b(o,h);else for(var p in h)if(p!="prototype")if(Object.defineProperties){var S=Object.getOwnPropertyDescriptor(h,p);S&&Object.defineProperty(o,p,S)}else o[p]=h[p];o.ya=h.prototype}function m(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function D(o){if(o.m)throw new TypeError("Generator is already running");o.m=!0}m.prototype.u=function(o){this.i=o};function R(o,h){o.l={ma:h,na:!0},o.h=o.s||o.v}m.prototype.return=function(o){this.l={return:o},this.h=this.v};function w(o,h,p){return o.h=p,{value:h}}function I(o){this.h=new m,this.i=o}function N(o,h){D(o.h);var p=o.h.j;return p?F(o,"return"in p?p.return:function(S){return{value:S,done:!0}},h,o.h.return):(o.h.return(h),q(o))}function F(o,h,p,S){try{var C=h.call(o.h.j,p);if(!(C instanceof Object))throw new TypeError("Iterator result "+C+" is not an object");if(!C.done)return o.h.m=!1,C;var U=C.value}catch(L){return o.h.j=null,R(o.h,L),q(o)}return o.h.j=null,S.call(o.h,U),q(o)}function q(o){for(;o.h.h;)try{var h=o.i(o.h);if(h)return o.h.m=!1,{value:h.value,done:!1}}catch(p){o.h.i=void 0,R(o.h,p)}if(o.h.m=!1,o.h.l){if(h=o.h.l,o.h.l=null,h.na)throw h.ma;return{value:h.return,done:!0}}return{value:void 0,done:!0}}function T(o){this.next=function(h){return D(o.h),o.h.j?h=F(o,o.h.j.next,h,o.h.u):(o.h.u(h),h=q(o)),h},this.throw=function(h){return D(o.h),o.h.j?h=F(o,o.h.j.throw,h,o.h.u):(R(o.h,h),h=q(o)),h},this.return=function(h){return N(o,h)},this[Symbol.iterator]=function(){return this}}function x(o){function h(S){return o.next(S)}function p(S){return o.throw(S)}return new Promise(function(S,C){function U(L){L.done?S(L.value):Promise.resolve(L.value).then(h,p).then(U,C)}U(o.next())})}function A(o){return x(new T(new I(o)))}s("Promise",function(o){function h(L){this.i=0,this.j=void 0,this.h=[],this.u=!1;var V=this.l();try{L(V.resolve,V.reject)}catch(J){V.reject(J)}}function p(){this.h=null}function S(L){return L instanceof h?L:new h(function(V){V(L)})}if(o)return o;p.prototype.i=function(L){if(this.h==null){this.h=[];var V=this;this.j(function(){V.m()})}this.h.push(L)};var C=r.setTimeout;p.prototype.j=function(L){C(L,0)},p.prototype.m=function(){for(;this.h&&this.h.length;){var L=this.h;this.h=[];for(var V=0;V<L.length;++V){var J=L[V];L[V]=null;try{J()}catch(ct){this.l(ct)}}}this.h=null},p.prototype.l=function(L){this.j(function(){throw L})},h.prototype.l=function(){function L(ct){return function(vt){J||(J=!0,ct.call(V,vt))}}var V=this,J=!1;return{resolve:L(this.I),reject:L(this.m)}},h.prototype.I=function(L){if(L===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(L instanceof h)this.L(L);else{t:switch(typeof L){case"object":var V=L!=null;break t;case"function":V=!0;break t;default:V=!1}V?this.F(L):this.s(L)}},h.prototype.F=function(L){var V=void 0;try{V=L.then}catch(J){this.m(J);return}typeof V=="function"?this.M(V,L):this.s(L)},h.prototype.m=function(L){this.v(2,L)},h.prototype.s=function(L){this.v(1,L)},h.prototype.v=function(L,V){if(this.i!=0)throw Error("Cannot settle("+L+", "+V+"): Promise already settled in state"+this.i);this.i=L,this.j=V,this.i===2&&this.K(),this.H()},h.prototype.K=function(){var L=this;C(function(){if(L.D()){var V=r.console;typeof V<"u"&&V.error(L.j)}},1)},h.prototype.D=function(){if(this.u)return!1;var L=r.CustomEvent,V=r.Event,J=r.dispatchEvent;return typeof J>"u"?!0:(typeof L=="function"?L=new L("unhandledrejection",{cancelable:!0}):typeof V=="function"?L=new V("unhandledrejection",{cancelable:!0}):(L=r.document.createEvent("CustomEvent"),L.initCustomEvent("unhandledrejection",!1,!0,L)),L.promise=this,L.reason=this.j,J(L))},h.prototype.H=function(){if(this.h!=null){for(var L=0;L<this.h.length;++L)U.i(this.h[L]);this.h=null}};var U=new p;return h.prototype.L=function(L){var V=this.l();L.T(V.resolve,V.reject)},h.prototype.M=function(L,V){var J=this.l();try{L.call(V,J.resolve,J.reject)}catch(ct){J.reject(ct)}},h.prototype.then=function(L,V){function J(Ot,bt){return typeof Ot=="function"?function(Yt){try{ct(Ot(Yt))}catch(ie){vt(ie)}}:bt}var ct,vt,Xt=new h(function(Ot,bt){ct=Ot,vt=bt});return this.T(J(L,ct),J(V,vt)),Xt},h.prototype.catch=function(L){return this.then(void 0,L)},h.prototype.T=function(L,V){function J(){switch(ct.i){case 1:L(ct.j);break;case 2:V(ct.j);break;default:throw Error("Unexpected state: "+ct.i)}}var ct=this;this.h==null?U.i(J):this.h.push(J),this.u=!0},h.resolve=S,h.reject=function(L){return new h(function(V,J){J(L)})},h.race=function(L){return new h(function(V,J){for(var ct=l(L),vt=ct.next();!vt.done;vt=ct.next())S(vt.value).T(V,J)})},h.all=function(L){var V=l(L),J=V.next();return J.done?S([]):new h(function(ct,vt){function Xt(Yt){return function(ie){Ot[Yt]=ie,bt--,bt==0&&ct(Ot)}}var Ot=[],bt=0;do Ot.push(void 0),bt++,S(J.value).T(Xt(Ot.length-1),vt),J=V.next();while(!J.done)})},h});function Y(o,h){o instanceof String&&(o+="");var p=0,S=!1,C={next:function(){if(!S&&p<o.length){var U=p++;return{value:h(U,o[U]),done:!1}}return S=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.keys",function(o){return o||function(){return Y(this,function(h){return h})}}),s("Array.prototype.fill",function(o){return o||function(h,p,S){var C=this.length||0;for(0>p&&(p=Math.max(0,C+p)),(S==null||S>C)&&(S=C),S=Number(S),0>S&&(S=Math.max(0,C+S)),p=Number(p||0);p<S;p++)this[p]=h;return this}});function H(o){return o||Array.prototype.fill}s("Int8Array.prototype.fill",H),s("Uint8Array.prototype.fill",H),s("Uint8ClampedArray.prototype.fill",H),s("Int16Array.prototype.fill",H),s("Uint16Array.prototype.fill",H),s("Int32Array.prototype.fill",H),s("Uint32Array.prototype.fill",H),s("Float32Array.prototype.fill",H),s("Float64Array.prototype.fill",H),s("Object.is",function(o){return o||function(h,p){return h===p?h!==0||1/h===1/p:h!==h&&p!==p}}),s("Array.prototype.includes",function(o){return o||function(h,p){var S=this;S instanceof String&&(S=String(S));var C=S.length;for(p=p||0,0>p&&(p=Math.max(p+C,0));p<C;p++){var U=S[p];if(U===h||Object.is(U,h))return!0}return!1}}),s("String.prototype.includes",function(o){return o||function(h,p){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(h instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(h,p||0)!==-1}});var $=this||self;function Q(o,h){o=o.split(".");var p=$;o[0]in p||typeof p.execScript>"u"||p.execScript("var "+o[0]);for(var S;o.length&&(S=o.shift());)o.length||h===void 0?p[S]&&p[S]!==Object.prototype[S]?p=p[S]:p=p[S]={}:p[S]=h}function B(o){var h;t:{if((h=$.navigator)&&(h=h.userAgent))break t;h=""}return h.indexOf(o)!=-1}var G=Array.prototype.map?function(o,h){return Array.prototype.map.call(o,h,void 0)}:function(o,h){for(var p=o.length,S=Array(p),C=typeof o=="string"?o.split(""):o,U=0;U<p;U++)U in C&&(S[U]=h.call(void 0,C[U],U,o));return S},tt={},ut=null;function ht(o){var h=o.length,p=3*h/4;p%3?p=Math.floor(p):"=.".indexOf(o[h-1])!=-1&&(p="=.".indexOf(o[h-2])!=-1?p-2:p-1);var S=new Uint8Array(p),C=0;return Tt(o,function(U){S[C++]=U}),C!==p?S.subarray(0,C):S}function Tt(o,h){function p(J){for(;S<o.length;){var ct=o.charAt(S++),vt=ut[ct];if(vt!=null)return vt;if(!/^[\s\xa0]*$/.test(ct))throw Error("Unknown base64 encoding at char: "+ct)}return J}Ht();for(var S=0;;){var C=p(-1),U=p(0),L=p(64),V=p(64);if(V===64&&C===-1)break;h(C<<2|U>>4),L!=64&&(h(U<<4&240|L>>2),V!=64&&h(L<<6&192|V))}}function Ht(){if(!ut){ut={};for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],p=0;5>p;p++){var S=o.concat(h[p].split(""));tt[p]=S;for(var C=0;C<S.length;C++){var U=S[C];ut[U]===void 0&&(ut[U]=C)}}}}var Gt=typeof Uint8Array<"u",pe=!(B("Trident")||B("MSIE"))&&typeof $.btoa=="function";function ce(o){if(!pe){var h;h===void 0&&(h=0),Ht(),h=tt[h];for(var p=Array(Math.floor(o.length/3)),S=h[64]||"",C=0,U=0;C<o.length-2;C+=3){var L=o[C],V=o[C+1],J=o[C+2],ct=h[L>>2];L=h[(L&3)<<4|V>>4],V=h[(V&15)<<2|J>>6],J=h[J&63],p[U++]=ct+L+V+J}switch(ct=0,J=S,o.length-C){case 2:ct=o[C+1],J=h[(ct&15)<<2]||S;case 1:o=o[C],p[U]=h[o>>2]+h[(o&3)<<4|ct>>4]+J+S}return p.join("")}for(h="";10240<o.length;)h+=String.fromCharCode.apply(null,o.subarray(0,10240)),o=o.subarray(10240);return h+=String.fromCharCode.apply(null,o),btoa(h)}var it=RegExp("[-_.]","g");function ot(o){switch(o){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Ct(o){if(!pe)return ht(o);it.test(o)&&(o=o.replace(it,ot)),o=atob(o);for(var h=new Uint8Array(o.length),p=0;p<o.length;p++)h[p]=o.charCodeAt(p);return h}var Zt;function Dt(){return Zt||(Zt=new Uint8Array(0))}var re={},Le=typeof Uint8Array.prototype.slice=="function",zt=0,qt=0;function me(o){var h=0>o;o=Math.abs(o);var p=o>>>0;o=Math.floor((o-p)/4294967296),h&&(p=l(we(p,o)),h=p.next().value,o=p.next().value,p=h),zt=p>>>0,qt=o>>>0}var $t=typeof BigInt=="function";function we(o,h){return h=~h,o?o=~o+1:h+=1,[o,h]}function O(o,h){this.i=o>>>0,this.h=h>>>0}function Ce(o){if(!o)return ae||(ae=new O(0,0));if(!/^-?\d+$/.test(o))return null;if(16>o.length)me(Number(o));else if($t)o=BigInt(o),zt=Number(o&BigInt(4294967295))>>>0,qt=Number(o>>BigInt(32)&BigInt(4294967295));else{var h=+(o[0]==="-");qt=zt=0;for(var p=o.length,S=h,C=(p-h)%6+h;C<=p;S=C,C+=6)S=Number(o.slice(S,C)),qt*=1e6,zt=1e6*zt+S,4294967296<=zt&&(qt+=zt/4294967296|0,zt%=4294967296);h&&(h=l(we(zt,qt)),o=h.next().value,h=h.next().value,zt=o,qt=h)}return new O(zt,qt)}var ae;function _e(o,h){return Error("Invalid wire type: "+o+" (at position "+h+")")}function Lt(){return Error("Failed to read varint, encoding is invalid.")}function P(o,h){return Error("Tried to read past the end of the data "+h+" > "+o)}function M(){throw Error("Invalid UTF8")}function W(o,h){return h=String.fromCharCode.apply(null,h),o==null?h:o+h}var nt=void 0,st,et=typeof TextDecoder<"u",It,_t=typeof TextEncoder<"u",Ut;function kt(o){if(o!==re)throw Error("illegal external caller")}function at(o,h){if(kt(h),this.V=o,o!=null&&o.length===0)throw Error("ByteString should be constructed with non-empty values")}function pt(){return Ut||(Ut=new at(null,re))}function Rt(o){kt(re);var h=o.V;return h=h==null||Gt&&h!=null&&h instanceof Uint8Array?h:typeof h=="string"?Ct(h):null,h==null?h:o.V=h}function Nt(o){if(typeof o=="string")return{buffer:Ct(o),C:!1};if(Array.isArray(o))return{buffer:new Uint8Array(o),C:!1};if(o.constructor===Uint8Array)return{buffer:o,C:!1};if(o.constructor===ArrayBuffer)return{buffer:new Uint8Array(o),C:!1};if(o.constructor===at)return{buffer:Rt(o)||Dt(),C:!0};if(o instanceof Uint8Array)return{buffer:new Uint8Array(o.buffer,o.byteOffset,o.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function mt(o,h){this.i=null,this.m=!1,this.h=this.j=this.l=0,Kt(this,o,h)}function Kt(o,h,p){p=p===void 0?{}:p,o.S=p.S===void 0?!1:p.S,h&&(h=Nt(h),o.i=h.buffer,o.m=h.C,o.l=0,o.j=o.i.length,o.h=o.l)}mt.prototype.reset=function(){this.h=this.l};function z(o,h){if(o.h=h,h>o.j)throw P(o.j,h)}function xt(o){var h=o.i,p=o.h,S=h[p++],C=S&127;if(S&128&&(S=h[p++],C|=(S&127)<<7,S&128&&(S=h[p++],C|=(S&127)<<14,S&128&&(S=h[p++],C|=(S&127)<<21,S&128&&(S=h[p++],C|=S<<28,S&128&&h[p++]&128&&h[p++]&128&&h[p++]&128&&h[p++]&128&&h[p++]&128)))))throw Lt();return z(o,p),C}function ft(o,h){if(0>h)throw Error("Tried to read a negative byte length: "+h);var p=o.h,S=p+h;if(S>o.j)throw P(h,o.j-p);return o.h=S,p}var At=[];function lt(){this.h=[]}lt.prototype.length=function(){return this.h.length},lt.prototype.end=function(){var o=this.h;return this.h=[],o};function rt(o,h,p){for(;0<p||127<h;)o.h.push(h&127|128),h=(h>>>7|p<<25)>>>0,p>>>=7;o.h.push(h)}function dt(o,h){for(;127<h;)o.h.push(h&127|128),h>>>=7;o.h.push(h)}function Wt(o,h){if(At.length){var p=At.pop();Kt(p,o,h),o=p}else o=new mt(o,h);this.h=o,this.j=this.h.h,this.i=this.l=-1,this.setOptions(h)}Wt.prototype.setOptions=function(o){o=o===void 0?{}:o,this.ca=o.ca===void 0?!1:o.ca},Wt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function ve(o){var h=o.h;if(h.h==h.j)return!1;o.j=o.h.h;var p=xt(o.h)>>>0;if(h=p>>>3,p&=7,!(0<=p&&5>=p))throw _e(p,o.j);if(1>h)throw Error("Invalid field number: "+h+" (at position "+o.j+")");return o.l=h,o.i=p,!0}function oe(o){switch(o.i){case 0:if(o.i!=0)oe(o);else t:{o=o.h;for(var h=o.h,p=h+10,S=o.i;h<p;)if((S[h++]&128)===0){z(o,h);break t}throw Lt()}break;case 1:o=o.h,z(o,o.h+8);break;case 2:o.i!=2?oe(o):(h=xt(o.h)>>>0,o=o.h,z(o,o.h+h));break;case 5:o=o.h,z(o,o.h+4);break;case 3:h=o.l;do{if(!ve(o))throw Error("Unmatched start-group tag: stream EOF");if(o.i==4){if(o.l!=h)throw Error("Unmatched end-group tag");break}oe(o)}while(!0);break;default:throw _e(o.i,o.j)}}var en=[];function Tn(){this.j=[],this.i=0,this.h=new lt}function Qn(o,h){h.length!==0&&(o.j.push(h),o.i+=h.length)}function is(o,h){if(h=h.R){Qn(o,o.h.end());for(var p=0;p<h.length;p++)Qn(o,Rt(h[p])||Dt())}}var hn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Gn(o,h){return hn?o[hn]|=h:o.A!==void 0?o.A|=h:(Object.defineProperties(o,{A:{value:h,configurable:!0,writable:!0,enumerable:!1}}),h)}function gr(o,h){hn?o[hn]&&(o[hn]&=~h):o.A!==void 0&&(o.A&=~h)}function Ae(o){var h;return hn?h=o[hn]:h=o.A,h??0}function Be(o,h){hn?o[hn]=h:o.A!==void 0?o.A=h:Object.defineProperties(o,{A:{value:h,configurable:!0,writable:!0,enumerable:!1}})}function di(o){return Gn(o,1),o}function rs(o,h){Be(h,(o|0)&-51)}function pi(o,h){Be(h,(o|18)&-41)}var ti={};function mi(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)&&o.constructor===Object}var Dn,_r=[];Be(_r,23),Dn=Object.freeze(_r);function Ii(o){if(Ae(o.o)&2)throw Error("Cannot mutate an immutable Message")}function vr(o){var h=o.length;(h=h?o[h-1]:void 0)&&mi(h)?h.g=1:(h={},o.push((h.g=1,h)))}function ss(o){var h=o.i+o.G;return o.B||(o.B=o.o[h]={})}function fn(o,h){return h===-1?null:h>=o.i?o.B?o.B[h]:void 0:o.o[h+o.G]}function vn(o,h,p,S){Ii(o),gi(o,h,p,S)}function gi(o,h,p,S){o.j&&(o.j=void 0),h>=o.i||S?ss(o)[h]=p:(o.o[h+o.G]=p,(o=o.B)&&h in o&&delete o[h])}function xr(o,h,p,S){var C=fn(o,h);Array.isArray(C)||(C=Dn);var U=Ae(C);if(U&1||di(C),S)U&2||Gn(C,2),p&1||Object.freeze(C);else{S=!(p&2);var L=U&2;p&1||!L?S&&U&16&&!L&&gr(C,16):(C=di(Array.prototype.slice.call(C)),gi(o,h,C))}return C}function E(o,h){var p=fn(o,h),S=p==null?p:typeof p=="number"||p==="NaN"||p==="Infinity"||p==="-Infinity"?Number(p):void 0;return S!=null&&S!==p&&gi(o,h,S),S}function X(o,h,p,S,C){o.h||(o.h={});var U=o.h[p],L=xr(o,p,3,C);if(!U){var V=L;U=[];var J=!!(Ae(o.o)&16);L=!!(Ae(V)&2);var ct=V;!C&&L&&(V=Array.prototype.slice.call(V));for(var vt=L,Xt=0;Xt<V.length;Xt++){var Ot=V[Xt],bt=h,Yt=!1;if(Yt=Yt===void 0?!1:Yt,Ot=Array.isArray(Ot)?new bt(Ot):Yt?new bt:void 0,Ot!==void 0){bt=Ot.o;var ie=Yt=Ae(bt);L&&(ie|=2),J&&(ie|=16),ie!=Yt&&Be(bt,ie),bt=ie,vt=vt||!!(2&bt),U.push(Ot)}}return o.h[p]=U,J=Ae(V),h=J|33,h=vt?h&-9:h|8,J!=h&&(vt=V,Object.isFrozen(vt)&&(vt=Array.prototype.slice.call(vt)),Be(vt,h),V=vt),ct!==V&&gi(o,p,V),(C||S&&L)&&Gn(U,2),S&&Object.freeze(U),U}return C||(C=Object.isFrozen(U),S&&!C?Object.freeze(U):!S&&C&&(U=Array.prototype.slice.call(U),o.h[p]=U)),U}function K(o,h,p){var S=!!(Ae(o.o)&2);if(h=X(o,h,p,S,S),o=xr(o,p,3,S),!(S||Ae(o)&8)){for(S=0;S<h.length;S++){if(p=h[S],Ae(p.o)&2){var C=ge(p,!1);C.j=p}else C=p;p!==C&&(h[S]=C,o[S]=C.o)}Gn(o,8)}return h}function Z(o,h,p){if(p!=null&&typeof p!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof p+": "+p);vn(o,h,p)}function j(o,h,p,S,C){Ii(o);var U=X(o,p,h,!1,!1);return p=S??new p,o=xr(o,h,2,!1),C!=null?(U.splice(C,0,p),o.splice(C,0,p.o)):(U.push(p),o.push(p.o)),p.C()&&gr(o,8),p}function gt(o,h){return o??h}function yt(o,h,p){return p=p===void 0?0:p,gt(E(o,h),p)}var Mt;function Pt(o){switch(typeof o){case"number":return isFinite(o)?o:String(o);case"object":if(o)if(Array.isArray(o)){if((Ae(o)&128)!==0)return o=Array.prototype.slice.call(o),vr(o),o}else{if(Gt&&o!=null&&o instanceof Uint8Array)return ce(o);if(o instanceof at){var h=o.V;return h==null?"":typeof h=="string"?h:o.V=ce(h)}}}return o}function Ft(o,h,p,S){if(o!=null){if(Array.isArray(o))o=Vt(o,h,p,S!==void 0);else if(mi(o)){var C={},U;for(U in o)C[U]=Ft(o[U],h,p,S);o=C}else o=h(o,S);return o}}function Vt(o,h,p,S){var C=Ae(o);S=S?!!(C&16):void 0,o=Array.prototype.slice.call(o);for(var U=0;U<o.length;U++)o[U]=Ft(o[U],h,p,S);return p(C,o),o}function Bt(o){return o.ja===ti?o.toJSON():Pt(o)}function te(o,h){o&128&&vr(h)}function de(o,h,p){if(p=p===void 0?pi:p,o!=null){if(Gt&&o instanceof Uint8Array)return o.length?new at(new Uint8Array(o),re):pt();if(Array.isArray(o)){var S=Ae(o);return S&2?o:h&&!(S&32)&&(S&16||S===0)?(Be(o,S|2),o):(o=Vt(o,de,S&4?pi:p,!0),h=Ae(o),h&4&&h&2&&Object.freeze(o),o)}return o.ja===ti?Te(o):o}}function Ee(o,h,p,S,C,U,L){if(o=o.h&&o.h[p]){if(S=Ae(o),S&2?S=o:(U=G(o,Te),pi(S,U),Object.freeze(U),S=U),Ii(h),L=S==null?Dn:di([]),S!=null){for(U=!!S.length,o=0;o<S.length;o++){var V=S[o];U=U&&!(Ae(V.o)&2),L[o]=V.o}U=(U?8:0)|1,o=Ae(L),(o&U)!==U&&(Object.isFrozen(L)&&(L=Array.prototype.slice.call(L)),Be(L,o|U)),h.h||(h.h={}),h.h[p]=S}else h.h&&(h.h[p]=void 0);gi(h,p,L,C)}else vn(h,p,de(S,U,L),C)}function Te(o){return Ae(o.o)&2||(o=ge(o,!0),Gn(o.o,2)),o}function ge(o,h){var p=o.o,S=[];Gn(S,16);var C=o.constructor.h;if(C&&S.push(C),C=o.B,C){S.length=p.length,S.fill(void 0,S.length,p.length);var U={};S[S.length-1]=U}(Ae(p)&128)!==0&&vr(S),h=h||o.C()?pi:rs,U=o.constructor,Mt=S,S=new U(S),Mt=void 0,o.R&&(S.R=o.R.slice()),U=!!(Ae(p)&16);for(var L=C?p.length-1:p.length,V=0;V<L;V++)Ee(o,S,V-o.G,p[V],!1,U,h);if(C)for(var J in C)Ee(o,S,+J,C[J],!0,U,h);return S}function wt(o,h,p){o==null&&(o=Mt),Mt=void 0;var S=this.constructor.i||0,C=0<S,U=this.constructor.h,L=!1;if(o==null){o=U?[U]:[];var V=48,J=!0;C&&(S=0,V|=128),Be(o,V)}else{if(!Array.isArray(o)||U&&U!==o[0])throw Error();var ct=V=Gn(o,0);if((J=(16&ct)!==0)&&((L=(32&ct)!==0)||(ct|=32)),C){if(128&ct)S=0;else if(0<o.length){var vt=o[o.length-1];if(mi(vt)&&"g"in vt){S=0,ct|=128,delete vt.g;var Xt=!0,Ot;for(Ot in vt){Xt=!1;break}Xt&&o.pop()}}}else if(128&ct)throw Error();V!==ct&&Be(o,ct)}this.G=(U?0:-1)-S,this.h=void 0,this.o=o;t:{if(U=this.o.length,S=U-1,U&&(U=this.o[S],mi(U))){this.B=U,this.i=S-this.G;break t}h!==void 0&&-1<h?(this.i=Math.max(h,S+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!C&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(p){h=J&&!L&&!0,C=this.i;var bt;for(J=0;J<p.length;J++)L=p[J],L<C?(L+=this.G,(S=o[L])?ue(S,h):o[L]=Dn):(bt||(bt=ss(this)),(S=bt[L])?ue(S,h):bt[L]=Dn)}}wt.prototype.toJSON=function(){return Vt(this.o,Bt,te)},wt.prototype.C=function(){return!!(Ae(this.o)&2)};function ue(o,h){if(Array.isArray(o)){var p=Ae(o),S=1;!h||p&2||(S|=16),(p&S)!==S&&Be(o,p|S)}}wt.prototype.ja=ti,wt.prototype.toString=function(){return this.o.toString()};function se(o,h,p){if(p){var S={},C;for(C in p){var U=p[C],L=U.qa;L||(S.J=U.wa||U.oa.W,U.ia?(S.aa=Ge(U.ia),L=(function(V){return function(J,ct,vt){return V.J(J,ct,vt,V.aa)}})(S)):U.ka?(S.Z=Ni(U.da.P,U.ka),L=(function(V){return function(J,ct,vt){return V.J(J,ct,vt,V.Z)}})(S)):L=S.J,U.qa=L),L(h,o,U.da),S={J:S.J,aa:S.aa,Z:S.Z}}}is(h,o)}var ze=Symbol();function kn(o,h,p){return o[ze]||(o[ze]=function(S,C){return h(S,C,p)})}function Ze(o){var h=o[ze];if(!h){var p=so(o);h=function(S,C){return Ml(S,C,p)},o[ze]=h}return h}function _i(o){var h=o.ia;if(h)return Ze(h);if(h=o.va)return kn(o.da.P,h,o.ka)}function Me(o){var h=_i(o),p=o.da,S=o.oa.U;return h?function(C,U){return S(C,U,p,h)}:function(C,U){return S(C,U,p)}}function He(o,h){var p=o[h];return typeof p=="function"&&p.length===0&&(p=p(),o[h]=p),Array.isArray(p)&&(Mr in p||dn in p||0<p.length&&typeof p[0]=="function")?p:void 0}function nn(o,h,p,S,C,U){h.P=o[0];var L=1;if(o.length>L&&typeof o[L]!="number"){var V=o[L++];p(h,V)}for(;L<o.length;){p=o[L++];for(var J=L+1;J<o.length&&typeof o[J]!="number";)J++;switch(V=o[L++],J-=L,J){case 0:S(h,p,V);break;case 1:(J=He(o,L))?(L++,C(h,p,V,J)):S(h,p,V,o[L++]);break;case 2:J=L++,J=He(o,J),C(h,p,V,J,o[L++]);break;case 3:U(h,p,V,o[L++],o[L++],o[L++]);break;case 4:U(h,p,V,o[L++],o[L++],o[L++],o[L++]);break;default:throw Error("unexpected number of binary field arguments: "+J)}}return h}var Ue=Symbol();function Ge(o){var h=o[Ue];if(!h){var p=ro(o);h=function(S,C){return Sl(S,C,p)},o[Ue]=h}return h}function Ni(o,h){var p=o[Ue];return p||(p=function(S,C){return se(S,C,h)},o[Ue]=p),p}var dn=Symbol();function Yu(o,h){o.push(h)}function ju(o,h,p){o.push(h,p.W)}function qu(o,h,p,S){var C=Ge(S),U=ro(S).P,L=p.W;o.push(h,function(V,J,ct){return L(V,J,ct,U,C)})}function Zu(o,h,p,S,C,U){var L=Ni(S,U),V=p.W;o.push(h,function(J,ct,vt){return V(J,ct,vt,S,L)})}function ro(o){var h=o[dn];return h||(h=nn(o,o[dn]=[],Yu,ju,qu,Zu),Mr in o&&dn in o&&(o.length=0),h)}var Mr=Symbol();function Ku(o,h){o[0]=h}function Ju(o,h,p,S){var C=p.U;o[h]=S?function(U,L,V){return C(U,L,V,S)}:C}function $u(o,h,p,S,C){var U=p.U,L=Ze(S),V=so(S).P;o[h]=function(J,ct,vt){return U(J,ct,vt,V,L,C)}}function Qu(o,h,p,S,C,U,L){var V=p.U,J=kn(S,C,U);o[h]=function(ct,vt,Xt){return V(ct,vt,Xt,S,J,L)}}function so(o){var h=o[Mr];return h||(h=nn(o,o[Mr]={},Ku,Ju,$u,Qu),Mr in o&&dn in o&&(o.length=0),h)}function Ml(o,h,p){for(;ve(h)&&h.i!=4;){var S=h.l,C=p[S];if(!C){var U=p[0];U&&(U=U[S])&&(C=p[S]=Me(U))}if(!C||!C(h,o,S)){C=h,S=o,U=C.j,oe(C);var L=C;if(!L.ca){if(C=L.h.h-U,L.h.h=U,L=L.h,C==0)C=pt();else{if(U=ft(L,C),L.S&&L.m)C=L.i.subarray(U,U+C);else{L=L.i;var V=U;C=U+C,C=V===C?Dt():Le?L.slice(V,C):new Uint8Array(L.subarray(V,C))}C=C.length==0?pt():new at(C,re)}(U=S.R)?U.push(C):S.R=[C]}}}return o}function Sl(o,h,p){for(var S=p.length,C=S%2==1,U=C?1:0;U<S;U+=2)(0,p[U+1])(h,o,p[U]);se(o,h,C?p[0]:void 0)}function Sr(o,h){return{U:o,W:h}}var bn=Sr(function(o,h,p){if(o.i!==5)return!1;o=o.h;var S=o.i,C=o.h,U=S[C],L=S[C+1],V=S[C+2];return S=S[C+3],z(o,o.h+4),L=(U<<0|L<<8|V<<16|S<<24)>>>0,o=2*(L>>31)+1,U=L>>>23&255,L&=8388607,vn(h,p,U==255?L?NaN:1/0*o:U==0?o*Math.pow(2,-149)*L:o*Math.pow(2,U-150)*(L+Math.pow(2,23))),!0},function(o,h,p){if(h=E(h,p),h!=null){dt(o.h,8*p+5),o=o.h;var S=+h;S===0?0<1/S?zt=qt=0:(qt=0,zt=2147483648):isNaN(S)?(qt=0,zt=2147483647):(S=(p=0>S?-2147483648:0)?-S:S,34028234663852886e22<S?(qt=0,zt=(p|2139095040)>>>0):11754943508222875e-54>S?(S=Math.round(S/Math.pow(2,-149)),qt=0,zt=(p|S)>>>0):(h=Math.floor(Math.log(S)/Math.LN2),S*=Math.pow(2,-h),S=Math.round(8388608*S),16777216<=S&&++h,qt=0,zt=(p|h+127<<23|S&8388607)>>>0)),p=zt,o.h.push(p>>>0&255),o.h.push(p>>>8&255),o.h.push(p>>>16&255),o.h.push(p>>>24&255)}}),th=Sr(function(o,h,p){if(o.i!==0)return!1;var S=o.h,C=0,U=o=0,L=S.i,V=S.h;do{var J=L[V++];C|=(J&127)<<U,U+=7}while(32>U&&J&128);for(32<U&&(o|=(J&127)>>4),U=3;32>U&&J&128;U+=7)J=L[V++],o|=(J&127)<<U;if(z(S,V),128>J)S=C>>>0,J=o>>>0,(o=J&2147483648)&&(S=~S+1>>>0,J=~J>>>0,S==0&&(J=J+1>>>0)),S=4294967296*J+(S>>>0);else throw Lt();return vn(h,p,o?-S:S),!0},function(o,h,p){h=fn(h,p),h!=null&&(typeof h=="string"&&Ce(h),h!=null&&(dt(o.h,8*p),typeof h=="number"?(o=o.h,me(h),rt(o,zt,qt)):(p=Ce(h),rt(o.h,p.i,p.h))))}),eh=Sr(function(o,h,p){return o.i!==0?!1:(vn(h,p,xt(o.h)),!0)},function(o,h,p){if(h=fn(h,p),h!=null&&h!=null)if(dt(o.h,8*p),o=o.h,p=h,0<=p)dt(o,p);else{for(h=0;9>h;h++)o.h.push(p&127|128),p>>=7;o.h.push(1)}}),yl=Sr(function(o,h,p){if(o.i!==2)return!1;var S=xt(o.h)>>>0;o=o.h;var C=ft(o,S);if(o=o.i,et){var U=o,L;(L=st)||(L=st=new TextDecoder("utf-8",{fatal:!0})),o=C+S,U=C===0&&o===U.length?U:U.subarray(C,o);try{var V=L.decode(U)}catch(Xt){if(nt===void 0){try{L.decode(new Uint8Array([128]))}catch{}try{L.decode(new Uint8Array([97])),nt=!0}catch{nt=!1}}throw!nt&&(st=void 0),Xt}}else{V=C,S=V+S,C=[];for(var J=null,ct,vt;V<S;)ct=o[V++],128>ct?C.push(ct):224>ct?V>=S?M():(vt=o[V++],194>ct||(vt&192)!==128?(V--,M()):C.push((ct&31)<<6|vt&63)):240>ct?V>=S-1?M():(vt=o[V++],(vt&192)!==128||ct===224&&160>vt||ct===237&&160<=vt||((U=o[V++])&192)!==128?(V--,M()):C.push((ct&15)<<12|(vt&63)<<6|U&63)):244>=ct?V>=S-2?M():(vt=o[V++],(vt&192)!==128||(ct<<28)+(vt-144)>>30!==0||((U=o[V++])&192)!==128||((L=o[V++])&192)!==128?(V--,M()):(ct=(ct&7)<<18|(vt&63)<<12|(U&63)<<6|L&63,ct-=65536,C.push((ct>>10&1023)+55296,(ct&1023)+56320))):M(),8192<=C.length&&(J=W(J,C),C.length=0);V=W(J,C)}return vn(h,p,V),!0},function(o,h,p){if(h=fn(h,p),h!=null){var S=!1;if(S=S===void 0?!1:S,_t){if(S&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(h))throw Error("Found an unpaired surrogate");h=(It||(It=new TextEncoder)).encode(h)}else{for(var C=0,U=new Uint8Array(3*h.length),L=0;L<h.length;L++){var V=h.charCodeAt(L);if(128>V)U[C++]=V;else{if(2048>V)U[C++]=V>>6|192;else{if(55296<=V&&57343>=V){if(56319>=V&&L<h.length){var J=h.charCodeAt(++L);if(56320<=J&&57343>=J){V=1024*(V-55296)+J-56320+65536,U[C++]=V>>18|240,U[C++]=V>>12&63|128,U[C++]=V>>6&63|128,U[C++]=V&63|128;continue}else L--}if(S)throw Error("Found an unpaired surrogate");V=65533}U[C++]=V>>12|224,U[C++]=V>>6&63|128}U[C++]=V&63|128}}h=C===U.length?U:U.subarray(0,C)}dt(o.h,8*p+2),dt(o.h,h.length),Qn(o,o.h.end()),Qn(o,h)}}),El=Sr(function(o,h,p,S,C){if(o.i!==2)return!1;h=j(h,p,S),p=o.h.j,S=xt(o.h)>>>0;var U=o.h.h+S,L=U-p;if(0>=L&&(o.h.j=U,C(h,o,void 0,void 0,void 0),L=U-o.h.h),L)throw Error("Message parsing ended unexpectedly. Expected to read "+(S+" bytes, instead read "+(S-L)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return o.h.h=U,o.h.j=p,!0},function(o,h,p,S,C){if(h=K(h,S,p),h!=null)for(S=0;S<h.length;S++){var U=o;dt(U.h,8*p+2);var L=U.h.end();Qn(U,L),L.push(U.i),U=L,C(h[S],o),L=o;var V=U.pop();for(V=L.i+L.h.length()-V;127<V;)U.push(V&127|128),V>>>=7,L.i++;U.push(V),L.i++}});function oo(o){return function(h,p){t:{if(en.length){var S=en.pop();S.setOptions(p),Kt(S.h,h,p),h=S}else h=new Wt(h,p);try{var C=so(o),U=Ml(new C.P,h,C);break t}finally{C=h.h,C.i=null,C.m=!1,C.l=0,C.j=0,C.h=0,C.S=!1,h.l=-1,h.i=-1,100>en.length&&en.push(h)}U=void 0}return U}}function ao(o){return function(){var h=new Tn;Sl(this,h,ro(o)),Qn(h,h.h.end());for(var p=new Uint8Array(h.i),S=h.j,C=S.length,U=0,L=0;L<C;L++){var V=S[L];p.set(V,U),U+=V.length}return h.j=[p],p}}function Fi(o){wt.call(this,o)}v(Fi,wt);var Tl=[Fi,1,eh,2,bn,3,yl,4,yl];Fi.prototype.l=ao(Tl);function lo(o){wt.call(this,o,-1,nh)}v(lo,wt),lo.prototype.addClassification=function(o,h){return j(this,1,Fi,o,h),this};var nh=[1],bl=oo([lo,1,El,Tl]);function Oi(o){wt.call(this,o)}v(Oi,wt);var Al=[Oi,1,bn,2,bn,3,bn,4,bn,5,bn];Oi.prototype.l=ao(Al);function wl(o){wt.call(this,o,-1,ih)}v(wl,wt);var ih=[1],Cl=oo([wl,1,El,Al]);function os(o){wt.call(this,o)}v(os,wt);var Rl=[os,1,bn,2,bn,3,bn,4,bn,5,bn,6,th],rh=oo(Rl);os.prototype.l=ao(Rl);function Pl(o,h,p){if(p=o.createShader(p===0?o.VERTEX_SHADER:o.FRAGMENT_SHADER),o.shaderSource(p,h),o.compileShader(p),!o.getShaderParameter(p,o.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+o.getShaderInfoLog(p));return p}function Dl(o){return K(o,Fi,1).map(function(h){var p=fn(h,1);return{index:p??0,score:yt(h,2),label:fn(h,3)!=null?gt(fn(h,3),""):void 0,displayName:fn(h,4)!=null?gt(fn(h,4),""):void 0}})}function Ll(o){return{x:yt(o,1),y:yt(o,2),z:yt(o,3),visibility:E(o,4)!=null?yt(o,4):void 0}}function Ul(o){return o.map(function(h){return K(Cl(h),Oi,1).map(Ll)})}function co(o,h){this.i=o,this.h=h,this.m=0}function Il(o,h,p){return sh(o,h),typeof o.h.canvas.transferToImageBitmap=="function"?Promise.resolve(o.h.canvas.transferToImageBitmap()):p?Promise.resolve(o.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(o.h.canvas):(o.j===void 0&&(o.j=document.createElement("canvas")),new Promise(function(S){o.j.height=o.h.canvas.height,o.j.width=o.h.canvas.width,o.j.getContext("2d",{}).drawImage(o.h.canvas,0,0,o.h.canvas.width,o.h.canvas.height),S(o.j)}))}function sh(o,h){var p=o.h;if(o.s===void 0){var S=Pl(p,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),C=Pl(p,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),U=p.createProgram();if(p.attachShader(U,S),p.attachShader(U,C),p.linkProgram(U),!p.getProgramParameter(U,p.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+p.getProgramInfoLog(U));S=o.s=U,p.useProgram(S),C=p.getUniformLocation(S,"sampler0"),o.l={O:p.getAttribLocation(S,"aVertex"),N:p.getAttribLocation(S,"aTex"),xa:C},o.v=p.createBuffer(),p.bindBuffer(p.ARRAY_BUFFER,o.v),p.enableVertexAttribArray(o.l.O),p.vertexAttribPointer(o.l.O,2,p.FLOAT,!1,0,0),p.bufferData(p.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),p.STATIC_DRAW),p.bindBuffer(p.ARRAY_BUFFER,null),o.u=p.createBuffer(),p.bindBuffer(p.ARRAY_BUFFER,o.u),p.enableVertexAttribArray(o.l.N),p.vertexAttribPointer(o.l.N,2,p.FLOAT,!1,0,0),p.bufferData(p.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),p.STATIC_DRAW),p.bindBuffer(p.ARRAY_BUFFER,null),p.uniform1i(C,0)}S=o.l,p.useProgram(o.s),p.canvas.width=h.width,p.canvas.height=h.height,p.viewport(0,0,h.width,h.height),p.activeTexture(p.TEXTURE0),o.i.bindTexture2d(h.glName),p.enableVertexAttribArray(S.O),p.bindBuffer(p.ARRAY_BUFFER,o.v),p.vertexAttribPointer(S.O,2,p.FLOAT,!1,0,0),p.enableVertexAttribArray(S.N),p.bindBuffer(p.ARRAY_BUFFER,o.u),p.vertexAttribPointer(S.N,2,p.FLOAT,!1,0,0),p.bindFramebuffer(p.DRAW_FRAMEBUFFER?p.DRAW_FRAMEBUFFER:p.FRAMEBUFFER,null),p.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT),p.colorMask(!0,!0,!0,!0),p.drawArrays(p.TRIANGLE_FAN,0,4),p.disableVertexAttribArray(S.O),p.disableVertexAttribArray(S.N),p.bindBuffer(p.ARRAY_BUFFER,null),o.i.bindTexture2d(0)}function oh(o){this.h=o}var ah=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function lh(o,h){return h+o}function Nl(o,h){window[o]=h}function ch(o){var h=document.createElement("script");return h.setAttribute("src",o),h.setAttribute("crossorigin","anonymous"),new Promise(function(p){h.addEventListener("load",function(){p()},!1),h.addEventListener("error",function(){p()},!1),document.body.appendChild(h)})}function uh(){return A(function(o){switch(o.h){case 1:return o.s=2,w(o,WebAssembly.instantiate(ah),4);case 4:o.h=3,o.s=0;break;case 2:return o.s=0,o.l=null,o.return(!1);case 3:return o.return(!0)}})}function uo(o){if(this.h=o,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=o&&o.locateFile||lh,typeof window=="object")var h=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")h=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=h,o.options){h=l(Object.keys(o.options));for(var p=h.next();!p.done;p=h.next()){p=p.value;var S=o.options[p].default;S!==void 0&&(this.l[p]=typeof S=="function"?S():S)}}}i=uo.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function hh(o){var h,p,S,C,U,L,V,J,ct,vt,Xt;return A(function(Ot){switch(Ot.h){case 1:return o.ga?(h=o.h.files===void 0?[]:typeof o.h.files=="function"?o.h.files(o.l):o.h.files,w(Ot,uh(),2)):Ot.return();case 2:if(p=Ot.i,typeof window=="object")return Nl("createMediapipeSolutionsWasm",{locateFile:o.locateFile}),Nl("createMediapipeSolutionsPackedAssets",{locateFile:o.locateFile}),L=h.filter(function(bt){return bt.data!==void 0}),V=h.filter(function(bt){return bt.data===void 0}),J=Promise.all(L.map(function(bt){var Yt=as(o,bt.url);if(bt.path!==void 0){var ie=bt.path;Yt=Yt.then(function(be){return o.overrideFile(ie,be),Promise.resolve(be)})}return Yt})),ct=Promise.all(V.map(function(bt){return bt.simd===void 0||bt.simd&&p||!bt.simd&&!p?ch(o.locateFile(bt.url,o.ha)):Promise.resolve()})).then(function(){var bt,Yt,ie;return A(function(be){if(be.h==1)return bt=window.createMediapipeSolutionsWasm,Yt=window.createMediapipeSolutionsPackedAssets,ie=o,w(be,bt(Yt),2);ie.i=be.i,be.h=0})}),vt=(function(){return A(function(bt){return o.h.graph&&o.h.graph.url?bt=w(bt,as(o,o.h.graph.url),0):(bt.h=0,bt=void 0),bt})})(),w(Ot,Promise.all([ct,J,vt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return S=h.filter(function(bt){return bt.simd===void 0||bt.simd&&p||!bt.simd&&!p}).map(function(bt){return o.locateFile(bt.url,o.ha)}),importScripts.apply(null,c(S)),C=o,w(Ot,createMediapipeSolutionsWasm(Module),6);case 6:C.i=Ot.i,o.m=new OffscreenCanvas(1,1),o.i.canvas=o.m,U=o.i.GL.createContext(o.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),o.i.GL.makeContextCurrent(U),Ot.h=4;break;case 7:if(o.m=document.createElement("canvas"),Xt=o.m.getContext("webgl2",{}),!Xt&&(Xt=o.m.getContext("webgl",{}),!Xt))return alert("Failed to create WebGL canvas context when passing video frame."),Ot.return();o.K=Xt,o.i.canvas=o.m,o.i.createContext(o.m,!0,!0,{});case 4:o.j=new o.i.SolutionWasm,o.ga=!1,Ot.h=0}})}function fh(o){var h,p,S,C,U,L,V,J;return A(function(ct){if(ct.h==1){if(o.h.graph&&o.h.graph.url&&o.fa===o.h.graph.url)return ct.return();if(o.u=!0,!o.h.graph||!o.h.graph.url){ct.h=2;return}return o.fa=o.h.graph.url,w(ct,as(o,o.h.graph.url),3)}for(ct.h!=2&&(h=ct.i,o.j.loadGraph(h)),p=l(Object.keys(o.D)),S=p.next();!S.done;S=p.next())C=S.value,o.j.overrideFile(C,o.D[C]);if(o.D={},o.h.listeners)for(U=l(o.h.listeners),L=U.next();!L.done;L=U.next())V=L.value,gh(o,V);J=o.l,o.l={},o.setOptions(J),ct.h=0})}i.reset=function(){var o=this;return A(function(h){o.j&&(o.j.reset(),o.s={},o.v={}),h.h=0})},i.setOptions=function(o,h){var p=this;if(h=h||this.h.options){for(var S=[],C=[],U={},L=l(Object.keys(o)),V=L.next();!V.done;U={X:U.X,Y:U.Y},V=L.next())if(V=V.value,!(V in this.l&&this.l[V]===o[V])){this.l[V]=o[V];var J=h[V];J!==void 0&&(J.onChange&&(U.X=J.onChange,U.Y=o[V],S.push((function(ct){return function(){var vt;return A(function(Xt){if(Xt.h==1)return w(Xt,ct.X(ct.Y),2);vt=Xt.i,vt===!0&&(p.u=!0),Xt.h=0})}})(U))),J.graphOptionXref&&(V=Object.assign({},{calculatorName:"",calculatorIndex:0},J.graphOptionXref,{valueNumber:J.type===1?o[V]:0,valueBoolean:J.type===0?o[V]:!1,valueString:J.type===2?o[V]:""}),C.push(V)))}(S.length!==0||C.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(C),this.F=(this.F===void 0?[]:this.F).concat(S))}};function dh(o){var h,p,S,C,U,L,V;return A(function(J){switch(J.h){case 1:if(!o.u)return J.return();if(!o.F){J.h=2;break}h=l(o.F),p=h.next();case 3:if(p.done){J.h=5;break}return S=p.value,w(J,S(),4);case 4:p=h.next(),J.h=3;break;case 5:o.F=void 0;case 2:if(o.H){for(C=new o.i.GraphOptionChangeRequestList,U=l(o.H),L=U.next();!L.done;L=U.next())V=L.value,C.push_back(V);o.j.changeOptions(C),C.delete(),o.H=void 0}o.u=!1,J.h=0}})}i.initialize=function(){var o=this;return A(function(h){return h.h==1?w(h,hh(o),2):h.h!=3?w(h,fh(o),3):w(h,dh(o),0)})};function as(o,h){var p,S;return A(function(C){return h in o.L?C.return(o.L[h]):(p=o.locateFile(h,""),S=fetch(p).then(function(U){return U.arrayBuffer()}),o.L[h]=S,C.return(S))})}i.overrideFile=function(o,h){this.j?this.j.overrideFile(o,h):this.D[o]=h},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(o,h){var p=this,S,C,U,L,V,J,ct,vt,Xt;return A(function(Ot){switch(Ot.h){case 1:return p.h.inputs?(S=1e3*(h??performance.now()),w(Ot,p.I,2)):Ot.return();case 2:return w(Ot,p.initialize(),3);case 3:for(C=new p.i.PacketDataList,U=l(Object.keys(o)),L=U.next();!L.done;L=U.next())if(V=L.value,J=p.h.inputs[V]){t:{var bt=o[V];switch(J.type){case"video":var Yt=p.s[J.stream];if(Yt||(Yt=new co(p.i,p.K),p.s[J.stream]=Yt),Yt.m===0&&(Yt.m=Yt.i.createTexture()),typeof HTMLVideoElement<"u"&&bt instanceof HTMLVideoElement)var ie=bt.videoWidth,be=bt.videoHeight;else typeof HTMLImageElement<"u"&&bt instanceof HTMLImageElement?(ie=bt.naturalWidth,be=bt.naturalHeight):(ie=bt.width,be=bt.height);be={glName:Yt.m,width:ie,height:be},ie=Yt.h,ie.canvas.width=be.width,ie.canvas.height=be.height,ie.activeTexture(ie.TEXTURE0),Yt.i.bindTexture2d(Yt.m),ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,ie.RGBA,ie.UNSIGNED_BYTE,bt),Yt.i.bindTexture2d(0),Yt=be;break t;case"detections":for(Yt=p.s[J.stream],Yt||(Yt=new oh(p.i),p.s[J.stream]=Yt),Yt.data||(Yt.data=new Yt.h.DetectionListData),Yt.data.reset(bt.length),be=0;be<bt.length;++be){ie=bt[be];var ye=Yt.data,ke=ye.setBoundingBox,xn=be,on=ie.la,he=new os;if(Z(he,1,on.ra),Z(he,2,on.sa),Z(he,3,on.height),Z(he,4,on.width),Z(he,5,on.rotation),vn(he,6,on.pa),on=he.l(),ke.call(ye,xn,on),ie.ea)for(ye=0;ye<ie.ea.length;++ye){he=ie.ea[ye],ke=Yt.data,xn=ke.addNormalizedLandmark,on=be,he=Object.assign({},he,{visibility:he.visibility?he.visibility:0});var We=new Oi;Z(We,1,he.x),Z(We,2,he.y),Z(We,3,he.z),he.visibility&&Z(We,4,he.visibility),he=We.l(),xn.call(ke,on,he)}if(ie.ba)for(ye=0;ye<ie.ba.length;++ye)ke=Yt.data,xn=ke.addClassification,on=be,he=ie.ba[ye],We=new Fi,Z(We,2,he.score),he.index&&vn(We,1,he.index),he.label&&vn(We,3,he.label),he.displayName&&vn(We,4,he.displayName),he=We.l(),xn.call(ke,on,he)}Yt=Yt.data;break t;default:Yt={}}}switch(ct=Yt,vt=J.stream,J.type){case"video":C.pushTexture2d(Object.assign({},ct,{stream:vt,timestamp:S}));break;case"detections":Xt=ct,Xt.stream=vt,Xt.timestamp=S,C.pushDetectionList(Xt);break;default:throw Error("Unknown input config type: '"+J.type+"'")}}return p.j.send(C),w(Ot,p.I,4);case 4:C.delete(),Ot.h=0}})};function ph(o,h,p){var S,C,U,L,V,J,ct,vt,Xt,Ot,bt,Yt,ie,be;return A(function(ye){switch(ye.h){case 1:if(!p)return ye.return(h);for(S={},C=0,U=l(Object.keys(p)),L=U.next();!L.done;L=U.next())V=L.value,J=p[V],typeof J!="string"&&J.type==="texture"&&h[J.stream]!==void 0&&++C;1<C&&(o.M=!1),ct=l(Object.keys(p)),L=ct.next();case 2:if(L.done){ye.h=4;break}if(vt=L.value,Xt=p[vt],typeof Xt=="string")return ie=S,be=vt,w(ye,mh(o,vt,h[Xt]),14);if(Ot=h[Xt.stream],Xt.type==="detection_list"){if(Ot){for(var ke=Ot.getRectList(),xn=Ot.getLandmarksList(),on=Ot.getClassificationsList(),he=[],We=0;We<ke.size();++We){var ei=rh(ke.get(We)),_h=yt(ei,1),vh=yt(ei,2),xh=yt(ei,3),Mh=yt(ei,4),Sh=yt(ei,5,0),ls=void 0;ls=ls===void 0?0:ls,ei={la:{ra:_h,sa:vh,height:xh,width:Mh,rotation:Sh,pa:gt(fn(ei,6),ls)},ea:K(Cl(xn.get(We)),Oi,1).map(Ll),ba:Dl(bl(on.get(We)))},he.push(ei)}ke=he}else ke=[];S[vt]=ke,ye.h=7;break}if(Xt.type==="proto_list"){if(Ot){for(ke=Array(Ot.size()),xn=0;xn<Ot.size();xn++)ke[xn]=Ot.get(xn);Ot.delete()}else ke=[];S[vt]=ke,ye.h=7;break}if(Ot===void 0){ye.h=3;break}if(Xt.type==="float_list"){S[vt]=Ot,ye.h=7;break}if(Xt.type==="proto"){S[vt]=Ot,ye.h=7;break}if(Xt.type!=="texture")throw Error("Unknown output config type: '"+Xt.type+"'");return bt=o.v[vt],bt||(bt=new co(o.i,o.K),o.v[vt]=bt),w(ye,Il(bt,Ot,o.M),13);case 13:Yt=ye.i,S[vt]=Yt;case 7:Xt.transform&&S[vt]&&(S[vt]=Xt.transform(S[vt])),ye.h=3;break;case 14:ie[be]=ye.i;case 3:L=ct.next(),ye.h=2;break;case 4:return ye.return(S)}})}function mh(o,h,p){var S;return A(function(C){return typeof p=="number"||p instanceof Uint8Array||p instanceof o.i.Uint8BlobList?C.return(p):p instanceof o.i.Texture2dDataOut?(S=o.v[h],S||(S=new co(o.i,o.K),o.v[h]=S),C.return(Il(S,p,o.M))):C.return(void 0)})}function gh(o,h){for(var p=h.name||"$",S=[].concat(c(h.wants)),C=new o.i.StringList,U=l(h.wants),L=U.next();!L.done;L=U.next())C.push_back(L.value);U=o.i.PacketListener.implement({onResults:function(V){for(var J={},ct=0;ct<h.wants.length;++ct)J[S[ct]]=V.get(ct);var vt=o.listeners[p];vt&&(o.I=ph(o,J,h.outs).then(function(Xt){Xt=vt(Xt);for(var Ot=0;Ot<h.wants.length;++Ot){var bt=J[S[Ot]];typeof bt=="object"&&bt.hasOwnProperty&&bt.hasOwnProperty("delete")&&bt.delete()}Xt&&(o.I=Xt)}))}}),o.j.attachMultiListener(C,U),C.delete()}i.onResults=function(o,h){this.listeners[h||"$"]=o},Q("Solution",uo),Q("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Fl(o){return o===void 0&&(o=0),o===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Ol(o){var h=this;o=o||{},this.h=new uo({locateFile:o.locateFile,files:function(p){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Fl(p.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Ul},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Ul},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(p){return p.map(function(S){return Dl(bl(S))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(p){var S,C,U;return A(function(L){return L.h==1?(S=Fl(p),C="third_party/mediapipe/modules/hand_landmark/"+S,w(L,as(h.h,S),2)):(U=L.i,h.h.overrideFile(C,U),L.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=Ol.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(o){this.h.onResults(o)},i.initialize=function(){var o=this;return A(function(h){return w(h,o.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(o){var h=this;return A(function(p){return w(p,h.h.send(o),0)})},i.setOptions=function(o){this.h.setOptions(o)},Q("Hands",Ol),Q("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),Q("VERSION","0.4.1675469240")}).call(Yo)),Yo}var ev=tv(),jo={},Yc;function nv(){return Yc||(Yc=1,(function(){function i(x){var A=0;return function(){return A<x.length?{done:!1,value:x[A++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(x,A,Y){return x==Array.prototype||x==Object.prototype||(x[A]=Y.value),x};function e(x){x=[typeof globalThis=="object"&&globalThis,x,typeof window=="object"&&window,typeof self=="object"&&self,typeof Js=="object"&&Js];for(var A=0;A<x.length;++A){var Y=x[A];if(Y&&Y.Math==Math)return Y}throw Error("Cannot find global object")}var n=e(this);function r(x,A){if(A)t:{var Y=n;x=x.split(".");for(var H=0;H<x.length-1;H++){var $=x[H];if(!($ in Y))break t;Y=Y[$]}x=x[x.length-1],H=Y[x],A=A(H),A!=H&&A!=null&&t(Y,x,{configurable:!0,writable:!0,value:A})}}r("Symbol",function(x){function A(Q){if(this instanceof A)throw new TypeError("Symbol is not a constructor");return new Y(H+(Q||"")+"_"+$++,Q)}function Y(Q,B){this.g=Q,t(this,"description",{configurable:!0,writable:!0,value:B})}if(x)return x;Y.prototype.toString=function(){return this.g};var H="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",$=0;return A}),r("Symbol.iterator",function(x){if(x)return x;x=Symbol("Symbol.iterator");for(var A="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),Y=0;Y<A.length;Y++){var H=n[A[Y]];typeof H=="function"&&typeof H.prototype[x]!="function"&&t(H.prototype,x,{configurable:!0,writable:!0,value:function(){return s(i(this))}})}return x});function s(x){return x={next:x},x[Symbol.iterator]=function(){return this},x}function a(x){var A=typeof Symbol<"u"&&Symbol.iterator&&x[Symbol.iterator];return A?A.call(x):{next:i(x)}}function l(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function c(x){if(x.i)throw new TypeError("Generator is already running");x.i=!0}l.prototype.l=function(x){this.o=x};function u(x,A){x.h={F:A,G:!0},x.j=x.m}l.prototype.return=function(x){this.h={return:x},this.j=this.m};function f(x){this.g=new l,this.h=x}function d(x,A){c(x.g);var Y=x.g.g;return Y?g(x,"return"in Y?Y.return:function(H){return{value:H,done:!0}},A,x.g.return):(x.g.return(A),_(x))}function g(x,A,Y,H){try{var $=A.call(x.g.g,Y);if(!($ instanceof Object))throw new TypeError("Iterator result "+$+" is not an object");if(!$.done)return x.g.i=!1,$;var Q=$.value}catch(B){return x.g.g=null,u(x.g,B),_(x)}return x.g.g=null,H.call(x.g,Q),_(x)}function _(x){for(;x.g.j;)try{var A=x.h(x.g);if(A)return x.g.i=!1,{value:A.value,done:!1}}catch(Y){x.g.o=void 0,u(x.g,Y)}if(x.g.i=!1,x.g.h){if(A=x.g.h,x.g.h=null,A.G)throw A.F;return{value:A.return,done:!0}}return{value:void 0,done:!0}}function y(x){this.next=function(A){return c(x.g),x.g.g?A=g(x,x.g.g.next,A,x.g.l):(x.g.l(A),A=_(x)),A},this.throw=function(A){return c(x.g),x.g.g?A=g(x,x.g.g.throw,A,x.g.l):(u(x.g,A),A=_(x)),A},this.return=function(A){return d(x,A)},this[Symbol.iterator]=function(){return this}}function b(x){function A(H){return x.next(H)}function Y(H){return x.throw(H)}return new Promise(function(H,$){function Q(B){B.done?H(B.value):Promise.resolve(B.value).then(A,Y).then(Q,$)}Q(x.next())})}r("Promise",function(x){function A(B){this.h=0,this.i=void 0,this.g=[],this.o=!1;var G=this.j();try{B(G.resolve,G.reject)}catch(tt){G.reject(tt)}}function Y(){this.g=null}function H(B){return B instanceof A?B:new A(function(G){G(B)})}if(x)return x;Y.prototype.h=function(B){if(this.g==null){this.g=[];var G=this;this.i(function(){G.l()})}this.g.push(B)};var $=n.setTimeout;Y.prototype.i=function(B){$(B,0)},Y.prototype.l=function(){for(;this.g&&this.g.length;){var B=this.g;this.g=[];for(var G=0;G<B.length;++G){var tt=B[G];B[G]=null;try{tt()}catch(ut){this.j(ut)}}}this.g=null},Y.prototype.j=function(B){this.i(function(){throw B})},A.prototype.j=function(){function B(ut){return function(ht){tt||(tt=!0,ut.call(G,ht))}}var G=this,tt=!1;return{resolve:B(this.A),reject:B(this.l)}},A.prototype.A=function(B){if(B===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(B instanceof A)this.C(B);else{t:switch(typeof B){case"object":var G=B!=null;break t;case"function":G=!0;break t;default:G=!1}G?this.v(B):this.m(B)}},A.prototype.v=function(B){var G=void 0;try{G=B.then}catch(tt){this.l(tt);return}typeof G=="function"?this.D(G,B):this.m(B)},A.prototype.l=function(B){this.u(2,B)},A.prototype.m=function(B){this.u(1,B)},A.prototype.u=function(B,G){if(this.h!=0)throw Error("Cannot settle("+B+", "+G+"): Promise already settled in state"+this.h);this.h=B,this.i=G,this.h===2&&this.B(),this.H()},A.prototype.B=function(){var B=this;$(function(){if(B.I()){var G=n.console;typeof G<"u"&&G.error(B.i)}},1)},A.prototype.I=function(){if(this.o)return!1;var B=n.CustomEvent,G=n.Event,tt=n.dispatchEvent;return typeof tt>"u"?!0:(typeof B=="function"?B=new B("unhandledrejection",{cancelable:!0}):typeof G=="function"?B=new G("unhandledrejection",{cancelable:!0}):(B=n.document.createEvent("CustomEvent"),B.initCustomEvent("unhandledrejection",!1,!0,B)),B.promise=this,B.reason=this.i,tt(B))},A.prototype.H=function(){if(this.g!=null){for(var B=0;B<this.g.length;++B)Q.h(this.g[B]);this.g=null}};var Q=new Y;return A.prototype.C=function(B){var G=this.j();B.s(G.resolve,G.reject)},A.prototype.D=function(B,G){var tt=this.j();try{B.call(G,tt.resolve,tt.reject)}catch(ut){tt.reject(ut)}},A.prototype.then=function(B,G){function tt(Ht,Gt){return typeof Ht=="function"?function(pe){try{ut(Ht(pe))}catch(ce){ht(ce)}}:Gt}var ut,ht,Tt=new A(function(Ht,Gt){ut=Ht,ht=Gt});return this.s(tt(B,ut),tt(G,ht)),Tt},A.prototype.catch=function(B){return this.then(void 0,B)},A.prototype.s=function(B,G){function tt(){switch(ut.h){case 1:B(ut.i);break;case 2:G(ut.i);break;default:throw Error("Unexpected state: "+ut.h)}}var ut=this;this.g==null?Q.h(tt):this.g.push(tt),this.o=!0},A.resolve=H,A.reject=function(B){return new A(function(G,tt){tt(B)})},A.race=function(B){return new A(function(G,tt){for(var ut=a(B),ht=ut.next();!ht.done;ht=ut.next())H(ht.value).s(G,tt)})},A.all=function(B){var G=a(B),tt=G.next();return tt.done?H([]):new A(function(ut,ht){function Tt(pe){return function(ce){Ht[pe]=ce,Gt--,Gt==0&&ut(Ht)}}var Ht=[],Gt=0;do Ht.push(void 0),Gt++,H(tt.value).s(Tt(Ht.length-1),ht),tt=G.next();while(!tt.done)})},A});var v=typeof Object.assign=="function"?Object.assign:function(x,A){for(var Y=1;Y<arguments.length;Y++){var H=arguments[Y];if(H)for(var $ in H)Object.prototype.hasOwnProperty.call(H,$)&&(x[$]=H[$])}return x};r("Object.assign",function(x){return x||v});var m=this||self,D={facingMode:"user",width:640,height:480};function R(x,A){this.video=x,this.i=0,this.h=Object.assign(Object.assign({},D),A)}R.prototype.stop=function(){var x=this,A,Y,H,$;return b(new y(new f(function(Q){if(x.g){for(A=x.g.getTracks(),Y=a(A),H=Y.next();!H.done;H=Y.next())$=H.value,$.stop();x.g=void 0}Q.j=0})))},R.prototype.start=function(){var x=this,A;return b(new y(new f(function(Y){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),A=x.h,Y.return(navigator.mediaDevices.getUserMedia({video:{facingMode:A.facingMode,width:A.width,height:A.height}}).then(function(H){I(x,H)}).catch(function(H){var $="Failed to acquire camera feed: "+H;throw console.error($),alert($),H}))})))};function w(x){window.requestAnimationFrame(function(){N(x)})}function I(x,A){x.g=A,x.video.srcObject=A,x.video.onloadedmetadata=function(){x.video.play(),w(x)}}function N(x){var A=null;x.video.paused||x.video.currentTime===x.i||(x.i=x.video.currentTime,A=x.h.onFrame()),A?A.then(function(){w(x)}):w(x)}var F=["Camera"],q=m;F[0]in q||typeof q.execScript>"u"||q.execScript("var "+F[0]);for(var T;F.length&&(T=F.shift());)F.length||R===void 0?q[T]&&q[T]!==Object.prototype[T]?q=q[T]:q=q[T]={}:q[T]=R}).call(jo)),jo}var iv=nv();let Yr=new Jt("#F6A5C0"),Wa=new Jt("#D4A5F6"),jc=new Jt("#ff3366"),Fr=!1,Ws=0,$s=!1,Xa=0;const Hu=new k,qc=[],jr=1500,Qi=new Float32Array(jr*3);function rv(){const i=["Anon","Star","Cyber","Data","Cosmic","Pixel"],t=["Wisher","Byte","Dreamer","Voyager","Node","Spirit"];return`${i[Math.floor(Math.random()*i.length)]}_${t[Math.floor(Math.random()*t.length)]}${Math.floor(Math.random()*99)+1}`}const Ui=new Hf;Ui.background=new Jt("#050505");const es=new yn(75,window.innerWidth/window.innerHeight,.1,1e3);es.position.set(0,1,6);Ui.add(es);const ns=new D0({antialias:!0});ns.setSize(window.innerWidth,window.innerHeight);ns.setPixelRatio(Math.min(window.devicePixelRatio,2));document.getElementById("canvas-container").appendChild(ns.domElement);const gl=new J0(ns);gl.addPass(new $0(Ui,es));const sv=new fr(new St(window.innerWidth,window.innerHeight),1.5,.4,.85);gl.addPass(sv);const hi=15e4,io=new tn,Xs=new Float32Array(hi*3),Ys=new Float32Array(hi*3),Gu=new Float32Array(hi);for(let i=0;i<hi;i++){const t=Math.random()*5,e=t/5,n=(1.1-e)*1.6,r=e*Math.PI*8+(i>hi/2?Math.PI:0)+Math.random()*.6,s=Math.pow(Math.random(),.8);Xs[i*3]=Math.cos(r)*(n*s),Xs[i*3+1]=t-2,Xs[i*3+2]=Math.sin(r)*(n*s);let a=i>hi/2?Wa:Yr;Ys[i*3]=a.r,Ys[i*3+1]=a.g,Ys[i*3+2]=a.b,Gu[i]=(1-e)*.035+.005}io.setAttribute("position",new Qe(Xs,3));io.setAttribute("color",new Qe(Ys,3));io.setAttribute("size",new Qe(Gu,1));const Ya=new Ye({uniforms:{pointTexture:{value:new Uu().load("https://threejs.org/examples/textures/sprites/disc.png")},uExplode:{value:0},uFillLevel:{value:5}},vertexShader:`
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
  `,fragmentShader:`
    uniform sampler2D pointTexture;
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
      if (gl_FragColor.a < 0.1) discard;
    }
  `,transparent:!0,blending:sr,depthTest:!1,vertexColors:!0}),qr=new ll(io,Ya);Ui.add(qr);const mr=new Cu;mr.moveTo(0,-1.5);mr.bezierCurveTo(-1,-1,-2,.5,-2,1.5);mr.bezierCurveTo(-2,3,-.5,3.5,0,2);mr.bezierCurveTo(.5,3.5,2,3,2,1.5);mr.bezierCurveTo(2,.5,1,-1,0,-1.5);const ja=new wd({color:jc,emissive:jc,emissiveIntensity:3,wireframe:!0}),_l=new _n(new hl(mr),ja);_l.scale.set(.12,.12,.12);_l.position.set(0,3.2,0);qr.add(_l);function ov(i,t){Yr.copy(i),Wa.copy(t);const e=qr.geometry.attributes.color;for(let r=0;r<hi;r++){let s=r>hi/2?Wa:Yr;e.array[r*3]=s.r,e.array[r*3+1]=s.g,e.array[r*3+2]=s.b}e.needsUpdate=!0;const n=new Jt().setHSL(Math.random(),.8,.5);ja.color.copy(n),ja.emissive.copy(n)}function av(i){const t=document.createElement("canvas");t.width=1024,t.height=160;const e=t.getContext("2d"),r=`> [${rv()}] : "${i}"`,s=new Yf(t),a=new _n(new Qr(1.2,.2),new Jr({map:s,transparent:!0,opacity:0,blending:sr,depthTest:!1}));return a.position.set((Math.random()-.5)*3,(Math.random()-.5)*2,-2),a.userData={fullText:r,charCount:0,lastUpdate:0,canvas:t,ctx:e,texture:s},es.add(a),a}function lv(i){const t=i.userData,e=Date.now();if(e-t.lastUpdate>70&&t.charCount<t.fullText.length){t.charCount++,t.lastUpdate=e;const n=t.ctx;n.clearRect(0,0,t.canvas.width,t.canvas.height),n.fillStyle=Yr.getStyle(),n.font="42px monospace",n.shadowColor=Yr.getStyle(),n.shadowBlur=12;const r=t.fullText.substring(0,t.charCount);n.fillText(r+(Math.floor(e/350)%2===0?"_":""),50,95),t.texture.needsUpdate=!0}}const ku=5e3,Wu=new tn,js=new Float32Array(ku*3);for(let i=0;i<ku;i++)js[i*3]=(Math.random()-.5)*20,js[i*3+1]=Math.random()*10,js[i*3+2]=(Math.random()-.5)*20;Wu.setAttribute("position",new Qe(js,3));const qa=new ll(Wu,new al({color:16777215,size:.02,transparent:!0,opacity:.4}));Ui.add(qa);const vl=new tn;vl.setAttribute("position",new Qe(new Float32Array(jr*3),3));vl.setAttribute("color",new Qe(new Float32Array(jr*3),3));const cv=new al({size:.1,vertexColors:!0,map:new Uu().load("https://threejs.org/examples/textures/sprites/disc.png"),transparent:!0,opacity:0,blending:sr}),Un=new ll(vl,cv);Ui.add(Un);const Zr=new _n(new fl(.06),new Jr({color:16777215}));Zr.visible=!1;Ui.add(Zr);function Xu(){requestAnimationFrame(Xu),qr.rotation.y=Hs.lerp(qr.rotation.y,Xa,.1),Xa+=.002;const i=Fr?.01:.07;Ya.uniforms.uExplode.value=Hs.lerp(Ya.uniforms.uExplode.value,Fr?1:0,i);const t=qa.geometry.attributes.position.array;for(let e=1;e<t.length;e+=3)t[e]-=.02,t[e]<-2&&(t[e]=8);if(qa.geometry.attributes.position.needsUpdate=!0,qc.forEach(e=>{const n=Fr?1:0;e.material.opacity=Hs.lerp(e.material.opacity,n,.05),e.visible=e.material.opacity>.01,e.visible?lv(e):e.userData.charCount=0}),$s&&(Ws+=.025,Zr.position.copy(Hu).lerp(new k(0,3.2,0),Ws),Ws>=1)){$s=!1,Zr.visible=!1;const e=new Jt().setHSL(Math.random(),.7,.6),n=new Jt().setHSL(Math.random(),.7,.6);ov(e,n),Un.material.opacity=1;const r=Un.geometry.attributes.position.array,s=Un.geometry.attributes.color.array;for(let l=0;l<jr;l++){r[l*3]=0,r[l*3+1]=3.2,r[l*3+2]=0;const c=Math.random()>.5?e:n;s[l*3]=c.r,s[l*3+1]=c.g,s[l*3+2]=c.b,Qi[l*3]=(Math.random()-.5)*.4,Qi[l*3+1]=(Math.random()-.5)*.4,Qi[l*3+2]=(Math.random()-.5)*.4}Un.geometry.attributes.position.needsUpdate=!0,Un.geometry.attributes.color.needsUpdate=!0;const a=document.getElementById("wish-input");qc.push(av(a.dataset.lastWish||"Wish Sent"))}if(Un.material.opacity>0){Un.material.opacity-=.015;const e=Un.geometry.attributes.position.array;for(let n=0;n<jr;n++)e[n*3]+=Qi[n*3],e[n*3+1]+=Qi[n*3+1],e[n*3+2]+=Qi[n*3+2];Un.geometry.attributes.position.needsUpdate=!0}gl.render()}Xu();document.getElementById("send-button").addEventListener("click",()=>{const i=document.getElementById("wish-input");i.value.trim()&&!$s&&(i.dataset.lastWish=i.value,Hu.set((Math.random()-.5)*10,-5,1),Ws=0,$s=!0,Zr.visible=!0,i.value="")});const xl=new ev.Hands({locateFile:i=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${i}`});xl.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5});xl.onResults(i=>{if(i.multiHandLandmarks?.length>0){const t=i.multiHandLandmarks[0];Xa=(.5-t[0].x)*6;const e=t[12].x-t[0].x,n=t[12].y-t[0].y;Fr=Math.sqrt(e*e+n*n)>.35}else Fr=!1});new iv.Camera(document.querySelector(".input_video"),{onFrame:async()=>{await xl.send({image:document.querySelector(".input_video")})},width:640,height:480}).start();new U0(es,ns.domElement);
