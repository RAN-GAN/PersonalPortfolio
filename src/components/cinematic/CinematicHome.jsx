import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

import FilmGrain from "./FilmGrain";
// FogParticles intentionally not imported — it pulls three.js (~600KB) into the
// home bundle. Re-import alongside re-enabling its render below if needed.
import { prefersReducedMotion } from "./useReducedMotion";
import HeroSection from "./HeroSection";
import AboutChapter from "./AboutChapter";
import CaseFilesSection from "./CaseFilesSection";
import SkillsNetwork from "./SkillsNetwork";
import SecurityBoard from "./SecurityBoard";
import ContactOutro from "./ContactOutro";

gsap.registerPlugin(ScrollTrigger);

// Thin amber reading-progress bar. Writes transform only (no layout), rAF-throttled.
function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    // Force light mode on home page to preserve cinematic design
    document.documentElement.classList.remove('dark');
    
    return () => {
      // Restore dark mode if needed when leaving
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
      }
    };
  }, []);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "#b45309",
        transform: "scaleX(0)",
        transformOrigin: "0 50%",
        zIndex: 95,
        pointerEvents: "none",
      }}
    />
  );
}

export default function CinematicHome() {
  const containerRef  = useRef(null);
  const heroRef       = useRef(null);
  const fogProgress   = useRef(0);
  const [activeLabel, setActiveLabel] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.cinematic = "true";
    document.documentElement.style.backgroundColor = "#fafaf9";
    return () => {
      delete document.documentElement.dataset.cinematic;
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  // Track active section → update top-left label
  useEffect(() => {
    const SECTION_LABELS = {
      hero:     null,
      about:    "Identity",
      projects: "Cases",
      skills:   "Arsenal",
      security: "Intel",
      contact:  "Contact",
    };

    const observers = [];
    Object.entries(SECTION_LABELS).forEach(([id, label]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLabel(label); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  useGSAP(() => {
    // Reduced motion: no smooth scroll, no pinning — content reads statically
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.3,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const rafFn = time => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(rafFn);
    gsap.ticker.lagSmoothing(0);

    // Only pin hero on desktop — touch + pin is janky on mobile.
    // While pinned, hero performs a scrubbed cinematic exit: copy drifts up
    // and dissolves, portrait dollies in, metadata strip fades.
    const hero = heroRef.current;
    if (hero && window.innerWidth >= 768) {
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=120%",
            pin: true,
            pinSpacing: true,
            scrub: true,
            onUpdate: self => {
              fogProgress.current = self.progress;
            },
          },
        })
        // Opacity intentionally omitted — GSAP reads opacity:0 at mount (before
        // the 400ms ready timer fires) and would lock content invisible.
        // Transform-only exit: React owns the opacity enter, GSAP owns the motion exit.
        .to(".hero-copy",     { yPercent: -12 }, 0)
        .to(".hero-portrait", { yPercent: -5, scale: 1.04 }, 0)
        .to(".hero-strip",    { yPercent: 8 }, 0);
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(rafFn);
      lenis.destroy();
    };
  }, { scope: containerRef });

  const NAV_SECTIONS = [
    { href: "#about",    label: "Identity" },
    { href: "#projects", label: "Cases"    },
    { href: "#skills",   label: "Arsenal"  },
    { href: "#security", label: "Intel"    },
    { href: "#contact",  label: "Contact"  },
  ];

  return (
    <div ref={containerRef} className="cinematic-page relative">
      <ScrollProgress />
      <FilmGrain opacity={0.10} />
      {/* <FogParticles progressRef={fogProgress} /> */}

      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          pointerEvents: "auto",
          padding: "0 20px",
          height: "56px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(250,250,249,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(28,25,23,0.08)",
        }}
      >
        {/* Left: dynamic section label */}
        <span
          style={{
            fontFamily: '"SAILORS", "Fraunces", Georgia, serif',
            fontSize: "clamp(1rem, 2.2vw, 1.8rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            color: "#000000",
            transition: "color 0.35s",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {activeLabel ?? "Portfolio"}
        </span>

        {/* Right: nav links — hidden on mobile, visible sm+ */}
        <div
          className="hidden sm:flex"
          style={{ gap: "24px" }}
        >
          {NAV_SECTIONS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={e => {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                fontFamily: '"DM Mono", monospace',
                fontSize: "9px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "rgba(28,25,23,0.40)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(180,83,9,1)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(28,25,23,0.40)")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile: section dots */}
        <div className="flex sm:hidden items-center gap-1.5">
          {NAV_SECTIONS.map(({ href, label }) => (
            <button
              key={href}
              aria-label={label}
              onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: activeLabel === label ? "#b45309" : "rgba(28,25,23,0.20)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            />
          ))}
        </div>
      </nav>

      {/* Page sections */}
      <div ref={heroRef}>
        <HeroSection />
      </div>

      <AboutChapter />
      <CaseFilesSection />
      <SkillsNetwork />
      <SecurityBoard />
      <ContactOutro />
    </div>
  );
}
