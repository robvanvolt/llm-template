import { FreshContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: FreshContext) => {
  const HYPR_API_KEY = Deno.env.get("HYPR_API_KEY");
  const HYPR_API_URL = Deno.env.get("HYPR_API_URL");
  if (!HYPR_API_KEY || !HYPR_API_URL) {
    return new Response("ENV_VARS not set", { status: 500 });
  }
  return new Response(JSON.stringify({
    "HYPR_API_KEY": HYPR_API_KEY,
    "HYPR_API_URL": HYPR_API_URL,
  }));
};
