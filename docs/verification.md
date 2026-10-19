# Release verification record

The release record separates source implementation, automated checks, provider acceptance, and public activation.
An implemented route does not establish a successful live integration.

## Room library checks, 20 October 2026

- All 54 local unit tests passed. Two belong to separate unpublished text-stream work; this release contains 52 application tests.
- Lint, TypeScript, and the production build passed.
- The final local browser run passed 17 guest checks and explicitly skipped the account test.
- Checks loaded all 34 regional electronics photos, the added furniture and fabric model photos, and six room photographs.
- Phone and desktop checks covered light and dark themes, selected WCAG A and AA rules, and overflow.
- Six family controls fit in the first phone viewport.
- Browser checks passed product comparison, local links, support requirements, budget filters, room-plan application, undo, and photo failure recovery.
- Two Mermaid diagrams and three YAML documents parsed successfully. The STE linter reported zero errors; the approved dictionary was not checked.
- The catalog contains 93 regional records: 42 for India, 30 for Germany, and 21 for the US.
- India exposes seven keyboards, four mice, and three monitors. Germany and the US each expose four keyboards, three mice, and three monitors.
- Each market has at least three desks, three chairs, two rugs, and one curtain choice.
- Six credited room photographs have local product recipes. Tests confirm budget, market, owned equipment, and price rules.
- Rug additions need existing underlay confirmation. Curtain additions need existing rod or rail confirmation.
- The separate design review resolved both findings: mobile discovery order and the design record. Its final disposition is `ship`.

The source audit covers 21 added IKEA records and two HP input devices.
See [the destination audit](room-catalog-audit-2026-10-20.json) and [room sources](room-sources.md).
Each price has an observation date. They do not establish current stock or delivery eligibility.
One US rug has no reliable selected-variant price and cannot enter a budgeted plan.

This update adds no dependencies or database schema changes.
The account and database integration tests were not repeated for this catalog update.
Paid image requests remain disabled under the owner's no-card requirement.
Reference photographs do not identify every object or show an exact selected product plan.

## Electronics release checks, 19 October 2026

- The final production build passed 14 guest browser tests. The run explicitly skipped the account test.
- All 32 regional electronics photos loaded in the browser.
- India exposes six keyboards, three mice, and three monitors. Germany and the US each expose four keyboards, three mice, and three monitors.
- Tests covered tiny budgets, product-type filters, search recovery, detailed specifications, local links, comparison tables, replacements, and undo.
- Tests confirmed that owned categories remain visible and blocked additions do not change a plan.
- Desktop and phone checks passed for light and dark themes, keyboard use, overflow, and selected WCAG A and AA rules.
- All 50 local unit tests passed. Two belong to separate unpublished text-stream work; this release contains 48 application tests.
- Lint, TypeScript, and the production build passed.
- Two Mermaid diagrams and three YAML documents parsed.
- The new mechanical-keyboard destinations returned HTTP 200, matching model titles, and no redirects.
- See [the new destination audit](electronics-link-check-2026-10-19.json) and [the earlier complete catalog audit](catalog-check-2026-10-19.json).

This change adds no dependencies, database schema changes, or image-provider calls.
The account and database integration tests were not repeated for this repair.
The skill folder does not contain the GitHub hygiene helper script. Direct checks covered identity, manifest, license, CI, diagrams, YAML, ignored secrets, and the scoped diff.
The STE linter reported no errors in the changed prose. Its warnings need human judgment; the approved dictionary was not checked.

## Activation status

