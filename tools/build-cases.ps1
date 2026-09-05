# =====================================================================
#  build-cases.ps1 - build the case pages from content/cases.csv
# =====================================================================
#
#  Run it from the project root:
#      powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1
#
#  Verify a change without touching the real pages first:
#      powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1 -OutDir path/to/scratch
#
#  Per case folder under work/, it writes:
#    1. data.js    - every row for that slug, en + th
#    2. index.html - the whole page, generated from work/_template/
#
#  The template is the ONLY place the pages' shared chrome lives (header,
#  footer, meta tags, script tags). Before this, every case folder held its
#  own full copy: 243 of 251 lines identical across six files, so adding
#  something like the apple-touch-icon meant patching all six by script and
#  hoping none of them drifted. Edit work/_template/index.html, re-run
#  this, and the pages move together.
#
#  Four regions get filled in per case, all derived from the CSV:
#    - <title> and <meta description>, from the slug's pageTitle row
#    - the cover, from assets/cover.png once it exists
#    - the gallery, from assets/screen-*.png (numeric order, first is wide)
#    - the next-project card, from the NEXT slug in CSV row order, wrapping
#      at the end. That one used to be hand-written into each page, so
#      deleting a case left another page pointing at a folder that was no
#      longer there, with nothing to catch it.
#
#  Nothing here creates or deletes case folders: a slug in the CSV with no
#  matching work/<slug>/ folder is reported and skipped, so a typo shows up
#  as a warning rather than a stray folder.
# =====================================================================

param([string]$OutDir = '')

# ---------------------------------------------------------------------
#  TEMPORARY - content audit markers.
#  While the case copy is being replaced with the real thing, each page
#  and each homepage card carries a badge saying whether its text is real
#  or still placeholder, and how many screenshots have been added. It is
#  a working aid, not part of the design.
#
#  TO REMOVE: set this to $false and re-run. Nothing else needs deleting -
#  the badges disappear from every page, because the data they read stops
#  being emitted. The dataStatus rows in the CSV can then go too.
# ---------------------------------------------------------------------
$showDataStatus = $true

# ---------------------------------------------------------------------
#  Bespoke case pages.
#  A slug listed here keeps its row in content/cases.csv (so the CSV is
#  still where its category/title/audit status for the homepage card and
#  the next-project rotation come from) but its own work/<slug>/index.html
#  and data.js are left alone - not generated, not overwritten. Use this
#  for a case whose story earned a one-off layout instead of the shared
#  template; write that page and its data.js by hand, and give it its own
#  stylesheet (see work/government-project/case.css for the pattern)
#  rather than adding one-off rules to the shared css/style.css.
# ---------------------------------------------------------------------
$customSlugs = @('government-project')

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$csvPath = Join-Path $root 'content/cases.csv'
$templatePath = Join-Path $root 'work/_template/index.html'

if (-not (Test-Path $csvPath)) { throw "Cannot find $csvPath" }
if (-not (Test-Path $templatePath)) { throw "Cannot find $templatePath" }

# Import-Csv reads the sheet Excel and Google Sheets both export, and
# handles the quoting/escaping rules for us - the reason the content lives
# in a CSV rather than being hand-typed into JavaScript.
$rows = Import-Csv -Path $csvPath -Encoding UTF8
if (-not $rows) { throw "No rows in $csvPath" }

$template = [System.IO.File]::ReadAllText($templatePath)

# UTF-8 with no BOM: a BOM is legal but shows up as a stray character in
# some editors and diffs, and there is no reason to add one to a file only
# ever read by a browser. Line endings are normalised to LF at the same
# time - the pages had collected a few stray CRLF lines from earlier patch
# scripts, and git here is core.autocrlf=true, so LF is what gets committed
# either way.
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

