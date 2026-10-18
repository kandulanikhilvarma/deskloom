import { getAuth } from "@/lib/auth/server";
import { HttpError, json, readJson, requireSameOrigin } from "@/lib/plans/api";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Context = { params: Promise<{ path: string[] }> };
async function handle(request: Request, context: Context) {
  try {
    if (request.method !== "GET") {
      requireSameOrigin(request);
      if (request.body) await readJson(request.clone(), 32_768);
    }
    const method = request.method as "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    return await getAuth().handler()[method](request, context);
  } catch (error) {
    if (error instanceof HttpError) return json({ message: error.message, code: "INVALID_REQUEST" }, error.status);
    return json({ message: "Account services are unavailable. Try again later.", code: "SERVICE_UNAVAILABLE" }, 503);
  }
}

export { handle as GET, handle as POST, handle as PUT, handle as DELETE, handle as PATCH };
