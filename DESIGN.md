---
name: Deskloom
description: A residential material library for real workspace choices.
colors:
  bg: "#f9f9f5"
  surface: "#fff"
  soft: "#f0f1e9"
  ink: "#253d34"
  body: "#3e4e45"
  muted: "#647168"
  line: "#dfe4d9"
  accent: "#244e42"
  accent-hover: "#183b31"
  tint: "#e9eee4"
  clay: "#a15f42"
  danger: "#a43e35"
typography:
  display:
    fontFamily: "Fraunces, serif"
    fontSize: "29px"
    fontWeight: 500
    lineHeight: 1.23
    letterSpacing: "-0.7px"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "22px"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.6px"
  title:
    fontFamily: "Fraunces, serif"
    fontSize: "25px"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 650
rounded:
  action: "7px"
  field: "8px"
  card: "10px"
  scene: "12px"
  modal: "14px"
spacing:
  compact: "8px"
  small: "12px"
  medium: "16px"
  section: "24px"
  rail: "28px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.action}"
    padding: "11px 15px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.bg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "11px 15px"
  button-secondary-hover:
    backgroundColor: "{colors.tint}"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
  catalog-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "16px"
---

# Design System: Deskloom

## Overview

**Creative North Star: "The residential material library"**

Deskloom follows a material library in a residential design studio. Warm paper surfaces surround real product photographs and practical choices. The interface stays compact so users can compare objects in their own rooms.

Credited room photographs give context for materials, light, and useful furniture. Product photographs show exact models separately. The existing identity uses dark green controls, clay accents, Manrope interface text, and Fraunces titles.

**Key Characteristics:**

- Six photo-led entry choices expose the range of workspace products.
- Real room stories keep photographer credits and source links.
- Separate rails keep preferences and the current product total close to the editor.
- Visible borders and quiet surfaces organize dense product information.

## Colors

The palette combines paper neutrals with deep green controls and a restrained clay accent. The frontmatter records the light theme from `app/globals.css`.

### Primary

- Accent green fills primary buttons and selected category controls. The deeper hover green marks pointer feedback.
- Ink green carries headings and strong text. Body green carries ordinary paragraphs.

### Secondary

- Clay marks title emphasis and the global focus outline.
- Danger red marks budget excess and destructive actions.

### Neutral

- Paper forms the page background. White forms product cards, fields, and the product rail.
- Soft paper backs product photographs, segmented controls, and quiet notes.
- Tint green marks selected equipment and secondary hover states.
- Muted green carries secondary text. Pale borders divide rails, rows, and cards.

The dark theme swaps the same CSS variables through the root theme attribute. The dark theme uses deep green surfaces and pale green text. Product photographs keep their original colors.

**The Surface Rule.** Use the existing semantic variables for interface surfaces and text. Keep product and room photographs separate from interface color treatments.

## Typography

Manrope is the body and interface face, with a sans-serif fallback. Fraunces is the display face, with a serif fallback.

Fraunces gives the main introduction, active version, room titles, and dialogs their residential character. Manrope supports product names, prices, specifications, and controls. The scale uses explicit sizes rather than a fixed ratio.

### Hierarchy

- Display: the preference introduction uses the frontmatter display role. Its size changes with the editor width.

- Headline: the main editor heading uses Manrope. Catalog and inspiration introductions expand this scale to 26px and 28px.

- Title: room story titles use the frontmatter title role. The active version uses Fraunces at 27px.

- Body: ordinary text uses the body role. Catalog explanations use a more open line height of 1.8.

- Label: catalog filters use the label role. Existing rails keep smaller labels and notes to fit their compact layout.

**The Model Name Rule.** Use Manrope for product names and specifications. Reserve Fraunces for editorial titles and introductions.

## Layout

The desktop editor has three rails within a centered shell, with a maximum width of 1700px. The default columns are 246px, a flexible center of at least 400px, and 300px. The left rail contains preferences. The center contains discovery and the active view. The right rail contains the total and product details.

At 1500px and above, the outer rails expand to 275px and 330px. At 1180px and below, they contract to 220px and 260px. At 960px and below, the product panel moves beneath the center. At 680px and below, the editor stacks vertically.

Product discovery precedes the detailed editor. The desktop launcher uses a three-column grid with two rows. Its six photo-led choices are Electronics, Desks, Chairs, Rugs, Curtains and fabrics, and Desk elements.

