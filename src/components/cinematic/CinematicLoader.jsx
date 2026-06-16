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
  const [status, setStatus] = useState("LOADING");

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
      .to({}, { duration: 0.8, onStart: () => setStatus("COMPILING ASSETS") })
      .to({}, { duration: 0.8, onStart: () => setStatus("FINALIZING") });

    const checkReady = () => {
      if (isTransitioning.current) return;

      const allImages = Array.from(document.images);
      const imagesLoaded = allImages.length === 0 || allImages.every(img => img.complete);

      if (resourcesReadyRef.current && bootFinished.current && imagesLoaded) {
        proceedToReveal();
      } else {
        if (!resourcesReadyRef.current) setStatus("FETCHING DATA");
        else if (!imagesLoaded) setStatus("DEVELOPING VISUALS");
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
        .to(contentRef.current, {
          duration: 0.5,
          opacity: 0,
          y: -15,
          ease: "power2.in"
        })
        .set(lineRef.current, { opacity: 1, scaleY: 0 })
        .to(lineRef.current, {
          duration: 0.6,
          scaleY: 1,
          ease: "power4.inOut",
        })
        // Trigger the reveal callback exactly when the panels start moving
        .add(() => { if (onReveal) onReveal(); })
        .to(leftPanelRef.current, {
          duration: 1.2,
          x: "-100%",
          ease: "expo.inOut",
        })
        .to(rightPanelRef.current, {
          duration: 1.2,
          x: "100%",
          ease: "expo.inOut",
        }, "<")
        .to(lineRef.current, {
          duration: 0.4,
          scaleX: 0,
          opacity: 0,
          ease: "power2.out"
        }, "-=1.1") // Start fading almost immediately after panels start moving (1.2s duration - 1.1s)
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
      style={{ visibility: "hidden" }}
    >
      {/* Background Panels */}
      <div 
        ref={leftPanelRef}
        className="absolute left-0 top-0 w-1/2 h-full bg-[#fafaf9] border-r border-[#1c1917]/5 z-10"
      />
      <div 
        ref={rightPanelRef}
        className="absolute right-0 top-0 w-1/2 h-full bg-[#fafaf9] border-l border-[#1c1917]/5 z-10"
      />

      {/* Elegant Center Line */}
      <div 
        ref={lineRef}
        className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#b45309] -translate-x-1/2 opacity-0 z-30"
        style={{ transformOrigin: "center" }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-20 flex flex-col items-center">
        <div className="text-[10px] tracking-[0.5em] uppercase text-[#1c1917]/40 mb-4 font-mono">
          System Initializing
        </div>
        
        <div 
          className="text-2xl font-black text-[#1c1917] tracking-[0.2em] uppercase mb-8"
          style={{ fontFamily: '"SAILORS", "Fraunces", Georgia, serif' }}
        >
          {status}
        </div>
        
        {/* Minimal Progress Line */}
        <div className="w-32 h-[1px] bg-[#1c1917]/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-[#b45309] w-full origin-left scale-x-0 animate-[loading-bar_3s_infinite_ease-in-out]"></div>
        </div>
      </div>

      <style>{`
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
