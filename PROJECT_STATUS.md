# Project status — Dani & Javad Wedding Site

**Last updated:** After adding planning page, dinner, travel, registry, contribute (incl. Zelle QR), shared photos, and docs. Deployment: push to `main` auto-deploys to Vercel.

---

## Completed (closed / done)

| # | Item | Notes |
|---|------|--------|
| 1 | **SvelteKit app** | Routes: /, /details, /admin, /planning; RSVP form; APIs: calendar.ics, rsvp-qr, rsvps/export. |
| 2 | **Config** | Single source in `src/lib/config.ts` (date, venue, capacity 25, RSVP deadline, tagline, dinner, travel, registry, contribute, Zelle, shared album, planning checklist & roles). |
| 3 | **Supabase schema** | `rsvps` table + RLS. Same SQL in `SUPABASE_SCHEMA.sql`. |
| 4 | **Build** | `npm run build` passes. Vercel adapter, nodejs20.x. |
| 5 | **Git & GitHub** | Repo on `main`, remote `CupofJavad/Dani_and_Javad`. |
| 6 | **Vercel deploy** | Production: **https://dani-and-javad.vercel.app**. Pushes to `main` auto-deploy. |
| 7 | **Vercel env** | User set Supabase + optional vars (Supabase ↔ Vercel integration). |
| 8 | **Embed headers** | `vercel.json` + SvelteKit CSP allow `frame-ancestors` for `https://sites.google.com`. |
| 9 | **Favicon** | `static/favicon.svg`. |
| 10 | **Calendar .ics** | Uses `config.weddingTime`; UID for subscribe; link on site. |
| 11 | **CSV export** | Newline-safe escaping. |
| 12 | **Uber/Lyft + optional map/video/hashtag** | Config-driven. |
| 13 | **Notion tasks** | 16 wedding tasks in Task List - Personal (Notion MCP). |
| 14 | **Docs** | README, ENV_VARS.md, COMPLETE_NEXT_STEPS.md, NEXT_STEPS.md, NOTION_SETUP.md, docs/RSVP_AND_CALENDAR.md, docs/PHOTO_GUIDE.md, docs/FEATURES_OVERVIEW.md, docs/BIG_SUR_VENUE_SCOUTING_AGENDA.md, docs/agent-handoff, PROJECT_STATUS.md. |
| 15 | **Deployment check** | Production home, /details, /admin redirect verified. |
| 16 | **Planning page** | `/planning?token=ADMIN_SECRET` — checklist + role-based tasks from config (Dani & Javad only). |
| 17 | **Dinner** | Events section includes dinner card when `dinnerTitle`/`dinnerTime` set. |
| 18 | **Travel** | Travel & getting there section (Sacramento/SF tips, drive times); config `travelBlurb`, `travelTips`. |
| 19 | **Registry** | Section + nav when `registryUrl` set. |
| 20 | **Contribute** | Section + nav: Venmo, PayPal, Zelle (QR PDF), custom text; config-driven. |
| 21 | **Zelle QR** | `static/zelle-qr.pdf`; link "Zelle (QR code)" in Contribute when `contributeZellePdfPath` set. |
| 22 | **Share your photos** | Section + nav when `sharedAlbumUrl` set; PHOTO_GUIDE.md for hero/story/gallery. |

---

## Remaining (to do or optional)

| # | Item | Who / how | Priority |
|---|------|-----------|----------|
| 1 | **Google Sites embed** | You: Insert → Embed → By URL → https://dani-and-javad.vercel.app. Test desktop/mobile. | Go-live |
| 2 | **Confirm admin + planning + CSV** | Set `ADMIN_SECRET` in Vercel; visit `/admin?token=...` and `/planning?token=...`; test Download CSV. | Go-live |
| 3 | **Optional: Resend** | Set `RESEND_API_KEY`, `RESEND_FROM`, `SITE_URL` in Vercel for RSVP emails. | Optional |
| 4 | **Optional: Couple photos** | Add to `static/couple-photos/`; set `heroImage`, `storyImage1`, `storyImage2`, `galleryImages` in config; see docs/PHOTO_GUIDE.md. | Optional |
| 5 | **Optional: Map / video** | Set `venueEmbedUrl`, `venueVideoUrl` in config. | Optional |
| 6 | **Optional: Registry / contribute / album** | Set `registryUrl`; `contributeVenmoUrl`/`contributePayPalUrl`/`contributeText`; `sharedAlbumUrl` in config. Zelle PDF already in static. | Optional |

---

## Key URLs

- **Site:** https://dani-and-javad.vercel.app  
- **Details:** https://dani-and-javad.vercel.app/details  
- **Admin:** https://dani-and-javad.vercel.app/admin?token=YOUR_ADMIN_SECRET  
- **Planning:** https://dani-and-javad.vercel.app/planning?token=YOUR_ADMIN_SECRET  
- **CSV export:** https://dani-and-javad.vercel.app/api/rsvps/export?token=YOUR_ADMIN_SECRET  
- **Calendar:** https://dani-and-javad.vercel.app/api/calendar.ics  

Full reference: **README.md**.
