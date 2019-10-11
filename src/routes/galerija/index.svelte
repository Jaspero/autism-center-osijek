<svelte:head>
	<title>CZA Osijek | Galerija</title>
</svelte:head>

<script>
	import GalleryCard from "./components/GalleryCard.svelte";
	import Title from "../../shared/components/Title.svelte";
	import ViewAll from "../../shared/components/ViewAll.svelte";
	import BlogArticle from "../../shared/components/BlogArticle.svelte";
	import Loading from "../../shared/components/Loading.svelte";

	let loading = true;
	let gallery = [];
	let hasMore;

	function loadMore() {

		let url = `galerija.json`;

		if (hasMore) {
			url += `?cursor=${hasMore}`;
		}

		fetch(url)
			.then(r => r.json())
			.then(data => {
				gallery = [...gallery, ...data.gallery];
				hasMore = data.hasMore;
				loading = false;
			});
	}

	if (process.browser) {
		loadMore();
	}
</script>

{#if loading}
	<Loading/>
{:else}
	<section class="grid generic-section">
		<div class="col-6 col-m-8 col-s-10 col-xs-12">
			{#each gallery as {title, images, date}}
				<BlogArticle>
					<Title>{title}</Title>
					<div class="grid">
						{#each images as image}
							<GalleryCard
								hrefValue="/galerija"
								classValue="col-4 col-xs-6"
								imageValue={image}>
							</GalleryCard>
						{/each}
						<ViewAll href="/galerija" class="col-12">Pregledaj sve</ViewAll>
					</div>
				</BlogArticle>
			{/each}
		</div>
	</section>

	<button disabled={!hasMore} on:click={loadMore}>Učitavj više</button>
{/if}
