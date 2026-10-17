import { z } from "zod";
import { createHash } from "node:crypto";
import { HttpError, json, readJson, requireSameOrigin } from "../plans/api";
import { isValidPhoto, MAX_PHOTO_BYTES } from "../plans/validation";

const renderSchema = z.object({
  requestId: z.uuid(),
  photo: z.string().max(Math.ceil(MAX_PHOTO_BYTES / 3) * 4 + 30).refine(isValidPhoto),
  consent: z.literal(true),
  prompt: z.string().trim().min(10).max(2500),
}).strict();

export type Reservation = "reserved" | "duplicate" | "busy" | "quota";
export interface RenderStore {
  reserve(owner: string, requestId: string): Promise<Reservation>;
  settle(owner: string, requestId: string, status: "complete" | "failed" | "uncertain"): Promise<void>;
}

export function imageGenerationAvailable() {
  return process.env.IMAGE_GENERATION_ENABLED === "true" && Boolean(process.env.OPENAI_API_KEY);
}

async function limitedProviderJson(response: Response): Promise<unknown> {
  if (!response.body) throw new Error("The image provider returned no data.");
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 4_100_000) { await reader.cancel(); throw new Error("The image response is too large."); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

export function createRenderApi(deps: {
  owner: () => Promise<string | null>;
  store: RenderStore;
  available?: () => boolean;
  fetcher?: typeof fetch;
}) {
  const available = deps.available ?? imageGenerationAvailable;
  return {
    availability: () => json({ available: available() }),
    async render(request: Request) {
      if (!available()) return json({ error: "Photo transformations are not active. Use the interactive plan while the owner activates an image provider." }, 503);
      let owner: string | null = null;
      let requestId: string | null = null;
      let reserved = false;
      let sentToProvider = false;
      try {
        requireSameOrigin(request);
        owner = await deps.owner();
        if (!owner) return json({ error: "Sign in before you transform a photo." }, 401);
        const result = renderSchema.safeParse(await readJson(request));
        if (!result.success) return json({ error: "Use a photo of 1 MB or less and agree to send it to the image provider." }, 400);
        const input = result.data;
        requestId = input.requestId;
        const reservation = await deps.store.reserve(owner, requestId);
        if (reservation === "duplicate") return json({ error: "This request has already started. It will not run again. Keep any result that this browser received." }, 409);
        if (reservation === "busy") return json({ error: "A photo request is still active. Wait five minutes before you start another." }, 409);
        if (reservation === "quota") return json({ error: "You have used three photo requests today. Try again after 00:00 UTC." }, 429);
        reserved = true;
        sentToProvider = true;
        const response = await (deps.fetcher ?? fetch)("https://api.openai.com/v1/images/edits", {
          method: "POST",
          headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            model: process.env.IMAGE_MODEL || "gpt-image-2",
            images: [{ image_url: input.photo }],
            prompt: "Create an illustrative desk setup concept from the supplied room photo. Preserve the room geometry and the window positions. Keep exits and ventilation clear. Product appearance is illustrative; do not add price labels or claim exact dimensions. Follow these desk preferences: " + input.prompt,
            n: 1,
            size: "1024x1024",
            quality: "low",
            output_format: "jpeg",
            output_compression: 70,
            safety_identifier: createHash("sha256").update(owner).digest("hex"),
          }),
          signal: AbortSignal.timeout(150_000),
        });
        if (!response.ok) {
          await response.body?.cancel();
          await deps.store.settle(owner, requestId, "failed");
          reserved = false;
          return json({ error: "The image provider did not return a photo. This request will not retry automatically. Your plan is safe." }, 502);
        }
        const output = await limitedProviderJson(response);
        const parsed = z.object({ data: z.array(z.object({ b64_json: z.string().min(16).max(4_000_000) })).min(1).max(1) }).safeParse(output);
        if (!parsed.success) throw new Error("The image provider returned invalid data.");
        const base64 = parsed.data.data[0].b64_json;
        if (!/^[A-Za-z0-9+/]+={0,2}$/.test(base64) || base64.length % 4 !== 0) throw new Error("The image data is invalid.");
        const bytes = Buffer.from(base64, "base64");
        if (bytes.toString("base64") !== base64 || bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff) throw new Error("The image format is invalid.");
        await deps.store.settle(owner, requestId, "complete").catch(() => undefined);
        reserved = false;
        return json({ image: `data:image/jpeg;base64,${base64}`, requestId });
      } catch (error) {
        if (reserved && owner && requestId) await deps.store.settle(owner, requestId, sentToProvider ? "uncertain" : "failed").catch(() => undefined);
        if (error instanceof HttpError) return json({ error: error.message }, error.status);
        return json({ error: sentToProvider
          ? "The image request did not finish in this browser. The provider can still process it. This request will not retry automatically."
          : "Photo services are unavailable. Your plan is safe. Try again later." }, sentToProvider ? 502 : 503);
      }
    },
  };
}
