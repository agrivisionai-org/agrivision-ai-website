# AGRIVISION AI — social brand kit

Generated 2026-09-16 from the vector masters `public/leaf-mark.svg` and `public/logo.svg`.
Nothing here was redrawn or traced; every file renders from those two sources.

## Avatars — profile pictures

| File | Use |
|---|---|
| `avatar-light-1000.png` | Default. Instagram, LinkedIn, X, YouTube |
| `avatar-dark-1000.png` | Where the platform chrome is dark, or for a dark-mode variant |
| `avatar-light-512.png` / `avatar-dark-512.png` | Smaller upload limits; Zoho, Slack, favicons |

**Circle-safe.** Every platform crops avatars to a circle. The leaf is set to 48% of the
frame height and centred, so it sits well inside the circle with margin on all sides —
nothing clips at any crop. Leaf only, no wordmark: "AGRIVISION AI" is unreadable at 40px,
which is the mistake the old favicon made.

## Story — 1080×1920

| File | Use |
|---|---|
| `story-light-1080x1920.png` | Instagram / LinkedIn story background |
| `story-dark-1080x1920.png` | Dark variant |

These are **templates, not finished posts**. The wordmark sits at the top and the URL at
the bottom, both inside the safe zones — Instagram overlays its own UI over roughly the
top and bottom 250px. The whole middle band is deliberately empty for your text, a
screenshot, or a photo.

## Square — 1080×1080

| File | Use |
|---|---|
| `square-light-1080.png` | Feed post frame where 1:1 is wanted |
| `square-dark-1080.png` | Dark variant |

Same idea: branded frame, empty middle. For finished 4:5 feed posts use the cards in
`../ig-posts/` instead.

## Lockups — transparent background

| File | Use |
|---|---|
| `lockup-light-2400.png` | Full lockup for **light** backgrounds (dark wordmark) |
| `lockup-dark-2400.png` | Full lockup for **dark** backgrounds (paper wordmark) |
| `lockup-dark.svg` | Vector master of the dark lockup — scale to any size |
| `leaf-mark-dark.svg` | Vector master of the brightened leaf |

For decks, press kits, partner sites and conference material. Transparent, so they sit on
any ground.

## Marketing lockup — logo with the URL

| File | Use |
|---|---|
| `agrivision-ai-marketing-lockup-light.svg` | Vector master for **light** grounds |
| `agrivision-ai-marketing-lockup-dark.svg` | Vector master for **dark** grounds |
| `agrivision-ai-marketing-lockup-light.png` / `-dark.png` | 2400x884, transparent |
| `agrivision-ai-marketing-lockup-on-paper.png` | Ground already filled with paper `#F4F6F1` |
| `agrivision-ai-marketing-lockup-on-green.png` | Ground already filled with deep green `#0B2E1C` |

This is the **collateral** version: flyers, banners, merch, slide footers, ads, anywhere the
reader needs to be told where to go. It is not the logo. Press and editorial use the plain
lockup above, because a web address baked into a logo reads as an advert inside an article.

Two differences from the master worth knowing:

- **It has clear space.** `public/logo.svg` is a tight bounding box - the final "I" of "AI"
  sits exactly on the right edge at x=1873. Correct for a web logo sized by CSS, wrong for
  print, where a trim would cut into the glyph. The lockup insets the mark inside 72px of
  side padding, so the URL is centred on real clear space rather than on the glyph edge.
- **The URL is live text in the SVG and baked pixels in the PNG.** The SVG asks for Inter
  and falls back through Segoe UI, Roboto, Helvetica Neue and Arial, so it degrades to a
  close geometric sans rather than Times on a machine without Inter. If you are sending
  artwork to a printer or a partner, send the PNG - it cannot substitute a font.

## Why the dark variants are not just inverted

The master leaf gradient runs `#5AB709 → #0C4223`. That second stop is nearly black-green
and disappears against a dark background. The dark variants use a brightened gradient
(`#8FE04A → #3E9B35`) so the mark keeps its full shape and depth.

The dark lockup also flips the wordmark from `#0E2A18` to paper `#F4F6F1`, while the "AI"
stays `#4CAF2B` — that green already reads on a dark ground and is the one piece of the
lockup that should not change.

## Palette

| Token | Hex | Use |
|---|---|---|
| Paper | `#F4F6F1` | Light ground |
| Deep green | `#0B2E1C` | Dark ground |
| Brand green | `#0F6B3E` | Accents, links on light |
| Leaf green | `#4CAF2B` | The "AI", dots, highlights |
| Ink | `#0E2A18` | Wordmark on light |
| Leaf gradient (light) | `#5AB709 → #0C4223` | Mark on light grounds |
| Leaf gradient (dark) | `#8FE04A → #3E9B35` | Mark on dark grounds |

## Regenerating

`node brand_kit.js` rebuilds the avatars, stories, squares and plain lockups.
`node marketing_lockup.js` rebuilds the marketing lockup. Both read the vector masters, so
if the logo changes, rerun them rather than editing PNGs.
