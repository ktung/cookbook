<script>
  import { base } from "$app/paths";
  import * as m from "$lib/paraglide/messages.js"
  import { currentLanguage } from "$lib/services/language-util";
  import { normalizeString } from "$lib/services/strings";

  let { recipes } = $props();

  let searchTerm = $state("");
  let currentLang = currentLanguage();

  let filteredItems = $derived(recipes.filter((recipe) => {
    return normalizeString(recipe.name[currentLang]).includes(normalizeString(searchTerm));
  }));
  let showDropdown = $state(false);

  function selectRecipe(filename) {
    let slug = filename.replace(".yml", "");
    return `${base}/r/${slug}`;
  }

  let selectedIndex = $state(-1);

  function handleKeydown(event) {
    if (!showDropdown || filteredItems.length === 0) {
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        selectedIndex = (selectedIndex + 1) % filteredItems.length;
        break;
      case 'ArrowUp':
        event.preventDefault();
        selectedIndex = selectedIndex <= 0 ? filteredItems.length - 1 : selectedIndex - 1;
        break;
      case 'Enter':
        if (selectedIndex >= 0) {
          event.preventDefault();
          window.location.href = selectRecipe(filteredItems[selectedIndex].filename);
        }
        break;
      case 'Escape':
        showDropdown = false;
        selectedIndex = -1;
        break;
    }
  }
</script>

<div class="autocomplete">
  <input
    type="text"
    placeholder={m.searchPlaceholder()}
    bind:value={searchTerm}
    onkeydown={handleKeydown}
    onfocus={() => showDropdown = true}
    onblur={() => setTimeout(() => showDropdown = false, 200)} />

  {#if showDropdown}
    <div class="autocomplete-list">
      {#each filteredItems as recipe, i (recipe)}
        <a 
          class="autocomplete-item" 
          class:selected={i === selectedIndex}
          href={selectRecipe(recipe.filename)}
        >
          {recipe.name[currentLang]}
        </a>
      {/each}
    </div>
  {/if}
</div>

<style>
  .autocomplete {
    width: 80%;
    margin: 0 auto;
  }

  .autocomplete-item.selected {
    background-color: hsl(37, 100%, 53%);
    color: white;
  }

  @media (min-width: 1024px) {
    .autocomplete {
      width: 60%;
    }
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .autocomplete-list {
    background: white;
    border: 1px solid #ddd;
    border-radius: 0 0 4px 4px;
    max-height: 30vh;
    overflow-y: auto;
  }

  .autocomplete-item {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }

  .autocomplete-item:hover {
    background-color: hsl(37, 100%, 53%);
    color: white;
  }
</style>
