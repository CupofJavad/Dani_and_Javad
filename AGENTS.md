# Wedding site – agent context

- **Agent handoff:** For full project history, status, and next steps, read **`docs/agent-handoff/README.md`** first (then 00–06 in that directory).
- **Project:** Elopement-style wedding site for Dani & Javad. Max **25 guests**. Big Sur area (Garrapata, Pfeiffer Big Sur, Andrew Molera, Julia Pfeiffer Burns).
- **Stack:** SvelteKit, Vercel, Supabase (RSVP). Site is embeddable in Google Sites (iframe); headers allow `frame-ancestors` for `https://sites.google.com`.
- **Config:** All wedding details in `src/lib/config.ts`: date, venue, capacity, RSVP deadline, **dinner** (dinnerTitle, dinnerTime, dinnerVenueName, dinnerVenueAddress), **travel** (travelBlurb, travelTips), **registry** (registryUrl, registryLabel), **contribute** (contributeVenmoUrl, contributePayPalUrl, contributeText, contributeZellePdfPath), **sharedAlbumUrl**, **planningChecklist**, **rolesAndTasks**. Change there and redeploy.
- **RSVP:** Form → Supabase `rsvps`. Cap 25 “yes” + plus-ones; overflow → waitlist. CSV: `/api/rsvps/export?token=ADMIN_SECRET`.
- **Planning (Dani & Javad only):** `/planning?token=ADMIN_SECRET` shows checklist and role-based tasks from config. Same token as admin.
- **Calendar:** `/api/calendar.ics` for Add to Calendar and subscribe.
- **Couple photos:** Add to `static/couple-photos/`; set heroImage, storyImage1, storyImage2, galleryImages in config. See **docs/PHOTO_GUIDE.md**.
- **Zelle:** Put QR PDF in `static/zelle-qr.pdf`; set `contributeZellePdfPath: '/zelle-qr.pdf'` to show link in Contribute.
- **Location extras:** `venueEmbedUrl`, `venueVideoUrl`, `photoHashtag`. Uber/Lyft use `venueAddress`.
