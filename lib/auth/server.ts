import { createNeonAuth } from "@neondatabase/auth/next/server";

export class ServiceUnavailableError extends Error {
  constructor() {
    super("Cloud services are unavailable. Try again later.");
    this.name = "ServiceUnavailableError";
  }
}

let instance: ReturnType<typeof createNeonAuth> | undefined;

// Create the SDK only during a request. A local build needs no cloud secrets.
export function getAuth() {
  if (instance) return instance;
  const baseUrl = process.env.NEON_AUTH_BASE_URL;
  const secret = process.env.NEON_AUTH_COOKIE_SECRET ?? process.env.COOKIE_SECRET;
  if (!baseUrl || !secret || secret.length < 32) throw new ServiceUnavailableError();
  try {
    const url = new URL(baseUrl);
    if (url.protocol !== "https:") throw new ServiceUnavailableError();
  } catch {
    throw new ServiceUnavailableError();
  }
  instance = createNeonAuth({ baseUrl, cookies: { secret }, logLevel: "silent" });
  return instance;
}

export async function getCurrentOwner(): Promise<string | null> {
  const { data, error } = await getAuth().getSession();
  if (error?.status === 401) return null;
  if (error) throw new ServiceUnavailableError();
  return data?.user?.id ?? null;
}
