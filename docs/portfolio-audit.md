# Portfolio — Design Audit

> Refreshed: 2026-06-17 · Scope: full design audit (design system, typography, color/contrast, layout/responsiveness, accessibility, motion, brand coherence)
> Method: source read across all 3 design languages (cinematic / freelance / archive) + manual verification of every high-severity claim. Findings tagged **[verified]** (confirmed in code) or **[flagged]** (needs a live/browser check — e.g. exact contrast ratios).

> **Status (2026-06-17):** First fix batch applied — see the *Applied* changelog at the bottom. Several first-pass findings were corrected during implementation (story-scroll is live, not dead; GSAP motion was already gated; freelance has a `<main>`; freelance Framer animations are extensive). Corrections are inline below and summarized in the changelog.

---

## TL;DR

The site carries **three unrelated visual languages** — warm light "detective/cinematic" home, dark cyberpunk freelance page, minimal archive pages — with **no shared design system between them**. Tokens are defined twice and inconsistently, the two hero fonts the whole design is built on (**SAILORS**, **Proxima Nova**) **never load**, and ~2,500 lines of pre-redesign components are dead but still shipping. Accessibility is the weakest area: freelance has **zero focus states** and ungated motion.

**Priority order:** P0 (fix now) → P1 (this iteration) → P2 (polish/cleanup).

---

## P0 — Fix now

### 1. Primary display fonts never load → entire type design is fallback [verified — SCAFFOLDED, blocked on font files]
> **Status:** Chose self-host. Wiring is in place (`@font-face` in `src/index.css`, base-correct `/PersonalPortfolio/fonts/` paths, `font-display: swap`; instructions in `public/fonts/README.md`). **Blocked:** drop the licensed `sailors.woff2` + `proxima-nova-{regular,semibold,bold}.woff2` into `public/fonts/` and they render automatically. Until then it falls back to Fraunces/DM Sans exactly as before.

- `src/index.css:14-15` declares `--font-display: "SAILORS", "Fraunces"…` and `--font-body: "Proxima Nova", "DM Sans"…`, but the Google Fonts `@import` (`src/index.css:1`) only loads **Fraunces, DM Sans, DM Mono**. `index.html:46` even admits SAILORS/Proxima "load via font host when available" — they aren't.
- Impact: every heading and body block renders in the *fallback*, so the design users see is not the design that was built. All weight/width/line-height tuning is calibrated for fonts that aren't there.
- Fix: either self-host SAILORS + Proxima Nova (`@font-face`, `font-display: swap`, preload), or commit to Fraunces/DM Sans as the real display/body fonts and retune. Don't ship a primary font you don't load.

### 2. Dual, conflicting token systems [verified — DONE]
> **Status:** `tailwind.config.js` was fully inert under Tailwind v4 (no `@config` directive loads it) and no live code used its tokens. Deleted it; `src/index.css` `@theme` is now the single source of truth. The `td-border` mismatch resolves to the `@theme` value `#d4cfc8`.

- Tokens defined twice: `src/index.css` `@theme` block **and** `tailwind.config.js` `theme.extend`. With Tailwind v4 + `@tailwindcss/vite`, the `@theme` block is the source of truth; the JS config is largely vestigial.
- They disagree: `td-border` is `#d4cfc8` (index.css:7) vs `#e2ddd6` (tailwind.config.js:33). `font-sans` in JS config is **"Outfit"** (tailwind.config.js:8) — a font that is neither loaded nor referenced anywhere else.
- Impact: no single source of truth for color; "fix the border color" requires editing two files; dead `Outfit`/`primary`/`secondary`/`accent`/`link-*` tokens mislead.
- Fix: collapse to one system (the `@theme` block). Delete the redundant `tailwind.config.js` theme or reduce it to what v4 still needs. Remove unused tokens.

