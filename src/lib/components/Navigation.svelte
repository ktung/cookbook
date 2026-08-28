<script>
import { resolve } from '$app/paths';
import { page } from '$app/state';
import * as m from '$lib/paraglide/messages.js';
</script>

<div>
  <a href="{resolve('/')}" aria-current={page.url.pathname === '/'}>{m.home()}</a>
  <a href="{resolve('/notes')}">{m.notes()}</a>
  <a href="{resolve('/about')}">{m.about()}</a>
</div>
