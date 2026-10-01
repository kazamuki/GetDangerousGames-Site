---
name: Get Dangerous Games
description: Studio home for Get Dangerous Games and front door to Shadows RPG. Neon-lit, dark-first, built around cinematic photo bands.
colors:
  midnight-underpass: "#0D1731"
  card-midnight-circuit: "#16294F"
  deep-circuit: "#203F7B"
  aether-pulse: "#712B8C"
  neon-veil: "#BC489A"
  signal-gold: "#F2C94C"
  static-cyan: "#1BBBC4"
  ghostly-green: "#71C388"
  neutral-zone: "#E7E7E7"
  text-light: "#FFFFFF"
  gutter-black: "#111111"
  daylight-paper: "#F5F4F2"
typography:
  display:
    fontFamily: "'Cerulean Nights', 'Audiowide', sans-serif"
    fontSize: "88px"
    fontWeight: 800
    lineHeight: 0.98
  headline:
    fontFamily: "'Cerulean Nights', 'Audiowide', sans-serif"
    fontSize: "54px"
    fontWeight: 800
    lineHeight: 1.05
  section:
    fontFamily: "'Cerulean Nights', 'Audiowide', sans-serif"
    fontSize: "30px"
    fontWeight: 700
  title:
    fontFamily: "'Cerulean Nights', 'Audiowide', sans-serif"
    fontSize: "22px"
    fontWeight: 600
  body:
    fontFamily: "'Inter', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  body-card:
    fontFamily: "'Inter', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Roboto Mono', monospace"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  focus: "4px"
  media: "12px"
  card: "14px"
  panel: "16px"
  tile: "20px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 6vw, 48px)"
  card-gap: "22px"
  grid-gap: "28px"
  section-heading-gap: "40px"
  section: "84px"
  band: "96px"
  hero: "130px"
components:
  button-cta:
    backgroundColor: "{colors.aether-pulse}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-gold:
    backgroundColor: "{colors.signal-gold}"
    textColor: "{colors.gutter-black}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.signal-gold}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  card:
    backgroundColor: "{colors.card-midnight-circuit}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.card}"
    padding: "34px 30px"
  tag-pill:
    textColor: "{colors.neutral-zone}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  tag-pill-active:
    backgroundColor: "{colors.signal-gold}"
    textColor: "{colors.gutter-black}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  contact-channel:
    backgroundColor: "{colors.card-midnight-circuit}"
    textColor: "{colors.neutral-zone}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  social-badge:
    backgroundColor: "transparent"
    rounded: "{rounded.pill}"
    size: "36px"
---

# Design System: Get Dangerous Games

## Overview

**Creative North Star: "The Neon Underpass"**

