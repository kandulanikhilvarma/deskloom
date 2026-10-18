BEGIN;

CREATE TABLE IF NOT EXISTS deskloom_plans (
  owner_id text NOT NULL CHECK (length(owner_id) BETWEEN 1 AND 256),
  client_id uuid NOT NULL,
  content jsonb NOT NULL CHECK (jsonb_typeof(content) = 'object' AND octet_length(content::text) <= 1500000),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (owner_id, client_id),
  CONSTRAINT plan_id_matches_content CHECK (content->>'id' = client_id::text)
);

CREATE INDEX IF NOT EXISTS deskloom_plans_owner_updated_idx ON deskloom_plans (owner_id, updated_at DESC);

-- Only the server uses this table. Do not grant access to browser database roles.
REVOKE ALL ON deskloom_plans FROM PUBLIC;

CREATE TABLE IF NOT EXISTS deskloom_render_requests (
  owner_id text NOT NULL CHECK (length(owner_id) BETWEEN 1 AND 256),
  request_id uuid NOT NULL,
  status text NOT NULL DEFAULT 'started' CHECK (status IN ('started', 'complete', 'failed', 'uncertain')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (owner_id, request_id)
);

CREATE INDEX IF NOT EXISTS deskloom_render_owner_created_idx ON deskloom_render_requests (owner_id, created_at DESC);
REVOKE ALL ON deskloom_render_requests FROM PUBLIC;

COMMIT;
