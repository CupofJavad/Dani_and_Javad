/**
 * Single source of truth for wedding details.
 * Update here when date, venue, or capacity is confirmed.
 */
export interface WeddingConfig {
  coupleNames: string;
  weddingDate: string; // ISO date YYYY-MM-DD
  weddingTime: string; // e.g. "3:00 PM"
  venueName: string;
  venueAddress?: string;
  venueMapsUrl?: string;
  /** Google Maps embed iframe src (Share → Embed a map). Optional. */
  venueEmbedUrl?: string;
  /** YouTube embed URL for venue/area video. Optional. */
  venueVideoUrl?: string;
  /** Hashtag for guest photos. Shown in Gallery. Optional. */
  photoHashtag?: string;
  capacity: number;
  rsvpDeadline: string; // ISO date
  tagline: string;
  ogImage?: string;
  heroImage?: string;
  storyImage1?: string;
  storyImage2?: string;
  galleryImages?: string[];

  // Dinner (after ceremony)
  /** e.g. "Dinner to follow" or venue name */
  dinnerTitle?: string;
  dinnerTime?: string; // e.g. "5:30 PM"
  dinnerVenueName?: string;
  dinnerVenueAddress?: string;

  // Travel (Sacramento / SF)
  /** Short blurb, e.g. "We and many of our guests are coming from Sacramento and San Francisco." */
  travelBlurb?: string;
  /** Estimated drive times or tips (array of strings). */
  travelTips?: string[];

  // Registry & contribute
  /** Gift registry URL (Zola, Amazon, Honeyfund, etc.). */
  registryUrl?: string;
  /** Label for registry link, e.g. "Gift registry" or "Our registry". */
  registryLabel?: string;
  /** Contribute / honeymoon fund: Venmo link, PayPal link, or custom text. */
  contributeVenmoUrl?: string;
  contributePayPalUrl?: string;
  /** Custom text, e.g. "Venmo @DaniAndJavad" or link to Honeyfund. */
  contributeText?: string;
  /** Zelle: path to QR code PDF in static (e.g. "/zelle-qr.pdf"). Place PDF in static/zelle-qr.pdf. */
  contributeZellePdfPath?: string;

  // Shared photos
  /** Link to Google Photos shared album, Dropbox folder, etc. */
  sharedAlbumUrl?: string;

  // Planning (only visible at /planning?token=ADMIN_SECRET)
  /** Checklist items for Dani & Javad (planning page). */
  planningChecklist?: string[];
  /** Role-based tasks: role name -> list of tasks. */
  rolesAndTasks?: Record<string, string[]>;
}

export const config: WeddingConfig = {
  coupleNames: 'Dani & Javad',
  weddingDate: '2026-05-09',
  weddingTime: '3:00 PM',
  venueName: 'Garrapata State Park',
  venueAddress: 'Garrapata State Park, Carmel-by-the-Sea, CA',
  venueMapsUrl: 'https://www.google.com/maps/place/Garrapata+State+Park',
  venueEmbedUrl: undefined,
  venueVideoUrl: undefined,
  photoHashtag: 'DaniAndJavad',
  capacity: 25,
  rsvpDeadline: '2026-04-18',
  tagline: 'An intimate celebration in Big Sur',
  ogImage: undefined,
  heroImage: undefined,
  storyImage1: undefined,
  storyImage2: undefined,
  galleryImages: undefined,

  dinnerTitle: 'Dinner to follow',
  dinnerTime: '5:30 PM',
  dinnerVenueName: undefined,
  dinnerVenueAddress: undefined,

  travelBlurb: 'We live in Sacramento and many of our family and friends are in Sacramento or San Francisco. Big Sur is about a 3–4 hour drive from either city.',
  travelTips: [
    'From Sacramento: ~3.5–4 hours via US-101 S / CA-1 S. Leave by 10–11 AM for a 3 PM ceremony.',
    'From San Francisco: ~2.5–3 hours via CA-1 S. Leave by 11 AM–12 PM to allow for traffic and scenic stops.',
    'Highway 1 can have delays; consider a buffer. Carmel-by-the-Sea is the nearest town for overnight stays.',
    'Carpool if you can—parking at the park is limited.'
  ],

  registryUrl: undefined,
  registryLabel: 'Gift registry',
  contributeVenmoUrl: undefined,
  contributePayPalUrl: undefined,
  contributeText: undefined,
  contributeZellePdfPath: '/zelle-qr.pdf',

  sharedAlbumUrl: undefined,

  planningChecklist: [
    'Book ceremony venue / permit',
    'Book dinner venue',
    'Send save-the-dates',
    'Order invitations',
    'Confirm officiant',
    'Confirm photographer',
    'Arrange florals',
    'Finalize guest list',
    'Send reminders before RSVP deadline',
    'Day-of timeline for wedding party'
  ],
  rolesAndTasks: {
    'Maid of Honor': ['Help with rehearsal or pre-wedding gathering', 'Support bride on the day', 'Toast at dinner'],
    'Best Man': ['Support groom on the day', 'Hold rings if needed', 'Toast at dinner'],
    'Officiant': ['Lead ceremony', 'File marriage license after'],
    'Photographer': ['Ceremony coverage', 'Portraits', 'Dinner/candids']
  }
};
