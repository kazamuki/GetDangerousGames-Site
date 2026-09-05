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

## Restricted — do not use on the website without asking first

- **Dean Spencer commissioned art** (`Art Assets\DriveThruRPG\Dean Spencer Art\`, and any file
  prefixed `DeanSpencer-` scattered into the `Archetypes/Environment/Gear/Icons/Magic/People`
  category folders). Read the license at
  `Art Assets\Licenses\Dean_Spencer_Licence.pdf`: it's a **one-time, first-edition print/web
  license** for the Shadows CRB specifically — not a blanket "use anywhere" grant. It explicitly
  forbids using the art as a logo/trademark or basis for merchandise, forbids modifying/recoloring,
  and requires a credit line ("Some artwork © 2015 Dean Spencer, used with permission. All rights
  reserved.") wherever it's used. Treat as CRB-book-only unless Ken confirms otherwise for a
  specific piece.
- **DriveThruRPG marketplace art packs** (`Art Assets\DriveThruRPG\` — Godbound, House Of Bone And
  Amber, Scarlet Heroes, Silent Legion, SotD, Stars Without Number Revised, each with per-artist
  subfolders). No license document for these was found alongside them. RPG stock-art bundles like
  these are typically licensed for "your own tabletop RPG product," not general marketing/web use
  outside the book — treat as CRB-book-only until a license is located and confirmed.
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

## Rule of thumb

If it's not in the Shutterstock folder or the GD Assets brand folder, don't put it on the public
site without checking with Ken first — even if it's sitting right next to art that IS cleared, in
the same category folder.
