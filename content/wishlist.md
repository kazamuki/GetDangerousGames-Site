---
purpose: Running list of ideas, gaps, and decisions spotted while porting the old site's content into
  real Jekyll pages. Not scoped work — a backlog to review with Ken once the porting pass is done.
---

## From building YouTube / Podcasts / Contact / Writing (2026-09-05)

- **YouTube playlist lineup is stale.** The original `content/youtube.md` teaser list (8 playlists)
  was written against an old snapshot of the channel. The live channel now has 30+ playlists,
  including several newer Shadows actual-play campaigns not reflected anywhere in our content docs:
  **Shadows 2.0**, **Shadows: The Old Regime**, **Shadows: 13th Floor**, **Shadows: World's Apart**.
  "Shadows: Trouble in Neverlands" and "Shadows 3.0" (the two Shadows entries in the old teaser list)
  couldn't be found in a reasonable scroll of the current Playlists tab — they may have been renamed,
  archived, or just buried further down a long list. Worth asking Ken which campaigns he actually
  wants featured on the site now, rather than carrying forward a list from years ago. The current
  page (`youtube/index.html`) keeps the old 8-item list as "fan-favorite" teasers but links most of
  them to the general Playlists tab rather than a specific (unverifiable) playlist ID — only
  Vermintide 2 has a real direct link, since that one was already confirmed working in the old
  content file.
- **YouTube also has a "Podcasts" tab now**, separate from Spotify — spotted a "Fiction Factory
  Podcast" listed there with **14 episodes** (vs. the 4 captured in `content/podcasts.md`). Worth
  deciding whether the site's Podcasts page should also surface the YouTube-hosted episodes, or stay
  Spotify-only as built.
- **Podcast episode counts are stale too.** `content/podcasts.md` has 3 Myriad Circle + 4 Fiction
  Factory episodes; the real shows likely have more by now (see above). The built page only embeds
  what's in the content file — a pass to add newer episodes would be easy once Ken confirms the
  current episode list.
- ~~Voice decision still open for creator pages~~ **Resolved 2026-09-05**: Ken confirmed the
  creator-page (studio) voice from brand/theme.md — not d33Kode's old personal first-person voice —
  is the standard for Writing/YouTube/Podcast copy going forward. Rewrote the remaining quippy/personal
  lines on YouTube (e.g. "Need I say more?", "lots of shenanigans") and Podcasts ("the wonderful app
  Wisdom") to match. Apply this same standard to the real Writing story pages once their full text
  is ready.
- **YouTube channel banner art** (`GD Assets/Updated YT Banner.png` — the neon pixel-art bear-and-flames
  banner currently live on the real YouTube channel) is fun but stylistically inconsistent with the
  site's moody-painted Shutterstock art direction. Didn't use it as the page hero for that reason —
  flagging in case Ken wants a smaller "as seen on YouTube" callout using it somewhere instead.
- **Podcast cover art exists** (`GD Assets/Pod Thumbs/Main Pod art.png`, `GD Assets/YT Thumbs/Myriad_GD_Banner.png`)
  but again in a different illustration style than the site's Shutterstock-driven look. Skipped for
  now in favor of Spotify's own embed artwork; revisit if Ken wants the podcasts page to feel more
  "branded" than "just embeds."
- **Contact page has no secondary channel listed** besides Discord, per the existing decision — worth
  double-checking that's still right once the other social links (Twitch/Twitter/Patreon) are visible
  in the header icon row on every page; a visitor landing on Contact already has those one click away.

## From reviewing Home (2026-09-06)

Fixed in passing, not open questions: Shadows RPG setting year corrected 2074 → 2099 (`index.html`
and `content/home.md`), a carried-over "thought"/"though" typo in the footer disclaimer, the YouTube
pillar card linking out to the external channel instead of the new `/youtube/` page, and the pillar
card copy still carrying pre-decision personal "I" voice ("As an avid writer, I want to share my
imagination...") — brought in line with the studio/creator-page voice call from the YouTube/Podcasts
pass.

Actual open items:
- **Home's pillar cards are static teasers now that YouTube/Podcasts/Writing have real pages behind
  them.** Worth considering a small "latest" strip — most recent video thumbnail, latest podcast
  episode — to make Home feel more alive instead of three unchanging blurbs. Bigger scope than a copy
  fix: needs either manual upkeep or a live embed/API call, so worth scoping with Ken before starting.
- **Blog is the last unbuilt page in the primary nav/sitemap.** Once it exists, Home's "Nothing here
  yet" empty-state block needs replacing with a real latest-posts teaser (2-3 most recent post cards,
  matching the pillar-card visual language).
- **Home has no direct link to Contact**, relying entirely on the footer link and header social icons.
  The blog-empty CTA ("Join the Discord") already covers the "get in touch" impulse directly, so this
  may be intentional — flagging only in case Ken wants a more explicit path to Contact from Home.
