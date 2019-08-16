<svelte:head>
	<title>CZA Osijek | Kontakt</title>
</svelte:head>

<script>
	import Title from '../../shared/components/Title.svelte';
</script>

<style>
	.cza-form-label {
		display: block;
		margin-bottom: 1.5em;
	}
	.cza-form-input {
		display: block;
		width: 100%;
		font-size: inherit;
		outline: none;
		border: none;
		box-shadow: 0 0 0 1px var(--tertiary);
		color: var(--panel-primary);
		background: none;
		padding: 10px;
		transition: .2s;
	}
	input.cza-form-input {
		max-width: 400px;
	}
	.cza-form-input:hover {
		background: var(--panel-theme);
	}
	.cza-form-input:focus {
		background: var(--panel-theme);
		box-shadow: 0 0 0 1px var(--tertiary), 0 0 25px 0 rgba(0,0,0,.3);
	}
</style>

<section class="grid p-y-xl">
	<div class="col-6 col-s-12">
		<Title>Kontaktni podaci</Title>
		<table class="m-b-l">
			<tbody>
			<tr>
				<td class="p-r-s p-t-0 p-b-s fg-secondary">Adresa:</td>
				<td class="p-r-s p-t-0 p-b-s"><a class="td-underline" href="https://www.google.hr/maps/place/Vinkova%C4%8Dka+cesta+3,+31000,+Osijek/@45.5535586,18.6744217,17z/data=!3m1!4b1!4m5!3m4!1s0x475ce7abf01bd97b:0x51e3a4f7db9facbc!8m2!3d45.5535586!4d18.6766104" target="_blank" rel="noopener">Vinkovačka 3, 31000, Osijek</a></td>
			</tr>
			<tr>
				<td class="p-r-s p-t-0 p-b-s fg-secondary">Email:</td>
				<td class="p-r-s p-t-0 p-b-s"><a class="td-underline" href="mailto:ured@centar-autizam-os.skole.hr">ured@centar-autizam-os.skole.hr</a></td>
			</tr>
			<tr>
				<td class="p-r-s p-t-0 p-b-s fg-secondary">Telefon:</td>
				<td class="p-r-s p-t-0 p-b-s"><a class="td-underline" href="tel:+38531202327">031/202-327</a></td>
			</tr>
			<tr>
				<td class="p-r-s p-t-0 p-b-s fg-secondary">Fax:</td>
				<td class="p-r-s p-t-0 p-b-s"><a class="td-underline" href="tel:+35831215610">031/215-610</a></td>
			</tr>
            <tr>
                <td class="p-r-s p-t-0 p-b-s fg-secondary">Radno vrijeme:</td>
                <td class="p-r-s p-t-0 p-b-s"><span>07:00 - 15:00</span></td>
            </tr>
            <tr>
                <td class="p-r-s p-t-0 p-b-s fg-secondary">Društvene mreže:</td>
                <td class="p-r-s p-t-0 p-b-s">
                    <a class="td-underline" href="https://www.facebook.com/pages/category/Education/Centar-za-autizam-Osijek-2352622121663268/" target="_blank" rel="noopener">Facebook</a>
                    <br>
                    <a class="td-underline" href="https://www.instagram.com/centar_za_autizam/" target="_blank" rel="noopener">Instagram</a>
                </td>
            </tr>
			</tbody>
		</table>
	</div>
	<div class="col-6 col-s-12">
		<Title>Kontaktni obrazac</Title>
		<form class="cza-form">
			<label class="cza-form-label">
				<span class="cza-form-placeholder">Vaše ime i prezime:</span>
				<input class="cza-form-input">
			</label>
			<label class="cza-form-label">
				<span class="cza-form-placeholder">Vaša email adresa:</span>
				<input class="cza-form-input" type="email">
			</label>
			<label class="cza-form-label">
				<span class="cza-form-placeholder">Vaša poruka ili upit:</span>
				<textarea class="cza-form-input" rows="4"></textarea>
			</label>
			<button class="btn">Pošalji upit</button>
		</form>
	</div>
</section>
