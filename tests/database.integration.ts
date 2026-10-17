import assert from 'node:assert/strict';
import test from 'node:test';
import { randomUUID } from 'node:crypto';
import { neon } from '@neondatabase/serverless';
import { planStore } from '../lib/plans/store';
import { renderStore } from '../lib/render/store';
import type { PlanInput } from '../lib/plans/validation';

test('isolated database: persistence, account isolation, retries, quotas, and cleanup', async()=>{
 const url=process.env.DATABASE_TEST_URL;
 assert.equal(process.env.DESKLOOM_INTEGRATION_TESTS,'true');
 assert.ok(url);
 assert.ok(url.includes('ep-ancient-heart-az8wj7m0'), 'Use the isolated verification branch only.');
 process.env.DATABASE_URL=url;
 const sql=neon(url);
 const owner=`test-${randomUUID()}`, other=`test-${randomUUID()}`;
 const plan:PlanInput={id:randomUUID(),name:'Isolated fixture',market:'IN',currency:'INR',budget:1500,mode:'calm',owned:[],photo:null,items:[],notes:''};
 try {
  const first=await planStore.save(owner,plan);assert.ok(first);
  const retry=await planStore.save(owner,plan);assert.equal(retry?.updatedAt,first.updatedAt);
  assert.equal((await planStore.list(owner)).length,1);
  assert.equal(await planStore.get(other,plan.id),null);
  assert.equal(await planStore.remove(other,plan.id),false);
  assert.equal((await planStore.save(other,{...plan,name:'Other fixture'}))?.name,'Other fixture');
  assert.equal((await planStore.get(owner,plan.id))?.name,plan.name);
  for(let i=1;i<30;i++)assert.ok(await planStore.save(owner,{...plan,id:randomUUID()}));
  assert.equal(await planStore.save(owner,{...plan,id:randomUUID()}),null);
  assert.ok(await planStore.save(owner,{...plan,name:'Updated fixture'}));
  const renderId=randomUUID();
  const concurrent=await Promise.all([renderStore.reserve(owner,renderId),renderStore.reserve(owner,renderId)]);
  assert.deepEqual(concurrent.sort(),['duplicate','reserved']);
  assert.equal(await renderStore.reserve(owner,randomUUID()),'busy');
  await renderStore.settle(owner,renderId,'uncertain');
  for(let i=0;i<2;i++){const id=randomUUID();assert.equal(await renderStore.reserve(owner,id),'reserved');await renderStore.settle(owner,id,'failed');}
  assert.equal(await renderStore.reserve(owner,randomUUID()),'quota');
  assert.equal(await planStore.remove(owner,plan.id),true);
  assert.equal(await planStore.get(owner,plan.id),null);
 } finally {
  await sql`DELETE FROM deskloom_plans WHERE owner_id IN (${owner},${other})`;
  await sql`DELETE FROM deskloom_render_requests WHERE owner_id IN (${owner},${other})`;
 }
});
