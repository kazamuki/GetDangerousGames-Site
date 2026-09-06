---
page: Writing
source: Google-Page-Oriignal/PUBLISHED/Writing.html
nav_label: Writing
---

# Header

Hero image: full-width cyberpunk cityscape (`Writing/2e076e982627e42406a0ae2034c3a056.jpg` or similar in `Writing/`).

Welcome to my writing! You can check out my various works on [Belletristica](https://belletristica.com/en/users/17973-d33kode#works). You'll see links to each one below. Comments and feedback are welcome!

**Built 2026-09-06**: full chapter text was supplied directly by Ken for 7 stories (3 of the original 4 Belletristica titles, plus 4 new ones) and hosted natively as a Jekyll `_stories` collection at `/writing/<slug>/`. Belletristica/Webnovel links are fully retired. See "Works" below for the current lineup and `_stories/*.md` for the actual page content/front matter.

# Works

Native story pages, each with a blurb, author attribution, a completion-status badge, and a genre-matched accent color/theme (see [main.css](../assets/css/main.css)'s `.story-header`/`.story-body` rules and each story's `accent`/`glow_1`/`glow_2` front matter).

### Fairest — by Melf
Snow White retold from the Queen's point of view. Chapter 1 only; ongoing.
→ `/writing/fairest/`

### LRRH: Witches Trail — by d33Kode
Red Riding Hood retold as a young witch's coming-of-age trial. **Explicitly flagged by Ken as not complete** — the source document cuts off mid-scene (10 chapters, ends on a cliffhanger). Marked "Ongoing" on the page with a status note.
→ `/writing/lrrh-witches-trail/`

### Alabas Warbold — by d33Kode
Dark fantasy origin story — a boy's recurring nightmare follows him home. Old content file called this "No. 1," implying a planned series; marked "Ongoing."
→ `/writing/alabas-warbold/`

### Once Bitten — by d33Kode
Cyberpunk heist-gone-wrong / werewolf-reveal horror one-shot. Reads as a complete vignette (ends on a deliberate "END OF RECORD" cliffhanger, not a cut-off draft) — marked "Complete."
→ `/writing/once-bitten/`

### Shadows Aftermath — by d33Kode
Set in NYTE City (the Shadows RPG setting) — a forensic tech discovers she can see magic. Source file starts at "Chapter 2" (no Chapter 1 was provided) and ends unresolved; marked "Ongoing." Tagged with a "Shadows RPG" eyebrow on its page.
→ `/writing/shadows-aftermath/`

### Ethen's Trial — by d33Kode
Very short (550-word) self-contained scene: a mage's mentor proves a point by erasing his student's memory of a spell. Marked "Complete" as a short vignette.
→ `/writing/ethens-trial/`

### Meet the Author — by d33Kode
Standalone, fully-resolved short story — a cosmic being interrupts a man's Saturday breakfast. The only one of the seven with a clean beginning/middle/end. Marked "Complete."
→ `/writing/meet-the-author/`

### The Last Encounter — NOT hosted yet
Original old-site blurb: "A vessel investigating an anomaly is attacked by an alien force yet unknown." Ken could not locate the source text for this one — **intentionally left off the live Writing index** until it's found. Do not re-add it from memory/placeholder text; wait for the real file.
→ Old Belletristica link (retired, reference only): https://belletristica.com/en/books/52355-the-last-encounter/chapter/294605-unknown-anomaly

## Completion-status calls made when building this (flag to Ken if any read wrong)

Only "LRRH: Witches Trail" was explicitly called out by Ken as incomplete. The "Ongoing" vs. "Complete" badge on the other five was inferred from how each piece actually ends:
- **Ongoing**: Alabas Warbold (old content explicitly numbered it "No. 1"), Shadows Aftermath (starts at Ch. 2, unresolved ending, "1st Posts" filename), Fairest (explicit "Chapter 1" heading, plot unresolved).
- **Complete**: Once Bitten (deliberate "END OF RECORD" close), Ethen's Trial (short but self-contained beat), Meet the Author (fully resolved arc).

## Hosting features — not yet built, needs a decision

Ken asked for ideas on comments/likes/view counters. Since this is a static Jekyll site on GitHub Pages (no backend), the options:
- **Comments**: recommend a "discuss on Discord" link (zero infra, matches the Contact page's Discord-only pattern) as v1. A native on-page option exists later (`giscus`, backed by GitHub Discussions — free, but requires enabling Discussions in the repo's settings first) and bundles emoji reactions, covering "likes" too.
- **View counters**: skipped for now — a real cross-visitor counter needs a third-party service (e.g. GoatCounter), which means signing up for an external account. Reading time is shown instead (computed, no backend needed).
- **Likes**: no real backend yet; a `localStorage`-only "liked" toggle would just be per-browser theater, not a real count. Bundled into the giscus reactions idea above if/when that gets adopted.

## Migration checklist

- [x] ~~Pull full chapter text for Alabas Warbold No. 1~~ — done 2026-09-06, provided by Ken directly (not scraped from Belletristica).
- [x] ~~Pull full chapter text for Once Bitten~~ — done 2026-09-06.
- [ ] Pull full chapter text for The Last Encounter — still not located. Keep the page unlisted until found.
- [x] ~~Pull full chapter text for LRRH - Retold~~ — done 2026-09-06 (as "LRRH: Witches Trail"); confirmed incomplete by Ken, hosted as "Ongoing."
- [ ] Commission or source cover art per story (deferred — pages currently use the shared `writing-header.jpg` banner + per-story accent color instead of individual cover art).
- [ ] Decide on the comments/likes approach above with Ken before wiring anything up (enabling GitHub Discussions is a repo-settings change that needs explicit go-ahead).
