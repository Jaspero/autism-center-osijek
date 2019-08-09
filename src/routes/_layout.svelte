<script>
	export let segment;

	let menuExpanded = false;

	function toggleMenu() {
		const header = document.querySelector('.cza-header');
		menuExpanded = !menuExpanded;

		// click outside closes dialog

		window.addEventListener('click', (event => {
			if (!header.contains(event.target)) {
				menuExpanded = false;
			}
		}))
	}

</script>

<style>
	/* Header */
	.cza-header {
		position: fixed;
		z-index: 3;
		top: 0;
		left: 0;
		width: 100%;
		height: 80px;
		background: var(--panel-theme);
		box-shadow: 0 0 50px 0 rgba(0,0,0,.3);
	}
	.cza-header-inner {
		display: flex;
		width: 100%;
		height: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 10px;
	}
	.cza-header-inner-logo {
		display: flex;
	}
	.cza-header-inner-items {
		display: flex;
	}
	.cza-header-inner-item {
		display: flex;
		align-items: center;
		padding: 0 20px;
		height: 100%;
		font-weight: 500;
		border-top: 4px solid transparent;
		border-bottom: 4px solid transparent;
		opacity: .5;
		transition: .2s;
	}
	.cza-header-inner-item.active {
		border-bottom: 4px solid var(--primary-theme);
		opacity: 1;
	}
	.cza-header-inner-item:hover,
	.cza-header-inner-item:focus {
		border-bottom: 4px solid var(--primary-theme);
	}
	.cza-header-inner-menu {
		background: none;
		border: none;
		border-left: 1px solid var(--panel-tertiary);
		outline: none;
		font-weight: 500;
		padding: 0 20px 0 30px;
		display: none;
	}
	@media (max-width: 900px) {
		.cza-header {
			height: 60px;
		}
		.cza-header-inner-items {
			position: fixed;
			top: 60px;
			right: 0;
			background: var(--panel-theme);
			height: calc(100vh - 60px); /* - Header */
			flex-direction: column;
			border-left: 1px solid var(--panel-tertiary);
			border-top: 1px solid var(--panel-tertiary);
			min-width: 256px;
			overflow: auto;
			transition: .3s;
			visibility: hidden;
			opacity: 0;
			transform: translateX(100%);
		}
		.cza-header-inner-items.active {
			visibility: visible;
			opacity: 1;
			transform: translateX(0);
		}
		.cza-header-inner-item {
			height: unset;
			padding: 20px 30px;
			justify-content: flex-end;
			border-top: none;
			border-bottom: 1px solid var(--panel-tertiary);
			border-right: 4px solid transparent;
		}
		.cza-header-inner-item.active {
			border-bottom: 1px solid var(--panel-tertiary);
			border-right: 4px solid var(--primary-theme);
			opacity: 1;
			padding-right: 50px;
		}
		.cza-header-inner-item:hover,
		.cza-header-inner-item:focus {
			border-bottom: 1px solid var(--panel-tertiary);
			border-right: 4px solid var(--primary-theme);
		}
		.cza-header-inner-menu {
			display: block;
		}
	}

	/* Main */
	.cza-main {
		padding-top: 80px; /* Header height */
		min-height: 600px;
	}
	@media (max-width: 900px) {
		.cza-main {
			padding-top: 60px; /* Header height */
		}
	}

	/* Footer */
	.cza-footer {
		--theme    : var(--footer-theme);
		--primary  : var(--footer-primary);
		--secondary: var(--footer-secondary);
		background: var(--theme);
		color: var(--primary);
        padding: 100px 0;
	}
</style>

<!--Header-->
<header class="cza-header">
	<nav class="cza-header-inner">
		<a class="cza-header-inner-logo {segment === undefined ? 'active' : ''}" href=".">
			<img src="assets/images/logo-dark.svg" alt="Centar za autizam Osijek." width="64">
		</a>
		<div class="flex-1"></div>
		<div class="cza-header-inner-items {menuExpanded ? 'active' : ''}">
			<a class="cza-header-inner-item {segment === undefined ? 'active' : ''}" href="." on:click={toggleMenu}>Početna</a>
			<a class="cza-header-inner-item {segment === 'o-nama' ? 'active' : ''}" href="o-nama" on:click={toggleMenu}>O nama</a>
			<a class="cza-header-inner-item {segment === 'programi' ? 'active' : ''}" href="programi" on:click={toggleMenu}>Programi</a>
			<a class="cza-header-inner-item {segment === 'projekti' ? 'active' : ''}" href="projekti" on:click={toggleMenu}>Projekti</a>
			<a class="cza-header-inner-item {segment === 'novosti' ? 'active' : ''}" href="novosti" on:click={toggleMenu}>Novosti</a>
			<a class="cza-header-inner-item {segment === 'galerija' ? 'active' : ''}" href="galerija" on:click={toggleMenu}>Galerija</a>
			<a class="cza-header-inner-item {segment === 'kontakt' ? 'active' : ''}" href="kontakt" on:click={toggleMenu}>Kontakt</a>
		</div>
		<button class="cza-header-inner-menu" on:click={toggleMenu}>Izbornik</button>
	</nav>
