# 04 — Next steps (prioritized)

Use this with **DEPLOY_CHECKLIST.md** and **NEXT_STEPS.md** in the repo root.

---

## Immediate (go-live)

1. **Supabase — create RSVP table (one-time)**  
   - Open [Supabase SQL Editor](https://supabase.com/dashboard/project/eabncidlwjdpdrmvpcrc/sql).  
   - Copy all of **`SUPABASE_SCHEMA.sql`** and run it.  
   - Optional: add `SUPABASE_SERVICE_ROLE_KEY` to .env and Vercel for /admin and CSV export.

2. **Vercel — deploy**  
   - **If Vercel MCP is available:** Use it to deploy or trigger deployment for this project (team/project context may be required).  
   - **Else:** User runs:
     - `npx vercel login`
     - `npx vercel link` (create or select project)
     - `npx vercel --prod`
   - Or: import repo in [Vercel Dashboard](https://vercel.com) and deploy.

3. **Vercel — environment variables**  
   - In project → Settings → Environment Variables, add from .env Wedding Site section:
     - Required: `PUBLIC_SUPABASE_URL`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`
     - Optional: `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_SECRET`, `SITE_URL`
   - Redeploy so new env vars are used.

4. **Verify**  
   - Open Vercel URL; test RSVP form and Add to Calendar.  
   - Embed in Google Sites (Insert → Embed → By URL); test on desktop and mobile.

---

## Right after go-live (optional)

- Set `SITE_URL` to the Vercel URL (for QR and emails).  
- Add `ADMIN_SECRET` and optionally `SUPABASE_SERVICE_ROLE_KEY` in Vercel; test `/admin?token=...` and CSV export.  
- Resend: set `RESEND_API_KEY`, `RESEND_FROM` (and `SITE_URL`) for RSVP confirmation emails.

---

## Later (content and planning)

- **Couple photos:** Add images to `static/couple-photos/`, set `heroImage`, `storyImage1`, `storyImage2`, `galleryImages` in `src/lib/config.ts`; redeploy.  
- **Notion:** Connect Notion MCP; use NOTION_SETUP.md or MCP skills to create/manage wedding tasks.  
- **Plan Section 11:** Marriage license, witnesses, officiant, photographer, florals, catering, save-the-date, thank-you cards, day-of checklist — ensure these are in Notion when MCP is connected.

---

## If something breaks

- **Build:** Run `npm run build` locally; check Node version (adapter expects nodejs20.x).  
- **RSVP fails:** Confirm Supabase schema was run; check env vars (PUBLIC_SUPABASE_URL, SUPABASE_ANON_KEY) in Vercel.  
- **Embed blocked:** Confirm `vercel.json` and SvelteKit send `frame-ancestors` for `https://sites.google.com` and do not set `X-Frame-Options: DENY`.
