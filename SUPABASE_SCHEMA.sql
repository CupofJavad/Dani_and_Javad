-- Run this in the Supabase SQL editor to create the rsvps table.
-- Then set env vars: PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY).

create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  attending text not null check (attending in ('yes', 'no', 'waitlist')),
  plus_one text,
  notes text,
  created_at timestamptz default now()
);

-- Optional: enable RLS and allow service role / anon to insert (for the form) and select (for export with service key).
alter table public.rsvps enable row level security;

create policy "Allow insert for anon"
  on public.rsvps for insert
  to anon
  with check (true);

create policy "Allow all for service role"
  on public.rsvps
  to service_role
  using (true)
  with check (true);
