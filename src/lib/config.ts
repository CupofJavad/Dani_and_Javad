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
  /** YouTube embed URL for venue/area video (e.g. "https://www.youtube.com/embed/VIDEO_ID"). Optional. */
  venueVideoUrl?: string;
  /** Hashtag for guest photos (e.g. "DaniAndJavad"). Shown in Gallery. Optional. */
  photoHashtag?: string;
  capacity: number;
  rsvpDeadline: string; // ISO date
  tagline: string;
  ogImage?: string;
  /** Override with /couple-photos/hero.jpg when you add your photo */
  heroImage?: string;
  /** Override with /couple-photos/story-1.jpg, story-2.jpg when you add photos */
  storyImage1?: string;
  storyImage2?: string;
  /** Override with /couple-photos/gallery-1.jpg etc. when you add photos */
  galleryImages?: string[];
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
  galleryImages: undefined
};
