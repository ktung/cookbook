<script lang="ts">
  import { base } from "$app/paths";
  import Autocomplete from "$lib/components/Autocomplete.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Cookbook</title>
</svelte:head>

<Autocomplete
  recipes={data.recipes} />
<!-- <input type="text" placeholder="Search" />
<select>
  {#each Object.entries(data.recipes) as [key, value]}
      {#each value.recipes as recipe}
      <option value="1">{recipe.title}</option>
      {/each}
    {/each}
</select> -->
<button>Find me something</button>
