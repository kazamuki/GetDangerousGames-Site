---
purpose: Running list of ideas, gaps, and decisions that are still open. Not scoped work — a backlog to
  review with Ken. Wishes that have been granted move to wishes-granted.md so this stays short.
---

Granted wishes live in [wishes-granted.md](wishes-granted.md). When something here ships, cut it from this
file and paste it there with a **Resolved <date>** line.

## Still open from building YouTube / Podcasts (2026-09-05)

- **YouTube channel banner art** (`GD Assets/Updated YT Banner.png` — the neon pixel-art bear-and-flames
  banner currently live on the real YouTube channel) is fun but stylistically inconsistent with the
  site's moody-painted Shutterstock art direction. Didn't use it as the page hero for that reason —
  flagging in case Ken wants a smaller "as seen on YouTube" callout using it somewhere instead.
- **Podcast cover art exists** (`GD Assets/Pod Thumbs/Main Pod art.png`, `GD Assets/YT Thumbs/Myriad_GD_Banner.png`)
  but again in a different illustration style than the site's Shutterstock-driven look. Skipped for
  now in favor of Spotify's own embed artwork; revisit if Ken wants the podcasts page to feel more
  "branded" than "just embeds."

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
- **Home meta description** [quick]: the Home description ("Writing. Gaming. Badassery.") should say what
  the site actually is. (The story and post descriptions are done, see wishes-granted.md.)
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

## Community page follow-ups (2026-10-29)

The `/community/` page shipped (see wishes-granted.md). What's still open:

- **Promote Community to the header nav** [decision]: it's footer-only for now because the header already
  has six items. Revisit once there's a second contributor or a second series.
- **Per-contributor pages** [bigger]: today contributors are cards on `/community/`. A full author page
  (bio, all their posts) is worth building once someone has more than one series or a longer bio.
- **Community-only RSS feed** [quick]: `/feed.xml` covers everything. A `/community/feed.xml` would let
  readers follow just the community's work.
- Interacts with the shared content platform entry above if comments/likes ever get built.
