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
  linkStatus?: 'verified' | 'unverified';
  verifiedTitle?: string;
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
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/sunnersta-container-white__0409165_pe601916_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "SUNNERSTA container, white, 12x11 cm (43/4x43/8\")  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/rabalder-cable-tidy-white__0275902_pe414011_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "RABALDER cable tidy, white, 5 m (16')  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/svallet-work-lamp-dark-grey-white__0703502_pe724751_s5.jpg",
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
    "tier": "budget",
    "linkStatus": "verified",
    "verifiedTitle": "SVALLET work lamp, dark grey/white  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/tertial-work-lamp-dark-grey__0609306_pe684440_s5.jpg",
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
    "tier": "mid",
    "linkStatus": "verified",
    "verifiedTitle": "TERTIAL Work lamp, dark grey  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/elloven-monitor-stand-with-drawer-white__0955984_pe804426_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "ELLOVEN monitor stand with drawer, white  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/skadis-pegboard-white__0710682_pe727708_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "SKÅDIS Pegboard, white. Get it here  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/markus-office-chair-vissle-dark-grey__0724714_pe734597_s5.jpg",
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
    "tier": "premium",
    "linkStatus": "verified",
    "verifiedTitle": "MARKUS Office chair, Vissle dark grey  - IKEA",
    "specifications": {
      "type": "High-back office chair"
    }
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/lagkapten-adils-desk-white__0977229_pe813472_s5.jpg",
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
    "tier": "budget",
    "linkStatus": "verified",
    "verifiedTitle": "LAGKAPTEN / ADILS desk, white, 120x60 cm (471/4x235/8\")  - IKEA",
    "specifications": {
      "type": "Fixed-height desk"
    }
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/lanespelare-gaming-mouse-pad-black__0961724_pe807730_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "LÅNESPELARE gaming mouse pad, black, 90x40 cm (35 ½x15 ¾\")  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/fejka-artificial-potted-plant-in-outdoor-plantain-lily__1467005_pe995611_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "FEJKA artificial potted plant, in/outdoor/plantain lily, 9 cm (3 ½\")  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "uncertain",
    "stockStatus": "unverified",
    "imageUrl": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/p-series/p2425h/mg/monitor-p2425h-black-gallery-1.psd?fmt=png-alpha&wid=1200&hei=630",
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
      ],
      "type": "Flat monitor"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "Dell Pro 24 Inch Plus Monitor P2425H - FHD IPS Display | Dell India"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "unknown",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m240/product-gallery/m240-mouse-top-view-off-white.png",
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
      "battery": "One AA battery",
      "type": "Compact silent mouse",
      "shape": "Compact, left- or right-handed"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "M240 Silent Bluetooth Mouse with Comfortable Shape"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "unknown",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/combos/mk235/gallery/mk235-gallery-01-new.png",
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
      "layout": "Full size with number pad",
      "type": "Keyboard and mouse combo"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "Logitech MK235 Durable Wireless Keyboard and Mouse Combo"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/elloven-monitor-stand-with-drawer-white__0955984_pe804426_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "ELLOVEN monitor stand with drawer, white  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m240/product-gallery/m240-mouse-top-view-off-white.png",
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
      "battery": "One AA battery",
      "type": "Compact silent mouse",
      "shape": "Compact, left- or right-handed"
    },
    "tags": [
      "wireless",
      "compact",
      "quiet"
    ],
    "notes": [
      "Observed sale price can expire.",
      "Final tax and delivery are unknown."
    ],
    "linkStatus": "verified",
    "verifiedTitle": "M240 Silent Bluetooth Mouse with Comfortable Shape"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/rissla-desk-pad-black__0715861_pe730632_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "RISSLA desk pad, black  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/elloven-monitorerhoehung-mit-schublade-weiss__0955984_pe804426_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "ELLOVEN Monitorerhöhung mit Schublade, weiß  - IKEA Deutschland"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/tertial-arbeitsleuchte-weiss__0609308_pe684439_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "TERTIAL Arbeitsleuchte, weiß  - IKEA Deutschland",
    "requiresProductIds": [
      "de-e27"
    ],
    "recommendedModes": [
      "focus"
    ]
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/sunnersta-behaelter-blaugrau__1391342_pe965754_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "SUNNERSTA Behälter, blaugrau, 12x11 cm  - IKEA Deutschland"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/169717_jffthy.png",
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
      "layout": "Compact",
      "type": "Keyboard and mouse combo"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "Buy logitech MK220 Wireless Keyboard & Mouse Combo (Upto 5 Million Keystrokes, Black) Online - Croma"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.hp.com/in-en/shop/media/catalog/product/2/1/21c1_-_hp_230_wireless_mouse_keyboard_combo_snow_white_wireless_top_view_led_on_87f2f41f-0fd8-4c2d-83f7-94e5eb63532c.png.png",
    "id": "in-hp230",
    "name": "HP 230 wireless keyboard and mouse combo, snow white",
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
      "model": "3L1F0AA#UUF",
      "type": "Keyboard and mouse combo"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "HP 230 Wireless Mouse and Keyboard Combo | HP Store India"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/301491_0_zezpny.png",
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
      "layout": "Compact",
      "type": "Compact keyboard",
      "size": "Compact, without number pad"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "Buy logitech Pebble Keys 2 Bluetooth Wireless Keyboard with Multi Device Pairing (10 Customizable Keys, Tonal Graphite) Online - Croma"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/302591_0_boeouv.png",
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
      "power": "Rechargeable",
      "type": "Full-size keyboard",
      "size": "Full size with number pad"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "Buy logitech MX KEYS S Rechargeable Bluetooth Wireless Keyboard with Backlit Keys (Automate Repetitive Tasks, Graphite) Online - Croma"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/lift-vertical-ergonomic-mouse/2026-update/gallery/graphite/lift-mouse-top-angle-graphite-gallery-1.png",
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
      "https://www.logitech.com/en-in/shop/p/lift-vertical-ergonomic-mouse",
      "https://www.logitech.com/de-de/shop/p/lift-vertical-ergonomic-mouse.910-006473"
    ],
    "description": "A vertical mouse with a thumb rest for small to medium hands.",
    "specifications": {
      "connection": "Bluetooth and Logi Bolt",
      "battery": "One AA battery",
      "shape": "Vertical, 57 degrees",
      "type": "Vertical mouse"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "Buy Logitech Lift wireless mouse Online in India at Lowest Price | VPLAK\n"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/258454_0_1bdnWCNcL.png?updatedAt=1758555097829",
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
      "maxDpi": 8000,
      "type": "Productivity mouse",
      "shape": "Contoured, right-handed",
      "scroll": "Main scroll wheel and thumb wheel"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "Buy logitech MX Master 3S Rechargeable Bluetooth Wireless Laser Performance Mouse with Thumb Wheel (8000 DPI Adjustable, Multi Device Connectivity, Graphite) Online - Croma"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.hp.com/in-en/shop/media/catalog/product/r/h/rhone_527pf_jetblack_catalog_whitebg_front_3229805.png",
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
      "model": "B28F5UT#ACJ",
      "type": "Flat monitor"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "HP Series 5 Pro 27 inch FHD Monitor  - 527pf | HP Store India"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "unknown",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://images.samsung.com/is/image/samsung/p6pim/in/ls27d368gawxxl/gallery/in-essential-s3-s36gd-y-ls27d368gawxxl-thumb-550433584",
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
      "model": "LS27D368GAWXXL",
      "type": "Curved monitor"
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "68.5 cm (27) FHD Curved Monitor with Game Mode | Samsung India"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.hp.com/in-en/shop/media/catalog/product/c/0/c08510542_1.png",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "HP Laptop 15-fd0624TU | HP Store India"
  },
  {
    "checkedAt": "2026-10-16",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unavailable",
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
      "The page has an unrelated apparel size table. Use the memo product dimensions only.",
      "The product page could not be verified on 18 October 2026. This item stays out of new plans."
    ],
    "linkStatus": "unverified"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/billy-bookcase-white__1590306_pe1038945_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "BILLY bookcase, white, 80x28x106 cm (311/2x11x413/4\")  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/24567196/2024/3/7/6985415a-de23-4b02-ba1b-b16dd3da82b51709788545437-UGAOO-Spider-Plant-With-Grow-Pot---17-cm-141709788545103-1.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "Buy UGAOO Spider Plant With Grow Pot   17 Cm  - Live Plants for Unisex 24567196 | Myntra"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/knoppslinga-led-bulb-e27-600-lumen-opal-white__1373562_pe960009_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "KNOPPSLINGA LED bulb E27 600 lumen, opal white, 6500 K  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/solhetta-led-bulb-e14-250-lumen-chandelier-clear__0989092_pe818356_s5.jpg",
    "id": "in-solhetta-e14",
    "name": "SOLHETTA E14 LED bulb, 250 lumen, chandelier clear, 2-pack",
    "brand": "IKEA",
    "category": "bulb",
    "market": "IN",
    "currency": "INR",
    "price": 229,
    "url": "https://www.ikea.com/in/en/p/solhetta-led-bulb-e14-250-lumen-chandelier-clear-10498773/",
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
      "E14 base. Price covers the full pack. Check lamp compatibility."
    ],
    "linkStatus": "verified",
    "verifiedTitle": "SOLHETTA LED bulb E14 250 lumen, chandelier/clear  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/stenerik-laptop-support__1187968_pe899291_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "STENERIK laptop support  - IKEA"
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/trotten-desk-sit-stand-white__1020756_pe831984_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "TROTTEN desk sit/stand, white, 120x70 cm (471/4x271/2\")  - IKEA",
    "specifications": {
      "type": "Height-adjustable desk"
    }
  },
  {
    "checkedAt": "2026-10-18",
    "priceStatus": "reference",
    "priceFreshness": "indexed-page",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/flintan-office-chair-black__1007236_pe825956_s5.jpg",
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
    ],
    "linkStatus": "verified",
    "verifiedTitle": "FLINTAN office chair, black  - IKEA",
    "specifications": {
      "type": "Mesh office chair"
    }
  },
  {
    "id": "de-lagkapten",
    "name": "LAGKAPTEN / ADILS Schreibtisch - Eicheneff wlas/weiß 120x60 cm",
    "brand": "IKEA",
    "category": "desk",
    "market": "DE",
    "currency": "EUR",
    "price": 39.99,
    "url": "https://www.ikea.com/de/de/p/lagkapten-adils-schreibtisch-eicheneff-wlas-weiss-s79416874/",
    "description": "IKEA desk from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/lagkapten-adils-schreibtisch-eicheneff-wlas-weiss__0977232_pe813475_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/lagkapten-adils-schreibtisch-eicheneff-wlas-weiss-s79416874/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/lagkapten-adils-schreibtisch-eicheneff-wlas-weiss-s79416874/",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "material": "Holz (inkl. Verbundmaterial), Metall",
    "linkStatus": "verified",
    "verifiedTitle": "LAGKAPTEN/ADILS Schreibtisch, Eiche/weiß, 120x60 cm  - IKEA Deutschland",
    "dimensions": {
      "widthCm": 120
    },
    "specifications": {
      "type": "Fixed-height desk"
    }
  },
  {
    "id": "de-trotten",
    "name": "TROTTEN Schreibtisch sitz/steh - elektrisch/weiß 120x70 cm",
    "brand": "IKEA",
    "category": "desk",
    "market": "DE",
    "currency": "EUR",
    "price": 179,
    "url": "https://www.ikea.com/de/de/p/trotten-schreibtisch-sitz-steh-elektrisch-weiss-s49621871/",
    "description": "IKEA desk from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/trotten-schreibtisch-sitz-steh-elektrisch-weiss__1517359_pe1012263_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/trotten-schreibtisch-sitz-steh-elektrisch-weiss-s49621871/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/trotten-schreibtisch-sitz-steh-elektrisch-weiss-s49621871/",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "linkStatus": "verified",
    "verifiedTitle": "TROTTEN Schreibtisch sitz/steh, elektrisch/weiß, 120x70 cm  - IKEA Deutschland",
    "dimensions": {
      "widthCm": 120
    },
    "specifications": {
      "type": "Height-adjustable desk"
    }
  },
  {
    "id": "de-mittzon",
    "name": "MITTZON Schreibtisch sitz/steh - elektrisch Nussbaumfurnier/schwarz 120x80 cm",
    "brand": "IKEA",
    "category": "desk",
    "market": "DE",
    "currency": "EUR",
    "price": 409,
    "url": "https://www.ikea.com/de/de/p/mittzon-schreibtisch-sitz-steh-elektrisch-nussbaumfurnier-schwarz-s09527903/",
    "description": "IKEA desk from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/mittzon-schreibtisch-sitz-steh-elektrisch-nussbaumfurnier-schwarz__1205829_pe907243_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/mittzon-schreibtisch-sitz-steh-elektrisch-nussbaumfurnier-schwarz-s09527903/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/mittzon-schreibtisch-sitz-steh-elektrisch-nussbaumfurnier-schwarz-s09527903/",
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium",
    "material": "Metall, Holzfurnier",
    "linkStatus": "verified",
    "verifiedTitle": "MITTZON Schreibtisch sitz/steh, elektrisch Nussbaumfurnier/schwarz, 120x80 cm  - IKEA Deutschland",
    "dimensions": {
      "widthCm": 120
    },
    "specifications": {
      "type": "Height-adjustable desk"
    }
  },
  {
    "id": "de-flintan",
    "name": "FLINTAN Drehstuhl - schwarz",
    "brand": "IKEA",
    "category": "chair",
    "market": "DE",
    "currency": "EUR",
    "price": 79.99,
    "url": "https://www.ikea.com/de/de/p/flintan-drehstuhl-schwarz-10489028/",
    "description": "IKEA chair from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/flintan-drehstuhl-schwarz__1007236_pe825956_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/flintan-drehstuhl-schwarz-10489028/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/flintan-drehstuhl-schwarz-10489028/",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "material": "Stoff",
    "linkStatus": "verified",
    "verifiedTitle": "FLINTAN Drehstuhl, schwarz  - IKEA Deutschland",
    "specifications": {
      "type": "Mesh office chair"
    }
  },
  {
    "id": "de-markus",
    "name": "MARKUS Drehstuhl - Vissle dunkelgrau Mittelgroß",
    "brand": "IKEA",
    "category": "chair",
    "market": "DE",
    "currency": "EUR",
    "price": null,
    "url": "https://www.ikea.com/de/de/p/markus-drehstuhl-vissle-dunkelgrau-70261150/",
    "description": "IKEA chair from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "unknown",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/markus-drehstuhl-vissle-dunkelgrau__0724714_pe734597_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/markus-drehstuhl-vissle-dunkelgrau-70261150/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/markus-drehstuhl-vissle-dunkelgrau-70261150/",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "material": "Stoff, Metall",
    "linkStatus": "verified",
    "verifiedTitle": "MARKUS Drehstuhl, Vissle dunkelgrau  - IKEA Deutschland",
    "specifications": {
      "type": "High-back office chair"
    }
  },
  {
    "id": "de-markus-light",
    "name": "MARKUS Drehstuhl - Vissle hellgrau Mittelgroß",
    "brand": "IKEA",
    "category": "chair",
    "market": "DE",
    "currency": "EUR",
    "price": null,
    "url": "https://www.ikea.com/de/de/p/markus-drehstuhl-vissle-hellgrau-10521858/",
    "description": "IKEA chair from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "unknown",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/markus-drehstuhl-vissle-hellgrau__1101440_pe866425_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/markus-drehstuhl-vissle-hellgrau-10521858/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/markus-drehstuhl-vissle-hellgrau-10521858/",
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium",
    "material": "Stoff, Metall",
    "linkStatus": "verified",
    "verifiedTitle": "MARKUS Drehstuhl, Vissle hellgrau  - IKEA Deutschland",
    "specifications": {
      "type": "High-back office chair"
    }
  },
  {
    "id": "de-s2725hsm",
    "name": "S2725HSM · 27-inch flat FHD monitor",
    "brand": "Dell",
    "category": "monitor",
    "market": "DE",
    "currency": "EUR",
    "price": 169,
    "url": "https://www.dell.com/de-de/shop/monitors/apd/dell-27-plus-monitor-s2725hsm/s2725hsm/-",
    "description": "A flat 27-inch FHD IPS monitor with a 144 Hz refresh rate and an adjustable stand.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/s-series/s2725hsm/media-gallery/monitor-dell-plus-s2725hsm-gy-gallery-1.psd?fmt=png-alpha&wid=1200&hei=630",
    "retailer": "Dell",
    "sourceUrls": [
      "https://www.dell.com/de-de/shop/monitors/apd/dell-27-plus-monitor-s2725hsm/s2725hsm/-",
      "https://www.dell.com/en-us/shop/monitors/apd/dell-27-plus-monitor-s2725hsm/s2725hsm/-"
    ],
    "priceSourceUrl": "https://www.dell.com/de-de/shop/monitors/apd/dell-27-plus-monitor-s2725hsm/s2725hsm/-",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "linkStatus": "verified",
    "verifiedTitle": "Dell Plus-68,58 cm (27\")-Monitor - S2725HSM | Dell Deutschland",
    "specifications": {
      "shape": "Flat rectangular",
      "model": "S2725HSM",
      "type": "Flat monitor",
      "diagonalInch": 27,
      "resolution": "1920 × 1080 (FHD)",
      "refreshHz": 144,
      "panel": "IPS",
      "ports": [
        "2 × HDMI 1.4"
      ],
      "adjustments": [
        "Height",
        "Tilt",
        "Swivel",
        "Pivot"
      ]
    }
  },
  {
    "id": "de-s3425dw",
    "name": "S3425DW · 34-inch curved ultrawide monitor",
    "brand": "Dell",
    "category": "monitor",
    "market": "DE",
    "currency": "EUR",
    "price": 409,
    "url": "https://www.dell.com/de-de/shop/monitors/apd/dell-34-plus-usbc-monitors3425dw/s3425dw_monitor/-",
    "description": "A curved 34-inch ultrawide VA monitor with a 120 Hz refresh rate and USB-C video input.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/s-series/s3425dw/media-gallery/monitor-s3425dw-gray-gallery-1.psd?fmt=jpg&wid=1200&hei=630",
    "retailer": "Dell",
    "sourceUrls": [
      "https://www.dell.com/de-de/shop/monitors/apd/dell-34-plus-usbc-monitors3425dw/s3425dw_monitor/-",
      "https://www.dell.com/en-us/shop/monitors/apd/dell-s-34-usb-c-monitor-s3425dw/s3425dw_monitor/-"
    ],
    "priceSourceUrl": "https://www.dell.com/de-de/shop/monitors/apd/dell-34-plus-usbc-monitors3425dw/s3425dw_monitor/-",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "linkStatus": "verified",
    "verifiedTitle": "Dell 34 Plus-USB-C-Monitor – S3425DW | Dell Deutschland",
    "specifications": {
      "shape": "Curved ultrawide",
      "model": "S3425DW",
      "type": "Curved monitor",
      "diagonalInch": 34,
      "resolution": "3440 × 1440 (ultrawide)",
      "refreshHz": 120,
      "panel": "VA",
      "ports": [
        "HDMI 2.1",
        "USB-C video and up to 65 W power delivery"
      ]
    }
  },
  {
    "id": "de-s2725qc",
    "name": "S2725QC · 27-inch flat 4K USB-C monitor",
    "brand": "Dell",
    "category": "monitor",
    "market": "DE",
    "currency": "EUR",
    "price": 379,
    "url": "https://www.dell.com/de-de/shop/monitors/apd/dell-27-plus-4k-usb-c-monitor-s2725qc/s2725qc_monitor/-",
    "description": "A flat 27-inch 4K monitor with a 120 Hz refresh rate and USB-C video input.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/s-series/s2725qc/media-gallery/monitor-s2725qc-gray-gallery-1.psd?fmt=png-alpha&wid=1200&hei=630",
    "retailer": "Dell",
    "sourceUrls": [
      "https://www.dell.com/de-de/shop/monitors/apd/dell-27-plus-4k-usb-c-monitor-s2725qc/s2725qc_monitor/-",
      "https://www.dell.com/en-us/shop/monitors/apd/dell-27-plus-4k-usbc-monitor-s2725qc/s2725qc_monitor/-"
    ],
    "priceSourceUrl": "https://www.dell.com/de-de/shop/monitors/apd/dell-27-plus-4k-usb-c-monitor-s2725qc/s2725qc_monitor/-",
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium",
    "linkStatus": "verified",
    "verifiedTitle": "Dell 27 Plus 4K USB-C-Monitor – S2725QC | Dell Deutschland",
    "specifications": {
      "shape": "Flat rectangular",
      "model": "S2725QC",
      "type": "Flat monitor",
      "diagonalInch": 27,
      "resolution": "3840 × 2160 (4K UHD)",
      "refreshHz": 120,
      "ports": [
        "HDMI",
        "USB-C video and up to 65 W power delivery"
      ]
    }
  },
  {
    "id": "de-pebble-keys2",
    "name": "Pebble Keys 2 K380s, German QWERTZ, tonal rose",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "DE",
    "currency": "EUR",
    "price": 34.99,
    "url": "https://www.logitech.com/de-de/shop/p/pebble-keys-2.920-011795",
    "description": "Logitech keyboard from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/pebble-keys-2-k380s/2026/gallery/tonal-rose/pebble-keys-k380s-2-tonal-rose-top-angle-gallery-1-deu.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/de-de/shop/p/pebble-keys-2.920-011795"
    ],
    "priceSourceUrl": "https://www.logitech.com/de-de/shop/p/pebble-keys-2.920-011795",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "linkStatus": "verified",
    "verifiedTitle": "Pebble Keys 2 K380s Bluetooth-Tastatur | Logitech®",
    "specifications": {
      "layout": "German QWERTZ",
      "connection": "Bluetooth / wireless; check receiver inclusion",
      "type": "Compact keyboard",
      "size": "Compact, without number pad"
    }
  },
  {
    "id": "de-k950",
    "name": "Signature Slim K950 Tastatur",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "DE",
    "currency": "EUR",
    "price": 79.99,
    "url": "https://www.logitech.com/de-de/shop/p/signature-slim-k950-keyboard",
    "description": "Logitech keyboard from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/signature-slim-k950/gallery/k950-graphite-gallery1-front-view-deu.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/de-de/shop/p/signature-slim-k950-keyboard"
    ],
    "priceSourceUrl": "https://www.logitech.com/de-de/shop/p/signature-slim-k950-keyboard",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "linkStatus": "verified",
    "verifiedTitle": "Signature Slim kabellose Tastatur K950 kaufen | Logitech®",
    "specifications": {
      "layout": "German QWERTZ",
      "connection": "Bluetooth / wireless; check receiver inclusion",
      "type": "Full-size keyboard",
      "size": "Full size with number pad"
    }
  },
  {
    "id": "de-mxkeys-s",
    "name": "MX Keys S",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "DE",
    "currency": "EUR",
    "price": 99.99,
    "url": "https://www.logitech.com/de-de/shop/p/mx-keys-s.920-011588",
    "description": "Logitech keyboard from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-keys-s/migration-assets-for-delorean-2025/gallery/mx-keys-s-top-view-graphite-deu.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/de-de/shop/p/mx-keys-s.920-011588"
    ],
    "priceSourceUrl": "https://www.logitech.com/de-de/shop/p/mx-keys-s.920-011588",
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium",
    "linkStatus": "verified",
    "verifiedTitle": "MX Keys S Tastatur kaufen – Standardgröße oder Mini | Logitech",
    "specifications": {
      "layout": "German QWERTZ",
      "connection": "Bluetooth / wireless; check receiver inclusion",
      "type": "Full-size keyboard",
      "size": "Full size with number pad"
    }
  },
  {
    "id": "de-m240",
    "name": "M240 Silent Bluetooth mouse, off-white",
    "brand": "Logitech",
    "category": "mouse",
    "market": "DE",
    "currency": "EUR",
    "price": 22.99,
    "url": "https://www.logitech.com/de-de/shop/p/m240-silent-bluetooth-mouse",
    "description": "Logitech mouse from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m240/product-gallery/m240-mouse-top-view-off-white.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/de-de/shop/p/m240-silent-bluetooth-mouse"
    ],
    "priceSourceUrl": "https://www.logitech.com/de-de/shop/p/m240-silent-bluetooth-mouse",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "linkStatus": "verified",
    "verifiedTitle": "M240 Silent Bluetooth-Maus mit angenehmer Form",
    "specifications": {
      "type": "Compact silent mouse",
      "shape": "Compact, left- or right-handed",
      "connection": "Bluetooth",
      "battery": "One AA battery"
    }
  },
  {
    "id": "de-mxmaster3s",
    "name": "MX Master 3S Bluetooth Edition, graphite",
    "brand": "Logitech",
    "category": "mouse",
    "market": "DE",
    "currency": "EUR",
    "price": 79.99,
    "url": "https://www.logitech.com/de-de/shop/p/mx-master-3s.910-006447",
    "description": "Logitech mouse from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer.",
      "Bluetooth Edition: do not assume a USB receiver is included."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/2025-update/mx-master-3s-bluetooth-edition-top-view-graphite-new-1.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/de-de/shop/p/mx-master-3s.910-006447"
    ],
    "priceSourceUrl": "https://www.logitech.com/de-de/shop/p/mx-master-3s.910-006447",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "linkStatus": "verified",
    "verifiedTitle": "MX Master 3S Bluetooth Edition kabellose Maus – optischer 8K-Sensor | Logitech",
    "specifications": {
      "type": "Productivity mouse",
      "shape": "Contoured, right-handed",
      "connection": "Bluetooth",
      "power": "Rechargeable",
      "maxDpi": 8000,
      "scroll": "Main scroll wheel and thumb wheel"
    }
  },
  {
    "id": "de-lift",
    "name": "Lift",
    "brand": "Logitech",
    "category": "mouse",
    "market": "DE",
    "currency": "EUR",
    "price": 52.99,
    "url": "https://www.logitech.com/de-de/shop/p/lift-vertical-ergonomic-mouse.910-006473",
    "description": "Logitech mouse from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/lift-vertical-ergonomic-mouse/2026-update/gallery/graphite/lift-mouse-top-angle-graphite-gallery-1.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/de-de/shop/p/lift-vertical-ergonomic-mouse.910-006473"
    ],
    "priceSourceUrl": "https://www.logitech.com/de-de/shop/p/lift-vertical-ergonomic-mouse.910-006473",
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium",
    "linkStatus": "verified",
    "verifiedTitle": "Lift vertikale ergonomische Maus | Logitech",
    "specifications": {
      "type": "Vertical mouse",
      "shape": "Vertical, 57 degrees",
      "connection": "Bluetooth and Logi Bolt",
      "battery": "One AA battery"
    }
  },
  {
    "id": "de-naevlinge",
    "name": "NÄVLINGE Arbeitsleuchte, LED - weiß",
    "brand": "IKEA",
    "category": "lighting",
    "market": "DE",
    "currency": "EUR",
    "price": 17.99,
    "url": "https://www.ikea.com/de/de/p/naevlinge-arbeitsleuchte-led-weiss-50404918/",
    "description": "IKEA lighting from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer.",
      "Integrated LED; no separate bulb purchase."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/naevlinge-arbeitsleuchte-led-weiss__0709828_pe727111_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/naevlinge-arbeitsleuchte-led-weiss-50404918/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/naevlinge-arbeitsleuchte-led-weiss-50404918/",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "material": "Metall",
    "linkStatus": "verified",
    "verifiedTitle": "NÄVLINGE Arbeitsleuchte, LED, weiß  - IKEA Deutschland"
  },
  {
    "id": "de-e27",
    "name": "SOLHETTA LED-Leuchtmittel E27 470 lm - rund opalweiß",
    "brand": "IKEA",
    "category": "bulb",
    "market": "DE",
    "currency": "EUR",
    "price": 1.8,
    "url": "https://www.ikea.com/de/de/p/solhetta-led-leuchtmittel-e27-470-lm-rund-opalweiss-50591482/",
    "description": "IKEA bulb from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/solhetta-led-leuchtmittel-e27-470-lm-rund-opalweiss__0988838_pe818254_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/solhetta-led-leuchtmittel-e27-470-lm-rund-opalweiss-50591482/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/solhetta-led-leuchtmittel-e27-470-lm-rund-opalweiss-50591482/",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "linkStatus": "verified",
    "verifiedTitle": "SOLHETTA LED-Leuchtmittel E27 470 lm, rund opalweiß  - IKEA Deutschland"
  },
  {
    "id": "de-fejka",
    "name": "FEJKA Topfpflanze, künstlich - drinnen/draußen/Funkie 9 cm",
    "brand": "IKEA",
    "category": "plant",
    "market": "DE",
    "currency": "EUR",
    "price": 3.99,
    "url": "https://www.ikea.com/de/de/p/fejka-topfpflanze-kuenstlich-drinnen-draussen-funkie-00610751/",
    "description": "IKEA plant from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "green"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/fejka-topfpflanze-kuenstlich-drinnen-draussen-funkie__1467005_pe995611_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/fejka-topfpflanze-kuenstlich-drinnen-draussen-funkie-00610751/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/fejka-topfpflanze-kuenstlich-drinnen-draussen-funkie-00610751/",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "linkStatus": "verified",
    "verifiedTitle": "FEJKA Topfpflanze, künstlich, drinnen/draußen/Funkie, 9 cm  - IKEA Deutschland"
  },
  {
    "id": "de-rissla",
    "name": "RISSLA Schreibunterlage - schwarz",
    "brand": "IKEA",
    "category": "mat",
    "market": "DE",
    "currency": "EUR",
    "price": 29.99,
    "url": "https://www.ikea.com/de/de/p/rissla-schreibunterlage-schwarz-40246156/",
    "description": "IKEA mat from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/rissla-schreibunterlage-schwarz__0715861_pe730632_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/rissla-schreibunterlage-schwarz-40246156/"
    ],
    "priceSourceUrl": "https://www.ikea.com/de/de/p/rissla-schreibunterlage-schwarz-40246156/",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "material": "Metall",
    "linkStatus": "verified",
    "verifiedTitle": "RISSLA Schreibunterlage, schwarz  - IKEA Deutschland"
  },
  {
    "id": "us-mittzon",
    "name": "MITTZON Desk sit/stand - electric walnut veneer/black 47 1/4x31 1/2 \"",
    "brand": "IKEA",
    "category": "desk",
    "market": "US",
    "currency": "USD",
    "price": 579.99,
    "url": "https://www.ikea.com/us/en/p/mittzon-desk-sit-stand-electric-walnut-veneer-black-s69527900/",
    "description": "IKEA desk from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/mittzon-desk-sit-stand-electric-walnut-veneer-black__1205829_pe907243_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/us/en/p/mittzon-desk-sit-stand-electric-walnut-veneer-black-s69527900/"
    ],
    "priceSourceUrl": "https://www.ikea.com/us/en/p/mittzon-desk-sit-stand-electric-walnut-veneer-black-s69527900/",
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium",
    "material": "Metal, Wood veneer",
    "linkStatus": "verified",
    "verifiedTitle": "MITTZON desk sit/stand, electric walnut veneer/black, 471/4x311/2&quot;  - IKEA",
    "dimensions": {
      "widthCm": 120
    },
    "specifications": {
      "type": "Height-adjustable desk"
    }
  },
  {
    "id": "us-mittzon-fixed",
    "name": "MITTZON Desk - walnut veneer/black 55 1/8x23 5/8 \"",
    "brand": "IKEA",
    "category": "desk",
    "market": "US",
    "currency": "USD",
    "price": 329.99,
    "url": "https://www.ikea.com/us/en/p/mittzon-desk-walnut-veneer-black-s89528055/",
    "description": "IKEA desk from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/mittzon-desk-walnut-veneer-black__1206040_pe907360_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/us/en/p/mittzon-desk-walnut-veneer-black-s89528055/"
    ],
    "priceSourceUrl": "https://www.ikea.com/us/en/p/mittzon-desk-walnut-veneer-black-s89528055/",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "material": "Metal, Wood veneer",
    "linkStatus": "verified",
    "verifiedTitle": "MITTZON desk, walnut veneer/black, 551/8x235/8&quot;  - IKEA",
    "dimensions": {
      "widthCm": 140
    },
    "specifications": {
      "type": "Fixed-height desk"
    }
  },
  {
    "id": "us-markus",
    "name": "MARKUS Office chair - Vissle dark gray Medium",
    "brand": "IKEA",
    "category": "chair",
    "market": "US",
    "currency": "USD",
    "price": 299.99,
    "url": "https://www.ikea.com/us/en/p/markus-office-chair-vissle-dark-gray-90289172/",
    "description": "IKEA chair from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/markus-office-chair-vissle-dark-gray__0724714_pe734597_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/us/en/p/markus-office-chair-vissle-dark-gray-90289172/"
    ],
    "priceSourceUrl": "https://www.ikea.com/us/en/p/markus-office-chair-vissle-dark-gray-90289172/",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "material": "Fabric, Metal",
    "linkStatus": "verified",
    "verifiedTitle": "MARKUS office chair, Vissle dark gray, Medium  - IKEA",
    "specifications": {
      "type": "High-back office chair"
    }
  },
  {
    "id": "us-s2725hsm",
    "name": "S2725HSM · 27-inch flat FHD monitor",
    "brand": "Dell",
    "category": "monitor",
    "market": "US",
    "currency": "USD",
    "price": 149.99,
    "url": "https://www.dell.com/en-us/shop/monitors/apd/dell-27-plus-monitor-s2725hsm/s2725hsm/-",
    "description": "A flat 27-inch FHD IPS monitor with a 144 Hz refresh rate and an adjustable stand.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/s-series/s2725hsm/media-gallery/monitor-dell-plus-s2725hsm-gy-gallery-1.psd?fmt=png-alpha&wid=1200&hei=630",
    "retailer": "Dell",
    "sourceUrls": [
      "https://www.dell.com/en-us/shop/monitors/apd/dell-27-plus-monitor-s2725hsm/s2725hsm/-"
    ],
    "priceSourceUrl": "https://www.dell.com/en-us/shop/monitors/apd/dell-27-plus-monitor-s2725hsm/s2725hsm/-",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "linkStatus": "verified",
    "verifiedTitle": "Dell Plus 27 Inch Monitor - S2725HSM​ | Dell USA",
    "specifications": {
      "shape": "Flat rectangular",
      "model": "S2725HSM",
      "type": "Flat monitor",
      "diagonalInch": 27,
      "resolution": "1920 × 1080 (FHD)",
      "refreshHz": 144,
      "panel": "IPS",
      "ports": [
        "2 × HDMI 1.4"
      ],
      "adjustments": [
        "Height",
        "Tilt",
        "Swivel",
        "Pivot"
      ]
    }
  },
  {
    "id": "us-s3425dw",
    "name": "S3425DW · 34-inch curved ultrawide monitor",
    "brand": "Dell",
    "category": "monitor",
    "market": "US",
    "currency": "USD",
    "price": 419.99,
    "url": "https://www.dell.com/en-us/shop/monitors/apd/dell-34-plus-usb-c-monitor-s3425dw/s3425dw_monitor/-",
    "description": "A curved 34-inch ultrawide VA monitor with a 120 Hz refresh rate and USB-C video input.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/s-series/s3425dw/media-gallery/monitor-s3425dw-gray-gallery-1.psd?fmt=jpg&wid=1200&hei=630",
    "retailer": "Dell",
    "sourceUrls": [
      "https://www.dell.com/en-us/shop/monitors/apd/dell-34-plus-usb-c-monitor-s3425dw/s3425dw_monitor/-",
      "https://www.dell.com/en-us/shop/monitors/apd/dell-s-34-usb-c-monitor-s3425dw/s3425dw_monitor/-"
    ],
    "priceSourceUrl": "https://www.dell.com/en-us/shop/monitors/apd/dell-34-plus-usb-c-monitor-s3425dw/s3425dw_monitor/-",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "linkStatus": "verified",
    "verifiedTitle": "Dell S 34 Inch USB-C Computer Monitor - S3425DW | Dell USA",
    "specifications": {
      "shape": "Curved ultrawide",
      "model": "S3425DW",
      "type": "Curved monitor",
      "diagonalInch": 34,
      "resolution": "3440 × 1440 (ultrawide)",
      "refreshHz": 120,
      "panel": "VA",
      "ports": [
        "HDMI 2.1",
        "USB-C video and up to 65 W power delivery"
      ]
    }
  },
  {
    "id": "us-s2725qc",
    "name": "S2725QC · 27-inch flat 4K USB-C monitor",
    "brand": "Dell",
    "category": "monitor",
    "market": "US",
    "currency": "USD",
    "price": 349.99,
    "url": "https://www.dell.com/en-us/shop/monitors/apd/dell-27-plus-4k-usb-c-monitor-s2725qc/s2725qc_monitor/-",
    "description": "A flat 27-inch 4K monitor with a 120 Hz refresh rate and USB-C video input.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://i.dell.com/assetlink/img/global/monitor-s2725qc-gray-gallery-1-dl1exsx-large.png?hei=630&wid=1200",
    "retailer": "Dell",
    "sourceUrls": [
      "https://www.dell.com/en-us/shop/monitors/apd/dell-27-plus-4k-usb-c-monitor-s2725qc/s2725qc_monitor/-",
      "https://www.dell.com/en-us/shop/monitors/apd/dell-27-plus-4k-usbc-monitor-s2725qc/s2725qc_monitor/-"
    ],
    "priceSourceUrl": "https://www.dell.com/en-us/shop/monitors/apd/dell-27-plus-4k-usb-c-monitor-s2725qc/s2725qc_monitor/-",
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium",
    "linkStatus": "verified",
    "verifiedTitle": "Dell 27 Plus 4K USB-C Monitor - S2725QC | Dell USA",
    "specifications": {
      "shape": "Flat rectangular",
      "model": "S2725QC",
      "type": "Flat monitor",
      "diagonalInch": 27,
      "resolution": "3840 × 2160 (4K UHD)",
      "refreshHz": 120,
      "ports": [
        "HDMI",
        "USB-C video and up to 65 W power delivery"
      ]
    }
  },
  {
    "id": "us-pebble-keys2",
    "name": "Pebble Keys 2 K380s",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "US",
    "currency": "USD",
    "price": 39.99,
    "url": "https://www.logitech.com/en-us/shop/p/pebble-keys-2",
    "description": "Logitech keyboard from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/pebble-keys-2-k380s/2026/gallery/tonal-rose/pebble-keys-k380s-2-tonal-rose-top-angle-gallery-1.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/en-us/shop/p/pebble-keys-2"
    ],
    "priceSourceUrl": "https://www.logitech.com/en-us/shop/p/pebble-keys-2",
    "recommendedModes": [
      "calm"
    ],
    "tier": "budget",
    "linkStatus": "verified",
    "verifiedTitle": "Pebble Keys 2 K380s Bluetooth Keyboard | Logitech",
    "specifications": {
      "layout": "US English QWERTY",
      "connection": "Bluetooth / wireless; check receiver inclusion",
      "type": "Compact keyboard",
      "size": "Compact, without number pad"
    }
  },
  {
    "id": "us-k950",
    "name": "Signature Slim Keyboard K950",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "US",
    "currency": "USD",
    "price": 79.99,
    "url": "https://www.logitech.com/en-us/shop/p/signature-slim-k950-keyboard",
    "description": "Logitech keyboard from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/signature-slim-k950/gallery/k950-graphite-gallery1-front-view-amr-us.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/en-us/shop/p/signature-slim-k950-keyboard"
    ],
    "priceSourceUrl": "https://www.logitech.com/en-us/shop/p/signature-slim-k950-keyboard",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "linkStatus": "verified",
    "verifiedTitle": "Buy Signature Slim Wireless Keyboard K950 | Logitech",
    "specifications": {
      "layout": "US English QWERTY",
      "connection": "Bluetooth / wireless; check receiver inclusion",
      "type": "Full-size keyboard",
      "size": "Full size with number pad"
    }
  },
  {
    "id": "us-mxkeys-s",
    "name": "MX Keys S",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "US",
    "currency": "USD",
    "price": 119.99,
    "url": "https://www.logitech.com/en-us/shop/p/mx-keys-s",
    "description": "Logitech keyboard from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-keys-s/migration-assets-for-delorean-2025/gallery/mx-keys-s-top-view-graphite-us.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/en-us/shop/p/mx-keys-s"
    ],
    "priceSourceUrl": "https://www.logitech.com/en-us/shop/p/mx-keys-s",
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium",
    "linkStatus": "verified",
    "verifiedTitle": "Buy MX Keys S Keyboard  | Logitech",
    "specifications": {
      "layout": "US English QWERTY",
      "connection": "Bluetooth / wireless; check receiver inclusion",
      "type": "Full-size keyboard",
      "size": "Full size with number pad"
    }
  },
  {
    "id": "us-mxmaster3s",
    "name": "MX Master 3S Bluetooth Edition, black",
    "brand": "Logitech",
    "category": "mouse",
    "market": "US",
    "currency": "USD",
    "price": 79.99,
    "url": "https://www.logitech.com/en-us/shop/p/mx-master-3s",
    "description": "Logitech mouse from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer.",
      "Bluetooth Edition: do not assume a USB receiver is included."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/2025-update/mx-master-3s-bluetooth-edition-top-view-black-new-1.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/en-us/shop/p/mx-master-3s"
    ],
    "priceSourceUrl": "https://www.logitech.com/en-us/shop/p/mx-master-3s",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "linkStatus": "verified",
    "verifiedTitle": "MX Master 3s Wireless Mouse - 8K Optical Sensor | Logitech",
    "specifications": {
      "type": "Productivity mouse",
      "shape": "Contoured, right-handed",
      "connection": "Bluetooth",
      "power": "Rechargeable",
      "maxDpi": 8000,
      "scroll": "Main scroll wheel and thumb wheel"
    }
  },
  {
    "id": "us-lift",
    "name": "Lift",
    "brand": "Logitech",
    "category": "mouse",
    "market": "US",
    "currency": "USD",
    "price": 69.99,
    "url": "https://www.logitech.com/en-us/shop/p/lift-vertical-ergonomic-mouse",
    "description": "Logitech mouse from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [
      "wireless"
    ],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://resource.logitech.com/c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/lift-vertical-ergonomic-mouse/2026-update/gallery/graphite/lift-mouse-top-angle-graphite-gallery-1.png",
    "retailer": "Logitech",
    "sourceUrls": [
      "https://www.logitech.com/en-us/shop/p/lift-vertical-ergonomic-mouse"
    ],
    "priceSourceUrl": "https://www.logitech.com/en-us/shop/p/lift-vertical-ergonomic-mouse",
    "recommendedModes": [
      "studio"
    ],
    "tier": "premium",
    "linkStatus": "verified",
    "verifiedTitle": "Lift Vertical Ergonomic Mouse | Logitech",
    "specifications": {
      "type": "Vertical mouse",
      "shape": "Vertical, 57 degrees",
      "connection": "Bluetooth and Logi Bolt",
      "battery": "One AA battery"
    }
  },
  {
    "id": "in-mittzon",
    "name": "MITTZON Desk - black stained ash veneer/black 140x60 cm (55 1/8x23 5/8 \")",
    "brand": "IKEA",
    "category": "desk",
    "market": "IN",
    "currency": "INR",
    "price": 18990,
    "url": "https://www.ikea.com/in/en/p/mittzon-desk-black-stained-ash-veneer-black-s99528045/",
    "description": "IKEA desk from the local retailer catalog. Compare the exact model and dimensions before purchase.",
    "tags": [],
    "notes": [
      "Price is a dated local reference. Confirm delivery, stock, and final price with the retailer."
    ],
    "checkedAt": "2026-10-18",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/mittzon-desk-black-stained-ash-veneer-black__1206036_pe907356_s5.jpg",
    "retailer": "IKEA",
    "sourceUrls": [
      "https://www.ikea.com/in/en/p/mittzon-desk-black-stained-ash-veneer-black-s99528045/"
    ],
    "priceSourceUrl": "https://www.ikea.com/in/en/p/mittzon-desk-black-stained-ash-veneer-black-s99528045/",
    "recommendedModes": [
      "focus"
    ],
    "tier": "mid",
    "material": "Metal, Wood veneer",
    "linkStatus": "verified",
    "verifiedTitle": "MITTZON desk, black stained ash veneer/black, 140x60 cm (551/8x235/8&quot;)  - IKEA",
    "dimensions": {
      "widthCm": 140
    },
    "specifications": {
      "type": "Fixed-height desk"
    }
  },
  {
    "id": "in-mx-mechanical",
    "name": "MX Mechanical low-profile keyboard",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "IN",
    "currency": "INR",
    "price": null,
    "url": "https://www.logitech.com/en-in/shop/p/mx-mechanical.920-010761",
    "description": "A full-size mechanical keyboard with low-profile keys, backlight, and three device profiles.",
    "specifications": {
      "type": "Mechanical keyboard",
      "size": "Full size with number pad",
      "switchType": "Tactile Quiet, Clicky, or Linear; select the exact variant",
      "connection": "Bluetooth or Logi Bolt",
      "backlight": true,
      "layout": "Confirm the local layout and switch variant before purchase"
    },
    "tags": [
      "wireless",
      "mechanical",
      "backlit"
    ],
    "notes": [
      "Local price and exact switch variant need a seller check. This model stays outside automatic budget plans.",
      "The manufacturer photo can show a different regional key layout. Confirm the layout at checkout.",
      "Switch options depend on local availability."
    ],
    "checkedAt": "2026-10-19",
    "priceStatus": "unknown",
    "priceFreshness": "manufacturer-page",
    "stockStatus": "unverified",
    "linkStatus": "verified",
    "verifiedTitle": "MX Mechanical",
    "imageUrl": "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/mx-mechanical/migration-assets-for-delorean-2025/gallery/mx-mechanical-top-view-graphite-us.png",
    "sourceUrls": [
      "https://www.logitech.com/en-in/shop/p/mx-mechanical.920-010761"
    ]
  },
  {
    "id": "us-mx-mechanical",
    "name": "MX Mechanical low-profile keyboard",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "US",
    "currency": "USD",
    "price": null,
    "url": "https://www.logitech.com/en-us/shop/p/mx-mechanical",
    "description": "A full-size mechanical keyboard with low-profile keys, backlight, and three device profiles.",
    "specifications": {
      "type": "Mechanical keyboard",
      "size": "Full size with number pad",
      "switchType": "Tactile Quiet, Clicky, or Linear; select the exact variant",
      "connection": "Bluetooth or Logi Bolt",
      "backlight": true,
      "layout": "Confirm the local layout and switch variant before purchase"
    },
    "tags": [
      "wireless",
      "mechanical",
      "backlit"
    ],
    "notes": [
      "Local price and exact switch variant need a seller check. This model stays outside automatic budget plans.",
      "The manufacturer photo can show a different regional key layout. Confirm the layout at checkout.",
      "Switch options depend on local availability."
    ],
    "checkedAt": "2026-10-19",
    "priceStatus": "unknown",
    "priceFreshness": "manufacturer-page",
    "stockStatus": "unverified",
    "linkStatus": "verified",
    "verifiedTitle": "MX Mechanical",
    "imageUrl": "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/mx-mechanical/migration-assets-for-delorean-2025/gallery/mx-mechanical-top-view-graphite-us.png",
    "sourceUrls": [
      "https://www.logitech.com/en-us/shop/p/mx-mechanical"
    ]
  },
  {
    "id": "de-mx-mechanical",
    "name": "MX Mechanical low-profile keyboard",
    "brand": "Logitech",
    "category": "keyboard",
    "market": "DE",
    "currency": "EUR",
    "price": null,
    "url": "https://www.logitech.com/de-de/shop/p/mx-mechanical",
    "description": "A full-size mechanical keyboard with low-profile keys, backlight, and three device profiles.",
    "specifications": {
      "type": "Mechanical keyboard",
      "size": "Full size with number pad",
      "switchType": "Tactile Quiet, Clicky, or Linear; select the exact variant",
      "connection": "Bluetooth or Logi Bolt",
      "backlight": true,
      "layout": "Confirm the local layout and switch variant before purchase"
    },
    "tags": [
      "wireless",
      "mechanical",
      "backlit"
    ],
    "notes": [
      "Local price and exact switch variant need a seller check. This model stays outside automatic budget plans.",
      "The manufacturer photo can show a different regional key layout. Confirm the layout at checkout.",
      "Switch options depend on local availability."
    ],
    "checkedAt": "2026-10-19",
    "priceStatus": "unknown",
    "priceFreshness": "manufacturer-page",
    "stockStatus": "unverified",
    "linkStatus": "verified",
    "verifiedTitle": "MX Mechanical",
    "imageUrl": "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/mx-mechanical/migration-assets-for-delorean-2025/gallery/mx-mechanical-top-view-graphite-us.png",
    "sourceUrls": [
      "https://www.logitech.com/de-de/shop/p/mx-mechanical"
    ]
  },
  {
    "id": "in-flintan-arms",
    "name": "FLINTAN Office chair with armrests - black",
    "brand": "IKEA",
    "category": "chair",
    "market": "IN",
    "currency": "INR",
    "price": 9490.0,
    "url": "https://www.ikea.com/in/en/p/flintan-office-chair-with-armrests-black-s69424469/",
    "description": "An office chair with a mesh back and adjustable seat height. Try the seat, arm clearance, and adjustment range for your body.",
    "tags": [
      "dark"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "The product label does not establish personal fit or a medical benefit."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/flintan-office-chair-with-armrests-black__1007241_pe825960_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "FLINTAN office chair with armrests, black  - IKEA",
    "material": "Fabric, Metal",
    "dimensions": {
      "widthCm": 71.0,
      "depthCm": 71.0
    },
    "specifications": {
      "type": "Mesh office chair",
      "model": "694.244.69"
    },
    "sourceUrls": [
      "https://www.ikea.com/in/en/p/flintan-office-chair-with-armrests-black-s69424469/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "in-dagotto",
    "name": "DAGOTTO Foot-rest - black",
    "brand": "IKEA",
    "category": "footrest",
    "market": "IN",
    "currency": "INR",
    "price": 1290.0,
    "url": "https://www.ikea.com/in/en/p/dagotto-foot-rest-black-20240990/",
    "description": "A separate foot support with a tilting platform. Use only if your feet need support after chair adjustment.",
    "tags": [
      "dark"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/dagotto-foot-rest-black__0156454_pe315498_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "DAGOTTO foot-rest, black  - IKEA",
    "material": "Stainless steel, Plastic",
    "dimensions": {
      "widthCm": 38.0,
      "depthCm": 49.0,
      "heightCm": 15.0
    },
    "specifications": {
      "type": "Tilting footrest",
      "model": "202.409.90"
    },
    "sourceUrls": [
      "https://www.ikea.com/in/en/p/dagotto-foot-rest-black-20240990/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "in-micke",
    "name": "MICKE Desk - white 73x50 cm (28 3/4x19 5/8 \")",
    "brand": "IKEA",
    "category": "desk",
    "market": "IN",
    "currency": "INR",
    "price": 5990.0,
    "url": "https://www.ikea.com/in/en/p/micke-desk-white-80354281/",
    "description": "A compact desk with a drawer and rear cable outlet. Check screen distance and leg clearance before purchase.",
    "tags": [
      "white"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/micke-desk-white__0736022_pe740349_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "MICKE Desk, white, 73x50 cm  - IKEA",
    "material": "Wood (including board), Metal",
    "dimensions": {
      "widthCm": 73.0,
      "depthCm": 50.0,
      "heightCm": 75.0
    },
    "specifications": {
      "type": "Compact desk",
      "model": "803.542.81"
    },
    "sourceUrls": [
      "https://www.ikea.com/in/en/p/micke-desk-white-80354281/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "in-tiphede",
    "name": "TIPHEDE Rug, flatwoven - natural/black 120x180 cm (3 ' 11 \"x5 ' 11 \")",
    "brand": "IKEA",
    "category": "rug",
    "market": "IN",
    "currency": "INR",
    "price": 899.0,
    "url": "https://www.ikea.com/in/en/p/tiphede-rug-flatwoven-natural-black-00456759/",
    "description": "A separate floor rug for a softer room finish. Check the size, floor grip, cleaning needs, and chair movement before purchase.",
    "tags": [
      "natural"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Use a suitable anti-slip layer if needed; its price is separate.",
      "Check that chair casters move safely and rug edges stay flat. A rug is not a chair mat."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/tiphede-rug-flatwoven-natural-black__0772066_pe755879_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "TIPHEDE rug, flatwoven, natural/black, 120x180 cm (3'11&quot;x5'11&quot;)  - IKEA",
    "material": "Cotton",
    "dimensions": {
      "widthCm": 120.0,
      "depthCm": 180.0
    },
    "specifications": {
      "type": "Flatwoven cotton rug",
      "model": "004.567.59"
    },
    "sourceUrls": [
      "https://www.ikea.com/in/en/p/tiphede-rug-flatwoven-natural-black-00456759/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "in-lohals",
    "name": "LOHALS Rug, flatwoven - natural 133x195 cm (4 ' 4 \"x6 ' 5 \")",
    "brand": "IKEA",
    "category": "rug",
    "market": "IN",
    "currency": "INR",
    "price": 3990.0,
    "url": "https://www.ikea.com/in/en/p/lohals-rug-flatwoven-natural-50511287/",
    "description": "A separate floor rug for a softer room finish. Check the size, floor grip, cleaning needs, and chair movement before purchase.",
    "tags": [
      "natural"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Use a suitable anti-slip layer if needed; its price is separate.",
      "Check that chair casters move safely and rug edges stay flat. A rug is not a chair mat."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/lohals-rug-flatwoven-natural__0280221_pe419173_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "LOHALS rug, flatwoven, natural, 133x195 cm (4'4&quot;x6'5&quot;)  - IKEA",
    "material": "Natural fibres",
    "dimensions": {
      "widthCm": 133.0,
      "depthCm": 195.0
    },
    "specifications": {
      "type": "Flatwoven jute rug",
      "model": "505.112.87"
    },
    "sourceUrls": [
      "https://www.ikea.com/in/en/p/lohals-rug-flatwoven-natural-50511287/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "in-stoense",
    "name": "STOENSE Rug, low pile - off-white 133x195 cm (4 ' 4 \"x6 ' 5 \")",
    "brand": "IKEA",
    "category": "rug",
    "market": "IN",
    "currency": "INR",
    "price": 6490.0,
    "url": "https://www.ikea.com/in/en/p/stoense-rug-low-pile-off-white-90425527/",
    "description": "A separate floor rug for a softer room finish. Check the size, floor grip, cleaning needs, and chair movement before purchase.",
    "tags": [
      "white"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Use a suitable anti-slip layer if needed; its price is separate.",
      "Check that chair casters move safely and rug edges stay flat. A rug is not a chair mat."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/stoense-rug-low-pile-off-white__0624373_pe691791_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "STOENSE Rug, low pile, off-white, 133x195 cm  - IKEA",
    "material": "Synthetic fibres",
    "dimensions": {
      "widthCm": 133.0,
      "depthCm": 195.0
    },
    "specifications": {
      "type": "Low-pile rug",
      "model": "904.255.27"
    },
    "sourceUrls": [
      "https://www.ikea.com/in/en/p/stoense-rug-low-pile-off-white-90425527/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "in-bengta-beige",
    "name": "BENGTA Block-out curtain, 1 piece - beige/with heading tape 210x250 cm (83x98 \")",
    "brand": "IKEA",
    "category": "curtain",
    "market": "IN",
    "currency": "INR",
    "price": 999.0,
    "url": "https://www.ikea.com/in/en/p/bengta-block-out-curtain-1-piece-beige-with-heading-tape-50602150/",
    "description": "A window fabric option for privacy or light control. Measure the window and confirm the panel count and existing support.",
    "tags": [
      "dark"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Curtain rod or rail, brackets, hooks, and installation are not included.",
      "Confirm a compatible existing curtain support before an addition. Sheer fabric does not give full night privacy."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/bengta-block-out-curtain-1-piece-beige-with-heading-tape__1341494_pe948758_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "BENGTA block-out curtain, 1 piece, beige/with heading tape, 210x250 cm (83x98&quot;)  - IKEA",
    "material": "Polyester",
    "dimensions": {
      "widthCm": 210.0,
      "depthCm": 250.0
    },
    "specifications": {
      "type": "Block-out curtain",
      "model": "506.021.50",
      "panelCount": 1
    },
    "sourceUrls": [
      "https://www.ikea.com/in/en/p/bengta-block-out-curtain-1-piece-beige-with-heading-tape-50602150/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "in-lill",
    "name": "LILL Net curtains, 1 pair - white/with rod pocket 280x250 cm (110x98 \")",
    "brand": "IKEA",
    "category": "curtain",
    "market": "IN",
    "currency": "INR",
    "price": 399.0,
    "url": "https://www.ikea.com/in/en/p/lill-net-curtains-1-pair-white-with-rod-pocket-70171927/",
    "description": "A window fabric option for privacy or light control. Measure the window and confirm the panel count and existing support.",
    "tags": [
      "white"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Curtain rod or rail, brackets, hooks, and installation are not included.",
      "Confirm a compatible existing curtain support before an addition. Sheer fabric does not give full night privacy."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/in/en/images/products/lill-net-curtains-1-pair-white-with-rod-pocket__0099863_pe242253_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "LILL net curtains, 1 pair, white/with rod pocket, 280x250 cm (110x98&quot;)  - IKEA",
    "material": "Polyester",
    "dimensions": {
      "widthCm": 280.0,
      "depthCm": 250.0
    },
    "specifications": {
      "type": "Sheer curtains",
      "model": "701.719.27",
      "panelCount": 2
    },
    "sourceUrls": [
      "https://www.ikea.com/in/en/p/lill-net-curtains-1-pair-white-with-rod-pocket-70171927/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "us-flintan-beige",
    "name": "FLINTAN Office chair - beige",
    "brand": "IKEA",
    "category": "chair",
    "market": "US",
    "currency": "USD",
    "price": 99.99,
    "url": "https://www.ikea.com/us/en/p/flintan-office-chair-beige-00492205/",
    "description": "An office chair with a mesh back and adjustable seat height. Try the seat, arm clearance, and adjustment range for your body.",
    "tags": [
      "dark"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "The product label does not establish personal fit or a medical benefit."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/flintan-office-chair-beige__1007198_pe825954_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "FLINTAN office chair, beige  - IKEA",
    "material": "Fabric",
    "dimensions": {},
    "specifications": {
      "type": "Mesh office chair",
      "model": "004.922.05"
    },
    "sourceUrls": [
      "https://www.ikea.com/us/en/p/flintan-office-chair-beige-00492205/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "us-flintan-arms",
    "name": "FLINTAN Office chair with armrests - black",
    "brand": "IKEA",
    "category": "chair",
    "market": "US",
    "currency": "USD",
    "price": 119.99,
    "url": "https://www.ikea.com/us/en/p/flintan-office-chair-with-armrests-black-s29424471/",
    "description": "An office chair with a mesh back and adjustable seat height. Try the seat, arm clearance, and adjustment range for your body.",
    "tags": [
      "dark"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "The product label does not establish personal fit or a medical benefit."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/flintan-office-chair-with-armrests-black__1007241_pe825960_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "FLINTAN office chair with armrests, black  - IKEA",
    "material": "Fabric, Metal",
    "dimensions": {},
    "specifications": {
      "type": "Mesh office chair",
      "model": "294.244.71"
    },
    "sourceUrls": [
      "https://www.ikea.com/us/en/p/flintan-office-chair-with-armrests-black-s29424471/"
    ],
    "retailer": "IKEA",
    "tier": "mid"
  },
  {
    "id": "us-micke",
    "name": "MICKE Desk - white 28 3/4x19 5/8 \"",
    "brand": "IKEA",
    "category": "desk",
    "market": "US",
    "currency": "USD",
    "price": 69.99,
    "url": "https://www.ikea.com/us/en/p/micke-desk-white-30213076/",
    "description": "A compact desk with a drawer and rear cable outlet. Check screen distance and leg clearance before purchase.",
    "tags": [
      "white"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/micke-desk-white__0736022_pe740349_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "MICKE Desk, white, 28 3/4x19 5/8&quot;  - IKEA",
    "material": "Wood (including board), Metal",
    "dimensions": {},
    "specifications": {
      "type": "Compact desk",
      "model": "302.130.76"
    },
    "sourceUrls": [
      "https://www.ikea.com/us/en/p/micke-desk-white-30213076/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "us-lohals",
    "name": "LOHALS Rug, flatwoven - natural 5 ' 3 \"x7 ' 7 \"",
    "brand": "IKEA",
    "category": "rug",
    "market": "US",
    "currency": "USD",
    "price": 129.99,
    "url": "https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-50277393/",
    "description": "A separate floor rug for a softer room finish. Check the size, floor grip, cleaning needs, and chair movement before purchase.",
    "tags": [
      "natural"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Use a suitable anti-slip layer if needed; its price is separate.",
      "Check that chair casters move safely and rug edges stay flat. A rug is not a chair mat."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/lohals-rug-flatwoven-natural__0280221_pe419173_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "LOHALS rug, flatwoven, natural, 5'3&quot;x7'7&quot;  - IKEA",
    "material": "Natural fibers",
    "dimensions": {},
    "specifications": {
      "type": "Flatwoven jute rug",
      "model": "502.773.93"
    },
    "sourceUrls": [
      "https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-50277393/"
    ],
    "retailer": "IKEA",
    "tier": "mid"
  },
  {
    "id": "us-stoense",
    "name": "STOENSE Rug, low pile - off-white 6 ' 7 \"x9 ' 10 \"",
    "brand": "IKEA",
    "category": "rug",
    "market": "US",
    "currency": "USD",
    "price": null,
    "url": "https://www.ikea.com/us/en/p/stoense-rug-low-pile-off-white-20426808/",
    "description": "A separate floor rug for a softer room finish. Check the size, floor grip, cleaning needs, and chair movement before purchase.",
    "tags": [
      "white"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Use a suitable anti-slip layer if needed; its price is separate.",
      "Check that chair casters move safely and rug edges stay flat. A rug is not a chair mat."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "unknown",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/stoense-rug-low-pile-off-white__0624402_pe691814_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "STOENSE rug, low pile, off-white, 6'7&quot;x9'10&quot;  - IKEA",
    "material": "Synthetic fibers",
    "dimensions": {},
    "specifications": {
      "type": "Low-pile rug",
      "model": "204.268.08"
    },
    "sourceUrls": [
      "https://www.ikea.com/us/en/p/stoense-rug-low-pile-off-white-20426808/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "de-flintan-arms",
    "name": "FLINTAN Drehstuhl mit Armlehnen - schwarz",
    "brand": "IKEA",
    "category": "chair",
    "market": "DE",
    "currency": "EUR",
    "price": 99.99,
    "url": "https://www.ikea.com/de/de/p/flintan-drehstuhl-mit-armlehnen-schwarz-s89424468/",
    "description": "An office chair with a mesh back and adjustable seat height. Try the seat, arm clearance, and adjustment range for your body.",
    "tags": [
      "dark"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "The product label does not establish personal fit or a medical benefit."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/flintan-drehstuhl-mit-armlehnen-schwarz__1007241_pe825960_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "FLINTAN Drehstuhl mit Armlehnen, schwarz  - IKEA Deutschland",
    "material": "Stoff, Metall",
    "dimensions": {
      "widthCm": 71.0,
      "depthCm": 71.0
    },
    "specifications": {
      "type": "Mesh office chair",
      "model": "894.244.68"
    },
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/flintan-drehstuhl-mit-armlehnen-schwarz-s89424468/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "de-dagotto",
    "name": "DAGOTTO Fußstütze - schwarz",
    "brand": "IKEA",
    "category": "footrest",
    "market": "DE",
    "currency": "EUR",
    "price": 19.99,
    "url": "https://www.ikea.com/de/de/p/dagotto-fussstuetze-schwarz-40240989/",
    "description": "A separate foot support with a tilting platform. Use only if your feet need support after chair adjustment.",
    "tags": [
      "dark"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/dagotto-fussstuetze-schwarz__0156454_pe315498_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "DAGOTTO Fußstütze, schwarz  - IKEA Deutschland",
    "material": "Edelstahl, Kunststoff",
    "dimensions": {
      "widthCm": 38.0,
      "depthCm": 49.0,
      "heightCm": 15.0
    },
    "specifications": {
      "type": "Tilting footrest",
      "model": "402.409.89"
    },
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/dagotto-fussstuetze-schwarz-40240989/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "de-tiphede",
    "name": "TIPHEDE Teppich flach gewebt - natur/schwarz 120x180 cm",
    "brand": "IKEA",
    "category": "rug",
    "market": "DE",
    "currency": "EUR",
    "price": 8.99,
    "url": "https://www.ikea.com/de/de/p/tiphede-teppich-flach-gewebt-natur-schwarz-40456757/",
    "description": "A separate floor rug for a softer room finish. Check the size, floor grip, cleaning needs, and chair movement before purchase.",
    "tags": [
      "natural"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Use a suitable anti-slip layer if needed; its price is separate.",
      "Check that chair casters move safely and rug edges stay flat. A rug is not a chair mat."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/tiphede-teppich-flach-gewebt-natur-schwarz__0772066_pe755879_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "TIPHEDE Teppich flach gewebt, natur/schwarz, 120x180 cm  - IKEA Deutschland",
    "material": "Baumwolle",
    "dimensions": {
      "widthCm": 120.0,
      "depthCm": 180.0
    },
    "specifications": {
      "type": "Flatwoven cotton rug",
      "model": "404.567.57"
    },
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/tiphede-teppich-flach-gewebt-natur-schwarz-40456757/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "de-stoense",
    "name": "STOENSE Teppich Kurzflor - elfenbeinweiß 200x300 cm",
    "brand": "IKEA",
    "category": "rug",
    "market": "DE",
    "currency": "EUR",
    "price": 139.0,
    "url": "https://www.ikea.com/de/de/p/stoense-teppich-kurzflor-elfenbeinweiss-20426808/",
    "description": "A separate floor rug for a softer room finish. Check the size, floor grip, cleaning needs, and chair movement before purchase.",
    "tags": [
      "white"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Use a suitable anti-slip layer if needed; its price is separate.",
      "Check that chair casters move safely and rug edges stay flat. A rug is not a chair mat."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/stoense-teppich-kurzflor-elfenbeinweiss__0624402_pe691814_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "STOENSE Kurzflor-Teppich, elfenbeinweiß, 200x300 cm  - IKEA Deutschland",
    "material": "Kunstfasern",
    "dimensions": {
      "widthCm": 200.0,
      "depthCm": 300.0
    },
    "specifications": {
      "type": "Low-pile rug",
      "model": "204.268.08"
    },
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/stoense-teppich-kurzflor-elfenbeinweiss-20426808/"
    ],
    "retailer": "IKEA",
    "tier": "mid"
  },
  {
    "id": "de-bengta-beige",
    "name": "BENGTA 1 Gardinenschal (verdunk.) - beige/mit Gardinenband 210x250 cm",
    "brand": "IKEA",
    "category": "curtain",
    "market": "DE",
    "currency": "EUR",
    "price": 9.99,
    "url": "https://www.ikea.com/de/de/p/bengta-1-gardinenschal-verdunk-beige-mit-gardinenband-20602137/",
    "description": "A window fabric option for privacy or light control. Measure the window and confirm the panel count and existing support.",
    "tags": [
      "dark"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Curtain rod or rail, brackets, hooks, and installation are not included.",
      "Confirm a compatible existing curtain support before an addition. Sheer fabric does not give full night privacy."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/bengta-1-gardinenschal-verdunk-beige-mit-gardinenband__1341494_pe948758_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "BENGTA 1 Gardinenschal (verdunk.), beige/mit Gardinenband, 210x250 cm  - IKEA Deutschland",
    "material": "Polyester",
    "dimensions": {
      "widthCm": 210.0,
      "depthCm": 250.0
    },
    "specifications": {
      "type": "Block-out curtain",
      "model": "206.021.37",
      "panelCount": 1
    },
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/bengta-1-gardinenschal-verdunk-beige-mit-gardinenband-20602137/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "de-lill",
    "name": "LILL Gardinenstore/2 Schals - weiß/mit Tunnelsaum 280x250 cm",
    "brand": "IKEA",
    "category": "curtain",
    "market": "DE",
    "currency": "EUR",
    "price": 3.5,
    "url": "https://www.ikea.com/de/de/p/lill-gardinenstore-2-schals-weiss-mit-tunnelsaum-90111980/",
    "description": "A window fabric option for privacy or light control. Measure the window and confirm the panel count and existing support.",
    "tags": [
      "white"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Curtain rod or rail, brackets, hooks, and installation are not included.",
      "Confirm a compatible existing curtain support before an addition. Sheer fabric does not give full night privacy."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/lill-gardinenstore-2-schals-weiss-mit-tunnelsaum__0099863_pe242253_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "LILL Gardinenstore/2 Schals, weiß/mit Tunnelsaum, 280x250 cm  - IKEA Deutschland",
    "material": "Polyester",
    "dimensions": {
      "widthCm": 280.0,
      "depthCm": 250.0
    },
    "specifications": {
      "type": "Sheer curtains",
      "model": "901.119.80",
      "panelCount": 2
    },
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/lill-gardinenstore-2-schals-weiss-mit-tunnelsaum-90111980/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "us-lill",
    "name": "LILL Sheer curtains, 1 pair - white/with rod pocket 110x98 \"",
    "brand": "IKEA",
    "category": "curtain",
    "market": "US",
    "currency": "USD",
    "price": 4.99,
    "url": "https://www.ikea.com/us/en/p/lill-sheer-curtains-1-pair-white-with-rod-pocket-90111980/",
    "description": "A window fabric option for privacy or light control. Measure the window and confirm the panel count and existing support.",
    "tags": [
      "white"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Curtain rod or rail, brackets, hooks, and installation are not included.",
      "Confirm a compatible existing curtain support before an addition. Sheer fabric does not give full night privacy."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/us/en/images/products/lill-sheer-curtains-1-pair-white-with-rod-pocket__0099863_pe242253_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "LILL Sheer curtains, 1 pair, white/with rod pocket, 110x98&quot;  - IKEA",
    "material": "Polyester",
    "dimensions": {},
    "specifications": {
      "type": "Sheer curtains",
      "model": "901.119.80",
      "panelCount": 2
    },
    "sourceUrls": [
      "https://www.ikea.com/us/en/p/lill-sheer-curtains-1-pair-white-with-rod-pocket-90111980/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "de-lohals",
    "name": "LOHALS Teppich flach gewebt - natur 133x195 cm",
    "brand": "IKEA",
    "category": "rug",
    "market": "DE",
    "currency": "EUR",
    "price": 59.99,
    "url": "https://www.ikea.com/de/de/p/lohals-teppich-flach-gewebt-natur-30511288/",
    "description": "A separate floor rug for a softer room finish. Check the size, floor grip, cleaning needs, and chair movement before purchase.",
    "tags": [
      "natural"
    ],
    "notes": [
      "Price is a dated local reference. Check delivery, tax, local availability, and the final variant.",
      "Use a suitable anti-slip layer if needed; its price is separate.",
      "Check that chair casters move safely and rug edges stay flat. A rug is not a chair mat."
    ],
    "checkedAt": "2026-10-19",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "imageUrl": "https://www.ikea.com/de/de/images/products/lohals-teppich-flach-gewebt-natur__0280221_pe419173_s5.jpg",
    "linkStatus": "verified",
    "verifiedTitle": "LOHALS Teppich flach gewebt, natur, 133x195 cm  - IKEA Deutschland",
    "material": "Naturfaser",
    "dimensions": {
      "widthCm": 133.0,
      "depthCm": 195.0
    },
    "specifications": {
      "type": "Flatwoven jute rug",
      "model": "305.112.88"
    },
    "sourceUrls": [
      "https://www.ikea.com/de/de/p/lohals-teppich-flach-gewebt-natur-30511288/"
    ],
    "retailer": "IKEA",
    "tier": "budget"
  },
  {
    "id": "in-hp-km160",
    "name": "KM160 wired keyboard and mouse combo",
    "category": "keyboard",
    "price": 864,
    "url": "https://www.hp.com/in-en/shop/products/accessories/hp-km160-wired-mouse-and-keyboard-combo-99y13aa-acj",
    "imageUrl": "https://www.hp.com/in-en/shop/media/catalog/product/k/m/km160_99y13aa_m1553737_1.png",
    "description": "A wired keyboard and mouse set for a basic work desk.",
    "specifications": {
      "type": "Wired keyboard and mouse combo",
      "connection": "Wired",
      "model": "99Y13AA#ACJ"
    },
    "coversCategories": [
      "keyboard",
      "mouse"
    ],
    "tags": [
      "wired",
      "budget"
    ],
    "brand": "HP",
    "market": "IN",
    "currency": "INR",
    "checkedAt": "2026-10-20",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "linkStatus": "verified",
    "verifiedTitle": "HP KM160 wired keyboard and mouse combo | HP Store India",
    "retailer": "HP",
    "notes": [
      "Price is a dated local reference. Check the exact model, compatible computer ports, delivery, and final price."
    ],
    "tier": "budget",
    "sourceUrls": [
      "https://www.hp.com/in-en/shop/products/accessories/hp-km160-wired-mouse-and-keyboard-combo-99y13aa-acj"
    ]
  },
  {
    "id": "in-hp240",
    "name": "240 Pike Silver Bluetooth mouse",
    "category": "mouse",
    "price": 1178.01,
    "url": "https://www.hp.com/in-en/shop/products/accessories/hp-240-pike-silver-bluetooth-mouse-43n04aa-uuf",
    "imageUrl": "https://www.hp.com/in-en/shop/media/catalog/product/h/p/hp_240_bluetooth_mouse_naturalsilver_coreset_topdown_m1927954.png",
    "description": "A compact Bluetooth mouse with an ambidextrous shape and three buttons.",
    "specifications": {
      "type": "Compact Bluetooth mouse",
      "connection": "Bluetooth 5.1",
      "maxDpi": 1600,
      "shape": "Ambidextrous",
      "battery": "One AA battery",
      "model": "43N04AA#UUF"
    },
    "tags": [
      "wireless",
      "compact",
      "silver"
    ],
    "brand": "HP",
    "market": "IN",
    "currency": "INR",
    "checkedAt": "2026-10-20",
    "priceFreshness": "retailer-page",
    "priceStatus": "reference",
    "stockStatus": "unverified",
    "linkStatus": "verified",
    "verifiedTitle": "HP 240 Pike Silver Bluetooth mouse | HP Store India",
    "retailer": "HP",
    "notes": [
      "Price is a dated local reference. Check the exact model, compatible computer ports, delivery, and final price."
    ],
    "tier": "budget",
    "sourceUrls": [
      "https://www.hp.com/in-en/shop/products/accessories/hp-240-pike-silver-bluetooth-mouse-43n04aa-uuf"
    ]
  }
];
