import { products, type Product } from './catalog';

export type Market = 'IN' | 'US' | 'EU';
export type Mode = 'calm' | 'focus' | 'studio';
export const markets = {
  IN: { name: 'India', currency: 'INR', symbol: '₹', defaultBudget: 15000 },
  US: { name: 'United States', currency: 'USD', symbol: '$', defaultBudget: 150 },
  EU: { name: 'Germany', currency: 'EUR', symbol: '€', defaultBudget: 1500 },
} as const;
export const modes = {
  calm: { name: 'Quiet mornings', description: 'Natural touches, a clear surface, and softer light.', color: '#697b55', priorities: ['plant', 'lighting', 'cable', 'storage', 'book', 'stand', 'mat', 'desk', 'chair', 'monitor', 'keyboard', 'mouse', 'shelf', 'laptop'] },
  focus: { name: 'Room to focus', description: 'Useful essentials, less clutter, and room to think.', color: '#416c83', priorities: ['cable', 'storage', 'lighting', 'stand', 'desk', 'monitor', 'keyboard', 'mouse', 'chair', 'mat', 'book', 'shelf', 'laptop', 'plant'] },
  studio: { name: 'Creative corner', description: 'A warmer work surface with space for your tools.', color: '#ac6a4a', priorities: ['mat', 'lighting', 'storage', 'plant', 'cable', 'stand', 'shelf', 'desk', 'chair', 'monitor', 'keyboard', 'mouse', 'book', 'laptop'] },
} as const;

export type Constraints = {
  noDrill: boolean;
  daylight: 'low' | 'indirect' | 'bright';
  width: number;
  reserve: number;
  wireless: boolean;
};
export const defaults: Constraints = { noDrill: true, daylight: 'indirect', width: 120, reserve: 10, wireless: false };
export type AdditionResult = { items?: Product[]; error?: string };

export function currency(value: number, market: Market) {
  return new Intl.NumberFormat(market === 'IN' ? 'en-IN' : market === 'EU' ? 'de-DE' : 'en-US', {
    style: 'currency', currency: markets[market].currency, maximumFractionDigits: 2, minimumFractionDigits: 0,
  }).format(value);
}
export function catalogFor(market: Market) {
  return products.filter(p => p.market === (market === 'EU' ? 'DE' : market) && p.linkStatus !== 'unverified' && p.stockStatus !== 'unavailable');
}
function categories(p: Product): string[] {
  return [...new Set([p.category, ...(p.coversCategories ?? [])])];
}
function availableCategories(owned: string[], items: Product[]) {
  return new Set([...owned, ...items.flatMap(categories)]);
}
function knownPrice(p: Product) {
  return p.price !== null && Number.isFinite(p.price) && p.price >= 0
    && p.priceStatus !== 'unknown' && p.priceFreshness !== 'uncertain';
}
function configurationError(budget: number, c: Constraints): string | undefined {
  if (!Number.isFinite(budget) || budget < 0) return 'Use a budget of zero or more.';
  if (!Number.isFinite(c.reserve) || c.reserve < 0 || c.reserve > 100) return 'Use a reserve between 0 and 100 percent.';
  if (!Number.isFinite(c.width) || c.width <= 0) return 'Enter a desk width above zero.';
}
function budgetLimit(budget: number, c: Constraints) {
  return Math.floor(budget * (1 - c.reserve / 100) * 100 + 0.0000001) / 100;
}
function eligibilityError(p: Product, owned: string[], c: Constraints): string | undefined {
  if (p.linkStatus === 'unverified') return 'This retailer link needs verification. Choose another product.';
  const duplicate = categories(p).find(category => owned.includes(category));
  if (duplicate) return 'This product includes a ' + duplicate + ' that you already own.';
  if (!knownPrice(p)) return 'This product needs a price check before it can enter a budget plan.';
  if (p.stockStatus === 'unavailable') return 'The retailer lists this product as unavailable.';
  if (c.noDrill && p.tags.includes('wall')) return 'This product needs wall fixings. Turn off the no-holes option or choose another product.';
  if (c.wireless && categories(p).some(category => ['keyboard', 'mouse'].includes(category)) && !p.tags.includes('wireless')) {
    return 'Choose a wireless keyboard or mouse for this plan.';
  }
  if (!['rug','curtain','chair','footrest','shelf'].includes(p.category) && p.dimensions?.widthCm && p.dimensions.widthCm > c.width) return 'This product is wider than the desk width you entered.';
  if (p.tags.includes('living') && c.daylight !== 'indirect') {
    return 'This live plant needs indirect daylight. Change its position or choose an artificial plant.';
  }
  if (p.category === 'curtain' && !owned.includes('curtain-rail')) return 'Confirm a compatible existing curtain rod or rail before this fabric enters the plan.';
  if (p.category === 'rug' && !owned.includes('rug-underlay')) return 'Confirm a suitable rug underlay before this rug enters the plan.';
  if (p.category === 'stand') {
    if (p.tags.includes('laptop-support')) {
      if (!['laptop', 'keyboard', 'mouse'].every(category => owned.includes(category))) {
        return 'Keep a laptop, keyboard, and mouse before you add this laptop support.';
      }
    } else if (!owned.includes('monitor')) return 'Keep a monitor before you add this monitor stand.';
  }
  if (p.category === 'lighting' && p.notes.some(note => /bulb sold separately/i.test(note)) && !p.requiresProductIds?.length) {
    return 'This lamp needs a bulb with a checked local price. The catalog cannot complete the bundle yet.';
  }
}
export function isEligible(p: Product, owned: string[], c: Constraints) {
  if (configurationError(0, c)) return false;
  if (eligibilityError(p, owned, c)) return false;
  try {
    return resolveBundle(p, []).every(item => !eligibilityError(item, owned, c) && item.market === p.market);
  } catch {
    return false;
  }
}
export function total(items: Product[]) {
  return Math.round(items.reduce((sum, p) => sum + (p.price ?? 0), 0) * 100) / 100;
}
function canonicalItems(items: Product[]) {
  const result = new Map<string, Product>();
  for (const item of items) {
    const canonical = products.find(p => p.id === item.id);
    if (!canonical) throw new Error('A product is no longer in the catalog. Rebuild this plan.');
    result.set(canonical.id, canonical);
  }
  return [...result.values()];
}

