import { z } from "zod";
import { MAX_BODY_BYTES, planSchema, type PlanInput, type PlanSummary, type SavedPlan } from "./validation";

export interface PlanStore {
  list(owner: string): Promise<PlanSummary[]>;
  get(owner: string, id: string): Promise<SavedPlan | null>;
  save(owner: string, plan: PlanInput): Promise<SavedPlan | null>;
  remove(owner: string, id: string): Promise<boolean>;
}

export class HttpError extends Error {
  constructor(readonly status: number, message: string) { super(message); }
}

export function json(value: unknown, status = 200) {
  return Response.json(value, { status, headers: { "Cache-Control": "no-store, private", "Vary": "Cookie", "X-Content-Type-Options": "nosniff" } });
}

export function requireSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const site = request.headers.get("sec-fetch-site");
  const url = new URL(request.url);
  // Next.js can use its listen address in request.url. Host is the browser's destination.
  const host = request.headers.get("host");
  const expected = host && /^[a-zA-Z0-9.:[\]-]+$/.test(host) ? `${url.protocol}//${host}` : url.origin;
  if (!origin || origin !== expected || (site && site !== "same-origin" && site !== "none")) {
    throw new HttpError(403, "Open Deskloom in this browser to change a plan.");
  }
}

export async function readJson(request: Request, limit = MAX_BODY_BYTES): Promise<unknown> {
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    throw new HttpError(415, "Send the plan as JSON.");
  }
  const length = request.headers.get("content-length");
  if (length && (!/^\d+$/.test(length) || Number(length) > limit)) {
    throw new HttpError(413, "The plan is too large. Use a smaller photo.");
  }
  if (!request.body) throw new HttpError(400, "The plan is empty.");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > limit) {
        await reader.cancel();
        throw new HttpError(413, "The plan is too large. Use a smaller photo.");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const body = Buffer.concat(chunks);
  try { return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(body)); }
  catch { throw new HttpError(400, "The plan contains invalid JSON."); }
}

export function createPlanApi(deps: { owner: () => Promise<string | null>; store: PlanStore }) {
  async function run(action: (owner: string) => Promise<Response>) {
    try {
      const owner = await deps.owner();
      if (!owner) return json({ error: "Sign in to access your saved plans." }, 401);
      return await action(owner);
    } catch (error) {
      if (error instanceof HttpError) return json({ error: error.message }, error.status);
      return json({ error: "Cloud services are unavailable. Your local plan is safe. Try again later." }, 503);
    }
  }
  return {
    list: () => run(async (owner) => json({ plans: await deps.store.list(owner) })),
    get: (id: string) => run(async (owner) => {
      if (!z.uuid().safeParse(id).success) return json({ error: "The plan ID is invalid." }, 400);
      const plan = await deps.store.get(owner, id);
      return plan ? json({ plan }) : json({ error: "This plan does not exist in your account." }, 404);
    }),
    save: (request: Request) => run(async (owner) => {
      requireSameOrigin(request);
      const result = planSchema.safeParse(await readJson(request));
      if (!result.success) return json({ error: "Check your plan details and try again.", fields: [...new Set(result.error.issues.map((issue) => issue.path[0]).filter(Boolean))] }, 400);
      const plan = await deps.store.save(owner, result.data);
      if (!plan) return json({ error: "You have 30 saved plans. Delete a plan before you save another." }, 409);
      return json({ plan: { ...plan, photo: null, hasPhoto: Boolean(plan.photo) } });
    }),
    remove: (request: Request, id: string) => run(async (owner) => {
      requireSameOrigin(request);
      if (!z.uuid().safeParse(id).success) return json({ error: "The plan ID is invalid." }, 400);
      const removed = await deps.store.remove(owner, id);
      return removed ? new Response(null, { status: 204, headers: { "Cache-Control": "no-store, private" } }) : json({ error: "This plan does not exist in your account." }, 404);
    }),
  };
}
