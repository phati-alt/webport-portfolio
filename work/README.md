# Case studies

One folder per project. Everything that belongs to a case — its page, its
images, its EN/TH copy — lives inside that folder and nowhere else, so
adding or removing a project never means hunting through shared files.

```
work/
  _template/              copy this to start a new case
    index.html
    data.js
    assets/
  government-project/
    index.html            the page (structure + layout only)
    data.js               this project's copy, EN + TH
    assets/
      cover.png           hero image, also used as the card on the homepage
  platform/
  ev-charger/
  drin-doctor/
  custom-dashboard/
  wordpress-website/
  more-projects/          simple image gallery, not a case study
```

URLs are the folder name: `work/government-project/` → served as that
folder's `index.html`.

## Where copy lives

Two places, and the split matters:

| Where | What | Referenced by |
|---|---|---|
| `js/i18n.js` | Site-wide copy — nav, footer, and the generic section labels every case page shares ("The Problem", "Role", "Next project") | `data-i18n="key"` |
| `content/cases.csv` → `work/<slug>/data.js` | This project's own copy — title, summary, role, the story, the stats. Edit the sheet; the data.js is generated. | `data-i18n-case="key"` |

Never put case-specific copy in `js/i18n.js`. That file is loaded by every
page on the site, so a key that only one case uses is dead weight
everywhere else — and it's exactly how the old numbered `work.card1.title`
scheme grew keys nobody could trace back to a project.

`data.js` is loaded *before* `js/i18n.js` in each case page, because
i18n.js renders once on load and reads `window.CASE_DATA` at that moment.
Keep that order if you edit the script tags.

An element whose key is missing from `data.js` keeps whatever is hardcoded
in `index.html`, so a half-filled `data.js` degrades to the HTML fallback
instead of rendering blank.

## Add a case

1. `cp -r work/_template work/<slug>` — the slug becomes the URL, so keep
   it lowercase-with-hyphens.
2. Drop the cover image in `work/<slug>/assets/cover.png`, plus any
   `screen-1.png`, `screen-2.png` … alongside it. The build wires both
   the cover and the gallery from whatever is actually in that folder.
3. Add that slug's rows to `content/cases.csv` (see "Editing content"
   below) and run the build — do not hand-edit `data.js`, it is
   generated.
4. In `work/<slug>/index.html`, set the `<title>` and the `<meta
   name="description">`, then point the "Next project" card at whichever
   case should follow this one — both its `href` AND its cover `<img>`.
5. Add the card to `index.html` in the `#casesGrid` block — copy an
   existing `<a class="case">`, point `href` at `work/<slug>/` and `src`
   at that folder's `cover.png`.

## Remove a case

1. Delete the folder.
2. Delete its `<a class="case">` from `#casesGrid` in `index.html`.
3. Fix the "Next project" card on whichever case pointed at the one you
   removed — its `href` and its cover image both. They are a manual
   chain; nothing auto-detects a gap.

Those three are the whole list — nothing else on the site references a
case folder.


## Editing content: the sheet

All case copy lives in one spreadsheet, `content/cases.csv`, and gets
compiled into the per-case `data.js` files. You should not hand-edit
`data.js` any more — it says so at the top of each one, and a rebuild
overwrites it.

**The loop is: edit the sheet -> run one command -> refresh the browser.**

```
powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1
```

### The sheet

`content/cases.csv` has four columns and one row per field:

| slug | key | en | th |
|---|---|---|---|
| ev-charger | title | EV Charger - find a charge... | EV Charger - หาที่ชาร์จ... |
| ev-charger | role | UX/UI Designer | UX/UI Designer |

- **slug** must match a folder name under `work/`. A slug with no folder is
  reported as a warning and skipped, so a typo can't create a stray case.
- **key** is what `data-i18n-case="…"` in `index.html` looks up.
- Open it in Excel, Google Sheets or Numbers. Commas, quotes and Thai text
  are all handled by the CSV format — this is the whole reason the content
  moved out of JavaScript, where one stray quote silently blanked a page.
- Save/export as CSV (UTF-8) back to the same path.

To add a field, add the row to the sheet AND add the matching
`data-i18n-case="yourKey"` to `index.html`. Neither half does anything
alone.

### Images

Drop files into the case's own `assets/` folder using these names:

```
work/ev-charger/assets/
  cover.png       hero image, also used as the card on the homepage
  screen-1.png    gallery, in order
  screen-2.png
  screen-3.png
```

Then run the build. It wires the gallery to whatever `screen-*` files are
actually there (`.png`, `.jpg` or `.webp`), sorted numerically, and makes
the first one full-width. `screen-10` sorts after `screen-2`, not between
`screen-1` and `screen-2`.

Remove the images and rebuild and the gallery goes back to grey
placeholders, rather than leaving `<img>` tags pointing at files that are
no longer there.

Captions come from the sheet — `caption1` matches `screen-1`, and so on.

### When you want to hand-tune a gallery

Delete the `GALLERY-START` / `GALLERY-END` comments from that page's
`index.html`. The build stops managing that gallery and leaves your markup
alone; everything else on the page still rebuilds.
## Notes

- The homepage cards are plain HTML on purpose, not generated from a
  manifest: they stay in the markup for search engines and for anyone with
  JS off, and the Cases section's horizontal-scroll animation measures the
  real cards on load (see `initCasesScroll` in `js/main.js`).
- `_template/` opens in a browser as a real page, so you can check a
  change before copying it. It shows `[bracketed]` copy and grey blocks
  where the images go. Its one dead link is the `../PLACEHOLDER/` next-
  project href, which you replace on copy.
- `content/cases.csv` currently holds MOCKUP copy written to exercise the
  design, not verified fact. Read it before this goes public — some of
  the numbers are invented outright.
