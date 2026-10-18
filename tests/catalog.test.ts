import test from 'node:test';
import assert from 'node:assert/strict';
import {catalogFor,plan,defaults,type Mode} from '../lib/planner';

test('selectable catalogs have verified product destinations and model photos',()=>{
 for(const market of ['IN','US','EU'] as const)for(const product of catalogFor(market)){
  assert.equal(product.linkStatus,'verified',product.id);
  assert.equal(new URL(product.url).protocol,'https:');
  assert.ok(product.imageUrl?.startsWith('https:'),product.id+' needs a real product photo');
  assert.doesNotMatch(product.imageUrl!,/global-og|video-thumb|non-product-images/);
  if(market==='EU')assert.match(product.url,/ikea\.com\/de\/de\/p\/|dell\.com\/de-de\/shop\/|logitech\.com\/de-de\/shop\/p\//);
 }
 assert.ok(!catalogFor('IN').some(p=>p.id==='in-muji-memo'));
});

test('German full-budget directions change the desk, monitor, and keyboard independently',()=>{
 const variants=(['calm','focus','studio'] as Mode[]).map(mode=>plan('EU',1500,mode,['laptop'],defaults));
 for(const category of ['desk','monitor','keyboard']){
  const ids=variants.map(items=>items.find(p=>p.category===category)?.id);
  assert.ok(ids.every(Boolean),category);
  assert.equal(new Set(ids).size,3,category+' must differ in each version');
 }
});
