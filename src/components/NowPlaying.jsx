import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const NOW_PLAYING_ENDPOINT = import.meta.env.DEV
  ? "/api/now-playing"
  : "https://curly-pine-356e.pradeepmojo1708.workers.dev/";
const REFRESH_INTERVAL_MS = 120000;
const TRANSITION_DURATION_MS = 200;

const WAVE_BAR_COUNT = 28;
const WAVE_DURATIONS = [
  0.7, 0.9, 0.65, 1.0, 0.8, 0.75, 0.95, 0.85, 0.7, 1.1, 0.9, 0.6, 0.8, 1.0, 0.7,
  0.88, 0.65, 0.95, 0.75, 0.82, 0.68, 1.05, 0.9, 0.72, 0.85, 0.6, 0.78, 0.92,
];
const WAVE_HEIGHTS = [
  38, 55, 44, 66, 40, 58, 48, 70, 36, 60, 50, 42, 62, 46, 72, 38, 56, 44, 68,
  40, 64, 48, 36, 58, 44, 70, 50, 42,
];
const WAVE_DELAYS = [
  0, 0.12, 0.07, 0.19, 0.04, 0.15, 0.09, 0.22, 0.01, 0.17, 0.11, 0.06, 0.2,
  0.08, 0.24, 0.03, 0.14, 0.1, 0.21, 0.05, 0.18, 0.13, 0.02, 0.16, 0.07, 0.23,
  0.11, 0.04,
];

const EMPTY_TRACK = {
  title: "Not playing",
  artist: "Pradeep is not listening to anything right now",
  imageUrl: "",
  isPlaying: false,
  identity: "not-playing",
};

const mimeTypeByBase64Prefix = {
  "/9j/": "image/jpeg",
  iVBOR: "image/png",
  R0lGO: "image/gif",
  UklGR: "image/webp",
};

function getMimeType(base64Value) {
  const signature = base64Value.slice(0, 5);
  return mimeTypeByBase64Prefix[signature] || "image/jpeg";
}

function toDataUrl(imageValue) {
  if (!imageValue || typeof imageValue !== "string") {
    return "";
  }

  if (imageValue.startsWith("data:image")) {
    return imageValue;
  }

  const mimeType = getMimeType(imageValue);
  return `data:${mimeType};base64,${imageValue}`;
}

function normalizeTrack(payload) {
  const title = typeof payload?.title === "string" ? payload.title.trim() : "";
  const artist =
    typeof payload?.artist === "string" ? payload.artist.trim() : "";
  const image = typeof payload?.image === "string" ? payload.image.trim() : "";

  if (!title || !artist) {
    return EMPTY_TRACK;
  }

  const imageUrl = toDataUrl(image);
  return {
    title,
    artist,
    imageUrl,
    isPlaying: true,
    identity: `${title.toLowerCase()}|${artist.toLowerCase()}|${image.slice(0, 24)}`,
  };
}

