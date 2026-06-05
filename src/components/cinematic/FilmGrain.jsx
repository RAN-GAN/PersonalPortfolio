import React from "react";

export default function FilmGrain({ opacity = 0.20 }) {
  return (
    <svg
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 90,
        pointerEvents: "none",
        opacity,
        mixBlendMode: "multiply",
      }}
      aria-hidden="true"
    >
      <filter id="cinematic-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect
        width="200%"
        height="200%"
        x="-50%"
        y="-50%"
        filter="url(#cinematic-grain)"
        className="cinematic-grain"
      />
    </svg>
  );
}
