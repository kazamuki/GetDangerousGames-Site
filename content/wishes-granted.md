---
purpose: Archive of wishes from content/wishlist.md that have been granted (built, decided, or fixed).
  Moved here so the live wishlist only shows what's still open. Kept for the reasoning and dates,
  since several of these record why a call went the way it did.
---

New entries go at the top of their section when a wish is granted: cut it from `wishlist.md`, paste it
here, and mark it **Resolved <date>** with a line on what shipped.

## From building YouTube / Podcasts / Contact / Writing (2026-09-05)

- **YouTube playlist lineup is stale** **Resolved 2026-09-06**: pulled the live Playlists tab
  directly (channel now has 35 playlists) and confirmed both old mysteries — "Shadows: Trouble in
  Neverlands" is now **Shadows 2.0** (63 episodes, same Cult of Personality storyline confirmed via
  episode titles) and "Shadows 3.0" is now **Shadows: World's Apart** (41 episodes, "games after the
  last big campaign") — they were renamed, not deleted. Also live now: **Shadows: The Old Regime**
  (3 episodes) and **Shadows: 13th Floor** (2 episodes). All four got real direct playlist links in a
  new dedicated **"Shadows RPG, at the table"** section on `youtube/index.html`, separate from the
  general "Playlist Picks" grid — Ken specifically wanted Shadows actual-play broken out so visitors
  can see the game played before buying the book. Also confirmed **Vermintide 2's old playlist ID is
  dead** ("The playlist does not exist") — dropped from Playlist Picks and replaced with Elden Ring
  (10 episodes, real link verified). Every card in both sections now links to a real, live playlist
  ID pulled straight from the channel, not the general Playlists tab.
- **YouTube also has a "Podcasts" tab now** **Resolved 2026-09-06**: added a "Watch the full run on
  YouTube" link on the Fiction Factory show (`podcasts/index.html`) pointing at the real 14-episode
  YouTube playlist (`list=PLWXG_a-sQ0aEaScUiA8bYKgjdBnPdWbF2`) alongside the existing 4-episode Spotify
  embeds — kept as a companion link rather than embedding all 14 videos inline, since the YouTube run
  goes deep on Shadows rules specifically while the Spotify episodes are the broader-topic version.
- **Podcast episode counts are stale too** **Resolved 2026-09-06**: pulled the real Spotify show
  directly. Myriad Circle is genuinely complete at 3 episodes (no change needed) — Fiction Factory
  had grown to 14 episodes on Spotify (matching the YouTube run), only 4 of which were embedded on
  the site. Added the missing 10 (episodes 5-14) to `podcasts/index.html` and `content/podcasts.md`.
- **Voice decision still open for creator pages** **Resolved 2026-09-05**: Ken confirmed the
  creator-page (studio) voice from brand/theme.md — not d33Kode's old personal first-person voice —
  is the standard for Writing/YouTube/Podcast copy going forward. Rewrote the remaining quippy/personal
  lines on YouTube (e.g. "Need I say more?", "lots of shenanigans") and Podcasts ("the wonderful app
  Wisdom") to match. Apply this same standard to the real Writing story pages once their full text
  is ready.
- **Contact page has no secondary channel listed** besides Discord **Resolved 2026-09-06**: Contact
  gained a labeled row of the other social channels (YouTube/Twitch/X/Patreon, later Reddit, TikTok
  and Instagram) below the Discord CTA, alongside its new page-header banner. Moved here when the
  wishlist was cleaned up (2026-10-29); the build itself is recorded in `CLAUDE.md` under "Contact
  page hero + socials".

## From reviewing Home (2026-09-06)

Fixed in passing, not open questions: Shadows RPG setting year corrected 2074 → 2099 (`index.html`
and `content/home.md`), a carried-over "thought"/"though" typo in the footer disclaimer, the YouTube
pillar card linking out to the external channel instead of the new `/youtube/` page, and the pillar
card copy still carrying pre-decision personal "I" voice ("As an avid writer, I want to share my
imagination...") — brought in line with the studio/creator-page voice call from the YouTube/Podcasts
pass.

- **Home's pillar cards are static teasers** **Resolved 2026-09-07**: added a small rotating
  "spotlight" strip below each pillar card — Writing's cycles through the 7 live stories (real
  cover art), YouTube's cycles through 10 playlists (real thumbnails pulled via YouTube's oEmbed
  endpoint), Podcasts' cycles through 8 episodes (real art via Spotify's oEmbed endpoint). All
  thumbnail URLs were resolved once and hardcoded into `index.html` rather than fetched live in the
  browser — real art with no runtime API dependency or CORS risk. Picks a random item per strip on
  page load and rotates every 30s with a short crossfade; see the `<script>` block at the bottom of
  `index.html`'s pillars section.
- **Blog is the last unbuilt page in the primary nav/sitemap** **Resolved 2026-09-06**: blog shipped
  (`blog/index.html` + `_layouts/post.html` + `_posts/`, see "Blog built" in `CLAUDE.md`) and Home's
  "Nothing here yet" empty-state is already conditional on `site.posts.size > 0` — real posts show a
  latest-3 teaser automatically, no further work needed. This bullet was just never marked done.
- **Home has no direct link to Contact** **Resolved 2026-09-07**: added a closing `.about-cta`-style
  band ("Want to know who's actually behind all this, or just say hi?") after the blog section,
  linking to `/contact/` — same component already used to close out the About page.

## From the full-site UX review (2026-09-22)

- **Meta-description pass** **Resolved 2026-09-22**: all 7 stories and the 3 long posts got a
  ≤155-character `description:`, with cards unchanged. The Home description is still open, see
  `wishlist.md`. Original note: story `description:` fields ran 250–420 characters and post excerpts
  120–320 (Google shows about 155). Add a short `description:` to each story and post and keep
  `blurb`/`excerpt` as-is for the cards.

## Community section (wished 2026-10-26)

**Resolved 2026-10-29**: built the fuller version. `/community/` (`community/index.html`) shows a
contributors strip, one section per series (Cinema Ranked first), and a "More from the community" section
for Community posts outside any series, then a "Want to join the conversation?" Discord CTA. The page is
driven by `_data/community.yml`: add a contributor or series there, tag the posts, and they appear.
Decisions made:
- **Organized by series, not by contributor.** With one contributor, a per-contributor layout would be a
  page of one. Series scale to many authors, and the contributors strip covers who's writing. A contributor
  with several series just shows up in the strip once.
- **Nav:** footer-only (`secondary` in `_data/navigation.yml`) since the header already has six items,
  plus a "From the community" button next to "Read the full blog" on Home.
- **Community posts stay** in the main `/blog/` feed and Home's "Latest from the studio" strip.
- The page reuses `post-card.html`, `.crew-avatar`, and the Contact page's header photo; the only new CSS
  is the `.contributor-card`/`.series-heading` block at the end of `main.css`.
