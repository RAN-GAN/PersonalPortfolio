import { useState, useRef, useCallback, useEffect } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function useTextScramble(text, duration = 1400) {
  const [displayText, setDisplayText] = useState(() =>
    prefersReducedMotion() ? text : text.replace(/\S/g, CHARS[0])
  );
  const rafRef = useRef(null);

  const start = useCallback(() => {
    if (prefersReducedMotion()) {
      setDisplayText(text);
      return;
    }
    const startTime = performance.now();
    const len = text.length;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const result = Array.from(text)
        .map((char, i) => {
          if (char === " ") return " ";
          const revealAt = i / len;
          if (progress >= revealAt + 0.08) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(result);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayText(text);
      }
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [text, duration]);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return { displayText, start };
}
