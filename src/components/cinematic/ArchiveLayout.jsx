import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PixelOverlay from "../ui/PixelOverlay";

const mono = { fontFamily: '"DM Mono", monospace' };

/**
 * Shared shell for the archive routes (/projects, /miniprojects).
 * Same paper-and-amber language as the cinematic home; reveals are
 * CSS-only (.archive-reveal) so these pages stay featherweight.
 */
export default function ArchiveLayout({ kicker, title, subtitle, children }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.title = `${title} — Pradeep Chandran M`;
    document.documentElement.dataset.cinematic = "true";
    return () => {
      document.title = "Pradeep Chandran M - Portfolio";
      delete document.documentElement.dataset.cinematic;
    };
  }, [title]);

  const toggleTheme = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };

  const handleMidpoint = () => {
    const newIsDark = !isDark;
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
    setIsDark(newIsDark);
  };

  return (
    <main className="cinematic-page relative min-h-screen">
      <PixelOverlay 
        isAnimating={isAnimating}
        onMidpoint={handleMidpoint}
        onComplete={() => setIsAnimating(false)}
      />

      {/* Faint crosshatch, same texture as the case-files chapter */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--color-td-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-td-grid) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-10 py-10 sm:py-16">
        {/* Back link and Theme Toggle */}
        <div className="flex justify-between items-center mb-12">
          <Link
            to="/"
            className="archive-reveal inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={mono}
          >
            <span aria-hidden>←</span> Back to file
          </Link>
          <button
            onClick={toggleTheme}
            className="archive-reveal inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.45em] text-td-muted hover:text-td-amber transition-colors"
            style={mono}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Header */}
        <header className="archive-reveal mb-12 sm:mb-16" style={{ "--reveal-delay": "0.08s" }}>
          <p
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-td-amber mb-3"
            style={mono}
          >
            {kicker}
          </p>
          <div className="h-0.5 w-16 bg-td-border mb-4" />
          <h1
            className="font-bold leading-tight text-td-ink"
            style={{
              fontFamily: '"SAILORS", "Fraunces", Georgia, serif',
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-td-ink)",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-4 font-mono text-[11px] uppercase tracking-[0.35em] text-td-muted"
              style={mono}
            >
              {subtitle}
            </p>
          )}
        </header>

        {children}

        {/* Footer */}
        <p
          className="archive-reveal mt-16 font-mono text-[10px] uppercase tracking-[0.35em] text-td-muted text-center"
          style={{ ...mono, "--reveal-delay": "0.5s" }}
        >
          For more projects and scripts, visit{" "}
          <a
            href="https://github.com/RAN-GAN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-td-amber hover:text-td-sepia transition-colors border-b border-td-amber/40 pb-0.5"
          >
            GitHub
          </a>
        </p>
      </div>
    </main>
  );
}
