# Complete next steps — do these in order

Code is pushed to **GitHub** (`main` → `CupofJavad/Dani_and_Javad`). Do the following to go live.

---

## 1. Supabase — create RSVP table (one-time)

1. Open: **[Supabase SQL Editor](https://supabase.com/dashboard/project/eabncidlwjdpdrmvpcrc/sql)**  
2. Copy the entire block below, paste into the editor, and click **Run**.

```sql
create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  attending text not null check (attending in ('yes', 'no', 'waitlist')),
  plus_one text,
  notes text,
  created_at timestamptz default now()
);

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
```

3. Optional: Supabase Dashboard → **Project Settings → API** → copy the **service_role** key → add to your `.env` as `SUPABASE_SERVICE_ROLE_KEY` (and later to Vercel) for `/admin` and CSV export.

---

## 2. Test locally (optional but recommended)

```bash
cd "/Users/Javad/Projects/Dani_&_Javad_Wedding_Site"
npm run dev
```

- Open **http://localhost:5173** → submit a test RSVP.
- In Supabase: **Table Editor → `rsvps`** — confirm the row appears.
- If you set `ADMIN_SECRET` in `.env`, visit **http://localhost:5173/admin?token=YOUR_ADMIN_SECRET** and use **Download CSV**.

---

## 3. Vercel — log in and deploy

You must log in once (browser flow). In the project folder:

```bash
cd "/Users/Javad/Projects/Dani_&_Javad_Wedding_Site"
npx vercel login
npx vercel link
npx vercel --prod
```

- **link:** Choose “Link to existing project” if you already imported the repo on Vercel, or “Create new project” and follow the prompts.
- **--prod:** Deploys `main` to production. Your site is at **https://dani-and-javad.vercel.app**.

---

## 4. Vercel — environment variables

If you use the **Supabase ↔ Vercel integration**: set the **public env var prefix** to **`PUBLIC_`** (SvelteKit), not `NEXT_PUBLIC_`. See **`ENV_VARS.md`** for the exact variable names the app expects and which Supabase provides.

In **[Vercel Dashboard](https://vercel.com/dashboard)** → your project → **Settings → Environment Variables**, add (use the same values as in your `.env`):

| Variable | Required | Example |
|----------|----------|--------|
| `PUBLIC_SUPABASE_URL` | Yes | `https://eabncidlwjdpdrmvpcrc.supabase.co` |
| `SUPABASE_URL` | Yes | Same as above |
| `SUPABASE_ANON_KEY` | Yes | From Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional | For /admin and CSV export |
| `ADMIN_SECRET` | Optional | Your secret for `/admin?token=...` |
| `SITE_URL` | Optional | `https://dani-and-javad.vercel.app` |

Then: **Deployments → … → Redeploy** so the new env vars are used.

---

## 5. Embed in Google Sites

1. In Google Sites: **Insert → Embed → By URL**.
2. Paste your Vercel URL: **https://dani-and-javad.vercel.app**
3. Choose **Whole page** → Insert. Test on desktop and mobile.

---

## 6. Optional later

- **Resend:** Set `RESEND_API_KEY` and `RESEND_FROM` in Vercel for RSVP confirmation emails.
- **Couple photos:** Add images to `static/couple-photos/`, set `heroImage`, `storyImage1`, `storyImage2`, `galleryImages` in `src/lib/config.ts`, push to `main` (Vercel will auto-deploy).
- **Map / video:** Set `venueEmbedUrl` or `venueVideoUrl` in `src/lib/config.ts` and push.

---

**Quick recap:** 1) Run the SQL in Supabase → 2) (optional) Test locally → 3) `vercel login` then `vercel link` + `vercel --prod` → 4) Add env vars in Vercel and redeploy → 5) Embed the Vercel URL in Google Sites.
