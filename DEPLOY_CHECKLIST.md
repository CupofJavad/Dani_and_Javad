# Deploy checklist — do these to go live

**Status:** Build ✅ (verified). GitHub `main` is pushed. Remaining steps need your action.

---

## 1. Supabase: create RSVP table (one-time)

1. Open [Supabase SQL Editor](https://supabase.com/dashboard/project/eabncidlwjdpdrmvpcrc/sql).
2. Copy all of **`SUPABASE_SCHEMA.sql`** and run it.
3. Optional: In Project Settings → API, copy the **service_role** key and add `SUPABASE_SERVICE_ROLE_KEY` to your `.env` (and later to Vercel) for `/admin` and CSV export.

---

## 2. Vercel: log in and deploy

**Vercel MCP:** Not available in this Cursor session. If you added Vercel MCP and logged in (Settings → Tools & MCP), you can ask the AI to deploy from here next time.

**Vercel CLI (use this now):**

```bash
cd "/Users/Javad/Projects/Dani_&_Javad_Wedding_Site"
npx vercel login
npx vercel link
npx vercel --prod
```

- **link:** Choose “Link to existing project” and select the project if you already imported the repo on Vercel, or “Create new project” and follow prompts.
- **--prod:** Deploys current branch to production. First time may ask for project name/team.

---

## 3. Vercel: set environment variables

In [Vercel Dashboard](https://vercel.com/dashboard) → your project → **Settings → Environment Variables**, add (from your `.env` Wedding Site section):

| Variable | Required | Notes |
|----------|----------|--------|
| `PUBLIC_SUPABASE_URL` | Yes | Same as in .env |
| `SUPABASE_URL` | Yes | Same as in .env |
| `SUPABASE_ANON_KEY` | Yes | Same as in .env |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional | For /admin and CSV export |
| `ADMIN_SECRET` | Optional | For /admin?token=... |
| `SITE_URL` | Optional | Your Vercel URL, e.g. https://dani-and-javad.vercel.app |

Then trigger a **Redeploy** (Deployments → … → Redeploy) so the new env vars are used.

---

## 4. After deploy

- Open your Vercel URL and test the RSVP form and Add to Calendar.
- Embed in Google Sites: Insert → Embed → By URL → paste Vercel URL.
- Optional: Resend (confirmation emails), couple photos, Notion — see **NEXT_STEPS.md**.
