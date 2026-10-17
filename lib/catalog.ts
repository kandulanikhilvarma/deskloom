export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  market: 'IN' | 'US' | 'DE';
  currency: 'INR' | 'USD' | 'EUR';
  price: number | null;
  url: string;
  description: string;
  tags: string[];
  notes: string[];
  checkedAt: string;
  priceFreshness: string;
  priceStatus?: 'reference' | 'unknown';
  stockStatus?: 'unverified' | 'unavailable';
  regularPrice?: number;
  imageUrl?: string | null;
  dimensions?: Record<string, number>;
  dims?: Record<string, number>;
  material?: string;
  specifications?: Record<string, string | number | boolean | string[]>;
  specs?: Record<string, string | number | boolean | string[]>;
  retailer?: string;
  priceSourceUrl?: string;
  sourceUrls?: string[];
  tier?: 'budget' | 'mid' | 'premium';
  recommendedModes?: ('calm' | 'focus' | 'studio')[];
  requiresProductIds?: string[];
  coversCategories?: string[];
};

export const products: Product[] = [
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-sunnersta",
    "name": "SUNNERSTA container, white",
    "brand": "IKEA",
    "category": "storage",
    "market": "IN",
    "currency": "INR",
    "price": 60,
    "url": "https://www.ikea.com/in/en/p/sunnersta-container-white-30303736/",
    "description": "A small container for pens and desk accessories.",
    "dimensions": {
      "widthCm": 12,
      "depthCm": 11,
      "heightCm": 13
    },
    "material": "Polypropylene",
    "tags": [
      "small-space",
      "budget",
      "white"
    ],
    "notes": [
      "Not a verified live-plant pot.",
      "Rail is separate when used as a hanging container."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-rabalder",
    "name": "RABALDER cable tidy, 5 m",
    "brand": "IKEA",
    "category": "cable",
    "market": "IN",
    "currency": "INR",
    "price": 249,
    "url": "https://www.ikea.com/in/en/p/rabalder-cable-tidy-white-00281420/",
    "description": "A cut-to-length sleeve for grouped cables.",
    "material": "Polyethylene",
    "tags": [
      "budget",
      "white",
      "no-drill"
    ],
    "notes": [
      "Includes five cable ties.",
      "Check cable bend radius and equipment ventilation."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-svallet",
    "name": "SVALLET work lamp",
    "brand": "IKEA",
    "category": "lighting",
    "market": "IN",
    "currency": "INR",
    "price": 449,
    "url": "https://www.ikea.com/in/en/p/svallet-work-lamp-dark-grey-white-50358493/",
    "description": "A compact lamp with directed task light.",
    "material": "Polypropylene",
    "tags": [
      "budget",
      "minimal",
      "grey"
    ],
    "notes": [
      "E14 bulb sold separately.",
      "The lamp subtotal excludes the bulb."
    ],
    "requiresProductIds": [
      "in-solhetta-e14"
    ],
    "recommendedModes": [
      "calm",
      "focus"
    ],
    "tier": "budget"
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-tertial",
    "name": "TERTIAL work lamp, dark grey",
    "brand": "IKEA",
    "category": "lighting",
    "market": "IN",
    "currency": "INR",
    "price": 1490,
    "url": "https://www.ikea.com/in/en/p/tertial-work-lamp-dark-grey-20450803/",
    "description": "A steel task lamp with an adjustable arm and head.",
    "material": "Powder-coated steel",
    "tags": [
      "adjustable",
      "dark",
      "industrial"
    ],
    "notes": [
      "E27 bulb sold separately.",
      "Check the mount and desk edge before purchase."
    ],
    "requiresProductIds": [
      "in-knoppslinga-e27"
    ],
    "recommendedModes": [
      "studio"
    ],
    "tier": "mid"
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-elloven",
    "name": "ELLOVEN monitor stand with drawer",
    "brand": "IKEA",
    "category": "stand",
    "market": "IN",
    "currency": "INR",
    "price": 1990,
    "url": "https://www.ikea.com/in/en/p/elloven-monitor-stand-with-drawer-white-80474783/",
    "description": "A white monitor riser with a bamboo drawer.",
    "dimensions": {
      "widthCm": 47,
      "depthCm": 26,
      "heightCm": 10,
      "maxLoadKg": 20
    },
    "material": "Steel, bamboo, and fibreboard",
    "tags": [
      "white",
      "natural",
      "storage"
    ],
    "notes": [
      "Check eye height before a riser raises the monitor.",
      "Use the manufacturer load and surface limits."
    ],
    "recommendedModes": [
      "calm",
      "studio"
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-skadis",
    "name": "SKÅDIS pegboard, white, 56×56 cm",
    "brand": "IKEA",
    "category": "storage",
    "market": "IN",
    "currency": "INR",
    "price": 1700,
    "url": "https://www.ikea.com/in/en/p/skadis-pegboard-white-30320806/",
    "description": "A wall board for compatible hooks, shelves, and containers.",
    "dimensions": {
      "widthCm": 56,
      "heightCm": 56
    },
    "material": "Painted fibreboard",
    "tags": [
      "white",
      "wall",
      "small-space"
    ],
    "notes": [
      "Accessories and wall screws sold separately.",
      "Use suitable wall fixings.",
      "Exclude this wall mount when the user cannot drill."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-markus",
    "name": "MARKUS office chair, Vissle dark grey",
    "brand": "IKEA",
    "category": "chair",
    "market": "IN",
    "currency": "INR",
    "price": 17990,
    "url": "https://www.ikea.com/in/en/p/markus-office-chair-vissle-dark-grey-50261151/",
    "description": "An office chair with a mesh back and adjustable tilt tension.",
    "dimensions": {
      "widthCm": 62,
      "depthCm": 60,
      "minSeatHeightCm": 46,
      "maxSeatHeightCm": 57,
      "maxLoadKg": 110
    },
    "material": "Steel frame, textile seat, and mesh back",
    "tags": [
      "dark",
      "comfort"
    ],
    "notes": [
      "Tested for 110 kg.",
      "Assess personal fit before purchase.",
      "Delivery and assembly are separate."
    ],
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium"
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-lagkapten",
    "name": "LAGKAPTEN / ADILS desk, white, 120×60 cm",
    "brand": "IKEA",
    "category": "desk",
    "market": "IN",
    "currency": "INR",
    "price": 4990,
    "url": "https://www.ikea.com/in/en/p/lagkapten-adils-desk-white-s09416759/",
    "description": "A light desk with a hollow-core top and steel legs.",
    "dimensions": {
      "widthCm": 120,
      "depthCm": 60,
      "heightCm": 73,
      "maxLoadKg": 50
    },
    "material": "Fibreboard and particleboard with honeycomb paper filling; steel legs",
    "tags": [
      "white",
      "budget",
      "minimal"
    ],
    "notes": [
      "The manufacturer says it is not suitable for a screen stand installation.",
      "Do not recommend a clamp monitor arm.",
      "Maximum concentrated weight is 15 kg on a small surface."
    ],
    "recommendedModes": [
      "focus"
    ],
    "tier": "budget"
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-lanespelare",
    "name": "LÅNESPELARE mouse pad, black, 90×40 cm",
    "brand": "IKEA",
    "category": "mat",
    "market": "IN",
    "currency": "INR",
    "price": 1190,
    "url": "https://www.ikea.com/in/en/p/lanespelare-gaming-mouse-pad-black-60498389/",
    "description": "A wide mat for a keyboard and mouse.",
    "dimensions": {
      "widthCm": 90,
      "depthCm": 40,
      "thicknessMm": 4
    },
    "material": "Polyester and natural rubber",
    "tags": [
      "dark",
      "large",
      "gaming"
    ],
    "notes": [
      "Check usable desk size.",
      "The manufacturer says to keep it out of direct sunlight."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-fejka",
    "name": "FEJKA artificial plant, plantain lily, 9 cm",
    "brand": "IKEA",
    "category": "plant",
    "market": "IN",
    "currency": "INR",
    "price": 349,
    "regularPrice": 449,
    "url": "https://www.ikea.com/in/en/p/fejka-artificial-potted-plant-in-outdoor-plantain-lily-00610746/",
    "description": "An artificial plant for a space without suitable plant light.",
    "dimensions": {
      "potDiameterCm": 9,
      "heightCm": 21
    },
    "material": "Plastic",
    "tags": [
      "green",
      "low-maintenance",
      "no-daylight"
    ],
    "notes": [
      "Artificial plant.",
      "No air quality or health claim.",
      "Observed sale price can expire."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "uncertain",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-dell-p2425h",
    "name": "Dell Pro 24 Plus Monitor P2425H",
    "brand": "Dell",
    "category": "monitor",
    "market": "IN",
    "currency": "INR",
    "price": 16199,
    "url": "https://www.dell.com/en-in/shop/dell-pro-24-plus-monitor-p2425h/apd/210-bmlz/",
    "description": "A 23.8-inch flat IPS screen with height, tilt, swivel, and pivot adjustment.",
    "specifications": {
      "diagonalInch": 23.8,
      "resolution": "1920×1080",
      "refreshHz": 100,
      "shape": "flat",
      "panel": "IPS",
      "ports": [
        "HDMI 1.4",
        "DisplayPort 1.2",
        "VGA",
        "USB-B upstream",
        "USB-A downstream",
        "USB-C downstream, data only, up to 15 W"
      ]
    },
    "tags": [
      "adjustable",
      "work",
      "flat"
    ],
    "notes": [
      "Price came from an older indexed page snapshot.",
      "Verify the current retailer price before a strict budget includes it.",
      "The USB-C downstream port is not a laptop video input."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "unknown",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-m240",
    "name": "M240 Silent Bluetooth Mouse",
    "brand": "Logitech",
    "category": "mouse",
    "market": "IN",
    "currency": "INR",
    "price": null,
    "url": "https://www.logitech.com/en-in/shop/p/m240-silent-bluetooth-mouse",
    "description": "A compact Bluetooth mouse for left- or right-handed use.",
    "specifications": {
      "connection": "Bluetooth",
      "battery": "One AA battery"
    },
    "tags": [
      "wireless",
      "compact",
      "quiet"
    ],
    "notes": [
      "The India source did not expose a price.",
      "Exclude this item from a strict known-price total.",
      "Check Bluetooth support on the computer."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "unknown",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-mk235",
    "name": "MK235 wireless keyboard and mouse combo",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "IN",
    "currency": "INR",
    "price": null,
    "url": "https://www.logitech.com/en-in/shop/p/mk235-durable-keyboard-mouse",
    "description": "A full-size wireless keyboard with a mouse and USB receiver.",
    "specifications": {
      "connection": "Wireless USB receiver",
      "layout": "Full size with number pad"
    },
    "tags": [
      "wireless",
      "full-size",
      "work"
    ],
    "notes": [
      "The India source did not expose a price.",
      "The mouse is included; do not also budget for a duplicate mouse.",
      "Check the receiver port and local keyboard layout."
    ],
    "coversCategories": [
      "keyboard",
      "mouse"
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "us-elloven",
    "name": "ELLOVEN monitor stand with drawer, white",
    "brand": "IKEA",
    "category": "stand",
    "market": "US",
    "currency": "USD",
    "price": 29.99,
    "url": "https://www.ikea.com/us/en/p/elloven-monitor-stand-with-drawer-white-50474770/",
    "description": "A monitor riser with a bamboo drawer.",
    "dimensions": {
      "widthCm": 47,
      "depthCm": 26,
      "heightCm": 10,
      "maxLoadKg": 20
    },
    "material": "Steel and bamboo",
    "tags": [
      "white",
      "natural",
      "storage"
    ],
    "notes": [
      "Final tax and delivery are unknown.",
      "Check eye height before use."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "us-m240",
    "name": "M240 Silent Bluetooth Mouse",
    "brand": "Logitech",
    "category": "mouse",
    "market": "US",
    "currency": "USD",
    "price": 18.99,
    "regularPrice": 22.99,
    "url": "https://www.logitech.com/en-us/shop/p/m240-silent-bluetooth-mouse",
    "description": "A compact Bluetooth mouse with quiet buttons.",
    "specifications": {
      "connection": "Bluetooth",
      "battery": "One AA battery"
    },
    "tags": [
      "wireless",
      "compact",
      "quiet"
    ],
    "notes": [
      "Observed sale price can expire.",
      "Final tax and delivery are unknown."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "us-rissla",
    "name": "RISSLA desk pad, black",
    "brand": "IKEA",
    "category": "mat",
    "market": "US",
    "currency": "USD",
    "price": 41.99,
    "url": "https://www.ikea.com/us/en/p/rissla-desk-pad-black-40246156/",
    "description": "A desk pad with a bent front edge.",
    "material": "Polyurethane, polypropylene, paper, and steel",
    "tags": [
      "dark",
      "minimal"
    ],
    "notes": [
      "Final tax and delivery are unknown.",
      "Check desk size before purchase."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "de-elloven",
    "name": "ELLOVEN monitor stand with drawer, white",
    "brand": "IKEA",
    "category": "stand",
    "market": "DE",
    "currency": "EUR",
    "price": 24.99,
    "url": "https://www.ikea.com/de/de/p/elloven-monitorerhoehung-mit-schublade-weiss-50474770/",
    "description": "A white monitor riser with a bamboo drawer.",
    "dimensions": {
      "widthCm": 47,
      "depthCm": 26,
      "heightCm": 10,
      "maxLoadKg": 20
    },
    "material": "Steel and bamboo",
    "tags": [
      "white",
      "natural",
      "storage"
    ],
    "notes": [
      "German listing; availability elsewhere in the EU is not verified.",
      "VAT is included; delivery or collection costs are separate.",
      "Check eye height before use."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "de-tertial",
    "name": "TERTIAL work lamp, white",
    "brand": "IKEA",
    "category": "lighting",
    "market": "DE",
    "currency": "EUR",
    "price": 14.99,
    "url": "https://www.ikea.com/de/de/p/tertial-arbeitsleuchte-weiss-70355455/",
    "description": "A steel task lamp with an adjustable arm and head.",
    "material": "Powder-coated steel",
    "specifications": {
      "bulbSocket": "E27",
      "maxBulbWatts": 13,
      "maxClampMm": 60
    },
    "tags": [
      "white",
      "adjustable",
      "industrial"
    ],
    "notes": [
      "E27 bulb sold separately.",
      "VAT is included; delivery or collection costs are separate.",
      "German listing; availability elsewhere in the EU is not verified."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "de-sunnersta",
    "name": "SUNNERSTA container, blue-grey",
    "brand": "IKEA",
    "category": "storage",
    "market": "DE",
    "currency": "EUR",
    "price": 1,
    "url": "https://www.ikea.com/de/de/p/sunnersta-behaelter-blaugrau-30606050/",
    "description": "A small container for desk accessories.",
    "dimensions": {
      "widthCm": 12,
      "depthCm": 11,
      "heightCm": 13
    },
    "material": "Polypropylene",
    "tags": [
      "budget",
      "small-space",
      "blue-grey"
    ],
    "notes": [
      "VAT is included; delivery or collection costs are separate.",
      "Not a verified live-plant pot.",
      "German listing; availability elsewhere in the EU is not verified."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-mk220",
    "name": "MK220 wireless keyboard and mouse combo",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "IN",
    "currency": "INR",
    "price": 1429,
    "retailer": "Croma",
    "priceSourceUrl": "https://www.croma.com/l/logitech-mx-keys-graphite-0akz00a.html",
    "url": "https://www.croma.com/logitech-mk220-wireless-keyboard-mouse-combo-upto-5-million-keystrokes-black-/p/169717",
    "description": "A compact keyboard and mouse set with one USB receiver.",
    "specifications": {
      "connection": "2.4 GHz wireless USB receiver",
      "layout": "Compact"
    },
    "tags": [
      "wireless",
      "compact",
      "budget",
      "dark"
    ],
    "coversCategories": [
      "keyboard",
      "mouse"
    ],
    "tier": "budget",
    "recommendedModes": [
      "focus"
    ],
    "notes": [
      "The mouse is included. Do not add a duplicate mouse.",
      "The source price comes from Croma's category page.",
      "Check the receiver port and local keyboard layout."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-hp230",
    "name": "HP 230 wireless mouse and keyboard combo",
    "brand": "HP",
    "category": "keyboard",
    "market": "IN",
    "currency": "INR",
    "price": 2295.01,
    "url": "https://www.hp.com/in-en/shop/products/accessories/hp-230-wireless-mouse-and-keyboard-combo-3l1f0aa-uuf",
    "description": "A white full-size keyboard and mouse set with a USB receiver.",
    "dimensions": {
      "widthCm": 44,
      "depthCm": 14.62,
      "heightCm": 2.76
    },
    "specifications": {
      "connection": "2.4 GHz wireless USB receiver",
      "layout": "Full size",
      "model": "3L1F0AA#UUF"
    },
    "tags": [
      "wireless",
      "white",
      "full-size",
      "quiet"
    ],
    "coversCategories": [
      "keyboard",
      "mouse"
    ],
    "tier": "mid",
    "recommendedModes": [
      "calm"
    ],
    "notes": [
      "The mouse is included. Do not add a duplicate mouse.",
      "The listed operating systems are Windows 10 and Windows 11.",
      "Check battery and receiver contents with HP."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-pebble-keys2",
    "name": "Pebble Keys 2 K380s keyboard, graphite",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "IN",
    "currency": "INR",
    "price": 3195,
    "retailer": "Croma",
    "priceSourceUrl": "https://www.croma.com/l/logitech-mx-keys-graphite-0akz00a.html",
    "url": "https://www.croma.com/logitech-pebble-keys-2-bluetooth-wireless-keyboard-with-multi-device-pairing-10-customizable-keys-tonal-graphite-/p/301491",
    "description": "A compact Bluetooth keyboard with three device profiles.",
    "specifications": {
      "connection": "Bluetooth",
      "layout": "Compact"
    },
    "tags": [
      "wireless",
      "compact",
      "quiet",
      "dark"
    ],
    "tier": "mid",
    "recommendedModes": [
      "calm",
      "focus"
    ],
    "notes": [
      "The source price comes from Croma's category page.",
      "Check the local keyboard layout.",
      "This item does not include a mouse."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-mxkeys-s",
    "name": "MX Keys S keyboard, graphite",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "IN",
    "currency": "INR",
    "price": 11995,
    "retailer": "Croma",
    "priceSourceUrl": "https://www.croma.com/l/logitech-mx-keys-graphite-0akz00a.html",
    "url": "https://www.croma.com/logitech-mx-keys-s-rechargeable-bluetooth-wireless-keyboard-with-backlit-keys-automate-repetitive-tasks-graphite-/p/302591",
    "description": "A rechargeable full-size keyboard with backlit keys and device switching.",
    "specifications": {
      "connection": "Bluetooth and Logi Bolt",
      "layout": "Full size",
      "power": "Rechargeable"
    },
    "tags": [
      "wireless",
      "premium",
      "dark",
      "backlit"
    ],
    "tier": "premium",
    "recommendedModes": [
      "studio"
    ],
    "notes": [
      "The source price comes from Croma's category page.",
      "Check the local keyboard layout and receiver contents.",
      "This is a keyboard, not the keyboard and mouse combo."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-lift",
    "name": "Lift vertical ergonomic mouse, graphite",
    "brand": "Logitech",
    "category": "mouse",
    "market": "IN",
    "currency": "INR",
    "price": 4995,
    "retailer": "VPLAK",
    "url": "https://www.vplak.com/logitech-lift-mouse-p11175",
    "sourceUrls": [
      "https://www.logitech.com/en-in/shop/p/lift-vertical-ergonomic-mouse"
    ],
    "description": "A vertical mouse with a thumb rest for small to medium hands.",
    "specifications": {
      "connection": "Bluetooth and Logi Bolt USB receiver",
      "battery": "One AA battery",
      "shape": "Vertical, 57 degrees"
    },
    "tags": [
      "wireless",
      "comfort",
      "vertical",
      "dark"
    ],
    "tier": "premium",
    "recommendedModes": [
      "focus"
    ],
    "notes": [
      "Try the shape and size before purchase if possible.",
      "Confirm the handed variant.",
      "The retailer quote excludes a postal-code delivery check.",
      "An ergonomic label does not establish personal fit or a medical benefit."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-mxmaster3s",
    "name": "MX Master 3S mouse, graphite",
    "brand": "Logitech",
    "category": "mouse",
    "market": "IN",
    "currency": "INR",
    "price": 7994,
    "retailer": "Croma",
    "priceSourceUrl": "https://www.croma.com/l/logitech-mx-keys-graphite-0akz00a.html",
    "url": "https://www.croma.com/logitech-mx-master-3s-rechargeable-bluetooth-wireless-laser-performance-mouse-with-thumb-wheel-8000-dpi-adjustable-multi-device-connectivity-graphite-/p/258454",
    "description": "A rechargeable contoured mouse with a thumb wheel and quiet buttons.",
    "specifications": {
      "connection": "Bluetooth and Logi Bolt USB receiver",
      "power": "Rechargeable",
      "maxDpi": 8000
    },
    "tags": [
      "wireless",
      "premium",
      "dark",
      "quiet"
    ],
    "tier": "premium",
    "recommendedModes": [
      "studio"
    ],
    "notes": [
      "The source price comes from Croma's category page.",
      "Check hand fit and handedness.",
      "An ergonomic shape does not establish a medical benefit."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-hp527pf",
    "name": "HP Series 5 Pro 27-inch monitor 527pf",
    "brand": "HP",
    "category": "monitor",
    "market": "IN",
    "currency": "INR",
    "price": 25569,
    "url": "https://www.hp.com/in-en/shop/products/monitors/hp-series-5-pro-27-inch-fhd-monitor-527pf-b28f5ut-acj",
    "description": "A 27-inch flat FHD monitor with an adjustable stand and USB hub.",
    "specifications": {
      "diagonalInch": 27,
      "resolution": "1920×1080",
      "refreshHz": 120,
      "panel": "IPS",
      "shape": "Flat",
      "adjustments": [
        "Height",
        "Tilt",
        "Swivel",
        "Pivot"
      ],
      "ports": [
        "HDMI",
        "DisplayPort",
        "USB hub"
      ],
      "model": "B28F5UT#ACJ"
    },
    "tags": [
      "premium",
      "work",
      "flat",
      "adjustable"
    ],
    "tier": "premium",
    "recommendedModes": [
      "focus",
      "studio"
    ],
    "notes": [
      "The screen is FHD, not 4K.",
      "Confirm laptop video ports and the required cable.",
      "Check the desired text size at your normal screen distance."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "unknown",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-samsung-s3-curved",
    "name": "Samsung Essential S3 27-inch curved monitor",
    "brand": "Samsung",
    "category": "monitor",
    "market": "IN",
    "currency": "INR",
    "price": null,
    "url": "https://www.samsung.com/in/monitors/curved/essential-monitor-s3-27-inch-100hz-ls27d368gawxxl/",
    "description": "A 27-inch FHD curved monitor with a 100 Hz refresh rate.",
    "specifications": {
      "diagonalInch": 27,
      "resolution": "1920×1080",
      "refreshHz": 100,
      "shape": "Curved",
      "curvatureR": 1800,
      "ports": [
        "HDMI",
        "D-sub"
      ],
      "model": "LS27D368GAWXXL"
    },
    "tags": [
      "curved",
      "dark",
      "gaming"
    ],
    "tier": "mid",
    "recommendedModes": [
      "studio"
    ],
    "notes": [
      "The India page contains invalid foreign-currency template prices.",
      "The India price is unknown. Exclude this item from automatic budget plans.",
      "Curve preference does not establish a health benefit."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-hp15",
    "name": "HP Laptop 15-fd0624TU",
    "brand": "HP",
    "category": "laptop",
    "market": "IN",
    "currency": "INR",
    "price": 64999,
    "url": "https://www.hp.com/in-en/shop/products/laptops/hp-laptop-15-fd0624tu-bv2w3pa-acj",
    "description": "A 15.6-inch Windows laptop with a Core i3 processor and 512 GB SSD.",
    "specifications": {
      "processor": "Intel Core i3-1315U",
      "memoryGb": 8,
      "storageGb": 512,
      "screenInch": 15.6,
      "resolution": "1920×1080",
      "os": "Windows 11 Home Single Language",
      "model": "BV2W3PA#ACJ"
    },
    "tags": [
      "work",
      "laptop",
      "windows"
    ],
    "tier": "mid",
    "recommendedModes": [
      "focus"
    ],
    "notes": [
      "The price excludes optional promo codes and bank offers.",
      "Check memory and performance needs for your work.",
      "A laptop purchase is optional when the user already owns a computer."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-muji-memo",
    "name": "Planting Tree Paper memo book",
    "brand": "MUJI",
    "category": "book",
    "market": "IN",
    "currency": "INR",
    "price": 120,
    "url": "https://muji.in/product/planting-tree-paper-memo-book-12059137",
    "description": "A narrow paper memo book for notes and daily tasks.",
    "dimensions": {
      "widthCm": 8.2,
      "heightCm": 18.5
    },
    "material": "Paper",
    "specifications": {
      "sheets": 40
    },
    "tags": [
      "budget",
      "natural",
      "paper"
    ],
    "tier": "budget",
    "recommendedModes": [
      "calm",
      "focus"
    ],
    "notes": [
      "Check the exact page style before purchase.",
      "The page has an unrelated apparel size table. Use the memo product dimensions only."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-billy",
    "name": "BILLY bookcase, white, 80×28×106 cm",
    "brand": "IKEA",
    "category": "shelf",
    "market": "IN",
    "currency": "INR",
    "price": 4990,
    "url": "https://www.ikea.com/in/en/p/billy-bookcase-white-70522044/",
    "description": "A low bookcase with two adjustable shelves.",
    "dimensions": {
      "widthCm": 80,
      "depthCm": 28,
      "heightCm": 106,
      "maxShelfLoadKg": 30
    },
    "material": "Particleboard, fibreboard, and paper foil",
    "tags": [
      "white",
      "storage",
      "wall"
    ],
    "tier": "mid",
    "recommendedModes": [
      "studio"
    ],
    "notes": [
      "Anchor the bookcase securely to a suitable wall to prevent a tip-over.",
      "Use suitable screws and plugs for the wall.",
      "Exclude this item when the user cannot anchor furniture.",
      "Delivery and assembly are separate."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-spider-plant",
    "name": "Spider plant with grow pot",
    "brand": "Ugaoo",
    "category": "plant",
    "market": "IN",
    "currency": "INR",
    "price": 299,
    "retailer": "Myntra; seller UGAOO AGRITECH PRIVATE LIMITED",
    "url": "https://www.myntra.com/live-plants/ugaoo/ugaoo-spider-plant-with-grow-pot---17-cm/24567196/buy",
    "description": "A small live plant for a spot with suitable indirect daylight.",
    "material": "Live plant and plastic grow pot",
    "specifications": {
      "species": "Confirm Chlorophytum comosum on the plant label",
      "light": "Bright indirect light",
      "water": "Check soil and plant condition; do not use a universal fixed schedule"
    },
    "sourceUrls": [
      "https://www.rhs.org.uk/plants/types/houseplants/choosing-the-best",
      "https://extension.umd.edu/resource/watering-indoor-plants",
      "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/spider-plant"
    ],
    "tags": [
      "green",
      "natural",
      "living",
      "needs-daylight"
    ],
    "tier": "budget",
    "recommendedModes": [
      "calm"
    ],
    "notes": [
      "Confirm the exact species on the plant label.",
      "ASPCA lists Chlorophytum comosum as non-toxic to cats and dogs. Keep plants out of chewing reach.",
      "Use a pot with drainage. Keep water away from electronics.",
      "The app does not adopt the seller's air-purifier or fixed watering claims.",
      "Check postal-code delivery and the live-plant return policy."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-knoppslinga-e27",
    "name": "KNOPPSLINGA E27 LED bulb, 600 lumen",
    "brand": "IKEA",
    "category": "bulb",
    "market": "IN",
    "currency": "INR",
    "price": 79,
    "url": "https://www.ikea.com/in/en/p/knoppslinga-led-bulb-e27-600-lumen-opal-white-20595448/",
    "description": "A non-dimmable E27 bulb with cool white light.",
    "specifications": {
      "socket": "E27",
      "lumens": 600,
      "temperatureK": 6500,
      "watts": 5,
      "packQuantity": 1,
      "dimmable": false
    },
    "tags": [
      "budget",
      "cool",
      "task-light"
    ],
    "tier": "budget",
    "recommendedModes": [
      "focus",
      "studio"
    ],
    "notes": [
      "Compatible socket for the catalog TERTIAL lamp.",
      "Cool white light is a preference, not a medical recommendation.",
      "Turn off power before bulb replacement."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-solhetta-e14",
    "name": "SOLHETTA E14 LED bulb, 250 lumen, 2-pack",
    "brand": "IKEA",
    "category": "bulb",
    "market": "IN",
    "currency": "INR",
    "price": 299,
    "url": "https://www.ikea.com/in/en/p/solhetta-led-bulb-e14-250-lumen-globe-opal-white-30498734/",
    "description": "Two non-dimmable E14 bulbs with warm white light.",
    "material": "Polycarbonate plastic",
    "specifications": {
      "socket": "E14",
      "lumens": 250,
      "temperatureK": 2700,
      "watts": 1.8,
      "packQuantity": 2,
      "dimmable": false
    },
    "tags": [
      "warm",
      "soft-light"
    ],
    "tier": "budget",
    "recommendedModes": [
      "calm"
    ],
    "notes": [
      "Compatible socket for the catalog SVALLET lamp.",
      "Budget the full two-pack price, not half the pack.",
      "Warm white light is a preference, not a medical recommendation.",
      "Turn off power before bulb replacement."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-stenerik",
    "name": "STENERIK laptop support",
    "brand": "IKEA",
    "category": "stand",
    "market": "IN",
    "currency": "INR",
    "price": 1390,
    "url": "https://www.ikea.com/in/en/p/stenerik-laptop-support-60564015/",
    "description": "A raised wood support for a laptop with space below.",
    "dimensions": {
      "widthCm": 26,
      "depthCm": 24,
      "heightCm": 14
    },
    "material": "Layer-glued wood veneer, fibreboard, laminate, and plywood",
    "tags": [
      "natural",
      "laptop-support",
      "compact"
    ],
    "tier": "mid",
    "recommendedModes": [
      "calm"
    ],
    "notes": [
      "Use a separate keyboard and mouse for a raised laptop.",
      "Check laptop size and support stability.",
      "Check screen height before use."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-trotten-adjustable",
    "name": "TROTTEN adjustable desk, white, 120×70 cm",
    "brand": "IKEA",
    "category": "desk",
    "market": "IN",
    "currency": "INR",
    "price": 17990,
    "url": "https://www.ikea.com/in/en/p/trotten-desk-sit-stand-white-s79429579/",
    "description": "A desk with a hand crank for seated and standing heights.",
    "dimensions": {
      "widthCm": 120,
      "depthCm": 70,
      "minHeightCm": 72,
      "maxHeightCm": 122,
      "maxLoadKg": 50
    },
    "material": "Particleboard with melamine foil, steel, and aluminium",
    "tags": [
      "white",
      "adjustable",
      "premium"
    ],
    "tier": "premium",
    "recommendedModes": [
      "focus",
      "studio"
    ],
    "notes": [
      "Allow cable slack across the full height range.",
      "Delivery and assembly are separate.",
      "Alternate positions for comfort; the desk does not establish a health benefit."
    ]
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": null,
    "id": "in-flintan",
    "name": "FLINTAN office chair, black",
    "brand": "IKEA",
    "category": "chair",
    "market": "IN",
    "currency": "INR",
    "price": 7990,
    "url": "https://www.ikea.com/in/en/p/flintan-office-chair-black-30489032/",
    "description": "A mesh office chair with a height-adjustable seat and removable cover.",
    "dimensions": {
      "widthCm": 71,
      "depthCm": 71,
      "minSeatHeightCm": 45,
      "maxSeatHeightCm": 58,
      "maxLoadKg": 110
    },
    "material": "Steel frame, textile seat, mesh, and wood veneer",
    "tags": [
      "dark",
      "comfort",
      "budget"
    ],
    "tier": "budget",
    "recommendedModes": [
      "focus"
    ],
    "notes": [
      "Tested for 110 kg.",
      "Armrests are an extra option.",
      "Assess personal fit before purchase.",
      "Delivery and assembly are separate."
    ]
  }
];
