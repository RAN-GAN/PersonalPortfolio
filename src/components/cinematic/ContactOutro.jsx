import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./useReducedMotion";
import { InkAmbient } from "../ui/ink-reveal";
import { Link } from "react-router-dom";
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
      {/* pattern.jpeg — atmospheric ink-bloom revealed under the cursor.
          Shallow carve keeps the name + links the focus; static faint texture
          on touch / reduced-motion. */}
      <InkAmbient
        src="/PersonalPortfolio/pattern.jpeg"
        maskColor={[250, 250, 249]}
        maskOpacity={0.955}
        staticOpacity={0.055}
        revealStops={[0.14, 0.1, 0]}
        brushSize={140}
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

      {/* Legibility scrim — keeps a bright halo behind the centred text so the
          ink bloom never drops contrast on the copy, while still letting the
          effect breathe toward the section edges. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 58% at 50% 50%, rgba(250,250,249,0.86) 0%, rgba(250,250,249,0.55) 42%, rgba(250,250,249,0) 75%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-12 text-center" ref={innerRef}>
        <p
          className="font-mono text-[10px] uppercase tracking-[0.5em] text-td-amber mb-6"
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          Chapter 05 — Contact
        </p>

        <h2
          className="font-display font-medium text-td-ink mb-6 max-w-2xl mx-auto"
          style={{
            fontFamily: '"SAILORS", "Fraunces", Georgia, serif',
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            lineHeight: 1.3,
            color: "#000",
          }}
        >
          You've reached the final chapter.
        </h2>

        <div 
          className="text-td-muted text-sm sm:text-base max-w-lg mx-auto mb-10"
          style={{ fontFamily: '"Proxima Nova", "DM Sans", system-ui, sans-serif', lineHeight: 1.8 }}
        >
          <p className="mb-5">Thanks for taking the time to explore my work.</p>
          <p>
            If something here resonated with you<br />
            whether it's a project, an idea, or just curiosity<br />
            I'd love to continue the conversation.
          </p>
        </div>

        <div className="text-td-amber mb-8 font-mono text-lg animate-pulse" style={{ fontFamily: '"DM Mono", monospace' }}>
          ↓
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-3 mb-8">
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



        {/* Back to other sections */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-8 mb-6">
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
          <Link
            to="/blogs"
            className="font-mono text-[9px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            Journal
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
