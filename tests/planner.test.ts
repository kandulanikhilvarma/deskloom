import test from 'node:test';
import assert from 'node:assert/strict';
import { products, type Product } from '../lib/catalog';
import {
  catalogFor, defaults, isEligible, missingEssentials, plan, removeFromPlan,
  resolveBundle, shoppingText, total, validateAddition, type Constraints, type Market, type Mode,
} from '../lib/planner';

const owned = ['desk', 'chair', 'monitor', 'laptop', 'keyboard', 'mouse'];
const settings = (changes: Partial<Constraints> = {}): Constraints => ({ ...defaults, ...changes });
function product(id: string): Product {
  const found = products.find(p => p.id === id);
  assert.ok(found, 'The test needs a catalog item: ' + id);
  return found;
}
function assertValidPlan(items: Product[], market: Market, budget: number, c = defaults) {
  const country = market === 'EU' ? 'DE' : market;
  assert.ok(total(items) <= Math.floor(budget * (1 - c.reserve / 100) * 100 + 0.0000001) / 100);
  assert.equal(new Set(items.map(p => p.id)).size, items.length);
  for (const item of items) {
    assert.equal(item.market, country);
    assert.notEqual(item.price, null);
    assert.notEqual(item.priceFreshness, 'uncertain');
    for (const id of item.requiresProductIds ?? []) assert.ok(items.some(p => p.id === id));
    if (item.category === 'bulb') assert.ok(items.some(p => p.requiresProductIds?.includes(item.id)));
  }
}

test('a ₹50 budget gives no invented zero-price purchases', () => {
  for (const mode of ['calm', 'focus', 'studio'] as Mode[]) assert.deepEqual(plan('IN', 50, mode, owned), []);
});

test('all modes stay within low, medium, and high India budgets', () => {
  for (const budget of [1500, 20000, 120000]) {
    for (const mode of ['calm', 'focus', 'studio'] as Mode[]) {
      const items = plan('IN', budget, mode, budget === 1500 ? owned : []);
      assert.ok(items.length > 0);
      assertValidPlan(items, 'IN', budget);
    }
  }
});

test('a high budget can cover furniture and a computer without fabricated prices', () => {
  const items = plan('IN', 120000, 'focus', []);
  assert.ok(items.some(p => p.category === 'laptop'));
  assert.deepEqual(missingEssentials([], items), []);
});

test('a ₹20000 plan reports the computer that the budget cannot cover', () => {
  const items = plan('IN', 20000, 'focus', []);
  assert.ok(items.some(p => p.category === 'desk'));
  assert.ok(items.some(p => p.category === 'chair'));
  assert.ok(missingEssentials([], items).includes('laptop'));
  assertValidPlan(items, 'IN', 20000);
});

test('three directions select different affordable products', () => {
  const variants = (['calm', 'focus', 'studio'] as Mode[]).map(mode => plan('IN', 1500, mode, owned));
  const keys = variants.map(items => items.map(p => p.id).sort().join(','));
  assert.equal(new Set(keys).size, 3);
  assert.ok(variants[0].some(p => p.tags.includes('natural')));
});

test('all three markets use local products and prices', () => {
  for (const market of ['IN', 'US', 'EU'] as Market[]) {
    const items = plan(market, market === 'IN' ? 1500 : 100, 'focus', owned);
    assert.ok(items.length > 0);
    assertValidPlan(items, market, market === 'IN' ? 1500 : 100);
    assert.ok(catalogFor(market).every(p => p.market === (market === 'EU' ? 'DE' : market)));
  }
});

test('the reserve protects money for extra costs at the exact boundary', () => {
  const item = product('in-sunnersta');
  assert.ok(validateAddition(item, [], 'IN', 60, [], settings()).error);
  assert.ok(validateAddition(item, [], 'IN', 100, [], settings({ reserve: 40 })).items);
  assert.deepEqual(plan('IN', 1000, 'focus', owned, settings({ reserve: 100 })), []);
});

test('invalid budgets and dimensions do not produce a plan', () => {
  for (const budget of [-1, Number.NaN, Number.POSITIVE_INFINITY]) assert.deepEqual(plan('IN', budget, 'focus', owned), []);
  assert.deepEqual(plan('IN', 1000, 'focus', owned, settings({ width: 0 })), []);
  assert.ok(validateAddition(product('in-sunnersta'), [], 'IN', 100, [], settings({ reserve: -1 })).error);
});

test('lamps include the full accessory pack price exactly once', () => {
  const lamp = product('in-svallet');
  const bundled = resolveBundle(lamp, []);
  assert.deepEqual(bundled.map(p => p.id), ['in-svallet', 'in-solhetta-e14']);
  assert.equal(total(bundled), 678);
  assert.deepEqual(resolveBundle(lamp, bundled), bundled);
  assert.ok(validateAddition(lamp, [], 'IN', 677, [], settings({ reserve: 0 })).error);
  assert.equal(total(validateAddition(lamp, [], 'IN', 678, [], settings({ reserve: 0 })).items!), 678);
});

test('the German lamp includes its checked local bulb',()=>{
 const lamp=product('de-tertial');
 const result=validateAddition(lamp,[],'EU',100,owned,defaults);
 assert.ok(result.items);
 assert.ok(result.items.some(p=>p.id==='de-e27'));
 assert.equal(result.items.filter(p=>p.id==='de-e27').length,1);
});
test('a lamp swap changes the lamp and bulb atomically', () => {
  const original = resolveBundle(product('in-svallet'), []);
  const rejected = validateAddition(product('in-tertial'), original, 'IN', 1500, [], defaults, 'in-svallet');
  assert.ok(rejected.error);
  assert.equal(total(original), 678);
  const replacement = validateAddition(product('in-tertial'), original, 'IN', 2000, [], defaults, 'in-svallet');
  assert.deepEqual(replacement.items?.map(p => p.id), ['in-tertial', 'in-knoppslinga-e27']);
  assert.equal(total(replacement.items!), 1569);
});

