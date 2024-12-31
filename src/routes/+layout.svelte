<script>
  import { page } from '$app/state';

  export const prerender = true;

  let { children } = $props();
</script>

<div>
  <a href="/" aria-current={page.url.pathname === '/'}>Home</a>
  <a href="/notes">Notes</a>

  {@render children()}
</div>
