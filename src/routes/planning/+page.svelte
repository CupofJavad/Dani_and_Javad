<script lang="ts">
  let { data }: {
    data: { checklist: string[]; rolesAndTasks: Record<string, string[]>; token: string };
  } = $props();
  const planningUrl = $derived(`/planning?token=${encodeURIComponent(data.token)}`);
</script>

<svelte:head>
  <title>Planning — Dani & Javad</title>
</svelte:head>

<div class="planning">
  <h1>Wedding planning</h1>
  <p class="muted">Only you two can see this page. Bookmark: <a href={planningUrl}>{planningUrl}</a></p>

  <section class="block">
    <h2>Checklist</h2>
    <p class="small">Edit <code>config.planningChecklist</code> in <code>src/lib/config.ts</code> to add or reorder items.</p>
    <ul class="checklist">
      {#each data.checklist as item}
        <li>{item}</li>
      {/each}
    </ul>
    {#if data.checklist.length === 0}
      <p class="muted">No checklist items yet. Add <code>planningChecklist</code> in config.</p>
    {/if}
  </section>

  <section class="block">
    <h2>Tasks by role</h2>
    <p class="small">Assign tasks to Maid of Honor, Best Man, Officiant, etc. Edit <code>config.rolesAndTasks</code> in <code>src/lib/config.ts</code>.</p>
    {#if Object.keys(data.rolesAndTasks).length > 0}
      <div class="roles">
        {#each Object.entries(data.rolesAndTasks) as [role, tasks]}
          <div class="role-card">
            <h3>{role}</h3>
            <ul>
              {#each tasks as task}
                <li>{task}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    {:else}
      <p class="muted">No roles/tasks yet. Add <code>rolesAndTasks</code> in config.</p>
    {/if}
  </section>

  <p class="links">
    <a href="/">Back to site</a>
    <a href="/admin?token={encodeURIComponent(data.token)}">RSVP admin</a>
  </p>
</div>

<style>
  .planning {
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem;
  }
  .muted {
    color: var(--color-muted, #666);
    font-size: 0.95rem;
  }
  .small {
    font-size: 0.9rem;
    color: var(--color-muted, #666);
    margin: 0 0 0.75rem;
  }
  .block {
    margin-top: 2rem;
  }
  .block h2 {
    font-size: 1.35rem;
    margin: 0 0 0.25rem;
  }
  .checklist {
    padding-left: 1.25rem;
  }
  .checklist li {
    margin-bottom: 0.35rem;
  }
  .roles {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.75rem;
  }
  .role-card {
    flex: 1 1 200px;
    padding: 1rem;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 8px;
  }
  .role-card h3 {
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
  }
  .role-card ul {
    margin: 0;
    padding-left: 1.1rem;
  }
  .role-card li {
    margin-bottom: 0.25rem;
  }
  .links {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
  }
  .links a {
    color: var(--color-accent);
  }
  code {
    font-size: 0.85em;
    background: rgba(0,0,0,0.06);
    padding: 0.1em 0.35em;
    border-radius: 4px;
  }
</style>
