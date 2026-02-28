# 01 — Project history

## Chronology (summary)

1. **Plan & research** — User asked for a plan: elopement (≤25 guests), Big Sur parks, tasks/reminders, Google Calendar + iCal, guest site with RSVP syncing with calendar, GitHub + Vercel, embed in Google Sites, MCP research, free stock images, couple photo guidance, location options (Garrapata, Pfeiffer Big Sur, Andrew Molera, Julia Pfeiffer Burns).
2. **Enhancements** — Added free/open-source ideas and critical items: checklists, RSVP confirmation email, QR, export CSV, admin page, print page, etc.
3. **Dates & Notion** — Suggested 2026 wedding dates; confirmed Notion free tier is sufficient (tasks, DB, API/MCP).
4. **Checklist cross-check** — Cross-referenced wedding/elopement checklists; added marriage license, witnesses, officiant, photographer, florals, catering, save-the-date timing, thank-you cards, budget, day-of checklist, etc. (Section 11 of plan).
5. **Implement the plan** — Built the site per plan: Notion guide, SvelteKit scaffold, content, RSVP, calendar, maps, deploy prep, couple-photos wiring.
6. **Retry after disk space** — After user freed disk: fixed Svelte 5 layout `children` prop, added README, verified build.
7. **“All next steps”** — .env.example/.gitignore, admin page, form `use:enhance`, /details print page, QR code API, optional Resend confirmation email, couple-photos config, git init, NEXT_STEPS.md, first commit.
8. **Env format** — Aligned .env with user’s style (no quotes, sectioned); added Wedding Site section; clarified Notion/Supabase/Figma MCP (nothing runs on their server).
9. **Supabase credentials** — User provided Supabase URL and publishable key; added to Wedding Site section of .env.
10. **“Not on my server”** — Confirmed: no Lunaverse/server; only Vercel + Supabase (and optional Resend).
11. **“Proceed to next steps”** — First git commit, .cursor in .gitignore, NEXT_STEPS.md, build verified.
12. **GitHub repo** — User gave repo `git@github.com:CupofJavad/Dani_and_Javad.git`; remote added, `main` pushed.
13. **Vercel integration** — User asked about Vercel MCP or other integration (API). First agent added Vercel MCP to `.cursor/mcp.json`, updated NEXT_STEPS with Options A–D (MCP, CLI, API, Dashboard), and documented DEPLOY_CHECKLIST.
14. **Post-restart** — User restarted Cursor; asked to confirm tool access and complete next steps. First agent confirmed Vercel MCP not in session; ran build, checked git; Vercel CLI not logged in; committed DEPLOY_CHECKLIST + NEXT_STEPS, pushed; created this agent-handoff directory.

## Decisions already made

- **RSVP backend:** Supabase (not Sheets).
- **Framework:** SvelteKit (not Next.js).
- **Deploy:** Vercel (GitHub or CLI/MCP). Vercel MCP configured in project but not available to first agent’s session.
- **Venue (site copy):** Garrapata State Park; date 2026-05-09; RSVP deadline 2026-04-18 (see `src/lib/config.ts`).
- **Notion/Figma MCP:** Not fully connected per user; NOTION_SETUP.md is manual until MCP is connected.
