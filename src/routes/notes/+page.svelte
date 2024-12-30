<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<div>
  BODY NOTES
  {#each data.notes as note}
    <a href={`/notes/${note.id}`}>{note.title}</a>
  {/each}
</div>

<svelte:head>
  <title>Notes</title>
</svelte:head>
