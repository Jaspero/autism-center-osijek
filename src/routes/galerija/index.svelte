<svelte:head>
	<title>CZA Osijek | Galerija</title>
</svelte:head>

<script>
	import GalleryCard from "./components/GalleryCard.svelte";
	import Title from "../../shared/components/Title.svelte";
	import ViewAll from "../../shared/components/ViewAll.svelte";
	import BlogArticle from "../../shared/components/BlogArticle.svelte";
	import BlogNavigation from "../../shared/components/BlogNavigation.svelte";
	import BlogNavigationItem from "../../shared/components/BlogNavigationItem.svelte";
</script>

<section class="grid generic-section">
	<div class="col-3 col-m-4 col-s-10 col-xs-12">
		<BlogNavigation labelValue="Galerije:">
			<BlogNavigationItem isTitle textValue={"G1"} hrefValue={"/galerija"}></BlogNavigationItem>
			<BlogNavigationItem isTitle textValue={"G2"} hrefValue={"/galerija"}></BlogNavigationItem>
		</BlogNavigation>
	</div>
	<div class="col-6 col-m-8 col-s-10 col-xs-12">
		<BlogArticle>
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
				<ViewAll href="/galerija" class="col-12">Pregledaj sve</ViewAll>
			</div>
		</BlogArticle>
	</div>
	<div class="col-3 col-m-0"></div>
</section>
