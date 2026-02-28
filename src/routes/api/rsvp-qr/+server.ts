import QRCode from 'qrcode';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ url }) => {
  const baseUrl = env.SITE_URL || url.origin;
  const rsvpUrl = `${baseUrl}/#rsvp`;
  const svg = await QRCode.toString(rsvpUrl, { type: 'svg', margin: 1, width: 256 });
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
