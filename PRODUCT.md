# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: tabletop RPG players who are new to Get Dangerous.** They usually arrive from outside the site: an actual-play video, a blog post, a Reddit thread, a TikTok or Instagram clip. They want to know who the studio is, whether Shadows RPG is worth their table's time, and where the community hangs out. Most of them have never heard of the studio before this visit.

**Secondary: returning community members** (Discord, Patreon, YouTube regulars) checking for new stories, posts, videos, and episodes. They matter, but the site is built first for the newcomer.

## Product Purpose

getdangerous.net is the home base for Get Dangerous Games, a small TTRPG and creative studio (Deighton "d33Kode", Scott "Melf", Ken "Kaza"). It brings the studio's output into one place: original fiction, a blog, actual-play and gaming videos, podcasts, and the crew behind them. It also acts as the front door to Shadows RPG, the studio's flagship game, which lives on its own domain (shadowsrpg.com).

A visit counts as a success when a newcomer takes one of three next steps, and all three matter:

1. **Clicks through to Shadows RPG** (shadowsrpg.com) to learn about or buy the game.
2. **Joins the Discord**, which is the studio's community hub and official contact channel.
3. **Backs the studio on Patreon.**

Reading the stories, watching actual play, and listening to the podcasts are how newcomers come to trust the studio before taking one of those steps.

## Positioning

A real, working creative studio with real output. Its flagship is Shadows RPG: an original game set in 2099 NYTE City, built by a GM with 25+ years at the table. Newcomers can watch it being played across four live actual-play campaigns (Shadows 2.0, World's Apart, The Old Regime, 13th Floor) before buying anything. The site shows the people and the work behind the game, not just the game.

## Operating Context

- A static Jekyll site on GitHub Pages at getdangerous.net. `main` is branch-protected, so every change lands through a PR.
- Content lives as Jekyll collections and data files: `_stories/` (serialized fiction, one page per story), `_posts/` (the blog), and `_data/` (`playlists.yml`, `navigation.yml`, `changelog.yml`).
- Video content lives on YouTube (@d33kode) and podcasts on Spotify (Myriad Circle, Fiction Factory). The site embeds or links out to both.
- Visitors often land deep in the site (a story, a post) from social or search, not on Home.
- Maintained by a small volunteer crew. Deighton and Ken both push to the repo, so simple, data-driven content updates matter.

## Capabilities and Constraints

- **No backend.** It's a static site, so comments, likes, and view counters would need a third-party service (e.g. giscus). That's undecided.
- **Built with GitHub Pages' pinned `github-pages` gem** (Jekyll 3.9). Safe mode means no custom `_plugins/`.
- **Theme:** dark mode by default, with an opt-in light mode. The theme token and toggle system (`assets/css/theme.css`, `theme-init.js`, `theme-toggle.js`) is shared with the sibling Shadows RPG and Character Sheet repos.
- **Primary nav:** Home · Writing · Blog · YouTube · Podcasts · About, plus a "Play Shadows RPG" CTA. Contact and Changelog appear only in the footer nav. The social icon row lives only in the footer.
- **Contact is through Discord only.** There is no contact form.
- **Terminology:** "Get Dangerous Games" is the studio. "d33Kode" is Deighton's on-camera persona. Shadows RPG is a separate product with its own site and Core Rulebook.
- **Open:** "The Last Encounter" is unhosted until its source text turns up. Don't recreate it from the old teaser.

## Brand Commitments

- **Brand guide:** `brand/theme.md` sets the palette, type, and voice rules, and the site follows it.
- **Voice:** site copy uses the studio-level creator voice: gritty but hopeful, confident but not arrogant, imaginative and bold, player-first, and empathetic. It does not use the in-world Shadows CRB voice or the old casual first-person d33Kode voice. The stories keep their own authors' prose untouched.
- **Owned marks:** the bear mascot (small scale), the full circular lockup (large and social use only), the Shadows skull/dice logo, and the YouTube channel banner.
- **Display font:** Cerulean Nights once its license is bought. Audiowide is the stand-in until then.

## Evidence on Hand

- Seven complete or ongoing stories with AI-generated cover art (`_stories/`, `assets/images/stories/`).
- A native blog with a curated historical backfill plus new Patreon-linked posts (`_posts/`).
- 35 YouTube playlists, including four live Shadows actual-play campaigns (`_data/playlists.yml`).
- Two podcast shows with 17 embedded Spotify episodes.
- Three real crew bios with avatars (`about/`).
- Licensed art: the Shutterstock library (`brand/shutterstock-catalog.md`, `brand/asset-licensing.md`).
- **Not available, so never fabricate:** testimonials, reviews, press quotes, sales or player counts, and follower numbers. Dean Spencer's commissioned art is licensed for the Core Rulebook only. Don't reuse old Google Sites art with third-party watermarks (e.g. the ArturSadlos.co signature).

## Product Principles

1. **The front door to Shadows.** Every page should leave a newcomer one obvious step from shadowsrpg.com, the Discord, or Patreon, without turning the site into a sales page.
2. **Show the work, not claims.** Real stories, real actual play, and real people build trust. Let the output make the case.
3. **Any page can be the first page.** Visitors land deep from social and search, so every story and post has to explain who the studio is and where to go next.
4. **Stay easy to maintain.** Content updates should mean editing data or Markdown, not templates, so a small crew can keep the site current.

## Accessibility & Inclusion

WCAG 2.2 AA is the required floor for both dark and light themes. That includes 4.5:1 text contrast (the brand colors' contrast limits are documented in CLAUDE.md), visible focus, keyboard-operable navigation, titled embeds, and `prefers-reduced-motion` support.
