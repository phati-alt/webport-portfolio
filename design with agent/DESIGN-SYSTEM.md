# Instrumented — design system

One-page portfolio concept for Mick Yuttana Pati. Self-contained in this folder;
it shares no CSS, JS, or assets with the main site at the repo root.

Run it with the repo's server and open
`http://localhost:8123/design%20with%20agent/index.html`.

```bash
powershell -ExecutionPolicy Bypass -File serve.ps1
```

---

## Where the recommendations came from

`ui-ux-pro-max` — the Python search script could not run (no Python interpreter
on this machine, only the Windows Store alias), so the same rows were read
directly out of `skills/ui-ux-pro-max/data/`:

| Source row | Recommendation | What was taken |
|---|---|---|
| `products.csv` #11 Portfolio/Personal | Motion-Driven + Minimalism; landing = Storytelling-Driven; "personality shine through" | Storytelling order: thesis → evidence → profile → work → method → contact |
| `colors.csv` #11 Portfolio/Personal | Monochrome + blue accent (`#2563EB`) | Kept the monochrome-plus-one-blue structure, swapped in a more saturated ultramarine |
| `typography.csv` #44 Minimalist Portfolio | Archivo / Space Grotesk | Archivo kept as display; body and utility faces replaced (see below) |
| `styles.csv` #50 Swiss Modernism 2.0 | Grid system, modular, asymmetric | The label-column / content-column asymmetric grid |
| Priority table, rows 1–2 | Contrast ≥ 4.5:1, touch targets ≥ 44×44, no hover-only affordances | Verified in-browser, both schemes |

`frontend-design` — used to push past the database defaults. The generic
answer for "designer portfolio" (cream + serif + terracotta, or near-black +
acid green) was rejected in favour of a direction taken from the subject's own
material: Mick works on industrial IoT telemetry, facility operations, and
government service portals. The page is therefore built as a **technical
drawing sheet**.

---

## Tokens

### Color

| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | `#E9EDE6` | `#0D1614` | Sheet ground — cool pale green, not cream |
| `--paper-2` | `#F5F8F2` | `#131F1D` | Raised panel / plate face |
| `--ink` | `#10201F` | `#E4EBE3` | Type — near-black with a green cast |
| `--graphite` | `#55645F` | `#93A29C` | Secondary type |
| `--rule` | `#C3CCC1` | `#2C3B37` | Hairlines, grid, tick marks |
| `--signal` | `#0B49FF` | `#7FA3FF` | Annotation, links, measurement, active state |
| `--amber` | `#FFC531` | `#FFC531` | **Fill only** — never a text colour |

The Method band keeps its own `--band-*` pair so it stays dark in both schemes;
amber is only legible on dark, so the band never flips.

Measured contrast (both schemes, checked in-browser): body 14.19 / 15.14,
secondary 5.25 / 6.91, signal 5.19 / 7.52, amber-on-band 10.64 / 10.0.

### Type

| Role | Face | Setting |
|---|---|---|
| Display | **Archivo** (variable `wdth`) | `wdth 125 / wght 800`, `-0.035em`, line-height 0.94 |
| Section heads | Archivo | `wdth 105 / wght 700` |
| Body | **Instrument Sans** | 400–600, 17px / 1.62 |
| Utility | **Martian Mono** | 11px, `0.08em`, uppercase — labels, plate bars, spec callouts |

Archivo at 125 width is the point: an expanded grotesque reads like a title
block on a drawing, and it is not Inter (which the main site already uses).

### Space

Density 4 — marketing page, not dashboard.
`8 / 16 / 24 / 40 / 64 / 96 / 136px`, plus `--frame: 18px` (sheet border inset)
and `--rail: 84px` (left margin rail).

---

## Layout

```
┌────┬──────────────────────────────────────────────┐
│ 00 │  MP  Mick Yuttana Pati        Rev. · [Spec]  │  topbar
│ ●  ├──────────────────────────────────────────────┤
│ 01 │ ┌──────────────────────────────────────────┐ │
│ 02 │ │ 01 —    │  Head                          │ │  drafting frame
│ 03 │ │ Readings│  Sub                           │ │
│ 04 │ │ (mono)  │  content, max 64ch             │ │
│ 05 │ └──────────────────────────────────────────┘ │
└────┴──────────────────────────────────────────────┘
  ▲ rail = section index + scroll position
```

Every band is a `84px | 1fr` grid: a mono label column beside a content column.
Below 1080px the label stacks above; below 860px the rail becomes a sticky
horizontal strip and the sheet frame is dropped.

---

## Signature: Spec view

The **Spec view** toggle (top right, or press `S`) makes the sheet show its own
construction — 8px baseline grid, band outlines, content-column guides, and
token callouts pinned to the elements they govern via `data-note`.

It is the one bold element; everything else stays quiet. It belongs to this
subject specifically: a designer whose actual job is tokens, variables, and
handover specs. Add a callout to any element by giving it
`data-note="whatever the spec says"`.

---

## Content

All figures come from Mick's real record — 40% faster anomaly spotting, 4 → 1–2
revision rounds, 14 → 8–9 day discovery, +30% task completion (n=12). The three
plates are the real projects (facility platform, IoT monitoring, government
status tracker), not the placeholder project names used elsewhere in the repo.

## Quality floor

- Responsive to 390px, no horizontal page scroll
- Contrast ≥ 4.5:1 for every text pair in both colour schemes
- Visible `:focus-visible` ring on every interactive element
- Touch targets ≥ 44px
- `prefers-reduced-motion` honoured
- Content is not gated on JavaScript: the hidden-until-revealed state is scoped
  to `.js`, the headline animates from a keyframe rather than out of a hidden
  base state, and the observer has a 1.5s failsafe
