-- Feature: App Users (as used by lib/supabase.ts)
-- Tables: users, admin_users
-- Relationships:
-- - users can have many registrations and submissions
-- - admin_users used for fallback admin auth

BEGIN;

-- users table per lib/supabase.ts (email, full_name, roll_number, etc.)
CREATE TABLE IF NOT EXISTS public.users (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email            CITEXT NOT NULL UNIQUE,
  full_name        TEXT NOT NULL,
  roll_number      TEXT NOT NULL UNIQUE,
  branch           TEXT NOT NULL,
  year             TEXT NOT NULL,
  graduation_year  TEXT NOT NULL,
  phone_number     TEXT NOT NULL,
  status           public.user_status NOT NULL DEFAULT 'pending',
  last_login       TIMESTAMPTZ,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at       TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_users_status ON public.users(status);
CREATE INDEX IF NOT EXISTS idx_users_roll ON public.users(roll_number);

CREATE TRIGGER set_timestamp_users_app
BEFORE UPDATE ON public.users
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- admin_users for panel login fallback
CREATE TABLE IF NOT EXISTS public.admin_users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username    CITEXT NOT NULL UNIQUE,
  email       CITEXT UNIQUE,
  role        public.admin_role NOT NULL DEFAULT 'admin',
  password_hash TEXT, -- optional if using Supabase Auth; store a bcrypt hash if used
  last_login  TIMESTAMPTZ,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at  TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp_admin_users
BEFORE UPDATE ON public.admin_users
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

COMMIT;
