<script lang="ts">
  import { languageTag } from "$lib/paraglide/runtime";
  import { translate } from "$lib/services/ingredient-translator";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  let recipe = data.recipe;

  let currentLang: 'en' | 'fr' = languageTag().substring(0, 2) as 'en' | 'fr';
</script>

<svelte:head>
  <title>Recipes</title>
</svelte:head>

<div>
  <h2>{recipe.name[currentLang]}</h2>
  
  {#each recipe.ingredients as ingredient}
    <div>
      <span>{translate(ingredient.name)} {ingredient.bakerPercentage}%</span>
    </div>
  {/each}

  {#if recipe.notes}
    <h3>Notes</h3>
    {recipe.notes[currentLang]}
  {/if}
</div>
