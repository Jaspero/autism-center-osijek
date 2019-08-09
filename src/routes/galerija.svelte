<svelte:head>
	<title>CZA Osijek | Galerija</title>
</svelte:head>

<style>
	.cza-gallery-image-container {
		position: relative;
		padding: 0;
		padding-bottom: calc(100% / 3);
	}
	.cza-gallery-image {
		position: absolute;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	@media (max-width: 600px) {
		.cza-gallery-image-container {
			padding-bottom: calc(100% / 2);
		}
	}
</style>

<section class="grid p-y-l">
	<div class="col-3 col-m-4 col-s-10 col-xs-12">
		<nav class="page-content" data-content="Programi:">
			<a href="/galerija">todo</a>
			<a href="/galerija">todo</a>
			<a href="/galerija">todo</a>
		</nav>
	</div>
	<div class="col-6 col-m-8 col-s-10 col-xs-12">
		<article class="m-b-xl">
			<p class="fs-small fg-secondary">21.09.2019.</p>
			<h3 class="title m-b-m">Galerija 1</h3>
			<div class="grid">
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<a href="galerija" class="col-12 p-a-m card-link">
					<p class="ta-right">Ostale slike →</p>
				</a>
			</div>
		</article>
		<article class="m-b-xl">
			<p class="fs-small fg-secondary">21.09.2019.</p>
			<h3 class="title m-b-m">Galerija 1</h3>
			<div class="grid">
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<a href="galerija" class="col-12 p-a-m card-link">
					<p class="ta-right">Ostale slike →</p>
				</a>
			</div>
		</article>
		<article class="m-b-xl">
			<p class="fs-small fg-secondary">21.09.2019.</p>
			<h3 class="title m-b-m">Galerija 1</h3>
			<div class="grid">
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<div class="col-4 col-xs-6 cza-gallery-image-container">
					<img class="cza-gallery-image" src="assets/images/placeholder.png" alt="">
				</div>
				<a href="galerija" class="col-12 p-a-m card-link">
					<p class="ta-right">Ostale slike →</p>
				</a>
			</div>
		</article>
	</div>
</section>