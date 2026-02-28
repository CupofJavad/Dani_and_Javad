<script lang="ts">
  import { enhance } from '$app/forms';
  import { config } from '$lib/config';

  let { data, form = undefined }: {
    data: { config: typeof config };
    form?: { success?: boolean; message?: string; error?: string };
  } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
</svelte:head>

<!-- Hero -->
<section class="hero" id="home">
  <div class="hero-bg" style="background-image: url('{data.config.heroImage || 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80'}');"></div>
  <div class="hero-content">
    <h1 class="hero-title">{data.config.coupleNames}</h1>
    <p class="hero-tagline">{data.config.tagline}</p>
    <p class="hero-date">{new Date(data.config.weddingDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <a href="#rsvp" class="cta-button">RSVP</a>
  </div>
</section>

<!-- Our Story -->
<section class="section" id="story">
  <h2>Our Story</h2>
  <div class="story-content">
    <p>We're so excited to celebrate with you. This page will feature our story and a few photos—add your own in <code>static/couple-photos/</code> (e.g. hero.jpg, story-1.jpg) and we'll wire them in.</p>
    <div class="story-images">
      <img src={data.config.storyImage1 || 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&q=80'} alt="Couple" width="400" height="300" />
      <img src={data.config.storyImage2 || 'https://images.unsplash.com/photo-1529636798458-92182a662888?w=400&q=80'} alt="Celebration" width="400" height="300" />
    </div>
  </div>
</section>

<!-- Location (ideas from rampatra/wedding-website: map, Uber, video) -->
<section class="section" id="location">
  <h2>Location</h2>
  <p class="venue-name">{data.config.venueName}</p>
  {#if data.config.venueAddress}
    <p class="venue-address">{data.config.venueAddress}</p>
  {/if}
  <p>Coastal bluffs, small beaches, and dramatic ocean views. Parking is limited; we encourage carpooling.</p>
  <div class="location-actions">
    {#if data.config.venueMapsUrl}
      <a href={data.config.venueMapsUrl} target="_blank" rel="noopener noreferrer" class="link-button">View on Google Maps</a>
    {/if}
    {#if data.config.venueAddress}
      {@const encodedAddress = encodeURIComponent(data.config.venueAddress)}
      <a href="https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]={encodedAddress}" target="_blank" rel="noopener noreferrer" class="link-button ride-btn">Book Uber</a>
      <a href="https://www.lyft.com/ride?id=lyft&destination[address]={encodedAddress}" target="_blank" rel="noopener noreferrer" class="link-button ride-btn">Book Lyft</a>
    {/if}
  </div>
  {#if data.config.venueEmbedUrl}
    <div class="map-embed">
      <iframe title="Map of {data.config.venueName}" src={data.config.venueEmbedUrl} width="100%" height="280" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  {/if}
  {#if data.config.venueVideoUrl}
    <div class="venue-video">
      <p class="small-print">A glimpse of the area</p>
      <iframe title="Venue or area video" src={data.config.venueVideoUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  {/if}
  <p class="small-print">Garrapata State Park is on Highway 1, Carmel-by-the-Sea, CA. <a href="https://www.parks.ca.gov/?page_id=28710">California State Parks Special Event Permits</a></p>
</section>

<!-- Events -->
<section class="section" id="events">
  <h2>Events</h2>
  <div class="event-card">
    <h3>Ceremony</h3>
    <p>{new Date(data.config.weddingDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} at {data.config.weddingTime}</p>
    <p>{data.config.venueName}</p>
    <div class="add-to-cal">
      <a href="/api/calendar.ics" download="wedding.ics" class="link-button">Add to Calendar (.ics)</a>
      <a href="/api/calendar.ics" class="link-button link-button-subtle">Subscribe (iCal / Google)</a>
    </div>
    <p class="small-print">To auto-sync with iCal: Apple Calendar → File → New Calendar Subscription → paste your site URL + <code>/api/calendar.ics</code>. Google: Add calendar by URL, same link. If you update the date/time in config and redeploy, subscribers get the update.</p>
  </div>
  {#if data.config.dinnerTitle || data.config.dinnerTime}
  <div class="event-card">
    <h3>{data.config.dinnerTitle || 'Dinner'}</h3>
    <p>{new Date(data.config.weddingDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} {#if data.config.dinnerTime}at {data.config.dinnerTime}{/if}</p>
    {#if data.config.dinnerVenueName}<p>{data.config.dinnerVenueName}</p>{/if}
    {#if data.config.dinnerVenueAddress}<p class="venue-address">{data.config.dinnerVenueAddress}</p>{/if}
    <p class="small-print">Dinner details will be shared with RSVP confirmations.</p>
  </div>
  {/if}
</section>

<!-- Travel (Sacramento / SF) -->
<section class="section" id="travel">
  <h2>Travel & getting there</h2>
  {#if data.config.travelBlurb}<p>{data.config.travelBlurb}</p>{/if}
  {#if data.config.travelTips && data.config.travelTips.length}
  <ul class="travel-tips">
    {#each data.config.travelTips as tip}<li>{tip}</li>{/each}
  </ul>
  {/if}
  <p class="small-print">Carmel-by-the-Sea and Monterey are the closest places to stay. We'll share accommodation suggestions with RSVPs.</p>
</section>

<!-- RSVP -->
<section class="section rsvp-section" id="rsvp">
  <h2>RSVP</h2>
  <p>Please respond by {new Date(data.config.rsvpDeadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.</p>
  {#if form?.message}
    <p class="form-message success">{form.message}</p>
  {/if}
  {#if form?.error}
    <p class="form-message error">{form.error}</p>
  {/if}
  {#if !form?.success}
  <form method="POST" action="?/submit" class="rsvp-form" use:enhance>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" required />
    <label for="email">Email</label>
    <input id="email" name="email" type="email" required />
    <label for="attending">Attending?</label>
    <select id="attending" name="attending" required>
      <option value="">Choose…</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
    <label for="plus_one">Plus one (if any)</label>
    <input id="plus_one" name="plus_one" type="text" placeholder="Name or leave blank" />
    <label for="notes">Dietary needs or notes</label>
    <textarea id="notes" name="notes" rows="3" placeholder="Optional"></textarea>
    <button type="submit" class="cta-button">Submit RSVP</button>
  </form>
  {/if}
  {#if data.config.capacity}
    <p class="small-print">We're keeping our celebration intimate (up to {data.config.capacity} guests).</p>
  {/if}
  <p class="small-print">Share the RSVP link: <a href="/#rsvp">/#rsvp</a>. <a href="/api/rsvp-qr" target="_blank" rel="noopener">QR code</a> for invites.</p>
</section>

<!-- Gallery (hashtag CTA from rampatra/wedding-website) -->
<section class="section" id="gallery">
  <h2>Gallery</h2>
  <p>Photos of us and the day. Add images to <code>static/couple-photos/</code> (e.g. gallery-1.jpg) and set <code>config.galleryImages</code> in <code>src/lib/config.ts</code> to use them.</p>
  {#if data.config.photoHashtag}
    <p class="hashtag-cta">Help us capture the moment — tag your photos with <strong>#{data.config.photoHashtag}</strong></p>
  {/if}
  <div class="gallery-grid">
    {#each (data.config.galleryImages && data.config.galleryImages.length ? data.config.galleryImages : ['https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80', 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=80', 'https://images.unsplash.com/photo-1478146896981-b80fe4633303?w=400&q=80']) as src, i}
      <img src={src} alt="Gallery {i + 1}" width="400" height="300" />
    {/each}
  </div>
</section>

<!-- Registry -->
{#if data.config.registryUrl}
<section class="section" id="registry">
  <h2>Gift registry</h2>
  <p>Your presence is our present. If you'd like to give a gift, we're registered here:</p>
  <a href={data.config.registryUrl} target="_blank" rel="noopener noreferrer" class="link-button">{data.config.registryLabel || 'Gift registry'}</a>
</section>
{/if}

<!-- Contribute / donations -->
{#if data.config.contributeVenmoUrl || data.config.contributePayPalUrl || data.config.contributeText || data.config.contributeZellePdfPath}
<section class="section" id="contribute">
  <h2>Contribute</h2>
  <p>If you'd like to contribute toward our celebration or honeymoon, we're grateful for any gift. No obligation at all.</p>
  <div class="contribute-links">
    {#if data.config.contributeVenmoUrl}
      <a href={data.config.contributeVenmoUrl} target="_blank" rel="noopener noreferrer" class="link-button">Venmo</a>
    {/if}
    {#if data.config.contributePayPalUrl}
      <a href={data.config.contributePayPalUrl} target="_blank" rel="noopener noreferrer" class="link-button">PayPal</a>
    {/if}
    {#if data.config.contributeZellePdfPath}
      <a href={data.config.contributeZellePdfPath} target="_blank" rel="noopener noreferrer" class="link-button">Zelle (QR code)</a>
    {/if}
    {#if data.config.contributeText}
      <p class="contribute-text">{data.config.contributeText}</p>
    {/if}
  </div>
</section>
{/if}

<!-- Share your photos -->
{#if data.config.sharedAlbumUrl}
<section class="section" id="photos">
  <h2>Share your photos</h2>
  <p>Drop your photos from the day in our shared album so we can relive the celebration.</p>
  <a href={data.config.sharedAlbumUrl} target="_blank" rel="noopener noreferrer" class="link-button">Open shared album</a>
  <p class="small-print">You can also tag photos with <strong>#{data.config.photoHashtag || 'DaniAndJavad'}</strong> on social media.</p>
</section>
{/if}

<!-- FAQ -->
<section class="section" id="faq">
  <h2>FAQ</h2>
  <dl class="faq-list">
    <dt>What if it rains?</dt>
    <dd>We have a backup date and will update the site and reach out if the forecast looks uncertain.</dd>
    <dt>Where should I stay?</dt>
    <dd>Big Sur and Carmel-by-the-Sea have several options; we'll share a few suggestions closer to the date.</dd>
    <dt>Is there parking?</dt>
    <dd>Parking at the park is limited. We encourage carpooling and will share a meet-up point if helpful.</dd>
    <dt>Restrooms?</dt>
    <dd>State park facilities are available; we'll note the exact location on the site once confirmed.</dd>
  </dl>
</section>

<style>
  .hero {
    position: relative;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 calc(-1 * var(--space));
    margin-bottom: 3rem;
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
  }
  .hero-content {
    position: relative;
    z-index: 1;
    padding: var(--space);
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }
  .hero-title {
    font-size: clamp(2rem, 6vw, 3.5rem);
    margin: 0 0 0.5rem;
  }
  .hero-tagline {
    font-size: 1.25rem;
    margin: 0 0 0.5rem;
    opacity: 0.95;
  }
  .hero-date {
    font-size: 1rem;
    margin: 0 0 1.5rem;
    opacity: 0.9;
  }
  .cta-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--color-accent);
    color: #fff;
    border-radius: 6px;
    font-weight: 500;
    border: none;
    cursor: pointer;
  }
  .cta-button:hover {
    filter: brightness(1.1);
    text-decoration: none;
  }
  .section {
    padding: 3rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .section:last-of-type {
    border-bottom: none;
  }
  .section h2 {
    font-size: 1.75rem;
    margin: 0 0 1rem;
  }
  .venue-name {
    font-weight: 600;
    margin: 0 0 0.25rem;
  }
  .venue-address {
    color: var(--color-muted);
    margin: 0 0 1rem;
  }
  .link-button {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-accent);
    border-radius: 6px;
    color: var(--color-accent);
  }
  .link-button:hover {
    background: var(--color-accent);
    color: #fff;
    text-decoration: none;
  }
  .small-print {
    font-size: 0.9rem;
    color: var(--color-muted);
    margin-top: 1rem;
  }
  .location-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }
  .map-embed {
    margin-top: 1.5rem;
    border-radius: 8px;
    overflow: hidden;
    max-width: 100%;
  }
  .map-embed iframe {
    display: block;
  }
  .venue-video {
    margin-top: 1.5rem;
  }
  .venue-video iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    max-height: 320px;
    border-radius: 8px;
    border: 0;
  }
  .hashtag-cta {
    font-size: 1rem;
    margin: 0.5rem 0 0;
    color: var(--color-muted);
  }
  .hashtag-cta strong {
    color: var(--color-accent);
  }
  .story-images, .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: var(--space);
    margin-top: 1rem;
  }
  .story-images img, .gallery-grid img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .event-card {
    padding: 1rem;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 8px;
  }
  .travel-tips {
    margin: 0.75rem 0 0;
    padding-left: 1.25rem;
  }
  .travel-tips li {
    margin-bottom: 0.35rem;
  }
  .add-to-cal {
    margin-top: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .contribute-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    margin-top: 0.75rem;
  }
  .contribute-text {
    margin: 0.5rem 0 0;
    color: var(--color-muted);
    font-size: 0.95rem;
  }
  .link-button-subtle {
    font-size: 0.95rem;
  }
  .rsvp-form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 0.75rem;
  }
  .rsvp-form input, .rsvp-form select, .rsvp-form textarea {
    padding: 0.5rem;
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .faq-list dt {
    font-weight: 600;
    margin-top: 1rem;
  }
  .faq-list dd {
    margin: 0.25rem 0 0;
    color: var(--color-muted);
  }
  code {
    font-size: 0.9em;
    background: rgba(0,0,0,0.06);
    padding: 0.1em 0.3em;
    border-radius: 4px;
  }
  .form-message {
    padding: 0.75rem;
    border-radius: 6px;
    margin-bottom: 1rem;
  }
  .form-message.success {
    background: #e8f5e9;
    color: #2e7d32;
  }
  .form-message.error {
    background: #ffebee;
    color: #c62828;
  }
</style>
