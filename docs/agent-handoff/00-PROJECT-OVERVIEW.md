# 00 — Project overview

## What this project is

- **Name:** Dani & Javad Wedding Site (elopement-style).
- **Type:** Guest-facing wedding website with RSVP, calendar, and optional embed in Google Sites.
- **Scale:** Intimate; **max 25 guests**. Big Sur area (primary venue: Garrapata State Park).

## Goals (from original plan)

1. **Planning:** Notion as single source of truth for tasks (permits, vendors, RSVP deadline, day-of timeline).
2. **Calendar:** Guests get “Add to Calendar” and .ics; optionally RSVP → calendar for the couple.
3. **Guest site:** SvelteKit on Vercel; RSVP to Supabase; embeddable in Google Sites.
4. **No server:** Everything is Vercel (serverless) + Supabase (+ optional Resend). No Lunaverse or self-hosted backend.

## Stack (current)

| Layer        | Choice                    | Notes                                      |
|-------------|----------------------------|--------------------------------------------|
| Framework   | SvelteKit                  | Svelte 5; adapter-vercel                    |
| Hosting     | Vercel                     | Deploy from GitHub or CLI/MCP              |
| RSVP store  | Supabase                   | Table `rsvps`; RLS for anon insert         |
| Config      | `src/lib/config.ts`       | Date, venue, capacity 25, RSVP deadline    |
| Optional    | Resend                     | Confirmation email when env set            |

## Constraints

- **Embed:** Site must allow iframe from `https://sites.google.com` (CSP `frame-ancestors` + no blocking `X-Frame-Options`). Configured in `vercel.json` and SvelteKit.
- **Capacity:** Hard cap at 25 “yes” RSVPs; overflow stored as `waitlist`.
- **Privacy:** API keys and admin secret only in env (never committed). Short privacy line on RSVP/footer.

## Key docs (repo root)

- **AGENTS.md** — Short agent context (config, RSVP, calendar, export).
- **README.md** — Quick start, config, Supabase, deploy, couple photos.
- **NEXT_STEPS.md** — Full flow: Supabase → local test → GitHub → Vercel → Google Sites; optional Resend, photos, Notion.
- **DEPLOY_CHECKLIST.md** — Go-live checklist: Supabase schema, Vercel login/link/prod, env vars.
- **SUPABASE_SCHEMA.sql** — SQL to run once in Supabase (creates `rsvps` + RLS).
- **NOTION_SETUP.md** — Wedding task list; Notion MCP can create tasks when connected.

## Plan (do not edit)

- **Path:** `.cursor/plans/elopement_wedding_site_and_planning_a0cbd7f7.plan.md`
- Covers: Notion, calendar/iCal, site spec, locations, dates, checklist (Section 11), enhancements, critical items. User asked not to edit it.
