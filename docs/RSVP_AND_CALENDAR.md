# Where the RSVP list lives & calendar (iCal) link

## Where does the RSVP list go?

RSVPs are stored in **Supabase** in the `rsvps` table.

| Where | How to access |
|-------|----------------|
| **Supabase** | [Table Editor](https://supabase.com/dashboard/project/eabncidlwjdpdrmvpcrc/editor) → open the `rsvps` table. |
| **Your site (admin)** | Visit **https://dani-and-javad.vercel.app/admin?token=YOUR_ADMIN_SECRET** (set `ADMIN_SECRET` in Vercel env). You see a table of all RSVPs and a **Download CSV** link. |
| **CSV export** | **https://dani-and-javad.vercel.app/api/rsvps/export?token=YOUR_ADMIN_SECRET** — downloads a CSV of all rows. |

So: the list “lives” in Supabase; you **view** it on your site at `/admin` or in the Supabase dashboard, and **export** it via the CSV link above.

---

## How to auto-link with iCal (Apple Calendar)

The site serves a calendar feed at **`/api/calendar.ics`**. You can **subscribe** to it so the wedding event appears in Apple Calendar (or Google Calendar) and updates if you change the date/time on the site.

1. Copy the subscription URL: **https://dani-and-javad.vercel.app/api/calendar.ics**
2. **Apple Calendar (iCal):** File → **New Calendar Subscription…** → paste the URL → set refresh (e.g. weekly) → Subscribe.
3. **Google Calendar:** Add other calendars → **From URL** → paste the same URL → Add calendar.

The event is generated from `src/lib/config.ts` (wedding date and time). If you change the config and redeploy, subscribers’ calendars will show the update after the next refresh.

---

## One-time “Add to Calendar” (no subscription)

On the site, **Add to Calendar (.ics)** downloads a file that adds a single copy of the event. Use **Subscribe (iCal / Google)** (or the URL above) for a link that stays in sync.
