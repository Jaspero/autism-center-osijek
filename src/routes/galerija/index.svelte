<svelte:head>
	<title>CZA Osijek | Galerija</title>
</svelte:head>

<script>
	import GalleryCard from "./components/GalleryCard.svelte";
	import Title from "../../shared/components/Title.svelte";
	import ViewAll from "../../shared/components/ViewAll.svelte";
</script>

<section class="grid p-y-l">
	<div class="col-6 col-m-8 col-s-10 col-xs-12">
		<article class="m-b-xl">
			<p class="fs-small fg-secondary">21.09.2019.</p>
			<Title>Galerija 1</Title>
			<div class="grid">
				<GalleryCard
					hrefValue="/galerija"
					classValue="col-4 col-xs-6"
					imageValue="assets/images/placeholder.png">
				</GalleryCard>
				<GalleryCard
					hrefValue="/galerija"
					classValue="col-4 col-xs-6"
					imageValue="assets/images/placeholder.png">
				</GalleryCard>
				<GalleryCard
					hrefValue="/galerija"
					classValue="col-4 col-xs-6"
					imageValue="assets/images/placeholder.png">
				</GalleryCard>
				<GalleryCard
					hrefValue="/galerija"
					classValue="col-4 col-xs-6"
					imageValue="assets/images/placeholder.png">
				</GalleryCard>
				<GalleryCard
					hrefValue="/galerija"
					classValue="col-4 col-xs-6"
					imageValue="assets/images/placeholder.png">
				</GalleryCard>
				<GalleryCard
					hrefValue="/galerija"
					classValue="col-4 col-xs-6"
					imageValue="assets/images/placeholder.png">
				</GalleryCard>
				<ViewAll href="." class="col-12">Ostale slike</ViewAll>
			</div>
		</article>
	</div>
</section>
