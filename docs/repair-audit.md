# Visual setup and catalog repair

Audit date: 18 October 2026.

## Confirmed defects

| Priority | Defect | Cause | Repair |
| --- | --- | --- | --- |
| P1 | All directions showed one room image. | The scene always used `desk-inspiration.png`. | Each direction has its own room concept and generated-image slot. |
| P1 | Numbers appeared over unrelated objects. | Category coordinates created automatic pins on every photo. | Concepts have no product pins. Original photos have only user-placed pins. The Products view numbers actual product photos. |
| P1 | Germany had almost no choices. | The German catalog contained three accessory records. | It now contains 22 records, including three desks, three monitors, three keyboards, and three mice. |
| P1 | A product link opened a general catalog. | The old E14 bulb page returned HTTP 200 with no product identity. | The bulb now has a current product page, photo, and pack price. |
| P1 | Product photos were absent. | Records had null image fields; the interface used category icons. | The interface uses retailer and manufacturer product photos. A failed image has an explicit unavailable state. |
| P2 | Some links named the wrong destination retailer. | The button used the product brand as the retailer name. | The button uses the retailer field. |
| P2 | Two low-budget directions selected the same products. | Every direction permitted every category. | The focus direction excludes decorative plant purchases. Preferred products take precedence when the budget permits. |
| P2 | Changing direction discarded a generated image. | One image state served every direction. | Three independent image slots preserve completed versions. Changes to the plan clear stale results. |

## Link and image checks

The audit fetched all 36 original destinations and inspected their titles, redirects, product data, and photo metadata.
HTTP 200 alone did not count as a valid product page.
The audit found a general-catalog response for the old bulb URL and a blocked MUJI page.
The MUJI record remains for old saved-plan compatibility but stays out of selectable catalogs and automatic plans.

New catalog references come from the local IKEA, Dell, and Logitech product pages.
The catalog has 67 records: 31 India, 22 Germany, and 14 United States.
There are 66 product photos. The blocked record has no photo.
German keyboard photos use German layouts where the manufacturer supplies them.
Final stock, delivery, and checkout prices still depend on the retailer and the user's location.

## Preview boundaries

Room concepts show different furniture materials, screen arrangements, and lighting.
They are style references. Their labels do not claim a budget-specific render or exact product identity.
The Products view shows the exact selected model photos and local purchase links.
The original photo does not receive automatic object matches.

Live room edits use the user's room as the first reference image.
Up to eight canonical catalog product photos follow it as appearance references.
The server rejects unknown product IDs. It does not accept arbitrary product-image URLs from the browser.
The prompt preserves the room geometry and asks for the selected products without extra expensive equipment.
An AI image can still approximate product geometry. Exact product photos remain available for purchase decisions.

The owner approved image-generation costs without a monthly cap and explicitly approved Deskloom OIDC authentication.
The application retains a three-request daily account limit and duplicate-request protection.
Preview accounts use the isolated verification branch.

## Verification

The focused local browser run passed eight tests.
It checked three distinct scene sources, no automatic photo pins, German product photos and links, swaps, mobile layout, and light and dark accessibility.
Unit, build, hosted-provider, and deployment results belong in the final release evidence.
