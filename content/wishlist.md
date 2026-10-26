---
purpose: Running list of ideas, gaps, and decisions spotted while porting the old site's content into
  real Jekyll pages. Not scoped work — a backlog to review with Ken once the porting pass is done.
---

## From building YouTube / Podcasts / Contact / Writing (2026-09-05)

- ~~YouTube playlist lineup is stale~~ **Resolved 2026-09-06**: pulled the live Playlists tab
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
- ~~YouTube also has a "Podcasts" tab now~~ **Resolved 2026-09-06**: added a "Watch the full run on
  YouTube" link on the Fiction Factory show (`podcasts/index.html`) pointing at the real 14-episode
  YouTube playlist (`list=PLWXG_a-sQ0aEaScUiA8bYKgjdBnPdWbF2`) alongside the existing 4-episode Spotify
  embeds — kept as a companion link rather than embedding all 14 videos inline, since the YouTube run
  goes deep on Shadows rules specifically while the Spotify episodes are the broader-topic version.
- ~~Podcast episode counts are stale too~~ **Resolved 2026-09-06**: pulled the real Spotify show
  directly. Myriad Circle is genuinely complete at 3 episodes (no change needed) — Fiction Factory
  had grown to 14 episodes on Spotify (matching the YouTube run), only 4 of which were embedded on
  the site. Added the missing 10 (episodes 5-14) to `podcasts/index.html` and `content/podcasts.md`.
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
- ~~Home's pillar cards are static teasers~~ **Resolved 2026-09-07**: added a small rotating
  "spotlight" strip below each pillar card — Writing's cycles through the 7 live stories (real
  cover art), YouTube's cycles through 10 playlists (real thumbnails pulled via YouTube's oEmbed
  endpoint), Podcasts' cycles through 8 episodes (real art via Spotify's oEmbed endpoint). All
  thumbnail URLs were resolved once and hardcoded into `index.html` rather than fetched live in the
  browser — real art with no runtime API dependency or CORS risk. Picks a random item per strip on
  page load and rotates every 30s with a short crossfade; see the `<script>` block at the bottom of
  `index.html`'s pillars section.
- ~~Blog is the last unbuilt page in the primary nav/sitemap~~ **Resolved 2026-09-06**: blog shipped
  (`blog/index.html` + `_layouts/post.html` + `_posts/`, see "Blog built" in `CLAUDE.md`) and Home's
  "Nothing here yet" empty-state is already conditional on `site.posts.size > 0` — real posts show a
  latest-3 teaser automatically, no further work needed. This bullet was just never marked done.
- ~~Home has no direct link to Contact~~ **Resolved 2026-09-07**: added a closing `.about-cta`-style
  band ("Want to know who's actually behind all this, or just say hi?") after the blog section,
  linking to `/contact/` — same component already used to close out the About page.

## From the full-site UX review (2026-09-22)

Ideas from an open-ended review of the whole site, after the fixes that shipped with it (see
"Full UX/accessibility review pass" in `CLAUDE.md`). Grouped by theme and roughly ordered by payoff
within each group. **[decision]** = needs a call from Ken/the crew first; **[quick]** = under an
hour; **[bigger]** = a real project.

### Keep readers moving (every story/post page currently ends in a dead end)
- **"Read next" at the end of stories and posts** [quick]: stories end with only "Back to
  Writing". Show 2–3 other stories (same universe first, then by `order`), and the next and previous
  posts on blog pages. It's the cheapest way to turn one read into two.
- **Series links for multi-part posts** [quick, Ken revisiting]: a `series:` front-matter key (e.g.
  `social-encounters`) plus a "Part 1 · 2 · 3" strip at the top and bottom of each part. Social
  Encounters is the first real case.
- **Chapter navigation for long stories** [quick–bigger]: LRRH is a 65-minute read. Add a chapter
  table of contents built from the `## Chapter` headings, a thin reading-progress bar, and
  "pick up where you left off" (browser storage only, per-device, no accounts needed).
- **Tie stories to Shadows RPG** [quick]: stories set in NYTE City could carry a small "Set in the
  world of Shadows RPG →" link to shadowsrpg.com. The fiction is a great on-ramp to the game.

