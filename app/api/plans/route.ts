import { plansApi } from "@/lib/plans/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() { return plansApi.list(); }
export async function POST(request: Request) { return plansApi.save(request); }
