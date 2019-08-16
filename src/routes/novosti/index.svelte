<svelte:head>
	<title>CZA Osijek | Novosti</title>
</svelte:head>

<script>
	import Card from '../../shared/components/Card.svelte';
</script>

<!--Novost-->
<section class="grid p-y-xl">
	<div class="col-12">
		<p class="fs-small fg-secondary">21.09.2019.</p>
		<h3 class="title m-b-l">E-glas edukacija - Grid 3</h3>
	</div>
	<div class="col-6 col-s-12 col-xs-12 read-format">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
	<div class="col-1 col-s-0"></div>
	<div class="col-5 col-s-12 col-xs-12">
		<img src="assets/images/placeholder.png" alt="">
	</div>
</section>

<!--Ostale novosti-->
<section class="grid p-y-xl">
	<div class="col-12">
		<h3 class="title m-b-l">Ostale novosti</h3>
	</div>
	<div class="col-12">
		<div class="grid jc-start">
			<Card href="/novosti" class="col-3 col-m-6 col-xs-12">
				<span slot="subtitle">21.09.2019.</span>
				<span slot="title">Novi natječaj za posao</span>
				<div slot="image" class="aspect-container" data-ratio="2:1">
					<img class="aspect-image" src="assets/images/placeholder.png" alt="">
				</div>
			</Card>
			<Card href="/novosti" class="col-3 col-m-6 col-xs-12">
				<span slot="subtitle">21.09.2019.</span>
				<span slot="title">Novi natječaj za posao</span>
				<div slot="image" class="aspect-container" data-ratio="2:1">
					<img class="aspect-image" src="assets/images/placeholder.png" alt="">
				</div>
			</Card>
			<Card href="/novosti" class="col-3 col-m-6 col-xs-12">
				<span slot="subtitle">21.09.2019.</span>
				<span slot="title">Novi natječaj za posao</span>
				<div slot="image" class="aspect-container" data-ratio="2:1">
					<img class="aspect-image" src="assets/images/placeholder.png" alt="">
				</div>
			</Card>
			<Card href="/novosti" class="col-3 col-m-6 col-xs-12">
				<span slot="subtitle">21.09.2019.</span>
				<span slot="title">Novi natječaj za posao</span>
				<div slot="image" class="aspect-container" data-ratio="2:1">
					<img class="aspect-image" src="assets/images/placeholder.png" alt="">
				</div>
			</Card>
			<Card href="/novosti" class="col-3 col-m-6 col-xs-12">
				<span slot="subtitle">21.09.2019.</span>
				<span slot="title">Novi natječaj za posao</span>
				<div slot="image" class="aspect-container" data-ratio="2:1">
					<img class="aspect-image" src="assets/images/placeholder.png" alt="">
				</div>
			</Card>
			<Card href="/novosti" class="col-3 col-m-6 col-xs-12">
				<span slot="subtitle">21.09.2019.</span>
				<span slot="title">Novi natječaj za posao</span>
				<div slot="image" class="aspect-container" data-ratio="2:1">
					<img class="aspect-image" src="assets/images/placeholder.png" alt="">
				</div>
			</Card>
			<Card href="/novosti" class="col-3 col-m-6 col-xs-12">
				<span slot="subtitle">21.09.2019.</span>
				<span slot="title">Novi natječaj za posao</span>
				<div slot="image" class="aspect-container" data-ratio="2:1">
					<img class="aspect-image" src="assets/images/placeholder.png" alt="">
				</div>
			</Card>
			<Card href="/novosti" class="col-3 col-m-6 col-xs-12">
				<span slot="subtitle">21.09.2019.</span>
				<span slot="title">Novi natječaj za posao</span>
				<div slot="image" class="aspect-container" data-ratio="2:1">
					<img class="aspect-image" src="assets/images/placeholder.png" alt="">
				</div>
			</Card>
		</div>
	</div>
</section>
