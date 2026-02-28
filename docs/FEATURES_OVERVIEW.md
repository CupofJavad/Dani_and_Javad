# Features overview

What’s on the site and what you might still want to add.

## Already on the site

- **Hero** — Couple names, date, tagline, RSVP CTA; optional hero image.
- **Our Story** — Short copy + two story images (configurable).
- **Location** — Venue name/address, Google Maps link, Uber/Lyft, optional embed map and video.
- **Events** — Ceremony (date, time, venue, Add to Calendar / subscribe) and **Dinner** (if you set `dinnerTitle` / `dinnerTime` in config).
- **Travel** — Blurb and tips (e.g. Sacramento/SF drive times, departure suggestions). Edit `travelBlurb` and `travelTips` in config.
- **RSVP** — Form to Supabase; capacity cap (25); waitlist when full; optional Resend confirmation emails.
- **Gallery** — Your photos + hashtag CTA for guest photos.
- **Registry** — Shown only if `registryUrl` is set (Zola, Amazon, Honeyfund, etc.).
- **Contribute** — Shown only if you set Venmo, PayPal, or `contributeText` (e.g. Honeyfund link).
- **Share your photos** — Shown only if `sharedAlbumUrl` is set (Google Photos shared album or similar).
- **FAQ** — Rain, lodging, parking, restrooms.
- **Planning page** — Checklist and role-based tasks, only visible at `/planning?token=ADMIN_SECRET` (same token as admin).

## Optional / you add when ready

- **Gift registry** — Set `registryUrl` (and optionally `registryLabel`) in `src/lib/config.ts`. Popular options: Zola, Amazon Wedding, Honeyfund, or a single “registry” page that links to several.
- **Donations / contributions** — Set `contributeVenmoUrl`, `contributePayPalUrl`, and/or `contributeText` in config. Many couples use Venmo + PayPal; Honeyfund is another option for “honeymoon fund” style.
- **Shared album** — Create a Google Photos shared album (or Dropbox folder), set `sharedAlbumUrl`, and the “Share your photos” section appears with the link.
- **Your photos** — Add files to `static/couple-photos/` and set `heroImage`, `storyImage1`, `storyImage2`, `galleryImages` in config. See **docs/PHOTO_GUIDE.md** for what to provide and where.

## Other things you might want (not built in)

- **Accommodation block** — You can add a “Where to stay” section with a few hotel names/links in config or in the FAQ (already a short note). For a block, add e.g. `accommodationTips: string[]` to config and a small section on the page.
- **Dress code** — Add a FAQ entry or a one-line in Events: “Dress: cocktail / casual / etc.”
- **Day-of timeline** — Optional short timeline (e.g. “3:00 Ceremony, 5:30 Dinner”) — partly covered by Events; you could add a `timeline` array to config and a small “Schedule” section.
- **Contact** — A simple “Questions? Email us at …” or link to a form. Could be a FAQ entry or a footer line (e.g. in `+layout.svelte`).
- **Wedding party** — Optional “Wedding party” section with names/roles (Maid of Honor, Best Man, etc.). Could be driven by the same `rolesAndTasks` keys or a separate config list.

If you want any of these, add the config fields and a section in `src/routes/+page.svelte` (and optionally a nav link in `+layout.svelte`).
