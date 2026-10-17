import { neon } from "@neondatabase/serverless";
import { ServiceUnavailableError } from "../auth/server";
import type { RenderStore, Reservation } from "./api";

function database() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new ServiceUnavailableError();
  return neon(url);
}

export const renderStore: RenderStore = {
  async reserve(owner, requestId) {
    const sql = database();
    const result = await sql.transaction([
      sql`SELECT pg_advisory_xact_lock(hashtextextended(${owner}, 1))`,
      sql`
        WITH existing AS MATERIALIZED (
          SELECT 1 FROM deskloom_render_requests WHERE owner_id = ${owner} AND request_id = ${requestId}::uuid
        ), active AS MATERIALIZED (
          SELECT 1 FROM deskloom_render_requests WHERE owner_id = ${owner} AND status = 'started' AND created_at > now() - interval '5 minutes'
        ), daily AS MATERIALIZED (
          SELECT COUNT(*) AS count FROM deskloom_render_requests
          WHERE owner_id = ${owner} AND created_at >= date_trunc('day', now() AT TIME ZONE 'UTC') AT TIME ZONE 'UTC'
        ), inserted AS (
          INSERT INTO deskloom_render_requests (owner_id, request_id)
          SELECT ${owner}, ${requestId}::uuid
          WHERE NOT EXISTS (SELECT 1 FROM existing) AND NOT EXISTS (SELECT 1 FROM active)
            AND (SELECT count FROM daily) < 3
          ON CONFLICT (owner_id, request_id) DO NOTHING RETURNING request_id
        )
        SELECT CASE WHEN EXISTS (SELECT 1 FROM inserted) THEN 'reserved'
          WHEN EXISTS (SELECT 1 FROM existing) THEN 'duplicate'
          WHEN EXISTS (SELECT 1 FROM active) THEN 'busy' ELSE 'quota' END AS reservation
      `,
    ]);
    return result[1][0].reservation as Reservation;
  },
  async settle(owner, requestId, status) {
    const sql = database();
    await sql`UPDATE deskloom_render_requests SET status = ${status}, updated_at = now()
      WHERE owner_id = ${owner} AND request_id = ${requestId}::uuid AND status = 'started'`;
  },
};
