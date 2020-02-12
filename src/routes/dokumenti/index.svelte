<svelte:head>
    <title>CZA Osijek | Dokumenti</title>
    <meta name="description" content="Centar za autizam Osijek, najmoderniji regionalni centar za djecu s poremećajem iz spektra autizma. Saznajte o programima, terapijskim postupcima i aktivnostima." />
</svelte:head>

<script>
    import {tick} from 'svelte';
    import {CACHE} from '../../shared/consts/cache.const';

    import Title from '../../shared/components/Title.svelte';
    import Loading from "../../shared/components/Loading.svelte";

    export let documentsLoading = true;
    export let documents;

    if (process.browser) {

        if (CACHE.documents) {
            documents = CACHE.documents;
            documentsLoading = false;
        } else {
            fetch(`/dokumenti.json`)
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    documents = data;
                    documentsLoading = false;

                    CACHE.documents = documents;

                    return tick()
                })
                .catch()
        }
    }
</script>

<style>
    a {
        color: var(--primary-theme);
        text-decoration: underline;
    }
</style>

<section class="grid generic-section">
    <div class="col-6 col-m-8 col-s-10 col-xs-12">
        <Title>Dokumenti</Title>
        {#if documentsLoading}
            <Loading/>
        {:else}
        <ul>
            {#each documents as item}
                <li><a href="{item.file}" download>{item.message}</a></li>
            {/each}
        </ul>
        {/if}
    </div>
</section>