| Area | Current evidence | Next check |
| --- | --- | --- |
| GitHub | Initial release PR 1 merged. Repair PR 9 contains the visual and regional fixes. | See [PR 9](https://github.com/kandulanikhilvarma/deskloom/pull/9) for its exact head and merge record. |
| Vercel | The public planner responds at [deskloom.vercel.app](https://deskloom.vercel.app). | Verify the merged source deployment. |
| Neon | Readback confirmed both production tables. Vercel accepted the encrypted variables. | Verify the deployed server connection. |
| Private plans | Isolated Neon accounts passed signup, photo save, restore, sign-out, sign-in, isolation, and deletion. | Check public deployment access. |
| Verification email | Neon permits signup without email verification by default. | Configure verification, then receive a real code before a claim of verified email ownership. |
| Password recovery | Application code needs browser acceptance. | Complete the email link and new-password flow. |
| Image provider | Hosted OIDC credentials work. Gateway rejected the real request with HTTP 403 and `customer_verification_required`. Generation remains disabled under the later no-card requirement. | Connect a verified card-free runtime, then complete the three-version image acceptance test. |
| Checkout and stock | No checkout or live inventory integration exists. | Users must confirm the final order on the retailer site. |

## Required automated checks

Workflow repair checks on 19 October 2026:

- A new browser regression test failed against the old public Products view before the repair.
- All 12 local browser tests passed after the repair, with the isolated account test enabled.
- The tests covered persistent per-direction edits, direct retailer links, photo-to-product comparison, dimensions, and export of all three lists.
- Product and comparison views passed selected WCAG checks on desktop and phone, in light and dark themes.
- Lint, TypeScript, and the production build passed.
- Both Mermaid diagrams and all three YAML documents parsed.
- The changed prose documents passed STE lint without errors. Dictionary compliance remains unchecked.
- The URL audit checked all 66 selectable destinations. See [product readiness](product-readiness.md) for HTTP and browser evidence.

The local unit suite passed 46 tests, including two local streaming-command tests from a separate task.
The published application suite contains 44 unit tests. The separate streaming-command files remain outside this repair.
The current screenshots show real model photos and a three-way product comparison.

### Earlier visual repair checks

Repair checks on 18 October 2026:

- All 44 unit tests passed, including runtime OIDC and safe provider errors.
- Lint, TypeScript, and the production build passed.
- Seven focused guest browser tests passed after the OIDC repair.
- The isolated account browser test passed save, restore, sign-out, sign-in, owner isolation, and deletion.
- The earlier eight-test visual run also captured the updated desktop and phone screenshots.
- The German browser check loaded actual product photos and verified local links and distinct core products across all directions.
- The hosted provider test created an isolated account and sent one consented photo request.
- Gateway returned `customer_verification_required`; the app stopped without an automatic retry or a fabricated output.

The hosted provider check used source `dc5f903fc6821b183a1bb5b642d2b0734eae87ab` and deployment `dpl_EkiL9VAaoLoNtnPTLKXrFMVntZwL`.
No live generated output passed acceptance. The owner has already approved costs without a monthly cap and project OIDC.
An account owner must complete the provider verification step. The release process did not accept new provider terms.

### Initial release checks

Local evidence from 17–18 October 2026:

- Lint and TypeScript checks passed.
- All 39 unit tests passed.
- The production build passed after the account and accessibility fixes.
- The isolated account browser test passed signup, private photo save, restore, repeat save, sign-out, sign-in, and deletion.
- A second authenticated account received 404 for the first account's private plan and delete request.
- The isolated Neon integration test passed persistence, owner isolation, repeat-save behavior, plan limits, and render quotas.
- Desktop and phone accessibility scans passed the selected WCAG A and AA rules in light and dark modes.
- The guest workflow passed photo upload, budget changes, variants, product details, removal, undo, and export.
- Two Mermaid diagrams and three YAML documents parsed successfully.
- The STE linter reported no errors. Dictionary compliance was not checked.

The dependency audit reported zero production vulnerabilities.
It reported five high-severity entries in the development lint dependency chain through `braces`.
The suggested automatic fix downgrades Next.js lint configuration across major versions. That downgrade was not applied.
The affected tooling processes repository patterns, not public application input. Review a compatible upstream fix before you accept untrusted patterns.

The initial Vercel deployment passed all four public guest browser tests.
That run used source commit `e4d8b6b9ea8316f9172c11595a13b2f1d0a07fc3` and deployment `dpl_CuEWetvQDTdwH6LAfPsVhDDAH9az`.
Both GitHub CI runs and the Vercel build passed for that commit.
The public tests cover the full guest workflow, mobile controls, light and dark accessibility, and private API denial.
The release still needs email delivery acceptance and optional image-provider activation.

Run the following commands on the exact release head:

```sh
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Attach command results or GitHub Actions links before a merge.
Do not mark a row as passed from source inspection alone.
The automated unit and browser suites use isolated fixtures and fake provider responses.
The separate hosted provider acceptance script makes an explicitly approved live request.

## Browser acceptance

| Scenario | Expected result |
| --- | --- |
| India with ₹50 | The app suggests free actions when no eligible product fits. |
| ₹1,500 upgrade with owned equipment | Owned categories stay outside the product subtotal. |
| India to Germany | Product country and currency change together. |
| Budget decrease | The plan recalculates within the selected reserve. |
| Product inspection | Marker and product row open the same product details. |
| Product removal | The row, marker, and cost disappear together. |
| Product swap | The app enforces budget and room constraints. |
| Photo upload | Raster formats work; unsupported or oversized files explain recovery. |
| Phone camera unavailable | The file upload remains usable. |
| Cloud unavailable | The editor and text export remain usable. |
| Image provider inactive | The interface states that AI previews are not active. |
| Keyboard use | Controls, dialogs, marker positions, and navigation remain accessible. |
| Light and dark modes | Text, button contrast, and focus remain readable. |
| Phone layout | Content has no horizontal overflow and controls have usable touch areas. |

Capture desktop and phone screenshots in `docs/screenshots` from the verified interface.
Use an illustrative or test image. Do not expose a private room photo.

## Production acceptance

Record the public URL, deployment ID, source SHA, timestamp, and checks after deployment.
Verify page load, market changes, budget changes, product links, photo upload, export, and inactive-service messages.
Verify account flows separately after mail activation.
Verify AI output separately after provider approval and activation.

## Documentation checks

The release needs a Mermaid parser check and YAML parse checks.
Run the STE linter on prose documents. Review technical-name warnings manually.
The skill does not include the approved ASD dictionary, so this check does not prove formal STE compliance.
