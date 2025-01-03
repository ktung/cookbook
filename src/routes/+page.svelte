<script lang="ts">
  import { base } from "$app/paths";
  import Autocomplete from "$lib/components/Autocomplete.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  function redirectRandomRecipe() {
    let recipes = data.recipes;
    let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    window.location.href = `${base}/r/${randomRecipe.slug}`;
  }
</script>

<svelte:head>
  <title>Cookbook</title>
</svelte:head>

<Autocomplete
  recipes={data.recipes} />
<button onclick={redirectRandomRecipe()}>Find me something</button>
