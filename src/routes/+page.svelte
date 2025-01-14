<script lang="ts">
  import { base } from "$app/paths";
  import Autocomplete from "$lib/components/Autocomplete.svelte";
  import type { PageData } from "./$types";
  import * as m from "$lib/paraglide/messages.js"

  let { data }: { data: PageData } = $props();

  function redirectRandomRecipe() {
    let recipes = data.recipes;
    let randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

    let slug = randomRecipe.filename.replace(".yml", "");
    window.location.href = `${base}/r/${slug}`;
  }
</script>

<svelte:head>
  <title>ktung cookbook</title>
</svelte:head>

<div class="container">
  <Autocomplete
    recipes={data.recipes} />
    <div class="button-container">
      <button onclick={redirectRandomRecipe()}>{m.randomButton()}</button>
    </div>
</div>

<style>
  .button-container {
    display: flex;
    justify-content: center;
  }
  button {
    background-color: hsl(37, 100%, 53%);
    border: none;
    border-radius: 0.25rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
  }
</style>
