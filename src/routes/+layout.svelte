<script lang="ts">
  import '../app.css';

  let { data, children }: { data: { config: import('$lib/config').WeddingConfig }; children: import('svelte').Snippet } = $props();
</script>

<svelte:head>
  <title>{data.config.coupleNames} — Wedding</title>
  {#if data.config.ogImage}
    <meta property="og:image" content={data.config.ogImage} />
  {/if}
</svelte:head>

<header class="site-header">
  <nav class="nav">
    <a href="/">Home</a>
    <a href="/#story">Our Story</a>
    <a href="/#location">Location</a>
    <a href="/#events">Events</a>
    <a href="/#rsvp">RSVP</a>
    <a href="/#gallery">Gallery</a>
    <a href="/#faq">FAQ</a>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer class="site-footer">
  <p>We use your RSVP only for the wedding (guest list, dietary needs, and day-of updates). We don't share or sell your information.</p>
</footer>
