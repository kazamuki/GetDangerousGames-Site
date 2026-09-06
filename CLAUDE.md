# Get Dangerous Games — Site Rebuild

## What this is

The Get Dangerous Games home site (previously live at GetDangerous.net) was originally built in Google Sites. This repo is where it's being rebuilt as a proper, hand-designed website instead. This file is the map: what exists, where the old content lives, what the brand rules are, and what's still an open decision.

Sibling/related project: **Shadows RPG** (the TTRPG referenced throughout this site, shadowsrpg.com) shares the same brand guidelines but is a separate product with its own Core Rulebook — this repo is scoped to the Get Dangerous Games site only.

## Status

**Step 1 (done):** the old Google Sites export has been crawled and converted into readable Markdown content files, and the brand guide has been brought into the repo.
**Step 2 (done):** a first-direction visual design was drafted and approved — see "Design" below.
**Step 3 (done):** real Jekyll implementation. Home, Writing, Blog, YouTube, Podcasts, and Contact are all built and live in nav with real content — every primary nav item points somewhere real. Ruby is now installed locally and `bundle exec jekyll serve` works for real local iteration — no more flattening templates by hand to preview. See [content/wishlist.md](content/wishlist.md) for ideas/gaps spotted while porting content — review with Ken once the porting pass is fully done.

**Responsive pass (2026-09-06):** the header (nav links, "Play Shadows RPG" CTA, social icons, and the "Get Dangerous" wordmark) now shrinks fluidly with viewport width instead of using fixed sizes — see the `clamp()`/`calc()` rules under `.site-header` in `main.css`, all tied to the same 640–1200px window so the whole header contracts as one unit. The wordmark collapses to "GD" below 1180px (`.brand-full`/`.brand-short` spans in `_layouts/default.html`). Separately, a new `--gutter` CSS variable (`clamp(20px, 6vw, 48px)`) replaced the hardcoded `48px` side-padding on every full-width section (hero, Shadows band, pillars, page headers, content sections, contact, footer), and a `max-width: 560px` tier (placed after the existing 900px/700px breakpoints so it wins the cascade) shrinks the large display type further — the Home hero's 88px headline in particular was still overflowing on real phone widths with only the one 900px→56px step it had before. Verified with a scripted overflow check (`scrollWidth` vs `clientWidth`) across every page at 320px/375px, not just eyeballed.

**Writing built (2026-09-06):** Ken supplied full chapter text directly (as .docx/.pdf files, not scraped from Belletristica) for 7 stories — hosted as a native Jekyll `_stories` collection (`_layouts/story.html`, `/writing/<slug>/`, permalink configured in `_config.yml`). Each story page gets its own accent-color theme (front-matter `accent`/`glow_1`/`glow_2`, recolors the page-header glow, eyebrow, links, chapter-heading rule, and scene-break `<hr>` via `--story-accent` CSS custom properties in `_layouts/story.html` — see `.story-header`/`.story-body`/`.status-badge` rules in `main.css`) so each reads with a distinct vibe rather than one flat template. A "Complete"/"Ongoing" status badge and byline sit under each title. "The Last Encounter" (one of the 4 original Belletristica titles) was **intentionally left unhosted** — Ken couldn't locate its source text — don't recreate it from the old teaser blurb; wait for the real file. Completion-status calls (which stories are "Ongoing" vs. "Complete") were inferred by Claude for everything except LRRH (which Ken explicitly flagged as incomplete) — see the "Completion-status calls" note in [content/writing.md](content/writing.md) in case any read wrong. Comments/likes/view-counters were discussed but **not implemented** — this is a static GitHub Pages site with no backend, so real cross-visitor counts need a third-party service or enabling GitHub Discussions (giscus), both of which need a decision from Ken first; see [content/writing.md](content/writing.md)'s "Hosting features" section for the options.

**Home page cleanup pass (2026-09-06):** header/footer social row now uses real current brand icons (Discord/Twitch/X/YouTube/Patreon via simple-icons SVGs, shared through `_includes/social-icons.html`) instead of letter placeholders. Also fixed on Home: Shadows RPG's setting year corrected 2074 → 2099 (matches the real current setting), a carried-over footer typo ("thought" → "though"), the YouTube pillar card linking externally instead of to the new `/youtube/` page, and pillar-card copy that still had pre-decision personal "I" voice.

