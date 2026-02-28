# Wedding site – agent context

- **Project:** Elopement-style wedding site for Dani & Javad. Max **25 guests**. Big Sur area (Garrapata, Pfeiffer Big Sur, Andrew Molera, Julia Pfeiffer Burns).
- **Stack:** SvelteKit, Vercel, Supabase (RSVP). Site is embeddable in Google Sites (iframe); headers must allow `frame-ancestors` for `https://sites.google.com`.
- **Config:** Wedding date, venue, capacity, RSVP deadline live in `src/lib/config.ts`. Change there and redeploy when details are confirmed.
- **RSVP:** Form posts to Supabase `rsvps` table. Cap at 25 “yes” (+ plus-ones); overflow saved as `waitlist`. Export CSV at `/api/rsvps/export?token=ADMIN_SECRET`.
- **Calendar:** `.ics` at `/api/calendar.ics`; use for “Add to Calendar” and subscribe links.
- **Couple photos:** Add files to `static/couple-photos/` (e.g. `hero.jpg`, `story-1.jpg`, `javad.jpg`, `dani.jpg`) and reference in the site.
