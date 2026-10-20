<#
  Builds a 1200x630 social-share card for a poster post: a dimmed, blurred copy
  of the poster as the backdrop, the sharp poster centered on top, the rank
  stamp on the poster's top-right corner, and the Cinema Ranked logo in the
  bottom-right corner.

  Usage (from the repo root):
    powershell -ExecutionPolicy Bypass -File scripts/make-og-card.ps1 -Poster assets/images/blog/<film>-poster.jpg `
      -Out assets/images/blog/<film>-share.jpg -Rank B

  Then set `image:` in the post's front matter to the output path (jekyll-seo-tag
  uses it as og:image). `card_image:` is a separate field for the blog-card tile.
  Needs no extra tools: it uses System.Drawing, same as the rest of the site's images.
#>
param(
  [Parameter(Mandatory)][string]$Poster,
  [Parameter(Mandatory)][string]$Out,
  [string]$Logo = 'assets/images/about-kris.png',
  [ValidateSet('S','A','B','C','D')][string]$Rank
)
Add-Type -AssemblyName System.Drawing
$W = 1200; $H = 630
$posterImg = [Drawing.Image]::FromFile((Resolve-Path $Poster).Path)
$logoImg   = [Drawing.Image]::FromFile((Resolve-Path $Logo).Path)
$bmp = New-Object Drawing.Bitmap $W, $H
$g = [Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = 'HighQualityBicubic'; $g.SmoothingMode = 'AntiAlias'

# Backdrop: shrink the poster tiny then stretch it back up to cover the card (cheap blur).
$tiny = New-Object Drawing.Bitmap 24, 40
$tg = [Drawing.Graphics]::FromImage($tiny); $tg.InterpolationMode = 'HighQualityBicubic'
$tg.DrawImage($posterImg, 0, 0, 24, 40); $tg.Dispose()
$coverH = [int]($W * $posterImg.Height / $posterImg.Width)
$g.DrawImage($tiny, 0, [int](($H - $coverH) / 2), $W, $coverH)
$g.FillRectangle((New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(150, 6, 11, 19))), 0, 0, $W, $H)

# Sharp poster, centered, with a thin light edge.
$ph = 570; $pw = [int]($posterImg.Width * $ph / $posterImg.Height)
$px = [int](($W - $pw) / 2); $py = [int](($H - $ph) / 2)
$g.DrawImage($posterImg, $px, $py, $pw, $ph)
$g.DrawRectangle((New-Object Drawing.Pen ([Drawing.Color]::FromArgb(90, 255, 255, 255)), 2), $px, $py, $pw, $ph)

# Logo, bottom-right.
$ls = 170; $m = 36
$clip = New-Object Drawing.Drawing2D.GraphicsPath
$clip.AddEllipse($W - $ls - $m, $H - $ls - $m, $ls, $ls)
$g.SetClip($clip)
$g.DrawImage($logoImg, $W - $ls - $m, $H - $ls - $m, $ls, $ls)
$g.ResetClip()

# Rank stamp (same tier colors as .rank-badge in main.css), poster's top-right corner.
if ($Rank) {
  $tier = @{ S='#F2C94C'; A='#71C388'; B='#1BBBC4'; C='#BC489A'; D='#E5484D' }
  $bs = 104; $bx = $px + $pw - $bs + 24; $by = $py - 24
  $dark = [Drawing.ColorTranslator]::FromHtml('#0D1731')
  $fill = [Drawing.ColorTranslator]::FromHtml($tier[$Rank])
  $fg = if ($Rank -eq 'C') { [Drawing.Color]::White } else { $dark }
  function RoundRect($x, $y, $w, $h, $r) {
    $gp = New-Object Drawing.Drawing2D.GraphicsPath
    $gp.AddArc($x, $y, $r, $r, 180, 90); $gp.AddArc($x + $w - $r, $y, $r, $r, 270, 90)
    $gp.AddArc($x + $w - $r, $y + $h - $r, $r, $r, 0, 90); $gp.AddArc($x, $y + $h - $r, $r, $r, 90, 90)
    $gp.CloseFigure(); $gp
  }
  $g.FillPath((New-Object Drawing.SolidBrush $dark), (RoundRect $bx $by $bs $bs 52))
  $g.FillPath((New-Object Drawing.SolidBrush $fill), (RoundRect ($bx + 5) ($by + 5) ($bs - 10) ($bs - 10) 44))
  $sf = New-Object Drawing.StringFormat; $sf.Alignment = 'Center'; $sf.LineAlignment = 'Center'
  $brush = New-Object Drawing.SolidBrush $fg
  $g.TextRenderingHint = 'AntiAliasGridFit'
  $g.DrawString('RANK', (New-Object Drawing.Font 'Inter', 10, ([Drawing.FontStyle]::Bold), 'Pixel'), $brush, (New-Object Drawing.RectangleF $bx, ($by + 10), $bs, 20), $sf)
  $g.DrawString($Rank, (New-Object Drawing.Font 'Inter', 52, ([Drawing.FontStyle]::Bold), 'Pixel'), $brush, (New-Object Drawing.RectangleF $bx, ($by + 26), $bs, 70), $sf)
}
$g.Dispose()

$codec = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$p = New-Object Drawing.Imaging.EncoderParameters 1
$p.Param[0] = New-Object Drawing.Imaging.EncoderParameter([Drawing.Imaging.Encoder]::Quality, 86L)
$bmp.Save((Join-Path (Get-Location) $Out), $codec, $p)
"Wrote $Out ($W x $H)"
