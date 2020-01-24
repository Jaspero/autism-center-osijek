<svelte:head>
	<title>CZA Osijek | Programi</title>
	<meta name="description" content="Saznajte više o osnovnim programima, terapijskim postupcima i izvannastavnim aktivnostima koje se provode u Centru" />
</svelte:head>

<script>
	import BlogNavigation from '../../shared/components/BlogNavigation.svelte';
	import BlogNavigationItem from '../../shared/components/BlogNavigationItem.svelte';
	import BlogArticle from '../../shared/components/BlogArticle.svelte';
	import Title from '../../shared/components/Title.svelte';
	import Subtitle from '../../shared/components/Subtitle.svelte';
	import Content from '../../shared/components/Content.svelte';
	import Loading from '../../shared/components/Loading.svelte';
	import {scrollToId} from '../../shared/utility/scroll-to-id';
	import {tick} from 'svelte';
	import {CACHE} from '../../shared/consts/cache.const';

	export let programsLoading = true;
	export let programs;

	if (process.browser) {

		if (CACHE.programs) {
			programs = CACHE.programs;
			programsLoading = false;

			tick()
				.then(() => {
					scrollToId();
				});
		} else {
			fetch(`programi.json`)
				.then(r => r.json())
				.then(data => {
					programs = data.programs;
					programsLoading = false;

					CACHE.programs = programs;

					return tick()
				})
				.then(() => {
					scrollToId();
				})
				.catch()
		}
	}
</script>

{#if programsLoading}
	<Loading/>
{:else}
	<section class="grid generic-section">
		<div class="col-3 col-m-4 col-s-10 col-xs-12">
			<BlogNavigation labelValue="Programi:">

				{#each programs as item}
					<BlogNavigationItem isTitle textValue={item.title} hrefPrefix="/programi/" hrefValue={item.title}></BlogNavigationItem>

					{#each item.segments as segment}
						<BlogNavigationItem textValue={segment.subTitle} hrefPrefix="/programi/" hrefValue={segment.subTitle}></BlogNavigationItem>
					{/each}
				{/each}
			</BlogNavigation>
		</div>
		<div class="col-6 col-m-8 col-s-10 col-xs-12">
			{#each programs as item}
				<Title id={item.title}>{item.title}</Title>

				{#each item.segments as segment}
					<BlogArticle>
						<Subtitle id={segment.subTitle}>{segment.subTitle}</Subtitle>
						<Content>{@html segment.content}</Content>
					</BlogArticle>
				{/each}
			{/each}
		</div>
		<div class="col-3 col-m-0"></div>
	</section>
{/if}
