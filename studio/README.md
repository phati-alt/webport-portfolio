# studio/ — portfolio, studiomodular-style edition

A second, self-contained version of the portfolio. Shares nothing with the root
site except `../assets/mick-profile.webp` and the `../work/*.html` case pages.

Run it with the repo server and open
`http://localhost:8123/studio/index.html`:

```bash
powershell -ExecutionPolicy Bypass -File serve.ps1
```

(`serve.ps1` now honours `$env:PORT`, so a second instance can run on another
port while the default 8123 is busy.)

---

## What it takes from studiomodular.be

Read off the live site, not guessed: their Drupal theme loads GSAP +
ScrollTrigger + SplitText per component, native scroll, no CSS framework.

| Their component | Here |
|---|---|
| `c-banner` — name halves slide in, media iris open via `clip-path`, halves drift apart on scroll, gradient shapes behind | `.banner` + `initBanner()` |
| `c-banner__scroll` — circular label around an arrow button | `.banner__scroll` + `.circle-text` (own SVG textPath, CSS spin) |
| `c-text-animate` — SplitText lines, dim original with a colour clone wiped open, `scrub` | `.intro__text` + `initTextReveal()` |
| `c-masonry-grid` — staggered two-column case grid | `.cases__grid` + `.case--tall` |
| `c-hover-element` / `c-hover-circle` — rotating "view case" ring following the cursor | `#cursor` + `initCursor()` (ring mode over `[data-hover-case]`, dot mode elsewhere) |
| `c-group-circle` — the dark band grows out of a circle | `.band__circle` + `initBand()` (scaleX dome, scrubbed) |
| `c-scroll-title-media` — headline / media / headline inside the band | `.scroll-title` (12-col grid + parallax media) |
| `c-stacking-items` — sticky service cards, **CSS only** | `.stack` (`position: sticky`, `--i` step offset) |
| `c-text-media` / `c-text-2-media` — text with one large and one small media block | `.about`, `.approach__grid` |
| `c-news-grid` — three-up cards with a coloured media header | `.grid-cards` |
| `c-marquee` — direction flips with scroll direction, ticker-driven | `.marquee` + `initMarquee()` |
| `c-cta` — colour block, image, gradient circles behind | `.cta` + `.cta__bg` |
| `c-tiles-group` — coloured service tiles in the footer | `.tiles` |
| `c-current-song` — "what I'm listening to" in the footer | `.song` |
| `c-btn` — circle on both ends, leading one opens on hover | `.btn__circle:first-child` |
| `c-tag` — star icon + label | `.tag__icon` (clip-path star) |
| Fluid `clamp()` spacing, `clamp(15px,1.6vw,30px)` radii, one grotesque face | `:root` tokens in `css/style.css` |

Deliberately different: **Switzer** (free, Fontshare) instead of the licensed
PolySans, plus **Noto Sans Thai** for the Thai copy; and this version keeps the
root site's EN/TH switch and dark mode, which studiomodular.be does not have.

---

## Tokens

| Token | Light | Dark |
|---|---|---|
| `--paper` | `#fdf6ee` | `#0b1311` |
| `--paper-2` | `#f3ece3` | `#131f1c` |
| `--ink` | `#0d1512` | `#eef1ea` |
| `--muted` | `#5d6b64` | `#9aa8a1` |
| `--primary` | `#1f4438` | `#bad6ff` |
| `--reveal-dim` | `#a09a92` | `#4e5a55` |

Accent blocks (`--blue --pink --orange --purple --yellow`) are used as flat card
grounds, set per element with `data-tone="…"`.

Type: `--fs-huge` `clamp(3.5rem, 1rem + 11vw, 14rem)` for the hero name,
`--fs-h2` for section titles, everything else fluid off `--fs-body`.

---

## Files

```
studio/
  index.html      one page, all sections
  css/style.css   tokens → components → responsive → reduced-motion
  js/i18n.js      EN/TH dictionary, exposes I18N.t / .apply / .getLang
  js/main.js      motion layer, ten independent init() functions
```

`js/main.js` is additive: with JS off, or under
`prefers-reduced-motion: reduce`, every section is readable and nothing is
hidden — the reveal base state is scoped to `html.js` and cleared by
`html.no-motion`.

---

## Editing

- **Copy** — change the value in `js/i18n.js` (both `en` and `th`); the markup
  only carries `data-i18n` keys.
- **Projects** — the six `.case` blocks in `index.html`. `data-category` must
  match a `data-filter` button; `data-tone` picks the block colour.
- **Services** — the `.stack__item` list; keep `style="--i:n"` sequential, it
  drives the sticky step.
- **Contact form** — front-end validation only, no backend. Replace the
  comment in `initForm()` with a `fetch()` to your endpoint.
- **Resume button** — `#resumeBtn` still fires a placeholder alert.

## Not copied from the reference

Their logo SVGs, photography, and Dutch marketing copy are theirs. Every photo
slot here that isn't Mick's own portrait is a flat colour block with a label —
drop real images in and delete the `<span>`.

## Checked in-browser

- 1440×900, 1280×720, 768×1024, 390×844 — no horizontal page scroll, hero fits
  the viewport at each size
- band circle scrubs 0 → 1 across its entry; marquee rows run in opposite
  directions and both flip when the scroll direction flips
- EN ⇄ TH re-splits the animated paragraph correctly in both directions
- dark mode holds its own token set; the green band and footer keep their
  colours in both schemes
- work filters, form validation and success states, sticky stack offsets
- console clean, no errors
