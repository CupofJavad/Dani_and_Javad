<script lang="ts">
  let { data }: { data: { rsvps: { id: string; name: string; email: string; attending: string; plus_one: string | null; notes: string | null; created_at: string }[]; error?: string; exportUrl: string | null } } = $props();
</script>

<svelte:head>
  <title>Admin — RSVPs</title>
</svelte:head>

<div class="admin">
  <h1>RSVPs</h1>
  {#if data.error}
    <p class="error">{data.error}</p>
  {:else}
    {#if data.exportUrl}
  <p><a href={data.exportUrl}>Download CSV</a></p>
{/if}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Attending</th>
          <th>Plus one</th>
          <th>Notes</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {#each data.rsvps as r}
          <tr>
            <td>{r.name}</td>
            <td>{r.email}</td>
            <td>{r.attending}</td>
            <td>{r.plus_one ?? '—'}</td>
            <td>{r.notes ?? '—'}</td>
            <td>{new Date(r.created_at).toLocaleDateString()}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    {#if data.rsvps.length === 0}
      <p class="muted">No RSVPs yet.</p>
    {/if}
  {/if}
  <p><a href="/">Back to site</a></p>
</div>

<style>
  .admin {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
  }
  .error {
    color: #c62828;
  }
  .muted {
    color: var(--color-muted, #666);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }
  th, td {
    text-align: left;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
  }
  th {
    font-weight: 600;
  }
</style>
