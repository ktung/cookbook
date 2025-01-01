<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  let recipe = data.recipe;
</script>

<svelte:head>
  <title>Recipes</title>
</svelte:head>

<div>
  <h2>{recipe.name.fr}</h2>
  
  {#each recipe.ingredients as ingredient}
    <div>
      <span>{ingredient.name} - {ingredient.bakerPercentage}</span>
    </div>
  {/each}

  {#if recipe.notes}
    <h3>Notes</h3>
    {recipe.notes.fr}
  {/if}
</div>
