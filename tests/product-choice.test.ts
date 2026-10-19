import test from 'node:test';
import assert from 'node:assert/strict';
import {products} from '../lib/catalog';
import {catalogFor, defaults, plan} from '../lib/planner';
import {productChoice, productSpecs} from '../lib/product-choice';

const product = (id: string) => products.find(p => p.id === id)!;

test('a combo replacement removes both separate inputs exactly once', () => {
  const original = [product('in-pebble-keys2'), product('in-lift'), product('in-sunnersta')];
  const result = productChoice(product('in-mk220'), original, 'IN', 20000, [], defaults);
  assert.deepEqual(result.replaced.map(p => p.id), ['in-pebble-keys2', 'in-lift']);
  assert.deepEqual(result.items?.map(p => p.id), ['in-sunnersta', 'in-mk220']);
  assert.equal(original.length, 3);
});

test('rejected electronics choices preserve the plan and explain price, ownership, and budget gaps', () => {
  const original = [product('in-mk220')];
  assert.match(productChoice(product('in-mxkeys-s'), original, 'IN', 1500, [], defaults).error!, /budget/);
  assert.match(productChoice(product('in-mxkeys-s'), [], 'IN', 20000, ['keyboard'], defaults).error!, /already own/);
  assert.match(productChoice(product('in-mx-mechanical'), [], 'IN', 120000, [], defaults).error!, /price check/);
  assert.equal(original[0].id, 'in-mk220');
});

test('every country exposes distinct electronics types and useful specifications outside budget plans', () => {
  for (const market of ['IN', 'US', 'EU'] as const) {
    for (const category of ['keyboard', 'mouse', 'monitor']) {
      const local = catalogFor(market).filter(p => p.category === category);
      assert.ok(local.length >= 3);
      assert.ok(new Set(local.map(p => productSpecs(p).type)).size >= 2);
      assert.ok(local.every(p => Object.keys(productSpecs(p)).length >= 3));
    }
  }
});

test('work inputs get budget priority over optional accessories', () => {
  const items = plan('IN', 2000, 'focus', ['desk', 'chair', 'laptop']);
  assert.ok(items.some(p => p.id === 'in-mk220'));
});
