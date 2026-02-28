# 05 — Critical paths and references

## Repo and deploy

- **Git remote:** `git@github.com:CupofJavad/Dani_and_Javad.git`
- **Branch:** `main`
- **Vercel:** Project not yet linked via CLI in first agent’s run; may exist if user already imported repo in dashboard.

## Environment (Wedding Site section)

- **File:** `.env` (gitignored); template: `.env.example`
- **Required for RSVP:** `PUBLIC_SUPABASE_URL`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`
- **Optional:** `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_SECRET`, `RESEND_API_KEY`, `RESEND_FROM`, `SITE_URL`
- **Style:** No quotes after `=`; section comment: `# Wedding Site (Dani & Javad) …`

## Config (single source of truth for copy)

- **File:** `src/lib/config.ts`
- **Exports:** `WeddingConfig` interface and `config` object
- **Fields:** coupleNames, weddingDate, weddingTime, venueName, venueAddress, venueMapsUrl, capacity (25), rsvpDeadline, tagline, ogImage, heroImage, storyImage1, storyImage2, galleryImages
- **Current values:** Date 2026-05-09, venue Garrapata State Park, RSVP deadline 2026-04-18

## Supabase

- **Project URL (from .env):** `https://eabncidlwjdpdrmvpcrc.supabase.co`
- **SQL Editor:** https://supabase.com/dashboard/project/eabncidlwjdpdrmvpcrc/sql
- **Schema:** `SUPABASE_SCHEMA.sql` in repo root — creates `public.rsvps` and RLS policies (anon insert, service_role full).

## Key app paths

| Path | Purpose |
|------|--------|
| `src/routes/+page.svelte` | Home (hero, story, locations, FAQ, RSVP form). |
| `src/routes/+page.server.ts` | Form action: submit RSVP to Supabase; 25-cap and waitlist logic. |
| `src/routes/admin/+page.server.ts` | Load RSVPs (service role); token check. |
| `src/routes/admin/+page.svelte` | Admin UI: list RSVPs, link to CSV. |
| `src/routes/details/+page.svelte` | Print-friendly details page. |
| `src/routes/api/calendar.ics/+server.ts` | GET .ics for wedding event. |
| `src/routes/api/rsvp-qr/+server.ts` | GET SVG QR code for RSVP URL. |
| `src/routes/api/rsvps/export/+server.ts` | GET CSV export; token required. |
| `src/lib/config.ts` | Wedding config. |
| `static/couple-photos/` | Optional couple images (hero, story, gallery). |

## Vercel and embed

- **Config:** `vercel.json` — headers for `frame-ancestors` (sites.google.com).
- **Adapter:** `@sveltejs/adapter-vercel` in `svelte.config.js`; runtime nodejs20.x.
- **MCP:** `.cursor/mcp.json` has `vercel` with url `https://mcp.vercel.com` (Cursor may need login).

## Docs (repo root)

- `README.md` — Quick start, config, Supabase, deploy, couple photos.
- `AGENTS.md` — Agent context (config, RSVP, calendar, export).
- `NEXT_STEPS.md` — Full flow and optional features.
- `DEPLOY_CHECKLIST.md` — Go-live steps (Supabase, Vercel login/link/prod, env vars).
- `SUPABASE_SCHEMA.sql` — Run once in Supabase.
- `NOTION_SETUP.md` — Wedding task list; Notion MCP when connected.
- **Plan:** `.cursor/plans/elopement_wedding_site_and_planning_a0cbd7f7.plan.md` — do not edit.

## Transcripts (raw)

- **Location:** `.cursor/projects/Users-Javad-Projects-Dani-Javad-Wedding-Site/agent-transcripts/`
- **Files:** `c7fc1472-1734-4061-be17-68cb0bff3140/c7fc1472-1734-4061-be17-68cb0bff3140.jsonl`, `f97d9290-2775-40f9-a60b-0ee1f5e82a89/f97d9290-2775-40f9-a60b-0ee1f5e82a89.jsonl`
- **Format:** JSONL (one JSON object per line). Use for full conversation history if needed.