The site is a rainy city after dark, seen from street level. The ground is Midnight Underpass navy (#0D1731), and light comes only from signs, portals, and screens: violet haze pooling at the top of every photo band, a cyan ping off to one side, gold where you're meant to act. Depth comes from glows and scrims rather than shadows cast by a sun. It's the NYTE City of Shadows RPG, but pulled back one step into the studio that makes it. The setting sets the mood, and the real work stays readable.

The page structure is **cinematic bands, quiet rooms**. Full-bleed photo bands (hero, page headers, the Shadows RPG feature band, story headers) are the dramatic moments. They're always dark, always scrimmed, and white type sits over licensed art. Between them sit calm, legible rooms: card grids, prose columns, and lists on the plain page background. There the palette steps back to navy cards, near-white copy, and one lit signal color per element. Density is moderate and generous. Sections breathe at 84–130px of vertical padding, and nothing is crammed.

Dark is the default and the identity. Light mode is an opt-in courtesy that reassigns the same eight brand colors (it never adds new hues). The photo bands stay dark in both themes.

The site must never drift toward a generic SaaS landing page (light, flat, gradient blobs, stock illustration, feature grids) or back toward the old Google Sites build it replaced.

**Key Characteristics:**
- Dark navy ground. Light is emitted by glows and gradients, not cast as shadows.
- Full-bleed photo bands with violet/cyan radial glows over a navy scrim, always dark.
- Calm navy cards with Deep Circuit borders that light cyan on hover and lift 3–4px.
- Every interactive shape is a pill. Every content surface is a softly rounded card (14px).
- Three voices of type: a display face for names, Inter for reading, Roboto Mono for HUD labels.
- Gold means "act here", cyan means "link or data", violet/magenta means "the Shadows world".

## Colors

The palette is a night-city palette. It's mostly navy and near-white, with saturated signals used sparingly, and each hue has a fixed job.

### Primary
- **Aether Pulse** (violet): the magic of the setting. It's the top-of-band radial glow on every hero and page header, the first stop of the Play Shadows RPG gradient, the play-button fill on hovered media cards, and the light-mode stand-in for gold and magenta text.
- **Deep Circuit** (tech-blue): the machine layer. At 45% alpha it's the resting border of every card, the base of the Shadows band's diagonal scrim and the placeholder art gradient, and the light-mode stand-in for all cyan and green text.
- **Neutral Zone** (bone white): long-form copy tone and quiet chrome text (the story back-link, the contact channel labels).

### Secondary
- **Neon Veil** (magenta): the second stop of the Shadows CTA gradient and its pink glow shadow, the logo rim glow in the Shadows band, and magenta eyebrows.
- **Signal Gold** (warm gold): **the action color.** Primary buttons, active tag pills, the current-page nav underline, focus rings, the skip link, social hover, changelog dates, and every "this is Shadows RPG" signal.

### Tertiary
- **Static Cyan**: links, the nav hover underline, card-border hover tint, and HUD eyebrows on photo bands.
- **Ghostly Green**: occasional eyebrow and role accent. It's the rarest color on the site.

### Neutral
- **Midnight Underpass**: the page background in dark mode, the scrim base of every photo band, and the fixed floor of story headers.
- **Card Midnight Circuit** (#16294F): a Deep Circuit and Midnight blend. It's the one shared surface for every card type (pillar, media, story, post, episode, contact channel, Patreon CTA).
- **Text Light** / **Gutter Black**: body text is always one of these two, used at stepped opacities (100 / 80 / 55 / 28%) for primary, secondary, tertiary, and faint text. It's never tinted.
- **Daylight Paper** (#F5F4F2): the light-mode page background. White cards sit on it.

### Named Rules
**The Contrast Decides the Role Rule.** On navy, only cyan, gold, and green are legible as text (7.5–11:1). Violet, Deep Circuit, and magenta fail there (2–3.8:1), so on dark grounds they only glow, fill, or border. In light mode it flips exactly: Deep Circuit and Aether Pulse carry every text accent, and cyan, gold, and green disappear from text. Use the `--accent-*` semantic tokens, never the raw brand constant, for any accent text on theme-aware surfaces.

**The Gold Means Go Rule.** Signal Gold marks the one thing to do next: the primary button, the active filter, the current page, the focused element. Don't use it for decoration.

**The Eight-Color Rule.** Every color on the site is one of the eight brand colors, a blend of two of them, or white or black at an opacity. Light mode reassigns these colors and never invents new hues.

## Typography

**Display Font:** Cerulean Nights (with Audiowide as the licensed-pending stand-in, then sans-serif)
**Body Font:** Inter (with sans-serif)
**Label/Mono Font:** Roboto Mono (with monospace)

**Character:** A wide, rounded techno display face names things: pages, stories, cards, sections. Inter does all the reading. Roboto Mono speaks in HUD readouts: eyebrows, dates, tags, reading times.

### Hierarchy
- **Display** (800, 88px → 56px at ≤900px → 38px at ≤560px, line-height 0.98): the Home hero headline only. It can carry an Aether→Neon gradient-clipped accent word.
- **Headline** (800, 54px → 36px → 28px, line-height 1.05): page-header titles. Posts and stories step down to 44px, and the changelog intro uses 48px.
- **Section** (700, 30–46px): section and band headings. Shadows band is 46px, pillars 34px, content sections 30px, podcast shows 27px.
- **Title** (600, 18–22px): card titles (post and pillar 22px, story and changelog 19px, media 18px) and prose h1–h3 (26 / 21 / 18px).
- **Body** (400, 16px, line-height 1.75, 720px column ≈ 70ch): post and story prose. Card copy is 14–15px at line-height 1.6 in secondary text color. Page-header lede is 17px at line-height 1.65.
- **Label** (Roboto Mono 500, 12px, letter-spacing 0.14em, capitals typed in markup): the eyebrow above every heading, in one accent color. Mono also sets dates, tags, story metadata, and status badges (10px, 700, uppercase).

### Named Rules
**The Eyebrow Before the Name Rule.** Every major heading gets a short mono capitals eyebrow in a single accent color above it, like a HUD tag on the thing it labels.

**The Display Face Never Reads Rule.** The display face stays at title size and above and never sets running text. Cerulean Nights is mixed-case only, never all-caps (a brand-guide constraint). Anything longer than a line is Inter.

## Layout

Full-bleed bands run edge to edge, and content inside them uses the fluid `--gutter` side padding (20px → 48px across viewport widths). Content sections center at a 1200px max. Reading and list columns narrow to 820px (blog list, Home's latest posts) or 720px (post and story prose, changelog).

Grids use `auto-fill` with a minimum column width: story cards 260px, media cards 250px, episodes 320px, and the Home pillars fixed at 3-up. Card gaps are 22px, and the pillars grid uses 28px. Vertical rhythm: the hero is 130/110px, the Shadows band 96px, the pillars 100px, content sections 84px, section heading to content 40px. Section heading stacks are eyebrow → heading → lede with 10px gaps.

Breakpoints step down in tiers: 1180px (wordmark collapses to "GD"), 900px (pillars and the Shadows band go single-column, with each spotlight strip re-ordered under its own card), 720px (the nav collapses behind a menu button so the sticky header stays one 61px row), 700px (post cards stack, headline shrinks), and 560px (all display type and section padding shrink again). The header scales fluidly between 640 and 1200px as one coordinated unit. Every page is verified overflow-free at 320px.

## Elevation & Depth

Depth is **emitted light plus scrims**, not a material shadow stack. Surfaces sit flat at rest on the navy ground, set apart by a slightly lighter navy fill (#16294F) and a thin Deep Circuit border. Hover responds with a lift (translateY −3 to −4px) and a cyan-tinted border, not a bigger shadow. The few real shadows are colored glows: pink under the Shadows CTA, gold under the gold button, and violet around the Shadows logo tile. Photo bands build depth from a vertical navy scrim plus radial violet and cyan glows. The one neutral shadow is the dropdown of the mobile nav.

### Shadow Vocabulary
- **Neon CTA glow** (`box-shadow: 0 4px 18px rgba(188, 72, 154, 0.35)`, hover `0 6px 24px rgba(188, 72, 154, 0.55)`): the Play Shadows RPG button only.
- **Gold glow** (`box-shadow: 0 6px 22px rgba(242, 201, 76, 0.30)`): the gold primary button.
- **Portal aura** (`box-shadow: 0 0 60px rgba(113, 43, 140, 0.35)`): the Shadows logo tile.
- **Menu drop** (`box-shadow: 0 18px 30px rgba(0, 0, 0, 0.35)`): the open mobile nav panel.

### Named Rules
**The Light Is Emitted Rule.** Shadows are colored and come from the element (a glow), never grey and cast downward. Cards don't get drop shadows. They respond to hover with a lift and a border color change.

**The Always-Dark Band Rule.** Photo bands keep their navy scrim in both themes, and any text on them gets an explicit fixed white (`--text-light` or a literal rgba white), never inherited color. A band's final gradient stop fades to `--bg-page` only when theme-aware content follows it. When another dark band follows, it ends on fixed Midnight.

## Shapes

The form language is soft-cornered and pill-driven. Anything you press is a full pill (999px): buttons, tag pills, contact channels, social badges, the theme and menu toggles, status badges, the skip link. Anything that holds content is a softly rounded card (14px), and dashed empty-state panels are 16px. Embedded media and images inside prose round to 12px. The Shadows logo tile is the one 20px square. Avatars are circles, and crew avatars get a 2px ring in their role accent. Cards clip their cover art with `overflow: hidden`, so imagery takes on the card corner. Story cards carry a 3px top rule in their story accent. Story h2s carry a short 40px × 3px accent bar above them, story blockquotes sit on a soft accent-tinted 12px panel, and the Patreon CTA takes a 3px gold top rule like the story cards. There are no side-tab left borders anywhere.

## Components

### Buttons
The buttons are luminous and pill-shaped. Each variant owns one meaning.
- **Shape:** full pill (999px), Inter 600–700, 14–15px.
- **Play Shadows RPG CTA:** a 135° Aether Pulse → Neon Veil gradient, white text, and the neon CTA glow. It lives only in the header and scales fluidly with it. The glow intensifies on hover.
- **Gold (primary action):** Signal Gold fill, Gutter Black text, 14px × 26px padding, gold glow. Hover brightens it about 6%. It's used for Discord and Patreon CTAs and "read more" section actions.
- **Ghost (secondary):** transparent fill with a 1.5px border at 55% gold and text in `--accent-gold`. Hover adds an 8% gold wash.
- **Focus:** a 2px gold outline, offset 3px and following the pill radius. This is the site-wide focus treatment.

### Chips
- **Tag pill (filter):** Roboto Mono 12px on a faint chip fill with a hairline chip border. Hover lights the border cyan. When active, it's filled solid Signal Gold with Gutter Black text and exposes `aria-pressed`.
- **Topic tags:** the same mono pill, static, used under podcast show heads.
- **Status badge:** mono 10px uppercase pill tinted from the story's accent. "Complete" is an outline, and "Ongoing" is filled with a white-mixed accent and dark text.

### Cards / Containers
- **Corner Style:** softly rounded (14px).
- **Background:** Card Midnight Circuit (#16294F) in dark mode, white in light mode.
- **Shadow Strategy:** none at rest (see Elevation). Hover lifts the card 3–4px.
- **Border:** 1px Deep Circuit at 45%, turning a cyan tint at 55% on hover.
- **Internal Padding:** 20–34px. Pillar cards are 34/30px, and story, post, and media bodies are 20–30px.
- **Whole-card links:** every card is a single `<a>`, and its inner "Read →" line is a non-interactive span.
- **Variants:** cover-art cards (story, media) put a 16:9 image on top. Post cards put the image on the left third and stack at ≤700px. Posts without art get a bear-on-gradient placeholder tile (Deep Circuit → Aether Pulse).

### Navigation
- **Header:** sticky, translucent navy (88% alpha) with an 8px backdrop blur and a hairline bottom border. It holds the bear mark and wordmark, primary links in Inter 500 at secondary text color, the CTA, and the theme toggle.
- **States:** hover turns the text white with a 2px cyan underline. The current section gets a 2px gold underline plus `aria-current`.
- **Mobile (≤720px):** the links collapse behind a circular menu button into a full-width dropdown panel of 17px rows with hairline dividers. The active row turns gold. Escape and an outside click close it.
- **Footer:** Discord CTA band, footer nav at 13px tertiary text, the full social badge row (36px circles, hover gold), copyright, and an italic disclaimer.

### Photo Band (signature)
This is the cinematic header behind the hero, page headers, the Shadows band, and story headers. It's a licensed photo at 50–55% opacity under a vertical navy scrim (35% → 55–60% → solid) plus a violet radial glow from the top center (and a cyan one off-axis on the hero and story headers). Content is centered: mono eyebrow, then display or headline in fixed white, then a lede at 82% white. Story headers swap the glows for per-story `--story-glow-1/2` and recolor the eyebrow, links, rules, and scene breaks with that story's `--story-accent`.

### Spotlight Strip (signature)
A 120px-tall mini photo band under each Home pillar card: cover art under a bottom-weighted navy scrim, a bold kicker, a two-line display title, and a sub line. It rotates to a random pick every 30 seconds with a 200ms crossfade. Rotation pauses when the tab is hidden and is off under reduced motion.

## Do's and Don'ts

### Do:
- **Do** put every new hero or page header on the photo-band pattern: licensed photo at about 50% opacity, a navy scrim, and a violet top glow, with text pinned to fixed white.
- **Do** reuse `--card-bg` / `--card-border` / `--card-border-hover` for any new card, and make the whole card the link.
- **Do** head every section with a mono capitals eyebrow in one accent, then a display-face heading.
- **Do** use `--accent-cyan/gold/green/magenta` for accent text on theme-aware surfaces so light mode swaps them correctly. Reserve raw brand constants for fills, glows, and always-dark bands.
- **Do** make every pressable element a pill and give it the gold focus ring.
- **Do** check contrast against both navy and Daylight Paper before giving any brand color a text role (WCAG AA 4.5:1).
- **Do** honor `prefers-reduced-motion`: no hover lifts, no auto-rotation.

### Don't:
- **Don't** drift toward a generic SaaS landing page: light-first layouts, flat gradient blobs, stock illustration, or icon-and-three-bullets feature grids.
- **Don't** echo the old Google Sites build this site replaced.
- **Don't** set Aether Pulse, Deep Circuit, or Neon Veil as text on the navy ground. They fail contrast there, so let them glow, fill, or border instead.
- **Don't** add grey drop shadows to cards or panels. Depth is emitted light and hover lift.
- **Don't** let text on a photo band inherit its color, because it flips to dark in light mode.
- **Don't** introduce a ninth hue, or give light mode colors of its own.
- **Don't** set running text in the display face, or set Cerulean Nights in all caps.
- **Don't** use Signal Gold decoratively. It marks the next action.
