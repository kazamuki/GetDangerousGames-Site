# Get Dangerous Games — Site Rebuild

## What this is

The Get Dangerous Games home site (previously live at GetDangerous.net) was originally built in Google Sites. This repo is where it's being rebuilt as a proper, hand-designed website instead. This file is the map: what exists, where the old content lives, what the brand rules are, and what's still an open decision.

Sibling/related project: **Shadows RPG** (the TTRPG referenced throughout this site, shadowsrpg.com) shares the same brand guidelines but is a separate product with its own Core Rulebook — this repo is scoped to the Get Dangerous Games site only.

## Status

**Step 1 (done):** the old Google Sites export has been crawled and converted into readable Markdown content files, and the brand guide has been brought into the repo.
**Step 2 (done):** a first-direction visual design was drafted and approved — see "Design" below.
**Step 3 (in progress):** real Jekyll implementation. The Home page is built and matches the approved design — see "Jekyll site" below. Writing/Podcasts/YouTube/Blog/Contact pages don't exist yet; their nav links currently point to `#`.

**Live:** https://kazamuki.github.io/GetDangerousGames-Site/ — GitHub Pages was enabled 2026-09-05 (source: `main` branch, root), first build succeeded, confirmed rendering correctly including all asset paths under the project-page baseurl. Every push to `main` triggers a fresh Pages build automatically.

## Jekyll site

Standard Jekyll layout, buildable by GitHub Pages' native Jekyll support (no GitHub Actions workflow needed — `Gemfile` pins the `github-pages` gem so a local `bundle exec jekyll serve` would match GitHub's build, though no Gemfile.lock is committed since Ruby isn't installed on this machine to generate one).

```
_config.yml       Site title/description, social URLs, baseurl set for a project page
                  (kazamuki.github.io/GetDangerousGames-Site) — update if the custom domain ever
                  gets attached, since a real domain typically means clearing baseurl.
Gemfile           gem "github-pages" — keeps local and GitHub's Jekyll versions in sync
_layouts/default.html   Header (logo, nav, Shadows RPG CTA, social icons) + footer, wraps every page
index.html        Home page content (hero, Shadows RPG band, three pillars, blog empty-state)
assets/css/main.css     All page styling — CSS custom properties for the brand palette, one class
                  per component, translated directly from the approved design canvas
assets/images/    gd-bear-icon.png, shadows-logo.png, hero-skyline.jpg, shadows-band-bg.jpg — the
                  same optimized images used in the design canvas, copied in as real files
```

No Ruby/Jekyll is installed locally, so this couldn't be build-tested with the real Jekyll engine — it
was verified by manually flattening the layout+page into static HTML (substituting the Liquid tags by
hand) and checking that in the Browser pane, plus a careful read of the Liquid syntax used (`relative_url`,
`site.social.*`, `{{ content }}`). **Treat GitHub Pages' own build as the first real test** — if it fails,
check the repo's Pages build log first.

## Design

First-direction homepage mockup + style sheet, approved by Ken:
**https://claude.ai/code/artifact/e4e6e2b2-a6a8-4397-b7d3-b2426dbf39bb**

This is a Claude Design canvas (two artboards: Homepage, Style Sheet) — view it in a browser, it's
not a file in this repo. Its working source files (`.dc.html`, a design-tool-specific format) live
in a session-scoped temp scratchpad and are **not** persisted anywhere durable — treat the published
artifact link as the source of truth going forward, not those temp files. When building the real
Jekyll templates in Step 3, reference the artifact directly (screenshot it or read it back via the
Artifact tool) rather than looking for local `.dc.html` source.

What's locked in from that pass:
- **Dark-mode-first**, Midnight Underpass (`#0D1731`) as the dominant background — matches the brand
  guide's explicit "reliable dark-background pairing" note, and fits the cyberpunk/TTRPG subject
  matter better than a light theme would.
- **Real brand marks used, not placeholders**: bear mascot icon (`GD Assets/LOGO NO TEXT.png`) in
  nav/footer at small scale — the full circular lockup with baked-in wordmark text
  (`GD Assets/Color_logo_-_no_background.png` / `White_logo_-_no_background.png`) is reserved for
  large/social use only, since its text goes illegible below poster size. Shadows RPG band uses the
  real Shadows skull/dice logo (`Core Rule Book/Art Assets/Icons/logo.svg` or `logo png.png`).
- **Hero and Shadows-band backgrounds** are confirmed-licensed Shutterstock art — see "Decided"
  below and [brand/asset-licensing.md](brand/asset-licensing.md).
