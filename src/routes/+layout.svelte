<script>
    import { page } from '$app/state';

let { children } = $props();
</script>

<div>
  <a href="/" aria-current={page.url.pathname === '/'}>Home</a>
  <a href="/notes">Notes</a>

  {@render children()}
</div>
