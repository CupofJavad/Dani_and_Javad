# Wedding site – agent context

- **Agent handoff:** For full project history, status, and next steps, read **`docs/agent-handoff/README.md`** first (then 00–06 in that directory). Created for new conversations / MCP handoff.
- **Project:** Elopement-style wedding site for Dani & Javad. Max **25 guests**. Big Sur area (Garrapata, Pfeiffer Big Sur, Andrew Molera, Julia Pfeiffer Burns).
- **Stack:** SvelteKit, Vercel, Supabase (RSVP). Site is embeddable in Google Sites (iframe); headers must allow `frame-ancestors` for `https://sites.google.com`.
- **Config:** Wedding date, venue, capacity, RSVP deadline live in `src/lib/config.ts`. Change there and redeploy when details are confirmed.
- **RSVP:** Form posts to Supabase `rsvps` table. Cap at 25 “yes” (+ plus-ones); overflow saved as `waitlist`. Export CSV at `/api/rsvps/export?token=ADMIN_SECRET`.
- **Calendar:** `.ics` at `/api/calendar.ics`; use for “Add to Calendar” and subscribe links.
- **Couple photos:** Add files to `static/couple-photos/` (e.g. `hero.jpg`, `story-1.jpg`, `javad.jpg`, `dani.jpg`) and reference in the site.
- **Location extras (optional):** `config.venueEmbedUrl` (Google Maps embed), `config.venueVideoUrl` (YouTube embed), `config.photoHashtag` (Gallery CTA). Book Uber/Lyft links use `venueAddress` (inspired by [rampatra/wedding-website](https://github.com/rampatra/wedding-website)).
