import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

async function main() {
  const envFile = fileURLToPath(new URL("../.env.local", import.meta.url));
  try { process.loadEnvFile(envFile); }
  catch (error) { if (error.code !== "ENOENT") throw error; }

  const schema = await readFile(new URL("../schema.sql", import.meta.url), "utf8");
  // This file has standalone DDL statements without procedural SQL or quoted semicolons.
  const statements = schema.replace(/--[^\r\n]*/g, "").split(";")
    .map((statement) => statement.trim())
    .filter((statement) => statement && !/^(BEGIN|COMMIT)$/i.test(statement));
  if (!statements.length) throw new Error("The schema is empty.");
  if (process.argv.includes("--check")) {
    console.log(`Parsed ${statements.length} schema statements. No database query ran.`);
    return;
  }

  const connectionString = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!connectionString) throw new Error("Set DATABASE_URL_UNPOOLED before the migration.");
  if (new URL(connectionString).hostname.includes("-pooler.")) {
    throw new Error("Set DATABASE_URL_UNPOOLED to the direct Neon connection URL.");
  }
  const sql = neon(connectionString);
  await sql.transaction(statements.map((statement) => sql.query(statement, [])));
  const [tables] = await sql`
    SELECT to_regclass('public.deskloom_plans')::text AS plans,
           to_regclass('public.deskloom_render_requests')::text AS renders
  `;
  if (!tables.plans || !tables.renders) throw new Error("The database schema check failed.");
  console.log(`Applied ${statements.length} schema statements. Both Deskloom tables exist.`);
}

main().catch((error) => {
  const configurationErrors = new Set([
    "Set DATABASE_URL_UNPOOLED before the migration.",
    "Set DATABASE_URL_UNPOOLED to the direct Neon connection URL.",
    "The schema is empty.",
    "The database schema check failed.",
  ]);
  console.error(configurationErrors.has(error.message) ? error.message : "The database migration failed. Check the connection and schema.");
  process.exitCode = 1;
});
