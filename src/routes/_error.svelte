<svelte:head>
	<title>{status}</title>
</svelte:head>

<script>
	import Content from "../shared/components/Content.svelte";

	export let status;
	export let error;
</script>

<section class="grid generic-section">
	<div class="col-6 col-m-8 col-s-10 col-xs-12">
		<Content>
			<p>Došlo je do greške.</p>
			<p>Koristite neke od sljedećih poveznica za navigaciju:</p>
			<ul>
				<li><a href=".">Početna</a></li>
				<li><a href="o-nama">O nama</a></li>
				<li><a href="programi">Programi</a></li>
				<li><a href="projekti">Projekti</a></li>
				<li><a href="novosti">Novosti</a></li>
				<li><a href="galerija">Galerija</a></li>
				<li><a href="dokumenti">Dokumenti</a></li>
				<li><a href="kontakt">Kontakt</a></li>
			</ul>
		</Content>
	</div>
</section>
