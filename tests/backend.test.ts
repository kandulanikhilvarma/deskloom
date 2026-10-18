import assert from "node:assert/strict";
import test from "node:test";
import { createPlanApi, requireSameOrigin, type PlanStore } from "../lib/plans/api";
import { MAX_BODY_BYTES, MAX_PHOTO_BYTES, planSchema, type PlanInput, type SavedPlan } from "../lib/plans/validation";

const id = "11111111-1111-4111-8111-111111111111";
const fixture: PlanInput = { id, name: "Window desk", market: "IN", currency: "INR", budget: 1500, mode: "calm", owned: ["desk", "monitor"], photo: null, items: [{ productId: "test-lamp", owned: false }], notes: "" };
const origin = "https://deskloom.example";
test('same-origin writes use the actual host when Next.js binds a listen address',()=>{
 const headers={host:'localhost:3001',origin:'http://localhost:3001','sec-fetch-site':'same-origin'};
 assert.doesNotThrow(()=>requireSameOrigin(new Request('http://0.0.0.0:3001/api/plans',{headers})));
 assert.throws(()=>requireSameOrigin(new Request('http://0.0.0.0:3001/api/plans',{headers:{...headers,origin:'https://attacker.example'}})));
});
function request(body: unknown = fixture, headers: Record<string, string> = {}) {
  return new Request(`${origin}/api/plans`, { method: "POST", headers: { origin, "content-type": "application/json", ...headers }, body: JSON.stringify(body) });
}
function memoryStore(): PlanStore {
  const records = new Map<string, SavedPlan>();
  return {
    async list(owner) { return [...records.entries()].filter(([key]) => key.startsWith(`${owner}:`)).map(([, plan]) => ({ ...plan, photo: null, hasPhoto: Boolean(plan.photo) })); },
    async get(owner, planId) { return records.get(`${owner}:${planId}`) ?? null; },
    async save(owner, plan) {
      const key = `${owner}:${plan.id}`;
      const prior = records.get(key);
      const saved = { ...plan, createdAt: prior?.createdAt ?? "2026-10-16T00:00:00.000Z", updatedAt: "2026-10-16T00:00:00.000Z" };
      records.set(key, saved);
      return saved;
    },
    async remove(owner, planId) { return records.delete(`${owner}:${planId}`); },
  };
}

test("private plan endpoints deny anonymous access", async () => {
  const api = createPlanApi({ owner: async () => null, store: memoryStore() });
  for (const response of [await api.list(), await api.get(id), await api.save(request()), await api.remove(request(), id)]) {
    assert.equal(response.status, 401);
    assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  }
});

test("cloud save, restore, retry, and delete stay inside one account", async () => {
  const store = memoryStore();
  const a = createPlanApi({ owner: async () => "account-a", store });
  const b = createPlanApi({ owner: async () => "account-b", store });
  assert.equal((await a.save(request())).status, 200);
  assert.equal((await a.save(request())).status, 200);
  assert.equal((await (await a.list()).json()).plans.length, 1);
  assert.equal((await (await b.list()).json()).plans.length, 0);
  assert.equal((await b.get(id)).status, 404);
  assert.equal((await b.remove(request(), id)).status, 404);
  assert.equal((await b.save(request({ ...fixture, name: "Other account" }))).status, 200);
  assert.equal((await (await a.get(id)).json()).plan.name, "Window desk");
  assert.equal((await a.remove(request(), id)).status, 204);
  assert.equal((await a.get(id)).status, 404);
  assert.equal((await b.get(id)).status, 200);
});

test("plans reject cross-origin writes and missing origins", async () => {
  const api = createPlanApi({ owner: async () => "account", store: memoryStore() });
  assert.equal((await api.save(request(fixture, { origin: "https://attacker.example" }))).status, 403);
  assert.equal((await api.save(request(fixture, { "sec-fetch-site": "cross-site" }))).status, 403);
  const noOrigin = request(); noOrigin.headers.delete("origin");
  assert.equal((await api.save(noOrigin)).status, 403);
});

test("plans reject invalid bodies before storage", async () => {
  const api = createPlanApi({ owner: async () => "account", store: memoryStore() });
  assert.equal((await api.save(request(fixture, { "content-type": "text/plain" }))).status, 415);
  assert.equal((await api.save(new Request(`${origin}/api/plans`, { method: "POST", headers: { origin, "content-type": "application/json" }, body: "{" }))).status, 400);
  assert.equal((await api.save(request(fixture, { "content-length": String(MAX_BODY_BYTES + 1) }))).status, 413);
  assert.equal((await api.save(request({ ...fixture, notes: "a".repeat(MAX_BODY_BYTES) }))).status, 413);
  assert.equal((await api.save(request({ ...fixture, owner_id: "other-user" }))).status, 400);
  assert.equal((await api.get("not-a-uuid")).status, 400);
});

test("plans enforce budget, market, product, and hotspot boundaries", () => {
  for (const bad of [
    { ...fixture, budget: -1 },
    { ...fixture, budget: Infinity },
    { ...fixture, market: "US", currency: "INR" },
    { ...fixture, items: [fixture.items[0], fixture.items[0]] },
    { ...fixture, owned: ["monitor", "monitor"] },
    { ...fixture, layout: { monitor: { x: 101, y: 30 } } },
    { ...fixture, layout: { monitor: { x: 40, y: -1 } } },
  ]) assert.equal(planSchema.safeParse(bad).success, false);
  assert.equal(planSchema.safeParse({ ...fixture, budget: 0, layout: { monitor: { x: 0, y: 100 } } }).success, true);
});

test("photos accept raster data and reject executable or oversized input", () => {
  const png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl8kD8AAAAASUVORK5CYII=";
  assert.equal(planSchema.safeParse({ ...fixture, photo: png }).success, true);
  for (const photo of ["https://attacker.example/photo.jpg", "data:image/svg+xml;base64,PHN2Zy8+", "data:image/png;base64,SGVsbG8gd29ybGQh", `data:image/jpeg;base64,${Buffer.alloc(MAX_PHOTO_BYTES + 1).toString("base64")}`]) {
    assert.equal(planSchema.safeParse({ ...fixture, photo }).success, false);
  }
});

test("backend errors hide provider details", async () => {
  const api = createPlanApi({ owner: async () => { throw new Error("postgres://private-secret"); }, store: memoryStore() });
  const response = await api.list();
  assert.equal(response.status, 503);
  assert.doesNotMatch(await response.text(), /postgres|private-secret/);
});

test("cloud quota returns an actionable conflict", async () => {
  const store = memoryStore();
  store.save = async () => null;
  const api = createPlanApi({ owner: async () => "account", store });
  const response = await api.save(request());
  assert.equal(response.status, 409);
  assert.match(await response.text(), /30 saved plans/);
});
