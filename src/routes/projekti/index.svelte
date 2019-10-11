<script>
	import BlogNavigation from "../../shared/components/BlogNavigation.svelte";
	import BlogNavigationItem from "../../shared/components/BlogNavigationItem.svelte";
	import BlogArticle from "../../shared/components/BlogArticle.svelte";
	import Title from "../../shared/components/Title.svelte";
	import Content from "../../shared/components/Content.svelte";
	import Loading from "../../shared/components/Loading.svelte";
	import {scrollToId} from "../../shared/utility/scroll-to-id";
	import {tick} from "svelte";

	export let projectsLoading = true;
	export let projects;

	if (process.browser) {
		fetch(`projekti.json`)
			.then(r => r.json())
			.then(data => {
				projects = data.projects;
				projectsLoading = false;

				return tick()
			})
			.then(() => {
				scrollToId();
			})
	}
</script>

<svelte:head>
	<title>CZA Osijek | Projekti</title>
</svelte:head>

{#if projectsLoading}
	<Loading/>
{:else}
	<section class="grid generic-section">
	<div class="col-3 col-m-4 col-s-10 col-xs-12">
		<BlogNavigation labelValue="Projekti:">
			{#each projects as project}
				<BlogNavigationItem isTitle textValue={project.title} hrefPrefix="/projekti" hrefValue={project.title}></BlogNavigationItem>
			{/each}
		</BlogNavigation>
	</div>
	<div class="col-6 col-m-8 col-s-10 col-xs-12">
		{#each projects as project}
			<BlogArticle>
				<Title id={project.title}>{project.title}</Title>
				<Content>{@html project.content}</Content>
			</BlogArticle>
		{/each}
	</div>
	<div class="col-3 col-m-0"></div>
</section>
{/if}
