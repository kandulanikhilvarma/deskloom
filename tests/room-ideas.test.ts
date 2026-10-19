import test from 'node:test';
import assert from 'node:assert/strict';
import {catalogFor, defaults, total, validateAddition} from '../lib/planner';
import {roomIdeas, roomPhotoUrl, planFromRoomIdea} from '../lib/room-ideas';

test('room references use six distinct credited photographs with original source pages',()=>{
  assert.equal(roomIdeas.length,6);
  assert.equal(new Set(roomIdeas.map(idea=>roomPhotoUrl(idea))).size,6);
  for(const idea of roomIdeas){assert.match(idea.source,/^https:\/\/www\.pexels\.com\/photo\//);assert.ok(idea.photographer);assert.equal(idea.takeaways.length,3);}
});

test('each country has real desks, chairs, rugs, and window fabrics to compare',()=>{
  for(const market of ['IN','US','EU'] as const){
    const local=catalogFor(market);
    assert.ok(local.filter(p=>p.category==='desk').length>=3);
    assert.ok(local.filter(p=>p.category==='chair').length>=3);
    assert.ok(local.filter(p=>p.category==='rug').length>=2);
    assert.ok(local.some(p=>p.category==='curtain'));
  }
});

test('floor and window products use their own dimensions and require existing support confirmation',()=>{
  const rug=catalogFor('IN').find(p=>p.id==='in-lohals')!;
  const curtain=catalogFor('IN').find(p=>p.id==='in-lill')!;
  const narrow={...defaults,width:60};
  assert.ok(rug.dimensions!.widthCm>narrow.width);
  assert.match(validateAddition(rug,[],'IN',20000,[],narrow).error!,/underlay/);
  assert.ok(validateAddition(rug,[],'IN',20000,['rug-underlay'],narrow).items);
  assert.match(validateAddition(curtain,[],'IN',20000,[],narrow).error!,/curtain rod or rail/);
  assert.ok(validateAddition(curtain,[],'IN',20000,['curtain-rail'],narrow).items);
});

test('six room recipes honor country, budget, owned equipment, and uncertainty without a provider',()=>{
  for(const market of ['IN','US','EU'] as const)for(const budget of [0,50,1500,120000])for(const idea of roomIdeas){
    const owned=['desk','chair','laptop'];
    const items=planFromRoomIdea(idea,market,budget,owned,defaults);
    assert.ok(total(items)<=budget*.9+.001);
    assert.equal(new Set(items.map(p=>p.id)).size,items.length);
    for(const product of items){assert.equal(product.market,market==='EU'?'DE':market);assert.ok(!owned.includes(product.category));assert.notEqual(product.price,null);assert.notEqual(product.priceFreshness,'uncertain');}
  }
  const versions=roomIdeas.map(idea=>planFromRoomIdea(idea,'EU',1500,['laptop','curtain-rail','rug-underlay'],defaults).map(p=>p.id).join(','));
  assert.ok(new Set(versions).size>=4);
});
