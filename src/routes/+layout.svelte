<script>
  import '../app.css';
  import { base } from '$app/paths';
  import { page } from '$app/state';

  let { children } = $props();
</script>

<div>
  <a href="{base}/" aria-current={page.url.pathname === '/'}>Home</a>
  <a href="{base}/notes">Notes</a>

  {@render children()}
</div>