### 3. Freelance page has zero keyboard focus states [verified — DONE]
> **Status:** Moved the focus-visible rule from `.cinematic-page`-scoped to **global** (`a/button/[role=button]/[tabindex]`), plus a dark-aware variant under `.freelance-theme` (now applied to the freelance root). Every theme has visible keyboard focus.

- `grep` across `src/components/freelance/**` + `FreelancePortfolio.jsx`: **no `:focus`, no `focus-visible`**. The only focus styling in the app is scoped to `.cinematic-page` (`src/index.css:75-79`), which the freelance page never applies.
- Every nav link, CTA (`HeroSection`, `FooterCTA`), project link, service/pricing card is keyboard-invisible. Hover-only state via `onMouseEnter/Leave` is also unreachable by keyboard and dead on touch.
- Fix: add a global `:focus-visible` outline (not scoped to one theme), e.g. `a:focus-visible, button:focus-visible { outline: 2px solid #C75B21; outline-offset: 3px; }`.

### 4. Hero fonts not loaded compounds with hidden-until-animated content
- `src/App.jsx:46` keeps the whole app at `opacity-0` until the loader fires `onReveal`. Combined with fallback fonts (P0-1) and `Suspense fallback={null}` (App.jsx:14), first paint is a blank/boot-shell state for longer than necessary.
- Fix: ensure the boot shell font matches the real one, preload fonts, and confirm content isn't gated behind a long mandatory animation for reduced-motion users (see P1-3).

---

## P1 — This iteration

### 1. Brand fragmentation: three design languages, no bridge [verified]
- Cinematic home: warm `#fafaf9` / amber `#b45309` / serif. Freelance: near-black `#111110`/`#09090b`, cyberpunk. Archive: minimal. Navigating home → freelance is a hard visual cut with no shared nav, type, or token vocabulary.
- This is a legitimate *choice* (freelance as a separate landing) but right now reads as two different people's sites. Decide: deliberately distinct (then make each internally consistent + add a clear "back to main" bridge) or unify the palette/type.

### 2. Dead code [verified — DONE for the legacy chain] — first-pass list corrected
- **Corrected:** `components/ui/story-scroll.jsx` is **NOT dead** — `FreelancePortfolio.jsx:10` imports `FlowArt`/`FlowSection` as the page's scroll wrapper. `components/PixelBlast.jsx` is **not orphaned** either — `freelance/InteractiveBackground.jsx` imports it. (Both first-pass "dead" calls were wrong.)
- **Deleted (genuine legacy, pre-cinematic, 0 live importers):** `components/Home.jsx` + its exclusive children `Header.jsx`, `AboutSection.jsx`, `LinkGrid.jsx`, `ContentToggle.jsx`, `ProfileImage.jsx`; the duplicate legacy `components/NowPlaying.jsx` (the live one is `cinematic/NowPlaying.jsx`); old `components/Projects.jsx`.
- **Dormant, kept on purpose (current-era, unwired, tree-shaken out → zero bundle cost):** `cinematic/FogParticles.jsx` (author left a "re-enable if needed" note), `freelance/InteractiveBackground.jsx` + `components/PixelBlast.jsx` (unwired freelance effects), `pages/TechStackPage.jsx` (route commented).
- `pages/TechStackPage.jsx` was **still `lazy`-imported** (`App.jsx:8`) → emitted a dead chunk. **DONE:** import removed (file + commented route kept as WIP record).
- `three` / `postprocessing` are referenced only by the dormant `PixelBlast`/`FogParticles`; not in a live import graph → already tree-shaken. Kept the deps because those dormant files are kept intentionally.

