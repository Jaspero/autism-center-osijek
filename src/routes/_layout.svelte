<script>
	export let segment;

	let menuExpanded = false;
	let count = 0;

    if (process.browser) {
        fetch(`index.json`)
            .then(r => r.json())
            .then(data => {
                count = data.count;
            });
    }


    function toggleMenu() {
		const header = document.querySelector('.cza-header');
		menuExpanded = !menuExpanded;

		// Click outside closes dialog
		window.addEventListener('click', (event => {
			if (!header.contains(event.target)) {
				menuExpanded = false;
			}
		}))
	}
</script>

<style>
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
		opacity: .75;
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
		min-height: calc(100vh - 240px);
	}
	.cza-footer {
		padding: 80px 0;
		background: var(--footer-theme);
		color: var(--footer-primary);
	}
	.cza-footer-inner {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 10px;
	}
	.cza-footer-inner-logo {
		width: 100%;
		margin-bottom: 40px;
	}
	.cza-footer-inner-logo-image {
		margin-bottom: 1em;
	}
	.cza-footer-inner-logo-text {
		font-size: 1em;
	}
	.cza-footer-inner-column {
		width: 50%;
		margin-bottom: 40px;
	}
	.cza-footer-inner-column-title {
		font-size: 1em;
		text-transform: uppercase;
		letter-spacing: .1em;
		opacity: .5;
		margin-bottom: 1.5em;
	}
	.cza-footer-inner-column-item {
		margin: 0;
		padding: 0 0 .5em .5em;
	}
	.cza-fab {
		position: fixed;
		z-index: 4;
		bottom: 10px;
		right: 10px;
		background: linear-gradient(to bottom right, #7EA1E6, #2E6BE6);
		padding: 1em;
		border-radius: 50%;
		box-shadow: 12px 12px 25px rgba(0,0,0,0.2);
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
		.cza-main {
			padding-top: 60px; /* Header height */
			min-height: calc(100vh - 240px);
		}
		.cza-footer-inner-column {
			width: 100%;
		}
	}
</style>

<!--Header-->
<header class="cza-header">
	<nav class="cza-header-inner">
		<a class="cza-header-inner-logo" href=".">
			<img src="assets/images/logo-dark.svg" alt="Centar za autizam Osijek." width="64">
		</a>
		<!--Divider-->
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
	<div class="cza-footer-inner">
		<a class="cza-footer-inner-logo" href=".">
			<img class="cza-footer-inner-logo-image" src="assets/images/logo-light.svg" alt="Centar za autizam Osijek." width="100">
			<p class="cza-footer-inner-logo-text"><b>Centar za autizam Osijek</b></p>
		</a>

		<div class="cza-footer-inner-column">
			<h1 class="cza-footer-inner-column-title">Kontakt</h1>
			<table>
				<tbody>
				<tr>
					<td class="cza-footer-inner-column-item">Adresa:</td>
					<td class="cza-footer-inner-column-item"><a href="https://www.google.hr/maps/place/Vinkova%C4%8Dka+cesta+3,+31000,+Osijek/@45.5535586,18.6744217,17z/data=!3m1!4b1!4m5!3m4!1s0x475ce7abf01bd97b:0x51e3a4f7db9facbc!8m2!3d45.5535586!4d18.6766104" target="_blank" rel="noopener">Vinkovačka 3, 31000, Osijek</a></td>
				</tr>
				<tr>
					<td class="cza-footer-inner-column-item">Email:</td>
					<td class="cza-footer-inner-column-item"><a href="mailto:ured@centar-autizam-os.skole.hr">ured@centar-autizam-os.skole.hr</a></td>
				</tr>
				<tr>
					<td class="cza-footer-inner-column-item">Telefon:</td>
					<td class="cza-footer-inner-column-item"><a href="tel:+38531201850">031/201-850</a></td>
				</tr>
				<tr>
					<td class="cza-footer-inner-column-item">Fax:</td>
					<td class="cza-footer-inner-column-item"><a href="tel:+35831215610">031/215-610</a></td>
				</tr>
				<tr>
					<td class="cza-footer-inner-column-item">Radno vrijeme:</td>
					<td class="cza-footer-inner-column-item">07:00 - 15:00</td>
				</tr>
				<tr>
					<td class="cza-footer-inner-column-item">Facebook:</td>
					<td class="cza-footer-inner-column-item"><a href="https://www.facebook.com/pages/category/Education/Centar-za-autizam-Osijek-2352622121663268/" target="_blank" rel="noopener">Centar za autizam Osijek</a></td>
				</tr>
				<tr>
					<td class="cza-footer-inner-column-item">Instagram:</td>
					<td class="cza-footer-inner-column-item"><a href="https://www.instagram.com/centar_za_autizam/" target="_blank" rel="noopener">centar_za_autizam</a></td>
				</tr>
				</tbody>
			</table>
		</div>

		<div class="cza-footer-inner-column">
			<h1 class="cza-footer-inner-column-title">Dokumentacija</h1>
			<p class="cza-footer-inner-column-item">Sve dokumente možete pronaći na sljedećoj stranici: <a href="dokumenti"><u>dokumenti</u></a></p>
		</div>

		<div class="cza-footer-inner-column">
			<h1 class="cza-footer-inner-column-title">Izradio</h1>
			<p class="cza-footer-inner-column-item"><a href="https://jaspero.co/" target="_blank" rel="noopener">Jaspero</a></p>
		</div>

        <div class="cza-footer-inner-column">
            <h1 class="cza-footer-inner-column-title">Broj posjetitelja</h1>
            <p class="cza-footer-inner-column-item">{count}</p>
        </div>
	</div>
</footer>

<a class="cza-fab" href="/360/index.html" rel="nofollow" target="_blank" title="Virtualna šetnja." aria-label="Virtualna šetnja.">
	<img src="assets/images/360.svg" alt="Virtualna šetnja.">
</a>