# Non-ASCII characters that belong in the output are built from code points
# rather than typed literally, so this file stays pure ASCII. PowerShell 5.1
# reads a BOM-less .ps1 as Windows-1252, so a literal em-dash sitting in the
# source comes back as mojibake and lands in the HTML that way - which is
# what already broke serve.ps1 and an earlier version of this script.
$emDash = [char]0x2014                      # -
$arrow = [string][char]0x2197 + [char]0xFE0E  # north-east arrow + VS15 (text, not emoji)

function Write-Utf8($path, $text) {
  $text = $text -replace "`r`n", "`n"
  [System.IO.File]::WriteAllText($path, $text, $utf8NoBom)
}

# JS string literal escaping. The CSV can legitimately contain quotes and
# backslashes; without this they would end the string early and break the
# whole file - exactly the failure mode the sheet exists to prevent.
function Esc($s) {
  if ($null -eq $s) { return '' }
  $s = $s -replace '\\', '\\'
  $s = $s -replace '"', '\"'
  $s = $s -replace "`r", ''
  $s = $s -replace "`n", '\n'
  return $s
}

# HTML-escape for a value dropped into markup or an attribute.
function EscHtml($s) {
  if ($null -eq $s) { return '' }
  $s = $s -replace '&', '&amp;'
  $s = $s -replace '<', '&lt;'
  $s = $s -replace '>', '&gt;'
  $s = $s -replace '"', '&quot;'
  return $s
}

# Replace an inclusive <!-- X-START --> .. <!-- X-END --> region, indent
# included. The replacement goes through a MatchEvaluator rather than a
# plain string: CSV copy is full of $ and \, which .NET would otherwise
# read as substitution syntax in the replacement.
function Replace-Region($html, $name, $replacement) {
  $pattern = '[ \t]*<!-- ' + $name + '-START.*?<!-- ' + $name + '-END -->'
  return [System.Text.RegularExpressions.Regex]::Replace(
    $html, $pattern,
    [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $replacement },
    [System.Text.RegularExpressions.RegexOptions]::Singleline)
}

$slugs = @($rows | Select-Object -ExpandProperty slug -Unique)
$built = 0; $customCount = 0; $skipped = @(); $galleries = @(); $noCover = @(); $optional = @()

# Collected per case and written out afterwards as js/cases-index.js - see
# the comment above that write for what it is for.
$cardIndex = @()

