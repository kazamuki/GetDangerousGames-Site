---
page: Blog
source: Google-Page-Oriignal/PUBLISHED/Blog.html
nav_label: (not in primary nav — orphaned page)
---

# Content

This page has no content of its own — it's a bare shell (nav + footer) with a single full-width `<iframe>` embedding an external Blogspot blog:

**https://getdangerousupdates.blogspot.com/**

Title shown inside the embed: "Get Dangerous Updates — Updates from the Get Dangerous Crew about new content or projects!"

Sample post seen live: "Content Creator Showcase (With 20MinuteGamer!)" by Melf, dated September 17, 2023 — so the Blogspot blog has content newer than the static `updates.md` changelog (which stops at 2023-03-02). **The Blogspot blog is the more current/authoritative source for "what's new" content**, not the Updates page.

Not linked from primary nav on the live site — reachable only by direct URL.

## Decided

Blogging moves to native Jekyll posts on the new GitHub Pages site — the Blogspot embed is being retired, not kept and not proxied.

**Built (2026-09-05):** `/blog/` index + `_layouts/post.html`, styled with the existing `page-header`/card component system (no new design pass needed). Nav's `Blog` link now points at it. Home's blog section now shows the 3 most recent posts (falls back to the original "nothing here yet" empty state automatically via `{% if site.posts.size > 0 %}` if `_posts/` is ever emptied).

**Scope decided:** one blog lives on this site only, tagged by topic (Shadows / YouTube / Podcast / Studio Update / Community). The Shadows RPG site is a separate product on its own domain and doesn't get its own native blog — if it wants a presence, link out to specific posts here rather than syncing content across two repos.

**Backfill done (2026-09-05):** Ken exported the full Blogspot history via Google Takeout (`Takeout/Blogger/Blogs/Get Dangerous Updates/feed.atom`, 28 posts + comments, March–September 2023), which resolved the "someone needs to export it" blocker below. Rather than importing all 28 (most are same-day "new video is up!" cross-posts the YouTube page already covers), 5 were curated as historical `_posts/` entries for the content still worth keeping — Shadows RPG dev/lore progress reports, a podcast-series announcement, a reflective "why the cadence is changing" post, and the 20MinuteGamer creator collab. Original post text/voice was kept as-is (these are dated historical artifacts, not evergreen marketing copy) — only markup cruft (Blogger's inline `font-family:arial` spans, empty `<p>` tags) was cleaned up. The remaining 23 posts (mostly daily video-upload cross-posts) were left out; the full export stays on disk at the Takeout path above if a deeper backfill is wanted later.

**Images self-hosted (2026-09-06):** the 2 posts that had inline images were pulled off Blogger's CDN into `assets/images/blog/`. One of them — the Quick Start Guide teaser's YouTube thumbnail — turned out to carry a visible **"ArturSadlos.co" watermark**, the same third-party concept-artist signature [asset-licensing.md](../brand/asset-licensing.md) had already flagged and ruled out for the old Home background. That image was dropped from the post entirely (replaced with a plain link to the video) rather than self-hosted — don't re-add it. The Archetype Mini-Series post's image (an actual Shadows CRB page illustration, no third-party signature) was self-hosted normally as `archetype-mini-series.jpg`.

**Tag filtering (2026-09-06):** `/blog/` has client-side tag-pill filtering (vanilla JS, no build step) — worth it even at 5 posts since it's cheap and scales as the backlog grows.