### Grow the audience
- **Email updates** [decision]: Discord is currently the only "hear about new stuff" channel, and
  plenty of readers will never join a Discord. A free Buttondown or Substack-style list, fed from the
  new `/feed.xml`, would reach them. Also decide who owns sending it.
- **Comments on stories/posts via giscus** [decision]: already listed as an open option in
  `content/writing.md`. It runs on GitHub Discussions, so it's free with no backend, but readers need
  a GitHub account to comment, and someone has to moderate.
- **Press / creator kit page** [quick]: logos (bear mark, Shadows mark, banner), crew bios, and brand
  colors in one place. Useful for collabs like the 20MinuteGamer showcase, and the assets already
  exist.
- **Crew social links on About** [quick]: each crew card could link that person's own channels
  (d33Kode's Twitch/YouTube, etc.).

### Copy & SEO
- ~~Meta-description pass~~ **Resolved 2026-09-22**: all 7 stories and the 3 long posts got a ≤155-character `description:`, with cards unchanged. Still open from the original note: the Home description. Original note: [quick]: story `description:` fields run 250–420 characters and post
  excerpts 120–320 (Google shows about 155). Add a short `description:` to each story and post and
  keep `blurb`/`excerpt` as-is for the cards. The Home description ("Writing. Gaming. Badassery.")
  should also say what the site actually is.
- **Home copy tune-up** [quick]: the hero eyebrow "GET DANGEROUS GAMES" just repeats the headline
  under it, so it could become a one-line pitch instead. The Shadows band has a dangling modifier
  ("The brainchild of d33Kode, learn how you can use…") and "finally here" wording that may be
  dated depending on where the book actually is.
- **Story structured data** [quick]: stories are marked up for search engines as blog posts. They
  could be marked up as short stories with the real author, which search engines understand better.

### Performance
- **Click-to-play Spotify embeds on Podcasts** [quick–bigger]: the page loads 17 full Spotify
  players, and each one pulls in its own JavaScript. Show the episode art and title, then swap in
  the real player on click. That's a big load-time win, especially on phones.
- **Trim font weights** [quick]: the Google Fonts request pulls 5 Inter weights and 3 Roboto Mono
  weights. Audit which ones the CSS actually uses and drop the rest.
- **Self-host the spotlight/playlist thumbnails** [quick]: the YouTube and Spotify image URLs are
  hotlinked. They're stable today, but if one changes the card just goes blank. Copies in
  `assets/images/` would remove that risk.

### Keep it healthy (maintenance tooling)
- **Automatic link checking on PRs** [quick]: a GitHub Action running `html-proofer` against the
  built site, including external links. A dead YouTube playlist (Vermintide) already slipped through
  once. It could also run a weekly check for links that rot while nobody's touching the code.
- **Lighthouse check on PRs** [bigger]: catches regressions in performance, accessibility, and SEO
  automatically instead of relying on review passes like this one.

### Already tracked elsewhere (listed so this stays the one place to look)
- Cerulean Nights font license (`CLAUDE.md` → Outstanding brand items).
- "The Last Encounter" story text (`CLAUDE.md` → Only remaining content gap).
- Google Search Console sitemap submission; `/feed.xml` is new and worth submitting there too.

## Shared content platform (2026-10-26)

Not scoped work, a direction Ken and Claude talked through. Today `shadowsrpg.com/news` pulls from
getdangerous.net (it links to `/blog/?tag=Shadows`). The goal is for neither site to be upstream of
the other: both read from one shared source. Do these in order; each step stands on its own.

**Triggers to start:** the repo passes ~300–500MB, we want to host video or audio, or we need
something Pages can't do (comments/likes backend, email signup).

1. **Shared content repo** [bigger]: a small repo (e.g. `gd-content`) holding the Markdown posts and a
   media manifest. Both sites pull it in at build time (git submodule or an Actions checkout step) and
   render posts in their own theme. Notes:
   - GitHub Pages' built-in Jekyll build won't fetch a second repo, so both sites move to a small
     GitHub Actions workflow. That also retires the pinned `github-pages` gem and the Ruby shims in
     the Gemfile (see `CLAUDE.md` → Local dev environment).
   - Each post needs one **canonical home**. Where a post shows on both domains, set `canonical_url`
     on the non-canonical copy, or search engines treat them as duplicates. Rough default: studio
     posts canonicalise to getdangerous.net, Shadows-specific ones to shadowsrpg.com. Ken's call.
   - Replaces the `?tag=Shadows` deep link from shadowsrpg.com with native rendering (keep the
     deep-link behavior working until then, see `CLAUDE.md` → Working notes).
2. **Media on Cloudflare R2** [bigger]: posters, share cards, story art, and any future video/audio
   served from a subdomain like `media.getdangerous.net`, referenced by the content repo's manifest so
   both sites share one copy. R2 has no egress fees and a generous free tier. A small script can push
   new images on merge. Pages keeps serving HTML/CSS/JS.
3. **Comments and likes** [bigger]: decide canonical homes (step 1) first, so comments key off a
   post's canonical identity instead of a domain, otherwise the same post gets two threads.
   - Comments: giscus (GitHub Discussions) is the quick, backend-free option. Catch: commenters need
     a GitHub account, which may not suit a gaming community.
   - Likes, view counts, newsletter signup: a Cloudflare Worker with D1 or KV. Extends the older
     "Hosting features" note in `content/writing.md`.

**Optional, separate from the above:** Cloudflare Pages as a replacement for GitHub Pages (per-PR
preview URLs, headers/redirects, Workers). The Jekyll build is the same, but the `github-pages` gem pin
would need a small tweak. Not needed for any of the three steps.

## Spoiler tags (2026-10-26)

Not yet, build when a post actually needs it. Kris asked about it for Cinema Ranked reviews. Click-to-reveal
text, blocked out by default. Roughly an hour including testing; touches `main.css`, one small JS file,
`_layouts/post.html` (to load the script), and a how-to note in `CLAUDE.md`.

- **Inline spoilers** [quick]: a `.spoiler` span rendered as a solid bar (text color matches the bar so it
  can't be read or copy-selected by accident), toggled by a `.revealed` class. Make it a real `<button>`
  (or `role="button"` + `tabindex="0"` + Enter/Space) with `aria-expanded` so keyboard users can reveal it.
  Give authors an include or Kramdown attribute so nobody hand-writes HTML.
- **Block spoilers** [quick]: `<details><summary>Spoilers</summary>…</details>` for whole paragraphs. Works
  with no JavaScript at all.
- **Decisions to make when building:**
  - With JS off, inline spoilers would stay blocked forever; only hide text when a `js` class is on `<html>`
    so those readers just see the text.
  - `/feed.xml` will show spoiler text plainly (fine for a feed; optionally wrap it in "(spoiler)" brackets).
  - Hidden text is still in the HTML, so search can index it. Keep `description:` and `excerpt:`
    spoiler-free by convention.
  - The bar has to work in both light and dark mode, and revealed text should print.
  - The "Light spoilers" callout at the top of reviews can stay as a general warning.
- Build it on a test post, not one of Kris's.

## Community section (2026-10-26)

Not yet, build when there's a second contributor or the Community tag outgrows the blog. Community posts
(Kris's Cinema Ranked reviews so far) are tagged `Community` and live in the main blog feed, so a reader who
only wants community content has to use the tag filter. Goal: a dedicated place to find community work
without filtering through the studio's Shadows posts.

- **Cheapest version** [quick]: a `/community/` page that is the blog index pre-filtered to `Community`
  (the `?tag=` deep link already works, e.g. `/blog/?tag=Community`). Add it to `_data/navigation.yml`
  (header or footer-only) and a "From the community" link on Home. No new layout needed.
- **Fuller version**: a real `/community/` page using `_includes/post-card.html`, filtered with
  `site.tags.Community` (or `where_exp`), with series sub-sections (Cinema Ranked first) and a short intro
  about how to contribute (Discord link, what we accept).
- **Decisions to make when building:**
  - Nav placement: primary header, or footer-only like Contact/Changelog? The header already has six items.
  - Whether community posts should stay in the main `/blog/` feed and Home's "Latest from the studio" strip
    (current call: yes, the community's work matters more than a pure Shadows funnel), or move out of both.
  - Contributor identity: an author index (avatar, short bio, their posts) pairs naturally with this; the
    byline avatar mechanism in `_includes/author-avatar.html` is the starting point.
  - Feed: whether `/feed.xml` should get a community-only feed too.
  - Interacts with the shared content platform entry above if comments/likes ever get built.
