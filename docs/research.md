# Desk planner research

Research date: 16 October 2026. The first market is India. The United States and Germany have separate local catalog entries.

## Product model

The first release helps a person improve a desk within a fixed budget. The person can keep their equipment.
The result combines a visual plan, an item list, a cost estimate, and links to local retailers.
Each product marker must resolve to a catalog item or an item that the user owns.
An illustration must say that it is a concept. The illustration cannot imply an exact match to a retail product.

Use a responsive web app with a home screen icon. An iPhone user can upload a photo or use the camera.
The camera path needs HTTPS and browser permission. A file upload must remain available when camera access fails.

The photo can contain private room details. Explain image use before upload. Let the user remove the image and delete the plan.
Do not infer room dimensions, medical conditions, brand identity, or electrical safety from one photo.
Ask the user to confirm dimensions. Ask which items the user will keep.

## First-release scenarios

1. A person has a monitor, keyboard, and mouse. A ₹1,500 budget adds small improvements without replacement electronics.

2. A student has ₹50. The plan gives free actions because the checked catalog has no product below ₹60.

3. A renter cannot drill the wall. The plan excludes a wall pegboard unless the user selects a suitable alternative mount.

4. A person has windows behind the monitor. The plan first changes the desk direction or suggests adjustable shades.

5. A person repeatedly loses plants. The plan checks daylight and care habits before it suggests a live plant.

6. A person needs a complete setup within ₹20,000. The plan identifies missing essentials if the catalog cannot fit the budget.

7. A person changes India to Germany. The app uses local products with local prices.

8. A person removes a monitor. The product total decreases, and the visual marker disappears.

9. A person swaps a lamp. The app includes a compatible bulb when the lamp price excludes it.

10. A person keeps an existing desk. The plan checks surface size and clamp compatibility before it suggests an accessory.

The scenarios are product inferences from the user instructions and the sources below. They are not a statistical market survey.

## Evidence for comfort guidance

### Monitor position

OSHA gives a typical distance of 50–100 cm between the eyes and the screen. The screen top stays at or below eye level.
OSHA also recommends a monitor at right angles to a window. Text size and personal comfort affect the final position.
Use these values as adjustable guidance. Do not infer a correct height from an uncalibrated photo.

