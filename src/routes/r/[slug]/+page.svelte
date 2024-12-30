<script lang="ts">
  import IngredientInput from "$lib/components/IngredientInput.svelte";
  import { translate } from "$lib/services/ingredient-translator";
  import type { PageData } from "./$types";
  import * as m from "$lib/paraglide/messages.js"
  import { currentLanguage } from "$lib/services/language-util";
  import { round2 } from "$lib/services/calculator";

  let { data }: { data: PageData } = $props();
  let recipe = data.recipe;

  let currentLang = currentLanguage();

  let totalIngredient = $state(recipe.presetTotalIngredient);

  let htmlProcess = !recipe.process || !recipe.process[currentLang] ? '' : recipe.process[currentLang].split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `${line}<br />`)
    .join('');
  let htmlNotes = !recipe.notes || !recipe.notes[currentLang] ? '' : recipe.notes[currentLang].split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `${line}<br />`)
    .join('');

  function ingredientOninput(newTotal: number) {
    totalIngredient = newTotal;
  }
</script>

<svelte:head>
  <title>{recipe.name[currentLang]} | ktung cookbook</title>
</svelte:head>

<div class="recipe">
  <h2>{recipe.name[currentLang]}</h2>

  {#if !!recipe.ingredients}
  <div class="ingredients">
    {#each recipe.ingredients as ingredient}
    <label for="ingredient-{ingredient.name}">{translate(ingredient.name)} {round2(ingredient.percentage)}%</label>
    <IngredientInput
      id="ingredient-{ingredient.name}"
      ingredientPercentage={ingredient.percentage}
      totalRecipePercentage={recipe.totalPercentage}
      totalIngredient={totalIngredient}
      onInput={ingredientOninput} />
    {/each}
    <label for="ingredient-total">{m.total()}</label>
    <input id="ingredient-total" type="number" min="0" bind:value="{totalIngredient}" />
  </div>
  {/if}

  <div class="process">
    {#if htmlProcess}
      <h3>Process</h3>
      <p>{@html htmlProcess}</p>
    {/if}
  </div>

  <div class="notes">
    {#if htmlNotes}
      <h3>Notes</h3>
      <p>{@html htmlNotes}</p>
    {/if}
  </div>

  {#if !!recipe.references}
  <div class="references">
    <h3>References</h3>
    <ul>
      {#each recipe.references as reference}
        <li><a href={reference} target="_blank">{reference}</a></li>
      {/each}
    </ul>
  </div>
  {/if}
</div>

<style>
h2 {
  text-align: center;
  margin-bottom: 2.5rem;
}
.ingredients {
  display: grid;
  grid-template-columns: 50% 50%;
  row-gap: 0.5rem;
  margin: 0 auto;

  input, :global(input) {
    text-align: right;
  }
}
@media (min-width: 800px) {
  .ingredients {
    width: fit-content;
  }
}

h3 {
  text-align: center;
}
.process, .notes, .references {
  width: fit-content;
  margin: 0 auto;
}
</style>