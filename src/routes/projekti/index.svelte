<script context="module">
	export function preload({ params, query }) {
		return this.fetch('index.json')
				.then(r => r.json());
	}
</script>

<script>
	export let hasMore;
	export let projects;
	export let activeProject;

	if (projects && projects.length) {
		activeProject = projects[0];
	}
</script>

<svelte:head>
	<title>CZA Osijek | Projekti</title>
</svelte:head>

<section class="grid p-y-l">
	<div class="col-3 col-m-4 col-s-10 col-xs-12">
		<nav class="page-content" data-content="Projekti:">
			{#each projects as project}
				<a href="..">
					{project.name}
				</a>
			{/each}
		</nav>
	</div>
	<div class="col-6 col-m-8 col-s-10 col-xs-12">
		<div class="read-format">
			{#each projects as project}
				<article class="m-b-xl">
					{@html project.content}
				</article>
			{/each}
		</div>
	</div>
	<div class="col-3 col-m-0"></div>
</section>
