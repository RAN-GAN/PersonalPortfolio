import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CinematicLoader = ({ onComplete, onReveal }) => {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const lineRef = useRef(null);
  const contentRef = useRef(null);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [status, setStatus] = useState("INITIALIZING");

  const isTransitioning = useRef(false);
  const bootFinished = useRef(false);
  const resourcesReadyRef = useRef(false);

  useEffect(() => {
    resourcesReadyRef.current = resourcesLoaded;
  }, [resourcesLoaded]);

  useEffect(() => {
    const handleLoad = () => {
      setResourcesLoaded(true);
      setStatus("READY");
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useGSAP(() => {
    const bootTl = gsap.timeline({
      onComplete: () => {
        bootFinished.current = true;
      }
    });

    bootTl.to(containerRef.current, { duration: 0, visibility: "visible" })
      .to({}, { duration: 0.8, onStart: () => setStatus("COMPILING") })
      .to({}, { duration: 0.8, onStart: () => setStatus("FINALIZING") });

    const checkReady = () => {
      if (isTransitioning.current) return;

      const allImages = Array.from(document.images);
      const imagesLoaded = allImages.length === 0 || allImages.every(img => img.complete);

      if (resourcesReadyRef.current && bootFinished.current && imagesLoaded) {
        proceedToReveal();
      } else {
        if (!resourcesReadyRef.current) setStatus("FETCHING DATA");
        else if (!imagesLoaded) setStatus("ZESTING");
        else if (!bootFinished.current) setStatus("PREPARING");
        
        gsap.delayedCall(0.2, checkReady);
      }
    };

    const proceedToReveal = () => {
      isTransitioning.current = true;
      setStatus("ENTERING");
      
      const finaleTl = gsap.timeline({
        onComplete: () => { if (onComplete) onComplete(); }
      });

      finaleTl
        // 1. Content Evaporation
        .to(contentRef.current, {
          duration: 0.8,
          opacity: 0,
          y: -20,
          letterSpacing: "0.8em",
          filter: "blur(8px)",
          ease: "power2.in"
        })
        // 2. Progressive Line Growth & Glow
        .set(lineRef.current, { opacity: 1, scaleY: 0, boxShadow: "0 0 0px #b45309" })
        .to(lineRef.current, {
          duration: 1.2,
          scaleY: 1,
          boxShadow: "0 0 50px #b45309",
          ease: "power4.inOut",
        })
        // 3. The Grand Split
        .add(() => { if (onReveal) onReveal(); })
        .to(leftPanelRef.current, {
          duration: 1.6,
          x: "-100%",
          rotateY: -5,
          z: -100,
          ease: "expo.inOut",
        })
        .to(rightPanelRef.current, {
          duration: 1.6,
          x: "100%",
          rotateY: 5,
          z: -100,
          ease: "expo.inOut",
        }, "<")
        // 4. Line Dissolve (Early)
        .to(lineRef.current, {
          duration: 0.6,
          scaleX: 0,
          opacity: 0,
          boxShadow: "0 0 0px #b45309",
          ease: "power2.out"
        }, "-=1.5")
        .to(containerRef.current, {
          duration: 0.2,
          opacity: 0,
          pointerEvents: "none"
        });
    };

    gsap.delayedCall(0.5, checkReady);

  }, { scope: containerRef, dependencies: [] });

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden bg-transparent flex items-center justify-center font-serif select-none"
      style={{ visibility: "hidden", perspective: "1000px" }}
    >
      {/* Background Panels with Grain */}
      <div 
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-1/2 h-full bg-[var(--color-td-bg,#fafaf9)] border-r border-[var(--color-td-ink,#1c1917)]/5 z-10 origin-right"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply cinematic-grain"></div>
      </div>
      <div 
        ref={rightPanelRef}
        className="absolute right-0 top-0 w-1/2 h-full bg-[var(--color-td-bg,#fafaf9)] border-l border-[var(--color-td-ink,#1c1917)]/5 z-10 origin-left"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply cinematic-grain"></div>
      </div>

      {/* Radiant Fracture with Progressive Glow */}
      <div 
        ref={lineRef}
        className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#b45309] -translate-x-1/2 opacity-0 z-30"
        style={{ transformOrigin: "center" }}
      >
        <div className="absolute inset-0 bg-[#b45309] blur-md opacity-30"></div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 flex flex-col items-center">
        <div className="text-[10px] tracking-[0.6em] uppercase text-[var(--color-td-ink,#1c1917)]/30 mb-6 font-mono">
          Loading 
        </div>
        
        <div 
          className="text-3xl font-black text-[var(--color-td-ink,#1c1917)] tracking-[0.25em] uppercase mb-10"
          style={{ fontFamily: '"SAILORS", "Fraunces", Georgia, serif' }}
        >
          {status}
        </div>
        
        {/* Refined Progress Line */}
        <div className="w-40 h-[1px] bg-[var(--color-td-ink,#1c1917)]/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-[#b45309] w-full origin-left scale-x-0 animate-[loading-bar_4s_infinite_ease-in-out]"></div>
        </div>
      </div>

      <style>{`
        .cinematic-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        @keyframes loading-bar {
          0% { transform: scaleX(0); transform-origin: left; }
          45% { transform: scaleX(1); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
    </div>
  );
};

export default CinematicLoader;
