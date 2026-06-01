import { useEffect, useRef } from "react";
import { PROFILE_IMAGE } from "../../data/portfolio";

const CODE_LINES = [
  "$ nmap -sV --script vuln 192.168.1.0/24",
  "const app = express(); app.use(helmet());",
  "[ CVE-2024-1337 ] privilege escalation found",
  "git commit -m 'patch: fix auth bypass'",
  "SELECT * FROM users WHERE id = $1;",
  "$ burpsuite --target https://target.local",
  "async function fetchSecureData(token) {",
  "  if (!verify(token)) throw new AuthError();",
  "[ INFO ] Running recon on target domain",
  "docker build -t secure-api:v2.1 .",
  "$ python3 exploit_poc.py --host 10.0.0.1",
  "const vuln = await scanner.analyze(target);",
  "[ WARN ] XSS reflected in param: q",
  "npm audit fix --force",
  "ssh -L 8080:localhost:80 user@server",
  "grep -r 'password' /var/www/html --include='*.php'",
  "curl -X POST /api/auth -d '{\"user\":\"admin\"}'",
  "[ CRIT ] Exposed .env file on /api/.env",
  "import { useState, useEffect } from 'react';",
  "app.use(rateLimit({ windowMs: 15*60*1000 }));",
  "$ sqlmap -u 'http://target/item?id=1' --dbs",
  "function analyzePacket(buf: Buffer): Report {",
  "[ OK ] Certificate fingerprint verified",
  "const hash = bcrypt.hash(password, 12);",
  "tcpdump -i eth0 -w capture.pcap port 443",
  "[ PASS ] All security tests passed",
  "export default withAuth(SecureDashboard);",
  "$ ffuf -w wordlist.txt -u https://target/FUZZ",
];

const AMBER = "rgba(180, 83, 9, 0.55)";   // td-amber at 55%
const SEPIA_LIGHT = "rgba(161, 98, 7, 0.25)"; // td-sepia lighter