for ($i = 0; $i -lt $slugs.Count; $i++) {
  $slug = $slugs[$i]
  $caseDir = Join-Path $root "work/$slug"
  if (-not (Test-Path $caseDir)) {
    $skipped += $slug
    continue
  }

  # Output lands in the case folder itself unless -OutDir was passed, which
  # is how a change gets diffed against the live pages before replacing them.
  $destDir = if ($OutDir) { Join-Path $OutDir $slug } else { $caseDir }
  if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }

  $caseRows = @($rows | Where-Object { $_.slug -eq $slug })
  # With the audit switch off, dataStatus never reaches data.js, so the
  # badge has nothing to read and disappears without touching any markup.
  if (-not $showDataStatus) {
    $caseRows = @($caseRows | Where-Object { $_.key -ne 'dataStatus' })
  }

  $isCustom = $customSlugs -contains $slug

  # Screen count is needed for the homepage audit badge either way, so it
  # is read here regardless of $isCustom rather than only inside the
  # generation branch below.
  $assetsDir = Join-Path $caseDir 'assets'
  $screens = @()
  if (Test-Path $assetsDir) {
    $screens = @(Get-ChildItem -Path $assetsDir -File |
      Where-Object { $_.Name -match '^screen-\d+\.(png|jpg|jpeg|webp)$' } |
      Sort-Object { [int]($_.Name -replace '^screen-(\d+)\..*$', '$1') })
  }

  if ($isCustom) {
    # Hand-written page: its own index.html and data.js are never touched.
    # $nextSlug below still advances past this slug normally, so the case
    # before it in rotation links here correctly - only this slug's own
    # NEXT card is not auto-generated, since it has no generated file to
    # write it into. Keep that card's href/title in sync by hand if the
    # CSV row order changes.
    $customCount++
  } else {

  # ---- 1. data.js ---------------------------------------------------
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.AppendLine('/* GENERATED FILE - do not edit by hand.')
  [void]$sb.AppendLine('   Source of truth is content/cases.csv; regenerate with:')
  [void]$sb.AppendLine('     powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1')
  [void]$sb.AppendLine('   Edits made directly here are lost on the next run. */')
  [void]$sb.AppendLine('window.CASE_DATA = {')

  foreach ($lang in @('en', 'th')) {
    [void]$sb.AppendLine("  $lang" + ': {')
    $n = 0
    foreach ($r in $caseRows) {
      $n++
      $comma = if ($n -lt $caseRows.Count) { ',' } else { '' }
      [void]$sb.AppendLine('    ' + $r.key + ': "' + (Esc $r.$lang) + '"' + $comma)
    }
    [void]$sb.AppendLine($(if ($lang -eq 'en') { '  },' } else { '  }' }))
    if ($lang -eq 'en') { [void]$sb.AppendLine('') }
  }
  [void]$sb.AppendLine('};')
  Write-Utf8 (Join-Path $destDir 'data.js') $sb.ToString()

  # ---- 2. index.html from the template ------------------------------
  $html = $template

  # The template opens with a comment aimed at whoever edits the template.
  # That is the wrong note to leave on the generated copy, so it is swapped
  # for one telling the next person their edits here will not survive.
  $header = @(
    '<!--',
    '  GENERATED FILE - do not edit by hand.',
    '  Built from work/_template/index.html + content/cases.csv by:',
    '    powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1',
    '',
    '  Shared page chrome lives in the template; this case''s copy lives in',
    '  the CSV. Edit one of those and re-run - changes made here are lost.',
    '-->'
  ) -join "`n"
  $html = [System.Text.RegularExpressions.Regex]::Replace(
    $html, '^.*?<!DOCTYPE html>',
    [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $header + "`n" + '<!DOCTYPE html>' },
    [System.Text.RegularExpressions.RegexOptions]::Singleline)

  # -- title + meta description
  $pageTitleRow = $caseRows | Where-Object { $_.key -eq 'pageTitle' } | Select-Object -First 1
  if (-not $pageTitleRow) { throw "$slug has no pageTitle row in content/cases.csv" }
  $pageTitle = EscHtml $pageTitleRow.en

  $titleTag = '<title>' + $pageTitle + ' ' + $emDash + ' Case Study | Mick Yuttana</title>'
  $descTag = '<meta name="description" content="Case study: ' + $pageTitle + ' ' + $emDash +
             ' UX/UI and product design work by Mick Yuttana.">'
  $html = [System.Text.RegularExpressions.Regex]::Replace(
    $html, '<title>.*?</title>',
    [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $titleTag })
  $html = [System.Text.RegularExpressions.Regex]::Replace(
    $html, '<meta name="description" content=".*?">',
    [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $descTag })

  # -- cover: the real image once assets/cover.png is there
  if (Test-Path (Join-Path $caseDir 'assets/cover.png')) {
    $cover = @(
      '    <figure class="cs-cover" data-reveal>',
      '      <img src="assets/cover.png" alt="" data-i18n-case-alt="coverAlt">',
      '    </figure>'
    ) -join "`n"
  } else {
    $noCover += $slug
    $cover = '    <div class="cs-cover media-block" data-tone="blue" data-reveal><span>' +
             $pageTitle + ' cover</span></div>'
  }
  $html = Replace-Region $html 'COVER' $cover

  # -- gallery from the images actually present ($screens read up top)
  # The block is always rewritten, even with no images. Rewriting only when
  # screens exist would leave the <img> tags from a previous run behind once
  # those files are renamed or deleted - a page full of broken images that
  # nothing warns you about. Falling back to the grey placeholder keeps the
  # page honest about having no screenshots yet.
  $figs = New-Object System.Text.StringBuilder
  [void]$figs.AppendLine('        <div class="cs-gallery">')
  if ($screens.Count -gt 0) {
    $n = 0
    foreach ($s in $screens) {
      $n++
      # the first image spans the grid, so a set of screenshots reads as a
      # layout rather than a uniform contact sheet
      $wide = if ($n -eq 1) { ' class="is-wide"' } else { '' }
      [void]$figs.AppendLine('          <figure' + $wide + ' data-reveal>')
      [void]$figs.AppendLine('            <img src="assets/' + $s.Name + '" alt="">')
      [void]$figs.AppendLine('            <figcaption data-i18n-case="caption' + $n + '"></figcaption>')
      [void]$figs.AppendLine('          </figure>')
    }
    $galleries += "$slug ($($screens.Count) screens)"
  } else {
    foreach ($n in 1..3) {
      $wide = if ($n -eq 1) { ' class="is-wide"' } else { '' }
      [void]$figs.AppendLine('          <figure' + $wide + ' data-reveal>')
      [void]$figs.AppendLine('            <div class="media-block" data-tone="blue"><span>Screen ' + $n + '</span></div>')
      [void]$figs.AppendLine('            <figcaption data-i18n-case="caption' + $n + '"></figcaption>')
      [void]$figs.AppendLine('          </figure>')
    }
  }
  [void]$figs.Append('        </div>')
  $html = Replace-Region $html 'GALLERY' ($figs.ToString() -replace "`r`n", "`n")

  # -- next project: the following slug in CSV order, wrapping at the end
  $nextSlug = $slugs[($i + 1) % $slugs.Count]
  $nextCover = if (Test-Path (Join-Path $root "work/$nextSlug/assets/cover.png")) {
    '        <img src="../' + $nextSlug + '/assets/cover.png" alt="">'
  } else {
    '        <div class="media-block" data-tone="blue" style="position:absolute;inset:0;border-radius:0"><span>Next project cover</span></div>'
  }
  # Every concatenated element is parenthesised. PowerShell's comma binds
  # tighter than +, so an unwrapped  'a' + $x + 'b', $y  parses as
  # 'a' + $x + ('b', $y) - string plus array, which PowerShell flattens into
  # a single space-joined string. The array silently becomes one element and
  # the -join below has nothing left to put newlines between, collapsing the
  # whole card onto one line.
  $next = @(
    ('      <a class="cs-next__card" href="../' + $nextSlug + '/" data-hover>'),
    $nextCover,
    '        <div class="cs-next__body">',
    '          <div>',
    '            <p class="pretitle" data-i18n="cs.next.label">Next project</p>',
    '            <h2 class="cs-next__title" data-i18n-case="nextTitle">[Next Project Name]</h2>',
    '          </div>',
    ('          <span class="cs-next__arrow" aria-hidden="true">' + $arrow + '</span>'),
    '        </div>',
    '      </a>'
  ) -join "`n"
  $html = Replace-Region $html 'NEXT' $next

  # -- optional sections. Each is kept only where the CSV has something to
  # put in it; a case without the copy loses the whole block rather than
  # shipping an empty table, an unattributed quote or four blank headings.
  $has = { param($key) [bool]($caseRows | Where-Object { $_.key -eq $key -and $_.en } | Select-Object -First 1) }

  foreach ($opt in @(
    @{ Region = 'CONTEXT';     Key = 'contextText' },
    @{ Region = 'PROBLEMS';    Key = 'prob1Title' },
    @{ Region = 'GOAL';        Key = 'goalTitle' },
    @{ Region = 'DECISIONS';   Key = 'dec1Title' },
    @{ Region = 'FRAMEWORK';   Key = 'fwOldLabel' },
    @{ Region = 'STEPS';       Key = 'ps1Title' },
    @{ Region = 'SOLUTIONS';   Key = 'sol1Title' },
    @{ Region = 'USERTYPES';   Key = 'ut1Role' },
    @{ Region = 'IMPACT';      Key = 'bi1Name' },
    @{ Region = 'TESTIMONIAL'; Key = 'testimonialQuote' },
    @{ Region = 'REFLECTION';  Key = 'reflect1Title' }
  )) {
    if (& $has $opt.Key) {
      # Keep the section, strip only its marker comments.
      $html = [System.Text.RegularExpressions.Regex]::Replace(
        $html, '[ \t]*<!-- ' + $opt.Region + '-(START|END).*?-->\r?\n', '',
        [System.Text.RegularExpressions.RegexOptions]::Singleline)
      $optional += "$slug/$($opt.Region.ToLower())"
    } else {
      $html = Replace-Region $html $opt.Region ''
    }
  }

  # -- user types: built here rather than sat in the template, because the
  # served / not-served state has to become a CSS class and data-i18n-case
  # can only write text. Reads ut1..utN until a role comes back empty.
  if (& $has 'ut1Role') {
    $val = { param($k, $lang) $r = $caseRows | Where-Object { $_.key -eq $k } | Select-Object -First 1; if ($r) { $r.$lang } else { '' } }
    $items = New-Object System.Text.StringBuilder
    for ($u = 1; $u -le 6; $u++) {
      if (-not (& $val "ut${u}Role" 'en')) { break }
      $ok = ((& $val "ut${u}Ok" 'en') -match '^(yes|true|1)$')
      $state = if ($ok) { 'is-served' } else { 'is-gap' }
      $label = if ($ok) { 'cs.ut.served' } else { 'cs.ut.gap' }
      [void]$items.AppendLine('          <li class="cs-ut__item ' + $state + '">')
      [void]$items.AppendLine('            <span class="cs-ut__role" data-i18n-case="ut' + $u + 'Role"></span>')
      [void]$items.AppendLine('            <span class="cs-ut__need" data-i18n-case="ut' + $u + 'Need"></span>')
      [void]$items.AppendLine('            <span class="cs-ut__flag" data-i18n="' + $label + '"></span>')
      [void]$items.AppendLine('          </li>')
    }
    $list = '        <ul class="cs-ut" data-reveal>' + "`n" +
            ($items.ToString() -replace "`r`n", "`n").TrimEnd() + "`n" +
            '        </ul>'
    $html = [System.Text.RegularExpressions.Regex]::Replace(
      $html, '[ \t]*<ul class="cs-ut" data-reveal></ul>',
      [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $list })
  }

  # Sections are numbered in the template, but the framework block above is
  # optional - so on a page without it the numbers would skip. Renumber the
  # badges in document order and the count is right either way.
  $stepNo = 0
  $html = [System.Text.RegularExpressions.Regex]::Replace(
    $html, '(<span class="cs-step">)\d+(</span>)',
    [System.Text.RegularExpressions.MatchEvaluator]{
      param($m)
      $script:stepNo++
      $m.Groups[1].Value + $script:stepNo.ToString('00') + $m.Groups[2].Value
    })

  Write-Utf8 (Join-Path $destDir 'index.html') $html

  } # end: if (-not $isCustom)

  # Keep this case's card copy for the homepage index written below.
  $val = { param($k, $lang) $r = $caseRows | Where-Object { $_.key -eq $k } | Select-Object -First 1; if ($r) { Esc $r.$lang } else { '' } }
  $cardIndex += [pscustomobject]@{
    Slug       = $slug
    CategoryEn = (& $val 'category' 'en'); CategoryTh = (& $val 'category' 'th')
    TitleEn    = (& $val 'title' 'en');    TitleTh    = (& $val 'title' 'th')
    # Audit only; empty unless $showDataStatus is on, which is what makes
    # the badges vanish everywhere from that one switch.
    Status     = if ($showDataStatus) { & $val 'dataStatus' 'en' } else { '' }
    Screens    = if ($showDataStatus) { $screens.Count } else { -1 }
  }

  if (-not $isCustom) { $built++ }
}

