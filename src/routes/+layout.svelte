<script>
  import { ParaglideJS } from '@inlang/paraglide-sveltekit'
  import { i18n } from '$lib/i18n'

  import '../app.css';
  import Navigation from '$lib/components/Navigation.svelte';
  import LanguageSelector from '$lib/components/LanguageSelector.svelte';

  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  <header>
    <Navigation />
    <LanguageSelector />
  </header>

  <div class="main">
    {@render children()}
  </div>

  <footer>
    <a target="_blank" href="https://github.com/ktung/cookbook/">Github</a>
  </footer>
</ParaglideJS>

<style>
  header, footer {
    margin: 0 auto;
    text-align: center;
  }

  header {
    margin-bottom: 4rem;
  }
  footer {
    margin-top: 4rem;
  }

  .main {
    border: 2px solid hsl(37, 100%, 53%);
    border-radius: 0.75rem;
    padding: 1rem;
    width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 1024px) {
    .main {
      width: 80%;
    }
  }
</style>