test('removal clears lamp dependents and orphan bulbs', () => {
  const items = resolveBundle(product('in-svallet'), [product('in-sunnersta')]);
  assert.deepEqual(removeFromPlan('in-svallet', items).map(p => p.id), ['in-sunnersta']);
  assert.deepEqual(removeFromPlan('in-solhetta-e14', items).map(p => p.id), ['in-sunnersta']);
  assert.deepEqual(removeFromPlan('in-sunnersta', items).map(p => p.id), ['in-svallet', 'in-solhetta-e14']);
});

test('a standalone accessory cannot create a false complete total', () => {
  assert.match(validateAddition(product('in-solhetta-e14'), [], 'IN', 1000, [], defaults).error!, /compatible lamp/);
});

test('unknown and uncertain prices stay out of automatic and manual totals', () => {
  for (const id of ['in-m240', 'in-mk235', 'in-samsung-s3-curved', 'in-dell-p2425h']) {
    const item = product(id);
    assert.equal(isEligible(item, [], defaults), false);
    assert.ok(validateAddition(item, [], 'IN', 120000, [], defaults).error);
  }
  assert.ok(!plan('IN', 120000, 'studio', []).some(p => p.price === null || p.priceFreshness === 'uncertain'));
});

test('a caller cannot lower a catalog price or add an invented product', () => {
  assert.ok(validateAddition({ ...product('in-sunnersta'), price: 1 }, [], 'IN', 10, [], defaults).error);
  assert.ok(validateAddition({ ...product('in-sunnersta'), id: 'test-fictional' }, [], 'IN', 1000, [], defaults).error);
});

test('the addition helper rejects the wrong country and duplicate owned equipment', () => {
  assert.ok(validateAddition(product('us-m240'), [], 'IN', 10000, [], defaults).error);
  assert.ok(validateAddition(product('in-mk220'), [], 'IN', 5000, ['mouse'], defaults).error);
  assert.ok(validateAddition(product('in-mxkeys-s'), [], 'IN', 20000, ['keyboard'], defaults).error);
});

test('a combo covers both input categories without a duplicate mouse', () => {
  const combo = product('in-mk220');
  const result = validateAddition(combo, [], 'IN', 5000, [], defaults);
  assert.ok(result.items);
  assert.deepEqual(missingEssentials(['desk', 'chair', 'desktop', 'monitor'], result.items), []);
  assert.ok(validateAddition(product('in-lift'), result.items, 'IN', 20000, [], defaults).error);
  const auto = plan('IN', 20000, 'focus', ['desk', 'chair', 'desktop', 'monitor']);
  assert.ok(auto.some(p => p.coversCategories?.includes('mouse')));
  assert.ok(!auto.some(p => p.category === 'mouse'));
  assert.ok(!auto.some(p => p.category === 'laptop'));
});

test('no-drill excludes both pegboards and shelves that need anchoring', () => {
  for (const id of ['in-skadis', 'in-billy']) {
    assert.equal(isEligible(product(id), [], defaults), false);
    assert.ok(validateAddition(product(id), [], 'IN', 10000, [], defaults).error);
    assert.ok(validateAddition(product(id), [], 'IN', 10000, [], settings({ noDrill: false })).items);
  }
});

test('narrow desks exclude wide mats, risers, and replacement desks', () => {
  const narrow = settings({ width: 40 });
  for (const id of ['in-lanespelare', 'in-elloven', 'in-lagkapten']) {
    assert.equal(isEligible(product(id), owned.filter(p => p !== 'desk'), narrow), false);
  }
  const items = plan('IN', 20000, 'studio', owned, narrow);
  assert.ok(items.every(p => !p.dimensions?.widthCm || p.dimensions.widthCm <= 40));
});

test('live plants need indirect daylight, while artificial plants remain an option', () => {
  const live = product('in-spider-plant');
  assert.equal(isEligible(live, [], defaults), true);
  for (const daylight of ['low', 'bright'] as const) {
    const constraints = settings({ daylight });
    assert.equal(isEligible(live, [], constraints), false);
    assert.equal(isEligible(product('in-fejka'), [], constraints), true);
    assert.ok(!plan('IN', 1500, 'calm', owned, constraints).some(p => p.tags.includes('living')));
  }
});

test('laptop supports need an owned laptop and external inputs', () => {
  const stand = product('in-stenerik');
  assert.equal(isEligible(stand, ['monitor'], defaults), false);
  assert.equal(isEligible(stand, ['laptop'], defaults), false);
  assert.equal(isEligible(stand, ['laptop', 'keyboard', 'mouse'], defaults), true);
  assert.equal(isEligible(product('in-elloven'), ['laptop'], defaults), false);
});

test('a laptop can supply the computer, screen, and built-in inputs', () => {
  assert.deepEqual(missingEssentials(['desk', 'chair', 'laptop'], []), []);
  assert.deepEqual(missingEssentials(['desk', 'chair', 'monitor', 'keyboard', 'mouse'], []), ['laptop']);
  assert.deepEqual(missingEssentials(['desk', 'chair', 'desktop', 'keyboard', 'mouse'], []), ['monitor']);
});

test('shopping exports preserve reference dates and label unknown totals', () => {
  const text = shoppingText('My desk', 'IN', 1500, [product('in-m240')], owned);
  assert.match(text, /Known-price subtotal, incomplete/);
  assert.match(text, /Price needs a check/);
  assert.match(text, /Reference checked 2026-10-18/);
  assert.match(text, /Check delivery, tax, accessories, and stock/);
});
