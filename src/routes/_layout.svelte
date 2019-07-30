<script>
	export let segment;

	let menuExpanded = false;

	function toggleMenu() {
		menuExpanded = !menuExpanded;
		console.log(menuExpanded);
	}
</script>

<style>
	.cza-header {
		position: fixed;
		z-index: 2;
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
	.cza-main {
		padding-top: 80px; /* Header height */
		min-height: 600px;
	}
	.cza-footer {
		--theme    : var(--footer-theme);
		--primary  : var(--footer-primary);
		--secondary: var(--footer-secondary);
		background: var(--theme);
		color: var(--primary);
        padding: 100px 0;
	}
	@media (max-width: 900px) {
		.cza-header {
			height: 60px;
		}
		.cza-main {
			padding-top: 60px; /* Header height */
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
</style>

<header class="cza-header">
	<nav class="cza-header-inner">
		<a class="cza-header-inner-logo {segment === undefined ? 'active' : ''}" href="."><img src="assets/logo-dark.svg" alt="Centar za autizam Osijek." width="64"></a>
		<div class="flex-1"></div>
		<div class="cza-header-inner-items {menuExpanded ? 'active' : ''}">
			<a class="cza-header-inner-item {segment === 'o-nama' ? 'active' : ''}" href="o-nama">O nama</a>
			<a class="cza-header-inner-item {segment === 'programi' ? 'active' : ''}" href="programi">Programi</a>
			<a class="cza-header-inner-item {segment === 'projekti' ? 'active' : ''}" href="projekti">Projekti</a>
			<a class="cza-header-inner-item {segment === 'novosti' ? 'active' : ''}" href="novosti">Novosti</a>
			<a class="cza-header-inner-item {segment === 'galerija' ? 'active' : ''}" href="galerija">Galerija</a>
			<a class="cza-header-inner-item {segment === 'kontakt' ? 'active' : ''}" href="kontakt">Kontakt</a>
		</div>
		<button class="cza-header-inner-menu" on:click={toggleMenu}>Sadržaj</button>
	</nav>
</header>

<main class="cza-main">
	<slot></slot>
</main>

<footer class="cza-footer">
	<div class="grid">
		<div class="col-4 col-m-10 col-xs-12">
			<a class="iblock m-b-l" href=".">
				<img src="assets/logo-light.svg" alt="Centar za autizam Osijek." width="100">
				<h6 class="m-t-xs">Centar za<br>Autizam<br>Osijek</h6>
			</a>
		</div>
		<div class="col-4 col-m-5 col-s-10 col-xs-12">
			<h6 class="m-b-s">Kontakt</h6>
			<table class="m-b-l">
				<tbody>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Adresa:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Vinkovačka 3, 31000, Osijek</td>
				</tr>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Email:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">ured@centar-autizam-os.skole.hr</td>
				</tr>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Telefon:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">031/202-327</td>
				</tr>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Fax:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">031/215-610</td>
				</tr>
				</tbody>
			</table>
			<h6 class="m-b-s">Radno vrijeme</h6>
			<table class="m-b-l">
				<tbody>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Lorem:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Lorem</td>
				</tr>
				<tr>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Lorem:</td>
					<td class="p-r-s p-t-0 p-b-s fg-secondary">Lorem</td>
				</tr>
				</tbody>
			</table>
			<h6 class="m-b-s">Društvene mreže</h6>
			<p class="m-b-s fg-secondary"><a href=".">Facebook</a></p>
			<p class="m-b-s fg-secondary"><a href=".">Instagram</a></p>
			<p class="m-b-l fg-secondary"><a href=".">Twitter</a></p>
		</div>
		<div class="col-4 col-m-5 col-s-10 col-xs-12">
			<h6 class="m-b-s">Dokumentacija</h6>
			<p class="m-b-s fg-secondary"><a href=".">Godišnji plan i program Centra</a></p>
			<p class="m-b-s fg-secondary"><a href=".">Kurikulum Centra</a></p>
			<p class="m-b-s fg-secondary"><a href=".">Pravilnik o načinu i postupku zapošljavanja</a></p>
			<p class="m-b-s fg-secondary"><a href=".">Pravilnik o sistematizaciji radnih mjesta</a></p>
			<p class="m-b-s fg-secondary"><a href=".">Statut CZA</a></p>
			<p class="m-b-s fg-secondary"><a href=".">Zahtjev za pristup informacijama (Obrazac br. 1)</a></p>
			<p class="m-b-s fg-secondary"><a href=".">Zahtjev za dopunu ili ispravak informacije (Obrazac br. 2)</a></p>
			<p class="m-b-l fg-secondary"><a href=".">Zahtjev za ponovnu uporabu informacija (Obrazac br. 3)</a></p>
			<h6 class="m-b-s">Broj posjetitelja</h6>
			<p class="m-b-l fg-secondary">Devet</p>
		</div>
	</div>
</footer>