<script>
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import * as m from "$lib/paraglide/messages.js"
</script>

<div>
  <a href="{base}/" aria-current={page.url.pathname === '/'}>{m.home()}</a>
  <a href="{base}/notes">{m.notes()}</a>
  <a href="{base}/about">{m.about()}</a>
</div>
