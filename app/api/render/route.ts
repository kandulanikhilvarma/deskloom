import { getCurrentOwner } from "@/lib/auth/server";
import { createRenderApi } from "@/lib/render/api";
import { renderStore } from "@/lib/render/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 180;

const api = createRenderApi({ owner: getCurrentOwner, store: renderStore });
export async function GET() { return api.availability(); }
export async function POST(request: Request) { return api.render(request); }
