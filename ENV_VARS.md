# Environment variables — wedding site

The app **only** reads these names. Use this in your `.env` and in Vercel (or let Supabase sync them; see below).

---

## Required (Supabase)

Get these from **Supabase Dashboard → Project Settings → API**:

| Variable | Where in Supabase | Notes |
|----------|-------------------|--------|
| `PUBLIC_SUPABASE_URL` | **Project URL** | Copy the full URL (e.g. `https://xxxxx.supabase.co`) |
| `SUPABASE_URL` | Same as above | Same value as `PUBLIC_SUPABASE_URL` |
| `SUPABASE_ANON_KEY` | **Project API keys → anon public** | The long "anon" key |
| `SUPABASE_SERVICE_ROLE_KEY` | **Project API keys → service_role** | Secret key; needed for `/admin` and CSV export |

---

## Optional

| Variable | Purpose |
|----------|---------|
| `ADMIN_SECRET` | Token for `/admin?token=...`, `/planning?token=...`, and `/api/rsvps/export?token=...` (set your own string) |
| `SITE_URL` | Your live site URL: `https://dani-and-javad.vercel.app` (for QR and emails) |
| `RESEND_API_KEY` | Resend API key for RSVP confirmation emails |
| `RESEND_FROM` | From address (e.g. `Dani & Javad <noreply@yourdomain.com>`) |

---

## Variables the app does **not** use

You can ignore these for this project (they are from Supabase’s generic template or other products):

- `SUPA_PUBLISHABLE_API_KEY`, `SUPA_SECRET_API_KEY`
- `API_URL`, `ANON_PUBLIC`, `SERVICE_ROLE`
- `SUPABASE_JWT_*`, `SUPABASE_DANI_JAVAD_PROJECT_ID`

Use the **exact names** in the tables above so the app finds them.

---

## Supabase ↔ Vercel integration (your screenshot)

You connected Vercel via Supabase. For **SvelteKit** (this project), public env vars must be prefixed with **`PUBLIC_`**, not `NEXT_PUBLIC_`.

1. In the integration screen: **Customize public environment variable prefix**
2. Set the prefix to **`PUBLIC_`** (not `NEXT_PUBLIC_`).
3. Ensure Supabase is syncing the variables the app expects. Supabase often exposes:
   - Project URL → map or name as **`PUBLIC_SUPABASE_URL`** and **`SUPABASE_URL`**
   - anon key → **`SUPABASE_ANON_KEY`**
   - service_role key → **`SUPABASE_SERVICE_ROLE_KEY`**

If the integration only pushes names like `SUPABASE_URL` and `ANON_KEY`, add the **exact** names above in **Vercel** (Settings → Environment Variables) and paste the values from Supabase. The app does not read `ANON_KEY` or `NEXT_PUBLIC_*`.

---

## Minimal `.env` template (copy this)

```env
# Required — from Supabase Settings → API
PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Optional
ADMIN_SECRET=your_admin_secret
SITE_URL=https://dani-and-javad.vercel.app
RESEND_API_KEY=
RESEND_FROM=
```

No quotes after `=`. No other variable names are required for the wedding site.
