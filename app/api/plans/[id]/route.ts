import { plansApi } from "@/lib/plans/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Context = { params: Promise<{ id: string }> };
export async function GET(_request: Request, context: Context) { return plansApi.get((await context.params).id); }
export async function DELETE(request: Request, context: Context) { return plansApi.remove(request, (await context.params).id); }
