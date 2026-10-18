import assert from "node:assert/strict";
import test from "node:test";
import { createRenderApi, imageCredential, type RenderStore } from "../lib/render/api";

const requestId = "11111111-1111-4111-8111-111111111111";
const photo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl8kD8AAAAASUVORK5CYII=";
const origin = "https://deskloom.example";
function request(changes = {}) {
  return new Request(`${origin}/api/render`, { method: "POST", headers: { origin, "content-type": "application/json" }, body: JSON.stringify({ requestId, photo, consent: true, prompt: "A calm desk with a lamp", ...changes }) });
}
function store(): RenderStore { return { reserve: async () => "reserved", settle: async () => undefined }; }

test("inactive image service never reaches auth, quota, or provider", async () => {
  const fail = async (): Promise<never> => { throw new Error("Must not run"); };
  const api = createRenderApi({ available: () => false, owner: fail, store: { reserve: fail, settle: fail }, fetcher: fail });
  assert.deepEqual(await (await api.availability()).json(), { available: false });
  assert.equal((await api.render(request())).status, 503);
});

test('hosted image credentials use the request OIDC context without exposing a token', async () => {
  assert.equal(await imageCredential({VERCEL:'1'},async()=>'request-token'),'request-token');
  assert.equal(await imageCredential({VERCEL:'1'},async()=>{throw new Error('missing');}),undefined);
  assert.equal(await imageCredential({},async()=>{throw new Error('must not run');}),undefined);
  assert.equal(await imageCredential({AI_GATEWAY_API_KEY:'gateway-key'},async()=>{throw new Error('must not run');}),'gateway-key');
});

test("image edits need a session and explicit photo consent", async () => {
  const anonymous = createRenderApi({ available: () => true, owner: async () => null, store: store() });
  assert.equal((await anonymous.render(request())).status, 401);
  const signedIn = createRenderApi({ available: () => true, owner: async () => "account", store: store() });
  assert.equal((await signedIn.render(request({ consent: false }))).status, 400);
  assert.equal((await signedIn.render(request({ photo: "https://attacker.example/photo.jpg" }))).status, 400);
});

test("duplicate, active, and daily-limit image requests never call the provider", async () => {
  for (const [reservation, expected] of [["duplicate", 409], ["busy", 409], ["quota", 429]] as const) {
    const quotaStore = store(); quotaStore.reserve = async () => reservation;
    const api = createRenderApi({ available: () => true, owner: async () => "account", store: quotaStore, fetcher: async () => { throw new Error("Must not run"); } });
    assert.equal((await api.render(request())).status, expected);
  }
});

test("an uncertain provider result consumes its reservation without automatic retry", async () => {
  const statuses: string[] = [];
  const quotaStore = store(); quotaStore.settle = async (_owner, _id, status) => { statuses.push(status); };
  let calls = 0;
  const api = createRenderApi({ available: () => true, owner: async () => "account", store: quotaStore, fetcher: async () => { calls++; throw new Error("private-provider-token"); } });
  const response = await api.render(request());
  assert.equal(response.status, 502);
  assert.equal(calls, 1);
  assert.deepEqual(statuses, ["uncertain"]);
  assert.doesNotMatch(await response.text(), /private-provider-token/);
});

test("a provider rejection gives a safe error and a failed outcome", async () => {
  const statuses: string[] = [];
  const quotaStore = store(); quotaStore.settle = async (_owner, _id, status) => { statuses.push(status); };
  const api = createRenderApi({ available: () => true, owner: async () => "account", store: quotaStore, fetcher: async () => new Response("private-provider-data", { status: 403 }) });
  const response = await api.render(request());
  assert.equal(response.status, 502);
  assert.deepEqual(statuses, ["failed"]);
  assert.doesNotMatch(await response.text(), /private-provider-data/);
});

test("successful mock image output returns JPEG and records completion", async () => {
  const jpeg = Buffer.from([255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 1]).toString("base64");
  const statuses: string[] = [];
  const quotaStore = store(); quotaStore.settle = async (_owner, _id, status) => { statuses.push(status); };
  let providerBody: Record<string, unknown> = {};
  const api = createRenderApi({ available: () => true, owner: async () => "account", store: quotaStore, fetcher: async (_url, init) => {
    providerBody = JSON.parse(init?.body as string);
    return Response.json({ data: [{ b64_json: jpeg }] });
  } });
  const response = await api.render(request());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { requestId, image: `data:image/jpeg;base64,${jpeg}` });
  assert.deepEqual(statuses, ["complete"]);
  assert.equal(providerBody.n, 1);
  assert.equal(providerBody.output_format, "jpeg");
  assert.notEqual(providerBody.safety_identifier, "account");
});

test("invalid provider output gives no fabricated image", async () => {
  const api = createRenderApi({ available: () => true, owner: async () => "account", store: store(), fetcher: async () => Response.json({ data: [{ b64_json: "PHN2ZyBvbmxvYWQ9eC8+" }] }) });
  assert.equal((await api.render(request())).status, 502);
});

test('image requests use only canonical catalog reference images',async()=>{
 let body:Record<string,unknown>={};
 const api=createRenderApi({available:()=>true,owner:async()=>'account',store:store(),fetcher:async(_url,init)=>{
  body=JSON.parse(init!.body as string);return new Response('',{status:403});
 }});
 assert.equal((await api.render(request({productIds:['de-lagkapten','de-s2725hsm']}))).status,502);
 const images=body.images as {image_url:string}[];
 assert.equal(images[0].image_url,photo);assert.equal(images.length,3);
 assert.match(images[1].image_url,/ikea\.com\/de\/de\/images\/products/);
 assert.match(images[2].image_url,/s2725hsm/);
 assert.equal((await api.render(request({productIds:['https://attacker.example/steal']}))).status,400);
});
