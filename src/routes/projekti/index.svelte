<script context="module">
	export function preload({params, query}) {
		return this.fetch('projekti.json')
				.then(r => r.json());
	}
</script>

<script>
	import BlogNavigation from "../../shared/components/BlogNavigation.svelte";
	export let projects;
</script>

<svelte:head>
	<title>CZA Osijek | Projekti</title>
</svelte:head>

<section class="grid p-y-l">
	<div class="col-3 col-m-4 col-s-10 col-xs-12">
		<BlogNavigation>
			<span slot="mobile-label">Projekti:</span>
			<span slot="title">This is a title</span>
			<div slot="items" >
				{#each projects as project}
					<a href=".">{project.name}</a>
				{/each}
			</div>
		</BlogNavigation>
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
