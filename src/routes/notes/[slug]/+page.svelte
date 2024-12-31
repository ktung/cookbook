<script>
let { data } = $props();
</script>

<div>{@html data.content}</div>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>