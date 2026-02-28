# 02 — Agent actions (what was built and decided)

## Repo and scaffold

- **SvelteKit** app in project root: `src/` (routes, layout, pages, api), `static/`, `svelte.config.js` with `@sveltejs/adapter-vercel`, `vercel.json` with `frame-ancestors` for Google Sites.
- **Git:** Repo initialized; `.gitignore` includes `.env`, `.cursor`, `.svelte-kit`, `node_modules`, `.vercel`. Remote `origin` = `git@github.com:CupofJavad/Dani_and_Javad.git`; `main` is the default branch and is pushed.

## Content and structure

- **Routes:** `/` (home with hero, story, locations, FAQ, RSVP), `/admin` (secret token), `/details` (print-friendly).
- **Config:** Single `src/lib/config.ts` — `WeddingConfig` with date, venue, capacity 25, RSVP deadline, optional `heroImage`, `storyImage1`, `storyImage2`, `galleryImages`.
- **Stock imagery:** Placeholders/Unsplash-style usage; couple photos wired via config paths (e.g. `static/couple-photos/`).

## RSVP

- **Form:** Name, email, attending (yes/no/waitlist), plus_one, notes. Submits via form action to Supabase `rsvps`.
- **Logic:** 25-guest cap; when “yes” count ≥ 25, new submissions saved as `waitlist`.
- **Success/error:** Shown via `form` prop (no redirect).
- **Optional:** Resend confirmation email when `RESEND_API_KEY` (and optionally `RESEND_FROM`, `SITE_URL`) set.

## Admin and export

- **Admin:** `/admin?token=ADMIN_SECRET` — lists RSVPs, link to “Download CSV”.
- **Export:** `GET /api/rsvps/export?token=ADMIN_SECRET` — returns CSV of RSVPs.

## Calendar

- **Endpoint:** `GET /api/calendar.ics` — returns .ics for wedding event (from config).
- **UI:** “Add to Calendar” link and optional subscribe; QR for RSVP at `GET /api/rsvp-qr` (SVG).

## Environment

- **.env:** Wedding Site section (no quotes): `PUBLIC_SUPABASE_URL`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`; optional `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_SECRET`, `RESEND_*`, `SITE_URL`. Same vars needed in Vercel.
- **.env.example:** Mirrors Wedding Site section (values empty or placeholder).

## Supabase

- **Table:** `rsvps` (id, name, email, attending, plus_one, notes, created_at). User must run `SUPABASE_SCHEMA.sql` in Supabase SQL Editor once.
- **RLS:** anon can insert; service_role has full access. Admin/export use service role when `SUPABASE_SERVICE_ROLE_KEY` is set.

## Deploy and embed

- **Vercel:** `vercel.json` and SvelteKit set headers so the app can be embedded in `https://sites.google.com`.
- **Vercel MCP:** Added to `.cursor/mcp.json` (url: `https://mcp.vercel.com`). User must complete “Needs login” in Cursor to use it.
- **Docs:** NEXT_STEPS.md (Options A–D: MCP, CLI, API, Dashboard), DEPLOY_CHECKLIST.md for go-live.

## Documentation added by agent

- README.md, AGENTS.md, NOTION_SETUP.md, SUPABASE_SCHEMA.sql, NEXT_STEPS.md, DEPLOY_CHECKLIST.md, .env.example. Plan file unchanged per user request.
