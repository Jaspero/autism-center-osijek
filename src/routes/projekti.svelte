<script context="module">
	export function preload({ params, query }) {
		return this.fetch('projekti.json')
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

    export function loadMore() {
        fetch(`projekti.json?cursor=${hasMore}`)
            .then(r => r.json())
            .then(data => {
                projects = [...projects, ...data.projects];
                hasMore = data.hasMore;
            });
    }
</script>

<svelte:head>
	<title>CZA Osijek | Projekti</title>
</svelte:head>

<section class="grid p-y-l">
	<div class="col-3 col-m-4 col-s-10 col-xs-12">
		<nav class="page-content" data-content="Projekti:">
		    {#each projects as project}
		        <span class:active="{activeProject.id === project.id}" on:click={() => activeProject = project}>
		            {project.name}
		        </span>
		    {/each}
		</nav>
	</div>
	{#if activeProject}
        <div class="col-6 col-m-8 col-s-10 col-xs-12">
            <div class="read-format">
                {@html activeProject.content}
            </div>
        </div>
        <div class="col-3 col-m-0"></div>
	{/if}
</section>
