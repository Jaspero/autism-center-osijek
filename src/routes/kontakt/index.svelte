<svelte:head>
	<title>CZA Osijek | Kontakt</title>
</svelte:head>

<script>
	import Title from '../../shared/components/Title.svelte';

	let name = '';
	let email = '';
	let message = '';

	function notifications(type, text) {
		const notificationEl = document.createElement('div');
		const innernEl = document.createElement('div');
		const notifMessage = document.createElement('p');
		const button = document.createElement('button');
		const textButton = document.createTextNode('OK');
		notificationEl.style.cssText =
			"position: fixed;" +
			"z-index: 99;" +
			"bottom: 0;" +
			"left: 0;" +
			"display: flex;" +
			"justify-content: center;" +
			"width: 100%;" +
			"padding: 10px;";
		innernEl.style.cssText =
			"display: flex;" +
			"align-items: center;" +
			"justify-content: space-between;" +
			"width: 100%;" +
			"max-width: 400px;" +
			"padding: 20px;" +
			"background: white;" +
			"border-radius: 4px;" +
			"box-shadow: 0 10px 25px 0 rgba(0,0,0,.3);";
		notifMessage.style.cssText =
			"margin: 0 10px 0 0;";
		button.classList.add(`btn`);
		button.classList.add(`notification-inner-${type}`);
		notifMessage.innerHTML = text;
		button.appendChild(textButton);
		notificationEl.appendChild(innernEl);
		innernEl.appendChild(notifMessage);
		innernEl.appendChild(button);
		document.body.appendChild(notificationEl);
		button.addEventListener('click', () => {
			notificationEl.remove()
		})
	}

	function sendForm(event) {
		const formEl = document.querySelector('#form');
		const button = document.querySelector('#submit');
		event.preventDefault();
		button.classList.add('loading');

		if (formEl.checkValidity()) {
			fetch(`/kontakt.json`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify({name, email, message})
			})
					.then(() => {
						button.classList.remove('loading');
						notifications('success', 'Poruka poslana. Hvala Vam što ste nam se obratili.');
						formEl.reset()
					})
					.catch(error => {
						console.error(error);
						button.classList.remove('loading');
						notifications('error', 'Došlo je do greške. Molimo Vas pokušajte kasnije.');
					})
		}
	}
</script>

<style>
	.cza-contact-item {
		margin: 0;
		padding: 0 .5em .5em 0;
	}
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
		box-shadow: 0 0 0 1px var(--panel-tertiary);
		color: var(--panel-primary);
		background: none;
		padding: 10px;
		transition: .2s;
	}
	input.cza-form-input {
		max-width: 400px;
	}
	textarea.cza-form-input {
		resize: vertical;
	}
	.cza-form-input:hover {
		background: var(--panel-theme);
	}
	.cza-form-input:focus {
		background: var(--panel-theme);
		box-shadow: 0 0 0 1px var(--panel-tertiary), 0 0 25px 0 rgba(0,0,0,.3);
	}
</style>

<section class="grid generic-section">
	<div class="col-6 col-s-12">
		<Title>Kontaktni podaci</Title>
		<table>
			<tbody>
			<tr>
				<td class="cza-contact-item">Adresa:</td>
				<td class="cza-contact-item"><a href="https://www.google.hr/maps/place/Vinkova%C4%8Dka+cesta+3,+31000,+Osijek/@45.5535586,18.6744217,17z/data=!3m1!4b1!4m5!3m4!1s0x475ce7abf01bd97b:0x51e3a4f7db9facbc!8m2!3d45.5535586!4d18.6766104" target="_blank" rel="noopener">Vinkovačka 3, 31000, Osijek</a></td>
			</tr>
			<tr>
				<td class="cza-contact-item">Email:</td>
				<td class="cza-contact-item"><a href="mailto:ured@centar-autizam-os.skole.hr">ured@centar-autizam-os.skole.hr</a></td>
			</tr>
			<tr>
				<td class="cza-contact-item">Telefon:</td>
				<td class="cza-contact-item"><a href="tel:+38531202327">031/202-327</a></td>
			</tr>
			<tr>
				<td class="cza-contact-item">Fax:</td>
				<td class="cza-contact-item"><a href="tel:+35831215610">031/215-610</a></td>
			</tr>
			<tr>
				<td class="cza-contact-item">Radno vrijeme:</td>
				<td class="cza-contact-item">07:00 - 15:00</td>
			</tr>
			<tr>
				<td class="cza-contact-item">Facebook:</td>
				<td class="cza-contact-item"><a href="https://www.facebook.com/pages/category/Education/Centar-za-autizam-Osijek-2352622121663268/" target="_blank" rel="noopener">Centar za autizam Osijek</a></td>
			</tr>
			<tr>
				<td class="cza-contact-item">Instagram:</td>
				<td class="cza-contact-item"><a href="https://www.instagram.com/centar_za_autizam/" target="_blank" rel="noopener">centar_za_autizam</a></td>
			</tr>
			</tbody>
		</table>
	</div>
	<div class="col-6 col-s-12">
		<Title>Kontaktni obrazac</Title>
		<form id="form">
			<label class="cza-form-label">
				<span class="cza-form-placeholder">Vaše ime i prezime:</span>
				<input class="cza-form-input" bind:value={name}>
			</label>
			<label class="cza-form-label">
				<span class="cza-form-placeholder">Vaša email adresa:</span>
				<input class="cza-form-input" type="email"  bind:value={email}>
			</label>
			<label class="cza-form-label">
				<span class="cza-form-placeholder">Vaša poruka ili upit:</span>
				<textarea class="cza-form-input" rows="4" bind:value={message}></textarea>
			</label>
			<button type="submit" id="submit" class="btn" on:click={sendForm}>Pošalji upit</button>
		</form>
	</div>
</section>