export default function DoubleExposureCanvas({ width = 400, height = 580, threshold = 105 }) {
  const canvasRef = useRef(null);
  const maskRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width  = width  * dpr;
    canvas.height = height * dpr;
    canvas.style.width  = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    // --- Build offscreen mask from profile photo ---
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = PROFILE_IMAGE;

    img.onload = () => {
      // Draw photo to offscreen canvas (scale to fit, centred)
      const offscreen = document.createElement("canvas");
      offscreen.width  = width;
      offscreen.height = height;
      const octx = offscreen.getContext("2d");

      const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
      const sw = img.naturalWidth  * scale;
      const sh = img.naturalHeight * scale;
      const sx = (width  - sw) / 2;
      const sy = (height - sh) / 2;
      octx.drawImage(img, sx, sy, sw, sh);

      const imgData = octx.getImageData(0, 0, width, height);
      const data = imgData.data;

      // Create binary silhouette mask
      const maskData = octx.createImageData(width, height);
      const md = maskData.data;
      for (let i = 0; i < data.length; i += 4) {
        const L = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        const isSubject = L < threshold;
        md[i]     = 28;   // stone-900 r
        md[i + 1] = 25;   // stone-900 g
        md[i + 2] = 23;   // stone-900 b
        md[i + 3] = isSubject ? 240 : 0;
      }
      maskRef.current = maskData;
      startLoop(ctx, width, height);
    };

    img.onerror = () => {
      // Fallback: use a generic human silhouette clip path
      maskRef.current = null;
      startLoop(ctx, width, height);
    };

    function startLoop(ctx, w, h) {
      let baseY = 0;
      const lineH = 18;
      const font = `13px "DM Mono", monospace`;

      const drawCodeRain = (ctx) => {
        ctx.save();
        ctx.font = font;
        ctx.fillStyle = AMBER;
        ctx.textBaseline = "top";
        let y = (baseY % (CODE_LINES.length * lineH)) - lineH;
        for (let i = 0; i < CODE_LINES.length + Math.ceil(h / lineH) + 1; i++) {
          const line = CODE_LINES[(i + Math.floor(baseY / lineH)) % CODE_LINES.length];
          ctx.fillText(line, 8, y + i * lineH);
        }
        ctx.restore();
      };

      // Fallback silhouette using SVG-like clipping polygon (rough human torso/head)
      const drawFallbackSilhouette = (ctx, w, h) => {
        ctx.save();
        ctx.beginPath();
        // Head
        ctx.ellipse(w * 0.5, h * 0.1, w * 0.14, h * 0.13, 0, 0, Math.PI * 2);
        // Neck
        ctx.rect(w * 0.44, h * 0.22, w * 0.12, h * 0.06);
        // Shoulders & torso
        ctx.moveTo(w * 0.12, h * 0.28);
        ctx.lineTo(w * 0.88, h * 0.28);
        ctx.lineTo(w * 0.80, h * 0.70);
        ctx.lineTo(w * 0.55, h * 0.70);
        ctx.lineTo(w * 0.55, h * 0.95);
        ctx.lineTo(w * 0.45, h * 0.95);
        ctx.lineTo(w * 0.45, h * 0.70);
        ctx.lineTo(w * 0.20, h * 0.70);
        ctx.closePath();
        ctx.clip();
        ctx.restore();
      };

      const tick = () => {
        ctx.clearRect(0, 0, w, h);

        if (maskRef.current) {
          // --- Photo-based silhouette ---
          // Layer 1: pale background
          ctx.fillStyle = "#fafaf9";
          ctx.fillRect(0, 0, w, h);

          // Layer 2: code rain on temp canvas, clipped to mask
          const tmp = document.createElement("canvas");
          tmp.width  = w;
          tmp.height = h;
          const tctx = tmp.getContext("2d");

          // Dark silhouette base
          tctx.putImageData(maskRef.current, 0, 0);

          // Draw code rain clipped to silhouette
          tctx.globalCompositeOperation = "source-atop";
          tctx.font = font;
          tctx.fillStyle = AMBER;
          tctx.textBaseline = "top";
          let y = (baseY % (CODE_LINES.length * lineH)) - lineH;
          for (let i = 0; i < CODE_LINES.length + Math.ceil(h / lineH) + 1; i++) {
            const line = CODE_LINES[(i + Math.floor(baseY / lineH)) % CODE_LINES.length];
            tctx.fillText(line, 8, y + i * lineH);
          }

          // Double-exposure landscape gradient bled through
          tctx.globalCompositeOperation = "screen";
          const grad = tctx.createLinearGradient(0, 0, w, h);
          grad.addColorStop(0,   "rgba(212,200,185,0.22)");
          grad.addColorStop(0.5, "rgba(180,160,130,0.10)");
          grad.addColorStop(1,   "rgba(140,120,100,0.18)");
          tctx.fillStyle = grad;
          tctx.fillRect(0, 0, w, h);

          ctx.drawImage(tmp, 0, 0);

          // Vignette on top of the whole canvas
          const vig = ctx.createRadialGradient(w/2, h/2, h*0.25, w/2, h/2, h*0.7);
          vig.addColorStop(0, "rgba(250,250,249,0)");
          vig.addColorStop(1, "rgba(250,250,249,0.55)");
          ctx.fillStyle = vig;
          ctx.fillRect(0, 0, w, h);
        } else {
          // --- Fallback: geometric silhouette ---
          ctx.fillStyle = "#fafaf9";
          ctx.fillRect(0, 0, w, h);

          const tmpF = document.createElement("canvas");
          tmpF.width  = w;
          tmpF.height = h;
          const tf = tmpF.getContext("2d");

          tf.fillStyle = "#1c1917";
          drawFallbackSilhouette(tf, w, h);
          tf.fillRect(0, 0, w, h);

          tf.globalCompositeOperation = "source-atop";
          drawCodeRain(tf);

          ctx.drawImage(tmpF, 0, 0);
        }

        baseY += 0.45;
        rafRef.current = requestAnimationFrame(tick);
      };

      tick();
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [width, height, threshold]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        borderRadius: "2px",
        boxShadow: "0 8px 60px rgba(28,25,23,0.12), 0 2px 12px rgba(28,25,23,0.08)",
      }}
    />
  );
}
