import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

import FilmGrain from "./FilmGrain";
import FogParticles from "./FogParticles";
import HeroSection from "./HeroSection";
import AboutChapter from "./AboutChapter";
import CaseFilesSection from "./CaseFilesSection";
import SkillsNetwork from "./SkillsNetwork";
import SecurityBoard from "./SecurityBoard";
import ContactOutro from "./ContactOutro";

gsap.registerPlugin(ScrollTrigger);

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
    const lenis = new Lenis({
      duration: 1.3,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const rafFn = time => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(rafFn);
    gsap.ticker.lagSmoothing(0);

    // Only pin hero on desktop — touch + pin is janky on mobile
    const hero = heroRef.current;
    if (hero && window.innerWidth >= 768) {
      ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        end: "+=180%",
        pin: true,
        pinSpacing: true,
        onUpdate: self => {
          fogProgress.current = self.progress;
        },
      });
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
      <FilmGrain opacity={0.10} />
      <FogParticles progressRef={fogProgress} />

      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 80,
          pointerEvents: "none",
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: dynamic section label */}
        <span
          style={{
            fontFamily: '"SAILORS", serif',
            fontSize: "clamp(1.1rem, 2.5vw, 2.2rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            color: "#000000",
            transition: "opacity 0.35s",
            lineHeight: 1,
          }}
        >
          {activeLabel ?? "Portfolio"}
        </span>

        {/* Right: nav links — hidden on mobile, visible sm+ */}
        <div
          className="hidden sm:flex"
          style={{ gap: "24px", pointerEvents: "auto" }}
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
                color: "rgba(28,25,23,0.30)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(180,83,9,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(28,25,23,0.30)")}
            >
              {label}
            </a>
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
