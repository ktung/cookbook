<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

  import '../app.css';
  import Navigation from '$lib/components/Navigation.svelte';
  import LanguageSelector from '$lib/components/LanguageSelector.svelte';

  let { children } = $props();
</script>
<ParaglideJS {i18n}>

<div>
  <Navigation />
  <LanguageSelector />

  {@render children()}
</div>
</ParaglideJS>