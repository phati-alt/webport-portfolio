# =====================================================================
#  build-cases.ps1 - turn content/cases.csv into the site's case pages
# =====================================================================
#
#  Run it from the project root:
#      powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1
#
#  What it does, per case folder under work/:
#    1. writes work/<slug>/data.js from the rows in content/cases.csv
#    2. rebuilds the gallery in work/<slug>/index.html from whatever
#       screen-*.png / .jpg / .webp files are sitting in that folder's
#       assets/, between the GALLERY-START / GALLERY-END markers
#    3. swaps the cover placeholder for a real <img> once assets/cover.png
#       exists
#
#  It only ever touches those regions. Anything you write elsewhere in
#  index.html survives a re-run. Delete a page's GALLERY markers and the
#  script stops managing its gallery - useful once you start hand-tuning
#  which screenshot is wide.
#
#  Nothing here creates or deletes case folders: a slug in the CSV with no
#  matching work/<slug>/ folder is reported and skipped, so a typo shows up
#  as a warning rather than a stray folder.
# =====================================================================

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$csvPath = Join-Path $root 'content/cases.csv'

if (-not (Test-Path $csvPath)) { throw "Cannot find $csvPath" }

# Import-Csv reads the sheet Excel and Google Sheets both export, and
# handles the quoting/escaping rules for us - the reason the content lives
# in a CSV rather than being hand-typed into JavaScript.
$rows = Import-Csv -Path $csvPath -Encoding UTF8
if (-not $rows) { throw "No rows in $csvPath" }

# UTF-8 with no BOM: a BOM at the top of data.js is legal but shows up as a
# stray character in some editors and diffs, and there is no reason to add
# one to a file that is only ever read by a browser.
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Write-Utf8($path, $text) {
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

$slugs = $rows | Select-Object -ExpandProperty slug -Unique
$built = 0; $skipped = @(); $galleries = @()

foreach ($slug in $slugs) {
  $caseDir = Join-Path $root "work/$slug"
  if (-not (Test-Path $caseDir)) {
    $skipped += $slug
    continue
  }

  $caseRows = $rows | Where-Object { $_.slug -eq $slug }

  # ---- 1. data.js ---------------------------------------------------
  $sb = New-Object System.Text.StringBuilder
  [void]$sb.AppendLine('/* GENERATED FILE - do not edit by hand.')
  [void]$sb.AppendLine('   Source of truth is content/cases.csv; regenerate with:')
  [void]$sb.AppendLine('     powershell -ExecutionPolicy Bypass -File tools/build-cases.ps1')
  [void]$sb.AppendLine('   Edits made directly here are lost on the next run. */')
  [void]$sb.AppendLine('window.CASE_DATA = {')

  foreach ($lang in @('en', 'th')) {
    [void]$sb.AppendLine("  $lang" + ': {')
    $i = 0
    foreach ($r in $caseRows) {
      $i++
      $comma = if ($i -lt $caseRows.Count) { ',' } else { '' }
      $value = Esc $r.$lang
      [void]$sb.AppendLine('    ' + $r.key + ': "' + $value + '"' + $comma)
    }
    $tail = if ($lang -eq 'en') { '  },' } else { '  }' }
    [void]$sb.AppendLine($tail)
    if ($lang -eq 'en') { [void]$sb.AppendLine('') }
  }
  [void]$sb.AppendLine('};')

  Write-Utf8 (Join-Path $caseDir 'data.js') $sb.ToString()

  # ---- 2. gallery from the images actually present -------------------
  $indexPath = Join-Path $caseDir 'index.html'
  if (Test-Path $indexPath) {
    $html = [System.IO.File]::ReadAllText($indexPath)

    if ($html -match '<!-- GALLERY-START') {
      $assetsDir = Join-Path $caseDir 'assets'
      $screens = @()
      if (Test-Path $assetsDir) {
        $screens = Get-ChildItem -Path $assetsDir -File |
          Where-Object { $_.Name -match '^screen-\d+\.(png|jpg|jpeg|webp)$' } |
          Sort-Object { [int]($_.Name -replace '^screen-(\d+)\..*$', '$1') }
      }

      # Always rewrite the block, even with no images. Rewriting only when
      # screens exist would leave the <img> tags from a previous run behind
      # after those files are renamed or deleted, i.e. a page full of broken
      # images that nothing warns you about. Falling back to the grey
      # placeholder keeps the page honest about having no screenshots yet.
      $figs = New-Object System.Text.StringBuilder
      if ($screens.Count -gt 0) {
        $n = 0
        foreach ($s in $screens) {
          $n++
          # first image spans the grid so a set of screenshots reads as a
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

      $block = '<div class="cs-gallery">' + "`r`n" + $figs.ToString().TrimEnd() + "`r`n" + '        </div>'
      $html = [System.Text.RegularExpressions.Regex]::Replace(
        $html,
        '<div class="cs-gallery">.*?\n\s*</div>',
        [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $block },
        [System.Text.RegularExpressions.RegexOptions]::Singleline)
    }

    # ---- 3. cover placeholder -> real image --------------------------
    if ((Test-Path (Join-Path $caseDir 'assets/cover.png')) -and ($html -match 'cs-cover media-block')) {
      $coverRe = '<div class="cs-cover media-block"[^>]*>.*?</div>'
      $coverImg = '<figure class="cs-cover" data-reveal><img src="assets/cover.png" alt="" data-i18n-case-alt="coverAlt"></figure>'
      $html = [System.Text.RegularExpressions.Regex]::Replace($html, $coverRe, $coverImg, [System.Text.RegularExpressions.RegexOptions]::Singleline)
    }

    Write-Utf8 $indexPath $html
  }

  $built++
}

Write-Host ""
Write-Host "Rebuilt $built case(s) from content/cases.csv" -ForegroundColor Green
if ($galleries.Count -gt 0) {
  Write-Host "Galleries wired from assets/: $($galleries -join ', ')"
} else {
  Write-Host "No screen-*.png found yet - galleries left as placeholders."
}
if ($skipped.Count -gt 0) {
  Write-Host "Skipped (no work/<slug>/ folder): $($skipped -join ', ')" -ForegroundColor Yellow
}
Write-Host ""
