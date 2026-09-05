---
page: Home
source: Google-Page-Oriignal/PUBLISHED/Home.html
nav_label: Home
---

# Hero

**Get Dangerous**
Writing. Gaming. Badassery.

Old background: skyline/aether-glow image (`Home/c3a25d3f9882529edc6aa64fa56800b1.jpg`) — superseded in the rebuild, see below.

**Decided (rebuild):** hero background is now `Shutterstock/March 2023/shutterstock_2216124455.jpg` (trenchcoat figure overlooking a rainy neon skyline) — confirmed-licensed art, picked for its near-exact match to the tech-blue/midnight-navy brand palette and its open sky for headline text. See [brand/asset-licensing.md](../brand/asset-licensing.md) for why the old Home background images aren't being carried forward.

# Shadows RPG callout

Full-width section, background image `Home/b326bdef7429826fd75bb6b0adacd441.jpg` (cyberpunk skyline), with the Shadows triangle/skull logo (`Home/8c5633dc59c092ab5f9a8d34cdd68ad8.jpg` or `Home/06db45c22077f02538f397f775c55839.jpg` — logo variants).

> ### Shadows RPG
> The homebrew TTRPG that has been in development for years is finally here. Magic and technology clash in N.Y.T.E City in the year 2074. The brainchild of d33Kode, learn how you can use the Synergy System to combat the many obstacles you'll encounter.

Links to: https://www.shadowsrpg.com/

# Three-card section (Writing / YouTube / Podcasts)

### Writing
As an avid writer, I want to share my imagination with the world! Check out my written works here.
→ links to `Writing.html`

### YouTube
Check out some quick links to our YouTube content! You'll see Playlists to all of our best stuff.
If you want to go directly to YouTube, [Click here](https://www.youtube.com/@d33kode)
→ links to `YouTube.html`

### Podcasts
We have a lot to say, so we recorded it! Check out the Get Dangerous Podcasts here!
→ links to `Podcasts.html`

# Embedded region

An `<iframe>` region on the home page embeds "Get Dangerous Updates" — this is the same external Blogspot feed used on the Blog page (see [blog.md](blog.md)). Since blogging is moving to native Jekyll posts, this should become a "latest posts" feed pulled from the new Jekyll blog's own collection, not an iframe.

# Footer (shared across all pages)

© {current year} Get Dangerous. All Rights Reserved.
Any resemblance to reality is purely coincidence, thought we are kind of living in a corporation-fueled capitalist nightmare dystopia, right?

Note: the copyright year is generated client-side by Google Sites' JS (shows "2026" — the current year — not a hardcoded value). Replicate as a dynamic `new Date().getFullYear()` or similar in the rebuild.

Social icons (all pages, footer): Patreon, Twitch, Twitter, YouTube, Discord — see [links catalog](../CLAUDE.md#external-links--integrations) for URLs.

# Nav (shared across all pages) — old site, for reference only

Logo (`41398ea18f7abf7fff6127f13a28d6d2.jpg`, bear/panda mark) + "Get Dangerous" wordmark, linking to `Home.html`.

Old primary nav: Home · Writing · YouTube · Podcasts · Discord

Note: **Blog** and **Contact** pages existed as files but weren't linked from the nav — they were orphaned/unlinked pages on the live site.

**This has been superseded** — see [CLAUDE.md](../CLAUDE.md) "Decided → Nav structure" for the new nav (`Home · Writing · Blog · YouTube · Podcasts` + a "Play Shadows RPG →" CTA, social links moved to an icon row, Contact kept as its own page).
