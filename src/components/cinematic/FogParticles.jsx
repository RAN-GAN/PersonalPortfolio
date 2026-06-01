import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 220;

function makeSprite() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.4, "rgba(255,255,255,0.4)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export default function FogParticles({ progressRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Guard: skip if WebGL is unavailable (context limit, hardware block, etc.)
    const testCtx = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    if (!testCtx) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, context: testCtx });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 3;

    const sprite = makeSprite();

    // Build particles
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const seeds = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    // Stone / warm-parchment particle colours
    const palette = [
      [0.84, 0.82, 0.80], // stone-300
      [0.78, 0.75, 0.72], // stone-400
      [0.70, 0.44, 0.02], // amber-700
      [0.90, 0.88, 0.85], // stone-200
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      positions[i3]     = (Math.random() - 0.5) * 9;
      positions[i3 + 1] = (Math.random() - 0.5) * 6;
      positions[i3 + 2] = (Math.random() - 0.5) * 4;

      seeds[i3]     = Math.random() * Math.PI * 2;
      seeds[i3 + 1] = Math.random() * Math.PI * 2;
      seeds[i3 + 2] = 0.08 + Math.random() * 0.18; // amplitude

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = c[0]; colors[i3 + 1] = c[1]; colors[i3 + 2] = c[2];

      sizes[i] = 60 + Math.random() * 90;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.8,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let animId;
    let t = 0;
    const posArr = geo.attributes.position.array;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.0008;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        const amp = seeds[i3 + 2];
        posArr[i3]     += Math.sin(t + seeds[i3])     * amp * 0.004;
        posArr[i3 + 1] += Math.cos(t + seeds[i3 + 1]) * amp * 0.002;
      }
      geo.attributes.position.needsUpdate = true;

      // Fade out with scroll progress
      const prog = progressRef?.current ?? 0;
      mat.opacity = 0.22 * (1 - Math.min(prog * 1.8, 1));

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      sprite.dispose();
      renderer?.dispose();
    };
  }, [progressRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
