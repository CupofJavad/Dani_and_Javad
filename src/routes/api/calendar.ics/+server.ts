import { config } from '$lib/config';

/** Parse "3:00 PM" / "11:30 AM" style time to 24h hour and minute (local). */
function parseTime(timeStr: string): { hour: number; minute: number } {
  const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return { hour: 15, minute: 0 }; // fallback 3:00 PM
  let hour = parseInt(match[1], 10);
  const minute = parseInt(match[2], 10);
  if (match[3].toUpperCase() === 'PM' && hour !== 12) hour += 12;
  if (match[3].toUpperCase() === 'AM' && hour === 12) hour = 0;
  return { hour, minute };
}

/**
 * Returns a valid .ics file for the wedding event.
 * Guests can subscribe or import into Google/Apple/Outlook.
 */
export function GET() {
  const date = config.weddingDate.replace(/-/g, '');
  const { hour, minute } = parseTime(config.weddingTime);
  const pad = (n: number) => String(n).padStart(2, '0');
  const start = `${date}T${pad(hour)}${pad(minute)}00`;
  const end = `${date}T${pad(hour + 1)}${pad(minute)}00`;
  const summary = `Wedding — ${config.coupleNames}`;
  const description = `Ceremony at ${config.venueName}. ${config.tagline}`;
  const location = config.venueAddress || config.venueName;

  const uid = `wedding-${config.weddingDate}-${config.coupleNames.replace(/\s/g, '-')}@dani-javad`;
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Dani & Javad Wedding//EN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
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
