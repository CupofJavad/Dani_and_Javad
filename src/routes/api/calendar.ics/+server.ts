import { config } from '$lib/config';

/**
 * Returns a valid .ics file for the wedding event.
 * Guests can subscribe or import into Google/Apple/Outlook.
 */
export function GET() {
  const date = config.weddingDate.replace(/-/g, '');
  // 3:00 PM => 150000 (UTC would need offset; use local for simplicity)
  const start = `${date}T150000`;
  const end = `${date}T160000`;
  const summary = `Wedding — ${config.coupleNames}`;
  const description = `Ceremony at ${config.venueName}. ${config.tagline}`;
  const location = config.venueAddress || config.venueName;

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Dani & Javad Wedding//EN',
    'BEGIN:VEVENT',
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  return new Response(ics, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="wedding.ics"'
    }
  });
}