Source: [OSHA monitor guidance](https://www.osha.gov/etools/computer-workstations/components/monitors).

### Daylight and lamps

OSHA recommends controls for glare from windows, ceiling lights, and desk lamps. Blinds can admit daylight without direct glare.
Direct a task lamp toward the task surface. Keep reflections away from the screen and avoid strong light in the sight line.
The app can ask whether glare occurs in the morning, afternoon, or evening. One photo cannot show the full daily pattern.

Source: [OSHA workstation environment](https://www.osha.gov/etools/computer-workstations/workstation-environment).

### Screen breaks and eye claims

The American Academy of Ophthalmology recommends regular screen breaks. Its advice includes a distant view for 20 seconds every 20 minutes.
The Academy does not recommend special blue-light eyewear for computer use. Do not claim that a product prevents eye disease.
Use comfort guidance without a medical score or a promise of health improvement.

Sources: [AAO blue-light guidance](https://aao.org/eye-health/tips-prevention/should-you-be-worried-about-blue-light), [AAO device guidance](https://aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain).

### Plant position and care

RHS recommends plants that suit the actual light, humidity, and temperature. Direct summer sun can damage leaves.
RHS also notes that light decreases away from windows. Ordinary room light does not replace suitable light for plant growth.

University of Maryland Extension recommends water based on plant need rather than a fixed schedule.
Use a care check with soil condition and drainage. Do not display a fixed water schedule as universally correct.

Sources: [RHS plant selection](https://www.rhs.org.uk/plants/types/houseplants/choosing-the-best), [Maryland Extension water guidance](https://extension.umd.edu/resource/watering-indoor-plants).

A plant can suit the appearance of a desk. Do not claim that a few desk plants clean room air or improve productivity.
Research from Drexel questions air-cleaning claims for ordinary potted plants in real rooms.

Source: [Drexel research release](https://sciencesources.eurekalert.org/news-releases/751213).

Ask about pets before a live plant recommendation. Check the exact species rather than a common name alone.
The ASPCA species page lists Chlorophytum comosum as non-toxic to dogs and cats. Non-toxic does not mean edible.

Source: [ASPCA spider plant record](https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/spider-plant).

## User problems from public discussion

An Indian student described a cramped desk, poor light, limited money, and one available power socket.
The same person wanted small improvements while they kept their equipment. The problem supports a workflow that preserves owned items.

Source: [Student desk discussion](https://www.reddit.com/r/desksetup/comments/1rwadq8/rate_my_budget_setup_student_india_looking_for/).

A developer in India asked how to divide ₹40,000 among furniture, a monitor, and accessories.
The developer gave comfort a higher priority than RGB light. The product needs a clear choice of budget priorities.

Source: [Developer setup discussion](https://www.reddit.com/r/india/comments/1u20fkv/building_a_complete_wfh_setup_for_a_developer/).

A desk user described glare with a window behind the chair. The position of a window can constrain an otherwise attractive layout.

Source: [Window glare discussion](https://www.reddit.com/r/desksetup/comments/nppadw).

The posts describe personal problems. They do not prove frequency, market size, product quality, or a clinical effect.

An official IKEA video gives examples of a small office layout. Its older product selection does not establish current prices.
The research found the video listing. The research did not watch the complete video.

Reference: [IKEA small office video](https://www.youtube.com/watch?v=Os2dalbLIzI).

## Catalog rules

The JSON file contains real products from official manufacturer or retailer pages. The research does not check a completed order.
All prices are reference prices observed in retrieved web content. They are not live checkout quotes.
The app must display the check date and a link to the retailer. Delivery charges and local availability can change the final cost.

Do not label a product as in stock without a current stock response for the user location.
Do not describe the lowest listed price as the lowest market price. The research did not compare every seller.

The Dell price came from an older indexed snapshot. Label its freshness as uncertain or exclude it from a strict current-price budget.
The Logitech India pages did not expose prices. Keep those prices null. Exclude null-price products from a guaranteed budget total.
Do not turn a missing price into zero.

India prices include tax where the source states this. Germany prices include VAT but exclude delivery or collection charges.
United States prices do not establish the final sales tax. A plan total excludes extra costs until the retailer confirms them.

The catalog has no image redistribution license. The JSON leaves image URLs empty until asset rights or retailer terms permit use.
Use original product illustrations or link to the retailer page. Do not call a concept illustration an exact product photo.

## Compatibility checks

- The `LAGKAPTEN/ADILS` page says the desk is not suitable for a screen stand installation. Exclude clamp monitor arms.

- The `LAGKAPTEN/ADILS` page states a 50 kg distributed limit. The page also limits concentrated weight to 15 kg on a small area.

- ELLOVEN is 47 cm wide, 26 cm deep, and 10 cm high. Its stated maximum load is 20 kg.

- A riser can raise a screen too far. Ask the user to check eye height before the plan adds one.

- The SVALLET lamp needs an E14 bulb. The TERTIAL lamp needs an E27 bulb. Their listed prices exclude bulbs.

- The SKÅDIS pegboard needs suitable fixings. Its accessories and wall screws are separate products.

- SUNNERSTA is a container, not a plant pot with verified drainage. Do not recommend it as a sealed live-plant container.

- The MARKUS chair has a 110 kg tested load. A person still needs to assess fit and adjustment range.

- A 90×40 cm mat occupies most of a shallow desk. Compare product dimensions with the usable surface first.

The catalog product URLs support these checks. Product instructions take precedence over a visual layout.

## Scope and acceptance checks

The first release needs a small, maintained catalog. A free app can give a visual plan without a claim of universal product coverage.
Image generation needs an active model provider and a cost policy. Show an unavailable state when the provider cannot serve the request.
Keep the plan editor usable without image generation. A clear spatial board can support real products and a real budget.

Acceptance checks:

- Keep owned items outside the subtotal for new items.

- Exclude products from the wrong country.

- Stop a swap that exceeds a strict budget, or ask the user to revise the plan.

- Show price unknown when the source has no price.

- Save and reopen a plan without a change to its selected items.

- Resolve every selected marker to its product details.

- Remove the marker and product cost together.

- Preserve the original photo when a generated concept fails.

- Make every action available with a keyboard.

- Avoid a claim of exact room fit without dimensions.

Later features include live retail feeds, price alerts, exact product segmentation, AR dimensions, native mobile apps, and multiple seller comparisons.
Later work also needs retailer image rights and a clear affiliate disclosure if referral revenue starts.

## Verification record

The research used public web search and official source pages. The research created no account and made no payment.
The research did not accept provider terms, confirm stock by postal code, or test checkout.
The STE linter checks prose mechanics. The linter does not include the approved ASD dictionary.
