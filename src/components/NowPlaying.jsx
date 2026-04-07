import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

let currentSong = null;
const NOW_PLAYING_ENDPOINT =
  "https://curly-pine-356e.pradeepmojo1708.workers.dev/";

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

// ─── Gradient generation from title ────────────────────────────────────────

/**
 * Maps a string to a stable hue (0–360) by summing char codes
 * with a positional prime multiplier for better spread.
 */
function stringToHue(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) & 0xffffffff;
  }
  return Math.abs(hash) % 360;
}

/**
 * Derives a secondary hue by rotating ~120–160° from the primary,
 * always picking the aesthetically richer direction.
 */
function deriveSecondaryHue(primaryHue) {
  // Prefer a "split-complementary" offset
  const offset = 120 + ((primaryHue * 7) % 50); // 120–170 range
  return (primaryHue + offset) % 360;
}

/**
 * Generates a beautiful Apple-style gradient CSS string
 * based purely on the track title.
 *
 * Strategy:
 *   - Primary hue  → derived from full title string
 *   - Secondary hue → split-complementary rotation
 *   - Both at high saturation (65–80 %), medium-low lightness (25–40 %)
 *     so white text always reads clearly on top
 */
function titleToGradient(title) {
  if (!title || title === "Not playing") {
    return "linear-gradient(135deg, #1a1a24 0%, #252530 100%)";
  }

  const normalized = title.toLowerCase().trim();
  const h1 = stringToHue(normalized);
  const h2 = deriveSecondaryHue(h1);

  // Vary saturation & lightness slightly per title for more personality
  const titleLen = normalized.length;
  const s1 = 62 + (titleLen % 18); // 62–80 %
  const l1 = 22 + ((h1 * 3) % 14); // 22–36 %
  const s2 = 55 + ((h2 * 2) % 20); // 55–75 %
  const l2 = 28 + ((h2 * 5) % 12); // 28–40 %

  const c1 = `hsl(${h1}, ${s1}%, ${l1}%)`;
  const c2 = `hsl(${h2}, ${s2}%, ${l2}%)`;

  // Angle varies slightly per title for uniqueness
  const angle = 120 + (h1 % 60); // 120–180°

  return `linear-gradient(${angle}deg, ${c1} 0%, ${c2} 100%)`;
}

// ─── Image helpers ──────────────────────────────────────────────────────────

const mimeTypeByBase64Prefix = {
  "/9j/": "image/jpeg",
  iVBOR: "image/png",
  R0lGO: "image/gif",
  UklGR: "image/webp",
};

function getMimeType(base64Value) {
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

// ─── Track normalisation ────────────────────────────────────────────────────

function normalizeTrack(payload) {
  const title = typeof payload?.title === "string" ? payload.title.trim() : "";
  const artist =
    typeof payload?.artist === "string" ? payload.artist.trim() : "";
  const image = typeof payload?.image === "string" ? payload.image : "";
  const status =
    typeof payload?.status === "string" ? payload.status.toLowerCase() : "";

  const explicitPlayingFlag =
    typeof payload?.isPlaying === "boolean"
      ? payload.isPlaying
      : typeof payload?.playing === "boolean"
        ? payload.playing
        : typeof payload?.is_playing === "boolean"
          ? payload.is_playing
          : null;

  const isPlaying =
    explicitPlayingFlag ??
    (status ? status === "playing" : Boolean(title && artist));

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

// ─── Fetch ──────────────────────────────────────────────────────────────────

async function fetchNowPlayingPayload({ signal }) {
  try {
    let url = NOW_PLAYING_ENDPOINT;
    if (currentSong?.title) {
      const params = new URLSearchParams({ title: currentSong.title });
      url += `?${params.toString()}`;
    }

    const response = await fetch(url, {
      method: "GET",
      signal,
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Failed (${response.status})`);

    const result = await response.json();

    if (result.status === "no_change") return { type: "no_change" };
    if (result.status === "updated") {
      currentSong = { title: result.data.title, artist: result.data.artist };
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

// ─── Component ──────────────────────────────────────────────────────────────

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
      if (result.type === "updated")
        applyTrackWithTransition(normalizeTrack(result.data));
      if (result.type === "empty") applyTrackWithTransition(EMPTY_TRACK);
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

  // ── Derived background ─────────────────────────────────────────────────

  const hasAlbumArt = Boolean(track.imageUrl);

  /**
   * When album art is present  → blur the art behind the card (existing behaviour).
   * When album art is absent   → use a title-derived gradient instead.
   */
  const fallbackGradient = useMemo(
    () => titleToGradient(track.title),
    [track.title],
  );

  const isPlaying = track.isPlaying;
  if (!isPlaying) return null;

  return (
    <section className="w-full flex justify-center" aria-live="polite">
      <div
        className="relative w-full max-w-[400px] overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-0.5"
        style={{ minHeight: "130px" }}
      >
        {/* ── Layer 1: album-art blurred background (only when art exists) ── */}
        {hasAlbumArt && (
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              backgroundImage: `url(${track.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(20px)",
              transform: "scale(1.1)",
              opacity: 1,
            }}
            aria-hidden="true"
          />
        )}

        {/* ── Layer 2: title-derived gradient (only when no art) ── */}
        {!hasAlbumArt && (
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: fallbackGradient,
              opacity: 1,
            }}
            aria-hidden="true"
          />
        )}

        {/*
         * ── Layer 3: subtle noise / grain texture overlay
         *    Adds that tactile Apple-glass feeling on the gradient.
         *    A tiny SVG-based noise rendered as a data-URI — no external request.
         */}
        {!hasAlbumArt && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px 180px",
              opacity: 0.035,
              mixBlendMode: "overlay",
            }}
            aria-hidden="true"
          />
        )}

        {/* ── Layer 4: specular highlight (top edge, gives glass depth) ── */}
        {!hasAlbumArt && (
          <div
            className="absolute inset-x-0 top-0 h-px pointer-events-none"
            style={{ background: "rgba(255,255,255,0.18)" }}
            aria-hidden="true"
          />
        )}

        {/* ── Layer 5: bottom-heavy scrim — always present for readability ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.72) 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Content ── */}
        <div
          className="relative z-10 flex flex-col justify-between p-4"
          style={{ minHeight: "130px" }}
        >
          {/* Top row: label + pulse dot + refresh */}
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
                  background: "#34d399",
                }}
                animate={
                  prefersReducedMotion
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
                  prefersReducedMotion
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
              {/* Title */}
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

              {/* Artist */}
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
              style={{ height: "20px" }}
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
                    prefersReducedMotion
                      ? { scaleY: 0.3 }
                      : { scaleY: [0.3, 1, 0.3] }
                  }
                  transition={
                    prefersReducedMotion
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

export default NowPlaying;
