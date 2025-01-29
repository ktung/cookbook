<script lang="ts">
  import IngredientInput from "$lib/components/IngredientInput.svelte";
  import { translate } from "$lib/services/ingredient-translator";
  import type { PageData } from "./$types";
  import * as m from "$lib/paraglide/messages.js"
  import { currentLanguage } from "$lib/services/language-util";
  import { ceil2, round2 } from "$lib/services/calculator";
  import sanitizeHtml from 'sanitize-html';
  import { base } from "$app/paths";
  import { load as loadYaml } from 'js-yaml';
  import { onDestroy } from "svelte";
  import { currency } from "$lib/stores/currency";

  const { data }: { data: PageData } = $props();
  const recipe = data.recipe;
  let prices = $state(data.prices);
  const currentLang = currentLanguage();

  const totalPercentage = $derived(
    recipe.ingredients.reduce((sum, ingredient) => sum + ingredient.percentage, 0)
  );
  let totalIngredient = $state(recipe.presetTotalIngredient);

  let htmlProcess = !recipe.process || !recipe.process[currentLang] ? '' : recipe.process[currentLang].split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `${line}<br />`)
    .map(content => sanitizeHtml(content))
    .join('');
  let htmlNotes = !recipe.notes || !recipe.notes[currentLang] ? '' : recipe.notes[currentLang].split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `${line}<br />`)
    .map(content => sanitizeHtml(content))
    .join('');

  function ingredientOninput(newTotal: number) {
    totalIngredient = newTotal;
  }

  const currencySign = $derived($currency === 'cad' ? '$' : '€');

  async function handleCurrencyChange() {
    const priceYml = await fetch(`${base}/price/${$currency}.yml`);
    const priceText = await priceYml.text();
    prices = loadYaml(priceText);
  }

  let wakeLock: WakeLockSentinel | null = null;
  let cookMode = $state(false);
  async function toggleCookMode() {
    try {
      if (!cookMode) {
        wakeLock = await navigator.wakeLock.request('screen');
        cookMode = true;
      } else {
        await wakeLock?.release();
        wakeLock = null;
        cookMode = false;
      }
    } catch (err) {
      console.error('Wake Lock error:', err);
    }
  }

  onDestroy(async () => {
    if (wakeLock) {
      await wakeLock.release();
    }
  });
</script>

<svelte:head>
  <title>#{recipe.name[currentLang]} | ktung cookbook</title>
</svelte:head>

<div class="recipe">
  <div class="title">
    <h2>#{recipe.name[currentLang]}</h2>

    <div class="controls">
      <button
        class="cook-mode {cookMode ? 'active' : ''}"
        onclick={toggleCookMode}>
        {cookMode ? 'Disable' : 'Enable'} Cook Mode
      </button>
      <select bind:value={$currency} onchange={handleCurrencyChange}>
        <option value="cad">CAD $</option>
        <option value="eur">EUR €</option>
      </select>
    </div>
  </div>

  {#if !!recipe.ingredients}
  <div class="ingredients">
    {#each recipe.ingredients as ingredient}
    <label for="ingredient-{ingredient.name}">{translate(ingredient.name)} {round2(ingredient.percentage)}%</label>

    <IngredientInput
      id="ingredient-{ingredient.name}"
      ingredientPercentage={ingredient.percentage}
      totalRecipePercentage={totalPercentage}
      totalIngredient={totalIngredient}
      onInput={ingredientOninput} />

      <span class="price">
        {#if prices[ingredient.name]}
          {ceil2(prices[ingredient.name]?.price * (ingredient.percentage*totalIngredient/totalPercentage)).toFixed(2)}{currencySign}
        {/if}
      </span>
    {/each}
    <label for="ingredient-total">{m.total()}</label>
    <input id="ingredient-total" type="number" min="0" bind:value="{totalIngredient}" />
    <span class="price">
      {recipe.ingredients.reduce((sum, ingredient) =>
        sum + ceil2((prices[ingredient.name]?.price || 0) * (ingredient.percentage*totalIngredient/totalPercentage))
      , 0).toFixed(2)}{currencySign}
    </span>
  </div>
  {/if}

  <div class="process">
    {#if htmlProcess}
      <h3>Process</h3>
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- html is already sanitize -->
      <p>{@html htmlProcess}</p>
    {/if}
  </div>

  <div class="notes">
    {#if htmlNotes}
      <h3>Notes</h3>
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- html is already sanitize -->
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
.controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.cook-mode {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.cook-mode.active {
  background: #4CAF50;
  color: white;
}

.title {
  text-align: center;

  select {
    font-size: 0.8rem;
  }
}
h2 {
  display: inline-block;
  text-align: center;
  margin-bottom: 2.5rem;
}
.ingredients {
  display: grid;
  grid-template-columns: 43% 43% 14%;
  row-gap: 0.5rem;
  margin: 0 auto;

  label {
    align-self: center;
  }

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

.price {
  padding-left: 0.25rem;
  align-self: center;
  text-align: right;
  color: grey;
}
</style>