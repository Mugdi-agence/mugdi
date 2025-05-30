import * as THREE from './node_modules/three/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    40, window.innerWidth / window.innerHeight, 1, 100
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    canvas: document.getElementById('WebGL'), 
    alpha: true 
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.9);
scene.add(ambientLight);

const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.ShaderMaterial({
  transparent: true,
  uniforms: {},
  vertexShader: `
    varying vec3 vPos;
    varying vec3 vNormal;
    void main() {
      vPos = position;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vPos;
    varying vec3 vNormal;

    // Convert cartesian position on sphere to spherical coordinates (theta, phi)
    // theta: longitude angle [-PI, PI]
    // phi: latitude angle [0, PI]
    void main() {
      float PI = 3.141592653589793;

      // Normalize position to unit sphere radius 1
      vec3 p = normalize(vPos);

      float theta = atan(p.z, p.x); // longitude [-PI, PI]
      float phi = acos(p.y);        // latitude [0, PI]

      // Parameters for line thickness (in radians)
      float lineThickness = 0.03;

      // Draw longitude lines every 15 degrees (~0.2618 rad)
      float lonStep = 0.2618;
      float lonLine = smoothstep(lineThickness, 0.0, abs(mod(theta + PI, lonStep) - lonStep/2.0));

      // Draw latitude lines every 15 degrees (~0.2618 rad)
      float latStep = 0.2618;
      float latLine = smoothstep(lineThickness, 0.0, abs(mod(phi, latStep) - latStep/2.0));

      // Combine lines (black lines)
      float line = max(lonLine, latLine);

      // Base sphere color: white with alpha
      vec4 baseColor = vec4(1.0, 1.0, 1.0, 0.2);

      // If on line, make color black and fully opaque
      vec4 finalColor = mix(baseColor, vec4(0.0, 0.0, 0.0, 1.0), line);

      // Discard fragment if fully transparent to allow background through
      if(finalColor.a < 0.01) discard;

      gl_FragColor = finalColor;
    }
  `
});
const sphere = new THREE.Mesh(geometry, material);
const planetGroup = new THREE.Group();
planetGroup.add(sphere);
scene.add(planetGroup);
const keyframes = [
  {
    start: 0,
    end: 500,
    from: { x: 0,   y: -4,   scale: 1 },
    to:   { x: -1,  y: 1,   scale: 1 }
  }
];

const mouse = { x: 0, y: 0 };

window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
});

function sigmoid(x) {
  return 1 / (1 + Math.exp(-12 * (x - 0.5)));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

const getFrameAtScroll = (scrollY) => {
  for (let frame of keyframes) {
    if (scrollY >= frame.start && scrollY <= frame.end) {
      const t = (scrollY - frame.start) / (frame.end - frame.start);
      const s = sigmoid(t);

      return {
        x: lerp(frame.from.x, frame.to.x, s),
        y: lerp(frame.from.y, frame.to.y, s),
        scale: lerp(frame.from.scale, frame.to.scale, s)
      };
    }
  }

  const last = keyframes[keyframes.length - 1];
  return { x: last.to.x, y: last.to.y, scale: last.to.scale };
}

const animate = () => {
    requestAnimationFrame(animate);

    const scrollY = window.scrollY;
    const target = getFrameAtScroll(scrollY);

    const targetPosX = target.x + mouse.x * 0.05;
    const targetPosY = target.y + mouse.y * 0.05;

    planetGroup.position.x += (targetPosX - planetGroup.position.x) * 0.1;
    planetGroup.position.y += (targetPosY - planetGroup.position.y) * 0.1;

    planetGroup.scale.x += (target.scale - planetGroup.scale.x) * 0.1;
    planetGroup.scale.y += (target.scale - planetGroup.scale.y) * 0.1;
    planetGroup.scale.z += (target.scale - planetGroup.scale.z) * 0.1;

    renderer.render(scene, camera);
};
animate();