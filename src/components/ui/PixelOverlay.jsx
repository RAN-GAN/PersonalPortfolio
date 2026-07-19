import React, { useState, useEffect, useMemo } from 'react';

export default function PixelOverlay({ isAnimating, onMidpoint, onComplete }) {
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });
  const [phase, setPhase] = useState('idle'); // idle, mount, cover, reveal
  const [newColor, setNewColor] = useState('#1c1917');

  // Compute random delays once per grid size so they are consistent during the transition
  const delays = useMemo(() => {
    return Array.from({ length: grid.cols * grid.rows }).map(() => Math.random() * 300);
  }, [grid.cols, grid.rows]);

  useEffect(() => {
    const updateGrid = () => {
      const size = 32; // 32px is a sweet spot for retro pixel size
      setGrid({
        cols: Math.ceil(window.innerWidth / size),
        rows: Math.ceil(window.innerHeight / size),
      });
    };
    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  useEffect(() => {
    if (isAnimating && phase === 'idle') {
      const isDark = document.documentElement.classList.contains("dark");
      // If we are currently light, we will switch to dark, so cover the screen in dark.
      setNewColor(isDark ? '#fafaf9' : '#1c1917'); 
      setPhase('mount');
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase('cover');
        });
      });
    }
  }, [isAnimating, phase]);

  useEffect(() => {
    if (phase === 'cover') {
      const timer = setTimeout(() => {
        if (onMidpoint) onMidpoint();
        setPhase('reveal');
      }, 350); // 200ms max delay + 150ms transition time
      return () => clearTimeout(timer);
    } else if (phase === 'reveal') {
      const timer = setTimeout(() => {
        setPhase('idle');
        if (onComplete) onComplete();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [phase, onMidpoint, onComplete]);

  if (phase === 'idle' || grid.cols === 0) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999, pointerEvents: 'none',
      display: 'grid',
      gridTemplateColumns: `repeat(${grid.cols}, 1fr)`,
      gridTemplateRows: `repeat(${grid.rows}, 1fr)`
    }}>
      {delays.map((delay, i) => (
        <div
          key={i}
          style={{
            backgroundColor: newColor,
            width: '101%', height: '101%', // slight overlap prevents subpixel gaps
            opacity: phase === 'cover' ? 1 : 0,
            transition: phase === 'mount' ? 'none' : `opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
          }}
        />
      ))}
    </div>
  );
}