// Return the complete plan with each required accessory once.
export function resolveBundle(product: Product, currentItems: Product[]): Product[] {
  const result = canonicalItems(currentItems);
  const included = new Set(result.map(p => p.id));
  const visiting = new Set<string>();
  function visit(id: string) {
    if (visiting.has(id)) throw new Error('The catalog contains an accessory cycle. Choose another product.');
    const item = products.find(p => p.id === id);
    if (!item) throw new Error('A required accessory is not in the catalog. Choose another product.');
    visiting.add(id);
    if (!included.has(id)) {
      result.push(item);
      included.add(id);
    }
    for (const dependency of item.requiresProductIds ?? []) visit(dependency);
    visiting.delete(id);
  }
  visit(product.id);
  return result;
}

// Remove dependents and accessories that no remaining item needs.
export function removeFromPlan(id: string, items: Product[]): Product[] {
  const removed = new Set([id]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const item of items) {
      if (!removed.has(item.id) && item.requiresProductIds?.some(dependency => removed.has(dependency))) {
        removed.add(item.id);
        changed = true;
      }
    }
  }
  let result = items.filter(p => !removed.has(p.id));
  const possibleOrphans = new Set(items.filter(p => removed.has(p.id)).flatMap(p => p.requiresProductIds ?? []));
  let pruned = true;
  while (pruned) {
    pruned = false;
    const needed = new Set(result.flatMap(p => p.requiresProductIds ?? []));
    result = result.filter(p => {
      if ((possibleOrphans.has(p.id) || p.category === 'bulb') && !needed.has(p.id)) {
        for (const dependency of p.requiresProductIds ?? []) possibleOrphans.add(dependency);
        pruned = true;
        return false;
      }
      return true;
    });
  }
  return result;
}

export function validateAddition(
  product: Product, items: Product[], market: Market, budget: number,
  owned: string[], constraints: Constraints, replaceId?: string,
): AdditionResult {
  const invalidConfiguration = configurationError(budget, constraints);
  if (invalidConfiguration) return { error: invalidConfiguration };
  if (replaceId && !items.some(p => p.id === replaceId)) return { error: 'The product to replace is no longer in this plan.' };
  try {
    const base = canonicalItems(items);
    const next = resolveBundle(product, replaceId ? removeFromPlan(replaceId, base) : base);
    const localMarket = market === 'EU' ? 'DE' : market;
    const covered = new Map<string, string>();
    for (const item of next) {
      if (item.market !== localMarket || item.currency !== markets[market].currency) {
        return { error: 'Choose a product from the current country catalog.' };
      }
      const error = eligibilityError(item, owned, constraints);
      if (error) return { error };
      for (const category of categories(item)) {
        const previous = covered.get(category);
        if (previous && previous !== item.id) return { error: 'The plan already covers ' + category + '. Remove or replace that item first.' };
        covered.set(category, item.id);
      }
      if ((item.requiresProductIds ?? []).some(dependency => !next.some(p => p.id === dependency))) {
        return { error: 'The plan lacks a required accessory. Rebuild the plan.' };
      }
      if (item.category === 'bulb' && !next.some(p => p.requiresProductIds?.includes(item.id))) {
        return { error: 'Add a compatible lamp before this bulb.' };
      }
    }
    const limit = budgetLimit(budget, constraints);
    if (total(next) > limit) return { error: 'This change exceeds the product budget after the reserve for extras.' };
    return { items: next };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'The product cannot enter this plan.' };
  }
}

