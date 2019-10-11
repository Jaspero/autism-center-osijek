<svelte:head>
	<title>CZA Osijek | Programi</title>
</svelte:head>

<script>
	import BlogNavigation from "../../shared/components/BlogNavigation.svelte";
	import BlogNavigationItem from "../../shared/components/BlogNavigationItem.svelte";
	import BlogArticle from "../../shared/components/BlogArticle.svelte";
	import Title from "../../shared/components/Title.svelte";
	import Subtitle from "../../shared/components/Subtitle.svelte";
	import Content from "../../shared/components/Content.svelte";
	import Loading from "../../shared/components/Loading.svelte";

	export let programsLoading = true;
	export let programs;

	if (process.browser) {
		fetch(`programi.json`)
			.then(r => r.json())
			.then(data => {
				programs = data.programs;
				programsLoading = false;
			});
	}
</script>

{#if programsLoading}
	<Loading/>
{:else}
	<section class="grid generic-section">
		<div class="col-3 col-m-4 col-s-10 col-xs-12">
			<BlogNavigation labelValue="Programi:">
				<BlogNavigationItem isTitle textValue={"OsnovniProgrami"} hrefValue={"/programi"}></BlogNavigationItem>
				<BlogNavigationItem textValue={"VrtićkiProgrami"} hrefValue={"/programi"}></BlogNavigationItem>
				<BlogNavigationItem textValue={"PosebniProgram"} hrefValue={"/programi"}></BlogNavigationItem>
			</BlogNavigation>
		</div>
		<div class="col-6 col-m-8 col-s-10 col-xs-12">
			{#each programs as item}
				<Title>{item.title}</Title>

				{#each item.segments as segment}
					<BlogArticle>
						<Subtitle>{segment.subTitle}</Subtitle>
						<Content>{@html segment.content}</Content>
					</BlogArticle>
				{/each}
			{/each}
		</div>
		<div class="col-3 col-m-0"></div>
	</section>
{/if}
