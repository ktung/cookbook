<script lang="ts">
  import { base } from "$app/paths";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<div>
  BODY NOTES
  {#each data.notes as note}
    <a href={`${base}/notes/${note.slug}`}>{note.title}</a>
  {/each}
</div>

<svelte:head>
  <title>Notes</title>
</svelte:head>
