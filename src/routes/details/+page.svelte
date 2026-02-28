<script lang="ts">
  import { config } from '$lib/config';

  let { data }: { data: { config: typeof config } } = $props();
</script>

<svelte:head>
  <title>{data.config.coupleNames} — Wedding Details</title>
</svelte:head>

<div class="details-print">
  <h1>{data.config.coupleNames}</h1>
  <p class="tagline">{data.config.tagline}</p>

  <h2>Ceremony</h2>
  <p><strong>{new Date(data.config.weddingDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</strong> at <strong>{data.config.weddingTime}</strong></p>
  <p>{data.config.venueName}</p>
  {#if data.config.venueAddress}
    <p>{data.config.venueAddress}</p>
  {/if}

  <h2>RSVP</h2>
  <p>Please respond by {new Date(data.config.rsvpDeadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.</p>
  <p class="muted"><strong>RSVP online:</strong> <a href="/#rsvp">RSVP on our wedding site</a> (same link when viewing from your site)</p>
</div>

<style>
  .details-print {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    font-family: var(--font-sans, system-ui, sans-serif);
  }
  .tagline {
    font-size: 1.1rem;
    color: var(--color-muted, #666);
    margin-bottom: 2rem;
  }
  .muted {
    font-size: 0.9rem;
    color: var(--color-muted, #666);
  }
  @media print {
    .details-print {
      padding: 1rem;
    }
    a {
      word-break: break-all;
    }
  }
</style>
