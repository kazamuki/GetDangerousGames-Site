# Shadows / Get Dangerous Games — Site Theme Reference

Condensed from `GUIDE_Brand_Guidelines.md` for implementation use. This file is
the source of truth for color, type, and tone when building or modifying
Shadowsrpg.com, Getdangerous.net, or the Shadows Character Sheet UI. It does
not replace the full brand guide — for cover art direction, illustrator
styles, and print-layout rationale, see that document instead.

## Color Palette

CSS custom properties, ready to drop into a stylesheet root:

```css
:root {
  /* Primary — titles, major headings, page framing */
  --color-aether-pulse: #712B8C;   /* saturated violet, unstable magic */
  --color-deep-circuit: #203F7B;   /* tech-blue, machine architecture */
  --color-neutral-zone: #E7E7E7;   /* off-white, sun-bleached bone */

  /* Secondary — secondary headings, sidebars, thematic panels */
  --color-neon-veil: #BC489A;        /* sharp magenta, nightclub haze */
  --color-midnight-underpass: #0D1731; /* near-black navy, best dark ground */
  --color-signal-gold: #F2C94C;      /* warm gold, aether-kissed */

  /* Accents — rule callouts, icons, UI-like elements. Use sparingly. */
  --color-static-cyan: #1BBBC4;   /* HUD pings, data spikes */
  --color-ghostly-green: #71C388; /* bio-monitors, field tech */

  /* Body text — always one of these two, never a tinted variant */
  --color-text-dark: #111111; /* "Gutter Black" */
  --color-text-light: #FFFFFF;
}
```

**Balance target across a page:** 60% neutral/background, 25% primary,
10% secondary, 5% accent. Accents should never visually outweigh primary
colors — if cyan or green start to dominate a layout, pull back.

**Reliable dark-background pairing:** Midnight Underpass (`#0D1731`) behind
Static Cyan or Ghostly Green accents is confirmed to work well and is a good
default for dark-mode sections, code/terminal-styled panels, or hero banners.

## Typography

| Typeface | Role | Notes |
|---|---|---|
| **Cerulean Nights** (by Chequered Ink) | Display — titles, chapter/section headings, major brand moments | Mixed case only, never all-caps (the capital E's sharp corners clash with the font's curves). **Commercial license required before use — free-for-personal-use only on DaFont; see open items below.** |
| **Inter** (Light, Regular, Semibold, Bold, Italic) | Body — the workhorse for headings and body copy | Freely available via Google Fonts. Default choice for anything long-form or read at length. |
| **Roboto Mono** | Technical/UI voice — stat blocks, tables, system-output styling, code-like or terminal-flavored UI elements | Freely available via Google Fonts. Looks best on Gutter Black or White backgrounds, or with an accent color. Use for anything that should feel like a HUD readout or diagnostic panel. |

Suggested CSS stack as a starting point:
```css
--font-display: 'Cerulean Nights', 'Inter', sans-serif; /* fallback until licensed */
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'Roboto Mono', ui-monospace, monospace;
```

### Cerulean Nights: sourcing and embedding

Font: [Cerulean Nights by Chequered Ink](https://www.dafont.com/cerulean-nights.font)
(`Cerulean Nights.otf`). DaFont lists it as free for **personal use only** —
commercial use requires a paid license from Chequered Ink
(chequered.ink/font-license, tiers from $30 for small businesses). This
project is commercial (retail CRB, Patreon), so a license must be purchased
before the font ships on either live site. It is not yet confirmed whether
the standard tier covers self-hosted webfont use or requires the
"Install on a Server" language in the top tier — confirm with Chequered Ink
directly before buying.

Once licensed:
1. Self-host the font file in the repo (e.g. `/assets/fonts/`) — do not link
   to the DaFont download URL from a live site.
2. Convert the owned `.otf` to `.woff2` for web performance.
3. Reference via `@font-face`:

```css
@font-face {
  font-family: 'Cerulean Nights';
  src: url('/assets/fonts/CeruleanNights.woff2') format('woff2'),
       url('/assets/fonts/CeruleanNights.otf') format('opentype');
  font-display: swap;
}
```

## Voice, for copy (not in-world text)

This governs *site and blog copy* — Get Dangerous Games speaking as
creators. It is intentionally different from `GUIDE_Shadows_Voice.md`, which
governs in-world CRB text (NYTE City speaking as itself). A blog post or
site page should sound like the studio, not like the setting.

Personality traits to write toward:
- **Gritty but hopeful** — real stakes, but never grim for its own sake
- **Confident expert, never arrogant** — share knowledge, don't lecture
- **Imaginative and bold** — willing to describe ambitious ideas plainly
- **Dangerous but measured** — embrace tension purposefully, don't glorify it
- **Grounded and authentic** — plausible over spectacle
- **Player-first creator** — write toward the reader's experience, not just the studio's milestones
- **Empathetic storyteller** — emotionally intelligent, clear, respectful

## Open items for Claude Code / Ken to resolve

- [ ] Purchase a commercial license for Cerulean Nights from Chequered Ink before it ships on any live site; confirm with them whether self-hosted webfont use needs a specific tier
- [ ] Decide whether the Character Sheet app's existing UI should be retrofitted to these variables, or if this is net-new for the sites only