- **Cerulean Nights** isn't loadable in the design-canvas preview environment (no font host
  available there) — Unbounded was used as a stand-in for display type. Swap for the real licensed
  font when it's acquired and Step 3 begins.
- **Nav**: `Home · Writing · Blog · YouTube · Podcasts` + a `Play Shadows RPG →` CTA button + a
  social icon row (Discord/Twitch/Twitter/YouTube/Patreon), all detailed under "Decided" below.

Not yet designed: Writing, Podcasts, YouTube, and Contact page layouts — only the Home page and a
reusable style sheet exist so far. The style sheet's color/type/button/card specs should carry
straight over when those pages get designed.

## Decided

- **Hosting:** GitHub Pages. Custom domain (GetDangerous.net) is **not** being pointed at it yet — Ken wants to confirm the default `*.github.io` deployment works end-to-end first, then add the CNAME later.
- **Stack:** Jekyll.
- **Blogging:** native Jekyll posts going forward — the external Blogspot embed (`getdangerousupdates.blogspot.com`) is retired. **Launch blank**: no back-catalog import for now, may backfill old Blogspot posts later. See [blog.md](content/blog.md).
- **Writing:** stories move to being hosted natively (Jekyll pages/collection) instead of linking out to Belletristica, which is being treated as defunct as a host. Full text still needs to be pulled from the old Belletristica/Webnovel URLs — see the migration checklist in [writing.md](content/writing.md).
- **Contact page:** points to Discord as the contact channel — no form.
- **Voice:** site copy shifts to the brand guide's studio-level voice (gritty-but-hopeful, confident-not-arrogant, player-first — see brand/theme.md), moving away from the old site's casual first-person "d33Kode" voice. Revisit whether Writing/YouTube/Podcast blurbs (inherently personal-creator content) keep more of d33Kode's voice when those sections get rewritten.
- **Cerulean Nights:** license is being purchased — cleared to use as the display font once acquired. No longer a blocker for the visual design direction.
- **Hero & Shadows-band background art:** pulled from the confirmed-licensed Shutterstock library (`Shadows/Core Rule Book/Art Assets/Shutterstock/`) instead of the old Google Sites images. Hero uses `March 2023/shutterstock_2216124455.jpg` (noir trenchcoat figure over a rainy neon skyline); the Shadows RPG feature band uses `October 2022/shutterstock_1621160803.jpg` (figure stepping into a lightning-wreathed portal). See [brand/asset-licensing.md](brand/asset-licensing.md) for the full licensing rundown and other strong candidates cataloged for later sections (Writing, Podcasts, YouTube).
- **Nav structure ("Shadows-forward"):** `Home · Writing · Blog · YouTube · Podcasts` as primary text nav, plus a standout `Play Shadows RPG →` CTA button in the header (external link to shadowsrpg.com) since it's the flagship project despite living on a separate domain. Discord/Twitch/Twitter/Patreon become an icon row (header or footer), not text nav items — Discord is no longer a full nav item like it was on the old site.
- **Contact page:** kept as a dedicated page (not folded into just a header icon) — light, designed copy pointing to Discord as the actual contact channel.

## Repo structure

```
index.html, _config.yml, Gemfile, _layouts/, assets/   The actual Jekyll site — see "Jekyll site" above
content/                  Extracted page content from the old site, as Markdown (see below)
brand/theme.md                 Brand guide (colors, type, voice) — condensed from GUIDE_Brand_Guidelines.md
brand/asset-licensing.md       What art in the shared Shadows asset library is safe to use where — read before pulling in any image
brand/shutterstock-catalog.md  Catalog of all 40 licensed Shutterstock images with per-section fit notes
```

`_config.yml`'s `exclude:` list references `Google-Page-Oriignal/`, `content/`, and `brand/` so Jekyll
never tries to build them — harmless to leave even though the first no longer exists (see below), but
clean that entry up if it's ever confusing.

### The old Google Sites export is gone from this repo — REAL SECURITY REASON, not just cleanup

`Google-Page-Oriignal/` (the raw Google Sites export, previously described here as "kept until
Writing/Podcasts/YouTube/Updates have real replacement art") was **removed from git entirely on
2026-09-05** after GitHub's secret scanning flagged 6 real Google API keys
(`AIzaSy...`) baked into the minified JS blob inside `YouTube.html` (and likely the other `.html`
files too, and their now-deleted `DRAFT/` copies in earlier history) — flagged `publicly_leaked: true`
since the repo is public. **Do not re-add this folder to the repo.** It's now git-ignored.

**Resolved 2026-09-05**: `git rm --cached` alone wasn't enough (that only fixes the current tip; the
6 keys were still reachable in earlier commits `735e575`/`c065526`/`e515e7c`/`1f30eb2`). Ran
`git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch Google-Page-Oriignal' --prune-empty -- --all`,
verified with `git log main -S"<each key>"` returning zero hits on the rewritten branch, then
force-pushed. **Every commit hash in the repo changed as a result** — if you ever see a commit SHA
referenced somewhere (an old link, a note) that doesn't resolve, this is why. Confirmed via the GitHub
API afterward that the current tree and a GitHub code search both come back clean.

