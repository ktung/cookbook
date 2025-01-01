<script>
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import { i18n } from "$lib/i18n";
  import { availableLanguageTags, languageTag, setLanguageTag } from "$lib/paraglide/runtime";
</script>

<div>
  {#each availableLanguageTags as lang}
  <a href={i18n.route(page.url.pathname)}
    hreflang={lang}
    aria-current={lang === languageTag() ? "page" : undefined}>
    <img src="{base}/lang/{lang}.svg" alt="{lang}" />
  </a>
{/each}
</div>

<style>
div {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

img {
  width: 2rem;
}
</style>
