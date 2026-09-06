---
purpose: Maps the hashed image filenames in Google-Page-Oriignal/PUBLISHED/ to what they actually are, so future work doesn't need to re-open every file to check.
---

All paths below were originally relative to `Google-Page-Oriignal/PUBLISHED/` in this repo. That folder no longer exists here — it was removed entirely on 2026-09-05 after GitHub flagged leaked Google API keys baked into its `.html` files (see [asset-licensing.md](../brand/asset-licensing.md) and CLAUDE.md for the full story). The images themselves (not the `.html` files, which were the actual leak) were copied out first and now live at `C:\Apps\GetDangerousGames-Site-reference\old-site-images\` — outside this repo, never tracked by git — for the Writing/Podcasts/Updates/YouTube subfolders specifically (Home and shared nav/footer images weren't preserved since they're already superseded by real brand assets, see brand/asset-licensing.md).

## Shared across every page (nav / footer)

| File | Used as |
|---|---|
| `41398ea18f7abf7fff6127f13a28d6d2.jpg` | Site logo — bear/panda mark, shown in nav (small) and repeated once more |
| `4d539bcbf4440aa493a159b6214751a5.jpg` | Footer icon → Patreon link |
| `5c65621b1d93376b4d32b39ee90453ab.jpg` | Footer icon → Twitch link |
| `a013f0b2790071dd8b81bcf9856d1402.jpg` | Footer icon → Twitter/X link |
| `d8e15d056cfe56fed727f73df266bba7.jpg` | Footer icon → YouTube link |
| `632b847c808e820a25ec52c2fa228091.jpg` | Footer icon → Discord link |

## Home/

| File | Used as |
|---|---|
| `c3a25d3f9882529edc6aa64fa56800b1.jpg` | Hero section background (CSS background-image) — night skyline |
| `b326bdef7429826fd75bb6b0adacd441.jpg` | "Shadows RPG" callout section background (CSS background-image) — cyberpunk skyline |
| `8c5633dc59c092ab5f9a8d34cdd68ad8.jpg` | Shadows triangle/skull logo graphic (foreground `<img>`) |
| `eed5455f3c1953e51c41198368b028c5.jpg` | Foreground `<img>`, Shadows RPG section (variant/companion asset to the above — confirm exact placement visually before reuse) |
| `d664a330b1d24d1973ba7f66f6a527a1.jpg` | Foreground `<img>`, Shadows RPG section |
| `06db45c22077f02538f397f775c55839.jpg` | Foreground `<img>`, Shadows RPG section |

## Contact/

| File | Used as |
|---|---|
| `52394d8273524862916307414ce1ed19.jpg` | Present in export but not visibly used — Contact page renders empty (see [contact.md](contact.md)) |

## Podcasts/

| File | Used as |
|---|---|
| `8d4bf0e958c0c15176887613fced5536.jpg` | Header background — neon alley |
| `f5bc593b7d993c001d3ed769193cc2a4.jpg` | Episode/section art |
| `c1018a8ba4a00223b7c9d7acc300facf.jpg` | Episode/section art |
| `3a9b51e2d88427ad46584495e5c6ba45.jpg` | Episode/section art |
| `5b09fa2f01e3cc89df5ab1cd71a58adb.jpg` | Episode/section art |
| `2721d289f4315edb596ffed1c4b62941.jpg` | Episode/section art |
| `2ab0ea2b66617c551b3f73dd8c7862f2.jpg` | Episode/section art |
| `c04a08c8055037bfa66d00718976b439.jpg` | Episode/section art |
| `9e0b3ed1d45f63bfa6d7bbae2afa68c1.jpg` | Episode/section art |

## Updates/

| File | Used as |
|---|---|
| `b6d76a23e8bbed1ea8432277d32be022.jpg` | Update entry thumbnail |
| `6d6df04b57f5b590ba75cac17f9e9fde.jpg` | Update entry thumbnail |
| `211fface789042c4000dd2e9b2228d58.jpg` | Update entry thumbnail |
| `07f8d65b966294f66b7772efc046377e.jpg` | Update entry thumbnail |
| `dc36cc4cd8da8545ac3641d7679759ed.jpg` | Update entry thumbnail |
| `c3a25d3f9882529edc6aa64fa56800b1.jpg` | Reused hero background (same as Home hero) |

## Writing/

| File | Used as |
|---|---|
| `2e076e982627e42406a0ae2034c3a056.jpg` | Header background — cyberpunk cityscape |
| `e4e6da9be1a33548f0956ca99a79a910.jpg` | Cover art — one of the four works |
| `ed64e0fb58995eff6832ecf3a218828f.jpg` | Cover art — one of the four works |
| `351dbb7db36a5b8047c6915393569bc3.jpg` | Cover art — one of the four works |
| `52394d8273524862916307414ce1ed19.jpg` | Cover art — one of the four works (shared file, also present under Contact/) |

## YouTube/

| File | Used as |
|---|---|
| `7b88ca4cc11f64e7f71703ba964df8bd.jpg` | Header background — "D33KODE / GET DANGEROUS" synthwave banner |

Note: the YouTube page's playlist thumbnails aren't static images — they're rendered live by embedded YouTube widgets, so there's nothing to extract for those beyond the playlist titles/blurbs in [youtube.md](youtube.md).

## Not yet matched to a specific card

`e4e6da9be1a33548f0956ca99a79a910.jpg`, `ed64e0fb58995eff6832ecf3a218828f.jpg`, `351dbb7db36a5b8047c6915393569bc3.jpg` — all three are Writing cover-art images but which cover belongs to which of the four stories (Alabas Warbold / Once Bitten / The Last Encounter / LRRH - Retold) wasn't confirmed pixel-by-pixel. Cross-check visually against `content/writing.md` before reusing in the new design — better yet, source fresh cover art since the rebuild is a good opportunity to commission/generate art that matches the new brand palette instead of reusing Google Sites stock-photo collages.
