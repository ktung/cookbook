<script>
let { data } = $props();
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -- content is already sanitize -->
<div>{@html data.content}</div>

<svelte:head>
  <title>{data.title} | ktung cookbook</title>
</svelte:head>