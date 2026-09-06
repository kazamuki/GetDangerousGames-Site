---
purpose: Which art in the shared Shadows/GD asset library is actually clear to use on the public Get Dangerous Games website, and which isn't. Read this before pulling any image from outside this repo into the site.
---

The Shadows CRB project keeps a large shared art library at
`C:\Users\Kazam\OneDrive\Documents\Gaming\Shadows\Core Rule Book\Art Assets\`
and a sibling brand library at `...\Shadows\GD Assets\`. Not everything in there is licensed
the same way — mixing them up risks putting unlicensed or restrictively-licensed art on a public,
commercial site. Confirmed 2026-09-05.

## Clear to use on the website: Shutterstock folder

`Art Assets\Shutterstock\<Month Year>\shutterstock_<id>.(jpg|png)` — 42 images across
October 2022, November 2022, February 2023, March 2023. Ken confirmed these were purchased
under a Shutterstock license with unlimited distribution. Filenames carry the verifiable
Shutterstock asset ID. **This is the default pool for site hero images, section backgrounds,
and decorative art going forward.**

Standard Shutterstock license caveats still apply even under an "unlimited distribution" tier —
don't use an individual image AS a standalone logo/trademark, and don't resell the raw file itself
(e.g. don't let site visitors download the original asset) — but using them as page imagery,
however widely distributed the page is, is exactly what the license is for.

All 40 images in this folder have been surveyed and cataloged with per-section fit
recommendations — see [shutterstock-catalog.md](shutterstock-catalog.md) before searching for a
new background; it's likely already been looked at.

## GD Assets — brand's own commissioned/owned art

`...\Shadows\GD Assets\` (bear mascot logo variants, the "Updated YT Banner.png", the Shadows
skull/dice logo, stream assets). Ken's own brand marks — safe to use anywhere on the site. See
[images-manifest.md](../content/images-manifest.md) is about the *old Google Sites* images; this
folder is the *current* brand asset source instead.

## Clear to use on the website: DriveThruRPG public-domain packs (confirmed 2026-09-05)

License files for these were located at `Core Rule Book\Licenses\` and matched against their
DriveThruRPG source pack. All six are Kevin Crawford / Sine Nomine Publishing releases explicitly
placed in the **public domain**, free for personal or commercial use — safe to use directly on the
website, not just inside the CRB book. Courtesy conditions (not legal requirements, but honor them):
credit the named artist(s), and if a file is redistributed standalone, keep the original filename
attached so the credit travels with it.

- **Godbound** (`Art Assets\DriveThruRPG\Godbound\`) — art from the *Godbound* and *Sixteen Sorrows*
  Kickstarters, released public-domain by Kevin Crawford. Confirmed via the DriveThruRPG listing
  screenshot in the Licenses folder (artists: Jeff Brown, Christof Grobelski, Aaron Lee, Joyce
  Maureira, Tan Ho Sim, Maxime Plasse, Craig Judd). Includes unkeyed campaign maps, also free to
  reuse/re-key.
- **House Of Bone And Amber** (`...\House Of Bone And Amber\`) — public domain since 2013-04-22.
  Artists: Ejiwa Ebenebe, Luigi Castellani, Miguel Santos, Mohammed Agbadi, Pamela Ngououghe.
- **Scarlet Heroes** (`...\Scarlet Heroes\`) — full rights purchased and released for free personal/
  commercial use; redistribution allowed if filenames stay unchanged.
- **Silent Legion** (`...\Silent Legion\`) — public domain since 2015-03-29, free personal/
  commercial use.
- **SotD** (`...\SotD\`) — public domain resource pack. Artists: Andrew Krahnke, Earl Geier, Ian
  MacLean, Luigi Castellani, Miguel Santos, Nicole Cardiff, Sara Mirabella. InDesign/map files in
  the pack were Crawford's own and need no credit.
- **Stars Without Number Revised** (`...\Stars Without Number Revised\`) — royalty-free personal/
  commercial use, work-for-hire art commissioned by Sine Nomine Publishing.

This resolves the "no license document found" caveat this file previously carried for all six —
they're now equivalent to the Shutterstock/GD Assets pools above for website purposes, just remember
the credit-line courtesy per pack when an image from one of these actually gets used.

## Not a website art source: Eldemar Studios Graphics Pack

`Art Assets\Eldemar Studios - Graphics Pack\20 London LUTs Pack\` is a set of **video color-grading
LUTs** (Look-Up Tables), not imagery — it's for grading d33KODE's YouTube/Twitch video footage, not
for anything that goes on the website. Its license (Eldamar Studio, purchased-product terms: usable
in commercial projects, but the product itself can't be resold/redistributed standalone) doesn't
apply to any static site asset. Noted here only so it doesn't get confused with the art-licensing
pools above.

## Restricted — do not use on the website without asking first

- **Dean Spencer commissioned art** (`Art Assets\DriveThruRPG\Dean Spencer Art\`, and any file
  prefixed `DeanSpencer-` scattered into the `Archetypes/Environment/Gear/Icons/Magic/People`
  category folders). Read the license at
  `Art Assets\Licenses\Dean_Spencer_Licence.pdf`: it's a **one-time, first-edition print/web
  license** for the Shadows CRB specifically — not a blanket "use anywhere" grant. It explicitly
  forbids using the art as a logo/trademark or basis for merchandise, forbids modifying/recoloring,
  and requires a credit line ("Some artwork © 2015 Dean Spencer, used with permission. All rights
  reserved.") wherever it's used. Treat as CRB-book-only unless Ken confirms otherwise for a
  specific piece. **Still the only restricted item in the DriveThruRPG folder as of 2026-09-05** —
  the other six subfolders there are now cleared, see above.
- **Anything with an ambiguous or scraped-looking filename** in the category folders — e.g.
  `Aesthetic-Machine-Deviant-Art-Cyberpunk-Character-Concept-Art.jpg` (the name itself suggests it
  was pulled from DeviantArt as reference, not licensed). Files named generically (`City.jpg`,
  `Dark Alley.jpg`, `Cyber woman warrior.jpg`) with no Shutterstock ID and no artist credit have
  unknown provenance — don't use these on the site without tracking down where they actually came
  from.
- **The old Google Sites Home background** `b326bdef7429826fd75bb6b0adacd441.jpg` (see
  [images-manifest.md](../content/images-manifest.md)) carries a visible "Artur Sadlos /
  artursadlos.com" signature — a working concept artist's portfolio piece, not owned art. Do not
  carry this forward into the rebuild.
- **Second sighting, 2026-09-06**: the same "ArturSadlos.co" watermark turned up again, this time on
  a YouTube video thumbnail ("Interlude" / Quick Start Guide teaser) inside the Blogger export at
  `Takeout/Blogger/Blogs/Get Dangerous Updates/feed.atom` — it reuses the same background art behind
  title-card text. Caught before it got self-hosted into the new blog; the post it was on now links
  to the video directly instead of carrying an image. Worth treating this artist's signature as a
  known red flag across the *rest* of that Blogger export too, not just the one Google Sites file —
  the old site apparently reused this artist's portfolio art more than once without a license.

## Rule of thumb

If it's not in the Shutterstock folder or the GD Assets brand folder, don't put it on the public
site without checking with Ken first — even if it's sitting right next to art that IS cleared, in
the same category folder.
