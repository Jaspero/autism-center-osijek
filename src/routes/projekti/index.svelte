<script context="module">
	export function preload({params, query}) {
		return this.fetch('projekti.json')
				.then(r => r.json());
	}
</script>

<script>
	import BlogNavigation from "../../shared/components/BlogNavigation.svelte";
	import BlogNavigationItem from "../../shared/components/BlogNavigationItem.svelte";
	import BlogArticle from "../../shared/components/BlogArticle.svelte";
	import Title from "../../shared/components/Title.svelte";
	import Content from "../../shared/components/Content.svelte";
	export let projects;
</script>

<svelte:head>
	<title>CZA Osijek | Projekti</title>
</svelte:head>

<section class="grid generic-section">
	<div class="col-3 col-m-4 col-s-10 col-xs-12">
		<BlogNavigation labelValue="Projekti:">
			{#each projects as project}
				<BlogNavigationItem isTitle textValue={project.title} hrefValue={"/projekti"}></BlogNavigationItem>
			{/each}
		</BlogNavigation>
	</div>
	<div class="col-6 col-m-8 col-s-10 col-xs-12">
		{#each projects as project}
			<BlogArticle>
				<Title>{project.title}</Title>
				<Content>{@html project.content}</Content>
			</BlogArticle>
		{/each}
	</div>
	<div class="col-3 col-m-0"></div>
</section>
