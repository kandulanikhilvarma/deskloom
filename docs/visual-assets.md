# Room concept assets

The three room concepts are AI-generated style references.
They do not establish exact product appearance, room measurements, or a purchase total.
The Products view supplies actual retailer and manufacturer model photos.

## Delivered files

| Direction | File | Visual brief |
| --- | --- | --- |
| Calm | `public/scenes/calm.webp` | Pale oak desk, flat silver monitor, white keyboard, soft daylight. |
| Focus | `public/scenes/focus.webp` | Graphite desk, curved ultrawide monitor, black keyboard, cool architectural light. |
| Studio | `public/scenes/studio.webp` | Walnut desk, two flat monitors, compact pastel keyboard, warm orange lamp. |

Each image uses a distinct room composition and furniture palette.
The generation briefs requested photorealistic futuristic workspaces without people, text, logos, numbers, or product hotspots.
The source PNG files were converted to 1400-pixel WebP assets at quality 85.
This document records the visual briefs, rather than a verbatim transcript of the generation prompts.

Live photo edits use a separate server prompt in `lib/render/api.ts`.
That prompt receives the user's room first and actual selected product references afterward.
The editor adds a distinct design instruction for each direction.
Generated output can approximate physical products. Compare the exact model photos before purchase.