function NowPlaying() {
  const prefersReducedMotion = useReducedMotion();
  const [track, setTrack] = useState(EMPTY_TRACK);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const abortRef = useRef(null);
  const transitionRef = useRef(null);
  const identityRef = useRef(EMPTY_TRACK.identity);

  const waveBars = useMemo(
    () =>
      Array.from({ length: WAVE_BAR_COUNT }, (_, index) => ({
        duration: `${WAVE_DURATIONS[index]}s`,
        delay: `${WAVE_DELAYS[index]}s`,
        height: `${WAVE_HEIGHTS[index]}%`,
      })),
    [],
  );

  const applyTrackWithTransition = (nextTrack) => {
    const hasChanged = identityRef.current !== nextTrack.identity;

    if (!hasChanged) {
      setTrack(nextTrack);
      return;
    }

    if (transitionRef.current) {
      clearTimeout(transitionRef.current);
    }

    setIsTransitioning(true);
    transitionRef.current = setTimeout(() => {
      identityRef.current = nextTrack.identity;
      setTrack(nextTrack);
      setIsTransitioning(false);
    }, TRANSITION_DURATION_MS);
  };

  const fetchNowPlaying = async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch(NOW_PLAYING_ENDPOINT, {
        method: "GET",
        signal: controller.signal,
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Unable to fetch now playing status");
      }

      const payload = await response.json();
      const nextTrack = normalizeTrack(payload);
      applyTrackWithTransition(nextTrack);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }

      if (identityRef.current === EMPTY_TRACK.identity) {
        setTrack(EMPTY_TRACK);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    intervalRef.current = setInterval(fetchNowPlaying, REFRESH_INTERVAL_MS);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (transitionRef.current) {
        clearTimeout(transitionRef.current);
      }
      abortRef.current?.abort();
    };
  }, []);

  const bottomLabel = track.isPlaying
    ? `Playing · ${track.artist}`
    : "No track playing";
  const isPlaying = track.isPlaying;

  const toneClass = isPlaying
    ? {
        // PLAYING → dynamic background → needs stronger contrast
        card: "bg-white/10 border-white/20 backdrop-blur-xl",
        overlay: "bg-black/30",

        label: "text-white/70 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]",
        title: "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]",
        artist: "text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]",

        wave: "bg-white/80",
        divider: "bg-white/25",

        bottom: "text-white/75",
        icon: "text-white/85",
      }
    : {
        // NOT PLAYING → no image → needs subtle structure, not transparency chaos
        card: "bg-white/40 border-black/10 backdrop-blur-md",
        overlay: "bg-white/30",

        label: "text-black/60",
        title: "text-black",
        artist: "text-black/70",

        wave: "bg-black/60",
        divider: "bg-black/10",

        bottom: "text-black/60",
        icon: "text-black/70",
      };
  return (
    <section className="w-full flex justify-center" aria-live="polite">
      <div
        className={`group relative w-full max-w-[400px] overflow-hidden rounded-[22px] border backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 ${toneClass.card}`}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: track.imageUrl ? `url(${track.imageUrl})` : "none",
            transform: "scale(1.18)",
            filter: "blur(30px) saturate(1.8) brightness(0.45)",
          }}
          aria-hidden="true"
        />

        <div
          className={`absolute inset-0 ${toneClass.overlay}`}
          aria-hidden="true"
        />

        <div className="relative z-10 rounded-[22px] border border-white/10 p-4 sm:px-4 sm:py-[13px]">
          <div className="flex items-center gap-[13px]">
            <div className="relative h-[60px] w-[60px] shrink-0">
              <motion.div
                className={`relative h-[60px] w-[60px] overflow-hidden border bg-[rgba(120,120,140,0.15)] ${
                  isPlaying
                    ? "rounded-full border-white/20"
                    : "rounded-xl border-black/10"
                }`}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : isPlaying
                      ? { rotate: 360 }
                      : { rotate: 0 }
                }
                transition={
                  prefersReducedMotion || !isPlaying
                    ? { duration: 0 }
                    : { duration: 9, ease: "linear", repeat: Infinity }
                }
              >
                {track.imageUrl ? (
                  <img
                    src={track.imageUrl}
                    alt={
                      track.isPlaying ? `${track.title} album art` : "Album art"
                    }
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-[0.14em] text-black/35">
                    idle
                  </div>
                )}
              </motion.div>
              <div
                className={`pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-white/25 bg-slate-950/90 transition-opacity duration-300 ${
                  isPlaying ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p
                className={`m-0 text-[9px] font-medium uppercase tracking-[0.2em] ${toneClass.label}`}
              >
                Now listening
              </p>
              <div
                className={`transition-all duration-200 ${isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}
                key={track.identity}
              >
                <p
                  className={`m-0 truncate text-[20px] font-semibold leading-[1.15] tracking-[-0.01em] ${toneClass.title}`}
                >
                  {isLoading && !track.isPlaying
                    ? "Checking music..."
                    : track.title}
                </p>
                <p
                  className={`mt-1 truncate text-[13px] leading-[1.35] ${toneClass.artist}`}
                >
                  {isLoading && !track.isPlaying ? "Please wait" : track.artist}
                </p>
              </div>
            </div>

            <motion.div
              className={`h-[7px] w-[7px] shrink-0 rounded-full ${
                isPlaying ? "bg-emerald-400" : "bg-slate-400/60"
              }`}
              animate={
                prefersReducedMotion || !isPlaying
                  ? undefined
                  : {
                      boxShadow: [
                        "0 0 0 0 rgba(52,211,153,0.5)",
                        "0 0 0 6px rgba(52,211,153,0)",
                        "0 0 0 0 rgba(52,211,153,0)",
                      ],
                    }
              }
              transition={
                prefersReducedMotion || !isPlaying
                  ? { duration: 0 }
                  : { duration: 2, ease: "easeOut", repeat: Infinity }
              }
              aria-hidden="true"
            />
          </div>

          <div
            className={`mt-3 flex h-4 items-end gap-[2.5px] ${isPlaying ? "opacity-100" : "opacity-40"}`}
            aria-hidden="true"
          >
            {waveBars.map((bar, index) => (
              <motion.span
                key={`wave-${index}`}
                className={`flex-1 rounded-sm ${toneClass.wave}`}
                animate={
                  prefersReducedMotion || !isPlaying
                    ? { scaleY: 0.3 }
                    : { scaleY: [0.3, 1, 0.3] }
                }
                transition={
                  prefersReducedMotion || !isPlaying
                    ? { duration: 0 }
                    : {
                        duration: Number.parseFloat(bar.duration),
                        delay: Number.parseFloat(bar.delay),
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                style={{
                  height: bar.height,
                  transformOrigin: "bottom",
                }}
              />
            ))}
          </div>

          <div className={`my-[9px] h-px ${toneClass.divider}`} />

          <div className="flex items-center justify-between">
            <span
              className={`text-[10.5px] tracking-[0.04em] ${toneClass.bottom}`}
            >
              {bottomLabel}
            </span>
            <button
              type="button"
              className={`rounded-md p-[3px] transition-opacity duration-200 hover:opacity-60 ${toneClass.icon}`}
              title="Refresh"
              onClick={fetchNowPlaying}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3 w-3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NowPlaying;
