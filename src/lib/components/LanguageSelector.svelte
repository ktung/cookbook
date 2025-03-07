<script>
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import { i18n } from "$lib/i18n";
  import { availableLanguageTags, languageTag } from "$lib/paraglide/runtime";
</script>

<div>
  {#each availableLanguageTags as lang (lang)}
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
