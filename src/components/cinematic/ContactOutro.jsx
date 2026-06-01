import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import ChapterTitle from "./ChapterTitle";
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

  useGSAP(() => {
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
      className="relative py-28 sm:py-40 bg-td-bg overflow-hidden"
    >
      {/* Vignette edges */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(28,25,23,0.06) 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-12 text-center" ref={innerRef}>
        <ChapterTitle number="05" title="Contact" />

        <p
          className="font-display font-bold text-td-ink mb-4"
          style={{
            fontFamily: '"SAILORS", serif',
            fontSize: "clamp(2.6rem, 6vw, 6rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            color: "#000",
          }}
        >
          {PERSONAL.name}
        </p>

        <p
          className="font-mono text-td-muted text-[11px] uppercase tracking-[0.5em] mb-14"
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          Developer  ·  Researcher  ·  Builder
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-16">
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
        <div className="flex justify-center mb-14">
          <div style={{ opacity: 0.85, filter: "grayscale(0.2)" }}>
            <NowPlaying />
          </div>
        </div>

        {/* Back to other sections */}
        <div className="flex justify-center gap-8">
          <Link
            to="/projects"
            className="font-mono text-[9px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            Projects
          </Link>
          <Link
            to="/freelance"
            className="font-mono text-[9px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            Freelance
          </Link>
        </div>

        {/* Year stamp */}
        <p
          className="font-mono text-td-border text-[10px] uppercase tracking-[0.5em] mt-16"
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          © 2025
        </p>
      </div>
    </section>
  );
}
