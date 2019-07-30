<svelte:head>
	<title>{status}</title>
</svelte:head>

<script>
	export let status;
	export let error;
</script>

<p>Error {status} — {error.message}</p>
