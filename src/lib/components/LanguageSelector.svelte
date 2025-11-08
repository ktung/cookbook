<script lang="ts">
  import { getLocale, locales, setLocale } from "$lib/paraglide/runtime";

  let locale = $state(getLocale());

  function onChangeLocale(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newLocale = target.value as typeof locale;
    setLocale(newLocale);
  }
</script>

<div>
  <select
    class="select"
    bind:value={locale}
    onchange={onChangeLocale}
    aria-label="Language preference:">
    {#each locales as lang (lang)}
      <option value={lang}>{lang}</option>
    {/each}
  </select>
</div>

<style>
div {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-right: 0.5rem;
}

a {
  width: 2rem;
  height: auto;
}

a[aria-current="page"] {
  width: 3rem;
}

img {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
}
</style>
