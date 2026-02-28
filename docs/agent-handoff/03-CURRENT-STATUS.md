# 03 — Current status

## Done ✅

| Area | Status |
|------|--------|
| Plan | Complete; in `.cursor/plans/elopement_wedding_site_and_planning_a0cbd7f7.plan.md` (do not edit). |
| SvelteKit app | Full scaffold: routes, layout, config, RSVP form, admin, details, api (calendar.ics, rsvp-qr, rsvps/export). |
| Supabase schema | Defined in `SUPABASE_SCHEMA.sql`; **user must run it once** in Supabase SQL Editor. |
| Env | Wedding Site section in .env and .env.example; user has filled PUBLIC_SUPABASE_URL, SUPABASE_URL, SUPABASE_ANON_KEY. |
| Build | `npm run build` succeeds (verified by first agent). |
| Git | Repo on `main`; remote `origin` = CupofJavad/Dani_and_Javad; latest push includes DEPLOY_CHECKLIST + NEXT_STEPS. |
| Embed | Headers allow frame from sites.google.com (vercel.json + SvelteKit). |
| Docs | README, AGENTS.md, NOTION_SETUP.md, NEXT_STEPS.md, DEPLOY_CHECKLIST.md, agent-handoff directory. |
| Vercel MCP config | In `.cursor/mcp.json` (url: https://mcp.vercel.com). Login must be completed by user in Cursor. |

## Not done / pending ⏳

| Item | Who / how |
|------|-----------|
| Run Supabase schema | User: open Supabase SQL Editor, run `SUPABASE_SCHEMA.sql`. |
| Vercel deploy | User or next agent: `vercel login` then `vercel link` + `vercel --prod`, or use Vercel MCP if available, or import repo in Vercel dashboard. |
| Vercel env vars | User: add Wedding Site vars in Vercel project Settings → Environment Variables; then redeploy. |
| Test live site | After deploy: open Vercel URL, test RSVP and Add to Calendar. |
| Google Sites embed | User: Insert → Embed → By URL (Vercel URL); test desktop and mobile. |
| Optional: Resend | User: set RESEND_API_KEY (and RESEND_FROM, SITE_URL) in .env and Vercel for confirmation emails. |
| Optional: couple photos | User: add images to `static/couple-photos/`, set heroImage/storyImage1/storyImage2/galleryImages in `src/lib/config.ts`. |
| Optional: Notion tasks | When Notion MCP connected, use NOTION_SETUP.md or create tasks via MCP. |

## Blockers / limitations

- **Vercel MCP:** Not available in the first agent’s session (no Vercel server in MCP list). Next agent may have access in a new conversation.
- **Vercel CLI:** User not logged in (`vercel whoami` failed). Deploy requires user to run `vercel login` or next agent to have CLI auth.
- **Supabase:** Agent cannot run SQL in user’s project; user must run schema once.

## Build and repo state (as of handoff)

- **Branch:** `main`, up to date with `origin/main`.
- **Last commit:** “docs: NEXT_STEPS deploy options, DEPLOY_CHECKLIST for go-live” (includes DEPLOY_CHECKLIST.md, NEXT_STEPS.md).
- **Uncommitted:** This `docs/agent-handoff/` directory (to be committed by first agent before handoff).