**Blog built (2026-09-06):** native Jekyll blog is live — `/blog/` index, `_layouts/post.html`, and `_posts/` all built extending the existing component system (no new design pass). See "Decided → Blogging" below for the scope call (one blog, this site only) and the curated-backfill call (5 of 28 exported Blogspot posts brought in as history). Also this session: `brand/asset-licensing.md` updated — newly-located license files resolved nearly all of the previously-"restricted, no license found" DriveThruRPG art packs (Godbound, House Of Bone And Amber, Scarlet Heroes, Silent Legion, SotD, Stars Without Number Revised) as public-domain/free-commercial-use; only Dean Spencer's commissioned art is still CRB-book-only.

**Blog follow-ups (2026-09-06):** the 2 backfilled posts with inline images had those images pulled off Blogger's CDN and self-hosted at `assets/images/blog/` — except one, which got caught, not carried forward: the Quick Start Guide teaser's YouTube thumbnail carried a visible **"ArturSadlos.co" watermark**, the same third-party concept-artist signature already flagged in `brand/asset-licensing.md` for the old Home background. That image was dropped from the post (replaced with a plain video link) instead of self-hosted — see [blog.md](content/blog.md) and the updated asset-licensing note below; don't re-add it if you come across it again while migrating Writing. `/blog/` also got client-side tag-pill filtering (vanilla JS, `.tag-pill`/`.tag-filter` in main.css) — worth flagging one non-obvious CSS fix that goes with it: `.post-card[hidden] { display: none; }` had to be added explicitly because `.post-card { display: flex }` (an author rule) otherwise overrides the browser's default `[hidden]` behavior at equal specificity — don't remove that override rule, filtering silently breaks without it.

**Live:** https://kazamuki.github.io/GetDangerousGames-Site/ — GitHub Pages was enabled 2026-09-05 (source: `main` branch, root), first build succeeded, confirmed rendering correctly including all asset paths under the project-page baseurl. Every push to `main` triggers a fresh Pages build automatically.

### Only remaining content gap: "The Last Encounter"

