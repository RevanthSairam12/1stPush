-- Feature: Student Dashboard (students, teams, team_members, ideas)
-- Tables: students, teams, team_members, ideas
-- Relationships:
-- - students may belong to a team (students.team_id -> teams.id)
-- - teams.leader_id -> students.id
-- - team_members.team_id -> teams.id, team_members.student_id -> students.id
-- - ideas.team_id -> teams.id

BEGIN;

-- Students
CREATE TABLE IF NOT EXISTS public.students (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,
  roll_number  TEXT NOT NULL UNIQUE,
  email        CITEXT NOT NULL UNIQUE,
  role         public.student_role NOT NULL DEFAULT 'member',
  team_id      UUID, -- FK added after teams table is created
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_students_team ON public.students(team_id);

CREATE TRIGGER set_timestamp_students
BEFORE UPDATE ON public.students
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Teams
CREATE TABLE IF NOT EXISTS public.teams (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  leader_id    UUID NOT NULL REFERENCES public.students(id) ON DELETE RESTRICT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_teams_leader ON public.teams(leader_id);

CREATE TRIGGER set_timestamp_teams
BEFORE UPDATE ON public.teams
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Team members
CREATE TABLE IF NOT EXISTS public.team_members (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id      UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
  student_id   UUID NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (team_id, student_id)
);

CREATE INDEX IF NOT EXISTS idx_team_members_team ON public.team_members(team_id);
CREATE INDEX IF NOT EXISTS idx_team_members_student ON public.team_members(student_id);

-- Ideas
CREATE TABLE IF NOT EXISTS public.ideas (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id      UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
  title        TEXT NOT NULL,
  description  TEXT NOT NULL,
  status       public.submission_status NOT NULL DEFAULT 'submitted',
  feedback     TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ideas_team ON public.ideas(team_id);

CREATE TRIGGER set_timestamp_ideas
BEFORE UPDATE ON public.ideas
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
-- Add FK for students.team_id now that teams table exists
ALTER TABLE public.students
  ADD CONSTRAINT students_team_fk FOREIGN KEY (team_id) REFERENCES public.teams(id) ON DELETE SET NULL;

-- Now that teams exists, update students.team_id FK is valid (already declared as forward reference)

COMMIT;
