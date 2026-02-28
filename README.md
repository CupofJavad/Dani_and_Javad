# Dani & Javad — Wedding Site

An intimate elopement-style wedding site (SvelteKit + Vercel), embeddable in Google Sites. RSVP via Supabase, Add to Calendar via .ics.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Config

Edit **`src/lib/config.ts`** for date, venue, capacity (25), RSVP deadline, and tagline. Redeploy after changes.

## RSVP (Supabase)

1. In [Supabase](https://supabase.com), create a project and run **`SUPABASE_SCHEMA.sql`** in the SQL editor.
2. In your project **`.env`**, fill in the **Wedding Site** section (no quotes after `=`):
   - `PUBLIC_SUPABASE_URL` and `SUPABASE_URL` — from Supabase project Settings > API > Project URL
   - `SUPABASE_SERVICE_ROLE_KEY` (or `SUPABASE_ANON_KEY`) — from Settings > API > Project API keys
3. Optional: set `ADMIN_SECRET` for `/admin?token=...` and CSV export.

Without these, the form will show "RSVP storage is not configured." For Vercel, add the same vars in the project’s Environment Variables.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), import the repo. Build command: `npm run build`. Output: `.svelte-kit/output`.
3. Add the env vars above.
4. Deploy. Your site will be at `https://your-project.vercel.app`.

## Embed in Google Sites

1. In Google Sites: **Insert → Embed → By URL**.
2. Paste your Vercel URL (e.g. `https://your-project.vercel.app`).
3. Choose **Whole page** and insert. The site sends `frame-ancestors` for `https://sites.google.com` so the embed works.

## Couple photos

Add images to **`static/couple-photos/`** (e.g. `hero.jpg`, `story-1.jpg`, `story-2.jpg`, `gallery-1.jpg`). Then in **`src/lib/config.ts`** set:

- `heroImage: '/couple-photos/hero.jpg'`
- `storyImage1: '/couple-photos/story-1.jpg'`, `storyImage2: '/couple-photos/story-2.jpg'`
- `galleryImages: ['/couple-photos/gallery-1.jpg', '/couple-photos/gallery-2.jpg', ...]`

Redeploy and the site will use your photos.

## Notion planning

See **`NOTION_SETUP.md`** for the wedding task list. To have the agent create tasks for you, connect and authenticate the **Notion MCP** in Cursor (e.g. connect your workspace and share the task board with the integration). Until then, use the task list in NOTION_SETUP.md manually.

## Next steps (optional)

- **Admin:** Visit `/admin?token=YOUR_ADMIN_SECRET` to view RSVPs; link to "Download CSV" there.
- **Print:** `/details` is a print-friendly page (date, time, place, RSVP link).
- **QR code:** `/api/rsvp-qr` returns an SVG QR code for the RSVP page (set `SITE_URL` in production).
- **Confirmation email:** Set `RESEND_API_KEY` and optionally `RESEND_FROM` and `SITE_URL` in env; guests receive an email after RSVPing.
- **Git:** Repo is initialized; add your GitHub remote and push, then connect to Vercel.