function compareProducts(a: Product, b: Product, mode: Mode) {
  const recommended = Number(b.recommendedModes?.includes(mode) ?? false) - Number(a.recommendedModes?.includes(mode) ?? false);
  if (recommended) return recommended;
  const order = mode === 'studio' ? ['premium', 'mid', 'budget'] : ['budget', 'mid', 'premium'];
  const tier = order.indexOf(a.tier ?? 'budget') - order.indexOf(b.tier ?? 'budget');
  if (tier) return tier;
  if (mode === 'calm') {
    const natural = (p: Product) => p.tags.includes('natural') || p.tags.includes('green');
    const preference = Number(natural(b)) - Number(natural(a));
    if (preference) return preference;
  }
  return mode === 'studio' ? (b.price ?? Infinity) - (a.price ?? Infinity) : (a.price ?? Infinity) - (b.price ?? Infinity);
}
export function plan(market: Market, budget: number, mode: Mode, owned: string[], c: Constraints = defaults) {
  if (configurationError(budget, c)) return [];
  let selected: Product[] = [];
  const candidates = catalogFor(market).filter(p => isEligible(p, owned, c));
  const core = ['desk', 'chair', 'laptop', 'keyboard', 'mouse', 'monitor'];
  const priorities = [...core, ...modes[mode].priorities];
  for (const category of priorities) {
    if (mode === 'focus' && category === 'plant') continue;
    const available = availableCategories(owned, selected);
    if (available.has(category)) continue;
    if (category === 'laptop' && (available.has('desktop') || available.has('computer'))) continue;
    // A monitor can be planned before a computer. Missing computer coverage stays explicit.
    const matches = candidates.filter(p => p.category === category).sort((a, b) => compareProducts(a, b, mode));
    for (const match of matches) {
      const addition = validateAddition(match, selected, market, budget, owned, c);
      if (addition.items) {
        selected = addition.items;
        break;
      }
    }
  }
  return selected;
}
export function missingEssentials(owned: string[], items: Product[]) {
  const available = availableCategories(owned, items);
  const missing = ['desk', 'chair'].filter(category => !available.has(category));
  const laptop = available.has('laptop');
  const desktop = available.has('desktop') || available.has('computer');
  if (!laptop && !desktop) missing.push('laptop');
  if (desktop && !laptop && !available.has('monitor')) missing.push('monitor');
  const raisedLaptop = items.some(p => p.tags.includes('laptop-support'));
  if (!laptop || raisedLaptop) {
    for (const category of ['keyboard', 'mouse']) if (!available.has(category)) missing.push(category);
  }
  return missing;
}
export function position(category: string, index = 0): { x: number; y: number } {
  const map: Record<string, [number, number]> = {
    monitor: [50, 40], desk: [50, 76], chair: [52, 91], lighting: [20, 47], storage: [19, 30],
    plant: [80, 48], cable: [72, 75], stand: [47, 61], mat: [48, 73], keyboard: [43, 69],
    mouse: [65, 69], shelf: [20, 20], book: [77, 64], laptop: [72, 54], bulb: [24, 38],
  };
  const [x, y] = map[category] ?? [30 + (index % 4) * 15, 55 + Math.floor(index / 4) * 12];
  return { x, y };
}
export function shoppingText(name: string, market: Market, budget: number, items: Product[], owned: string[]) {
  const unknown = items.some(p => !knownPrice(p));
  const heading = unknown ? 'Known-price subtotal, incomplete' : 'Product subtotal';
  return name + '\nDeskloom shopping list\n\nMarket: ' + markets[market].name
    + '\nBudget: ' + currency(budget, market) + '\n' + heading + ': ' + currency(total(items), market)
    + '\n\nKeep: ' + (owned.join(', ') || 'No owned items selected') + '\n\n'
    + items.map((p, i) => (i + 1) + '. ' + p.brand + ' ' + p.name + '\n'
      + (!knownPrice(p) ? 'Price needs a check' : currency(p.price!, market))
      + ' · Reference checked ' + p.checkedAt + '\n' + p.url + '\n' + p.notes.join(' ')).join('\n\n')
    + '\n\nPrices are dated references. Check delivery, tax, accessories, and stock with the seller. Preview markers are suggestions, not product recognition.\n';
}
