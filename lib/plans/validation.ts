import { z } from "zod";

export const MAX_PHOTO_BYTES = 1024 * 1024;
export const MAX_BODY_BYTES = 1_500_000;
const token = z.string().trim().min(1).max(80).regex(/^[a-zA-Z0-9_-]+$/);

export function isValidPhoto(value: string): boolean {
  const match = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(value);
  if (!match || match[2].length % 4 !== 0) return false;
  const bytes = Buffer.from(match[2], "base64");
  if (bytes.length > MAX_PHOTO_BYTES || bytes.length < 12) return false;
  if (bytes.toString("base64") !== match[2]) return false;
  if (match[1] === "jpeg") return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (match[1] === "png") return bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  return bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP";
}

const layout = z.record(token, z.object({
  x: z.number().finite().min(0).max(100),
  y: z.number().finite().min(0).max(100),
}).strict()).refine((value) => Object.keys(value).length <= 60, "The layout has too many items.");

export const planSchema = z.object({
  id: z.uuid().transform((value) => value.toLowerCase()),
  name: z.string().trim().min(1).max(80),
  market: z.enum(["IN", "US", "EU"]),
  currency: z.enum(["INR", "USD", "EUR"]),
  budget: z.number().finite().min(0).max(10_000_000),
  mode: z.enum(["calm", "focus", "studio"]),
  owned: z.array(token).max(30),
  ownedLabels: z.record(token, z.string().trim().max(120)).optional(),
  photo: z.string().max(Math.ceil(MAX_PHOTO_BYTES / 3) * 4 + 30).refine(isValidPhoto, "Use a JPEG, PNG, or WebP photo of 1 MB or less.").nullable().default(null),
  items: z.array(z.object({ productId: token, owned: z.boolean() }).strict()).max(60).default([]),
  notes: z.string().trim().max(2000).default(""),
  layout: layout.optional(),
  constraints: z.object({
    noDrill: z.boolean(),
    daylight: z.enum(["low", "indirect", "bright"]),
    width: z.number().finite().min(40).max(400),
    reserve: z.number().finite().min(0).max(50),
    wireless: z.boolean(),
  }).strict().optional(),
}).strict().superRefine((value, ctx) => {
  const expected = { IN: "INR", US: "USD", EU: "EUR" }[value.market];
  if (value.currency !== expected) ctx.addIssue({ code: "custom", path: ["currency"], message: "Use the currency for the selected market." });
  if (new Set(value.items.map((item) => item.productId)).size !== value.items.length) {
    ctx.addIssue({ code: "custom", path: ["items"], message: "Remove duplicate products." });
  }
  if (new Set(value.owned).size !== value.owned.length) {
    ctx.addIssue({ code: "custom", path: ["owned"], message: "Remove duplicate owned categories." });
  }
  if (value.ownedLabels && Object.keys(value.ownedLabels).length > 30) {
    ctx.addIssue({ code: "custom", path: ["ownedLabels"], message: "Use 30 owned labels or less." });
  }
});

export type PlanInput = z.infer<typeof planSchema>;
export type SavedPlan = PlanInput & { createdAt: string; updatedAt: string };
export type PlanSummary = Omit<SavedPlan, "photo"> & { photo: null; hasPhoto: boolean };
