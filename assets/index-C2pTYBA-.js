(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ca="182",Wu=0,pl=1,Xu=2,xs=1,Yu=2,_r=3,oi=0,tn=1,Dn=2,In=0,Yi=1,Rs=2,ml=3,gl=4,qu=5,xi=100,ju=101,Zu=102,Ku=103,Ju=104,$u=200,Qu=201,eh=202,th=203,Do=204,Lo=205,nh=206,ih=207,rh=208,sh=209,oh=210,ah=211,lh=212,ch=213,uh=214,Uo=0,Io=1,No=2,ji=3,Fo=4,Oo=5,Bo=6,zo=7,Sc=0,hh=1,fh=2,Nn=0,Mc=1,yc=2,Ec=3,Tc=4,bc=5,Ac=6,wc=7,Cc=300,Ei=301,Zi=302,Vo=303,Go=304,Ns=306,Ho=1e3,Yn=1001,ko=1002,kt=1003,dh=1004,qr=1005,jt=1006,js=1007,Mi=1008,vn=1009,Rc=1010,Pc=1011,Ar=1012,Ra=1013,Fn=1014,Ln=1015,hn=1016,Pa=1017,Da=1018,wr=1020,Dc=35902,Lc=35899,Uc=1021,Ic=1022,wn=1023,jn=1026,yi=1027,Nc=1028,La=1029,Ki=1030,Ua=1031,Ia=1033,Ss=33776,Ms=33777,ys=33778,Es=33779,Wo=35840,Xo=35841,Yo=35842,qo=35843,jo=36196,Zo=37492,Ko=37496,Jo=37488,$o=37489,Qo=37490,ea=37491,ta=37808,na=37809,ia=37810,ra=37811,sa=37812,oa=37813,aa=37814,la=37815,ca=37816,ua=37817,ha=37818,fa=37819,da=37820,pa=37821,ma=36492,ga=36494,_a=36495,va=36283,xa=36284,Sa=36285,Ma=36286,ph=3200,Fc=0,mh=1,ri="",gn="srgb",Ji="srgb-linear",Ps="linear",xt="srgb",Pi=7680,_l=519,gh=512,_h=513,vh=514,Na=515,xh=516,Sh=517,Fa=518,Mh=519,vl=35044,xl="300 es",Un=2e3,Ds=2001;function Oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){const i=Cr("canvas");return i.style.display="block",i}const Sl={};function Ml(...i){const e="THREE."+i.shift();console.log(e,...i)}function qe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function ft(...i){const e="THREE."+i.shift();console.error(e,...i)}function Rr(...i){const e=i.join(" ");e in Sl||(Sl[e]=!0,qe(...i))}function Eh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yl=1234567;const Sr=Math.PI/180,Pr=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Oa(i,e){return(i%e+e)%e}function Th(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bh(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function Ah(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function wh(i,e=1){return e-Math.abs(Oa(i,e*2)-e)}function Ch(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ph(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dh(i,e){return i+Math.random()*(e-i)}function Lh(i){return i*(.5-Math.random())}function Uh(i){i!==void 0&&(yl=i);let e=yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ih(i){return i*Sr}function Nh(i){return i*Pr}function Fh(i){return(i&i-1)===0&&i!==0}function Oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zh(i,e,t,n,r){const s=Math.cos,a=Math.sin,l=s(t/2),c=a(t/2),u=s((e+n)/2),f=a((e+n)/2),d=s((e-n)/2),m=a((e-n)/2),_=s((n-e)/2),y=a((n-e)/2);switch(r){case"XYX":i.set(l*f,c*d,c*m,l*u);break;case"YZY":i.set(c*m,l*f,c*d,l*u);break;case"ZXZ":i.set(c*d,c*m,l*f,l*u);break;case"XZX":i.set(l*f,c*y,c*_,l*u);break;case"YXY":i.set(c*_,l*f,c*y,l*u);break;case"ZYZ":i.set(c*y,c*_,l*f,l*u);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zs={DEG2RAD:Sr,RAD2DEG:Pr,generateUUID:bi,clamp:it,euclideanModulo:Oa,mapLinear:Th,inverseLerp:bh,lerp:Mr,damp:Ah,pingpong:wh,smoothstep:Ch,smootherstep:Rh,randInt:Ph,randFloat:Dh,randFloatSpread:Lh,seededRandom:Uh,degToRad:Ih,radToDeg:Nh,isPowerOfTwo:Fh,ceilPowerOfTwo:Oh,floorPowerOfTwo:Bh,setQuaternionFromProperEuler:zh,normalize:$t,denormalize:Xi};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let c=n[r+0],u=n[r+1],f=n[r+2],d=n[r+3],m=s[a+0],_=s[a+1],y=s[a+2],b=s[a+3];if(l<=0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(l>=1){e[t+0]=m,e[t+1]=_,e[t+2]=y,e[t+3]=b;return}if(d!==b||c!==m||u!==_||f!==y){let v=c*m+u*_+f*y+d*b;v<0&&(m=-m,_=-_,y=-y,b=-b,v=-v);let g=1-l;if(v<.9995){const U=Math.acos(v),P=Math.sin(U);g=Math.sin(g*U)/P,l=Math.sin(l*U)/P,c=c*g+m*l,u=u*g+_*l,f=f*g+y*l,d=d*g+b*l}else{c=c*g+m*l,u=u*g+_*l,f=f*g+y*l,d=d*g+b*l;const U=1/Math.sqrt(c*c+u*u+f*f+d*d);c*=U,u*=U,f*=U,d*=U}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const l=n[r],c=n[r+1],u=n[r+2],f=n[r+3],d=s[a],m=s[a+1],_=s[a+2],y=s[a+3];return e[t]=l*y+f*d+c*_-u*m,e[t+1]=c*y+f*m+u*d-l*_,e[t+2]=u*y+f*_+l*m-c*d,e[t+3]=f*y-l*d-c*m-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(n/2),f=l(r/2),d=l(s/2),m=c(n/2),_=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=m*f*d+u*_*y,this._y=u*_*d-m*f*y,this._z=u*f*y+m*_*d,this._w=u*f*d-m*_*y;break;case"YXZ":this._x=m*f*d+u*_*y,this._y=u*_*d-m*f*y,this._z=u*f*y-m*_*d,this._w=u*f*d+m*_*y;break;case"ZXY":this._x=m*f*d-u*_*y,this._y=u*_*d+m*f*y,this._z=u*f*y+m*_*d,this._w=u*f*d-m*_*y;break;case"ZYX":this._x=m*f*d-u*_*y,this._y=u*_*d+m*f*y,this._z=u*f*y-m*_*d,this._w=u*f*d+m*_*y;break;case"YZX":this._x=m*f*d+u*_*y,this._y=u*_*d+m*f*y,this._z=u*f*y-m*_*d,this._w=u*f*d-m*_*y;break;case"XZY":this._x=m*f*d-u*_*y,this._y=u*_*d-m*f*y,this._z=u*f*y+m*_*d,this._w=u*f*d+m*_*y;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],u=t[2],f=t[6],d=t[10],m=n+l+d;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(f-c)*_,this._y=(s-u)*_,this._z=(a-r)*_}else if(n>l&&n>d){const _=2*Math.sqrt(1+n-l-d);this._w=(f-c)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+u)/_}else if(l>d){const _=2*Math.sqrt(1+l-n-d);this._w=(s-u)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(c+f)/_}else{const _=2*Math.sqrt(1+d-n-l);this._w=(a-r)/_,this._x=(s+u)/_,this._y=(c+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+a*l+r*u-s*c,this._y=r*f+a*c+s*l-n*u,this._z=s*f+a*u+n*c-r*l,this._w=a*f-n*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){const u=Math.acos(l),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*n),f=2*(l*t-s*r),d=2*(s*n-a*t);return this.x=t+c*u+a*d-l*f,this.y=n+c*f+l*u-s*d,this.z=r+c*d+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-n*c,this.z=n*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new Y,El=new Fr;class $e{constructor(e,t,n,r,s,a,l,c,u){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,u)}set(e,t,n,r,s,a,l,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],c=n[6],u=n[1],f=n[4],d=n[7],m=n[2],_=n[5],y=n[8],b=r[0],v=r[3],g=r[6],U=r[1],P=r[4],w=r[7],I=r[2],O=r[5],N=r[8];return s[0]=a*b+l*U+c*I,s[3]=a*v+l*P+c*O,s[6]=a*g+l*w+c*N,s[1]=u*b+f*U+d*I,s[4]=u*v+f*P+d*O,s[7]=u*g+f*w+d*N,s[2]=m*b+_*U+y*I,s[5]=m*v+_*P+y*O,s[8]=m*g+_*w+y*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8];return t*a*f-t*l*u-n*s*f+n*l*c+r*s*u-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=f*a-l*u,m=l*c-f*s,_=u*s-a*c,y=t*d+n*m+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return e[0]=d*b,e[1]=(r*u-f*n)*b,e[2]=(l*n-r*a)*b,e[3]=m*b,e[4]=(f*t-r*c)*b,e[5]=(r*s-l*t)*b,e[6]=_*b,e[7]=(n*c-u*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new $e,Tl=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vh(){const i={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?Ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ji]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:Tl,fromXYZ:bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Tl,fromXYZ:bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const lt=Vh();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Di;class Gh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=Cr("canvas")),Di.width=e.width,Di.height=e.height;const r=Di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hh=0;class Ba{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push($s(r[a].image)):s.push($s(r[a]))}else s=$s(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function $s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let kh=0;const Qs=new Y;class Zt extends tr{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=Yn,r=Yn,s=jt,a=Mi,l=wn,c=vn,u=Zt.DEFAULT_ANISOTROPY,f=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=bi(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qs).x}get height(){return this.source.getSize(Qs).y}get depth(){return this.source.getSize(Qs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ho:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ho:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Cc;Zt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],f=c[4],d=c[8],m=c[1],_=c[5],y=c[9],b=c[2],v=c[6],g=c[10];if(Math.abs(f-m)<.01&&Math.abs(d-b)<.01&&Math.abs(y-v)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+b)<.1&&Math.abs(y+v)<.1&&Math.abs(u+_+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(u+1)/2,w=(_+1)/2,I=(g+1)/2,O=(f+m)/4,N=(d+b)/4,j=(y+v)/4;return P>w&&P>I?P<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(P),r=O/n,s=N/n):w>I?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=O/r,s=j/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=N/s,r=j/s),this.set(n,r,s,t),this}let U=Math.sqrt((v-y)*(v-y)+(d-b)*(d-b)+(m-f)*(m-f));return Math.abs(U)<.001&&(U=1),this.x=(v-y)/U,this.y=(d-b)/U,this.z=(m-f)/U,this.w=Math.acos((u+_+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wh extends tr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Zt(r);this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ba(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends Wh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bc extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xh extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Zr.subVectors(this.max,hr),Li.subVectors(e.a,hr),Ui.subVectors(e.b,hr),Ii.subVectors(e.c,hr),$n.subVectors(Ui,Li),Qn.subVectors(Ii,Ui),fi.subVectors(Li,Ii);let t=[0,-$n.z,$n.y,0,-Qn.z,Qn.y,0,-fi.z,fi.y,$n.z,0,-$n.x,Qn.z,0,-Qn.x,fi.z,0,-fi.x,-$n.y,$n.x,0,-Qn.y,Qn.x,0,-fi.y,fi.x,0];return!eo(t,Li,Ui,Ii,Zr)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,Li,Ui,Ii,Zr))?!1:(Kr.crossVectors($n,Qn),t=[Kr.x,Kr.y,Kr.z],eo(t,Li,Ui,Ii,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],En=new Y,jr=new Or,Li=new Y,Ui=new Y,Ii=new Y,$n=new Y,Qn=new Y,fi=new Y,hr=new Y,Zr=new Y,Kr=new Y,di=new Y;function eo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){di.fromArray(i,s);const l=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),c=e.dot(di),u=t.dot(di),f=n.dot(di);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>l)return!1}return!0}const Yh=new Or,fr=new Y,to=new Y;class Fs{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(fr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(to)),this.expandByPoint(fr.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new Y,no=new Y,Jr=new Y,ei=new Y,io=new Y,$r=new Y,ro=new Y;class zc{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){no.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(no);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),l=ei.dot(this.direction),c=-ei.dot(Jr),u=ei.lengthSq(),f=Math.abs(1-a*a);let d,m,_,y;if(f>0)if(d=a*c-l,m=a*l-c,y=s*f,d>=0)if(m>=-y)if(m<=y){const b=1/f;d*=b,m*=b,_=d*(d+a*m+2*l)+m*(a*d+m+2*c)+u}else m=s,d=Math.max(0,-(a*m+l)),_=-d*d+m*(m+2*c)+u;else m=-s,d=Math.max(0,-(a*m+l)),_=-d*d+m*(m+2*c)+u;else m<=-y?(d=Math.max(0,-(-a*s+l)),m=d>0?-s:Math.min(Math.max(-s,-c),s),_=-d*d+m*(m+2*c)+u):m<=y?(d=0,m=Math.min(Math.max(-s,-c),s),_=m*(m+2*c)+u):(d=Math.max(0,-(a*s+l)),m=d>0?s:Math.min(Math.max(-s,-c),s),_=-d*d+m*(m+2*c)+u);else m=a>0?-s:s,d=Math.max(0,-(a*m+l)),_=-d*d+m*(m+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(no).addScaledVector(Jr,m),_}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,c;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),f>=0?(s=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(l=(e.min.z-m.z)*d,c=(e.max.z-m.z)*d):(l=(e.max.z-m.z)*d,c=(e.min.z-m.z)*d),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,r,s){io.subVectors(t,e),$r.subVectors(n,e),ro.crossVectors(io,$r);let a=this.direction.dot(ro),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ei.subVectors(this.origin,e);const c=l*this.direction.dot($r.crossVectors(ei,$r));if(c<0)return null;const u=l*this.direction.dot(io.cross(ei));if(u<0||c+u>a)return null;const f=-l*ei.dot(ro);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,r,s,a,l,c,u,f,d,m,_,y,b,v){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,u,f,d,m,_,y,b,v)}set(e,t,n,r,s,a,l,c,u,f,d,m,_,y,b,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=l,g[13]=c,g[2]=u,g[6]=f,g[10]=d,g[14]=m,g[3]=_,g[7]=y,g[11]=b,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ni.setFromMatrixColumn(e,0).length(),s=1/Ni.setFromMatrixColumn(e,1).length(),a=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const m=a*f,_=a*d,y=l*f,b=l*d;t[0]=c*f,t[4]=-c*d,t[8]=u,t[1]=_+y*u,t[5]=m-b*u,t[9]=-l*c,t[2]=b-m*u,t[6]=y+_*u,t[10]=a*c}else if(e.order==="YXZ"){const m=c*f,_=c*d,y=u*f,b=u*d;t[0]=m+b*l,t[4]=y*l-_,t[8]=a*u,t[1]=a*d,t[5]=a*f,t[9]=-l,t[2]=_*l-y,t[6]=b+m*l,t[10]=a*c}else if(e.order==="ZXY"){const m=c*f,_=c*d,y=u*f,b=u*d;t[0]=m-b*l,t[4]=-a*d,t[8]=y+_*l,t[1]=_+y*l,t[5]=a*f,t[9]=b-m*l,t[2]=-a*u,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const m=a*f,_=a*d,y=l*f,b=l*d;t[0]=c*f,t[4]=y*u-_,t[8]=m*u+b,t[1]=c*d,t[5]=b*u+m,t[9]=_*u-y,t[2]=-u,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const m=a*c,_=a*u,y=l*c,b=l*u;t[0]=c*f,t[4]=b-m*d,t[8]=y*d+_,t[1]=d,t[5]=a*f,t[9]=-l*f,t[2]=-u*f,t[6]=_*d+y,t[10]=m-b*d}else if(e.order==="XZY"){const m=a*c,_=a*u,y=l*c,b=l*u;t[0]=c*f,t[4]=-d,t[8]=u*f,t[1]=m*d+b,t[5]=a*f,t[9]=_*d-y,t[2]=y*d-_,t[6]=l*f,t[10]=b*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qh,e,jh)}lookAt(e,t,n){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ti.crossVectors(n,cn),ti.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ti.crossVectors(n,cn)),ti.normalize(),Qr.crossVectors(cn,ti),r[0]=ti.x,r[4]=Qr.x,r[8]=cn.x,r[1]=ti.y,r[5]=Qr.y,r[9]=cn.y,r[2]=ti.z,r[6]=Qr.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],c=n[8],u=n[12],f=n[1],d=n[5],m=n[9],_=n[13],y=n[2],b=n[6],v=n[10],g=n[14],U=n[3],P=n[7],w=n[11],I=n[15],O=r[0],N=r[4],j=r[8],T=r[12],x=r[1],A=r[5],X=r[9],G=r[13],$=r[2],Q=r[6],B=r[10],H=r[14],ee=r[3],ue=r[7],he=r[11],Ee=r[15];return s[0]=a*O+l*x+c*$+u*ee,s[4]=a*N+l*A+c*Q+u*ue,s[8]=a*j+l*X+c*B+u*he,s[12]=a*T+l*G+c*H+u*Ee,s[1]=f*O+d*x+m*$+_*ee,s[5]=f*N+d*A+m*Q+_*ue,s[9]=f*j+d*X+m*B+_*he,s[13]=f*T+d*G+m*H+_*Ee,s[2]=y*O+b*x+v*$+g*ee,s[6]=y*N+b*A+v*Q+g*ue,s[10]=y*j+b*X+v*B+g*he,s[14]=y*T+b*G+v*H+g*Ee,s[3]=U*O+P*x+w*$+I*ee,s[7]=U*N+P*A+w*Q+I*ue,s[11]=U*j+P*X+w*B+I*he,s[15]=U*T+P*G+w*H+I*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],f=e[2],d=e[6],m=e[10],_=e[14],y=e[3],b=e[7],v=e[11],g=e[15],U=c*_-u*m,P=l*_-u*d,w=l*m-c*d,I=a*_-u*f,O=a*m-c*f,N=a*d-l*f;return t*(b*U-v*P+g*w)-n*(y*U-v*I+g*O)+r*(y*P-b*I+g*N)-s*(y*w-b*O+v*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],d=e[9],m=e[10],_=e[11],y=e[12],b=e[13],v=e[14],g=e[15],U=d*v*u-b*m*u+b*c*_-l*v*_-d*c*g+l*m*g,P=y*m*u-f*v*u-y*c*_+a*v*_+f*c*g-a*m*g,w=f*b*u-y*d*u+y*l*_-a*b*_-f*l*g+a*d*g,I=y*d*c-f*b*c-y*l*m+a*b*m+f*l*v-a*d*v,O=t*U+n*P+r*w+s*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return e[0]=U*N,e[1]=(b*m*s-d*v*s-b*r*_+n*v*_+d*r*g-n*m*g)*N,e[2]=(l*v*s-b*c*s+b*r*u-n*v*u-l*r*g+n*c*g)*N,e[3]=(d*c*s-l*m*s-d*r*u+n*m*u+l*r*_-n*c*_)*N,e[4]=P*N,e[5]=(f*v*s-y*m*s+y*r*_-t*v*_-f*r*g+t*m*g)*N,e[6]=(y*c*s-a*v*s-y*r*u+t*v*u+a*r*g-t*c*g)*N,e[7]=(a*m*s-f*c*s+f*r*u-t*m*u-a*r*_+t*c*_)*N,e[8]=w*N,e[9]=(y*d*s-f*b*s-y*n*_+t*b*_+f*n*g-t*d*g)*N,e[10]=(a*b*s-y*l*s+y*n*u-t*b*u-a*n*g+t*l*g)*N,e[11]=(f*l*s-a*d*s-f*n*u+t*d*u+a*n*_-t*l*_)*N,e[12]=I*N,e[13]=(f*b*r-y*d*r+y*n*m-t*b*m-f*n*v+t*d*v)*N,e[14]=(y*l*r-a*b*r-y*n*c+t*b*c+a*n*v-t*l*v)*N,e[15]=(a*d*r-f*l*r+f*n*c-t*d*c-a*n*m+t*l*m)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,c=e.z,u=s*a,f=s*l;return this.set(u*a+n,u*l-r*c,u*c+r*l,0,u*l+r*c,f*l+n,f*c-r*a,0,u*c-r*l,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,u=s+s,f=a+a,d=l+l,m=s*u,_=s*f,y=s*d,b=a*f,v=a*d,g=l*d,U=c*u,P=c*f,w=c*d,I=n.x,O=n.y,N=n.z;return r[0]=(1-(b+g))*I,r[1]=(_+w)*I,r[2]=(y-P)*I,r[3]=0,r[4]=(_-w)*O,r[5]=(1-(m+g))*O,r[6]=(v+U)*O,r[7]=0,r[8]=(y+P)*N,r[9]=(v-U)*N,r[10]=(1-(m+b))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ni.set(r[0],r[1],r[2]).length();const a=Ni.set(r[4],r[5],r[6]).length(),l=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Tn.copy(this);const u=1/s,f=1/a,d=1/l;return Tn.elements[0]*=u,Tn.elements[1]*=u,Tn.elements[2]*=u,Tn.elements[4]*=f,Tn.elements[5]*=f,Tn.elements[6]*=f,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,t.setFromRotationMatrix(Tn),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,a,l=Un,c=!1){const u=this.elements,f=2*s/(t-e),d=2*s/(n-r),m=(t+e)/(t-e),_=(n+r)/(n-r);let y,b;if(c)y=s/(a-s),b=a*s/(a-s);else if(l===Un)y=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(l===Ds)y=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=d,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=Un,c=!1){const u=this.elements,f=2/(t-e),d=2/(n-r),m=-(t+e)/(t-e),_=-(n+r)/(n-r);let y,b;if(c)y=1/(a-s),b=a/(a-s);else if(l===Un)y=-2/(a-s),b=-(a+s)/(a-s);else if(l===Ds)y=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=d,u[9]=0,u[13]=_,u[2]=0,u[6]=0,u[10]=y,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new Y,Tn=new Rt,qh=new Y(0,0,0),jh=new Y(1,1,1),ti=new Y,Qr=new Y,cn=new Y,Al=new Rt,wl=new Fr;class On{constructor(e=0,t=0,n=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],f=r[9],d=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,_),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zh=0;const Cl=new Y,Fi=new Fr,kn=new Rt,es=new Y,dr=new Y,Kh=new Y,Jh=new Fr,Rl=new Y(1,0,0),Pl=new Y(0,1,0),Dl=new Y(0,0,1),Ll={type:"added"},$h={type:"removed"},Oi={type:"childadded",child:null},so={type:"childremoved",child:null};class rn extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new Y,t=new On,n=new Fr,r=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new $e}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(dr,es,this.up):kn.lookAt(es,dr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(kn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($h),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Jh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const d=c[u];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),d=a(e.shapes),m=a(e.skeletons),_=a(e.animations),y=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),y.length>0&&(n.nodes=y)}return n.object=r,n;function a(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}rn.DEFAULT_UP=new Y(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new Y,Wn=new Y,oo=new Y,Xn=new Y,Bi=new Y,zi=new Y,Ul=new Y,ao=new Y,lo=new Y,co=new Y,uo=new Pt,ho=new Pt,fo=new Pt;class An{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),Wn.subVectors(n,t),oo.subVectors(e,t);const a=bn.dot(bn),l=bn.dot(Wn),c=bn.dot(oo),u=Wn.dot(Wn),f=Wn.dot(oo),d=a*u-l*l;if(d===0)return s.set(0,0,0),null;const m=1/d,_=(u*c-l*f)*m,y=(a*f-l*c)*m;return s.set(1-_-y,y,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,s,a,l,c){return this.getBarycoord(e,t,n,r,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(l,Xn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return uo.setScalar(0),ho.setScalar(0),fo.setScalar(0),uo.fromBufferAttribute(e,t),ho.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(uo,s.x),a.addScaledVector(ho,s.y),a.addScaledVector(fo,s.z),a}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),Wn.subVectors(e,t),bn.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),bn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return An.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,l;Bi.subVectors(r,n),zi.subVectors(s,n),ao.subVectors(e,n);const c=Bi.dot(ao),u=zi.dot(ao);if(c<=0&&u<=0)return t.copy(n);lo.subVectors(e,r);const f=Bi.dot(lo),d=zi.dot(lo);if(f>=0&&d<=f)return t.copy(r);const m=c*d-f*u;if(m<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Bi,a);co.subVectors(e,s);const _=Bi.dot(co),y=zi.dot(co);if(y>=0&&_<=y)return t.copy(s);const b=_*u-c*y;if(b<=0&&u>=0&&y<=0)return l=u/(u-y),t.copy(n).addScaledVector(zi,l);const v=f*y-_*d;if(v<=0&&d-f>=0&&_-y>=0)return Ul.subVectors(s,r),l=(d-f)/(d-f+(_-y)),t.copy(r).addScaledVector(Ul,l);const g=1/(v+b+m);return a=b*g,l=m*g,t.copy(n).addScaledVector(Bi,a).addScaledVector(zi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ts={h:0,s:0,l:0};function po(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=Oa(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=po(a,s,e+1/3),this.g=po(a,s,e),this.b=po(a,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=gn){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=Gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return lt.workingToColorSpace(qt.copy(this),e),Math.round(it(qt.r*255,0,255))*65536+Math.round(it(qt.g*255,0,255))*256+Math.round(it(qt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(qt.copy(this),t);const n=qt.r,r=qt.g,s=qt.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let c,u;const f=(l+a)/2;if(l===a)c=0,u=0;else{const d=a-l;switch(u=f<=.5?d/(a+l):d/(2-a-l),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=gn){lt.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,r=qt.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(ts);const n=Mr(ni.h,ts.h,t),r=Mr(ni.s,ts.s,t),s=Mr(ni.l,ts.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new rt;rt.NAMES=Gc;let Qh=0;class nr extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Yi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Lo,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Os extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new Y,ns=new we;let ef=0;class xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ef++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class Hc extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kc extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tf=0;const mn=new Rt,mo=new rn,Vi=new Y,un=new Or,pr=new Or,Bt=new Y;class fn extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oc(e)?kc:Hc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];pr.setFromBufferAttribute(l),this.morphTargetsRelative?(Bt.addVectors(un.min,pr.min),un.expandByPoint(Bt),Bt.addVectors(un.max,pr.max),un.expandByPoint(Bt)):(un.expandByPoint(pr.min),un.expandByPoint(pr.max))}un.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,f=l.count;u<f;u++)Bt.fromBufferAttribute(l,u),c&&(Vi.fromBufferAttribute(e,u),Bt.add(Vi)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let j=0;j<n.count;j++)l[j]=new Y,c[j]=new Y;const u=new Y,f=new Y,d=new Y,m=new we,_=new we,y=new we,b=new Y,v=new Y;function g(j,T,x){u.fromBufferAttribute(n,j),f.fromBufferAttribute(n,T),d.fromBufferAttribute(n,x),m.fromBufferAttribute(s,j),_.fromBufferAttribute(s,T),y.fromBufferAttribute(s,x),f.sub(u),d.sub(u),_.sub(m),y.sub(m);const A=1/(_.x*y.y-y.x*_.y);isFinite(A)&&(b.copy(f).multiplyScalar(y.y).addScaledVector(d,-_.y).multiplyScalar(A),v.copy(d).multiplyScalar(_.x).addScaledVector(f,-y.x).multiplyScalar(A),l[j].add(b),l[T].add(b),l[x].add(b),c[j].add(v),c[T].add(v),c[x].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,T=U.length;j<T;++j){const x=U[j],A=x.start,X=x.count;for(let G=A,$=A+X;G<$;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const P=new Y,w=new Y,I=new Y,O=new Y;function N(j){I.fromBufferAttribute(r,j),O.copy(I);const T=l[j];P.copy(T),P.sub(I.multiplyScalar(I.dot(T))).normalize(),w.crossVectors(O,T);const A=w.dot(c[j])<0?-1:1;a.setXYZW(j,P.x,P.y,P.z,A)}for(let j=0,T=U.length;j<T;++j){const x=U[j],A=x.start,X=x.count;for(let G=A,$=A+X;G<$;G+=3)N(e.getX(G+0)),N(e.getX(G+1)),N(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new Y,s=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y,d=new Y;if(e)for(let m=0,_=e.count;m<_;m+=3){const y=e.getX(m+0),b=e.getX(m+1),v=e.getX(m+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,v),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),l.add(f),c.add(f),u.add(f),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(l,c){const u=l.array,f=l.itemSize,d=l.normalized,m=new u.constructor(c.length*f);let _=0,y=0;for(let b=0,v=c.length;b<v;b++){l.isInterleavedBufferAttribute?_=c[b]*l.data.stride+l.offset:_=c[b]*f;for(let g=0;g<f;g++)m[y++]=u[_++]}return new xn(m,f,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let f=0,d=u.length;f<d;f++){const m=u[f],_=e(m,n);c.push(_)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let d=0,m=u.length;d<m;d++){const _=u[d];f.push(_.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let m=0,_=d.length;m<_;m++)f.push(d[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new Rt,pi=new zc,is=new Fs,Nl=new Y,rs=new Y,ss=new Y,os=new Y,go=new Y,as=new Y,Fl=new Y,ls=new Y;class Sn extends rn{constructor(e=new fn,t=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){as.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=l[c],d=s[c];f!==0&&(go.fromBufferAttribute(d,e),a?as.addScaledVector(go,f):as.addScaledVector(go.sub(t),f))}t.add(as)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(is.containsPoint(pi.origin)===!1&&(pi.intersectSphere(is,Nl)===null||pi.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Il.copy(s).invert(),pi.copy(e.ray).applyMatrix4(Il),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,m=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(a))for(let y=0,b=m.length;y<b;y++){const v=m[y],g=a[v.materialIndex],U=Math.max(v.start,_.start),P=Math.min(l.count,Math.min(v.start+v.count,_.start+_.count));for(let w=U,I=P;w<I;w+=3){const O=l.getX(w),N=l.getX(w+1),j=l.getX(w+2);r=cs(this,g,e,n,u,f,d,O,N,j),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const y=Math.max(0,_.start),b=Math.min(l.count,_.start+_.count);for(let v=y,g=b;v<g;v+=3){const U=l.getX(v),P=l.getX(v+1),w=l.getX(v+2);r=cs(this,a,e,n,u,f,d,U,P,w),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,b=m.length;y<b;y++){const v=m[y],g=a[v.materialIndex],U=Math.max(v.start,_.start),P=Math.min(c.count,Math.min(v.start+v.count,_.start+_.count));for(let w=U,I=P;w<I;w+=3){const O=w,N=w+1,j=w+2;r=cs(this,g,e,n,u,f,d,O,N,j),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const y=Math.max(0,_.start),b=Math.min(c.count,_.start+_.count);for(let v=y,g=b;v<g;v+=3){const U=v,P=v+1,w=v+2;r=cs(this,a,e,n,u,f,d,U,P,w),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function nf(i,e,t,n,r,s,a,l){let c;if(e.side===tn?c=n.intersectTriangle(a,s,r,!0,l):c=n.intersectTriangle(r,s,a,e.side===oi,l),c===null)return null;ls.copy(l),ls.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(ls);return u<t.near||u>t.far?null:{distance:u,point:ls.clone(),object:i}}function cs(i,e,t,n,r,s,a,l,c,u){i.getVertexPosition(l,rs),i.getVertexPosition(c,ss),i.getVertexPosition(u,os);const f=nf(i,e,t,n,rs,ss,os,Fl);if(f){const d=new Y;An.getBarycoord(Fl,rs,ss,os,d),r&&(f.uv=An.getInterpolatedAttribute(r,l,c,u,d,new we)),s&&(f.uv1=An.getInterpolatedAttribute(s,l,c,u,d,new we)),a&&(f.normal=An.getInterpolatedAttribute(a,l,c,u,d,new Y),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:l,b:c,c:u,normal:new Y,materialIndex:0};An.getNormal(rs,ss,os,m.normal),f.face=m,f.barycoord=d}return f}class Br extends fn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],d=[];let m=0,_=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,r,a,2),y("x","z","y",1,-1,e,n,-t,r,a,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(d,2));function y(b,v,g,U,P,w,I,O,N,j,T){const x=w/N,A=I/j,X=w/2,G=I/2,$=O/2,Q=N+1,B=j+1;let H=0,ee=0;const ue=new Y;for(let he=0;he<B;he++){const Ee=he*A-G;for(let Ge=0;Ge<Q;Ge++){const He=Ge*x-X;ue[b]=He*U,ue[v]=Ee*P,ue[g]=$,u.push(ue.x,ue.y,ue.z),ue[b]=0,ue[v]=0,ue[g]=O>0?1:-1,f.push(ue.x,ue.y,ue.z),d.push(Ge/N),d.push(1-he/j),H+=1}}for(let he=0;he<j;he++)for(let Ee=0;Ee<N;Ee++){const Ge=m+Ee+Q*he,He=m+Ee+Q*(he+1),pt=m+(Ee+1)+Q*(he+1),ct=m+(Ee+1)+Q*he;c.push(Ge,He,ct),c.push(He,pt,ct),ee+=6}l.addGroup(_,ee,T),_+=ee,m+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=$i(i[t]);for(const r in n)e[r]=n[r]}return e}function rf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Ls={clone:$i,merge:Qt};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=rf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xc extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new Y,Ol=new we,Bl=new we;class _n extends Xc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Ol,Bl),t.subVectors(Bl,Ol)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Hi=1;class af extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Gi,Hi,e,t);r.layers=this.layers,this.add(r);const s=new _n(Gi,Hi,e,t);s.layers=this.layers,this.add(s);const a=new _n(Gi,Hi,e,t);a.layers=this.layers,this.add(a);const l=new _n(Gi,Hi,e,t);l.layers=this.layers,this.add(l);const c=new _n(Gi,Hi,e,t);c.layers=this.layers,this.add(c);const u=new _n(Gi,Hi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,c]=t;for(const u of t)this.remove(u);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,f]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(d,m,_),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Yc extends Zt{constructor(e=[],t=Ei,n,r,s,a,l,c,u,f){super(e,t,n,r,s,a,l,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qc extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Br(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:In});s.uniforms.tEquirect.value=t;const a=new Sn(r,s),l=t.minFilter;return t.minFilter===Mi&&(t.minFilter=jt),new af(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class us extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lf={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const b of e.hand.values()){const v=t.getJointPose(b,n),g=this._getHandJoint(u,b);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],m=f.position.distanceTo(d.position),_=.02,y=.005;u.inputState.pinching&&m>_+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=_-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class cf extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class uf extends Zt{constructor(e=null,t=1,n=1,r,s,a,l,c,u=kt,f=kt,d,m){super(null,a,l,c,u,f,r,s,d,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vo=new Y,hf=new Y,ff=new $e;class vi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vo.subVectors(n,t).cross(hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ff.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Fs,df=new we(.5,.5),hs=new Y;class jc{constructor(e=new vi,t=new vi,n=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],f=s[4],d=s[5],m=s[6],_=s[7],y=s[8],b=s[9],v=s[10],g=s[11],U=s[12],P=s[13],w=s[14],I=s[15];if(r[0].setComponents(u-a,_-f,g-y,I-U).normalize(),r[1].setComponents(u+a,_+f,g+y,I+U).normalize(),r[2].setComponents(u+l,_+d,g+b,I+P).normalize(),r[3].setComponents(u-l,_-d,g-b,I-P).normalize(),n)r[4].setComponents(c,m,v,w).normalize(),r[5].setComponents(u-c,_-m,g-v,I-w).normalize();else if(r[4].setComponents(u-c,_-m,g-v,I-w).normalize(),t===Un)r[5].setComponents(u+c,_+m,g+v,I+w).normalize();else if(t===Ds)r[5].setComponents(c,m,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=df.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(hs.x=r.normal.x>0?e.max.x:e.min.x,hs.y=r.normal.y>0?e.max.y:e.min.y,hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pf extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new Rt,ya=new zc,fs=new Fs,ds=new Y;class mf extends rn{constructor(e=new fn,t=new pf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),fs.radius+=s,e.ray.intersectsSphere(fs)===!1)return;zl.copy(r).invert(),ya.copy(e.ray).applyMatrix4(zl);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=m,b=_;y<b;y++){const v=u.getX(y);ds.fromBufferAttribute(d,v),Vl(ds,v,c,r,e,t,this)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=m,b=_;y<b;y++)ds.fromBufferAttribute(d,y),Vl(ds,y,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Vl(i,e,t,n,r,s,a){const l=ya.distanceSqToPoint(i);if(l<t){const c=new Y;ya.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Dr extends Zt{constructor(e,t,n=Fn,r,s,a,l=kt,c=kt,u,f=jn,d=1){if(f!==jn&&f!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:d};super(m,r,s,a,l,c,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gf extends Dr{constructor(e,t=Fn,n=Ei,r,s,a=kt,l=kt,c,u=jn){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,r,s,a,l,c,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zc extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let l=0,c=s-1,u;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),u=n[r]-a,u<0)l=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const f=n[r],m=n[r+1]-f,_=(a-f)/m;return(r+_)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),l=this.getPoint(s),c=t||(a.isVector2?new we:new Y);return c.copy(l).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new Y,r=[],s=[],a=[],l=new Y,c=new Rt;for(let _=0;_<=e;_++){const y=_/e;r[_]=this.getTangentAt(y,new Y)}s[0]=new Y,a[0]=new Y;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),m=Math.abs(r[0].z);f<=u&&(u=f,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),m<=u&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),a[0].crossVectors(r[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),a[_]=a[_-1].clone(),l.crossVectors(r[_-1],r[_]),l.length()>Number.EPSILON){l.normalize();const y=Math.acos(it(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(c.makeRotationAxis(l,y))}a[_].crossVectors(r[_],s[_])}if(t===!0){let _=Math.acos(it(s[0].dot(s[e]),-1,1));_/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(_=-_);for(let y=1;y<=e;y++)s[y].applyMatrix4(c.makeRotationAxis(r[y],_*y)),a[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class za extends Bn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new we){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const l=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=c-this.aX,_=u-this.aY;c=m*f-_*d+this.aX,u=m*d+_*f+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _f extends za{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Va(){let i=0,e=0,t=0,n=0;function r(s,a,l,c){i=s,e=l,t=-3*s+3*a-2*l-c,n=2*s-2*a+l+c}return{initCatmullRom:function(s,a,l,c,u){r(a,l,u*(l-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,l,c,u,f,d){let m=(a-s)/u-(l-s)/(u+f)+(l-a)/f,_=(l-a)/f-(c-a)/(f+d)+(c-l)/d;m*=f,_*=f,r(a,l,m,_)},calc:function(s){const a=s*s,l=a*s;return i+e*s+t*a+n*l}}}const ps=new Y,xo=new Va,So=new Va,Mo=new Va;class vf extends Bn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Y){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:c===0&&l===s-1&&(l=s-2,c=1);let u,f;this.closed||l>0?u=r[(l-1)%s]:(ps.subVectors(r[0],r[1]).add(r[0]),u=ps);const d=r[l%s],m=r[(l+1)%s];if(this.closed||l+2<s?f=r[(l+2)%s]:(ps.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=ps),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let y=Math.pow(u.distanceToSquared(d),_),b=Math.pow(d.distanceToSquared(m),_),v=Math.pow(m.distanceToSquared(f),_);b<1e-4&&(b=1),y<1e-4&&(y=b),v<1e-4&&(v=b),xo.initNonuniformCatmullRom(u.x,d.x,m.x,f.x,y,b,v),So.initNonuniformCatmullRom(u.y,d.y,m.y,f.y,y,b,v),Mo.initNonuniformCatmullRom(u.z,d.z,m.z,f.z,y,b,v)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(u.x,d.x,m.x,f.x,this.tension),So.initCatmullRom(u.y,d.y,m.y,f.y,this.tension),Mo.initCatmullRom(u.z,d.z,m.z,f.z,this.tension));return n.set(xo.calc(c),So.calc(c),Mo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Y().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gl(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,l=i*i,c=i*l;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*l+s*i+t}function xf(i,e){const t=1-i;return t*t*e}function Sf(i,e){return 2*(1-i)*i*e}function Mf(i,e){return i*i*e}function yr(i,e,t,n){return xf(i,e)+Sf(i,t)+Mf(i,n)}function yf(i,e){const t=1-i;return t*t*t*e}function Ef(i,e){const t=1-i;return 3*t*t*i*e}function Tf(i,e){return 3*(1-i)*i*i*e}function bf(i,e){return i*i*i*e}function Er(i,e,t,n,r){return yf(i,e)+Ef(i,t)+Tf(i,n)+bf(i,r)}class Kc extends Bn{constructor(e=new we,t=new we,n=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new we){const n=t,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(Er(e,r.x,s.x,a.x,l.x),Er(e,r.y,s.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Af extends Bn{constructor(e=new Y,t=new Y,n=new Y,r=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Y){const n=t,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(Er(e,r.x,s.x,a.x,l.x),Er(e,r.y,s.y,a.y,l.y),Er(e,r.z,s.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jc extends Bn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wf extends Bn{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $c extends Bn{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(yr(e,r.x,s.x,a.x),yr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cf extends Bn{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(yr(e,r.x,s.x,a.x),yr(e,r.y,s.y,a.y),yr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qc extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),l=s-a,c=r[a===0?a:a-1],u=r[a],f=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Gl(l,c.x,u.x,f.x,d.x),Gl(l,c.y,u.y,f.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new we().fromArray(r))}return this}}var Hl=Object.freeze({__proto__:null,ArcCurve:_f,CatmullRomCurve3:vf,CubicBezierCurve:Kc,CubicBezierCurve3:Af,EllipseCurve:za,LineCurve:Jc,LineCurve3:wf,QuadraticBezierCurve:$c,QuadraticBezierCurve3:Cf,SplineCurve:Qc});class Rf extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,l=this.curves[s],c=l.getLength(),u=c===0?0:1-a/c;return l.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],l=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(l);for(let u=0;u<c.length;u++){const f=c[u];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Hl[r.type]().fromJSON(r))}return this}}class kl extends Rf{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Jc(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new $c(this.currentPoint.clone(),new we(e,t),new we(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const l=new Kc(this.currentPoint.clone(),new we(e,t),new we(n,r),new we(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,l,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,n,r,s,a,l,c),this}absellipse(e,t,n,r,s,a,l,c){const u=new za(e,t,n,r,s,a,l,c);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class eu extends kl{constructor(e){super(e),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new kl().fromJSON(r))}return this}}function Pf(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=tu(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let l,c,u;if(n&&(s=Nf(i,e,s,t)),i.length>80*t){l=i[0],c=i[1];let f=l,d=c;for(let m=t;m<r;m+=t){const _=i[m],y=i[m+1];_<l&&(l=_),y<c&&(c=y),_>f&&(f=_),y>d&&(d=y)}u=Math.max(f-l,d-c),u=u!==0?32767/u:0}return Lr(s,a,t,l,c,u,0),a}function tu(i,e,t,n,r){let s;if(r===Yf(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Wl(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Wl(a/n|0,i[a],i[a+1],s);return s&&Qi(s,s.next)&&(Ir(s),s=s.next),s}function Ti(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Qi(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Vf(i,n,r,s);let l=i;for(;i.prev!==i.next;){const c=i.prev,u=i.next;if(s?Lf(i,n,r,s):Df(i)){e.push(c.i,i.i,u.i),Ir(i),i=u.next,l=u.next;continue}if(i=u,i===l){a?a===1?(i=Uf(Ti(i),e),Lr(i,e,t,n,r,s,2)):a===2&&If(i,e,t,n,r,s):Lr(Ti(i),e,t,n,r,s,1);break}}}function Df(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,l=e.y,c=t.y,u=n.y,f=Math.min(r,s,a),d=Math.min(l,c,u),m=Math.max(r,s,a),_=Math.max(l,c,u);let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=d&&y.y<=_&&vr(r,l,s,c,a,u,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Lf(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Ct(r,s,a)>=0)return!1;const l=r.x,c=s.x,u=a.x,f=r.y,d=s.y,m=a.y,_=Math.min(l,c,u),y=Math.min(f,d,m),b=Math.max(l,c,u),v=Math.max(f,d,m),g=Ea(_,y,e,t,n),U=Ea(b,v,e,t,n);let P=i.prevZ,w=i.nextZ;for(;P&&P.z>=g&&w&&w.z<=U;){if(P.x>=_&&P.x<=b&&P.y>=y&&P.y<=v&&P!==r&&P!==a&&vr(l,f,c,d,u,m,P.x,P.y)&&Ct(P.prev,P,P.next)>=0||(P=P.prevZ,w.x>=_&&w.x<=b&&w.y>=y&&w.y<=v&&w!==r&&w!==a&&vr(l,f,c,d,u,m,w.x,w.y)&&Ct(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;P&&P.z>=g;){if(P.x>=_&&P.x<=b&&P.y>=y&&P.y<=v&&P!==r&&P!==a&&vr(l,f,c,d,u,m,P.x,P.y)&&Ct(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;w&&w.z<=U;){if(w.x>=_&&w.x<=b&&w.y>=y&&w.y<=v&&w!==r&&w!==a&&vr(l,f,c,d,u,m,w.x,w.y)&&Ct(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Uf(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Qi(n,r)&&iu(n,t,t.next,r)&&Ur(n,r)&&Ur(r,n)&&(e.push(n.i,t.i,r.i),Ir(t),Ir(t.next),t=i=r),t=t.next}while(t!==i);return Ti(t)}function If(i,e,t,n,r,s){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&kf(a,l)){let c=ru(a,l);a=Ti(a,a.next),c=Ti(c,c.next),Lr(a,e,t,n,r,s,0),Lr(c,e,t,n,r,s,0);return}l=l.next}a=a.next}while(a!==i)}function Nf(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const l=e[s]*n,c=s<a-1?e[s+1]*n:i.length,u=tu(i,l,c,n,!1);u===u.next&&(u.steiner=!0),r.push(Hf(u))}r.sort(Ff);for(let s=0;s<r.length;s++)t=Of(r[s],t);return t}function Ff(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Of(i,e){const t=Bf(i,e);if(!t)return e;const n=ru(t,i);return Ti(n,n.next),Ti(t,t.next)}function Bf(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(Qi(i,t))return t;do{if(Qi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const l=a,c=a.x,u=a.y;let f=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&nu(r<u?n:s,r,c,u,r<u?s:n,r,t.x,t.y)){const d=Math.abs(r-t.y)/(n-t.x);Ur(t,i)&&(d<f||d===f&&(t.x>a.x||t.x===a.x&&zf(a,t)))&&(a=t,f=d)}t=t.next}while(t!==l);return a}function zf(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function Vf(i,e,t,n){let r=i;do r.z===0&&(r.z=Ea(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Gf(r)}function Gf(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,l=0;for(let u=0;u<t&&(l++,a=a.nextZ,!!a);u++);let c=t;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,l--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function Ea(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function nu(i,e,t,n,r,s,a,l){return(r-a)*(e-l)>=(i-a)*(s-l)&&(i-a)*(n-l)>=(t-a)*(e-l)&&(t-a)*(s-l)>=(r-a)*(n-l)}function vr(i,e,t,n,r,s,a,l){return!(i===a&&e===l)&&nu(i,e,t,n,r,s,a,l)}function kf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Wf(i,e)&&(Ur(i,e)&&Ur(e,i)&&Xf(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||Qi(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qi(i,e){return i.x===e.x&&i.y===e.y}function iu(i,e,t,n){const r=gs(Ct(i,e,t)),s=gs(Ct(i,e,n)),a=gs(Ct(t,n,i)),l=gs(Ct(t,n,e));return!!(r!==s&&a!==l||r===0&&ms(i,t,e)||s===0&&ms(i,n,e)||a===0&&ms(t,i,n)||l===0&&ms(t,e,n))}function ms(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function gs(i){return i>0?1:i<0?-1:0}function Wf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&iu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ur(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function Xf(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ru(i,e){const t=Ta(i.i,i.x,i.y),n=Ta(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Wl(i,e,t,n){const r=Ta(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ta(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yf(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class qf{static triangulate(e,t,n=2){return Pf(e,t,n)}}class Tr{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Tr.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Xl(e),Yl(n,e);let a=e.length;t.forEach(Xl);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Yl(n,t[c]);const l=qf.triangulate(n,r);for(let c=0;c<l.length;c+=3)s.push(l.slice(c,c+3));return s}}function Xl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class zr extends fn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(n),c=Math.floor(r),u=l+1,f=c+1,d=e/l,m=t/c,_=[],y=[],b=[],v=[];for(let g=0;g<f;g++){const U=g*m-a;for(let P=0;P<u;P++){const w=P*d-s;y.push(w,-U,0),b.push(0,0,1),v.push(P/l),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let U=0;U<l;U++){const P=U+u*g,w=U+u*(g+1),I=U+1+u*(g+1),O=U+1+u*g;_.push(P,w,O),_.push(w,I,O)}this.setIndex(_),this.setAttribute("position",new sn(y,3)),this.setAttribute("normal",new sn(b,3)),this.setAttribute("uv",new sn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ga extends fn{constructor(e=new eu([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let l=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let f=0;f<e.length;f++)u(e[f]),this.addGroup(l,c,f),l+=c,c=0;this.setIndex(n),this.setAttribute("position",new sn(r,3)),this.setAttribute("normal",new sn(s,3)),this.setAttribute("uv",new sn(a,2));function u(f){const d=r.length/3,m=f.extractPoints(t);let _=m.shape;const y=m.holes;Tr.isClockWise(_)===!1&&(_=_.reverse());for(let v=0,g=y.length;v<g;v++){const U=y[v];Tr.isClockWise(U)===!0&&(y[v]=U.reverse())}const b=Tr.triangulateShape(_,y);for(let v=0,g=y.length;v<g;v++){const U=y[v];_=_.concat(U)}for(let v=0,g=_.length;v<g;v++){const U=_[v];r.push(U.x,U.y,0),s.push(0,0,1),a.push(U.x,U.y)}for(let v=0,g=b.length;v<g;v++){const U=b[v],P=U[0]+d,w=U[1]+d,I=U[2]+d;n.push(P,w,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return jf(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Ga(n,e.curveSegments)}}function jf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Zf extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kf extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $f extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Qf{constructor(e,t,n){const r=this;let s=!1,a=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){l++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,l),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,m=u.length;d<m;d+=2){const _=u[d],y=u[d+1];if(_.global&&(_.lastIndex=0),_.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ed=new Qf;class Ha{constructor(e){this.manager=e!==void 0?e:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki=new WeakMap;class td extends Ha{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=yo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=ki.get(a);d===void 0&&(d=[],ki.set(a,d)),d.push({onLoad:t,onError:r})}return a}const l=Cr("img");function c(){f(),t&&t(this);const d=ki.get(this)||[];for(let m=0;m<d.length;m++){const _=d[m];_.onLoad&&_.onLoad(this)}ki.delete(this),s.manager.itemEnd(e)}function u(d){f(),r&&r(d),yo.remove(`image:${e}`);const m=ki.get(this)||[];for(let _=0;_<m.length;_++){const y=m[_];y.onError&&y.onError(d)}ki.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),yo.add(`image:${e}`,l),s.manager.itemStart(e),l.src=e,l}}class nd extends Ha{constructor(e){super(e)}load(e,t,n,r){const s=new Zt,a=new td(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ka extends Xc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class id extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ql(i,e,t,n){const r=sd(n);switch(t){case Uc:return i*e;case Nc:return i*e/r.components*r.byteLength;case La:return i*e/r.components*r.byteLength;case Ki:return i*e*2/r.components*r.byteLength;case Ua:return i*e*2/r.components*r.byteLength;case Ic:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case Ia:return i*e*4/r.components*r.byteLength;case Ss:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ys:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:case qo:return Math.max(i,16)*Math.max(e,8)/4;case Wo:case Yo:return Math.max(i,8)*Math.max(e,8)/2;case jo:case Zo:case Jo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Qo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ma:case ga:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case va:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sa:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sd(i){switch(i){case vn:case Rc:return{byteLength:1,components:1};case Ar:case Pc:case hn:return{byteLength:2,components:1};case Pa:case Da:return{byteLength:2,components:4};case Fn:case Ra:case Ln:return{byteLength:4,components:1};case Dc:case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);function su(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function od(i){const e=new WeakMap;function t(l,c){const u=l.array,f=l.usage,d=u.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)_=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,u){const f=c.array,d=c.updateRanges;if(i.bindBuffer(u,l),d.length===0)i.bufferSubData(u,0,f);else{d.sort((_,y)=>_.start-y.start);let m=0;for(let _=1;_<d.length;_++){const y=d[m],b=d[_];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++m,d[m]=b)}d.length=m+1;for(let _=0,y=d.length;_<y;_++){const b=d[_];i.bufferSubData(u,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(i.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ld=`#ifdef USE_ALPHAHASH
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
#endif`,cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
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
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md=`#ifdef USE_BATCHING
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
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sd=`#ifdef USE_IRIDESCENCE
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
#endif`,Md=`#ifdef USE_BUMPMAP
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
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pd=`#define PI 3.141592653589793
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
} // validated`,Dd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
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
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
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
}`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
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
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,sp=`uniform sampler2D dfgLUT;
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
}`,op=`
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xp=`float getShadowMask() {
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
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
}`,dm=`#if DEPTH_PACKING == 3200
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
}`,pm=`#define DISTANCE
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
}`,mm=`#define DISTANCE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,Tm=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,Am=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Cm=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Pm=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:ad,alphahash_pars_fragment:ld,alphamap_fragment:cd,alphamap_pars_fragment:ud,alphatest_fragment:hd,alphatest_pars_fragment:fd,aomap_fragment:dd,aomap_pars_fragment:pd,batching_pars_vertex:md,batching_vertex:gd,begin_vertex:_d,beginnormal_vertex:vd,bsdfs:xd,iridescence_fragment:Sd,bumpmap_pars_fragment:Md,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Td,clipping_planes_vertex:bd,color_fragment:Ad,color_pars_fragment:wd,color_pars_vertex:Cd,color_vertex:Rd,common:Pd,cube_uv_reflection_fragment:Dd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Ud,displacementmap_vertex:Id,emissivemap_fragment:Nd,emissivemap_pars_fragment:Fd,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:zd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Gd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:Qd,envmap_vertex:kd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:Yd,fog_pars_fragment:qd,gradientmap_pars_fragment:jd,lightmap_pars_fragment:Zd,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:Jd,lights_pars_begin:$d,lights_toon_fragment:ep,lights_toon_pars_fragment:tp,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:rp,lights_physical_pars_fragment:sp,lights_fragment_begin:op,lights_fragment_maps:ap,lights_fragment_end:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:fp,map_fragment:dp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:vp,morphinstance_vertex:xp,morphcolor_vertex:Sp,morphnormal_vertex:Mp,morphtarget_pars_vertex:yp,morphtarget_vertex:Ep,normal_fragment_begin:Tp,normal_fragment_maps:bp,normal_pars_fragment:Ap,normal_pars_vertex:wp,normal_vertex:Cp,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Up,opaque_fragment:Ip,packing:Np,premultiplied_alpha_fragment:Fp,project_vertex:Op,dithering_fragment:Bp,dithering_pars_fragment:zp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:kp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:Yp,skinning_pars_vertex:qp,skinning_vertex:jp,skinnormal_vertex:Zp,specularmap_fragment:Kp,specularmap_pars_fragment:Jp,tonemapping_fragment:$p,tonemapping_pars_fragment:Qp,transmission_fragment:em,transmission_pars_fragment:tm,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:rm,worldpos_vertex:sm,background_vert:om,background_frag:am,backgroundCube_vert:lm,backgroundCube_frag:cm,cube_vert:um,cube_frag:hm,depth_vert:fm,depth_frag:dm,distance_vert:pm,distance_frag:mm,equirect_vert:gm,equirect_frag:_m,linedashed_vert:vm,linedashed_frag:xm,meshbasic_vert:Sm,meshbasic_frag:Mm,meshlambert_vert:ym,meshlambert_frag:Em,meshmatcap_vert:Tm,meshmatcap_frag:bm,meshnormal_vert:Am,meshnormal_frag:wm,meshphong_vert:Cm,meshphong_frag:Rm,meshphysical_vert:Pm,meshphysical_frag:Dm,meshtoon_vert:Lm,meshtoon_frag:Um,points_vert:Im,points_frag:Nm,shadow_vert:Fm,shadow_frag:Om,sprite_vert:Bm,sprite_frag:zm},ye={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Pn={basic:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new rt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new rt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Qt([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Qt([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Qt([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Qt([ye.common,ye.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Qt([ye.lights,ye.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Pn.physical={uniforms:Qt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const _s={r:0,b:0,g:0},gi=new On,Vm=new Rt;function Gm(i,e,t,n,r,s,a){const l=new rt(0);let c=s===!0?0:1,u,f,d=null,m=0,_=null;function y(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?t:e).get(w)),w}function b(P){let w=!1;const I=y(P);I===null?g(l,c):I&&I.isColor&&(g(I,1),w=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(P,w){const I=y(w);I&&(I.isCubeTexture||I.mapping===Ns)?(f===void 0&&(f=new Sn(new Br(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:$i(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(O,N,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),gi.copy(w.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),f.material.uniforms.envMap.value=I,f.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(gi)),f.material.toneMapped=lt.getTransfer(I.colorSpace)!==xt,(d!==I||m!==I.version||_!==i.toneMapping)&&(f.material.needsUpdate=!0,d=I,m=I.version,_=i.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null)):I&&I.isTexture&&(u===void 0&&(u=new Sn(new zr(2,2),new Wt({name:"BackgroundMaterial",uniforms:$i(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=I,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.toneMapped=lt.getTransfer(I.colorSpace)!==xt,I.matrixAutoUpdate===!0&&I.updateMatrix(),u.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||m!==I.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=I,m=I.version,_=i.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null))}function g(P,w){P.getRGB(_s,Wc(i)),n.buffers.color.setClear(_s.r,_s.g,_s.b,w,a)}function U(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(P,w=1){l.set(P),c=w,g(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(P){c=P,g(l,c)},render:b,addToRenderList:v,dispose:U}}function Hm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function l(x,A,X,G,$){let Q=!1;const B=d(G,X,A);s!==B&&(s=B,u(s.object)),Q=_(x,G,X,$),Q&&y(x,G,X,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,w(x,A,X,G),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function f(x){return i.deleteVertexArray(x)}function d(x,A,X){const G=X.wireframe===!0;let $=n[x.id];$===void 0&&($={},n[x.id]=$);let Q=$[A.id];Q===void 0&&(Q={},$[A.id]=Q);let B=Q[G];return B===void 0&&(B=m(c()),Q[G]=B),B}function m(x){const A=[],X=[],G=[];for(let $=0;$<t;$++)A[$]=0,X[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:X,attributeDivisors:G,object:x,attributes:{},index:null}}function _(x,A,X,G){const $=s.attributes,Q=A.attributes;let B=0;const H=X.getAttributes();for(const ee in H)if(H[ee].location>=0){const he=$[ee];let Ee=Q[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),he===void 0||he.attribute!==Ee||Ee&&he.data!==Ee.data)return!0;B++}return s.attributesNum!==B||s.index!==G}function y(x,A,X,G){const $={},Q=A.attributes;let B=0;const H=X.getAttributes();for(const ee in H)if(H[ee].location>=0){let he=Q[ee];he===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));const Ee={};Ee.attribute=he,he&&he.data&&(Ee.data=he.data),$[ee]=Ee,B++}s.attributes=$,s.attributesNum=B,s.index=G}function b(){const x=s.newAttributes;for(let A=0,X=x.length;A<X;A++)x[A]=0}function v(x){g(x,0)}function g(x,A){const X=s.newAttributes,G=s.enabledAttributes,$=s.attributeDivisors;X[x]=1,G[x]===0&&(i.enableVertexAttribArray(x),G[x]=1),$[x]!==A&&(i.vertexAttribDivisor(x,A),$[x]=A)}function U(){const x=s.newAttributes,A=s.enabledAttributes;for(let X=0,G=A.length;X<G;X++)A[X]!==x[X]&&(i.disableVertexAttribArray(X),A[X]=0)}function P(x,A,X,G,$,Q,B){B===!0?i.vertexAttribIPointer(x,A,X,$,Q):i.vertexAttribPointer(x,A,X,G,$,Q)}function w(x,A,X,G){b();const $=G.attributes,Q=X.getAttributes(),B=A.defaultAttributeValues;for(const H in Q){const ee=Q[H];if(ee.location>=0){let ue=$[H];if(ue===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ue!==void 0){const he=ue.normalized,Ee=ue.itemSize,Ge=e.get(ue);if(Ge===void 0)continue;const He=Ge.buffer,pt=Ge.type,ct=Ge.bytesPerElement,ie=pt===i.INT||pt===i.UNSIGNED_INT||ue.gpuType===Ra;if(ue.isInterleavedBufferAttribute){const oe=ue.data,Ce=oe.stride,Ze=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)g(ee.location+De,oe.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let De=0;De<ee.locationSize;De++)v(ee.location+De);i.bindBuffer(i.ARRAY_BUFFER,He);for(let De=0;De<ee.locationSize;De++)P(ee.location+De,Ee/ee.locationSize,pt,he,Ce*ct,(Ze+Ee/ee.locationSize*De)*ct,ie)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<ee.locationSize;oe++)g(ee.location+oe,ue.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<ee.locationSize;oe++)v(ee.location+oe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let oe=0;oe<ee.locationSize;oe++)P(ee.location+oe,Ee/ee.locationSize,pt,he,Ee*ct,Ee/ee.locationSize*oe*ct,ie)}}else if(B!==void 0){const he=B[H];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(ee.location,he);break;case 3:i.vertexAttrib3fv(ee.location,he);break;case 4:i.vertexAttrib4fv(ee.location,he);break;default:i.vertexAttrib1fv(ee.location,he)}}}}U()}function I(){j();for(const x in n){const A=n[x];for(const X in A){const G=A[X];for(const $ in G)f(G[$].object),delete G[$];delete A[X]}delete n[x]}}function O(x){if(n[x.id]===void 0)return;const A=n[x.id];for(const X in A){const G=A[X];for(const $ in G)f(G[$].object),delete G[$];delete A[X]}delete n[x.id]}function N(x){for(const A in n){const X=n[A];if(X[x.id]===void 0)continue;const G=X[x.id];for(const $ in G)f(G[$].object),delete G[$];delete X[x.id]}}function j(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:j,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:v,disableUnusedAttributes:U}}function km(i,e,t){let n;function r(u){n=u}function s(u,f){i.drawArrays(n,u,f),t.update(f,n,1)}function a(u,f,d){d!==0&&(i.drawArraysInstanced(n,u,f,d),t.update(f,n,d))}function l(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=f[y];t.update(_,n,1)}function c(u,f,d,m){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<u.length;y++)a(u[y],f[y],m[y]);else{_.multiDrawArraysInstancedWEBGL(n,u,0,f,0,m,0,d);let y=0;for(let b=0;b<d;b++)y+=f[b]*m[b];t.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Wm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(N){return!(N!==wn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(N){const j=N===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==vn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ln&&!j)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(qe("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:w,maxSamples:I,samples:O}}function Xm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new vi,l=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const _=d.length!==0||m||n!==0||r;return r=m,n=d.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){t=f(d,m,0)},this.setState=function(d,m,_){const y=d.clippingPlanes,b=d.clipIntersection,v=d.clipShadows,g=i.get(d);if(!r||y===null||y.length===0||s&&!v)s?f(null):u();else{const U=s?0:n,P=U*4;let w=g.clippingState||null;c.value=w,w=f(y,m,P,_);for(let I=0;I!==P;++I)w[I]=t[I];g.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,m,_,y){const b=d!==null?d.length:0;let v=null;if(b!==0){if(v=c.value,y!==!0||v===null){const g=_+b*4,U=m.matrixWorldInverse;l.getNormalMatrix(U),(v===null||v.length<g)&&(v=new Float32Array(g));for(let P=0,w=_;P!==b;++P,w+=4)a.copy(d[P]).applyMatrix4(U,l),a.normal.toArray(v,w),v[w+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}function Ym(i){let e=new WeakMap;function t(a,l){return l===Vo?a.mapping=Ei:l===Go&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===Vo||l===Go)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new qc(c.height);return u.fromEquirectangularTexture(i,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const si=4,jl=[.125,.215,.35,.446,.526,.582],Si=20,qm=256,mr=new ka,Zl=new rt;let Eo=null,To=0,bo=0,Ao=!1;const jm=new Y;class Kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:l=jm}=s;Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,To,bo),this._renderer.xr.enabled=Ao,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:hn,format:wn,colorSpace:Ji,depthBuffer:!1},r=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zm(s)),this._blurMaterial=Jm(s,e,t),this._ggxMaterial=Km(s,e,t)}return r}_compileMaterial(e){const t=new Sn(new fn,e);this._renderer.compile(t,mr)}_sceneToCubeUV(e,t,n,r,s){const c=new _n(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,_=d.toneMapping;d.getClearColor(Zl),d.toneMapping=Nn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Br,new Os({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,v=b.material;let g=!1;const U=e.background;U?U.isColor&&(v.color.copy(U),e.background=null,g=!0):(v.color.copy(Zl),g=!0);for(let P=0;P<6;P++){const w=P%3;w===0?(c.up.set(0,u[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[P],s.y,s.z)):w===1?(c.up.set(0,0,u[P]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[P],s.z)):(c.up.set(0,u[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[P]));const I=this._cubeSize;Wi(r,w*I,P>2?I:0,I,I),d.setRenderTarget(r),g&&d.render(b,c),d.render(e,c)}d.toneMapping=_,d.autoClear=m,e.background=U}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ei||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;Wi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;const c=a.uniforms,u=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-f*f),m=0+u*1.25,_=d*m,{_lodMax:y}=this,b=this._sizeLods[n],v=3*b*(n>y-si?n-y+si:0),g=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=_,c.mipInt.value=y-t,Wi(s,v,g,3*b,2*b),r.setRenderTarget(s),r.render(l,mr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=y-n,Wi(e,v,g,3*b,2*b),r.setRenderTarget(e),r.render(l,mr)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,_=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Si-1),b=s/y,v=isFinite(s)?1+Math.floor(f*b):Si;v>Si&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Si}`);const g=[];let U=0;for(let N=0;N<Si;++N){const j=N/b,T=Math.exp(-j*j/2);g.push(T),N===0?U+=T:N<v&&(U+=2*T)}for(let N=0;N<g.length;N++)g[N]=g[N]/U;m.envMap.value=e.texture,m.samples.value=v,m.weights.value=g,m.latitudinal.value=a==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:P}=this;m.dTheta.value=y,m.mipInt.value=P-n;const w=this._sizeLods[r],I=3*w*(r>P-si?r-P+si:0),O=4*(this._cubeSize-w);Wi(t,I,O,3*w,2*w),c.setRenderTarget(t),c.render(d,mr)}}function Zm(i){const e=[],t=[],n=[];let r=i;const s=i-si+1+jl.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let c=1/l;a>i-si?c=jl[a-i+si-1]:a===0&&(c=0),t.push(c);const u=1/(l-2),f=-u,d=1+u,m=[f,f,d,f,d,d,f,f,d,d,f,d],_=6,y=6,b=3,v=2,g=1,U=new Float32Array(b*y*_),P=new Float32Array(v*y*_),w=new Float32Array(g*y*_);for(let O=0;O<_;O++){const N=O%3*2/3-1,j=O>2?0:-1,T=[N,j,0,N+2/3,j,0,N+2/3,j+1,0,N,j,0,N+2/3,j+1,0,N,j+1,0];U.set(T,b*y*O),P.set(m,v*y*O);const x=[O,O,O,O,O,O];w.set(x,g*y*O)}const I=new fn;I.setAttribute("position",new xn(U,b)),I.setAttribute("uv",new xn(P,v)),I.setAttribute("faceIndex",new xn(w,g)),n.push(new Sn(I,null)),r>si&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Jl(i,e,t){const n=new nn(i,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Km(i,e,t){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Jm(i,e,t){const n=new Float32Array(Si),r=new Y(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function $l(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ql(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Bs(){return`

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
	`}function $m(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===Vo||c===Go,f=c===Ei||c===Zi;if(u||f){let d=e.get(l);const m=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return t===null&&(t=new Kl(i)),d=u?t.fromEquirectangular(l,d):t.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),d.texture;if(d!==void 0)return d.texture;{const _=l.image;return u&&_&&_.height>0||f&&_&&r(_)?(t===null&&(t=new Kl(i)),d=u?t.fromEquirectangular(l):t.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function r(l){let c=0;const u=6;for(let f=0;f<u;f++)l[f]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Qm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Rr("WebGLRenderer: "+n+" extension not supported."),r}}}function eg(i,e,t,n){const r={},s=new WeakMap;function a(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",a),delete r[m.id];const _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(d,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function c(d){const m=d.attributes;for(const _ in m)e.update(m[_],i.ARRAY_BUFFER)}function u(d){const m=[],_=d.index,y=d.attributes.position;let b=0;if(_!==null){const U=_.array;b=_.version;for(let P=0,w=U.length;P<w;P+=3){const I=U[P+0],O=U[P+1],N=U[P+2];m.push(I,O,O,N,N,I)}}else if(y!==void 0){const U=y.array;b=y.version;for(let P=0,w=U.length/3-1;P<w;P+=3){const I=P+0,O=P+1,N=P+2;m.push(I,O,O,N,N,I)}}else return;const v=new(Oc(m)?kc:Hc)(m,1);v.version=b;const g=s.get(d);g&&e.remove(g),s.set(d,v)}function f(d){const m=s.get(d);if(m){const _=d.index;_!==null&&m.version<_.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:f}}function tg(i,e,t){let n;function r(m){n=m}let s,a;function l(m){s=m.type,a=m.bytesPerElement}function c(m,_){i.drawElements(n,_,s,m*a),t.update(_,n,1)}function u(m,_,y){y!==0&&(i.drawElementsInstanced(n,_,s,m*a,y),t.update(_,n,y))}function f(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,m,0,y);let v=0;for(let g=0;g<y;g++)v+=_[g];t.update(v,n,1)}function d(m,_,y,b){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<m.length;g++)u(m[g]/a,_[g],b[g]);else{v.multiDrawElementsInstancedWEBGL(n,_,0,s,m,0,b,0,y);let g=0;for(let U=0;U<y;U++)g+=_[U]*b[U];t.update(g,n,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function ng(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ig(i,e,t){const n=new WeakMap,r=new Pt;function s(a,l,c){const u=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=f!==void 0?f.length:0;let m=n.get(l);if(m===void 0||m.count!==d){let x=function(){j.dispose(),n.delete(l),l.removeEventListener("dispose",x)};var _=x;m!==void 0&&m.texture.dispose();const y=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],U=l.morphAttributes.normal||[],P=l.morphAttributes.color||[];let w=0;y===!0&&(w=1),b===!0&&(w=2),v===!0&&(w=3);let I=l.attributes.position.count*w,O=1;I>e.maxTextureSize&&(O=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const N=new Float32Array(I*O*4*d),j=new Bc(N,I,O,d);j.type=Ln,j.needsUpdate=!0;const T=w*4;for(let A=0;A<d;A++){const X=g[A],G=U[A],$=P[A],Q=I*O*4*A;for(let B=0;B<X.count;B++){const H=B*T;y===!0&&(r.fromBufferAttribute(X,B),N[Q+H+0]=r.x,N[Q+H+1]=r.y,N[Q+H+2]=r.z,N[Q+H+3]=0),b===!0&&(r.fromBufferAttribute(G,B),N[Q+H+4]=r.x,N[Q+H+5]=r.y,N[Q+H+6]=r.z,N[Q+H+7]=0),v===!0&&(r.fromBufferAttribute($,B),N[Q+H+8]=r.x,N[Q+H+9]=r.y,N[Q+H+10]=r.z,N[Q+H+11]=$.itemSize===4?r.w:1)}}m={count:d,texture:j,size:new we(I,O)},n.set(l,m),l.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let y=0;for(let v=0;v<u.length;v++)y+=u[v];const b=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function rg(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const sg={[Mc]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[Tc]:"ACES_FILMIC_TONE_MAPPING",[Ac]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function og(i,e,t,n,r){const s=new nn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new nn(e,t,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new fn;l.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new sn([0,2,0,0,2,0],2));const c=new Zf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Sn(l,c),f=new ka(-1,1,1,-1,0,1);let d=null,m=null,_=!1,y,b=null,v=[],g=!1;this.setSize=function(U,P){s.setSize(U,P),a.setSize(U,P);for(let w=0;w<v.length;w++){const I=v[w];I.setSize&&I.setSize(U,P)}},this.setEffects=function(U){v=U,g=v.length>0&&v[0].isRenderPass===!0;const P=s.width,w=s.height;for(let I=0;I<v.length;I++){const O=v[I];O.setSize&&O.setSize(P,w)}},this.begin=function(U,P){if(_||U.toneMapping===Nn&&v.length===0)return!1;if(b=P,P!==null){const w=P.width,I=P.height;(s.width!==w||s.height!==I)&&this.setSize(w,I)}return g===!1&&U.setRenderTarget(s),y=U.toneMapping,U.toneMapping=Nn,!0},this.hasRenderPass=function(){return g},this.end=function(U,P){U.toneMapping=y,_=!0;let w=s,I=a;for(let O=0;O<v.length;O++){const N=v[O];if(N.enabled!==!1&&(N.render(U,I,w,P),N.needsSwap!==!1)){const j=w;w=I,I=j}}if(d!==U.outputColorSpace||m!==U.toneMapping){d=U.outputColorSpace,m=U.toneMapping,c.defines={},lt.getTransfer(d)===xt&&(c.defines.SRGB_TRANSFER="");const O=sg[m];O&&(c.defines[O]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,U.setRenderTarget(b),U.render(u,f),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),a.dispose(),l.dispose(),c.dispose()}}const ou=new Zt,ba=new Dr(1,1),au=new Bc,lu=new Xh,cu=new Yc,ec=[],tc=[],nc=new Float32Array(16),ic=new Float32Array(9),rc=new Float32Array(4);function ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ec[r];if(s===void 0&&(s=new Float32Array(r),ec[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zs(i,e){let t=tc[e];t===void 0&&(t=new Int32Array(e),tc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),Nt(t,n)}}function fg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),Nt(t,n)}}function dg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),Nt(t,n)}}function pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function yg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ba.compareFunction=t.isReversedDepthBuffer()?Fa:Na,s=ba):s=ou,t.setTexture2D(e||s,r)}function Eg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lu,r)}function Tg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cu,r)}function bg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||au,r)}function Ag(i){switch(i){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return ug;case 35674:return hg;case 35675:return fg;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return xg;case 36295:return Sg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return bg}}function wg(i,e){i.uniform1fv(this.addr,e)}function Cg(i,e){const t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function Rg(i,e){const t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Pg(i,e){const t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Dg(i,e){const t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lg(i,e){const t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ug(i,e){const t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ig(i,e){i.uniform1iv(this.addr,e)}function Ng(i,e){i.uniform2iv(this.addr,e)}function Fg(i,e){i.uniform3iv(this.addr,e)}function Og(i,e){i.uniform4iv(this.addr,e)}function Bg(i,e){i.uniform1uiv(this.addr,e)}function zg(i,e){i.uniform2uiv(this.addr,e)}function Vg(i,e){i.uniform3uiv(this.addr,e)}function Gg(i,e){i.uniform4uiv(this.addr,e)}function Hg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ba:a=ou;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function kg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lu,s[a])}function Wg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cu,s[a])}function Xg(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||au,s[a])}function Yg(i){switch(i){case 5126:return wg;case 35664:return Cg;case 35665:return Rg;case 35666:return Pg;case 35674:return Dg;case 35675:return Lg;case 35676:return Ug;case 5124:case 35670:return Ig;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}class qg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ag(t.type)}}class jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yg(t.type)}}class Zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function sc(i,e){i.seq.push(e),i.map[e.id]=e}function Kg(i,e,t){const n=i.name,r=n.length;for(wo.lastIndex=0;;){const s=wo.exec(n),a=wo.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){sc(t,u===void 0?new qg(l,i,e):new jg(l,i,e));break}else{let d=t.map[l];d===void 0&&(d=new Zg(l),sc(t,d)),t=d}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Kg(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function oc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Jg=37297;let $g=0;function Qg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const ac=new $e;function e_(i){lt._getMatrix(ac,lt.workingColorSpace,i);const e=`mat3( ${ac.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Qg(i.getShaderSource(e),l)}else return s}function t_(i,e){const t=e_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const n_={[Mc]:"Linear",[yc]:"Reinhard",[Ec]:"Cineon",[Tc]:"ACESFilmic",[Ac]:"AgX",[wc]:"Neutral",[bc]:"Custom"};function i_(i,e){const t=n_[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vs=new Y;function r_(){lt.getLuminanceCoefficients(vs);const i=vs.x.toFixed(4),e=vs.y.toFixed(4),t=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function o_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function a_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function xr(i){return i!==""}function cc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(l_,u_)}const c_=new Map;function u_(i,e){let t=et[e];if(t===void 0){const n=c_.get(e);if(n!==void 0)t=et[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Aa(t)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(h_,f_)}function f_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fc(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const d_={[xs]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function p_(i){return d_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m_={[Ei]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE_UV"};function g_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":m_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const __={[Zi]:"ENVMAP_MODE_REFRACTION"};function v_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":__[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x_={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[hh]:"ENVMAP_BLENDING_MIX",[fh]:"ENVMAP_BLENDING_ADD"};function S_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x_[i.combine]||"ENVMAP_BLENDING_NONE"}function M_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function y_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=p_(t),u=g_(t),f=v_(t),d=S_(t),m=M_(t),_=s_(t),y=o_(s),b=r.createProgram();let v,g,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xr).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(xr).join(`
`),g.length>0&&(g+=`
`)):(v=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),g=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?et.tonemapping_pars_fragment:"",t.toneMapping!==Nn?i_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,t_("linearToOutputTexel",t.outputColorSpace),r_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=Aa(a),a=cc(a,t),a=uc(a,t),l=Aa(l),l=cc(l,t),l=uc(l,t),a=hc(a),l=hc(l),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,v=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=U+v+a,w=U+g+l,I=oc(r,r.VERTEX_SHADER,P),O=oc(r,r.FRAGMENT_SHADER,w);r.attachShader(b,I),r.attachShader(b,O),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function N(A){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(b)||"",G=r.getShaderInfoLog(I)||"",$=r.getShaderInfoLog(O)||"",Q=X.trim(),B=G.trim(),H=$.trim();let ee=!0,ue=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,I,O);else{const he=lc(r,I,"vertex"),Ee=lc(r,O,"fragment");ft("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+Q+`
`+he+`
`+Ee)}else Q!==""?qe("WebGLProgram: Program Info Log:",Q):(B===""||H==="")&&(ue=!1);ue&&(A.diagnostics={runnable:ee,programLog:Q,vertexShader:{log:B,prefix:v},fragmentShader:{log:H,prefix:g}})}r.deleteShader(I),r.deleteShader(O),j=new Ts(r,b),T=a_(r,b)}let j;this.getUniforms=function(){return j===void 0&&N(this),j};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(b,Jg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$g++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=O,this}let E_=0;class T_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new b_(e),t.set(e,n)),n}}class b_{constructor(e){this.id=E_++,this.code=e,this.usedTimes=0}}function A_(i,e,t,n,r,s,a){const l=new Vc,c=new T_,u=new Set,f=[],d=new Map,m=r.logarithmicDepthBuffer;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return u.add(T),T===0?"uv":`uv${T}`}function v(T,x,A,X,G){const $=X.fog,Q=G.geometry,B=T.isMeshStandardMaterial?X.environment:null,H=(T.isMeshStandardMaterial?t:e).get(T.envMap||B),ee=H&&H.mapping===Ns?H.image.height:null,ue=y[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&qe("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const he=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ee=he!==void 0?he.length:0;let Ge=0;Q.morphAttributes.position!==void 0&&(Ge=1),Q.morphAttributes.normal!==void 0&&(Ge=2),Q.morphAttributes.color!==void 0&&(Ge=3);let He,pt,ct,ie;if(ue){const ot=Pn[ue];He=ot.vertexShader,pt=ot.fragmentShader}else He=T.vertexShader,pt=T.fragmentShader,c.update(T),ct=c.getVertexShaderID(T),ie=c.getFragmentShaderID(T);const oe=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ze=G.isInstancedMesh===!0,De=G.isBatchedMesh===!0,nt=!!T.map,Dt=!!T.matcap,ze=!!H,je=!!T.aoMap,mt=!!T.lightMap,Je=!!T.bumpMap,At=!!T.normalMap,F=!!T.displacementMap,wt=!!T.emissiveMap,at=!!T.metalnessMap,_t=!!T.roughnessMap,Le=T.anisotropy>0,R=T.clearcoat>0,S=T.dispersion>0,k=T.iridescence>0,ne=T.sheen>0,se=T.transmission>0,te=Le&&!!T.anisotropyMap,Ie=R&&!!T.clearcoatMap,_e=R&&!!T.clearcoatNormalMap,Ue=R&&!!T.clearcoatRoughnessMap,ke=k&&!!T.iridescenceMap,ae=k&&!!T.iridescenceThicknessMap,pe=ne&&!!T.sheenColorMap,Re=ne&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,me=!!T.specularColorMap,Ke=!!T.specularIntensityMap,z=se&&!!T.transmissionMap,xe=se&&!!T.thicknessMap,fe=!!T.gradientMap,be=!!T.alphaMap,le=T.alphaTest>0,re=!!T.alphaHash,de=!!T.extensions;let We=Nn;T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(We=i.toneMapping);const vt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:pt,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:De,batchingColor:De&&G._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&G.instanceColor!==null,instancingMorph:Ze&&G.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ji,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:Dt,envMap:ze,envMapMode:ze&&H.mapping,envMapCubeUVHeight:ee,aoMap:je,lightMap:mt,bumpMap:Je,normalMap:At,displacementMap:F,emissiveMap:wt,normalMapObjectSpace:At&&T.normalMapType===mh,normalMapTangentSpace:At&&T.normalMapType===Fc,metalnessMap:at,roughnessMap:_t,anisotropy:Le,anisotropyMap:te,clearcoat:R,clearcoatMap:Ie,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ue,dispersion:S,iridescence:k,iridescenceMap:ke,iridescenceThicknessMap:ae,sheen:ne,sheenColorMap:pe,sheenRoughnessMap:Re,specularMap:Ne,specularColorMap:me,specularIntensityMap:Ke,transmission:se,transmissionMap:z,thicknessMap:xe,gradientMap:fe,opaque:T.transparent===!1&&T.blending===Yi&&T.alphaToCoverage===!1,alphaMap:be,alphaTest:le,alphaHash:re,combine:T.combine,mapUv:nt&&b(T.map.channel),aoMapUv:je&&b(T.aoMap.channel),lightMapUv:mt&&b(T.lightMap.channel),bumpMapUv:Je&&b(T.bumpMap.channel),normalMapUv:At&&b(T.normalMap.channel),displacementMapUv:F&&b(T.displacementMap.channel),emissiveMapUv:wt&&b(T.emissiveMap.channel),metalnessMapUv:at&&b(T.metalnessMap.channel),roughnessMapUv:_t&&b(T.roughnessMap.channel),anisotropyMapUv:te&&b(T.anisotropyMap.channel),clearcoatMapUv:Ie&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:_e&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&b(T.sheenRoughnessMap.channel),specularMapUv:Ne&&b(T.specularMap.channel),specularColorMapUv:me&&b(T.specularColorMap.channel),specularIntensityMapUv:Ke&&b(T.specularIntensityMap.channel),transmissionMapUv:z&&b(T.transmissionMap.channel),thicknessMapUv:xe&&b(T.thicknessMap.channel),alphaMapUv:be&&b(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(At||Le),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&(nt||be),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ce,skinning:G.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&lt.getTransfer(T.map.colorSpace)===xt,decodeVideoTextureEmissive:wt&&T.emissiveMap.isVideoTexture===!0&&lt.getTransfer(T.emissiveMap.colorSpace)===xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Dn,flipSided:T.side===tn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:de&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&T.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return vt.vertexUv1s=u.has(1),vt.vertexUv2s=u.has(2),vt.vertexUv3s=u.has(3),u.clear(),vt}function g(T){const x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(const A in T.defines)x.push(A),x.push(T.defines[A]);return T.isRawShaderMaterial===!1&&(U(x,T),P(x,T),x.push(i.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function U(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function P(T,x){l.disableAll(),x.instancing&&l.enable(0),x.instancingColor&&l.enable(1),x.instancingMorph&&l.enable(2),x.matcap&&l.enable(3),x.envMap&&l.enable(4),x.normalMapObjectSpace&&l.enable(5),x.normalMapTangentSpace&&l.enable(6),x.clearcoat&&l.enable(7),x.iridescence&&l.enable(8),x.alphaTest&&l.enable(9),x.vertexColors&&l.enable(10),x.vertexAlphas&&l.enable(11),x.vertexUv1s&&l.enable(12),x.vertexUv2s&&l.enable(13),x.vertexUv3s&&l.enable(14),x.vertexTangents&&l.enable(15),x.anisotropy&&l.enable(16),x.alphaHash&&l.enable(17),x.batching&&l.enable(18),x.dispersion&&l.enable(19),x.batchingColor&&l.enable(20),x.gradientMap&&l.enable(21),T.push(l.mask),l.disableAll(),x.fog&&l.enable(0),x.useFog&&l.enable(1),x.flatShading&&l.enable(2),x.logarithmicDepthBuffer&&l.enable(3),x.reversedDepthBuffer&&l.enable(4),x.skinning&&l.enable(5),x.morphTargets&&l.enable(6),x.morphNormals&&l.enable(7),x.morphColors&&l.enable(8),x.premultipliedAlpha&&l.enable(9),x.shadowMapEnabled&&l.enable(10),x.doubleSided&&l.enable(11),x.flipSided&&l.enable(12),x.useDepthPacking&&l.enable(13),x.dithering&&l.enable(14),x.transmission&&l.enable(15),x.sheen&&l.enable(16),x.opaque&&l.enable(17),x.pointsUvs&&l.enable(18),x.decodeVideoTexture&&l.enable(19),x.decodeVideoTextureEmissive&&l.enable(20),x.alphaToCoverage&&l.enable(21),T.push(l.mask)}function w(T){const x=y[T.type];let A;if(x){const X=Pn[x];A=Ls.clone(X.uniforms)}else A=T.uniforms;return A}function I(T,x){let A=d.get(x);return A!==void 0?++A.usedTimes:(A=new y_(i,x,T,s),f.push(A),d.set(x,A)),A}function O(T){if(--T.usedTimes===0){const x=f.indexOf(T);f[x]=f[f.length-1],f.pop(),d.delete(T.cacheKey),T.destroy()}}function N(T){c.remove(T)}function j(){c.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:w,acquireProgram:I,releaseProgram:O,releaseShaderCache:N,programs:f,dispose:j}}function w_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function r(a,l,c){i.get(a)[l]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function C_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,m,_,y,b,v){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:_,groupOrder:y,renderOrder:d.renderOrder,z:b,group:v},i[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=_,g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=b,g.group=v),e++,g}function l(d,m,_,y,b,v){const g=a(d,m,_,y,b,v);_.transmission>0?n.push(g):_.transparent===!0?r.push(g):t.push(g)}function c(d,m,_,y,b,v){const g=a(d,m,_,y,b,v);_.transmission>0?n.unshift(g):_.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,m){t.length>1&&t.sort(d||C_),n.length>1&&n.sort(m||dc),r.length>1&&r.sort(m||dc)}function f(){for(let d=e,m=i.length;d<m;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function R_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new pc,i.set(n,[a])):r>=s.length?(a=new pc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function P_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new rt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function D_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let L_=0;function U_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function I_(i){const e=new P_,t=D_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new Y);const r=new Y,s=new Rt,a=new Rt;function l(u){let f=0,d=0,m=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let _=0,y=0,b=0,v=0,g=0,U=0,P=0,w=0,I=0,O=0,N=0;u.sort(U_);for(let T=0,x=u.length;T<x;T++){const A=u[T],X=A.color,G=A.intensity,$=A.distance;let Q=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ki?Q=A.shadow.map.texture:Q=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=X.r*G,d+=X.g*G,m+=X.b*G;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],G);N++}else if(A.isDirectionalLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const H=A.shadow,ee=t.get(A);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,n.directionalShadow[_]=ee,n.directionalShadowMap[_]=Q,n.directionalShadowMatrix[_]=A.shadow.matrix,U++}n.directional[_]=B,_++}else if(A.isSpotLight){const B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(X).multiplyScalar(G),B.distance=$,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[b]=B;const H=A.shadow;if(A.map&&(n.spotLightMap[I]=A.map,I++,H.updateMatrices(A),A.castShadow&&O++),n.spotLightMatrix[b]=H.matrix,A.castShadow){const ee=t.get(A);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,n.spotShadow[b]=ee,n.spotShadowMap[b]=Q,w++}b++}else if(A.isRectAreaLight){const B=e.get(A);B.color.copy(X).multiplyScalar(G),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[v]=B,v++}else if(A.isPointLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const H=A.shadow,ee=t.get(A);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,n.pointShadow[y]=ee,n.pointShadowMap[y]=Q,n.pointShadowMatrix[y]=A.shadow.matrix,P++}n.point[y]=B,y++}else if(A.isHemisphereLight){const B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(G),B.groundColor.copy(A.groundColor).multiplyScalar(G),n.hemi[g]=B,g++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=m;const j=n.hash;(j.directionalLength!==_||j.pointLength!==y||j.spotLength!==b||j.rectAreaLength!==v||j.hemiLength!==g||j.numDirectionalShadows!==U||j.numPointShadows!==P||j.numSpotShadows!==w||j.numSpotMaps!==I||j.numLightProbes!==N)&&(n.directional.length=_,n.spot.length=b,n.rectArea.length=v,n.point.length=y,n.hemi.length=g,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=w+I-O,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=N,j.directionalLength=_,j.pointLength=y,j.spotLength=b,j.rectAreaLength=v,j.hemiLength=g,j.numDirectionalShadows=U,j.numPointShadows=P,j.numSpotShadows=w,j.numSpotMaps=I,j.numLightProbes=N,n.version=L_++)}function c(u,f){let d=0,m=0,_=0,y=0,b=0;const v=f.matrixWorldInverse;for(let g=0,U=u.length;g<U;g++){const P=u[g];if(P.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),d++}else if(P.isSpotLight){const w=n.spot[_];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),_++}else if(P.isRectAreaLight){const w=n.rectArea[y];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(v),a.identity(),s.copy(P.matrixWorld),s.premultiply(v),a.extractRotation(s),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(P.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(v),m++}else if(P.isHemisphereLight){const w=n.hemi[b];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(v),b++}}}return{setup:l,setupView:c,state:n}}function mc(i){const e=new I_(i),t=[],n=[];function r(f){u.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function l(){e.setup(t)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function N_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new mc(i),e.set(r,[l])):s>=a.length?(l=new mc(i),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
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
}`,B_=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],z_=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],gc=new Rt,gr=new Y,Co=new Y;function V_(i,e,t){let n=new jc;const r=new we,s=new we,a=new Pt,l=new Jf,c=new $f,u={},f=t.maxTextureSize,d={[oi]:tn,[tn]:oi,[Dn]:Dn},m=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:F_,fragmentShader:O_}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const y=new fn;y.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Sn(y,m),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let g=this.type;this.render=function(O,N,j){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;O.type===Yu&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=xs);const T=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),X=i.state;X.setBlending(In),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const G=g!==this.type;G&&N.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(Q=>Q.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,Q=O.length;$<Q;$++){const B=O[$],H=B.shadow;if(H===void 0){qe("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===_r){if(B.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new nn(r.x,r.y,{format:Ki,type:hn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Dr(r.x,r.y,Ln),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=jn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=kt,H.map.depthTexture.magFilter=kt}else{B.isPointLight?(H.map=new qc(r.x),H.map.depthTexture=new gf(r.x,Fn)):(H.map=new nn(r.x,r.y),H.map.depthTexture=new Dr(r.x,r.y,Fn)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=jn;const he=i.state.buffers.depth.getReversed();this.type===xs?(H.map.depthTexture.compareFunction=he?Fa:Na,H.map.depthTexture.minFilter=jt,H.map.depthTexture.magFilter=jt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=kt,H.map.depthTexture.magFilter=kt)}H.camera.updateProjectionMatrix()}const ue=H.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<ue;he++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,he),i.clear();else{he===0&&(i.setRenderTarget(H.map),i.clear());const Ee=H.getViewport(he);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),X.viewport(a)}if(B.isPointLight){const Ee=H.camera,Ge=H.matrix,He=B.distance||Ee.far;He!==Ee.far&&(Ee.far=He,Ee.updateProjectionMatrix()),gr.setFromMatrixPosition(B.matrixWorld),Ee.position.copy(gr),Co.copy(Ee.position),Co.add(B_[he]),Ee.up.copy(z_[he]),Ee.lookAt(Co),Ee.updateMatrixWorld(),Ge.makeTranslation(-gr.x,-gr.y,-gr.z),gc.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),H._frustum.setFromProjectionMatrix(gc,Ee.coordinateSystem,Ee.reversedDepth)}else H.updateMatrices(B);n=H.getFrustum(),w(N,j,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===_r&&U(H,j),H.needsUpdate=!1}g=this.type,v.needsUpdate=!1,i.setRenderTarget(T,x,A)};function U(O,N){const j=e.update(b);m.defines.VSM_SAMPLES!==O.blurSamples&&(m.defines.VSM_SAMPLES=O.blurSamples,_.defines.VSM_SAMPLES=O.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new nn(r.x,r.y,{format:Ki,type:hn})),m.uniforms.shadow_pass.value=O.map.depthTexture,m.uniforms.resolution.value=O.mapSize,m.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(N,null,j,m,b,null),_.uniforms.shadow_pass.value=O.mapPass.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(N,null,j,_,b,null)}function P(O,N,j,T){let x=null;const A=j.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(A!==void 0)x=A;else if(x=j.isPointLight===!0?c:l,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const X=x.uuid,G=N.uuid;let $=u[X];$===void 0&&($={},u[X]=$);let Q=$[G];Q===void 0&&(Q=x.clone(),$[G]=Q,N.addEventListener("dispose",I)),x=Q}if(x.visible=N.visible,x.wireframe=N.wireframe,T===_r?x.side=N.shadowSide!==null?N.shadowSide:N.side:x.side=N.shadowSide!==null?N.shadowSide:d[N.side],x.alphaMap=N.alphaMap,x.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,x.map=N.map,x.clipShadows=N.clipShadows,x.clippingPlanes=N.clippingPlanes,x.clipIntersection=N.clipIntersection,x.displacementMap=N.displacementMap,x.displacementScale=N.displacementScale,x.displacementBias=N.displacementBias,x.wireframeLinewidth=N.wireframeLinewidth,x.linewidth=N.linewidth,j.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=i.properties.get(x);X.light=j}return x}function w(O,N,j,T,x){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&x===_r)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,O.matrixWorld);const G=e.update(O),$=O.material;if(Array.isArray($)){const Q=G.groups;for(let B=0,H=Q.length;B<H;B++){const ee=Q[B],ue=$[ee.materialIndex];if(ue&&ue.visible){const he=P(O,ue,T,x);O.onBeforeShadow(i,O,N,j,G,he,ee),i.renderBufferDirect(j,null,G,he,O,ee),O.onAfterShadow(i,O,N,j,G,he,ee)}}}else if($.visible){const Q=P(O,$,T,x);O.onBeforeShadow(i,O,N,j,G,Q,null),i.renderBufferDirect(j,null,G,Q,O,null),O.onAfterShadow(i,O,N,j,G,Q,null)}}const X=O.children;for(let G=0,$=X.length;G<$;G++)w(X[G],N,j,T,x)}function I(O){O.target.removeEventListener("dispose",I);for(const j in u){const T=u[j],x=O.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}const G_={[Uo]:Io,[No]:Bo,[Fo]:zo,[ji]:Oo,[Io]:Uo,[Bo]:No,[zo]:Fo,[Oo]:ji};function H_(i,e){function t(){let z=!1;const xe=new Pt;let fe=null;const be=new Pt(0,0,0,0);return{setMask:function(le){fe!==le&&!z&&(i.colorMask(le,le,le,le),fe=le)},setLocked:function(le){z=le},setClear:function(le,re,de,We,vt){vt===!0&&(le*=We,re*=We,de*=We),xe.set(le,re,de,We),be.equals(xe)===!1&&(i.clearColor(le,re,de,We),be.copy(xe))},reset:function(){z=!1,fe=null,be.set(-1,0,0,0)}}}function n(){let z=!1,xe=!1,fe=null,be=null,le=null;return{setReversed:function(re){if(xe!==re){const de=e.get("EXT_clip_control");re?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),xe=re;const We=le;le=null,this.setClear(We)}},getReversed:function(){return xe},setTest:function(re){re?oe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(re){fe!==re&&!z&&(i.depthMask(re),fe=re)},setFunc:function(re){if(xe&&(re=G_[re]),be!==re){switch(re){case Uo:i.depthFunc(i.NEVER);break;case Io:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=re}},setLocked:function(re){z=re},setClear:function(re){le!==re&&(xe&&(re=1-re),i.clearDepth(re),le=re)},reset:function(){z=!1,fe=null,be=null,le=null,xe=!1}}}function r(){let z=!1,xe=null,fe=null,be=null,le=null,re=null,de=null,We=null,vt=null;return{setTest:function(ot){z||(ot?oe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!z&&(i.stencilMask(ot),xe=ot)},setFunc:function(ot,Kt,Mn){(fe!==ot||be!==Kt||le!==Mn)&&(i.stencilFunc(ot,Kt,Mn),fe=ot,be=Kt,le=Mn)},setOp:function(ot,Kt,Mn){(re!==ot||de!==Kt||We!==Mn)&&(i.stencilOp(ot,Kt,Mn),re=ot,de=Kt,We=Mn)},setLocked:function(ot){z=ot},setClear:function(ot){vt!==ot&&(i.clearStencil(ot),vt=ot)},reset:function(){z=!1,xe=null,fe=null,be=null,le=null,re=null,de=null,We=null,vt=null}}}const s=new t,a=new n,l=new r,c=new WeakMap,u=new WeakMap;let f={},d={},m=new WeakMap,_=[],y=null,b=!1,v=null,g=null,U=null,P=null,w=null,I=null,O=null,N=new rt(0,0,0),j=0,T=!1,x=null,A=null,X=null,G=null,$=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),B=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),B=H>=2);let ue=null,he={};const Ee=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),He=new Pt().fromArray(Ee),pt=new Pt().fromArray(Ge);function ct(z,xe,fe,be){const le=new Uint8Array(4),re=i.createTexture();i.bindTexture(z,re),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<fe;de++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(xe+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return re}const ie={};ie[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),oe(i.DEPTH_TEST),a.setFunc(ji),Je(!1),At(pl),oe(i.CULL_FACE),je(In);function oe(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function Ce(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function Ze(z,xe){return d[z]!==xe?(i.bindFramebuffer(z,xe),d[z]=xe,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xe),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function De(z,xe){let fe=_,be=!1;if(z){fe=m.get(xe),fe===void 0&&(fe=[],m.set(xe,fe));const le=z.textures;if(fe.length!==le.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,de=le.length;re<de;re++)fe[re]=i.COLOR_ATTACHMENT0+re;fe.length=le.length,be=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,be=!0);be&&i.drawBuffers(fe)}function nt(z){return y!==z?(i.useProgram(z),y=z,!0):!1}const Dt={[xi]:i.FUNC_ADD,[ju]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};Dt[Ku]=i.MIN,Dt[Ju]=i.MAX;const ze={[$u]:i.ZERO,[Qu]:i.ONE,[eh]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[nh]:i.DST_ALPHA,[th]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[ih]:i.ONE_MINUS_DST_ALPHA,[ah]:i.CONSTANT_COLOR,[lh]:i.ONE_MINUS_CONSTANT_COLOR,[ch]:i.CONSTANT_ALPHA,[uh]:i.ONE_MINUS_CONSTANT_ALPHA};function je(z,xe,fe,be,le,re,de,We,vt,ot){if(z===In){b===!0&&(Ce(i.BLEND),b=!1);return}if(b===!1&&(oe(i.BLEND),b=!0),z!==qu){if(z!==v||ot!==T){if((g!==xi||w!==xi)&&(i.blendEquation(i.FUNC_ADD),g=xi,w=xi),ot)switch(z){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",z);break}else switch(z){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ml:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",z);break}U=null,P=null,I=null,O=null,N.set(0,0,0),j=0,v=z,T=ot}return}le=le||xe,re=re||fe,de=de||be,(xe!==g||le!==w)&&(i.blendEquationSeparate(Dt[xe],Dt[le]),g=xe,w=le),(fe!==U||be!==P||re!==I||de!==O)&&(i.blendFuncSeparate(ze[fe],ze[be],ze[re],ze[de]),U=fe,P=be,I=re,O=de),(We.equals(N)===!1||vt!==j)&&(i.blendColor(We.r,We.g,We.b,vt),N.copy(We),j=vt),v=z,T=!1}function mt(z,xe){z.side===Dn?Ce(i.CULL_FACE):oe(i.CULL_FACE);let fe=z.side===tn;xe&&(fe=!fe),Je(fe),z.blending===Yi&&z.transparent===!1?je(In):je(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const be=z.stencilWrite;l.setTest(be),be&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),wt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(z){x!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),x=z)}function At(z){z!==Wu?(oe(i.CULL_FACE),z!==A&&(z===pl?i.cullFace(i.BACK):z===Xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),A=z}function F(z){z!==X&&(B&&i.lineWidth(z),X=z)}function wt(z,xe,fe){z?(oe(i.POLYGON_OFFSET_FILL),(G!==xe||$!==fe)&&(i.polygonOffset(xe,fe),G=xe,$=fe)):Ce(i.POLYGON_OFFSET_FILL)}function at(z){z?oe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function _t(z){z===void 0&&(z=i.TEXTURE0+Q-1),ue!==z&&(i.activeTexture(z),ue=z)}function Le(z,xe,fe){fe===void 0&&(ue===null?fe=i.TEXTURE0+Q-1:fe=ue);let be=he[fe];be===void 0&&(be={type:void 0,texture:void 0},he[fe]=be),(be.type!==z||be.texture!==xe)&&(ue!==fe&&(i.activeTexture(fe),ue=fe),i.bindTexture(z,xe||ie[z]),be.type=z,be.texture=xe)}function R(){const z=he[ue];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(z){ft("WebGLState:",z)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(z){ft("WebGLState:",z)}}function ne(){try{i.texSubImage2D(...arguments)}catch(z){ft("WebGLState:",z)}}function se(){try{i.texSubImage3D(...arguments)}catch(z){ft("WebGLState:",z)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ft("WebGLState:",z)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ft("WebGLState:",z)}}function _e(){try{i.texStorage2D(...arguments)}catch(z){ft("WebGLState:",z)}}function Ue(){try{i.texStorage3D(...arguments)}catch(z){ft("WebGLState:",z)}}function ke(){try{i.texImage2D(...arguments)}catch(z){ft("WebGLState:",z)}}function ae(){try{i.texImage3D(...arguments)}catch(z){ft("WebGLState:",z)}}function pe(z){He.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),He.copy(z))}function Re(z){pt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),pt.copy(z))}function Ne(z,xe){let fe=u.get(xe);fe===void 0&&(fe=new WeakMap,u.set(xe,fe));let be=fe.get(z);be===void 0&&(be=i.getUniformBlockIndex(xe,z.name),fe.set(z,be))}function me(z,xe){const be=u.get(xe).get(z);c.get(xe)!==be&&(i.uniformBlockBinding(xe,be,z.__bindingPointIndex),c.set(xe,be))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ue=null,he={},d={},m=new WeakMap,_=[],y=null,b=!1,v=null,g=null,U=null,P=null,w=null,I=null,O=null,N=new rt(0,0,0),j=0,T=!1,x=null,A=null,X=null,G=null,$=null,He.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:oe,disable:Ce,bindFramebuffer:Ze,drawBuffers:De,useProgram:nt,setBlending:je,setMaterial:mt,setFlipSided:Je,setCullFace:At,setLineWidth:F,setPolygonOffset:wt,setScissorTest:at,activeTexture:_t,bindTexture:Le,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:k,texImage2D:ke,texImage3D:ae,updateUBOMapping:Ne,uniformBlockBinding:me,texStorage2D:_e,texStorage3D:Ue,texSubImage2D:ne,texSubImage3D:se,compressedTexSubImage2D:te,compressedTexSubImage3D:Ie,scissor:pe,viewport:Re,reset:Ke}}function k_(i,e,t,n,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new we,f=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,S){return _?new OffscreenCanvas(R,S):Cr("canvas")}function b(R,S,k){let ne=1;const se=Le(R);if((se.width>k||se.height>k)&&(ne=k/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const te=Math.floor(ne*se.width),Ie=Math.floor(ne*se.height);d===void 0&&(d=y(te,Ie));const _e=S?y(te,Ie):d;return _e.width=te,_e.height=Ie,_e.getContext("2d").drawImage(R,0,0,te,Ie),qe("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+te+"x"+Ie+")."),_e}else return"data"in R&&qe("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function v(R){return R.generateMipmaps}function g(R){i.generateMipmap(R)}function U(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(R,S,k,ne,se=!1){if(R!==null){if(i[R]!==void 0)return i[R];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=S;if(S===i.RED&&(k===i.FLOAT&&(te=i.R32F),k===i.HALF_FLOAT&&(te=i.R16F),k===i.UNSIGNED_BYTE&&(te=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.R8UI),k===i.UNSIGNED_SHORT&&(te=i.R16UI),k===i.UNSIGNED_INT&&(te=i.R32UI),k===i.BYTE&&(te=i.R8I),k===i.SHORT&&(te=i.R16I),k===i.INT&&(te=i.R32I)),S===i.RG&&(k===i.FLOAT&&(te=i.RG32F),k===i.HALF_FLOAT&&(te=i.RG16F),k===i.UNSIGNED_BYTE&&(te=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RG8UI),k===i.UNSIGNED_SHORT&&(te=i.RG16UI),k===i.UNSIGNED_INT&&(te=i.RG32UI),k===i.BYTE&&(te=i.RG8I),k===i.SHORT&&(te=i.RG16I),k===i.INT&&(te=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGB8UI),k===i.UNSIGNED_SHORT&&(te=i.RGB16UI),k===i.UNSIGNED_INT&&(te=i.RGB32UI),k===i.BYTE&&(te=i.RGB8I),k===i.SHORT&&(te=i.RGB16I),k===i.INT&&(te=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),k===i.UNSIGNED_INT&&(te=i.RGBA32UI),k===i.BYTE&&(te=i.RGBA8I),k===i.SHORT&&(te=i.RGBA16I),k===i.INT&&(te=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),S===i.RGBA){const Ie=se?Ps:lt.getTransfer(ne);k===i.FLOAT&&(te=i.RGBA32F),k===i.HALF_FLOAT&&(te=i.RGBA16F),k===i.UNSIGNED_BYTE&&(te=Ie===xt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(R,S){let k;return R?S===null||S===Fn||S===wr?k=i.DEPTH24_STENCIL8:S===Ln?k=i.DEPTH32F_STENCIL8:S===Ar&&(k=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fn||S===wr?k=i.DEPTH_COMPONENT24:S===Ln?k=i.DEPTH_COMPONENT32F:S===Ar&&(k=i.DEPTH_COMPONENT16),k}function I(R,S){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==jt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function O(R){const S=R.target;S.removeEventListener("dispose",O),j(S),S.isVideoTexture&&f.delete(S)}function N(R){const S=R.target;S.removeEventListener("dispose",N),x(S)}function j(R){const S=n.get(R);if(S.__webglInit===void 0)return;const k=R.source,ne=m.get(k);if(ne){const se=ne[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(R),Object.keys(ne).length===0&&m.delete(k)}n.remove(R)}function T(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const k=R.source,ne=m.get(k);delete ne[S.__cacheKey],a.memory.textures--}function x(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let se=0;se<S.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(S.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=R.textures;for(let ne=0,se=k.length;ne<se;ne++){const te=n.get(k[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(k[ne])}n.remove(R)}let A=0;function X(){A=0}function G(){const R=A;return R>=r.maxTextures&&qe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),A+=1,R}function $(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Q(R,S){const k=n.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const ne=R.image;if(ne===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(k,R,S);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function B(R,S){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ie(k,R,S);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function H(R,S){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ie(k,R,S);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function ee(R,S){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){oe(k,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const ue={[Ho]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},he={[kt]:i.NEAREST,[dh]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},Ee={[gh]:i.NEVER,[Mh]:i.ALWAYS,[_h]:i.LESS,[Na]:i.LEQUAL,[vh]:i.EQUAL,[Fa]:i.GEQUAL,[xh]:i.GREATER,[Sh]:i.NOTEQUAL};function Ge(R,S){if(S.type===Ln&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===jt||S.magFilter===js||S.magFilter===qr||S.magFilter===Mi||S.minFilter===jt||S.minFilter===js||S.minFilter===qr||S.minFilter===Mi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ue[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ue[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ue[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,he[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kt||S.minFilter!==qr&&S.minFilter!==Mi||S.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function He(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",O));const ne=S.source;let se=m.get(ne);se===void 0&&(se={},m.set(ne,se));const te=$(S);if(te!==R.__cacheKey){se[te]===void 0&&(se[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),se[te].usedTimes++;const Ie=se[R.__cacheKey];Ie!==void 0&&(se[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&T(S)),R.__cacheKey=te,R.__webglTexture=se[te].texture}return k}function pt(R,S,k){return Math.floor(Math.floor(R/k)/S)}function ct(R,S,k,ne){const te=R.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,ne,S.data);else{te.sort((ae,pe)=>ae.start-pe.start);let Ie=0;for(let ae=1;ae<te.length;ae++){const pe=te[Ie],Re=te[ae],Ne=pe.start+pe.count,me=pt(Re.start,S.width,4),Ke=pt(pe.start,S.width,4);Re.start<=Ne+1&&me===Ke&&pt(Re.start+Re.count-1,S.width,4)===me?pe.count=Math.max(pe.count,Re.start+Re.count-pe.start):(++Ie,te[Ie]=Re)}te.length=Ie+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),Ue=i.getParameter(i.UNPACK_SKIP_PIXELS),ke=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ae=0,pe=te.length;ae<pe;ae++){const Re=te[ae],Ne=Math.floor(Re.start/4),me=Math.ceil(Re.count/4),Ke=Ne%S.width,z=Math.floor(Ne/S.width),xe=me,fe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Ke,z,xe,fe,k,ne,S.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function ie(R,S,k){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);const se=He(R,S),te=S.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+k);const Ie=n.get(te);if(te.version!==Ie.__version||se===!0){t.activeTexture(i.TEXTURE0+k);const _e=lt.getPrimaries(lt.workingColorSpace),Ue=S.colorSpace===ri?null:lt.getPrimaries(S.colorSpace),ke=S.colorSpace===ri||_e===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ae=b(S.image,!1,r.maxTextureSize);ae=_t(S,ae);const pe=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let Ne=P(S.internalFormat,pe,Re,S.colorSpace,S.isVideoTexture);Ge(ne,S);let me;const Ke=S.mipmaps,z=S.isVideoTexture!==!0,xe=Ie.__version===void 0||se===!0,fe=te.dataReady,be=I(S,ae);if(S.isDepthTexture)Ne=w(S.format===yi,S.type),xe&&(z?t.texStorage2D(i.TEXTURE_2D,1,Ne,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ae.width,ae.height,0,pe,Re,null));else if(S.isDataTexture)if(Ke.length>0){z&&xe&&t.texStorage2D(i.TEXTURE_2D,be,Ne,Ke[0].width,Ke[0].height);for(let le=0,re=Ke.length;le<re;le++)me=Ke[le],z?fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,me.width,me.height,pe,Re,me.data):t.texImage2D(i.TEXTURE_2D,le,Ne,me.width,me.height,0,pe,Re,me.data);S.generateMipmaps=!1}else z?(xe&&t.texStorage2D(i.TEXTURE_2D,be,Ne,ae.width,ae.height),fe&&ct(S,ae,pe,Re)):t.texImage2D(i.TEXTURE_2D,0,Ne,ae.width,ae.height,0,pe,Re,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ne,Ke[0].width,Ke[0].height,ae.depth);for(let le=0,re=Ke.length;le<re;le++)if(me=Ke[le],S.format!==wn)if(pe!==null)if(z){if(fe)if(S.layerUpdates.size>0){const de=ql(me.width,me.height,S.format,S.type);for(const We of S.layerUpdates){const vt=me.data.subarray(We*de/me.data.BYTES_PER_ELEMENT,(We+1)*de/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,We,me.width,me.height,1,pe,vt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,me.width,me.height,ae.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Ne,me.width,me.height,ae.depth,0,me.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,me.width,me.height,ae.depth,pe,Re,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Ne,me.width,me.height,ae.depth,0,pe,Re,me.data)}else{z&&xe&&t.texStorage2D(i.TEXTURE_2D,be,Ne,Ke[0].width,Ke[0].height);for(let le=0,re=Ke.length;le<re;le++)me=Ke[le],S.format!==wn?pe!==null?z?fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Ne,me.width,me.height,0,me.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,me.width,me.height,pe,Re,me.data):t.texImage2D(i.TEXTURE_2D,le,Ne,me.width,me.height,0,pe,Re,me.data)}else if(S.isDataArrayTexture)if(z){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ne,ae.width,ae.height,ae.depth),fe)if(S.layerUpdates.size>0){const le=ql(ae.width,ae.height,S.format,S.type);for(const re of S.layerUpdates){const de=ae.data.subarray(re*le/ae.data.BYTES_PER_ELEMENT,(re+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ae.width,ae.height,1,pe,Re,de)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,pe,Re,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ae.width,ae.height,ae.depth,0,pe,Re,ae.data);else if(S.isData3DTexture)z?(xe&&t.texStorage3D(i.TEXTURE_3D,be,Ne,ae.width,ae.height,ae.depth),fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,pe,Re,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ae.width,ae.height,ae.depth,0,pe,Re,ae.data);else if(S.isFramebufferTexture){if(xe)if(z)t.texStorage2D(i.TEXTURE_2D,be,Ne,ae.width,ae.height);else{let le=ae.width,re=ae.height;for(let de=0;de<be;de++)t.texImage2D(i.TEXTURE_2D,de,Ne,le,re,0,pe,Re,null),le>>=1,re>>=1}}else if(Ke.length>0){if(z&&xe){const le=Le(Ke[0]);t.texStorage2D(i.TEXTURE_2D,be,Ne,le.width,le.height)}for(let le=0,re=Ke.length;le<re;le++)me=Ke[le],z?fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,pe,Re,me):t.texImage2D(i.TEXTURE_2D,le,Ne,pe,Re,me);S.generateMipmaps=!1}else if(z){if(xe){const le=Le(ae);t.texStorage2D(i.TEXTURE_2D,be,Ne,le.width,le.height)}fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Re,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ne,pe,Re,ae);v(S)&&g(ne),Ie.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function oe(R,S,k){if(S.image.length!==6)return;const ne=He(R,S),se=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const te=n.get(se);if(se.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+k);const Ie=lt.getPrimaries(lt.workingColorSpace),_e=S.colorSpace===ri?null:lt.getPrimaries(S.colorSpace),Ue=S.colorSpace===ri||Ie===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ke=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let re=0;re<6;re++)!ke&&!ae?pe[re]=b(S.image[re],!0,r.maxCubemapSize):pe[re]=ae?S.image[re].image:S.image[re],pe[re]=_t(S,pe[re]);const Re=pe[0],Ne=s.convert(S.format,S.colorSpace),me=s.convert(S.type),Ke=P(S.internalFormat,Ne,me,S.colorSpace),z=S.isVideoTexture!==!0,xe=te.__version===void 0||ne===!0,fe=se.dataReady;let be=I(S,Re);Ge(i.TEXTURE_CUBE_MAP,S);let le;if(ke){z&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ke,Re.width,Re.height);for(let re=0;re<6;re++){le=pe[re].mipmaps;for(let de=0;de<le.length;de++){const We=le[de];S.format!==wn?Ne!==null?z?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de,0,0,We.width,We.height,Ne,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de,Ke,We.width,We.height,0,We.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de,0,0,We.width,We.height,Ne,me,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de,Ke,We.width,We.height,0,Ne,me,We.data)}}}else{if(le=S.mipmaps,z&&xe){le.length>0&&be++;const re=Le(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Ke,re.width,re.height)}for(let re=0;re<6;re++)if(ae){z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe[re].width,pe[re].height,Ne,me,pe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,pe[re].width,pe[re].height,0,Ne,me,pe[re].data);for(let de=0;de<le.length;de++){const vt=le[de].image[re].image;z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de+1,0,0,vt.width,vt.height,Ne,me,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de+1,Ke,vt.width,vt.height,0,Ne,me,vt.data)}}else{z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ne,me,pe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ke,Ne,me,pe[re]);for(let de=0;de<le.length;de++){const We=le[de];z?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de+1,0,0,Ne,me,We.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,de+1,Ke,Ne,me,We.image[re])}}}v(S)&&g(i.TEXTURE_CUBE_MAP),te.__version=se.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ce(R,S,k,ne,se,te){const Ie=s.convert(k.format,k.colorSpace),_e=s.convert(k.type),Ue=P(k.internalFormat,Ie,_e,k.colorSpace),ke=n.get(S),ae=n.get(k);if(ae.__renderTarget=S,!ke.__hasExternalTextures){const pe=Math.max(1,S.width>>te),Re=Math.max(1,S.height>>te);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,te,Ue,pe,Re,S.depth,0,Ie,_e,null):t.texImage2D(se,te,Ue,pe,Re,0,Ie,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),wt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,se,ae.__webglTexture,0,F(S)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,se,ae.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(R,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const ne=S.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,te=w(S.stencilBuffer,se),Ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;wt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F(S),te,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,F(S),te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,R)}else{const ne=S.textures;for(let se=0;se<ne.length;se++){const te=ne[se],Ie=s.convert(te.format,te.colorSpace),_e=s.convert(te.type),Ue=P(te.internalFormat,Ie,_e,te.colorSpace);wt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F(S),Ue,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,F(S),Ue,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,S,k){const ne=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(S.depthTexture);if(se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ne){if(se.__webglInit===void 0&&(se.__webglInit=!0,S.depthTexture.addEventListener("dispose",O)),se.__webglTexture===void 0){se.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,S.depthTexture);const ke=s.convert(S.depthTexture.format),ae=s.convert(S.depthTexture.type);let pe;S.depthTexture.format===jn?pe=i.DEPTH_COMPONENT24:S.depthTexture.format===yi&&(pe=i.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,pe,S.width,S.height,0,ke,ae,null)}}else Q(S.depthTexture,0);const te=se.__webglTexture,Ie=F(S),_e=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Ue=S.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===jn)wt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ue,_e,te,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,Ue,_e,te,0);else if(S.depthTexture.format===yi)wt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ue,_e,te,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,Ue,_e,te,0);else throw new Error("Unknown depthTexture format")}function nt(R){const S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=ne}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let ne=0;ne<6;ne++)De(S.__webglFramebuffer[ne],R,ne);else{const ne=R.texture.mipmaps;ne&&ne.length>0?De(S.__webglFramebuffer[0],R,0):De(S.__webglFramebuffer,R,0)}else if(k){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ze(S.__webglDepthbuffer[ne],R,!1);else{const se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,te)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ze(S.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(R,S,k){const ne=n.get(R);S!==void 0&&Ce(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&nt(R)}function ze(R){const S=R.texture,k=n.get(R),ne=n.get(S);R.addEventListener("dispose",N);const se=R.textures,te=R.isWebGLCubeRenderTarget===!0,Ie=se.length>1;if(Ie||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,a.memory.textures++),te){k.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[_e]=[];for(let Ue=0;Ue<S.mipmaps.length;Ue++)k.__webglFramebuffer[_e][Ue]=i.createFramebuffer()}else k.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)k.__webglFramebuffer[_e]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let _e=0,Ue=se.length;_e<Ue;_e++){const ke=n.get(se[_e]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&wt(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let _e=0;_e<se.length;_e++){const Ue=se[_e];k.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[_e]);const ke=s.convert(Ue.format,Ue.colorSpace),ae=s.convert(Ue.type),pe=P(Ue.internalFormat,ke,ae,Ue.colorSpace,R.isXRRenderTarget===!0),Re=F(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,k.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,S);for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ue=0;Ue<S.mipmaps.length;Ue++)Ce(k.__webglFramebuffer[_e][Ue],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue);else Ce(k.__webglFramebuffer[_e],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(S)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let _e=0,Ue=se.length;_e<Ue;_e++){const ke=se[_e],ae=n.get(ke);let pe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),Ge(pe,ke),Ce(k.__webglFramebuffer,R,ke,i.COLOR_ATTACHMENT0+_e,pe,0),v(ke)&&g(pe)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ne.__webglTexture),Ge(_e,S),S.mipmaps&&S.mipmaps.length>0)for(let Ue=0;Ue<S.mipmaps.length;Ue++)Ce(k.__webglFramebuffer[Ue],R,S,i.COLOR_ATTACHMENT0,_e,Ue);else Ce(k.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,_e,0);v(S)&&g(_e),t.unbindTexture()}R.depthBuffer&&nt(R)}function je(R){const S=R.textures;for(let k=0,ne=S.length;k<ne;k++){const se=S[k];if(v(se)){const te=U(R),Ie=n.get(se).__webglTexture;t.bindTexture(te,Ie),g(te),t.unbindTexture()}}}const mt=[],Je=[];function At(R){if(R.samples>0){if(wt(R)===!1){const S=R.textures,k=R.width,ne=R.height;let se=i.COLOR_BUFFER_BIT;const te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(R),_e=S.length>1;if(_e)for(let ke=0;ke<S.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Ue=R.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ke=0;ke<S.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const ae=n.get(S[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,k,ne,0,0,k,ne,se,i.NEAREST),c===!0&&(mt.length=0,Je.length=0,mt.push(i.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(mt.push(te),Je.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let ke=0;ke<S.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const ae=n.get(S[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function F(R){return Math.min(r.maxSamples,R.samples)}function wt(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(R){const S=a.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function _t(R,S){const k=R.colorSpace,ne=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ji&&k!==ri&&(lt.getTransfer(k)===xt?(ne!==wn||se!==vn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",k)),S}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=Dt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function W_(i,e){function t(n,r=ri){let s;const a=lt.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Uc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===wn)return i.RGBA;if(n===jn)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===Nc)return i.RED;if(n===La)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===Ss||n===Ms||n===ys||n===Es)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===Yo||n===qo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Zo||n===Ko||n===Jo||n===$o||n===Qo||n===ea)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jo||n===Zo)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jo)return s.COMPRESSED_R11_EAC;if(n===$o)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Qo)return s.COMPRESSED_RG11_EAC;if(n===ea)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ta||n===na||n===ia||n===ra||n===sa||n===oa||n===aa||n===la||n===ca||n===ua||n===ha||n===fa||n===da||n===pa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ta)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===ga||n===_a)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ma)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===va||n===xa||n===Sa||n===Ma)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===va)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y_=`
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

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:X_,fragmentShader:Y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j_ extends tr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,f=null,d=null,m=null,_=null,y=null;const b=typeof XRWebGLBinding<"u",v=new q_,g={},U=t.getContextAttributes();let P=null,w=null;const I=[],O=[],N=new we;let j=null;const T=new _n;T.viewport=new Pt;const x=new _n;x.viewport=new Pt;const A=[T,x],X=new id;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let oe=I[ie];return oe===void 0&&(oe=new _o,I[ie]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ie){let oe=I[ie];return oe===void 0&&(oe=new _o,I[ie]=oe),oe.getGripSpace()},this.getHand=function(ie){let oe=I[ie];return oe===void 0&&(oe=new _o,I[ie]=oe),oe.getHandSpace()};function Q(ie){const oe=O.indexOf(ie.inputSource);if(oe===-1)return;const Ce=I[oe];Ce!==void 0&&(Ce.update(ie.inputSource,ie.frame,u||a),Ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function B(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",H);for(let ie=0;ie<I.length;ie++){const oe=O[ie];oe!==null&&(O[ie]=null,I[ie].disconnect(oe))}G=null,$=null,v.reset();for(const ie in g)delete g[ie];e.setRenderTarget(P),_=null,m=null,d=null,r=null,w=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(j),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){l=ie,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ie){u=ie},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",B),r.addEventListener("inputsourceschange",H),U.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ze=null,De=null;U.depth&&(De=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=U.stencil?yi:jn,Ze=U.stencil?wr:Fn);const nt={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};d=this.getBinding(),m=d.createProjectionLayer(nt),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new nn(m.textureWidth,m.textureHeight,{format:wn,type:vn,depthTexture:new Dr(m.textureWidth,m.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Ce={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,Ce),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),w=new nn(_.framebufferWidth,_.framebufferHeight,{format:wn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(ie){for(let oe=0;oe<ie.removed.length;oe++){const Ce=ie.removed[oe],Ze=O.indexOf(Ce);Ze>=0&&(O[Ze]=null,I[Ze].disconnect(Ce))}for(let oe=0;oe<ie.added.length;oe++){const Ce=ie.added[oe];let Ze=O.indexOf(Ce);if(Ze===-1){for(let nt=0;nt<I.length;nt++)if(nt>=O.length){O.push(Ce),Ze=nt;break}else if(O[nt]===null){O[nt]=Ce,Ze=nt;break}if(Ze===-1)break}const De=I[Ze];De&&De.connect(Ce)}}const ee=new Y,ue=new Y;function he(ie,oe,Ce){ee.setFromMatrixPosition(oe.matrixWorld),ue.setFromMatrixPosition(Ce.matrixWorld);const Ze=ee.distanceTo(ue),De=oe.projectionMatrix.elements,nt=Ce.projectionMatrix.elements,Dt=De[14]/(De[10]-1),ze=De[14]/(De[10]+1),je=(De[9]+1)/De[5],mt=(De[9]-1)/De[5],Je=(De[8]-1)/De[0],At=(nt[8]+1)/nt[0],F=Dt*Je,wt=Dt*At,at=Ze/(-Je+At),_t=at*-Je;if(oe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(_t),ie.translateZ(at),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),De[10]===-1)ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Le=Dt+at,R=ze+at,S=F-_t,k=wt+(Ze-_t),ne=je*ze/R*Le,se=mt*ze/R*Le;ie.projectionMatrix.makePerspective(S,k,ne,se,Le,R),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Ee(ie,oe){oe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(oe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let oe=ie.near,Ce=ie.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(Ce=v.depthFar)),X.near=x.near=T.near=oe,X.far=x.far=T.far=Ce,(G!==X.near||$!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),G=X.near,$=X.far),X.layers.mask=ie.layers.mask|6,T.layers.mask=X.layers.mask&3,x.layers.mask=X.layers.mask&5;const Ze=ie.parent,De=X.cameras;Ee(X,Ze);for(let nt=0;nt<De.length;nt++)Ee(De[nt],Ze);De.length===2?he(X,T,x):X.projectionMatrix.copy(T.projectionMatrix),Ge(ie,X,Ze)};function Ge(ie,oe,Ce){Ce===null?ie.matrix.copy(oe.matrixWorld):(ie.matrix.copy(Ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(oe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Pr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(m===null&&_===null))return c},this.setFoveation=function(ie){c=ie,m!==null&&(m.fixedFoveation=ie),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(X)},this.getCameraTexture=function(ie){return g[ie]};let He=null;function pt(ie,oe){if(f=oe.getViewerPose(u||a),y=oe,f!==null){const Ce=f.views;_!==null&&(e.setRenderTargetFramebuffer(w,_.framebuffer),e.setRenderTarget(w));let Ze=!1;Ce.length!==X.cameras.length&&(X.cameras.length=0,Ze=!0);for(let ze=0;ze<Ce.length;ze++){const je=Ce[ze];let mt=null;if(_!==null)mt=_.getViewport(je);else{const At=d.getViewSubImage(m,je);mt=At.viewport,ze===0&&(e.setRenderTargetTextures(w,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(w))}let Je=A[ze];Je===void 0&&(Je=new _n,Je.layers.enable(ze),Je.viewport=new Pt,A[ze]=Je),Je.matrix.fromArray(je.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(je.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(mt.x,mt.y,mt.width,mt.height),ze===0&&(X.matrix.copy(Je.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ze===!0&&X.cameras.push(Je)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=n.getBinding();const ze=d.getDepthInformation(Ce[0]);ze&&ze.isValid&&ze.texture&&v.init(ze,r.renderState)}if(De&&De.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<Ce.length;ze++){const je=Ce[ze].camera;if(je){let mt=g[je];mt||(mt=new Zc,g[je]=mt);const Je=d.getCameraImage(je);mt.sourceTexture=Je}}}}for(let Ce=0;Ce<I.length;Ce++){const Ze=O[Ce],De=I[Ce];Ze!==null&&De!==void 0&&De.update(Ze,oe,u||a)}He&&He(ie,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),y=null}const ct=new su;ct.setAnimationLoop(pt),this.setAnimationLoop=function(ie){He=ie},this.dispose=function(){}}}const _i=new On,Z_=new Rt;function K_(i,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function n(v,g){g.color.getRGB(v.fogColor.value,Wc(i)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function r(v,g,U,P,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(v,g):g.isMeshToonMaterial?(s(v,g),d(v,g)):g.isMeshPhongMaterial?(s(v,g),f(v,g)):g.isMeshStandardMaterial?(s(v,g),m(v,g),g.isMeshPhysicalMaterial&&_(v,g,w)):g.isMeshMatcapMaterial?(s(v,g),y(v,g)):g.isMeshDepthMaterial?s(v,g):g.isMeshDistanceMaterial?(s(v,g),b(v,g)):g.isMeshNormalMaterial?s(v,g):g.isLineBasicMaterial?(a(v,g),g.isLineDashedMaterial&&l(v,g)):g.isPointsMaterial?c(v,g,U,P):g.isSpriteMaterial?u(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===tn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===tn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const U=e.get(g),P=U.envMap,w=U.envMapRotation;P&&(v.envMap.value=P,_i.copy(w),_i.x*=-1,_i.y*=-1,_i.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),v.envMapRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(_i)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function a(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function l(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function c(v,g,U,P){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*U,v.scale.value=P*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function u(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function f(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function d(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function m(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function _(v,g,U){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,g){g.matcap&&(v.matcap.value=g.matcap)}function b(v,g){const U=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function J_(i,e,t,n){let r={},s={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(U,P){const w=P.program;n.uniformBlockBinding(U,w)}function u(U,P){let w=r[U.id];w===void 0&&(y(U),w=f(U),r[U.id]=w,U.addEventListener("dispose",v));const I=P.program;n.updateUBOMapping(U,I);const O=e.render.frame;s[U.id]!==O&&(m(U),s[U.id]=O)}function f(U){const P=d();U.__bindingPointIndex=P;const w=i.createBuffer(),I=U.__size,O=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,w),w}function d(){for(let U=0;U<l;U++)if(a.indexOf(U)===-1)return a.push(U),U;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(U){const P=r[U.id],w=U.uniforms,I=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let O=0,N=w.length;O<N;O++){const j=Array.isArray(w[O])?w[O]:[w[O]];for(let T=0,x=j.length;T<x;T++){const A=j[T];if(_(A,O,T,I)===!0){const X=A.__offset,G=Array.isArray(A.value)?A.value:[A.value];let $=0;for(let Q=0;Q<G.length;Q++){const B=G[Q],H=b(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,X+$,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(U,P,w,I){const O=U.value,N=P+"_"+w;if(I[N]===void 0)return typeof O=="number"||typeof O=="boolean"?I[N]=O:I[N]=O.clone(),!0;{const j=I[N];if(typeof O=="number"||typeof O=="boolean"){if(j!==O)return I[N]=O,!0}else if(j.equals(O)===!1)return j.copy(O),!0}return!1}function y(U){const P=U.uniforms;let w=0;const I=16;for(let N=0,j=P.length;N<j;N++){const T=Array.isArray(P[N])?P[N]:[P[N]];for(let x=0,A=T.length;x<A;x++){const X=T[x],G=Array.isArray(X.value)?X.value:[X.value];for(let $=0,Q=G.length;$<Q;$++){const B=G[$],H=b(B),ee=w%I,ue=ee%H.boundary,he=ee+ue;w+=ue,he!==0&&I-he<H.storage&&(w+=I-he),X.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=H.storage}}}const O=w%I;return O>0&&(w+=I-O),U.__size=w,U.__cache={},this}function b(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",U),P}function v(U){const P=U.target;P.removeEventListener("dispose",v);const w=a.indexOf(P.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function g(){for(const U in r)i.deleteBuffer(r[U]);a=[],r={},s={}}return{bind:c,update:u,dispose:g}}const $_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function Q_(){return Rn===null&&(Rn=new uf($_,16,16,Ki,hn),Rn.name="DFG_LUT",Rn.minFilter=jt,Rn.magFilter=jt,Rn.wrapS=Yn,Rn.wrapT=Yn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class e0{constructor(e={}){const{canvas:t=yh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1,outputBufferType:_=vn}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;const b=_,v=new Set([Ia,Ua,La]),g=new Set([vn,Fn,Ar,wr,Pa,Da]),U=new Uint32Array(4),P=new Int32Array(4);let w=null,I=null;const O=[],N=[];let j=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let x=!1;this._outputColorSpace=gn;let A=0,X=0,G=null,$=-1,Q=null;const B=new Pt,H=new Pt;let ee=null;const ue=new rt(0);let he=0,Ee=t.width,Ge=t.height,He=1,pt=null,ct=null;const ie=new Pt(0,0,Ee,Ge),oe=new Pt(0,0,Ee,Ge);let Ce=!1;const Ze=new jc;let De=!1,nt=!1;const Dt=new Rt,ze=new Y,je=new Pt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function At(){return G===null?He:1}let F=n;function wt(E,W){return t.getContext(E,W)}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ca}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",ot,!1),F===null){const W="webgl2";if(F=wt(W,E),F===null)throw wt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ft("WebGLRenderer: "+E.message),E}let at,_t,Le,R,S,k,ne,se,te,Ie,_e,Ue,ke,ae,pe,Re,Ne,me,Ke,z,xe,fe,be,le;function re(){at=new Qm(F),at.init(),fe=new W_(F,at),_t=new Wm(F,at,e,fe),Le=new H_(F,at),_t.reversedDepthBuffer&&m&&Le.buffers.depth.setReversed(!0),R=new ng(F),S=new w_,k=new k_(F,at,Le,S,_t,fe,R),ne=new Ym(T),se=new $m(T),te=new od(F),be=new Hm(F,te),Ie=new eg(F,te,R,be),_e=new rg(F,Ie,te,R),Ke=new ig(F,_t,k),Re=new Xm(S),Ue=new A_(T,ne,se,at,_t,be,Re),ke=new K_(T,S),ae=new R_,pe=new N_(at),me=new Gm(T,ne,se,Le,_e,y,c),Ne=new V_(T,_e,_t),le=new J_(F,R,_t,Le),z=new km(F,at,R),xe=new tg(F,at,R),R.programs=Ue.programs,T.capabilities=_t,T.extensions=at,T.properties=S,T.renderLists=ae,T.shadowMap=Ne,T.state=Le,T.info=R}re(),b!==vn&&(j=new og(b,t.width,t.height,r,s));const de=new j_(T,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(E){E!==void 0&&(He=E,this.setSize(Ee,Ge,!1))},this.getSize=function(E){return E.set(Ee,Ge)},this.setSize=function(E,W,K=!0){if(de.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=E,Ge=W,t.width=Math.floor(E*He),t.height=Math.floor(W*He),K===!0&&(t.style.width=E+"px",t.style.height=W+"px"),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(Ee*He,Ge*He).floor()},this.setDrawingBufferSize=function(E,W,K){Ee=E,Ge=W,He=K,t.width=Math.floor(E*K),t.height=Math.floor(W*K),this.setViewport(0,0,E,W)},this.setEffects=function(E){if(b===vn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let W=0;W<E.length;W++)if(E[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,W,K,Z){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,W,K,Z),Le.viewport(B.copy(ie).multiplyScalar(He).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,W,K,Z){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,W,K,Z),Le.scissor(H.copy(oe).multiplyScalar(He).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(E){Le.setScissorTest(Ce=E)},this.setOpaqueSort=function(E){pt=E},this.setTransparentSort=function(E){ct=E},this.getClearColor=function(E){return E.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(E=!0,W=!0,K=!0){let Z=0;if(E){let q=!1;if(G!==null){const ge=G.texture.format;q=v.has(ge)}if(q){const ge=G.texture.type,Me=g.has(ge),Se=me.getClearColor(),Pe=me.getClearAlpha(),Fe=Se.r,Ve=Se.g,Be=Se.b;Me?(U[0]=Fe,U[1]=Ve,U[2]=Be,U[3]=Pe,F.clearBufferuiv(F.COLOR,0,U)):(P[0]=Fe,P[1]=Ve,P[2]=Be,P[3]=Pe,F.clearBufferiv(F.COLOR,0,P))}else Z|=F.COLOR_BUFFER_BIT}W&&(Z|=F.DEPTH_BUFFER_BIT),K&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),me.dispose(),ae.dispose(),pe.dispose(),S.dispose(),ne.dispose(),se.dispose(),_e.dispose(),be.dispose(),le.dispose(),Ue.dispose(),de.dispose(),de.removeEventListener("sessionstart",sr),de.removeEventListener("sessionend",bt),Ft.stop()};function We(E){E.preventDefault(),Ml("WebGLRenderer: Context Lost."),x=!0}function vt(){Ml("WebGLRenderer: Context Restored."),x=!1;const E=R.autoReset,W=Ne.enabled,K=Ne.autoUpdate,Z=Ne.needsUpdate,q=Ne.type;re(),R.autoReset=E,Ne.enabled=W,Ne.autoUpdate=K,Ne.needsUpdate=Z,Ne.type=q}function ot(E){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Kt(E){const W=E.target;W.removeEventListener("dispose",Kt),Mn(W)}function Mn(E){Zn(E),S.remove(E)}function Zn(E){const W=S.get(E).programs;W!==void 0&&(W.forEach(function(K){Ue.releaseProgram(K)}),E.isShaderMaterial&&Ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,K,Z,q,ge){W===null&&(W=mt);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Se=ar(E,W,K,Z,q);Le.setMaterial(Z,Me);let Pe=K.index,Fe=1;if(Z.wireframe===!0){if(Pe=Ie.getWireframeAttribute(K),Pe===void 0)return;Fe=2}const Ve=K.drawRange,Be=K.attributes.position;let Qe=Ve.start*Fe,dt=(Ve.start+Ve.count)*Fe;ge!==null&&(Qe=Math.max(Qe,ge.start*Fe),dt=Math.min(dt,(ge.start+ge.count)*Fe)),Pe!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,Pe.count)):Be!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,Be.count));const yt=dt-Qe;if(yt<0||yt===1/0)return;be.setup(q,Z,Se,K,Pe);let Et,gt=z;if(Pe!==null&&(Et=te.get(Pe),gt=xe,gt.setIndex(Et)),q.isMesh)Z.wireframe===!0?(Le.setLineWidth(Z.wireframeLinewidth*At()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(q.isLine){let Ae=Z.linewidth;Ae===void 0&&(Ae=1),Le.setLineWidth(Ae*At()),q.isLineSegments?gt.setMode(F.LINES):q.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else q.isPoints?gt.setMode(F.POINTS):q.isSprite&&gt.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Rr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ae=q._multiDrawStarts,ut=q._multiDrawCounts,st=q._multiDrawCount,Ot=Pe?te.get(Pe).bytesPerElement:1,Vn=S.get(Z).currentProgram.getUniforms();for(let Xt=0;Xt<st;Xt++)Vn.setValue(F,"_gl_DrawID",Xt),gt.render(Ae[Xt]/Ot,ut[Xt])}else if(q.isInstancedMesh)gt.renderInstances(Qe,yt,q.count);else if(K.isInstancedBufferGeometry){const Ae=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ut=Math.min(K.instanceCount,Ae);gt.renderInstances(Qe,yt,ut)}else gt.render(Qe,yt)};function Gr(E,W,K){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,Cn(E,W,K),E.side=oi,E.needsUpdate=!0,Cn(E,W,K),E.side=Dn):Cn(E,W,K)}this.compile=function(E,W,K=null){K===null&&(K=E),I=pe.get(K),I.init(W),N.push(I),K.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(I.pushLight(q),q.castShadow&&I.pushShadow(q))}),E!==K&&E.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(I.pushLight(q),q.castShadow&&I.pushShadow(q))}),I.setupLights();const Z=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ge=q.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){const Se=ge[Me];Gr(Se,K,q),Z.add(Se)}else Gr(ge,K,q),Z.add(ge)}),I=N.pop(),Z},this.compileAsync=function(E,W,K=null){const Z=this.compile(E,W,K);return new Promise(q=>{function ge(){if(Z.forEach(function(Me){S.get(Me).currentProgram.isReady()&&Z.delete(Me)}),Z.size===0){q(E);return}setTimeout(ge,10)}at.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let on=null;function zn(E){on&&on(E)}function sr(){Ft.stop()}function bt(){Ft.start()}const Ft=new su;Ft.setAnimationLoop(zn),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(E){on=E,de.setAnimationLoop(E),E===null?Ft.stop():Ft.start()},de.addEventListener("sessionstart",sr),de.addEventListener("sessionend",bt),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;const K=de.enabled===!0&&de.isPresenting===!0,Z=j!==null&&(G===null||K)&&j.begin(T,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(W),W=de.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,W,G),I=pe.get(E,N.length),I.init(W),N.push(I),Dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ze.setFromProjectionMatrix(Dt,Un,W.reversedDepth),nt=this.localClippingEnabled,De=Re.init(this.clippingPlanes,nt),w=ae.get(E,O.length),w.init(),O.push(w),de.enabled===!0&&de.isPresenting===!0){const Me=T.xr.getDepthSensingMesh();Me!==null&&ai(Me,W,-1/0,T.sortObjects)}ai(E,W,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(pt,ct),Je=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Je&&me.addToRenderList(w,E),this.info.render.frame++,De===!0&&Re.beginShadows();const q=I.state.shadowsArray;if(Ne.render(q,E,W),De===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&j.hasRenderPass())===!1){const Me=w.opaque,Se=w.transmissive;if(I.setupLights(),W.isArrayCamera){const Pe=W.cameras;if(Se.length>0)for(let Fe=0,Ve=Pe.length;Fe<Ve;Fe++){const Be=Pe[Fe];li(Me,Se,E,Be)}Je&&me.render(E);for(let Fe=0,Ve=Pe.length;Fe<Ve;Fe++){const Be=Pe[Fe];Hr(w,E,Be,Be.viewport)}}else Se.length>0&&li(Me,Se,E,W),Je&&me.render(E),Hr(w,E,W)}G!==null&&X===0&&(k.updateMultisampleRenderTarget(G),k.updateRenderTargetMipmap(G)),Z&&j.end(T),E.isScene===!0&&E.onAfterRender(T,E,W),be.resetDefaultState(),$=-1,Q=null,N.pop(),N.length>0?(I=N[N.length-1],De===!0&&Re.setGlobalState(T.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?w=O[O.length-1]:w=null};function ai(E,W,K,Z){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)I.pushLight(E),E.castShadow&&I.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ze.intersectsSprite(E)){Z&&je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Dt);const Me=_e.update(E),Se=E.material;Se.visible&&w.push(E,Me,Se,K,je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ze.intersectsObject(E))){const Me=_e.update(E),Se=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),je.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),je.copy(Me.boundingSphere.center)),je.applyMatrix4(E.matrixWorld).applyMatrix4(Dt)),Array.isArray(Se)){const Pe=Me.groups;for(let Fe=0,Ve=Pe.length;Fe<Ve;Fe++){const Be=Pe[Fe],Qe=Se[Be.materialIndex];Qe&&Qe.visible&&w.push(E,Me,Qe,K,je.z,Be)}}else Se.visible&&w.push(E,Me,Se,K,je.z,null)}}const ge=E.children;for(let Me=0,Se=ge.length;Me<Se;Me++)ai(ge[Me],W,K,Z)}function Hr(E,W,K,Z){const{opaque:q,transmissive:ge,transparent:Me}=E;I.setupLightsView(K),De===!0&&Re.setGlobalState(T.clippingPlanes,K),Z&&Le.viewport(B.copy(Z)),q.length>0&&Kn(q,W,K),ge.length>0&&Kn(ge,W,K),Me.length>0&&Kn(Me,W,K),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function li(E,W,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[Z.id]===void 0){const Qe=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[Z.id]=new nn(1,1,{generateMipmaps:!0,type:Qe?hn:vn,minFilter:Mi,samples:_t.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const ge=I.state.transmissionRenderTarget[Z.id],Me=Z.viewport||B;ge.setSize(Me.z*T.transmissionResolutionScale,Me.w*T.transmissionResolutionScale);const Se=T.getRenderTarget(),Pe=T.getActiveCubeFace(),Fe=T.getActiveMipmapLevel();T.setRenderTarget(ge),T.getClearColor(ue),he=T.getClearAlpha(),he<1&&T.setClearColor(16777215,.5),T.clear(),Je&&me.render(K);const Ve=T.toneMapping;T.toneMapping=Nn;const Be=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),I.setupLightsView(Z),De===!0&&Re.setGlobalState(T.clippingPlanes,Z),Kn(E,K,Z),k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge),at.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let dt=0,yt=W.length;dt<yt;dt++){const Et=W[dt],{object:gt,geometry:Ae,material:ut,group:st}=Et;if(ut.side===Dn&&gt.layers.test(Z.layers)){const Ot=ut.side;ut.side=tn,ut.needsUpdate=!0,ci(gt,K,Z,Ae,ut,st),ut.side=Ot,ut.needsUpdate=!0,Qe=!0}}Qe===!0&&(k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge))}T.setRenderTarget(Se,Pe,Fe),T.setClearColor(ue,he),Be!==void 0&&(Z.viewport=Be),T.toneMapping=Ve}function Kn(E,W,K){const Z=W.isScene===!0?W.overrideMaterial:null;for(let q=0,ge=E.length;q<ge;q++){const Me=E[q],{object:Se,geometry:Pe,group:Fe}=Me;let Ve=Me.material;Ve.allowOverride===!0&&Z!==null&&(Ve=Z),Se.layers.test(K.layers)&&ci(Se,W,K,Pe,Ve,Fe)}}function ci(E,W,K,Z,q,ge){E.onBeforeRender(T,W,K,Z,q,ge),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(T,W,K,Z,E,ge),q.transparent===!0&&q.side===Dn&&q.forceSinglePass===!1?(q.side=tn,q.needsUpdate=!0,T.renderBufferDirect(K,W,Z,q,E,ge),q.side=oi,q.needsUpdate=!0,T.renderBufferDirect(K,W,Z,q,E,ge),q.side=Dn):T.renderBufferDirect(K,W,Z,q,E,ge),E.onAfterRender(T,W,K,Z,q,ge)}function Cn(E,W,K){W.isScene!==!0&&(W=mt);const Z=S.get(E),q=I.state.lights,ge=I.state.shadowsArray,Me=q.state.version,Se=Ue.getParameters(E,q.state,ge,W,K),Pe=Ue.getProgramCacheKey(Se);let Fe=Z.programs;Z.environment=E.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(E.isMeshStandardMaterial?se:ne).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Kt),Fe=new Map,Z.programs=Fe);let Ve=Fe.get(Pe);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Me)return Ai(E,Se),Ve}else Se.uniforms=Ue.getUniforms(E),E.onBeforeCompile(Se,T),Ve=Ue.acquireProgram(Se,Pe),Fe.set(Pe,Ve),Z.uniforms=Se.uniforms;const Be=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=Re.uniform),Ai(E,Se),Z.needsLights=an(E),Z.lightsStateVersion=Me,Z.needsLights&&(Be.ambientLightColor.value=q.state.ambient,Be.lightProbe.value=q.state.probe,Be.directionalLights.value=q.state.directional,Be.directionalLightShadows.value=q.state.directionalShadow,Be.spotLights.value=q.state.spot,Be.spotLightShadows.value=q.state.spotShadow,Be.rectAreaLights.value=q.state.rectArea,Be.ltc_1.value=q.state.rectAreaLTC1,Be.ltc_2.value=q.state.rectAreaLTC2,Be.pointLights.value=q.state.point,Be.pointLightShadows.value=q.state.pointShadow,Be.hemisphereLights.value=q.state.hemi,Be.directionalShadowMap.value=q.state.directionalShadowMap,Be.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Be.spotShadowMap.value=q.state.spotShadowMap,Be.spotLightMatrix.value=q.state.spotLightMatrix,Be.spotLightMap.value=q.state.spotLightMap,Be.pointShadowMap.value=q.state.pointShadowMap,Be.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function or(E){if(E.uniformsList===null){const W=E.currentProgram.getUniforms();E.uniformsList=Ts.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function Ai(E,W){const K=S.get(E);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function ar(E,W,K,Z,q){W.isScene!==!0&&(W=mt),k.resetTextureUnits();const ge=W.fog,Me=Z.isMeshStandardMaterial?W.environment:null,Se=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ji,Pe=(Z.isMeshStandardMaterial?se:ne).get(Z.envMap||Me),Fe=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Be=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,dt=!!K.morphAttributes.color;let yt=Nn;Z.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(yt=T.toneMapping);const Et=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,gt=Et!==void 0?Et.length:0,Ae=S.get(Z),ut=I.state.lights;if(De===!0&&(nt===!0||E!==Q)){const Lt=E===Q&&Z.id===$;Re.setState(Z,E,Lt)}let st=!1;Z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ut.state.version||Ae.outputColorSpace!==Se||q.isBatchedMesh&&Ae.batching===!1||!q.isBatchedMesh&&Ae.batching===!0||q.isBatchedMesh&&Ae.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ae.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ae.instancing===!1||!q.isInstancedMesh&&Ae.instancing===!0||q.isSkinnedMesh&&Ae.skinning===!1||!q.isSkinnedMesh&&Ae.skinning===!0||q.isInstancedMesh&&Ae.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ae.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ae.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ae.instancingMorph===!1&&q.morphTexture!==null||Ae.envMap!==Pe||Z.fog===!0&&Ae.fog!==ge||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Re.numPlanes||Ae.numIntersection!==Re.numIntersection)||Ae.vertexAlphas!==Fe||Ae.vertexTangents!==Ve||Ae.morphTargets!==Be||Ae.morphNormals!==Qe||Ae.morphColors!==dt||Ae.toneMapping!==yt||Ae.morphTargetsCount!==gt)&&(st=!0):(st=!0,Ae.__version=Z.version);let Ot=Ae.currentProgram;st===!0&&(Ot=Cn(Z,W,q));let Vn=!1,Xt=!1,hi=!1;const St=Ot.getUniforms(),zt=Ae.uniforms;if(Le.useProgram(Ot.program)&&(Vn=!0,Xt=!0,hi=!0),Z.id!==$&&($=Z.id,Xt=!0),Vn||Q!==E){Le.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(F,"projectionMatrix",E.projectionMatrix),St.setValue(F,"viewMatrix",E.matrixWorldInverse);const Vt=St.map.cameraPosition;Vt!==void 0&&Vt.setValue(F,ze.setFromMatrixPosition(E.matrixWorld)),_t.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&St.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,Xt=!0,hi=!0)}if(Ae.needsLights&&(ut.state.directionalShadowMap.length>0&&St.setValue(F,"directionalShadowMap",ut.state.directionalShadowMap,k),ut.state.spotShadowMap.length>0&&St.setValue(F,"spotShadowMap",ut.state.spotShadowMap,k),ut.state.pointShadowMap.length>0&&St.setValue(F,"pointShadowMap",ut.state.pointShadowMap,k)),q.isSkinnedMesh){St.setOptional(F,q,"bindMatrix"),St.setOptional(F,q,"bindMatrixInverse");const Lt=q.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),St.setValue(F,"boneTexture",Lt.boneTexture,k))}q.isBatchedMesh&&(St.setOptional(F,q,"batchingTexture"),St.setValue(F,"batchingTexture",q._matricesTexture,k),St.setOptional(F,q,"batchingIdTexture"),St.setValue(F,"batchingIdTexture",q._indirectTexture,k),St.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&St.setValue(F,"batchingColorTexture",q._colorsTexture,k));const Jt=K.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&Ke.update(q,K,Ot),(Xt||Ae.receiveShadow!==q.receiveShadow)&&(Ae.receiveShadow=q.receiveShadow,St.setValue(F,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(zt.envMap.value=Pe,zt.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(zt.envMapIntensity.value=W.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=Q_()),Xt&&(St.setValue(F,"toneMappingExposure",T.toneMappingExposure),Ae.needsLights&&kr(zt,hi),ge&&Z.fog===!0&&ke.refreshFogUniforms(zt,ge),ke.refreshMaterialUniforms(zt,Z,He,Ge,I.state.transmissionRenderTarget[E.id]),Ts.upload(F,or(Ae),zt,k)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ts.upload(F,or(Ae),zt,k),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&St.setValue(F,"center",q.center),St.setValue(F,"modelViewMatrix",q.modelViewMatrix),St.setValue(F,"normalMatrix",q.normalMatrix),St.setValue(F,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Lt=Z.uniformsGroups;for(let Vt=0,wi=Lt.length;Vt<wi;Vt++){const ln=Lt[Vt];le.update(ln,Ot),le.bind(ln,Ot)}}return Ot}function kr(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function an(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,W,K){const Z=S.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),S.get(E.texture).__webglTexture=W,S.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,W){const K=S.get(E);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};const dn=F.createFramebuffer();this.setRenderTarget=function(E,W=0,K=0){G=E,A=W,X=K;let Z=null,q=!1,ge=!1;if(E){const Se=S.get(E);if(Se.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(F.FRAMEBUFFER,Se.__webglFramebuffer),B.copy(E.viewport),H.copy(E.scissor),ee=E.scissorTest,Le.viewport(B),Le.scissor(H),Le.setScissorTest(ee),$=-1;return}else if(Se.__webglFramebuffer===void 0)k.setupRenderTarget(E);else if(Se.__hasExternalTextures)k.rebindTextures(E,S.get(E.texture).__webglTexture,S.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(Se.__boundDepthTexture!==Ve){if(Ve!==null&&S.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ge=!0);const Fe=S.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[W])?Z=Fe[W][K]:Z=Fe[W],q=!0):E.samples>0&&k.useMultisampledRTT(E)===!1?Z=S.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?Z=Fe[K]:Z=Fe,B.copy(E.viewport),H.copy(E.scissor),ee=E.scissorTest}else B.copy(ie).multiplyScalar(He).floor(),H.copy(oe).multiplyScalar(He).floor(),ee=Ce;if(K!==0&&(Z=dn),Le.bindFramebuffer(F.FRAMEBUFFER,Z)&&Le.drawBuffers(E,Z),Le.viewport(B),Le.scissor(H),Le.setScissorTest(ee),q){const Se=S.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Se.__webglTexture,K)}else if(ge){const Se=W;for(let Pe=0;Pe<E.textures.length;Pe++){const Fe=S.get(E.textures[Pe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pe,Fe.__webglTexture,K,Se)}}else if(E!==null&&K!==0){const Se=S.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Se.__webglTexture,K)}$=-1},this.readRenderTargetPixels=function(E,W,K,Z,q,ge,Me,Se=0){if(!(E&&E.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){Le.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Fe=E.textures[Se],Ve=Fe.format,Be=Fe.type;if(!_t.textureFormatReadable(Ve)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Be)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-Z&&K>=0&&K<=E.height-q&&(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se),F.readPixels(W,K,Z,q,fe.convert(Ve),fe.convert(Be),ge))}finally{const Fe=G!==null?S.get(G).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,W,K,Z,q,ge,Me,Se=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe)if(W>=0&&W<=E.width-Z&&K>=0&&K<=E.height-q){Le.bindFramebuffer(F.FRAMEBUFFER,Pe);const Fe=E.textures[Se],Ve=Fe.format,Be=Fe.type;if(!_t.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se),F.readPixels(W,K,Z,q,fe.convert(Ve),fe.convert(Be),0);const dt=G!==null?S.get(G).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,dt);const yt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Eh(F,yt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.deleteBuffer(Qe),F.deleteSync(yt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,W=null,K=0){const Z=Math.pow(2,-K),q=Math.floor(E.image.width*Z),ge=Math.floor(E.image.height*Z),Me=W!==null?W.x:0,Se=W!==null?W.y:0;k.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Me,Se,q,ge),Le.unbindTexture()};const ui=F.createFramebuffer(),lr=F.createFramebuffer();this.copyTextureToTexture=function(E,W,K=null,Z=null,q=0,ge=null){ge===null&&(q!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=q,q=0):ge=0);let Me,Se,Pe,Fe,Ve,Be,Qe,dt,yt;const Et=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(K!==null)Me=K.max.x-K.min.x,Se=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,Fe=K.min.x,Ve=K.min.y,Be=K.isBox3?K.min.z:0;else{const Jt=Math.pow(2,-q);Me=Math.floor(Et.width*Jt),Se=Math.floor(Et.height*Jt),E.isDataArrayTexture?Pe=Et.depth:E.isData3DTexture?Pe=Math.floor(Et.depth*Jt):Pe=1,Fe=0,Ve=0,Be=0}Z!==null?(Qe=Z.x,dt=Z.y,yt=Z.z):(Qe=0,dt=0,yt=0);const gt=fe.convert(W.format),Ae=fe.convert(W.type);let ut;W.isData3DTexture?(k.setTexture3D(W,0),ut=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(k.setTexture2DArray(W,0),ut=F.TEXTURE_2D_ARRAY):(k.setTexture2D(W,0),ut=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const st=F.getParameter(F.UNPACK_ROW_LENGTH),Ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Vn=F.getParameter(F.UNPACK_SKIP_PIXELS),Xt=F.getParameter(F.UNPACK_SKIP_ROWS),hi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Be);const St=E.isDataArrayTexture||E.isData3DTexture,zt=W.isDataArrayTexture||W.isData3DTexture;if(E.isDepthTexture){const Jt=S.get(E),Lt=S.get(W),Vt=S.get(Jt.__renderTarget),wi=S.get(Lt.__renderTarget);Le.bindFramebuffer(F.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let ln=0;ln<Pe;ln++)St&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(E).__webglTexture,q,Be+ln),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(W).__webglTexture,ge,yt+ln)),F.blitFramebuffer(Fe,Ve,Me,Se,Qe,dt,Me,Se,F.DEPTH_BUFFER_BIT,F.NEAREST);Le.bindFramebuffer(F.READ_FRAMEBUFFER,null),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||S.has(E)){const Jt=S.get(E),Lt=S.get(W);Le.bindFramebuffer(F.READ_FRAMEBUFFER,ui),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,lr);for(let Vt=0;Vt<Pe;Vt++)St?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Jt.__webglTexture,q,Be+Vt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Jt.__webglTexture,q),zt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.__webglTexture,ge,yt+Vt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Lt.__webglTexture,ge),q!==0?F.blitFramebuffer(Fe,Ve,Me,Se,Qe,dt,Me,Se,F.COLOR_BUFFER_BIT,F.NEAREST):zt?F.copyTexSubImage3D(ut,ge,Qe,dt,yt+Vt,Fe,Ve,Me,Se):F.copyTexSubImage2D(ut,ge,Qe,dt,Fe,Ve,Me,Se);Le.bindFramebuffer(F.READ_FRAMEBUFFER,null),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else zt?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(ut,ge,Qe,dt,yt,Me,Se,Pe,gt,Ae,Et.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(ut,ge,Qe,dt,yt,Me,Se,Pe,gt,Et.data):F.texSubImage3D(ut,ge,Qe,dt,yt,Me,Se,Pe,gt,Ae,Et):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,Qe,dt,Me,Se,gt,Ae,Et.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,Qe,dt,Et.width,Et.height,gt,Et.data):F.texSubImage2D(F.TEXTURE_2D,ge,Qe,dt,Me,Se,gt,Ae,Et);F.pixelStorei(F.UNPACK_ROW_LENGTH,st),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Vn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hi),ge===0&&W.generateMipmaps&&F.generateMipmap(ut),Le.unbindTexture()},this.initRenderTarget=function(E){S.get(E).__webglFramebuffer===void 0&&k.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?k.setTextureCube(E,0):E.isData3DTexture?k.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?k.setTexture2DArray(E,0):k.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){A=0,X=0,G=null,Le.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const bs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const t0=new ka(-1,1,1,-1,0,1);class n0 extends fn{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}}const i0=new n0;class uu{constructor(e){this._mesh=new Sn(i0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,t0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class r0 extends Vr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ls.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new uu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _c extends Vr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class s0 extends Vr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class o0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new we);this._width=n.width,this._height=n.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new r0(bs),this.copyPass.material.blending=In,this.clock=new rd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}_c!==void 0&&(a instanceof _c?n=!0:a instanceof s0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class a0 extends Vr{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new rt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const l0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class er extends Vr{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(s,a,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new nn(s,a,{type:hn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new nn(s,a,{type:hn});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}const l=l0;this.highPassUniforms=Ls.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new we(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ls.clone(bs.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:bs.vertexShader,fragmentShader:bs.fragmentShader,premultipliedAlpha:!0,blending:Rs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new rt,this._oldClearAlpha=1,this._basic=new Os,this._fsQuad=new uu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new we(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=er.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=er.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}er.BlurDirectionX=new we(1,0);er.BlurDirectionY=new we(0,1);var Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ro={},vc;function c0(){return vc||(vc=1,(function(){var i;function e(o){var h=0;return function(){return h<o.length?{done:!1,value:o[h++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,p){return o==Array.prototype||o==Object.prototype||(o[h]=p.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Us=="object"&&Us];for(var h=0;h<o.length;++h){var p=o[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(o,h){if(h)e:{var p=r;o=o.split(".");for(var M=0;M<o.length-1;M++){var C=o[M];if(!(C in p))break e;p=p[C]}o=o[o.length-1],M=p[o],h=h(M),h!=M&&h!=null&&t(p,o,{configurable:!0,writable:!0,value:h})}}s("Symbol",function(o){function h(L){if(this instanceof h)throw new TypeError("Symbol is not a constructor");return new p(M+(L||"")+"_"+C++,L)}function p(L,D){this.h=L,t(this,"description",{configurable:!0,writable:!0,value:D})}if(o)return o;p.prototype.toString=function(){return this.h};var M="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",C=0;return h}),s("Symbol.iterator",function(o){if(o)return o;o=Symbol("Symbol.iterator");for(var h="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),p=0;p<h.length;p++){var M=r[h[p]];typeof M=="function"&&typeof M.prototype[o]!="function"&&t(M.prototype,o,{configurable:!0,writable:!0,value:function(){return a(e(this))}})}return o});function a(o){return o={next:o},o[Symbol.iterator]=function(){return this},o}function l(o){var h=typeof Symbol<"u"&&Symbol.iterator&&o[Symbol.iterator];return h?h.call(o):{next:e(o)}}function c(o){if(!(o instanceof Array)){o=l(o);for(var h,p=[];!(h=o.next()).done;)p.push(h.value);o=p}return o}var u=typeof Object.assign=="function"?Object.assign:function(o,h){for(var p=1;p<arguments.length;p++){var M=arguments[p];if(M)for(var C in M)Object.prototype.hasOwnProperty.call(M,C)&&(o[C]=M[C])}return o};s("Object.assign",function(o){return o||u});var f=typeof Object.create=="function"?Object.create:function(o){function h(){}return h.prototype=o,new h},d;if(typeof Object.setPrototypeOf=="function")d=Object.setPrototypeOf;else{var m;e:{var _={a:!0},y={};try{y.__proto__=_,m=y.a;break e}catch{}m=!1}d=m?function(o,h){if(o.__proto__=h,o.__proto__!==h)throw new TypeError(o+" is not extensible");return o}:null}var b=d;function v(o,h){if(o.prototype=f(h.prototype),o.prototype.constructor=o,b)b(o,h);else for(var p in h)if(p!="prototype")if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(h,p);M&&Object.defineProperty(o,p,M)}else o[p]=h[p];o.ya=h.prototype}function g(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function U(o){if(o.m)throw new TypeError("Generator is already running");o.m=!0}g.prototype.u=function(o){this.i=o};function P(o,h){o.l={ma:h,na:!0},o.h=o.s||o.v}g.prototype.return=function(o){this.l={return:o},this.h=this.v};function w(o,h,p){return o.h=p,{value:h}}function I(o){this.h=new g,this.i=o}function O(o,h){U(o.h);var p=o.h.j;return p?N(o,"return"in p?p.return:function(M){return{value:M,done:!0}},h,o.h.return):(o.h.return(h),j(o))}function N(o,h,p,M){try{var C=h.call(o.h.j,p);if(!(C instanceof Object))throw new TypeError("Iterator result "+C+" is not an object");if(!C.done)return o.h.m=!1,C;var L=C.value}catch(D){return o.h.j=null,P(o.h,D),j(o)}return o.h.j=null,M.call(o.h,L),j(o)}function j(o){for(;o.h.h;)try{var h=o.i(o.h);if(h)return o.h.m=!1,{value:h.value,done:!1}}catch(p){o.h.i=void 0,P(o.h,p)}if(o.h.m=!1,o.h.l){if(h=o.h.l,o.h.l=null,h.na)throw h.ma;return{value:h.return,done:!0}}return{value:void 0,done:!0}}function T(o){this.next=function(h){return U(o.h),o.h.j?h=N(o,o.h.j.next,h,o.h.u):(o.h.u(h),h=j(o)),h},this.throw=function(h){return U(o.h),o.h.j?h=N(o,o.h.j.throw,h,o.h.u):(P(o.h,h),h=j(o)),h},this.return=function(h){return O(o,h)},this[Symbol.iterator]=function(){return this}}function x(o){function h(M){return o.next(M)}function p(M){return o.throw(M)}return new Promise(function(M,C){function L(D){D.done?M(D.value):Promise.resolve(D.value).then(h,p).then(L,C)}L(o.next())})}function A(o){return x(new T(new I(o)))}s("Promise",function(o){function h(D){this.i=0,this.j=void 0,this.h=[],this.u=!1;var V=this.l();try{D(V.resolve,V.reject)}catch(J){V.reject(J)}}function p(){this.h=null}function M(D){return D instanceof h?D:new h(function(V){V(D)})}if(o)return o;p.prototype.i=function(D){if(this.h==null){this.h=[];var V=this;this.j(function(){V.m()})}this.h.push(D)};var C=r.setTimeout;p.prototype.j=function(D){C(D,0)},p.prototype.m=function(){for(;this.h&&this.h.length;){var D=this.h;this.h=[];for(var V=0;V<D.length;++V){var J=D[V];D[V]=null;try{J()}catch(ce){this.l(ce)}}}this.h=null},p.prototype.l=function(D){this.j(function(){throw D})},h.prototype.l=function(){function D(ce){return function(ve){J||(J=!0,ce.call(V,ve))}}var V=this,J=!1;return{resolve:D(this.I),reject:D(this.m)}},h.prototype.I=function(D){if(D===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(D instanceof h)this.L(D);else{e:switch(typeof D){case"object":var V=D!=null;break e;case"function":V=!0;break e;default:V=!1}V?this.F(D):this.s(D)}},h.prototype.F=function(D){var V=void 0;try{V=D.then}catch(J){this.m(J);return}typeof V=="function"?this.M(V,D):this.s(D)},h.prototype.m=function(D){this.v(2,D)},h.prototype.s=function(D){this.v(1,D)},h.prototype.v=function(D,V){if(this.i!=0)throw Error("Cannot settle("+D+", "+V+"): Promise already settled in state"+this.i);this.i=D,this.j=V,this.i===2&&this.K(),this.H()},h.prototype.K=function(){var D=this;C(function(){if(D.D()){var V=r.console;typeof V<"u"&&V.error(D.j)}},1)},h.prototype.D=function(){if(this.u)return!1;var D=r.CustomEvent,V=r.Event,J=r.dispatchEvent;return typeof J>"u"?!0:(typeof D=="function"?D=new D("unhandledrejection",{cancelable:!0}):typeof V=="function"?D=new V("unhandledrejection",{cancelable:!0}):(D=r.document.createEvent("CustomEvent"),D.initCustomEvent("unhandledrejection",!1,!0,D)),D.promise=this,D.reason=this.j,J(D))},h.prototype.H=function(){if(this.h!=null){for(var D=0;D<this.h.length;++D)L.i(this.h[D]);this.h=null}};var L=new p;return h.prototype.L=function(D){var V=this.l();D.T(V.resolve,V.reject)},h.prototype.M=function(D,V){var J=this.l();try{D.call(V,J.resolve,J.reject)}catch(ce){J.reject(ce)}},h.prototype.then=function(D,V){function J(Oe,Te){return typeof Oe=="function"?function(Ye){try{ce(Oe(Ye))}catch(tt){ve(tt)}}:Te}var ce,ve,Xe=new h(function(Oe,Te){ce=Oe,ve=Te});return this.T(J(D,ce),J(V,ve)),Xe},h.prototype.catch=function(D){return this.then(void 0,D)},h.prototype.T=function(D,V){function J(){switch(ce.i){case 1:D(ce.j);break;case 2:V(ce.j);break;default:throw Error("Unexpected state: "+ce.i)}}var ce=this;this.h==null?L.i(J):this.h.push(J),this.u=!0},h.resolve=M,h.reject=function(D){return new h(function(V,J){J(D)})},h.race=function(D){return new h(function(V,J){for(var ce=l(D),ve=ce.next();!ve.done;ve=ce.next())M(ve.value).T(V,J)})},h.all=function(D){var V=l(D),J=V.next();return J.done?M([]):new h(function(ce,ve){function Xe(Ye){return function(tt){Oe[Ye]=tt,Te--,Te==0&&ce(Oe)}}var Oe=[],Te=0;do Oe.push(void 0),Te++,M(J.value).T(Xe(Oe.length-1),ve),J=V.next();while(!J.done)})},h});function X(o,h){o instanceof String&&(o+="");var p=0,M=!1,C={next:function(){if(!M&&p<o.length){var L=p++;return{value:h(L,o[L]),done:!1}}return M=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.keys",function(o){return o||function(){return X(this,function(h){return h})}}),s("Array.prototype.fill",function(o){return o||function(h,p,M){var C=this.length||0;for(0>p&&(p=Math.max(0,C+p)),(M==null||M>C)&&(M=C),M=Number(M),0>M&&(M=Math.max(0,C+M)),p=Number(p||0);p<M;p++)this[p]=h;return this}});function G(o){return o||Array.prototype.fill}s("Int8Array.prototype.fill",G),s("Uint8Array.prototype.fill",G),s("Uint8ClampedArray.prototype.fill",G),s("Int16Array.prototype.fill",G),s("Uint16Array.prototype.fill",G),s("Int32Array.prototype.fill",G),s("Uint32Array.prototype.fill",G),s("Float32Array.prototype.fill",G),s("Float64Array.prototype.fill",G),s("Object.is",function(o){return o||function(h,p){return h===p?h!==0||1/h===1/p:h!==h&&p!==p}}),s("Array.prototype.includes",function(o){return o||function(h,p){var M=this;M instanceof String&&(M=String(M));var C=M.length;for(p=p||0,0>p&&(p=Math.max(p+C,0));p<C;p++){var L=M[p];if(L===h||Object.is(L,h))return!0}return!1}}),s("String.prototype.includes",function(o){return o||function(h,p){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(h instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(h,p||0)!==-1}});var $=this||self;function Q(o,h){o=o.split(".");var p=$;o[0]in p||typeof p.execScript>"u"||p.execScript("var "+o[0]);for(var M;o.length&&(M=o.shift());)o.length||h===void 0?p[M]&&p[M]!==Object.prototype[M]?p=p[M]:p=p[M]={}:p[M]=h}function B(o){var h;e:{if((h=$.navigator)&&(h=h.userAgent))break e;h=""}return h.indexOf(o)!=-1}var H=Array.prototype.map?function(o,h){return Array.prototype.map.call(o,h,void 0)}:function(o,h){for(var p=o.length,M=Array(p),C=typeof o=="string"?o.split(""):o,L=0;L<p;L++)L in C&&(M[L]=h.call(void 0,C[L],L,o));return M},ee={},ue=null;function he(o){var h=o.length,p=3*h/4;p%3?p=Math.floor(p):"=.".indexOf(o[h-1])!=-1&&(p="=.".indexOf(o[h-2])!=-1?p-2:p-1);var M=new Uint8Array(p),C=0;return Ee(o,function(L){M[C++]=L}),C!==p?M.subarray(0,C):M}function Ee(o,h){function p(J){for(;M<o.length;){var ce=o.charAt(M++),ve=ue[ce];if(ve!=null)return ve;if(!/^[\s\xa0]*$/.test(ce))throw Error("Unknown base64 encoding at char: "+ce)}return J}Ge();for(var M=0;;){var C=p(-1),L=p(0),D=p(64),V=p(64);if(V===64&&C===-1)break;h(C<<2|L>>4),D!=64&&(h(L<<4&240|D>>2),V!=64&&h(D<<6&192|V))}}function Ge(){if(!ue){ue={};for(var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],p=0;5>p;p++){var M=o.concat(h[p].split(""));ee[p]=M;for(var C=0;C<M.length;C++){var L=M[C];ue[L]===void 0&&(ue[L]=C)}}}}var He=typeof Uint8Array<"u",pt=!(B("Trident")||B("MSIE"))&&typeof $.btoa=="function";function ct(o){if(!pt){var h;h===void 0&&(h=0),Ge(),h=ee[h];for(var p=Array(Math.floor(o.length/3)),M=h[64]||"",C=0,L=0;C<o.length-2;C+=3){var D=o[C],V=o[C+1],J=o[C+2],ce=h[D>>2];D=h[(D&3)<<4|V>>4],V=h[(V&15)<<2|J>>6],J=h[J&63],p[L++]=ce+D+V+J}switch(ce=0,J=M,o.length-C){case 2:ce=o[C+1],J=h[(ce&15)<<2]||M;case 1:o=o[C],p[L]=h[o>>2]+h[(o&3)<<4|ce>>4]+J+M}return p.join("")}for(h="";10240<o.length;)h+=String.fromCharCode.apply(null,o.subarray(0,10240)),o=o.subarray(10240);return h+=String.fromCharCode.apply(null,o),btoa(h)}var ie=RegExp("[-_.]","g");function oe(o){switch(o){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Ce(o){if(!pt)return he(o);ie.test(o)&&(o=o.replace(ie,oe)),o=atob(o);for(var h=new Uint8Array(o.length),p=0;p<o.length;p++)h[p]=o.charCodeAt(p);return h}var Ze;function De(){return Ze||(Ze=new Uint8Array(0))}var nt={},Dt=typeof Uint8Array.prototype.slice=="function",ze=0,je=0;function mt(o){var h=0>o;o=Math.abs(o);var p=o>>>0;o=Math.floor((o-p)/4294967296),h&&(p=l(At(p,o)),h=p.next().value,o=p.next().value,p=h),ze=p>>>0,je=o>>>0}var Je=typeof BigInt=="function";function At(o,h){return h=~h,o?o=~o+1:h+=1,[o,h]}function F(o,h){this.i=o>>>0,this.h=h>>>0}function wt(o){if(!o)return at||(at=new F(0,0));if(!/^-?\d+$/.test(o))return null;if(16>o.length)mt(Number(o));else if(Je)o=BigInt(o),ze=Number(o&BigInt(4294967295))>>>0,je=Number(o>>BigInt(32)&BigInt(4294967295));else{var h=+(o[0]==="-");je=ze=0;for(var p=o.length,M=h,C=(p-h)%6+h;C<=p;M=C,C+=6)M=Number(o.slice(M,C)),je*=1e6,ze=1e6*ze+M,4294967296<=ze&&(je+=ze/4294967296|0,ze%=4294967296);h&&(h=l(At(ze,je)),o=h.next().value,h=h.next().value,ze=o,je=h)}return new F(ze,je)}var at;function _t(o,h){return Error("Invalid wire type: "+o+" (at position "+h+")")}function Le(){return Error("Failed to read varint, encoding is invalid.")}function R(o,h){return Error("Tried to read past the end of the data "+h+" > "+o)}function S(){throw Error("Invalid UTF8")}function k(o,h){return h=String.fromCharCode.apply(null,h),o==null?h:o+h}var ne=void 0,se,te=typeof TextDecoder<"u",Ie,_e=typeof TextEncoder<"u",Ue;function ke(o){if(o!==nt)throw Error("illegal external caller")}function ae(o,h){if(ke(h),this.V=o,o!=null&&o.length===0)throw Error("ByteString should be constructed with non-empty values")}function pe(){return Ue||(Ue=new ae(null,nt))}function Re(o){ke(nt);var h=o.V;return h=h==null||He&&h!=null&&h instanceof Uint8Array?h:typeof h=="string"?Ce(h):null,h==null?h:o.V=h}function Ne(o){if(typeof o=="string")return{buffer:Ce(o),C:!1};if(Array.isArray(o))return{buffer:new Uint8Array(o),C:!1};if(o.constructor===Uint8Array)return{buffer:o,C:!1};if(o.constructor===ArrayBuffer)return{buffer:new Uint8Array(o),C:!1};if(o.constructor===ae)return{buffer:Re(o)||De(),C:!0};if(o instanceof Uint8Array)return{buffer:new Uint8Array(o.buffer,o.byteOffset,o.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function me(o,h){this.i=null,this.m=!1,this.h=this.j=this.l=0,Ke(this,o,h)}function Ke(o,h,p){p=p===void 0?{}:p,o.S=p.S===void 0?!1:p.S,h&&(h=Ne(h),o.i=h.buffer,o.m=h.C,o.l=0,o.j=o.i.length,o.h=o.l)}me.prototype.reset=function(){this.h=this.l};function z(o,h){if(o.h=h,h>o.j)throw R(o.j,h)}function xe(o){var h=o.i,p=o.h,M=h[p++],C=M&127;if(M&128&&(M=h[p++],C|=(M&127)<<7,M&128&&(M=h[p++],C|=(M&127)<<14,M&128&&(M=h[p++],C|=(M&127)<<21,M&128&&(M=h[p++],C|=M<<28,M&128&&h[p++]&128&&h[p++]&128&&h[p++]&128&&h[p++]&128&&h[p++]&128)))))throw Le();return z(o,p),C}function fe(o,h){if(0>h)throw Error("Tried to read a negative byte length: "+h);var p=o.h,M=p+h;if(M>o.j)throw R(h,o.j-p);return o.h=M,p}var be=[];function le(){this.h=[]}le.prototype.length=function(){return this.h.length},le.prototype.end=function(){var o=this.h;return this.h=[],o};function re(o,h,p){for(;0<p||127<h;)o.h.push(h&127|128),h=(h>>>7|p<<25)>>>0,p>>>=7;o.h.push(h)}function de(o,h){for(;127<h;)o.h.push(h&127|128),h>>>=7;o.h.push(h)}function We(o,h){if(be.length){var p=be.pop();Ke(p,o,h),o=p}else o=new me(o,h);this.h=o,this.j=this.h.h,this.i=this.l=-1,this.setOptions(h)}We.prototype.setOptions=function(o){o=o===void 0?{}:o,this.ca=o.ca===void 0?!1:o.ca},We.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function vt(o){var h=o.h;if(h.h==h.j)return!1;o.j=o.h.h;var p=xe(o.h)>>>0;if(h=p>>>3,p&=7,!(0<=p&&5>=p))throw _t(p,o.j);if(1>h)throw Error("Invalid field number: "+h+" (at position "+o.j+")");return o.l=h,o.i=p,!0}function ot(o){switch(o.i){case 0:if(o.i!=0)ot(o);else e:{o=o.h;for(var h=o.h,p=h+10,M=o.i;h<p;)if((M[h++]&128)===0){z(o,h);break e}throw Le()}break;case 1:o=o.h,z(o,o.h+8);break;case 2:o.i!=2?ot(o):(h=xe(o.h)>>>0,o=o.h,z(o,o.h+h));break;case 5:o=o.h,z(o,o.h+4);break;case 3:h=o.l;do{if(!vt(o))throw Error("Unmatched start-group tag: stream EOF");if(o.i==4){if(o.l!=h)throw Error("Unmatched end-group tag");break}ot(o)}while(!0);break;default:throw _t(o.i,o.j)}}var Kt=[];function Mn(){this.j=[],this.i=0,this.h=new le}function Zn(o,h){h.length!==0&&(o.j.push(h),o.i+=h.length)}function Gr(o,h){if(h=h.R){Zn(o,o.h.end());for(var p=0;p<h.length;p++)Zn(o,Re(h[p])||De())}}var on=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function zn(o,h){return on?o[on]|=h:o.A!==void 0?o.A|=h:(Object.defineProperties(o,{A:{value:h,configurable:!0,writable:!0,enumerable:!1}}),h)}function sr(o,h){on?o[on]&&(o[on]&=~h):o.A!==void 0&&(o.A&=~h)}function bt(o){var h;return on?h=o[on]:h=o.A,h??0}function Ft(o,h){on?o[on]=h:o.A!==void 0?o.A=h:Object.defineProperties(o,{A:{value:h,configurable:!0,writable:!0,enumerable:!1}})}function ai(o){return zn(o,1),o}function Hr(o,h){Ft(h,(o|0)&-51)}function li(o,h){Ft(h,(o|18)&-41)}var Kn={};function ci(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)&&o.constructor===Object}var Cn,or=[];Ft(or,23),Cn=Object.freeze(or);function Ai(o){if(bt(o.o)&2)throw Error("Cannot mutate an immutable Message")}function ar(o){var h=o.length;(h=h?o[h-1]:void 0)&&ci(h)?h.g=1:(h={},o.push((h.g=1,h)))}function kr(o){var h=o.i+o.G;return o.B||(o.B=o.o[h]={})}function an(o,h){return h===-1?null:h>=o.i?o.B?o.B[h]:void 0:o.o[h+o.G]}function dn(o,h,p,M){Ai(o),ui(o,h,p,M)}function ui(o,h,p,M){o.j&&(o.j=void 0),h>=o.i||M?kr(o)[h]=p:(o.o[h+o.G]=p,(o=o.B)&&h in o&&delete o[h])}function lr(o,h,p,M){var C=an(o,h);Array.isArray(C)||(C=Cn);var L=bt(C);if(L&1||ai(C),M)L&2||zn(C,2),p&1||Object.freeze(C);else{M=!(p&2);var D=L&2;p&1||!D?M&&L&16&&!D&&sr(C,16):(C=ai(Array.prototype.slice.call(C)),ui(o,h,C))}return C}function E(o,h){var p=an(o,h),M=p==null?p:typeof p=="number"||p==="NaN"||p==="Infinity"||p==="-Infinity"?Number(p):void 0;return M!=null&&M!==p&&ui(o,h,M),M}function W(o,h,p,M,C){o.h||(o.h={});var L=o.h[p],D=lr(o,p,3,C);if(!L){var V=D;L=[];var J=!!(bt(o.o)&16);D=!!(bt(V)&2);var ce=V;!C&&D&&(V=Array.prototype.slice.call(V));for(var ve=D,Xe=0;Xe<V.length;Xe++){var Oe=V[Xe],Te=h,Ye=!1;if(Ye=Ye===void 0?!1:Ye,Oe=Array.isArray(Oe)?new Te(Oe):Ye?new Te:void 0,Oe!==void 0){Te=Oe.o;var tt=Ye=bt(Te);D&&(tt|=2),J&&(tt|=16),tt!=Ye&&Ft(Te,tt),Te=tt,ve=ve||!!(2&Te),L.push(Oe)}}return o.h[p]=L,J=bt(V),h=J|33,h=ve?h&-9:h|8,J!=h&&(ve=V,Object.isFrozen(ve)&&(ve=Array.prototype.slice.call(ve)),Ft(ve,h),V=ve),ce!==V&&ui(o,p,V),(C||M&&D)&&zn(L,2),M&&Object.freeze(L),L}return C||(C=Object.isFrozen(L),M&&!C?Object.freeze(L):!M&&C&&(L=Array.prototype.slice.call(L),o.h[p]=L)),L}function K(o,h,p){var M=!!(bt(o.o)&2);if(h=W(o,h,p,M,M),o=lr(o,p,3,M),!(M||bt(o)&8)){for(M=0;M<h.length;M++){if(p=h[M],bt(p.o)&2){var C=gt(p,!1);C.j=p}else C=p;p!==C&&(h[M]=C,o[M]=C.o)}zn(o,8)}return h}function Z(o,h,p){if(p!=null&&typeof p!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof p+": "+p);dn(o,h,p)}function q(o,h,p,M,C){Ai(o);var L=W(o,p,h,!1,!1);return p=M??new p,o=lr(o,h,2,!1),C!=null?(L.splice(C,0,p),o.splice(C,0,p.o)):(L.push(p),o.push(p.o)),p.C()&&sr(o,8),p}function ge(o,h){return o??h}function Me(o,h,p){return p=p===void 0?0:p,ge(E(o,h),p)}var Se;function Pe(o){switch(typeof o){case"number":return isFinite(o)?o:String(o);case"object":if(o)if(Array.isArray(o)){if((bt(o)&128)!==0)return o=Array.prototype.slice.call(o),ar(o),o}else{if(He&&o!=null&&o instanceof Uint8Array)return ct(o);if(o instanceof ae){var h=o.V;return h==null?"":typeof h=="string"?h:o.V=ct(h)}}}return o}function Fe(o,h,p,M){if(o!=null){if(Array.isArray(o))o=Ve(o,h,p,M!==void 0);else if(ci(o)){var C={},L;for(L in o)C[L]=Fe(o[L],h,p,M);o=C}else o=h(o,M);return o}}function Ve(o,h,p,M){var C=bt(o);M=M?!!(C&16):void 0,o=Array.prototype.slice.call(o);for(var L=0;L<o.length;L++)o[L]=Fe(o[L],h,p,M);return p(C,o),o}function Be(o){return o.ja===Kn?o.toJSON():Pe(o)}function Qe(o,h){o&128&&ar(h)}function dt(o,h,p){if(p=p===void 0?li:p,o!=null){if(He&&o instanceof Uint8Array)return o.length?new ae(new Uint8Array(o),nt):pe();if(Array.isArray(o)){var M=bt(o);return M&2?o:h&&!(M&32)&&(M&16||M===0)?(Ft(o,M|2),o):(o=Ve(o,dt,M&4?li:p,!0),h=bt(o),h&4&&h&2&&Object.freeze(o),o)}return o.ja===Kn?Et(o):o}}function yt(o,h,p,M,C,L,D){if(o=o.h&&o.h[p]){if(M=bt(o),M&2?M=o:(L=H(o,Et),li(M,L),Object.freeze(L),M=L),Ai(h),D=M==null?Cn:ai([]),M!=null){for(L=!!M.length,o=0;o<M.length;o++){var V=M[o];L=L&&!(bt(V.o)&2),D[o]=V.o}L=(L?8:0)|1,o=bt(D),(o&L)!==L&&(Object.isFrozen(D)&&(D=Array.prototype.slice.call(D)),Ft(D,o|L)),h.h||(h.h={}),h.h[p]=M}else h.h&&(h.h[p]=void 0);ui(h,p,D,C)}else dn(h,p,dt(M,L,D),C)}function Et(o){return bt(o.o)&2||(o=gt(o,!0),zn(o.o,2)),o}function gt(o,h){var p=o.o,M=[];zn(M,16);var C=o.constructor.h;if(C&&M.push(C),C=o.B,C){M.length=p.length,M.fill(void 0,M.length,p.length);var L={};M[M.length-1]=L}(bt(p)&128)!==0&&ar(M),h=h||o.C()?li:Hr,L=o.constructor,Se=M,M=new L(M),Se=void 0,o.R&&(M.R=o.R.slice()),L=!!(bt(p)&16);for(var D=C?p.length-1:p.length,V=0;V<D;V++)yt(o,M,V-o.G,p[V],!1,L,h);if(C)for(var J in C)yt(o,M,+J,C[J],!0,L,h);return M}function Ae(o,h,p){o==null&&(o=Se),Se=void 0;var M=this.constructor.i||0,C=0<M,L=this.constructor.h,D=!1;if(o==null){o=L?[L]:[];var V=48,J=!0;C&&(M=0,V|=128),Ft(o,V)}else{if(!Array.isArray(o)||L&&L!==o[0])throw Error();var ce=V=zn(o,0);if((J=(16&ce)!==0)&&((D=(32&ce)!==0)||(ce|=32)),C){if(128&ce)M=0;else if(0<o.length){var ve=o[o.length-1];if(ci(ve)&&"g"in ve){M=0,ce|=128,delete ve.g;var Xe=!0,Oe;for(Oe in ve){Xe=!1;break}Xe&&o.pop()}}}else if(128&ce)throw Error();V!==ce&&Ft(o,ce)}this.G=(L?0:-1)-M,this.h=void 0,this.o=o;e:{if(L=this.o.length,M=L-1,L&&(L=this.o[M],ci(L))){this.B=L,this.i=M-this.G;break e}h!==void 0&&-1<h?(this.i=Math.max(h,M+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!C&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(p){h=J&&!D&&!0,C=this.i;var Te;for(J=0;J<p.length;J++)D=p[J],D<C?(D+=this.G,(M=o[D])?ut(M,h):o[D]=Cn):(Te||(Te=kr(this)),(M=Te[D])?ut(M,h):Te[D]=Cn)}}Ae.prototype.toJSON=function(){return Ve(this.o,Be,Qe)},Ae.prototype.C=function(){return!!(bt(this.o)&2)};function ut(o,h){if(Array.isArray(o)){var p=bt(o),M=1;!h||p&2||(M|=16),(p&M)!==M&&Ft(o,p|M)}}Ae.prototype.ja=Kn,Ae.prototype.toString=function(){return this.o.toString()};function st(o,h,p){if(p){var M={},C;for(C in p){var L=p[C],D=L.qa;D||(M.J=L.wa||L.oa.W,L.ia?(M.aa=Vt(L.ia),D=(function(V){return function(J,ce,ve){return V.J(J,ce,ve,V.aa)}})(M)):L.ka?(M.Z=wi(L.da.P,L.ka),D=(function(V){return function(J,ce,ve){return V.J(J,ce,ve,V.Z)}})(M)):D=M.J,L.qa=D),D(h,o,L.da),M={J:M.J,aa:M.aa,Z:M.Z}}}Gr(h,o)}var Ot=Symbol();function Vn(o,h,p){return o[Ot]||(o[Ot]=function(M,C){return h(M,C,p)})}function Xt(o){var h=o[Ot];if(!h){var p=Hs(o);h=function(M,C){return Ka(M,C,p)},o[Ot]=h}return h}function hi(o){var h=o.ia;if(h)return Xt(h);if(h=o.va)return Vn(o.da.P,h,o.ka)}function St(o){var h=hi(o),p=o.da,M=o.oa.U;return h?function(C,L){return M(C,L,p,h)}:function(C,L){return M(C,L,p)}}function zt(o,h){var p=o[h];return typeof p=="function"&&p.length===0&&(p=p(),o[h]=p),Array.isArray(p)&&(cr in p||ln in p||0<p.length&&typeof p[0]=="function")?p:void 0}function Jt(o,h,p,M,C,L){h.P=o[0];var D=1;if(o.length>D&&typeof o[D]!="number"){var V=o[D++];p(h,V)}for(;D<o.length;){p=o[D++];for(var J=D+1;J<o.length&&typeof o[J]!="number";)J++;switch(V=o[D++],J-=D,J){case 0:M(h,p,V);break;case 1:(J=zt(o,D))?(D++,C(h,p,V,J)):M(h,p,V,o[D++]);break;case 2:J=D++,J=zt(o,J),C(h,p,V,J,o[D++]);break;case 3:L(h,p,V,o[D++],o[D++],o[D++]);break;case 4:L(h,p,V,o[D++],o[D++],o[D++],o[D++]);break;default:throw Error("unexpected number of binary field arguments: "+J)}}return h}var Lt=Symbol();function Vt(o){var h=o[Lt];if(!h){var p=Gs(o);h=function(M,C){return Ja(M,C,p)},o[Lt]=h}return h}function wi(o,h){var p=o[Lt];return p||(p=function(M,C){return st(M,C,h)},o[Lt]=p),p}var ln=Symbol();function pu(o,h){o.push(h)}function mu(o,h,p){o.push(h,p.W)}function gu(o,h,p,M){var C=Vt(M),L=Gs(M).P,D=p.W;o.push(h,function(V,J,ce){return D(V,J,ce,L,C)})}function _u(o,h,p,M,C,L){var D=wi(M,L),V=p.W;o.push(h,function(J,ce,ve){return V(J,ce,ve,M,D)})}function Gs(o){var h=o[ln];return h||(h=Jt(o,o[ln]=[],pu,mu,gu,_u),cr in o&&ln in o&&(o.length=0),h)}var cr=Symbol();function vu(o,h){o[0]=h}function xu(o,h,p,M){var C=p.U;o[h]=M?function(L,D,V){return C(L,D,V,M)}:C}function Su(o,h,p,M,C){var L=p.U,D=Xt(M),V=Hs(M).P;o[h]=function(J,ce,ve){return L(J,ce,ve,V,D,C)}}function Mu(o,h,p,M,C,L,D){var V=p.U,J=Vn(M,C,L);o[h]=function(ce,ve,Xe){return V(ce,ve,Xe,M,J,D)}}function Hs(o){var h=o[cr];return h||(h=Jt(o,o[cr]={},vu,xu,Su,Mu),cr in o&&ln in o&&(o.length=0),h)}function Ka(o,h,p){for(;vt(h)&&h.i!=4;){var M=h.l,C=p[M];if(!C){var L=p[0];L&&(L=L[M])&&(C=p[M]=St(L))}if(!C||!C(h,o,M)){C=h,M=o,L=C.j,ot(C);var D=C;if(!D.ca){if(C=D.h.h-L,D.h.h=L,D=D.h,C==0)C=pe();else{if(L=fe(D,C),D.S&&D.m)C=D.i.subarray(L,L+C);else{D=D.i;var V=L;C=L+C,C=V===C?De():Dt?D.slice(V,C):new Uint8Array(D.subarray(V,C))}C=C.length==0?pe():new ae(C,nt)}(L=M.R)?L.push(C):M.R=[C]}}}return o}function Ja(o,h,p){for(var M=p.length,C=M%2==1,L=C?1:0;L<M;L+=2)(0,p[L+1])(h,o,p[L]);st(o,h,C?p[0]:void 0)}function ur(o,h){return{U:o,W:h}}var yn=ur(function(o,h,p){if(o.i!==5)return!1;o=o.h;var M=o.i,C=o.h,L=M[C],D=M[C+1],V=M[C+2];return M=M[C+3],z(o,o.h+4),D=(L<<0|D<<8|V<<16|M<<24)>>>0,o=2*(D>>31)+1,L=D>>>23&255,D&=8388607,dn(h,p,L==255?D?NaN:1/0*o:L==0?o*Math.pow(2,-149)*D:o*Math.pow(2,L-150)*(D+Math.pow(2,23))),!0},function(o,h,p){if(h=E(h,p),h!=null){de(o.h,8*p+5),o=o.h;var M=+h;M===0?0<1/M?ze=je=0:(je=0,ze=2147483648):isNaN(M)?(je=0,ze=2147483647):(M=(p=0>M?-2147483648:0)?-M:M,34028234663852886e22<M?(je=0,ze=(p|2139095040)>>>0):11754943508222875e-54>M?(M=Math.round(M/Math.pow(2,-149)),je=0,ze=(p|M)>>>0):(h=Math.floor(Math.log(M)/Math.LN2),M*=Math.pow(2,-h),M=Math.round(8388608*M),16777216<=M&&++h,je=0,ze=(p|h+127<<23|M&8388607)>>>0)),p=ze,o.h.push(p>>>0&255),o.h.push(p>>>8&255),o.h.push(p>>>16&255),o.h.push(p>>>24&255)}}),yu=ur(function(o,h,p){if(o.i!==0)return!1;var M=o.h,C=0,L=o=0,D=M.i,V=M.h;do{var J=D[V++];C|=(J&127)<<L,L+=7}while(32>L&&J&128);for(32<L&&(o|=(J&127)>>4),L=3;32>L&&J&128;L+=7)J=D[V++],o|=(J&127)<<L;if(z(M,V),128>J)M=C>>>0,J=o>>>0,(o=J&2147483648)&&(M=~M+1>>>0,J=~J>>>0,M==0&&(J=J+1>>>0)),M=4294967296*J+(M>>>0);else throw Le();return dn(h,p,o?-M:M),!0},function(o,h,p){h=an(h,p),h!=null&&(typeof h=="string"&&wt(h),h!=null&&(de(o.h,8*p),typeof h=="number"?(o=o.h,mt(h),re(o,ze,je)):(p=wt(h),re(o.h,p.i,p.h))))}),Eu=ur(function(o,h,p){return o.i!==0?!1:(dn(h,p,xe(o.h)),!0)},function(o,h,p){if(h=an(h,p),h!=null&&h!=null)if(de(o.h,8*p),o=o.h,p=h,0<=p)de(o,p);else{for(h=0;9>h;h++)o.h.push(p&127|128),p>>=7;o.h.push(1)}}),$a=ur(function(o,h,p){if(o.i!==2)return!1;var M=xe(o.h)>>>0;o=o.h;var C=fe(o,M);if(o=o.i,te){var L=o,D;(D=se)||(D=se=new TextDecoder("utf-8",{fatal:!0})),o=C+M,L=C===0&&o===L.length?L:L.subarray(C,o);try{var V=D.decode(L)}catch(Xe){if(ne===void 0){try{D.decode(new Uint8Array([128]))}catch{}try{D.decode(new Uint8Array([97])),ne=!0}catch{ne=!1}}throw!ne&&(se=void 0),Xe}}else{V=C,M=V+M,C=[];for(var J=null,ce,ve;V<M;)ce=o[V++],128>ce?C.push(ce):224>ce?V>=M?S():(ve=o[V++],194>ce||(ve&192)!==128?(V--,S()):C.push((ce&31)<<6|ve&63)):240>ce?V>=M-1?S():(ve=o[V++],(ve&192)!==128||ce===224&&160>ve||ce===237&&160<=ve||((L=o[V++])&192)!==128?(V--,S()):C.push((ce&15)<<12|(ve&63)<<6|L&63)):244>=ce?V>=M-2?S():(ve=o[V++],(ve&192)!==128||(ce<<28)+(ve-144)>>30!==0||((L=o[V++])&192)!==128||((D=o[V++])&192)!==128?(V--,S()):(ce=(ce&7)<<18|(ve&63)<<12|(L&63)<<6|D&63,ce-=65536,C.push((ce>>10&1023)+55296,(ce&1023)+56320))):S(),8192<=C.length&&(J=k(J,C),C.length=0);V=k(J,C)}return dn(h,p,V),!0},function(o,h,p){if(h=an(h,p),h!=null){var M=!1;if(M=M===void 0?!1:M,_e){if(M&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(h))throw Error("Found an unpaired surrogate");h=(Ie||(Ie=new TextEncoder)).encode(h)}else{for(var C=0,L=new Uint8Array(3*h.length),D=0;D<h.length;D++){var V=h.charCodeAt(D);if(128>V)L[C++]=V;else{if(2048>V)L[C++]=V>>6|192;else{if(55296<=V&&57343>=V){if(56319>=V&&D<h.length){var J=h.charCodeAt(++D);if(56320<=J&&57343>=J){V=1024*(V-55296)+J-56320+65536,L[C++]=V>>18|240,L[C++]=V>>12&63|128,L[C++]=V>>6&63|128,L[C++]=V&63|128;continue}else D--}if(M)throw Error("Found an unpaired surrogate");V=65533}L[C++]=V>>12|224,L[C++]=V>>6&63|128}L[C++]=V&63|128}}h=C===L.length?L:L.subarray(0,C)}de(o.h,8*p+2),de(o.h,h.length),Zn(o,o.h.end()),Zn(o,h)}}),Qa=ur(function(o,h,p,M,C){if(o.i!==2)return!1;h=q(h,p,M),p=o.h.j,M=xe(o.h)>>>0;var L=o.h.h+M,D=L-p;if(0>=D&&(o.h.j=L,C(h,o,void 0,void 0,void 0),D=L-o.h.h),D)throw Error("Message parsing ended unexpectedly. Expected to read "+(M+" bytes, instead read "+(M-D)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return o.h.h=L,o.h.j=p,!0},function(o,h,p,M,C){if(h=K(h,M,p),h!=null)for(M=0;M<h.length;M++){var L=o;de(L.h,8*p+2);var D=L.h.end();Zn(L,D),D.push(L.i),L=D,C(h[M],o),D=o;var V=L.pop();for(V=D.i+D.h.length()-V;127<V;)L.push(V&127|128),V>>>=7,D.i++;L.push(V),D.i++}});function ks(o){return function(h,p){e:{if(Kt.length){var M=Kt.pop();M.setOptions(p),Ke(M.h,h,p),h=M}else h=new We(h,p);try{var C=Hs(o),L=Ka(new C.P,h,C);break e}finally{C=h.h,C.i=null,C.m=!1,C.l=0,C.j=0,C.h=0,C.S=!1,h.l=-1,h.i=-1,100>Kt.length&&Kt.push(h)}L=void 0}return L}}function Ws(o){return function(){var h=new Mn;Ja(this,h,Gs(o)),Zn(h,h.h.end());for(var p=new Uint8Array(h.i),M=h.j,C=M.length,L=0,D=0;D<C;D++){var V=M[D];p.set(V,L),L+=V.length}return h.j=[p],p}}function Ci(o){Ae.call(this,o)}v(Ci,Ae);var el=[Ci,1,Eu,2,yn,3,$a,4,$a];Ci.prototype.l=Ws(el);function Xs(o){Ae.call(this,o,-1,Tu)}v(Xs,Ae),Xs.prototype.addClassification=function(o,h){return q(this,1,Ci,o,h),this};var Tu=[1],tl=ks([Xs,1,Qa,el]);function Ri(o){Ae.call(this,o)}v(Ri,Ae);var nl=[Ri,1,yn,2,yn,3,yn,4,yn,5,yn];Ri.prototype.l=Ws(nl);function il(o){Ae.call(this,o,-1,bu)}v(il,Ae);var bu=[1],rl=ks([il,1,Qa,nl]);function Wr(o){Ae.call(this,o)}v(Wr,Ae);var sl=[Wr,1,yn,2,yn,3,yn,4,yn,5,yn,6,yu],Au=ks(sl);Wr.prototype.l=Ws(sl);function ol(o,h,p){if(p=o.createShader(p===0?o.VERTEX_SHADER:o.FRAGMENT_SHADER),o.shaderSource(p,h),o.compileShader(p),!o.getShaderParameter(p,o.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+o.getShaderInfoLog(p));return p}function al(o){return K(o,Ci,1).map(function(h){var p=an(h,1);return{index:p??0,score:Me(h,2),label:an(h,3)!=null?ge(an(h,3),""):void 0,displayName:an(h,4)!=null?ge(an(h,4),""):void 0}})}function ll(o){return{x:Me(o,1),y:Me(o,2),z:Me(o,3),visibility:E(o,4)!=null?Me(o,4):void 0}}function cl(o){return o.map(function(h){return K(rl(h),Ri,1).map(ll)})}function Ys(o,h){this.i=o,this.h=h,this.m=0}function ul(o,h,p){return wu(o,h),typeof o.h.canvas.transferToImageBitmap=="function"?Promise.resolve(o.h.canvas.transferToImageBitmap()):p?Promise.resolve(o.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(o.h.canvas):(o.j===void 0&&(o.j=document.createElement("canvas")),new Promise(function(M){o.j.height=o.h.canvas.height,o.j.width=o.h.canvas.width,o.j.getContext("2d",{}).drawImage(o.h.canvas,0,0,o.h.canvas.width,o.h.canvas.height),M(o.j)}))}function wu(o,h){var p=o.h;if(o.s===void 0){var M=ol(p,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),C=ol(p,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),L=p.createProgram();if(p.attachShader(L,M),p.attachShader(L,C),p.linkProgram(L),!p.getProgramParameter(L,p.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+p.getProgramInfoLog(L));M=o.s=L,p.useProgram(M),C=p.getUniformLocation(M,"sampler0"),o.l={O:p.getAttribLocation(M,"aVertex"),N:p.getAttribLocation(M,"aTex"),xa:C},o.v=p.createBuffer(),p.bindBuffer(p.ARRAY_BUFFER,o.v),p.enableVertexAttribArray(o.l.O),p.vertexAttribPointer(o.l.O,2,p.FLOAT,!1,0,0),p.bufferData(p.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),p.STATIC_DRAW),p.bindBuffer(p.ARRAY_BUFFER,null),o.u=p.createBuffer(),p.bindBuffer(p.ARRAY_BUFFER,o.u),p.enableVertexAttribArray(o.l.N),p.vertexAttribPointer(o.l.N,2,p.FLOAT,!1,0,0),p.bufferData(p.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),p.STATIC_DRAW),p.bindBuffer(p.ARRAY_BUFFER,null),p.uniform1i(C,0)}M=o.l,p.useProgram(o.s),p.canvas.width=h.width,p.canvas.height=h.height,p.viewport(0,0,h.width,h.height),p.activeTexture(p.TEXTURE0),o.i.bindTexture2d(h.glName),p.enableVertexAttribArray(M.O),p.bindBuffer(p.ARRAY_BUFFER,o.v),p.vertexAttribPointer(M.O,2,p.FLOAT,!1,0,0),p.enableVertexAttribArray(M.N),p.bindBuffer(p.ARRAY_BUFFER,o.u),p.vertexAttribPointer(M.N,2,p.FLOAT,!1,0,0),p.bindFramebuffer(p.DRAW_FRAMEBUFFER?p.DRAW_FRAMEBUFFER:p.FRAMEBUFFER,null),p.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT),p.colorMask(!0,!0,!0,!0),p.drawArrays(p.TRIANGLE_FAN,0,4),p.disableVertexAttribArray(M.O),p.disableVertexAttribArray(M.N),p.bindBuffer(p.ARRAY_BUFFER,null),o.i.bindTexture2d(0)}function Cu(o){this.h=o}var Ru=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Pu(o,h){return h+o}function hl(o,h){window[o]=h}function Du(o){var h=document.createElement("script");return h.setAttribute("src",o),h.setAttribute("crossorigin","anonymous"),new Promise(function(p){h.addEventListener("load",function(){p()},!1),h.addEventListener("error",function(){p()},!1),document.body.appendChild(h)})}function Lu(){return A(function(o){switch(o.h){case 1:return o.s=2,w(o,WebAssembly.instantiate(Ru),4);case 4:o.h=3,o.s=0;break;case 2:return o.s=0,o.l=null,o.return(!1);case 3:return o.return(!0)}})}function qs(o){if(this.h=o,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=o&&o.locateFile||Pu,typeof window=="object")var h=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")h=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=h,o.options){h=l(Object.keys(o.options));for(var p=h.next();!p.done;p=h.next()){p=p.value;var M=o.options[p].default;M!==void 0&&(this.l[p]=typeof M=="function"?M():M)}}}i=qs.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Uu(o){var h,p,M,C,L,D,V,J,ce,ve,Xe;return A(function(Oe){switch(Oe.h){case 1:return o.ga?(h=o.h.files===void 0?[]:typeof o.h.files=="function"?o.h.files(o.l):o.h.files,w(Oe,Lu(),2)):Oe.return();case 2:if(p=Oe.i,typeof window=="object")return hl("createMediapipeSolutionsWasm",{locateFile:o.locateFile}),hl("createMediapipeSolutionsPackedAssets",{locateFile:o.locateFile}),D=h.filter(function(Te){return Te.data!==void 0}),V=h.filter(function(Te){return Te.data===void 0}),J=Promise.all(D.map(function(Te){var Ye=Xr(o,Te.url);if(Te.path!==void 0){var tt=Te.path;Ye=Ye.then(function(Tt){return o.overrideFile(tt,Tt),Promise.resolve(Tt)})}return Ye})),ce=Promise.all(V.map(function(Te){return Te.simd===void 0||Te.simd&&p||!Te.simd&&!p?Du(o.locateFile(Te.url,o.ha)):Promise.resolve()})).then(function(){var Te,Ye,tt;return A(function(Tt){if(Tt.h==1)return Te=window.createMediapipeSolutionsWasm,Ye=window.createMediapipeSolutionsPackedAssets,tt=o,w(Tt,Te(Ye),2);tt.i=Tt.i,Tt.h=0})}),ve=(function(){return A(function(Te){return o.h.graph&&o.h.graph.url?Te=w(Te,Xr(o,o.h.graph.url),0):(Te.h=0,Te=void 0),Te})})(),w(Oe,Promise.all([ce,J,ve]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return M=h.filter(function(Te){return Te.simd===void 0||Te.simd&&p||!Te.simd&&!p}).map(function(Te){return o.locateFile(Te.url,o.ha)}),importScripts.apply(null,c(M)),C=o,w(Oe,createMediapipeSolutionsWasm(Module),6);case 6:C.i=Oe.i,o.m=new OffscreenCanvas(1,1),o.i.canvas=o.m,L=o.i.GL.createContext(o.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),o.i.GL.makeContextCurrent(L),Oe.h=4;break;case 7:if(o.m=document.createElement("canvas"),Xe=o.m.getContext("webgl2",{}),!Xe&&(Xe=o.m.getContext("webgl",{}),!Xe))return alert("Failed to create WebGL canvas context when passing video frame."),Oe.return();o.K=Xe,o.i.canvas=o.m,o.i.createContext(o.m,!0,!0,{});case 4:o.j=new o.i.SolutionWasm,o.ga=!1,Oe.h=0}})}function Iu(o){var h,p,M,C,L,D,V,J;return A(function(ce){if(ce.h==1){if(o.h.graph&&o.h.graph.url&&o.fa===o.h.graph.url)return ce.return();if(o.u=!0,!o.h.graph||!o.h.graph.url){ce.h=2;return}return o.fa=o.h.graph.url,w(ce,Xr(o,o.h.graph.url),3)}for(ce.h!=2&&(h=ce.i,o.j.loadGraph(h)),p=l(Object.keys(o.D)),M=p.next();!M.done;M=p.next())C=M.value,o.j.overrideFile(C,o.D[C]);if(o.D={},o.h.listeners)for(L=l(o.h.listeners),D=L.next();!D.done;D=L.next())V=D.value,Bu(o,V);J=o.l,o.l={},o.setOptions(J),ce.h=0})}i.reset=function(){var o=this;return A(function(h){o.j&&(o.j.reset(),o.s={},o.v={}),h.h=0})},i.setOptions=function(o,h){var p=this;if(h=h||this.h.options){for(var M=[],C=[],L={},D=l(Object.keys(o)),V=D.next();!V.done;L={X:L.X,Y:L.Y},V=D.next())if(V=V.value,!(V in this.l&&this.l[V]===o[V])){this.l[V]=o[V];var J=h[V];J!==void 0&&(J.onChange&&(L.X=J.onChange,L.Y=o[V],M.push((function(ce){return function(){var ve;return A(function(Xe){if(Xe.h==1)return w(Xe,ce.X(ce.Y),2);ve=Xe.i,ve===!0&&(p.u=!0),Xe.h=0})}})(L))),J.graphOptionXref&&(V=Object.assign({},{calculatorName:"",calculatorIndex:0},J.graphOptionXref,{valueNumber:J.type===1?o[V]:0,valueBoolean:J.type===0?o[V]:!1,valueString:J.type===2?o[V]:""}),C.push(V)))}(M.length!==0||C.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(C),this.F=(this.F===void 0?[]:this.F).concat(M))}};function Nu(o){var h,p,M,C,L,D,V;return A(function(J){switch(J.h){case 1:if(!o.u)return J.return();if(!o.F){J.h=2;break}h=l(o.F),p=h.next();case 3:if(p.done){J.h=5;break}return M=p.value,w(J,M(),4);case 4:p=h.next(),J.h=3;break;case 5:o.F=void 0;case 2:if(o.H){for(C=new o.i.GraphOptionChangeRequestList,L=l(o.H),D=L.next();!D.done;D=L.next())V=D.value,C.push_back(V);o.j.changeOptions(C),C.delete(),o.H=void 0}o.u=!1,J.h=0}})}i.initialize=function(){var o=this;return A(function(h){return h.h==1?w(h,Uu(o),2):h.h!=3?w(h,Iu(o),3):w(h,Nu(o),0)})};function Xr(o,h){var p,M;return A(function(C){return h in o.L?C.return(o.L[h]):(p=o.locateFile(h,""),M=fetch(p).then(function(L){return L.arrayBuffer()}),o.L[h]=M,C.return(M))})}i.overrideFile=function(o,h){this.j?this.j.overrideFile(o,h):this.D[o]=h},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(o,h){var p=this,M,C,L,D,V,J,ce,ve,Xe;return A(function(Oe){switch(Oe.h){case 1:return p.h.inputs?(M=1e3*(h??performance.now()),w(Oe,p.I,2)):Oe.return();case 2:return w(Oe,p.initialize(),3);case 3:for(C=new p.i.PacketDataList,L=l(Object.keys(o)),D=L.next();!D.done;D=L.next())if(V=D.value,J=p.h.inputs[V]){e:{var Te=o[V];switch(J.type){case"video":var Ye=p.s[J.stream];if(Ye||(Ye=new Ys(p.i,p.K),p.s[J.stream]=Ye),Ye.m===0&&(Ye.m=Ye.i.createTexture()),typeof HTMLVideoElement<"u"&&Te instanceof HTMLVideoElement)var tt=Te.videoWidth,Tt=Te.videoHeight;else typeof HTMLImageElement<"u"&&Te instanceof HTMLImageElement?(tt=Te.naturalWidth,Tt=Te.naturalHeight):(tt=Te.width,Tt=Te.height);Tt={glName:Ye.m,width:tt,height:Tt},tt=Ye.h,tt.canvas.width=Tt.width,tt.canvas.height=Tt.height,tt.activeTexture(tt.TEXTURE0),Ye.i.bindTexture2d(Ye.m),tt.texImage2D(tt.TEXTURE_2D,0,tt.RGBA,tt.RGBA,tt.UNSIGNED_BYTE,Te),Ye.i.bindTexture2d(0),Ye=Tt;break e;case"detections":for(Ye=p.s[J.stream],Ye||(Ye=new Cu(p.i),p.s[J.stream]=Ye),Ye.data||(Ye.data=new Ye.h.DetectionListData),Ye.data.reset(Te.length),Tt=0;Tt<Te.length;++Tt){tt=Te[Tt];var Mt=Ye.data,Gt=Mt.setBoundingBox,pn=Tt,en=tt.la,ht=new Wr;if(Z(ht,1,en.ra),Z(ht,2,en.sa),Z(ht,3,en.height),Z(ht,4,en.width),Z(ht,5,en.rotation),dn(ht,6,en.pa),en=ht.l(),Gt.call(Mt,pn,en),tt.ea)for(Mt=0;Mt<tt.ea.length;++Mt){ht=tt.ea[Mt],Gt=Ye.data,pn=Gt.addNormalizedLandmark,en=Tt,ht=Object.assign({},ht,{visibility:ht.visibility?ht.visibility:0});var Ht=new Ri;Z(Ht,1,ht.x),Z(Ht,2,ht.y),Z(Ht,3,ht.z),ht.visibility&&Z(Ht,4,ht.visibility),ht=Ht.l(),pn.call(Gt,en,ht)}if(tt.ba)for(Mt=0;Mt<tt.ba.length;++Mt)Gt=Ye.data,pn=Gt.addClassification,en=Tt,ht=tt.ba[Mt],Ht=new Ci,Z(Ht,2,ht.score),ht.index&&dn(Ht,1,ht.index),ht.label&&dn(Ht,3,ht.label),ht.displayName&&dn(Ht,4,ht.displayName),ht=Ht.l(),pn.call(Gt,en,ht)}Ye=Ye.data;break e;default:Ye={}}}switch(ce=Ye,ve=J.stream,J.type){case"video":C.pushTexture2d(Object.assign({},ce,{stream:ve,timestamp:M}));break;case"detections":Xe=ce,Xe.stream=ve,Xe.timestamp=M,C.pushDetectionList(Xe);break;default:throw Error("Unknown input config type: '"+J.type+"'")}}return p.j.send(C),w(Oe,p.I,4);case 4:C.delete(),Oe.h=0}})};function Fu(o,h,p){var M,C,L,D,V,J,ce,ve,Xe,Oe,Te,Ye,tt,Tt;return A(function(Mt){switch(Mt.h){case 1:if(!p)return Mt.return(h);for(M={},C=0,L=l(Object.keys(p)),D=L.next();!D.done;D=L.next())V=D.value,J=p[V],typeof J!="string"&&J.type==="texture"&&h[J.stream]!==void 0&&++C;1<C&&(o.M=!1),ce=l(Object.keys(p)),D=ce.next();case 2:if(D.done){Mt.h=4;break}if(ve=D.value,Xe=p[ve],typeof Xe=="string")return tt=M,Tt=ve,w(Mt,Ou(o,ve,h[Xe]),14);if(Oe=h[Xe.stream],Xe.type==="detection_list"){if(Oe){for(var Gt=Oe.getRectList(),pn=Oe.getLandmarksList(),en=Oe.getClassificationsList(),ht=[],Ht=0;Ht<Gt.size();++Ht){var Jn=Au(Gt.get(Ht)),zu=Me(Jn,1),Vu=Me(Jn,2),Gu=Me(Jn,3),Hu=Me(Jn,4),ku=Me(Jn,5,0),Yr=void 0;Yr=Yr===void 0?0:Yr,Jn={la:{ra:zu,sa:Vu,height:Gu,width:Hu,rotation:ku,pa:ge(an(Jn,6),Yr)},ea:K(rl(pn.get(Ht)),Ri,1).map(ll),ba:al(tl(en.get(Ht)))},ht.push(Jn)}Gt=ht}else Gt=[];M[ve]=Gt,Mt.h=7;break}if(Xe.type==="proto_list"){if(Oe){for(Gt=Array(Oe.size()),pn=0;pn<Oe.size();pn++)Gt[pn]=Oe.get(pn);Oe.delete()}else Gt=[];M[ve]=Gt,Mt.h=7;break}if(Oe===void 0){Mt.h=3;break}if(Xe.type==="float_list"){M[ve]=Oe,Mt.h=7;break}if(Xe.type==="proto"){M[ve]=Oe,Mt.h=7;break}if(Xe.type!=="texture")throw Error("Unknown output config type: '"+Xe.type+"'");return Te=o.v[ve],Te||(Te=new Ys(o.i,o.K),o.v[ve]=Te),w(Mt,ul(Te,Oe,o.M),13);case 13:Ye=Mt.i,M[ve]=Ye;case 7:Xe.transform&&M[ve]&&(M[ve]=Xe.transform(M[ve])),Mt.h=3;break;case 14:tt[Tt]=Mt.i;case 3:D=ce.next(),Mt.h=2;break;case 4:return Mt.return(M)}})}function Ou(o,h,p){var M;return A(function(C){return typeof p=="number"||p instanceof Uint8Array||p instanceof o.i.Uint8BlobList?C.return(p):p instanceof o.i.Texture2dDataOut?(M=o.v[h],M||(M=new Ys(o.i,o.K),o.v[h]=M),C.return(ul(M,p,o.M))):C.return(void 0)})}function Bu(o,h){for(var p=h.name||"$",M=[].concat(c(h.wants)),C=new o.i.StringList,L=l(h.wants),D=L.next();!D.done;D=L.next())C.push_back(D.value);L=o.i.PacketListener.implement({onResults:function(V){for(var J={},ce=0;ce<h.wants.length;++ce)J[M[ce]]=V.get(ce);var ve=o.listeners[p];ve&&(o.I=Fu(o,J,h.outs).then(function(Xe){Xe=ve(Xe);for(var Oe=0;Oe<h.wants.length;++Oe){var Te=J[M[Oe]];typeof Te=="object"&&Te.hasOwnProperty&&Te.hasOwnProperty("delete")&&Te.delete()}Xe&&(o.I=Xe)}))}}),o.j.attachMultiListener(C,L),C.delete()}i.onResults=function(o,h){this.listeners[h||"$"]=o},Q("Solution",qs),Q("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function fl(o){return o===void 0&&(o=0),o===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function dl(o){var h=this;o=o||{},this.h=new qs({locateFile:o.locateFile,files:function(p){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:fl(p.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:cl},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:cl},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(p){return p.map(function(M){return al(tl(M))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(p){var M,C,L;return A(function(D){return D.h==1?(M=fl(p),C="third_party/mediapipe/modules/hand_landmark/"+M,w(D,Xr(h.h,M),2)):(L=D.i,h.h.overrideFile(C,L),D.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=dl.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(o){this.h.onResults(o)},i.initialize=function(){var o=this;return A(function(h){return w(h,o.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(o){var h=this;return A(function(p){return w(p,h.h.send(o),0)})},i.setOptions=function(o){this.h.setOptions(o)},Q("Hands",dl),Q("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),Q("VERSION","0.4.1675469240")}).call(Ro)),Ro}var u0=c0(),Po={},xc;function h0(){return xc||(xc=1,(function(){function i(x){var A=0;return function(){return A<x.length?{done:!1,value:x[A++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(x,A,X){return x==Array.prototype||x==Object.prototype||(x[A]=X.value),x};function t(x){x=[typeof globalThis=="object"&&globalThis,x,typeof window=="object"&&window,typeof self=="object"&&self,typeof Us=="object"&&Us];for(var A=0;A<x.length;++A){var X=x[A];if(X&&X.Math==Math)return X}throw Error("Cannot find global object")}var n=t(this);function r(x,A){if(A)e:{var X=n;x=x.split(".");for(var G=0;G<x.length-1;G++){var $=x[G];if(!($ in X))break e;X=X[$]}x=x[x.length-1],G=X[x],A=A(G),A!=G&&A!=null&&e(X,x,{configurable:!0,writable:!0,value:A})}}r("Symbol",function(x){function A(Q){if(this instanceof A)throw new TypeError("Symbol is not a constructor");return new X(G+(Q||"")+"_"+$++,Q)}function X(Q,B){this.g=Q,e(this,"description",{configurable:!0,writable:!0,value:B})}if(x)return x;X.prototype.toString=function(){return this.g};var G="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",$=0;return A}),r("Symbol.iterator",function(x){if(x)return x;x=Symbol("Symbol.iterator");for(var A="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),X=0;X<A.length;X++){var G=n[A[X]];typeof G=="function"&&typeof G.prototype[x]!="function"&&e(G.prototype,x,{configurable:!0,writable:!0,value:function(){return s(i(this))}})}return x});function s(x){return x={next:x},x[Symbol.iterator]=function(){return this},x}function a(x){var A=typeof Symbol<"u"&&Symbol.iterator&&x[Symbol.iterator];return A?A.call(x):{next:i(x)}}function l(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function c(x){if(x.i)throw new TypeError("Generator is already running");x.i=!0}l.prototype.l=function(x){this.o=x};function u(x,A){x.h={F:A,G:!0},x.j=x.m}l.prototype.return=function(x){this.h={return:x},this.j=this.m};function f(x){this.g=new l,this.h=x}function d(x,A){c(x.g);var X=x.g.g;return X?m(x,"return"in X?X.return:function(G){return{value:G,done:!0}},A,x.g.return):(x.g.return(A),_(x))}function m(x,A,X,G){try{var $=A.call(x.g.g,X);if(!($ instanceof Object))throw new TypeError("Iterator result "+$+" is not an object");if(!$.done)return x.g.i=!1,$;var Q=$.value}catch(B){return x.g.g=null,u(x.g,B),_(x)}return x.g.g=null,G.call(x.g,Q),_(x)}function _(x){for(;x.g.j;)try{var A=x.h(x.g);if(A)return x.g.i=!1,{value:A.value,done:!1}}catch(X){x.g.o=void 0,u(x.g,X)}if(x.g.i=!1,x.g.h){if(A=x.g.h,x.g.h=null,A.G)throw A.F;return{value:A.return,done:!0}}return{value:void 0,done:!0}}function y(x){this.next=function(A){return c(x.g),x.g.g?A=m(x,x.g.g.next,A,x.g.l):(x.g.l(A),A=_(x)),A},this.throw=function(A){return c(x.g),x.g.g?A=m(x,x.g.g.throw,A,x.g.l):(u(x.g,A),A=_(x)),A},this.return=function(A){return d(x,A)},this[Symbol.iterator]=function(){return this}}function b(x){function A(G){return x.next(G)}function X(G){return x.throw(G)}return new Promise(function(G,$){function Q(B){B.done?G(B.value):Promise.resolve(B.value).then(A,X).then(Q,$)}Q(x.next())})}r("Promise",function(x){function A(B){this.h=0,this.i=void 0,this.g=[],this.o=!1;var H=this.j();try{B(H.resolve,H.reject)}catch(ee){H.reject(ee)}}function X(){this.g=null}function G(B){return B instanceof A?B:new A(function(H){H(B)})}if(x)return x;X.prototype.h=function(B){if(this.g==null){this.g=[];var H=this;this.i(function(){H.l()})}this.g.push(B)};var $=n.setTimeout;X.prototype.i=function(B){$(B,0)},X.prototype.l=function(){for(;this.g&&this.g.length;){var B=this.g;this.g=[];for(var H=0;H<B.length;++H){var ee=B[H];B[H]=null;try{ee()}catch(ue){this.j(ue)}}}this.g=null},X.prototype.j=function(B){this.i(function(){throw B})},A.prototype.j=function(){function B(ue){return function(he){ee||(ee=!0,ue.call(H,he))}}var H=this,ee=!1;return{resolve:B(this.A),reject:B(this.l)}},A.prototype.A=function(B){if(B===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(B instanceof A)this.C(B);else{e:switch(typeof B){case"object":var H=B!=null;break e;case"function":H=!0;break e;default:H=!1}H?this.v(B):this.m(B)}},A.prototype.v=function(B){var H=void 0;try{H=B.then}catch(ee){this.l(ee);return}typeof H=="function"?this.D(H,B):this.m(B)},A.prototype.l=function(B){this.u(2,B)},A.prototype.m=function(B){this.u(1,B)},A.prototype.u=function(B,H){if(this.h!=0)throw Error("Cannot settle("+B+", "+H+"): Promise already settled in state"+this.h);this.h=B,this.i=H,this.h===2&&this.B(),this.H()},A.prototype.B=function(){var B=this;$(function(){if(B.I()){var H=n.console;typeof H<"u"&&H.error(B.i)}},1)},A.prototype.I=function(){if(this.o)return!1;var B=n.CustomEvent,H=n.Event,ee=n.dispatchEvent;return typeof ee>"u"?!0:(typeof B=="function"?B=new B("unhandledrejection",{cancelable:!0}):typeof H=="function"?B=new H("unhandledrejection",{cancelable:!0}):(B=n.document.createEvent("CustomEvent"),B.initCustomEvent("unhandledrejection",!1,!0,B)),B.promise=this,B.reason=this.i,ee(B))},A.prototype.H=function(){if(this.g!=null){for(var B=0;B<this.g.length;++B)Q.h(this.g[B]);this.g=null}};var Q=new X;return A.prototype.C=function(B){var H=this.j();B.s(H.resolve,H.reject)},A.prototype.D=function(B,H){var ee=this.j();try{B.call(H,ee.resolve,ee.reject)}catch(ue){ee.reject(ue)}},A.prototype.then=function(B,H){function ee(Ge,He){return typeof Ge=="function"?function(pt){try{ue(Ge(pt))}catch(ct){he(ct)}}:He}var ue,he,Ee=new A(function(Ge,He){ue=Ge,he=He});return this.s(ee(B,ue),ee(H,he)),Ee},A.prototype.catch=function(B){return this.then(void 0,B)},A.prototype.s=function(B,H){function ee(){switch(ue.h){case 1:B(ue.i);break;case 2:H(ue.i);break;default:throw Error("Unexpected state: "+ue.h)}}var ue=this;this.g==null?Q.h(ee):this.g.push(ee),this.o=!0},A.resolve=G,A.reject=function(B){return new A(function(H,ee){ee(B)})},A.race=function(B){return new A(function(H,ee){for(var ue=a(B),he=ue.next();!he.done;he=ue.next())G(he.value).s(H,ee)})},A.all=function(B){var H=a(B),ee=H.next();return ee.done?G([]):new A(function(ue,he){function Ee(pt){return function(ct){Ge[pt]=ct,He--,He==0&&ue(Ge)}}var Ge=[],He=0;do Ge.push(void 0),He++,G(ee.value).s(Ee(Ge.length-1),he),ee=H.next();while(!ee.done)})},A});var v=typeof Object.assign=="function"?Object.assign:function(x,A){for(var X=1;X<arguments.length;X++){var G=arguments[X];if(G)for(var $ in G)Object.prototype.hasOwnProperty.call(G,$)&&(x[$]=G[$])}return x};r("Object.assign",function(x){return x||v});var g=this||self,U={facingMode:"user",width:640,height:480};function P(x,A){this.video=x,this.i=0,this.h=Object.assign(Object.assign({},U),A)}P.prototype.stop=function(){var x=this,A,X,G,$;return b(new y(new f(function(Q){if(x.g){for(A=x.g.getTracks(),X=a(A),G=X.next();!G.done;G=X.next())$=G.value,$.stop();x.g=void 0}Q.j=0})))},P.prototype.start=function(){var x=this,A;return b(new y(new f(function(X){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),A=x.h,X.return(navigator.mediaDevices.getUserMedia({video:{facingMode:A.facingMode,width:A.width,height:A.height}}).then(function(G){I(x,G)}).catch(function(G){var $="Failed to acquire camera feed: "+G;throw console.error($),alert($),G}))})))};function w(x){window.requestAnimationFrame(function(){O(x)})}function I(x,A){x.g=A,x.video.srcObject=A,x.video.onloadedmetadata=function(){x.video.play(),w(x)}}function O(x){var A=null;x.video.paused||x.video.currentTime===x.i||(x.i=x.video.currentTime,A=x.h.onFrame()),A?A.then(function(){w(x)}):w(x)}var N=["Camera"],j=g;N[0]in j||typeof j.execScript>"u"||j.execScript("var "+N[0]);for(var T;N.length&&(T=N.shift());)N.length||P===void 0?j[T]&&j[T]!==Object.prototype[T]?j=j[T]:j=j[T]={}:j[T]=P}).call(Po)),Po}var f0=h0();let Is=!1,wa=0;const hu=[],d0=new nd,p0=["/gallery/img1.jpg","/gallery/img2.jpg","/gallery/img3.jpg","/gallery/img4.jpg","/gallery/img5.jpg"],Wa=new cf;Wa.background=new rt("#050505");const Xa=new _n(75,window.innerWidth/window.innerHeight,.1,1e3);Xa.position.set(0,1,6);const Vs=new e0({antialias:!0});Vs.setSize(window.innerWidth,window.innerHeight);Vs.setPixelRatio(Math.min(window.devicePixelRatio,2));document.getElementById("canvas-container").appendChild(Vs.domElement);const Ya=new o0(Vs);Ya.addPass(new a0(Wa,Xa));const m0=new er(new we(window.innerWidth,window.innerHeight),1,.4,.85);Ya.addPass(m0);const br=1e5,qa=new fn,As=new Float32Array(br*3),ws=new Float32Array(br*3);for(let i=0;i<br;i++){const e=Math.random()*5,t=e/5,n=(1.1-t)*1.6,r=t*Math.PI*8+(i>br/2?Math.PI:0);As[i*3]=Math.cos(r)*(n*Math.random()),As[i*3+1]=e-2,As[i*3+2]=Math.sin(r)*(n*Math.random());const s=i>br/2?new rt("#D4A5F6"):new rt("#F6A5C0");ws[i*3]=s.r,ws[i*3+1]=s.g,ws[i*3+2]=s.b}qa.setAttribute("position",new xn(As,3));qa.setAttribute("color",new xn(ws,3));const Cs=new Wt({uniforms:{uExplode:{value:0}},vertexShader:`
    uniform float uExplode;
    varying vec3 vColor;
    void main() {
      vColor = color;
      vec3 dir = normalize(position);
      vec3 newPos = position + (dir * uExplode * 8.0);
      vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
      gl_PointSize = 2.0 * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,fragmentShader:`
    varying vec3 vColor;
    void main() {
      if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
      gl_FragColor = vec4(vColor, 1.0);
    }
  `,transparent:!0,blending:Rs,vertexColors:!0}),Nr=new mf(qa,Cs);Wa.add(Nr);function fu(i){d0.load(i,e=>{const t=new Os({map:e,side:Dn,transparent:!0,opacity:0}),n=new zr(.6,.6),r=new Sn(n,t),s=Math.random()*Math.PI*2,a=Math.random()*1.2,l=Math.random()*4-2;r.position.set(Math.cos(s)*a,l,Math.sin(s)*a),r.userData={originalPos:r.position.clone(),rotationSpeed:(Math.random()-.5)*.02},Nr.add(r),hu.push(r)})}p0.forEach(i=>fu(i));const rr=new eu;rr.moveTo(0,-1.5);rr.bezierCurveTo(-1,-1,-2,.5,-2,1.5);rr.bezierCurveTo(-2,3,-.5,3.5,0,2);rr.bezierCurveTo(.5,3.5,2,3,2,1.5);rr.bezierCurveTo(2,.5,1,-1,0,-1.5);const ja=new Sn(new Ga(rr),new Kf({color:16724838,wireframe:!0}));ja.scale.set(.1,.1,.1);ja.position.y=3;Nr.add(ja);function du(){requestAnimationFrame(du),Nr.rotation.y=Zs.lerp(Nr.rotation.y,wa,.05),wa+=.003;const i=Is?1:0;Cs.uniforms.uExplode.value=Zs.lerp(Cs.uniforms.uExplode.value,i,.05),hu.forEach(e=>{e.material.opacity=Zs.lerp(e.material.opacity,Is?1:0,.05),e.lookAt(Xa.position);const t=e.userData.originalPos.clone().normalize();e.position.copy(e.userData.originalPos).add(t.multiplyScalar(Cs.uniforms.uExplode.value*4))}),Ya.render()}du();const Za=new u0.Hands({locateFile:i=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${i}`});Za.setOptions({maxNumHands:1,minDetectionConfidence:.5});Za.onResults(i=>{if(i.multiHandLandmarks?.length>0){const e=i.multiHandLandmarks[0];wa=(.5-e[0].x)*5,Is=Math.sqrt(Math.pow(e[12].x-e[0].x,2)+Math.pow(e[12].y-e[0].y,2))>.35}else Is=!1});new f0.Camera(document.querySelector(".input_video"),{onFrame:async()=>{await Za.send({image:document.querySelector(".input_video")})},width:640,height:480}).start();document.getElementById("image-upload").addEventListener("change",i=>{const e=i.target.files[0];if(e){const t=URL.createObjectURL(e);fu(t)}});
