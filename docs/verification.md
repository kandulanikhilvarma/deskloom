# Release verification record

The release record separates source implementation, automated checks, provider acceptance, and public activation.
An implemented route does not establish a successful live integration.

## Activation status

| Area | Current evidence | Next check |
| --- | --- | --- |
| GitHub | Public repository and Apache-2.0 base exist. | Publish the verified release through a pull request. |
| Vercel | The Deskloom project exists. | Deploy the verified source commit and check its public flows. |
| Neon | Readback confirmed both production tables. Vercel accepted the encrypted variables. | Verify the deployed server connection. |
| Private plans | Isolated Neon accounts passed signup, photo save, restore, sign-out, sign-in, isolation, and deletion. | Check public deployment access. |
| Verification email | Neon permits signup without email verification by default. | Configure verification, then receive a real code before a claim of verified email ownership. |
| Password recovery | Application code needs browser acceptance. | Complete the email link and new-password flow. |
| Image provider | Optional route exists; activation remains disabled. | Get cost approval, configure a key, and verify one approved request. |
| Checkout and stock | No checkout or live inventory integration exists. | Users must confirm the final order on the retailer site. |

## Required automated checks

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

These results do not establish successful production activation.

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
Tests use isolated fixtures and fake stores. They make no paid image requests.

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
