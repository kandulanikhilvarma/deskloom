import { neon } from "@neondatabase/serverless";
import { ServiceUnavailableError } from "../auth/server";
import type { PlanStore } from "./api";
import type { PlanInput, PlanSummary, SavedPlan } from "./validation";

function database() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new ServiceUnavailableError();
  return neon(url);
}

type Row = { content: PlanInput; created_at: string | Date; updated_at: string | Date; has_photo?: boolean };
function fromRow(row: Row): SavedPlan {
  return { ...row.content, createdAt: new Date(row.created_at).toISOString(), updatedAt: new Date(row.updated_at).toISOString() };
}

export const planStore: PlanStore = {
  async list(owner) {
    const sql = database();
    const rows = await sql`
      SELECT content - 'photo' AS content, created_at, updated_at,
             content->>'photo' IS NOT NULL AS has_photo
      FROM deskloom_plans WHERE owner_id = ${owner}
      ORDER BY updated_at DESC LIMIT 30
    `;
    return (rows as Row[]).map((row): PlanSummary => ({ ...fromRow(row), photo: null, hasPhoto: Boolean(row.has_photo) }));
  },
  async get(owner, id) {
    const sql = database();
    const rows = await sql`
      SELECT content, created_at, updated_at FROM deskloom_plans
      WHERE owner_id = ${owner} AND client_id = ${id}::uuid LIMIT 1
    `;
    return rows[0] ? fromRow(rows[0] as Row) : null;
  },
  async save(owner, plan) {
    const sql = database();
    // The lock serializes writes for one owner. The next statement gets a fresh snapshot.
    const result = await sql.transaction([
      sql`SELECT pg_advisory_xact_lock(hashtextextended(${owner}, 0))`,
      sql`
        INSERT INTO deskloom_plans (owner_id, client_id, content)
        SELECT ${owner}, ${plan.id}::uuid, ${JSON.stringify(plan)}::jsonb
        WHERE (SELECT COUNT(*) FROM deskloom_plans WHERE owner_id = ${owner}) < 30
           OR EXISTS (SELECT 1 FROM deskloom_plans WHERE owner_id = ${owner} AND client_id = ${plan.id}::uuid)
        ON CONFLICT (owner_id, client_id)
        DO UPDATE SET content = EXCLUDED.content,
          updated_at = CASE WHEN deskloom_plans.content IS DISTINCT FROM EXCLUDED.content THEN now() ELSE deskloom_plans.updated_at END
        RETURNING content, created_at, updated_at
      `,
    ]);
    const rows = result[1];
    return rows[0] ? fromRow(rows[0] as Row) : null;
  },
  async remove(owner, id) {
    const sql = database();
    const rows = await sql`
      DELETE FROM deskloom_plans WHERE owner_id = ${owner} AND client_id = ${id}::uuid
      RETURNING client_id
    `;
    return rows.length > 0;
  },
};