# ---- 3. js/cases-index.js -------------------------------------------
# The homepage shows every case as a card, and each card now names its
# project on hover. That copy already exists per case in the CSV, but a
# case's own data.js only ever loads on that case's page - the homepage
# has no way to read six of them. Rather than retyping the titles into
# js/i18n.js (where case-specific copy does not belong, and where the old
# numbered work.card1.title keys became untraceable), the build emits the
# few fields the cards need, for every case at once, in CSV row order.
# One source of truth: retitle a case in the sheet and its homepage card
# follows on the next build.
if ($cardIndex.Count -gt 0) {
  $ib = New-Object System.Text.StringBuilder
  [void]$ib.AppendLine('/* GENERATED FILE - do not edit by hand.')
  [void]$ib.AppendLine('   Source of truth is content/cases.csv; regenerate with:')
  [void]$ib.AppendLine('     powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1')
  [void]$ib.AppendLine('   Loaded by index.html only, to label the case cards. */')
  [void]$ib.AppendLine('window.CASES_INDEX = {')
  # The one flag every audit badge on the site checks, including the ones on
  # work/more-projects/, whose copy is hand-written and has no CSV behind it.
  # Emitted only while $showDataStatus is on, which is what lets a single
  # switch clear the badges from pages this script does not even generate.
  if ($showDataStatus) { [void]$ib.AppendLine('  _audit: true,') }
  for ($j = 0; $j -lt $cardIndex.Count; $j++) {
    $c = $cardIndex[$j]
    $tail = if ($j -lt $cardIndex.Count - 1) { ',' } else { '' }
    [void]$ib.AppendLine('  "' + $c.Slug + '": {')
    [void]$ib.AppendLine('    en: { category: "' + $c.CategoryEn + '", title: "' + $c.TitleEn + '" },')
    if ($c.Status) {
      [void]$ib.AppendLine('    th: { category: "' + $c.CategoryTh + '", title: "' + $c.TitleTh + '" },')
      [void]$ib.AppendLine('    audit: { status: "' + $c.Status + '", screens: ' + $c.Screens + ' }')
    } else {
      [void]$ib.AppendLine('    th: { category: "' + $c.CategoryTh + '", title: "' + $c.TitleTh + '" }')
    }
    [void]$ib.AppendLine('  }' + $tail)
  }
  [void]$ib.AppendLine('};')
  $indexDest = if ($OutDir) { Join-Path $OutDir 'cases-index.js' } else { Join-Path $root 'js/cases-index.js' }
  Write-Utf8 $indexDest $ib.ToString()
}

Write-Host ""
Write-Host "Built $built case page(s) from content/cases.csv" -ForegroundColor Green
if ($customCount -gt 0) {
  Write-Host "Left alone (bespoke, hand-written page): $($customSlugs -join ', ')" -ForegroundColor Cyan
}
if ($OutDir) { Write-Host "Output written to $OutDir - live pages untouched" -ForegroundColor Cyan }
if ($galleries.Count -gt 0) {
  Write-Host "Galleries wired from assets/: $($galleries -join ', ')"
} else {
  Write-Host "No screen-*.png found yet - galleries left as placeholders."
}
if ($optional.Count -gt 0) {
  Write-Host "Optional sections included: $($optional -join ", ")"
}
if ($noCover.Count -gt 0) {
  Write-Host "No assets/cover.png yet: $($noCover -join ', ')" -ForegroundColor Yellow
}
if ($skipped.Count -gt 0) {
  Write-Host "Skipped (no work/<slug>/ folder): $($skipped -join ', ')" -ForegroundColor Yellow
}
Write-Host ""
