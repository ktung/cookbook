<script>
  import { base } from "$app/paths";

  let { recipes } = $props();

  let searchTerm = $state("");

  let filteredItems = $derived(recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
  }));
  let showDropdown = $state(false);

  function selectRecipe(recipeSlug) {
    window.location.href = `${base}/r/${recipeSlug}`;
  }
</script>

<div class="autocomplete">
  <input
    type="text"
    placeholder="Search recipes..."
    bind:value={searchTerm}
    onfocus={() => showDropdown = true}
    onblur={() => setTimeout(() => showDropdown = false, 200)} />

  {#if showDropdown}
    <div>
      {#each filteredItems as recipe}
        <div onmousedown={selectRecipe(recipe.slug)}>{recipe.title}</div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .autocomplete {
    width: 300px;
    margin: 0 auto;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>