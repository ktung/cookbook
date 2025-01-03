<script lang="ts">
  import IngredientInput from "$lib/components/IngredientInput.svelte";
  import { languageTag } from "$lib/paraglide/runtime";
  import { round2IfNecessary } from "$lib/services/calculator";
  import { translate } from "$lib/services/ingredient-translator";
  import type { PageData } from "./$types";
  import * as m from "$lib/paraglide/messages.js"


  let { data }: { data: PageData } = $props();
  let recipe = data.recipe;

  let currentLang: 'en' | 'fr' = languageTag().substring(0, 2) as 'en' | 'fr';

  let totalIngredient = $state(recipe.presetTotalIngredient);

  function ingredientOninput(newTotal: number) {
    totalIngredient = newTotal;
  }
</script>

<svelte:head>
  <title>{recipe.name[currentLang]} | ktung cookbook</title>
</svelte:head>

<div>
  <h2>{recipe.name[currentLang]}</h2>
  
  <div>
    {#each recipe.ingredients as ingredient}
    <div>
      <label>{translate(ingredient.name)} {ingredient.percentage}%</label>
      <IngredientInput
        ingredientPercentage={ingredient.percentage}
        totalRecipePercentage={recipe.totalPercentage}
        totalIngredient={totalIngredient}
        onInput={ingredientOninput} />
    </div>
    {/each}
    <label>{m.total()}</label>
    <input type="number" bind:value="{totalIngredient}" />
  </div>

  {#if recipe.notes}
    <h3>Notes</h3>
    {recipe.notes[currentLang]}
  {/if}
</div>
