# Next steps — Dani & Javad Wedding Site

Do these in order. Nothing runs on your server; everything is Vercel + Supabase.

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

1. Go to [vercel.com](https://vercel.com) → Add New → Project → Import your GitHub repo.
2. Build: leave default (**Build Command** `npm run build`, **Output Directory** `.svelte-kit/output`).
3. **Environment Variables** — add the same ones from your `.env` Wedding Site section:
   - `PUBLIC_SUPABASE_URL`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (optional, for admin/export)
   - `ADMIN_SECRET` (optional)
   - `SITE_URL` = your Vercel URL, e.g. `https://your-project.vercel.app`
4. Deploy. Your site will be live at `https://your-project.vercel.app`.

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
