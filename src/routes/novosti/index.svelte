<svelte:head>
	<title>CZA Osijek | Novosti</title>
	<meta name="description" content="Provjerite najnovije obavijesti i pratite novosti vezane uz rad Centra" />
</svelte:head>

<script>
	import Card from '../../shared/components/Card.svelte';
	import Title from '../../shared/components/Title.svelte';
	import CardPlaceholder from '../../shared/components/CardPlaceholder.svelte';

	let loading = true;
	let news = [];
	let hasMore;

	function loadMore() {

		let url = `novosti.json`;

		if (hasMore) {
			url += `?cursor=${hasMore}`;
		}

		fetch(url)
			.then(r => r.json())
			.then(data => {
				news = [...news, ...data.news.map(it => {
					it.url = '/novosti/' + it.url;
					return it;
				})];
				hasMore = data.hasMore;
				loading = false;
			});
	}

	if (process.browser) {
		loadMore();
	}
</script>

<section class="grid generic-section">
	<div class="col-12">
		<Title>Novosti</Title>
	</div>
	<div class="col-12">
		{#if loading}
			<CardPlaceholder cards={8} classValue="col-3 col-m-6 col-xs-12" hasSubtitle hasTitle hasImage/>
		{:else}
			<div class="grid jc-start">
				{#each news as item}
					<Card
							relValue="prefetch"
							hrefValue={item.url}
							classValue="col-3 col-m-6 col-xs-12"
							subtitleValue={item.date}
							titleValue={item.title}
							imageValue={item.image}>
					</Card>
				{/each}
				<div class="col-12">
					<div class="generic-section flex jc-center">
						<button class="btn" disabled={!hasMore} on:click={loadMore}>Učitaj još</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
