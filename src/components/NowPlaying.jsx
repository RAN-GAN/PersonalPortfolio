import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
let currentSong = null;
const NOW_PLAYING_ORIGIN =
  "https://curly-pine-356e.pradeepmojo1708.workers.dev/";
const NOW_PLAYING_ENDPOINT = import.meta.env.DEV
  ? "/api/now-playing"
  : NOW_PLAYING_ORIGIN;

const REFRESH_INTERVAL_MS = 100000;
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
  // Strip whitespace/newlines before checking prefix
  const clean = base64Value.replace(/\s/g, "");
  const signature = clean.slice(0, 5);
  return mimeTypeByBase64Prefix[signature] || "image/jpeg";
}

function toDataUrl(imageValue) {
  if (!imageValue || typeof imageValue !== "string") return "";
  const clean = imageValue.replace(/\s/g, "");
  if (clean.startsWith("data:image")) return clean;
  return `data:${getMimeType(clean)};base64,${clean}`;
}

function normalizeTrack(payload) {
  const title = typeof payload?.title === "string" ? payload.title.trim() : "";
  const artist =
    typeof payload?.artist === "string" ? payload.artist.trim() : "";
  const image = typeof payload?.image === "string" ? payload.image : "";
  // payload uses "status": "playing" | "stopped" (not a boolean)
  const isPlaying = payload?.status === "playing";

  if (!isPlaying || !title || !artist) return EMPTY_TRACK;

  const imageUrl = toDataUrl(image);
  return {
    title,
    artist,
    imageUrl,
    isPlaying: true,
    identity: `${title.toLowerCase()}|${artist.toLowerCase()}|${image.replace(/\s/g, "").slice(0, 24)}`,
  };
}

async function fetchNowPlayingPayload({ signal }) {
  try {
    let url = NOW_PLAYING_ENDPOINT;

    if (currentSong?.title) {
      const params = new URLSearchParams({
        title: currentSong.title,
      });
      url += `?${params.toString()}`;
    }

    const response = await fetch(url, {
      method: "GET",
      signal,
      cache: "no-store",
    });

    if (!response.ok) throw new Error(`Failed (${response.status})`);

    const result = await response.json();

    if (result.status === "no_change") {
      return { type: "no_change" };
    }

    if (result.status === "updated") {
      currentSong = {
        title: result.data.title,
        artist: result.data.artist,
      };
      return { type: "updated", data: result.data };
    }

    if (result.status === "empty") {
      currentSong = null;
      return { type: "empty" };
    }

    return { type: "no_change" };
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw error;
  }
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
      Array.from({ length: WAVE_BAR_COUNT }, (_, i) => ({
        duration: `${WAVE_DURATIONS[i]}s`,
        delay: `${WAVE_DELAYS[i]}s`,
        height: `${WAVE_HEIGHTS[i]}%`,
      })),
    [],
  );

  const applyTrackWithTransition = (nextTrack) => {
    if (identityRef.current === nextTrack.identity) {
      setTrack(nextTrack);
      return;
    }
    if (transitionRef.current) clearTimeout(transitionRef.current);
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
      const result = await fetchNowPlayingPayload({
        signal: controller.signal,
      });

      if (result.type === "updated") {
        applyTrackWithTransition(normalizeTrack(result.data));
      }

      if (result.type === "empty") {
        applyTrackWithTransition(EMPTY_TRACK);
      }

      // if no_change → do nothing (correct behavior)
    } catch (error) {
      if (error.name === "AbortError") return;
      setTrack(EMPTY_TRACK);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    intervalRef.current = setInterval(fetchNowPlaying, REFRESH_INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (transitionRef.current) clearTimeout(transitionRef.current);
      abortRef.current?.abort();
    };
  }, []);

  const isPlaying = track.isPlaying;
  if (isPlaying) {
    return (
      <section className="w-full flex justify-center" aria-live="polite">
        <div className="relative w-full max-w-[400px] overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-0.5">
          {/* Album art — full bleed, no blur */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                backgroundImage: track.imageUrl
                  ? `url(${track.imageUrl})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: isPlaying ? 1 : 0,
                filter: "blur(20px)", // 👈 blur strength
                transform: "scale(1.1)", // 👈 prevents edge cut after blur
              }}
              aria-hidden="true"
            />
          </div>

          {/* Fallback dark bg when not playing */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background: "linear-gradient(135deg, #1a1a24 0%, #252530 100%)",
              opacity: isPlaying ? 0 : 1,
            }}
            aria-hidden="true"
          />

          {/* Bottom-heavy scrim so text is always readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.76) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div
            className="relative z-10 flex flex-col justify-between p-4"
            style={{ minHeight: "130px" }}
          >
            {/* Top: label + dot + refresh */}
            <div className="flex items-center justify-between">
              <p
                style={{
                  margin: 0,
                  fontSize: "9px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Pradeep is Now listening
              </p>

              <div className="flex items-center gap-2">
                <motion.div
                  className="rounded-full"
                  style={{
                    width: "7px",
                    height: "7px",
                    background: isPlaying ? "#34d399" : "rgba(255,255,255,0.2)",
                  }}
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

                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "2px",
                    color: "rgba(255,255,255,0.5)",
                    display: "flex",
                    alignItems: "center",
                    transition: "opacity 0.2s",
                  }}
                  title="Refresh"
                  onClick={fetchNowPlaying}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.4")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    width="11"
                    height="11"
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

            {/* Bottom: title + artist + waveform */}
            <div className="mt-4">
              <div
                className={`transition-all duration-200 ${
                  isTransitioning
                    ? "opacity-0 translate-y-1"
                    : "opacity-100 translate-y-0"
                }`}
                key={track.identity}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "22px",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    color: "#fff",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                  }}
                >
                  {isLoading ? "Checking…" : track.title}
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.72)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                  }}
                >
                  {isLoading ? "Please wait" : track.artist}
                </p>
              </div>

              {/* Waveform */}
              <div
                className="mt-3 flex items-end gap-[2.5px]"
                style={{ height: "20px", opacity: isPlaying ? 1 : 0.2 }}
                aria-hidden="true"
              >
                {waveBars.map((bar, index) => (
                  <motion.span
                    key={`wave-${index}`}
                    className="flex-1 rounded-sm"
                    style={{
                      height: bar.height,
                      transformOrigin: "bottom",
                      background: "rgba(255,255,255,0.7)",
                    }}
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
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default NowPlaying;
