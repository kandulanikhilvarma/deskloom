# Deskloom requirements and pending work

Review date: 19 October 2026.

## The required outcome

A person takes a room photo, sets a country and budget, and marks equipment to keep.
Deskloom must return distinct room designs with complete product lists and local purchase links.
Product changes must update the selected design and its total together.
A finished product must preserve the room geometry and show which physical model each clickable object represents.

The current product does not complete that full outcome.
It offers product plans, example room concepts, manual photo pins, and private saved plans.
Automatic room analysis and accepted live room-image generation remain missing.
The current owner requirement is no payment and no payment card.

## Confirmed defects and repairs

The live page changed concept images when the direction changed.
A separate regression test reproduced a real failure in the Products view.
The direction button forced that view back to a room concept and rebuilt its products, which discarded custom changes.

| Defect | Repair |
| --- | --- |
| A direction change hid the selected product board. | Keep the Products view and show the selected direction name, subtotal, and missing essentials. |
| Swaps and removals disappeared after a direction change. | Keep an independent product draft, undo state, and photo layout for each direction. |
| The direction controls appeared below the large room image. | Put all three directions before the preview. |
| Purchase links needed a separate product-detail step. | Give every product card and comparison row its own retailer link. |
| A photo upload left only the original photo visible. | Open three product plans with the original photo as a reference. State that the photo does not drive automatic analysis. |
| Desk measurements were absent from details. | Show catalog dimensions with specifications and the date of the price reference. |
| The export contained only one version. | Add an export with all three current product lists. |

Budget, market, and room-preference changes reset the drafts to prevent stale product choices.
Within one browser session, direction changes preserve custom edits.
Cloud Save plan still saves the current version only. It does not save all three drafts as one project.

## Electronics repair

The default low budget selected accessories before work inputs.
The collapsed catalog hid electronics and lacked details before an addition.
The new electronics browser shows all local models independently of budget and owned categories.
Product cards show specifications, model photos, price status, and direct local links.
Users can search, filter by type, and compare up to three models.
A detail dialog explains each add or replacement before it changes the plan.
Unknown prices stay outside totals. Owned categories need an explicit change in the preferences.
The planner now gives keyboards, mice, and monitors priority over optional accessories.
Mechanical keyboard records add local manufacturer destinations for all three countries.
Their exact local variants and prices still need a check before a budget plan can include them.

## Real pending work

| Priority | Requirement | Current status | Exact next step |
| --- | --- | --- | --- |
| P0 | Analyze an uploaded room. | Missing. Product suggestions use manual preferences, rather than detected objects or measured geometry. | Connect and validate a vision model. Ask the user to confirm detected equipment and dimensions. |
| P0 | Generate three personal room images. | The server integration exists, but live acceptance failed. Gateway returned `customer_verification_required`; no generated output passed. | Obtain a verified card-free image-editing runtime and permitted credentials, or an owner-operated compute service. Test all three outputs before activation. |
| P0 | Match every clickable object to a real model. | Missing for generated room images. Product cards have exact model photos and links; photo pins are manual. | Add object grounding or masks and validate each product-to-object match. Mark uncertain matches clearly. |
| P1 | Cover every essential within budget. | Partial. The current catalog can leave gaps, particularly at low budgets or without owned equipment. | Expand verified regional records and explain missing essentials without invented prices. |
| P1 | Exact delivered prices and stock. | Missing. The app uses dated price references. | Connect licensed retailer feeds with location, shipping, tax, stock, and refresh dates. |
| P1 | Product-aware image edits after a swap. | Not accepted live. Product lists and totals update now. | Regenerate only after an approved provider request and invalidate stale images. Verify the new physical model visually. |
| P1 | Save all three edited versions together. | Missing. The current save stores one selected version. | Extend the private plan schema and test migration, account isolation, restore, and deletion. |
| P1 | Email ownership and recovery delivery. | Managed Auth permits password signup without verified email ownership. Recovery code exists; delivery acceptance remains pending. | Configure the intended email policy and complete real verification and reset-email tests. |
| P2 | Native iPhone release and HEIC support. | Phone browser support exists. There is no App Store release; HEIC uploads need conversion. | Add and test a permitted HEIC decoder, then scope native distribution separately. |

Free consumer chat access does not establish free API access for a public application.
No connected card-free provider currently passes the personal-image workflow.
Production photo generation remains disabled. The preview flag is also disabled for new deployments.
The earlier paid-provider approval does not override the later no-card requirement.

## Purchase-link evidence

The audit requested all 66 selectable product URLs on 19 October 2026.
Fifty-nine returned HTTP 200 with product titles and no redirect.
Seven Dell URLs returned HTTP 403 to the automated fetch.
A browser check opened the German S2725HSM destination with the correct model and a price of 169 euros.
That browser result does not establish acceptance of the other six Dell destinations today.
See [the URL audit](catalog-check-2026-10-19.json) for the individual results.
Stock, shipping, and checkout totals remain unverified.

## Acceptance checks

- Select every direction from Products, Room concept, and Compare all.
- Confirm that the selected products, subtotal, links, and heading agree.
- Swap or remove a product, change direction, and return to the edited version.
- Upload a photo and inspect all three regional product lists.
- Open a local retailer destination and confirm its model identity.
- Change country and budget; confirm that old drafts and prices disappear.
- Export all three lists with names, dated prices, and purchase links.
- Check phone overflow, keyboard focus, and light and dark accessibility.
- Before any claim of personal image generation, complete provider acceptance and inspect object matches in all three outputs.