### 3. Motion gating [verified — DONE] — first-pass mostly wrong, real gap was narrow
- **Corrected:** most motion was *already* gated. `CinematicHome` early-returns on `prefersReducedMotion()` **before** both Lenis *and* the GSAP pin timeline (`CinematicHome.jsx:109`). `story-scroll` FlowArt early-returns on reduced motion (`story-scroll.jsx:62`). The global `@media (prefers-reduced-motion)` net (`index.css:82-97`) neutralizes CSS-keyframe animations incl. `fl2-marquee`/`fl2-blink`/grain. So the marquee/cursor/GSAP claims were false.
- **Real remaining gap:** Framer Motion's JS-driven animations (e.g. `InteractiveBackground` infinite ring rotation, and the extensive `motion.*` reveals across freelance) — the CSS `!important` net can't reach these.
- **DONE:** wrapped the app in `<MotionConfig reducedMotion="user">` (`App.jsx`) so every Framer Motion animation honors the OS setting.

### 4. Freelance focus + scroll-snap [verified — DONE] — landmark claim corrected
- **Corrected:** freelance is **not** missing a `<main>` — `FlowArt` (story-scroll) renders `<main aria-label=…>`. The "no landmark" finding was wrong.
- **DONE (focus):** see P0-3 — focus ring is now global; additionally applied `className="freelance-theme"` to the freelance root so its dark-aware focus halo binds (the class was previously defined in CSS but never applied to any element).
- **DONE (scroll-snap):** freelance now sets `data-cinematic` on mount (`FreelancePortfolio.jsx`) to opt out of the global mandatory snap, matching the archive pages. (Longer term still worth making snap opt-*in* via a class + a shared `useArchivePage()` hook.)

### 5. Contrast — muted/low-opacity text near or below AA [flagged — verify with a checker]
- Honest correction to first-pass numbers: `#8B7D6B` on `#111110` ≈ **4.6:1** (borderline *pass* for normal text, not a fail). Don't over-rotate on it.
- Genuine fails are the **low-opacity whites on near-black**: `rgba(247,243,236,0.18)` footer copyright (`FooterCTA.jsx:136`), `rgba(247,243,236,0.2)` stat subtitle (`WhyChooseMe.jsx:139`) → well under 3:1.
- Cinematic muted text at 40% ink on light (mobile nav `CinematicHome` ~`rgba(28,25,23,0.40)`) is also suspect.
- Fix: run the palette through a contrast checker; raise muted text to ≥4.5:1 (or ≥3:1 only if genuinely large/bold). Note: the "white-on-white primary CTA" flagged in first pass is **false** — `ctaBtn(true)` is dark text `#111110` on cream `#F7F3EC`, fine.

### 6. Mobile legibility & touch targets [verified in code; visual check recommended]
- Sub-readable mono labels: `clamp(0.5rem,0.72vw,0.6rem)` and `clamp(0.55rem,0.78vw,0.65rem)` in `CinematicHome`/`HeroSection` → ~8px on phones.
- Mobile nav dots ~6px hit target (`CinematicHome`) — below the 44px touch-target guideline.
- Fix: floor mono labels at ~11–12px; give dots a padded ≥44px tap zone.

---

## P2 — Polish & cleanup

- **Hardcoded hex everywhere instead of tokens** [verified]: cinematic (`GROUP_COLORS`, `FilmGrain`, inline rgba) and *all* of freelance (the `--fl-bg/-fg/-border/-card` vars in `index.css:118-122` are defined but **never used** — every freelance color is hardcoded). Route colors through tokens.
- **Breakpoint inconsistency** [verified]: freelance mixes 960px (work grid), 860px (hero), 640px (everything else); JS in `SelectedWork` hardcodes `max-width: 960px` separately from CSS. No tablet (768px) handling → iPad sees mismatched 1-col/2-col sections. Define breakpoints once as shared constants.
- **`!important` cascade smell** [verified]: `.fl2-process-grid { grid-template-columns: 1fr 1fr !important }` at 640px (`index.css:211`) — fix specificity instead.
- **Fixed `400px` work column** (`index.css:170`) compresses the left column on 960–1200px screens; prefer `minmax`/`fr`.
- **`favicon` / asset base path** [verified]: `index.html:19` points to `/vite.svg` (still the Vite default) and og:image to `/me.png` — absolute paths that break under the `/PersonalPortfolio/` GitHub Pages base. Use base-relative asset URLs and a real favicon.
- **SEO/meta**: og:image `summary` card + default favicon; verify `me.png` exists at the deployed base.
- **`portfolio.js` data model** [verified]: legacy `rgb(...)` color strings inline; no `year` / `category` / `featured` / image-`alt` fields; `SKILLS` carry hardcoded `x/y` pixel coords (couples data to one layout). Add structured metadata; move layout coords out of data.
- **Alt text quality**: `SelectedWork` uses `alt={p.title}` (title ≠ description). Write descriptive alt.
- **Loader semantics**: `CinematicLoader` status text has no `role="status"` / `aria-live`.
- **z-index**: `FilmGrain` (90) sits above nav (80) in `CinematicHome` — confirm grain shouldn't capture/over-paint nav.

