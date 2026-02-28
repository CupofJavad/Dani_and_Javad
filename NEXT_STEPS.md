# Next steps — Dani & Javad Wedding Site

Do these in order. Nothing runs on your server; everything is Vercel + Supabase.

**Code status:** The app is complete. Favicon, calendar.ics (uses `config.weddingTime`), and CSV export (newline-safe) are in place. Remaining steps below are deploy and content (Supabase, Vercel, Google Sites, optional photos/Resend).

---

## 1. Create the RSVP table in Supabase

1. Open [Supabase SQL Editor](https://supabase.com/dashboard/project/eabncidlwjdpdrmvpcrc/sql).
2. Copy the contents of **`SUPABASE_SCHEMA.sql`** and run it.
3. (Optional) For `/admin` and CSV export, add **SUPABASE_SERVICE_ROLE_KEY** to your `.env`: Supabase Dashboard → Project Settings → API → copy the **service_role** secret.

---

## 2. Test locally

```bash
npm run dev
```

Open http://localhost:5173, submit a test RSVP, then check the table in Supabase (Table Editor → `rsvps`). Visit `/admin?token=YOUR_ADMIN_SECRET` if you set ADMIN_SECRET.

---

## 3. Push to GitHub

```bash
git add .
git commit -m "Initial wedding site: SvelteKit, RSVP, calendar, admin"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Create the repo on GitHub first (empty, no README), then use your repo URL above.

---

## 4. Deploy on Vercel

### Option A: Vercel MCP (in Cursor)

Vercel MCP is configured in this project (`.cursor/mcp.json`). To use it:

1. **Reload Cursor** or open Settings → Tools & MCP so it picks up the new server.
2. When you see **Vercel** with "Needs login", click it and complete the browser OAuth to authorize Cursor.
3. After that, you can ask the AI to deploy, list deployments, or manage the project via Vercel MCP.

Official docs: [Vercel MCP](https://vercel.com/docs/ai-tooling/vercel-mcp). Cursor is a supported client.

### Option B: Vercel CLI

From the project root:

```bash
npx vercel login    # if not already logged in
npx vercel link     # link this folder to a Vercel project (create or select)
npx vercel --prod   # deploy to production
```

If the project is already linked (e.g. you imported the repo in the dashboard), `npx vercel --prod` will deploy the current branch.

### Option C: Vercel REST API (CI / scripts)

For automation (e.g. GitHub Actions or a script), use a [Vercel API token](https://vercel.com/account/tokens) and the [Deployments API](https://vercel.com/docs/rest-api/endpoints#deployments). Example: trigger a deployment with `POST https://api.vercel.com/v13/deployments` (with `Authorization: Bearer YOUR_TOKEN` and project/ref in the body). Easiest is still: push to GitHub and let Vercel auto-deploy.

### Option D: Dashboard (import from GitHub)

1. Go to [vercel.com](https://vercel.com) → Add New → Project → Import your GitHub repo.
2. Build: leave default (**Build Command** `npm run build`, **Output Directory** `.svelte-kit/output`).
3. **Environment Variables** — add the same ones from your `.env` Wedding Site section:
   - `PUBLIC_SUPABASE_URL`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (optional, for admin/export)
   - `ADMIN_SECRET` (optional)
   - `SITE_URL` = your Vercel URL, e.g. `https://your-project.vercel.app`
4. Deploy. Your site will be live at `https://your-project.vercel.app`. Future pushes to `main` auto-deploy.

---

## 5. Embed in Google Sites

1. In Google Sites: **Insert → Embed → By URL**.
2. Paste your Vercel URL (e.g. `https://your-project.vercel.app`).
3. Choose **Whole page** → Insert.
4. Test on desktop and mobile.

---

## 6. Optional later

- **Resend:** Set `RESEND_API_KEY` and `RESEND_FROM` in Vercel env for RSVP confirmation emails.
- **Couple photos:** Add images to `static/couple-photos/`, set `heroImage`, `storyImage1`, `storyImage2`, `galleryImages` in `src/lib/config.ts`, redeploy.
- **Notion:** Connect Notion MCP in Cursor and use NOTION_SETUP.md to create your wedding task board.
