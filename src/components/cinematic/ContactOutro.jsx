import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./useReducedMotion";
import { Link } from "react-router-dom";
import NowPlaying from "../NowPlaying";
import { PERSONAL } from "../../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { label: "GitHub",   href: PERSONAL.github,   external: true },
  { label: "LinkedIn", href: PERSONAL.linkedin,  external: true },
  { label: "Email",    href: PERSONAL.email,      external: false },
  { label: "Resume",   href: PERSONAL.resume,     external: false, download: true },
];

export default function ContactOutro() {
  const sectionRef = useRef(null);
  const innerRef   = useRef(null);
  const bgRef      = useRef(null);
  const stampRef   = useRef(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const fullTrigger = {
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    };
    // "CONTACT" watermark floats upward at its own speed
    gsap.to(stampRef.current, { y: -80, ease: "none", scrollTrigger: fullTrigger });

    gsap.from(innerRef.current?.children ?? [], {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center py-12 bg-td-bg overflow-hidden"
    >
      {/* pattern.jpeg — full-section atmospheric texture */}
      <img
        aria-hidden="true"
        src="/PersonalPortfolio/pattern.jpeg"
        alt=""
        draggable="false"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.055,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Vignette edges — fills section exactly */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(28,25,23,0.08) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* "CONTACT" watermark — floats at its own speed */}
      <div
        ref={stampRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: '"SAILORS", "Fraunces", Georgia, serif',
          fontSize: "clamp(5rem, 18vw, 14rem)",
          fontWeight: 900,
          color: "rgba(28,25,23,0.04)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        Contact
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-12 text-center" ref={innerRef}>
        <p
          className="font-mono text-[10px] uppercase tracking-[0.5em] text-td-muted mb-3"
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          Chapter 05 — Contact
        </p>

        <p
          className="font-display font-bold text-td-ink mb-3"
          style={{
            fontFamily: '"SAILORS", "Fraunces", Georgia, serif',
            fontSize: "clamp(2.6rem, 6vw, 6rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            color: "#000",
          }}
        >
          {PERSONAL.name}
        </p>

        <p
          className="font-mono text-td-muted text-[11px] uppercase tracking-[0.5em] mb-8"
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          Developer  ·  Researcher  ·  Builder
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-8">
          {LINKS.map(({ label, href, external, download }) =>
            external || download ? (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                download={download || undefined}
                className="font-mono text-[11px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors duration-300 border-b border-transparent hover:border-td-amber pb-0.5"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                {label}
              </a>
            ) : (
              <a
                key={label}
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors duration-300 border-b border-transparent hover:border-td-amber pb-0.5"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                {label}
              </a>
            )
          )}
        </div>

        {/* NowPlaying widget */}
        <div className="flex justify-center mb-8">
          <div style={{ opacity: 0.85, filter: "grayscale(0.2)" }}>
            <NowPlaying />
          </div>
        </div>

        {/* Back to other sections */}
        <div className="flex justify-center gap-8 mb-6">
          <Link
            to="/projects"
            className="font-mono text-[9px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            Projects
          </Link>
          <Link
            to="/miniprojects"
            className="font-mono text-[9px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            Mini Projects
          </Link>
          <Link
            to="/freelance"
            className="font-mono text-[9px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            Freelance
          </Link>
        </div>

        <p
          className="font-mono text-td-border text-[10px] uppercase tracking-[0.5em]"
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