A local-only branch, `archive/pre-secret-purge`, keeps the true original history (leaked keys and all)
for recovery purposes — **never push this branch**. The working copy on Ken's machine was left in place
rather than deleted (a `rm -rf` was blocked by this environment's safety classifier, which was actually
the right call — deleting it locally was never necessary, since the exposure was about it being *public
on GitHub*, not about it existing on disk).

**Still needs a human, not git**: GitHub's secret-scanning alerts (repo → Security tab) stay open until
manually resolved, and — far more importantly — history rewrite does not undo the fact that these 6 key
values were already public. Check each of the 6 keys below against Google Cloud Console; rotate any
that trace back to a project Ken controls, regardless of the git cleanup:
`AIzaSyCF97XfLoejM9NhWDAZeOcjC6kOEsEmv6A`, `AIzaSyAjb7yrM53w_0_0y9jCxkCAV12Ux5G30TI`,
`AIzaSyD2aoAETJHXO1f_X3uPTOvwcMmDBK5-yEk`, `AIzaSyDaZup8JMoUszICq24hC3gjW69v7xXjb6M`,
`AIzaSyC5fSInmRgPcwXTFvk7mnVLT4rYPiLh3BI`, `AIzaSyAWGrfCCr7albM3lmCc937gx4uIphbpeKQ`