At 700px and below, a separate discovery block appears before the preference rail. The phone launcher keeps its six choices in a compact three-column grid. The desktop launcher hides at that width. The phone sequence is discovery, preferences, editor, then products and budget.

Catalog cards use two columns. The catalog switches to one column when its container is at most 420px wide. Search, type, and brand filters share a row on wide views. Phone views stack those filters.

Room stories pair a photograph with text in two columns. At 900px and below, each story stacks its photograph above the text. Borders and vertical space separate stories. Comparison tables scroll horizontally inside their own region.

Use the recorded spacing steps for related controls, card content, and section gaps. Keep the generous space between stories and the tighter space within specification rows.

**The Discovery Order Rule.** Keep the six product choices before phone preferences. Keep product discovery near the top of the desktop center rail.

## Elevation & Depth

Most surfaces use pale borders and tonal changes for depth. Cards stay flat at rest. Selected directions use a green border with a pale outer outline. The active segmented tab has a small soft shadow.

Dialogs use the shared shadow variable. Their backdrop uses translucent dark green with a slight blur. Product photographs sit on soft surfaces without decorative shadows.

The budget bar animates its width over 0.4 seconds. Direction borders use a short 0.2-second transition. The reduced-motion preference removes transitions and animations.

**The Quiet Depth Rule.** Use borders and tonal separation for ordinary content. Reserve the shared ambient shadow for overlays.

## Shapes

Controls use compact rounded rectangles. Fields have slightly softer corners than buttons. Product cards and family choices share the card radius. Larger preview surfaces and dialogs use the larger recorded radii.

Fine borders frame cards and divide rows. Circular markers mark products on a personal photo. Rounded shapes must not crop product silhouettes or obscure room context.

## Components

### Buttons

Primary buttons use accent green with paper text. Secondary buttons use a white surface with a fine border. Their hover state uses the green tint. Both variants have a minimum height of 44px, with 48px actions on small phones.

Text buttons use Manrope with an icon where useful. Source links use an underline. Global keyboard focus uses the clay outline. Catalog and inspiration controls use a green outline.

### Fields and category controls

Fields use white surfaces, pale borders, and the field radius. Search and select controls have a minimum height of 44px. Labels stay above their fields.

Catalog group buttons use a bottom border for the active group. Category buttons use rounded borders and a solid green selected state. Group navigation covers Electronics, Desks and chairs, Rugs and fabrics, Desk elements, and Comfort.

### Cards and product images

Catalog cards place a real model photograph above the model name, price, and specifications. Details and comparison actions follow the fit note. A separate retailer link remains visible beneath those actions.

Product images use contain-fit display on a soft background. A missing image shows an explicit photo-unavailable state. Product cards must preserve the product silhouette and show the model name.

### Navigation and comparison

Header navigation uses muted text at rest and a green underline for the active destination. Preview tabs use a soft segmented container and a white selected tab. Product comparison places up to three models in a specification table with clear row labels.

### Product family launcher

Each family choice combines a local product photograph, a family name, and a short count or detail line. Desktop cards include an arrow. The compact phone version removes that arrow. The photograph and label stay visible.

The catalog extends these entry choices into computers, keyboards, mice, monitors, furniture, rugs, curtains, and desk elements. Chair materials and upholstery belong in product specifications. Lighting, mats, organizers, supports, cables, shelves, plants, and footrests keep their own categories.

### Room stories

The inspiration view has six editorial stories. They cover a window desk, an everyday desk, and a creative corner. Other stories cover a small apartment, an evening corner, and light surfaces with storage.

Each story uses a real credited Pexels photograph. The photograph uses contain-fit display with its credit directly below. The text contains practical takeaways, a room-fit note, a local plan total, and expandable product links.

The plan action sits below the proposed products. Its nearby note explains replacement and undo. Preserve the distinction between reference photographs and exact product matches. A photograph failure shows a source link instead of a substitute concept image.

## Do's and Don'ts

### Do:

- Do preserve paper surfaces, dark green controls, clay emphasis, and the existing type pairing.
- Do use real product photographs with visible model names and local product links.
- Do keep photographer credits directly beside room photographs.
- Do keep the six product choices ahead of preferences on phones.
- Do show budget context beside product decisions and plan actions.
- Do keep visible keyboard focus and reduced-motion behavior.

### Do not:

- Do not describe the six room photographs as AI room concepts or exact product matches.
- Do not replace product photographs with decorative silhouettes when a photograph fails.
- Do not tint photographs to imitate the interface palette.
- Do not hide model specifications or materials behind a family photograph alone.
