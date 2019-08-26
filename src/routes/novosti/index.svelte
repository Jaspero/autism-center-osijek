<svelte:head>
	<title>CZA Osijek | Novosti</title>
</svelte:head>

<script>
	import Card from '../../shared/components/Card.svelte';
	import Title from '../../shared/components/Title.svelte';
	import CardPlaceholder from '../../shared/components/CardPlaceholder.svelte';
</script>

<section class="grid generic-section">
	<div class="col-12">
		<Title>Novosti</Title>
	</div>
	<div class="col-12">
		{#if 1}
			<CardPlaceholder cards={8} classValue="col-3 col-m-6 col-xs-12" hasSubtitle hasTitle hasImage/>
		{:else}
			<div class="grid jc-start">
				<Card
						hrefValue=""
						classValue="col-3 col-m-6 col-xs-12"
						subtitleValue="21.09.2019."
						titleValue="Novi natječaj za posao"
						imageValue="assets/images/placeholder.png">
				</Card>
			</div>
		{/if}
	</div>
</section>
