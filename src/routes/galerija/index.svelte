<svelte:head>
	<title>CZA Osijek | Galerija</title>
	<meta name="description" content="Istražite fotografije Centra i pogledajte galeriju raznih događanja u sklopu rada Centra" />
</svelte:head>

<script>
	import GalleryCard from "./components/GalleryCard.svelte";
	import GalleryCarousel from "./components/GalleryCarousel.svelte"
	import Title from "../../shared/components/Title.svelte";
	import ViewAll from "../../shared/components/ViewAll.svelte";
	import BlogArticle from "../../shared/components/BlogArticle.svelte";
	import Loading from "../../shared/components/Loading.svelte";

	let loading = true;
	let gallery = [];
	let hasMore;

	let selectItem = null;
	let selectedImages = [];
	let carouselOpen = false;

	function loadMore() {

		let url = `galerija.json`;

		if (hasMore) {
			url += `?cursor=${hasMore}`;
		}

		fetch(url)
			.then(r => r.json())
			.then(data => {
				gallery = [
					...gallery,
					...data.gallery.map(it => {
						it.url = '/galerija/' + it.url;
						return it;
					})
				];
				hasMore = data.hasMore;
				loading = false;
			});
	}

	function openCarousel(images, index) {
		selectItem = index;
		selectedImages = [...images];
		carouselOpen = true;
	}

	function closeCarousel() {
		carouselOpen = false;
	}

	if (process.browser) {
		loadMore();
	}
</script>

<style>
	.gallery-date {
		display: block;
		margin-top: 2em;
	}
</style>

{#if loading}
	<Loading/>
{:else}

	<GalleryCarousel
		gallery={selectedImages}
		selected={selectItem}
		open={carouselOpen}
		on:close={closeCarousel}>
	</GalleryCarousel>

	<section class="grid generic-section">
		<div class="col-6 col-m-8 col-s-10 col-xs-12">
			{#each gallery as {title, images, date, url, viewAll}}
				<BlogArticle>
					<time class="gallery-date">{date}</time>
					<Title>{title}</Title>
					<div class="grid jc-start">
						{#each images as image, i}
							<GalleryCard
								classValue="col-4 col-xs-6"
								imageValue={image}
								on:selected={() => openCarousel(images, i)}>
							</GalleryCard>
						{/each}
						{#if viewAll}
							<ViewAll href={url} class="col-12">Pregledaj sve</ViewAll>
						{/if}
					</div>
				</BlogArticle>
			{/each}
		</div>
	</section>

	<section class="grid" style="margin-bottom: 4em;">
		<div class="col-6 col-m-8 col-s-10 col-xs-12" style="text-align: center;">
			<button class="btn" disabled={!hasMore} on:click={loadMore}>Učitaj više</button>
		</div>
	</section>
{/if}