</header>

<!--Main-->
<main class="cza-main">
	<slot></slot>
</main>

<!--Footer-->
<footer class="cza-footer">
	<div class="grid">
		<div class="col-4 col-m-10 col-xs-12">
			<a class="iblock m-b-l" href=".">
				<img src="assets/images/logo-light.svg" alt="Centar za autizam Osijek." width="100">
				<h6 class="m-t-xs">Centar za<br>Autizam<br>Osijek</h6>
			</a>
		</div>
		<div class="col-4 col-m-5 col-s-10 col-xs-12">
			<h6 class="m-b-m">Kontakt</h6>
			<table class="m-b-l">
				<tbody>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Adresa:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary"><a href="https://www.google.hr/maps/place/Vinkova%C4%8Dka+cesta+3,+31000,+Osijek/@45.5535586,18.6744217,17z/data=!3m1!4b1!4m5!3m4!1s0x475ce7abf01bd97b:0x51e3a4f7db9facbc!8m2!3d45.5535586!4d18.6766104" target="_blank" rel="noopener">Vinkovačka 3, 31000, Osijek</a></td>
				</tr>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Email:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary"><a href="mailto:ured@centar-autizam-os.skole.hr">ured@centar-autizam-os.skole.hr</a></td>
				</tr>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Telefon:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary"><a href="tel:+38531202327">031/202-327</a></td>
				</tr>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Fax:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary"><a href="tel:+35831215610">031/215-610</a></td>
				</tr>
				</tbody>
			</table>
			<h6 class="m-b-m">Radno vrijeme</h6>
			<p class="m-b-l">07:00 - 15:00</p>
			<h6 class="m-b-m">Društvene mreže</h6>
			<p class="m-b-s fg-secondary"><a href="https://www.facebook.com/pages/category/Education/Centar-za-autizam-Osijek-2352622121663268/" target="_blank" rel="noopener">Facebook</a></p>
			<p class="m-b-s fg-secondary"><a href="https://www.instagram.com/centar_za_autizam/" target="_blank" rel="noopener">Instagram</a></p>
		</div>
		<div class="col-4 col-m-5 col-s-10 col-xs-12">
			<h6 class="m-b-m">Dokumentacija</h6>
			<p class="m-b-s fg-secondary"><a href="assets/docs/godisnji-plan-i-program-centra.pdf" download="godisnji-plan-i-program-centra.pdf">Godišnji plan i program Centra</a></p>
			<p class="m-b-s fg-secondary"><a href="assets/docs/kurikulum-centra.docx">Kurikulum Centra</a></p>
			<p class="m-b-s fg-secondary"><a href="assets/docs/pravilnik-o-nacinu-i-postupku-zaposljavanja.docx">Pravilnik o načinu i postupku zapošljavanja</a></p>
			<p class="m-b-s fg-secondary"><a href="assets/docs/pravilnik-o-sistematizaciji-radnih-mjesta.docx">Pravilnik o sistematizaciji radnih mjesta</a></p>
			<p class="m-b-s fg-secondary"><a href="assets/docs/statut-cza.docx">Statut CZA</a></p>
			<p class="m-b-s fg-secondary"><a href="assets/docs/zahtjev-za-pristup-informacijama.docx">Zahtjev za pristup informacijama <br class="show-xs"> (Obrazac br. 1)</a></p>
			<p class="m-b-s fg-secondary"><a href="assets/docs/zahtjev-za-dopunu-ili-ispravak-informacije.docx">Zahtjev za dopunu ili ispravak informacije <br class="show-xs"> (Obrazac br. 2)</a></p>
			<p class="m-b-l fg-secondary"><a href="assets/docs/zahtjev-za-ponovnu-uporabu-informacija.docx">Zahtjev za ponovnu uporabu informacija <br class="show-xs"> (Obrazac br. 3)</a></p>
			<h6 class="m-b-m">Broj posjetitelja</h6>
			<p class="m-b-l fg-secondary">Devet</p>
		</div>
	</div>
</footer>
