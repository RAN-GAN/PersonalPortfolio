# Self-hosted fonts

The site's primary display/body fonts are **SAILORS** (display/headings) and
**Proxima Nova** (body). Both are commercial — they are not committed to the repo.
Until the files below exist, the CSS falls back to **Fraunces** (display) and
**DM Sans** (body), which load from Google Fonts.

## What to drop here

Place these `.woff2` files in this directory (`public/fonts/`):

| File                            | Font          | Weight | Used for                        |
| ------------------------------- | ------------- | ------ | ------------------------------- |
| `sailors.woff2`                 | SAILORS       | any    | All display headings (h1/h2/h3) |
| `proxima-nova-regular.woff2`    | Proxima Nova  | 400    | Body text                       |
| `proxima-nova-semibold.woff2`   | Proxima Nova  | 600    | Emphasized body / labels        |
| `proxima-nova-bold.woff2`       | Proxima Nova  | 700    | Bold body                       |

That's it — the `@font-face` rules in `src/index.css` already point here, and the
`@theme` font tokens already list these fonts first. No code change needed once
the files are present.

## Notes

- Convert `.otf`/`.ttf` to `.woff2` (e.g. `woff2_compress` or fonttools) for size.
- Paths in `@font-face` include the Vite base `/PersonalPortfolio/`; if you ever
  change `base` in `vite.config.js`, update those URLs too.
- For best LCP, add `<link rel="preload" as="font" type="font/woff2" crossorigin>`
  for `sailors.woff2` in `index.html` once the file exists (don't preload before
  it does — it would 404 on every load).
