$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = if ($env:PORT) { [int]$env:PORT } else { 8123 }
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$port/"

$mime = @{
  ".html" = "text/html"
  ".css"  = "text/css"
  ".js"   = "application/javascript"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".webp" = "image/webp"
  ".avif" = "image/avif"
  ".woff2" = "font/woff2"
  ".ico"  = "image/x-icon"
  ".json" = "application/json"
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $req = $context.Request
  $res = $context.Response
  $path = $req.Url.LocalPath
  $filePath = Join-Path $root ($path.TrimStart("/"))

  # Directory URLs serve that directory's index.html — how Vercel, GitHub
  # Pages and nginx all behave, and what work/<slug>/ case-study URLs rely
  # on. Without this every case page 404s locally while working in
  # production, which is the worst way to find a broken link.
  if (Test-Path $filePath -PathType Container) {
    # A directory asked for without its trailing slash has to redirect
    # rather than be served directly: the page's relative paths (data.js,
    # assets/cover.png) resolve against the URL, so /work/foo would look
    # for /work/data.js instead of /work/foo/data.js.
    if (-not $path.EndsWith("/")) {
      $res.StatusCode = 301
      $res.RedirectLocation = $path + "/"
      $res.OutputStream.Close()
      continue
    }
    $filePath = Join-Path $filePath "index.html"
  }

  if (Test-Path $filePath -PathType Leaf) {
    $ext = [System.IO.Path]::GetExtension($filePath)
    $contentType = $mime[$ext]
    if (-not $contentType) { $contentType = "application/octet-stream" }
    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $res.ContentType = $contentType
    # Without an explicit Cache-Control the browser falls back to heuristic
    # caching and will happily keep serving a main.js or style.css it fetched
    # minutes ago - so an edit looks like it did nothing, and the next thing
    # tested is a fix that is not actually on the page. Never what you want
    # from a dev server.
    $res.Headers.Add("Cache-Control", "no-store, must-revalidate")
    $res.ContentLength64 = $bytes.Length
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $res.StatusCode = 404
    $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
    $res.OutputStream.Write($notFound, 0, $notFound.Length)
  }
  $res.OutputStream.Close()
}
