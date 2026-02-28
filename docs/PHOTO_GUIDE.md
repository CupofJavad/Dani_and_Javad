# Photo guide for the wedding site

Use this guide to know **what photos to provide** for each part of the site and **where to put them**. You can drop files in `static/couple-photos/` and then either update `src/lib/config.ts` yourself or ask an agent to wire them in.

## Where photos appear

| Place on site | What to look for | File name | Config key |
|---------------|------------------|-----------|------------|
| **Hero** (top of home) | A strong, high-quality photo of you two—portrait or landscape. Works best if it’s wide (e.g. 1200px+ wide) and not too busy. | `hero.jpg` | `config.heroImage` → `/couple-photos/hero.jpg` |
| **Our Story** (left) | A favorite photo of you together—candid or posed. | `story-1.jpg` | `config.storyImage1` |
| **Our Story** (right) | Another moment or location—complements the first. | `story-2.jpg` | `config.storyImage2` |
| **Gallery** | 3–6+ photos: engagement, trips, moments you love. Mix of portrait and landscape is fine. | `gallery-1.jpg`, `gallery-2.jpg`, … | `config.galleryImages` → array of paths |

## Steps

1. **Add files** to `static/couple-photos/` (e.g. `hero.jpg`, `story-1.jpg`, `story-2.jpg`, `gallery-1.jpg`, …).
2. **Update config** in `src/lib/config.ts`:
   - `heroImage: '/couple-photos/hero.jpg'`
   - `storyImage1: '/couple-photos/story-1.jpg'`
   - `storyImage2: '/couple-photos/story-2.jpg'`
   - `galleryImages: ['/couple-photos/gallery-1.jpg', '/couple-photos/gallery-2.jpg', ...]`
3. Redeploy (or refresh in dev).

If you prefer, you can say: “Use the photos in `static/couple-photos/` and update config” and an agent can fill in the config for you.

## Shared album for guest photos

- Set **`config.sharedAlbumUrl`** to a Google Photos shared album (or Dropbox/other) link so guests can upload or view photos in one place.
- The site will show a “Share your photos” section with that link when `sharedAlbumUrl` is set.

## Social hashtag

- The site already shows a hashtag (e.g. **#DaniAndJavad**) in the Gallery section. Set **`config.photoHashtag`** in `src/lib/config.ts` to match the one you’re using on social.
