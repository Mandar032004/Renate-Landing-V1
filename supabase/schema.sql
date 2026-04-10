-- ============================================================
-- Renate AI  –  "Talk to Us" contact leads table
-- Run this in: Supabase Dashboard → SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS contact_leads (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT        NOT NULL,
  phone       TEXT        NOT NULL,
  email       TEXT        NOT NULL,
  company     TEXT        NOT NULL,
  linkedin    TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Anyone (anonymous visitors) can insert a lead via the form
CREATE POLICY "anon_insert" ON contact_leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users (admins) can read leads
CREATE POLICY "auth_select" ON contact_leads
  FOR SELECT TO authenticated
  USING (true);
