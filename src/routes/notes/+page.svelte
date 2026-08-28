<script lang="ts">
import { resolve } from '$app/paths';
import type { PageData } from './$types';

let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Notes | ktung cookbook</title>
</svelte:head>

<div>
  <ol>
    {#each data.notes as note (note.slug)}
      <li>
        <a href={resolve('/notes/[slug]', {slug: note.slug})}>{note.title}</a>
      </li>
    {/each}
  </ol>
</div>
