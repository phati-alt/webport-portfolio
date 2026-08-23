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
$built = 0; $skipped = @(); $galleries = @(); $noCover = @()

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

  # -- gallery from the images actually present
  $assetsDir = Join-Path $caseDir 'assets'
  $screens = @()
  if (Test-Path $assetsDir) {
    $screens = @(Get-ChildItem -Path $assetsDir -File |
      Where-Object { $_.Name -match '^screen-\d+\.(png|jpg|jpeg|webp)$' } |
      Sort-Object { [int]($_.Name -replace '^screen-(\d+)\..*$', '$1') })
  }

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

  Write-Utf8 (Join-Path $destDir 'index.html') $html
  $built++
}

Write-Host ""
Write-Host "Built $built case page(s) from content/cases.csv" -ForegroundColor Green
if ($OutDir) { Write-Host "Output written to $OutDir - live pages untouched" -ForegroundColor Cyan }
if ($galleries.Count -gt 0) {
  Write-Host "Galleries wired from assets/: $($galleries -join ', ')"
} else {
  Write-Host "No screen-*.png found yet - galleries left as placeholders."
}
if ($noCover.Count -gt 0) {
  Write-Host "No assets/cover.png yet: $($noCover -join ', ')" -ForegroundColor Yellow
}
if ($skipped.Count -gt 0) {
  Write-Host "Skipped (no work/<slug>/ folder): $($skipped -join ', ')" -ForegroundColor Yellow
}
Write-Host ""