The images that were still useful (Writing/Podcasts/YouTube/Updates thumbnails and cover art —
everything except the `.html` files, which were the actual leak vector) were copied out to
`C:\Apps\GetDangerousGames-Site-reference\old-site-images\` **before** removal — that folder lives
outside this repo entirely (sibling directory, never tracked by git) and is the place to look for that
art when those pages get designed. The `.claude/launch.json` `original-site-server` config that used to
serve `Google-Page-Oriignal/` for re-inspection has been removed since the source folder is gone from
the repo; the text content it produced is already fully captured in `content/*.md`.

### Content files (`content/`)

Each corresponds to one page from the old site, with its text content, image references, and outbound links transcribed:

- [home.md](content/home.md) — landing page (hero, Shadows RPG callout, Writing/YouTube/Podcasts cards)
- [writing.md](content/writing.md) — four short stories, each linking out to Belletristica (and one to Webnovel)
- [youtube.md](content/youtube.md) — channel blurb + 8 playlists
- [podcasts.md](content/podcasts.md) — Myriad Circle (3 eps) and Fiction Factory (4 eps), both on Spotify
- [updates.md](content/updates.md) — a changelog page, stale since 2023-03-02, **not** the current news source (see blog.md)
- [blog.md](content/blog.md) — thin wrapper page that just iframes an external Blogspot blog, which has newer content than updates.md
- [contact.md](content/contact.md) — effectively empty; no contact method existed on the old site
- [images-manifest.md](content/images-manifest.md) — maps every hashed image filename to what it actually is/does

### Nav reality check

The live nav only ever showed: **Home · Writing · YouTube · Podcasts · Discord**. `Blog.html` and `Contact.html` exist as files in the export but were never linked from navigation — they were orphaned pages reachable only by direct URL. Decide during rebuild whether either earns a real spot in nav.

## Brand guide summary

Full detail in [brand/theme.md](brand/theme.md). Key points:

- **Palette:** Aether Pulse (violet `#712B8C`), Deep Circuit (tech-blue `#203F7B`), Neutral Zone (`#E7E7E7`) as primary; Neon Veil (`#BC489A`), Midnight Underpass (`#0D1731`), Signal Gold (`#F2C94C`) as secondary; Static Cyan (`#1BBBC4`) and Ghostly Green (`#71C388`) as sparing accents. Target balance: 60% neutral / 25% primary / 10% secondary / 5% accent.
- **Type:** Cerulean Nights for display (⚠️ **not yet licensed for commercial use** — see below), Inter for body, Roboto Mono for stat-block/HUD/terminal-flavored UI.
- **Voice (site/blog copy):** gritty-but-hopeful, confident-not-arrogant, imaginative and bold, player-first, empathetic. This is distinct from the in-world Shadows CRB voice — the site should sound like the studio, not the setting.
- **Old site's actual voice**, for comparison: first-person, casual ("I've had a lot of fun playing games..."), signed as d33Kode. Worth deciding whether the rebuild keeps this personal/creator voice or shifts to more of a "the studio" voice per the brand guide — they're not quite the same today.

### Asset licensing — read before pulling in any outside image

See [brand/asset-licensing.md](brand/asset-licensing.md). Short version: the
`Shadows/Core Rule Book/Art Assets/Shutterstock/` folder (42 images, confirmed unlimited-distribution
license) and `Shadows/GD Assets/` (owned brand marks — bear mascot, Shadows logo, banner) are clear
to use on the site. Dean Spencer commissioned art and DriveThruRPG marketplace packs living in the
same overall asset library are restricted to the CRB book itself and must not be used on the website
without separately confirming it's OK. Several of the old Google Sites background images also have
unknown or third-party provenance (one carries a visible outside artist's signature) — don't carry
those forward either.

### Outstanding brand items (carried over from brand/theme.md, still unresolved)
- [ ] Purchase a commercial license for Cerulean Nights from Chequered Ink before it ships live; confirm whether self-hosted webfont use needs a specific license tier.
- [ ] Decide whether the Shadows Character Sheet app's UI should be retrofitted to these same CSS variables, or if theming is net-new for the sites only.

## External links & integrations

Everything the old site pointed out to — needed wherever the new footer/nav is built:

| Channel | URL |
|---|---|
| Shadows RPG | https://www.shadowsrpg.com/ |
| Discord | https://discord.gg/getdangerous |
| YouTube | https://www.youtube.com/@d33kode |
| Twitch | https://www.twitch.tv/d33kode |
| Twitter/X | https://twitter.com/d33KODE |
| Patreon | https://www.patreon.com/d33kode |
| Writing (Belletristica) | https://belletristica.com/en/users/17973-d33kode#works |
| Podcasts (Spotify) | https://open.spotify.com/show/67HMykvw9NaCtPnF0LOj1k |
| Blog (external, Blogspot) | https://getdangerousupdates.blogspot.com/ |

`d33Kode` is the creator/on-camera persona name used consistently across YouTube, Twitch, Twitter, and Patreon — distinct from the "Get Dangerous Games" studio/brand name. Both identities appear throughout the old site; keep both in mind for the rebuild's voice and attribution.

## Known quirks from the old site (don't silently carry these forward)

- Footer copyright year is computed client-side (`© 2026...` shown because that's "this year" per Google Sites JS) — replicate as dynamic, not hardcoded.
- The "Previous Updates" page (`updates.md`) has one duplicated entry (LRRH - Retold appears twice) and stops in March 2023, while the external Blogspot blog has posts as recent as September 2023. Treat Blogspot as the more current source if reconciling the two.
- Writing page cover art (3 of 5 image files) wasn't conclusively matched to a specific story — flagged in images-manifest.md. Good candidate for fresh art anyway rather than reusing Google Sites-era stock imagery.

## Still-open decisions for the rebuild (ask Ken before locking these in)

1. **Import Blogspot's back-catalog or not** — launching blank for now; may backfill later. Revisit once the new blog exists and has some native posts of its own.
2. **Custom domain** — deferred until the default `*.github.io` deployment is confirmed working.
3. **Design for Writing, Podcasts, YouTube, Contact** — only Home is designed so far; extend the approved style sheet to these next.
4. ~~Enable GitHub Pages~~ — done 2026-09-05, see "Live" note above.

## Working notes for future sessions

- The old Google Sites export is **gone from the repo** (leaked API keys — see above). Its text is fully captured in `content/*.md`; leftover images live at `C:\Apps\GetDangerousGames-Site-reference\old-site-images\` (Writing/Podcasts/YouTube/Updates only, no `.html` files, outside git entirely). There's nothing left to re-inspect via a local server for this.
- To continue iterating on the design: read the artifact back (Artifact tool, `action: "read"`, the URL in the "Design" section above) before editing it — never publish an update to it blind. If starting fresh work on a new page (Writing, Podcasts, etc.), match its color/type/component choices by eye from the Style Sheet artboard rather than trying to recover the original `.dc.html` source, which won't exist in a new session.
- The Shutterstock/GD Assets art referenced throughout lives outside this repo, under `C:\Users\Kazam\OneDrive\Documents\Gaming\Shadows\` — see [brand/asset-licensing.md](brand/asset-licensing.md) for exact paths. None of it is copied into this repo yet; that should happen once Step 3 (real Jekyll build) needs actual asset files to serve.