All primary pages are built with real content. The one loose end is a story, not a page: **"The Last Encounter"** — one of the 4 original Belletristica titles — is still missing its source text (Ken couldn't locate it when he sent over the other 6). If/when that text turns up:

1. Add a new file to `_stories/` (copy an existing one's front matter shape — see `_stories/once-bitten.md` for a short one) with a slug, `author`, `status`, `blurb`, `reading_time`, an `order` value, and an unused accent-color pairing (check the other 7 files' `accent`/`glow_1`/`glow_2` before picking new ones so it doesn't collide).
2. Paste/convert the story body below the front matter as markdown — watch for the same `.docx`/PDF export quirks this session ran into: literal `\~\~\~CHAPTER N\~\~\~` scene/chapter markers needing conversion to `## Chapter N` and `* * *`, stray trailing `\` line-continuation characters that can silently merge two paragraphs if not handled (`s/\\(\r?\n)\z/$1/` merges without care — insert the paragraph break back in), and (for PDF sources via `pdftotext -layout`) embedded `\x0c` form-feed page-break characters that block simple leading-whitespace stripping.
3. It'll automatically appear on `/writing/` (sorted by `order`) and get a real page at `/writing/<slug>/` — no template/layout work needed, `_layouts/story.html` and the `.story-*` CSS in `main.css` already handle any new entry in the collection.
4. Update `content/writing.md`'s "The Last Encounter" entry from "NOT hosted yet" to done.

For any *other* future page-level work (a genuinely new page, not a new story), the general pattern is still: check `content/<page>.md` for source notes, check `brand/shutterstock-catalog.md`/`brand/asset-licensing.md` before pulling in art, reuse `assets/css/main.css`'s existing classes rather than re-deriving a design, build as a real Jekyll file, test via the `jekyll-site` launch config, then commit/push/confirm the Pages build.

## Jekyll site

Standard Jekyll layout, buildable by GitHub Pages' native Jekyll support (no GitHub Actions workflow needed — `Gemfile` pins the `github-pages` gem so a local `bundle exec jekyll serve` matches GitHub's build).

```
_config.yml       Site title/description, social URLs, baseurl set for a project page
                  (kazamuki.github.io/GetDangerousGames-Site) — update if the custom domain ever
                  gets attached, since a real domain typically means clearing baseurl.
Gemfile           gem "github-pages" — keeps local and GitHub's Jekyll versions in sync. Also
                  carries a Ruby-version compatibility shim — see below, don't remove it.
Gemfile.lock      Committed — generated once Ruby was installed locally (2026-09-05).
_layouts/default.html   Header (logo, nav, Shadows RPG CTA, social icons) + footer, wraps every page
_layouts/post.html      Blog post layout — page-header (date/tags/title) + prose body + back-to-blog link
_layouts/story.html     Story page layout — per-story accent theme via --story-accent CSS custom
                  properties (front-matter accent/glow_1/glow_2), status badge, byline, prose body
_includes/social-icons.html  Discord/Twitch/X/YouTube/Patreon icon row, shared by header + footer —
                  real current brand marks (simple-icons SVGs), not placeholder letters
index.html        Home page content (hero, Shadows RPG band, three pillars, latest-3-posts/empty-state)
writing/index.html      Writing index — story-card grid pulling from the _stories collection
                  (sorted by front-matter `order`), each card linking to its real story page
_stories/               Native Jekyll story pages (collection, output at /writing/<slug>/ — see
                  "Writing built" above and content/writing.md for the full lineup + status calls)
blog/index.html         Blog index — reverse-chronological post-card list with tag-pill filtering
                  (vanilla JS), empty-state if _posts/ is empty
_posts/                 Native Jekyll blog posts (see "Decided → Blogging" for the backfill/scope calls)
youtube/index.html      YouTube page — all-videos CTA + playlist-pick cards
podcasts/index.html     Podcasts page — Myriad Circle + Fiction Factory, real embedded Spotify players
contact/index.html      Contact page — Discord CTA, no form
assets/css/main.css     All page styling — CSS custom properties for the brand palette, one class
                  per component, translated directly from the approved design canvas (Home) and
                  extended with matching components (page-header, media-card, episode-embed,
                  story-card, contact-card, post-card, post-body) for the pages built after it
assets/images/    gd-bear-icon.png, shadows-logo.png, hero-skyline.jpg, shadows-band-bg.jpg (Home,
                  from the design canvas) plus youtube-header.jpg, podcasts-header.jpg,
                  writing-header.jpg, blog-header.jpg — page-header backgrounds for the newer pages,
                  sourced from the licensed Shutterstock catalog (see brand/shutterstock-catalog.md)
                  and resized/compressed the same way as the Home images (~1600px wide, JPEG
                  ~80-140KB; no ImageMagick/Python on this machine — used PowerShell's
                  System.Drawing to resize+recompress instead)
assets/images/blog/     Inline images referenced from individual blog posts (as opposed to page-header
                  backgrounds, which stay flat in assets/images/) — self-hosted copies of images
                  pulled from the Blogspot export, vetted against brand/asset-licensing.md first
```

### Local dev environment (Ruby)

Ruby 4.0.6 + Devkit installed 2026-09-05 to `C:\Ruby40-x64` (via RubyInstaller). Two non-obvious
things had to be fixed to get `bundle exec jekyll serve` working locally — both already fixed in
the repo, documented here so nobody "fixes" them back to the naive version later:

1. **`github-pages` pins ancient gems** (Jekyll 3.9.0, Liquid 4.0.3 — matching GitHub's own frozen
   Pages build environment) that assume things modern Ruby removed: `webrick`/`csv`/`logger`/
   `base64`/`bigdecimal` left Ruby's default gems over several versions (added explicitly to the
   Gemfile), and Liquid still calls Ruby's fully-removed taint methods (`String#tainted?` etc.) —
   fixed with a shim **in the Gemfile itself**, not a `_plugins/` file (github-pages forces Jekyll's
   `safe` mode, which disables custom plugins entirely — the shim has to run before that even
   matters). The shim must use `::Object.class_eval` rather than `class Object ... end` — the
   latter silently reopens a shadow class nested inside Bundler's own Gemfile-eval context instead
   of the real top-level `Object`, so it looks like it worked but doesn't.
2. **None of this affects the real GitHub Pages build** — confirmed by polling the Pages build API
   after every push in this session; GitHub builds on its own older Ruby where these methods still
   exist. This is purely a "modern Ruby running 2019-era gems" local problem.
3. **`.claude/launch.json`'s `jekyll-site` config runs through `cmd.exe /c` with an explicit
   `PATH=C:\Ruby40-x64\bin;%PATH%` prefix**, not a bare `bundle`/`ruby` call. Two independent
   Windows gotchas forced this: the preview tool's process spawner can't invoke `.bat` files
   without a shell, and `ruby -S bundle` (needed instead of a literal path to the `bundle` script —
   the literal-path form triggers a separate RubyGems bin-resolution bug that manifests as a
   misleading `bundler: command not found: jekyll`) needs Ruby's bin dir on `PATH` to find `bundle`
   at all, which isn't guaranteed for a freshly spawned process on this machine.

If `bundle exec jekyll serve` ever breaks again with `command not found: jekyll`, don't trust that
message — run with real args to see the underlying exception (`ruby.exe -S bundle exec jekyll build`
without swallowing stderr) before assuming gems are missing.

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
- **Blogging:** native Jekyll posts, built 2026-09-06 — the external Blogspot embed (`getdangerousupdates.blogspot.com`) is retired. **Scope confirmed 2026-09-06**: one blog, lives on this (Get Dangerous Games) site only — Shadows RPG is a separate product/domain and doesn't get its own native blog or a content-sync pipeline; it can link out to specific posts if it wants a presence. **Backfill confirmed 2026-09-06**: Ken exported the full Blogspot history via Google Takeout, which unblocked this; rather than importing all 28 posts, a curated subset of 5 (the ones with real substance — Shadows dev/lore updates, a podcast-series announcement, a cadence-change reflection, a creator collab) were brought in as historical `_posts/`, skipping the daily "new video is up!" cross-posts the YouTube page already covers. See [blog.md](content/blog.md) for the full rundown.
- **Writing:** stories are hosted natively (Jekyll `_stories` collection) instead of linking out to Belletristica, which is treated as defunct as a host. **Built 2026-09-06** — see "Writing built" above and [writing.md](content/writing.md) for the full lineup, per-story completion-status calls, and the still-missing "The Last Encounter."
- **Contact page:** points to Discord as the contact channel — no form.
- **Voice:** site copy shifts to the brand guide's studio-level "creator-page" voice (gritty-but-hopeful, confident-not-arrogant, player-first — see brand/theme.md), moving away from the old site's casual first-person "d33Kode" voice. **Confirmed 2026-09-05**: this applies to Writing/YouTube/Podcast blurbs too, not just Home/Blog — Ken opted for the studio voice over keeping more of d33Kode's personal tone on the inherently personal-creator pages. Applied when writing the YouTube/Podcasts pages, and to the Writing index/story-card blurbs written 2026-09-06 — note this only governs *site* copy (blurbs, nav, headers), not the stories' own prose, which stays each author's actual creative voice, untouched.
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

- [home.md](content/home.md) — landing page content. **Already built** — see "Jekyll site" above; treat `index.html` as more authoritative than this file for Home specifically now.
- [writing.md](content/writing.md) — originally four stories (old site linked out to Belletristica/Webnovel); **decided** these get hosted natively instead. **Built 2026-09-06** — 7 stories now live as a native `_stories` collection (3 of the original 4 titles, plus 4 new ones Ken supplied; "The Last Encounter" is still missing its source text and intentionally not hosted). See the file for the full lineup, attribution, and per-story completion-status calls.
- [youtube.md](content/youtube.md) — channel blurb + 8 playlists. **Built** (`youtube/index.html`). The 8-playlist teaser list is carried over from this file, but the live channel has grown a lot since — see [wishlist.md](content/wishlist.md) for specifics (new Shadows campaigns not reflected here, two old entries that couldn't be re-located). Most cards link to the general Playlists tab rather than a specific ID; only Vermintide 2 has a confirmed direct link.
- [podcasts.md](content/podcasts.md) — Myriad Circle (3 eps) and Fiction Factory (4 eps), both on Spotify. **Built** (`podcasts/index.html`) with real embedded Spotify players for every episode listed here (IDs verified against Spotify directly). Episode counts in this file are stale — see [wishlist.md](content/wishlist.md).
- [updates.md](content/updates.md) — a changelog page, stale since 2023-03-02, **not** the current news source (see blog.md). Superseded by native blogging (see "Decided → Blogging") — probably doesn't need its own page in the rebuild at all, confirm with Ken rather than assuming.
- [blog.md](content/blog.md) — old site just iframed an external Blogspot blog. **Built** (`blog/index.html` + `_layouts/post.html` + `_posts/`) — native Jekyll posts, one blog for this site only, 5 curated historical posts backfilled from the Blogspot export. See the file for the full scope/backfill rundown.
- [contact.md](content/contact.md) — effectively empty on the old site. **Decided**: dedicated page pointing to Discord, no form. **Built** (`contact/index.html`).
- [images-manifest.md](content/images-manifest.md) — maps every hashed old-site image filename to what it actually is/does. Reference only now that the images themselves live at the external reference folder (see below) or are being replaced by Shutterstock/GD Assets art.
- [wishlist.md](content/wishlist.md) — running backlog of ideas/gaps/decisions spotted while porting content into real pages. Not scoped work — review with Ken once the full porting pass is done.

### Nav reality check (historical — superseded)

The **old** live nav only ever showed: Home · Writing · YouTube · Podcasts · Discord, with `Blog.html`/`Contact.html` orphaned (never linked). **This has been decided for the rebuild already** — see "Decided → Nav structure" above (`Home · Writing · Blog · YouTube · Podcasts` + CTA). Kept here only as historical context for why the old export looked the way it did.

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
to use on the site. **Updated 2026-09-06**: license files located at `Core Rule Book\Licenses\`
confirmed nearly all of the DriveThruRPG marketplace packs (Godbound, House Of Bone And Amber,
Scarlet Heroes, Silent Legion, SotD, Stars Without Number Revised) as Kevin Crawford/Sine Nomine
public-domain releases — free for commercial use, credit-the-artist as a courtesy — so they're now
clear to use on the website too, not just CRB-book-only. Dean Spencer's commissioned art is the only
one still restricted to the CRB book specifically (one-time print/web license, not a blanket grant).
Several of the old Google Sites background images also have unknown or third-party provenance (one
carries a visible outside artist's signature) — don't carry those forward either.

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

1. ~~Import Blogspot's back-catalog or not~~ — decided 2026-09-06: Ken exported the full history via Google Takeout, a curated subset of 5 posts (out of 28) was backfilled as historical `_posts/`, the rest were left out as same-day video-cross-post filler. See [blog.md](content/blog.md).
2. **Custom domain** — deferred until the default `*.github.io` deployment is confirmed working.
3. ~~Design for Writing, Podcasts, YouTube, Contact, Blog~~ — done 2026-09-05/06, built directly as real Jekyll pages extending `assets/css/main.css`'s existing component classes rather than a separate design-canvas pass (no layout shape needed that the style sheet didn't already cover). Writing's real story pages (with per-story accent theming) shipped 2026-09-06 — see "Writing built" above. Only "The Last Encounter" remains unhosted, blocked on locating its source text.
4. ~~Enable GitHub Pages~~ — done 2026-09-05, see "Live" note above.

## Working notes for future sessions

- The old Google Sites export is **gone from the repo** (leaked API keys — see above). Its text is fully captured in `content/*.md`; leftover images live at `C:\Apps\GetDangerousGames-Site-reference\old-site-images\` (Writing/Podcasts/YouTube/Updates only, no `.html` files, outside git entirely). There's nothing left to re-inspect via a local server for this.
- To continue iterating on the design: read the artifact back (Artifact tool, `action: "read"`, the URL in the "Design" section above) before editing it — never publish an update to it blind. If starting fresh work on a new page (Writing, Podcasts, etc.), match its color/type/component choices by eye from the Style Sheet artboard rather than trying to recover the original `.dc.html` source, which won't exist in a new session.
- The Shutterstock/GD Assets art referenced throughout lives outside this repo, under `C:\Users\Kazam\OneDrive\Documents\Gaming\Shadows\` — see [brand/asset-licensing.md](brand/asset-licensing.md) for exact paths. None of it is copied into this repo yet; that should happen once Step 3 (real Jekyll build) needs actual asset files to serve.