---

## What's already good
- Reduced-motion handled well in `TextScramble`, cinematic `NowPlaying`, `DoubleExposureCanvas`.
- Correct heading hierarchy on cinematic + archive (h1 hero → h2 chapter → h3 cards).
- `aria-hidden` on decorative SVG connectors; `role="img"` + label on `DoubleExposureCanvas`.
- Archive pages correctly opt out of scroll-snap via `data-cinematic`.
- Lazy-loaded routes; intersection-observer pausing for the double-exposure canvas.

---

## Suggested sequence
1. **Fonts** (P0-1) — biggest visual delta for least effort.
2. **One token system** (P0-2) — unblocks consistent color fixes.
3. **Global focus + reduced-motion gating** (P0-3, P1-3) — accessibility floor.
4. **Delete dead code** (P1-2) — shrinks surface before further work.
5. **Decide brand strategy** (P1-1), then contrast/mobile/breakpoint passes (P1-5/6, P2).

---

## Applied — 2026-06-17 (batch 1)

**Done**
- **Token system:** deleted inert `tailwind.config.js`; `@theme` in `src/index.css` is the single source of truth. (P0-2)
- **Global focus states:** focus-visible now global + dark-aware on `.freelance-theme`; applied `freelance-theme` class to the freelance root. (P0-3)
- **Reduced motion:** wrapped app in `<MotionConfig reducedMotion="user">` — closes the only real gap (Framer JS animations). (P1-3)
- **Scroll-snap:** freelance opts out of global mandatory snap via `data-cinematic`. (P1-4)
- **Font self-host scaffold:** `@font-face` + `public/fonts/README.md`; awaiting licensed `.woff2` files. (P0-1, blocked)
- **Dead code:** removed legacy chain (`Home` + `Header`/`AboutSection`/`LinkGrid`/`ContentToggle`/`ProfileImage`, legacy `NowPlaying`, old `Projects`); removed unused `TechStackPage` lazy import. (P1-2)

**Verification:** `npm run build` ✓ green. `npm run lint` has **pre-existing** false-positives (13× `'motion' is defined but never used`) — `eslint.config.js` lacks `eslint-plugin-react`, so namespaced JSX (`<motion.div>`) isn't counted as using `motion`. The imports are correct; do not remove them. Fix separately by adding `eslint-plugin-react` (`react/jsx-uses-vars`).

**Corrections to first-pass findings** (made during implementation)
- `story-scroll.jsx` is **live** (freelance wrapper), not dead.
- `PixelBlast.jsx` is imported by `InteractiveBackground` — dormant, not orphaned.
- `CinematicHome` and `FlowArt` GSAP were **already** reduced-motion gated.
- Freelance **has** a `<main>` (via `FlowArt`).
- "white-on-white primary CTA" (FooterCTA) was **false** — dark text on cream.
- `#8B7D6B` on `#111110` ≈ **4.6:1** (borderline pass), not a 3.5:1 fail.

**Not done yet (next batches):** brand strategy decision (P1-1), contrast pass on the genuinely-low values (P1-5), mobile legibility/touch targets (P1-6), breakpoint consolidation + token adoption in freelance (P2), favicon (still the Vite default logo).
