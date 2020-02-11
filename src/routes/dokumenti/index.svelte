<svelte:head>
    <title>CZA Osijek | Dokumenti</title>
    <meta name="description" content="Centar za autizam Osijek, najmoderniji regionalni centar za djecu s poremećajem iz spektra autizma.Saznajte o programima, terapijskim postupcima i aktivnostima." />
</svelte:head>

<script>
    import {tick} from 'svelte';
    import {CACHE} from '../../shared/consts/cache.const';

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
                    documents = data;
                    documentsLoading = false;

                    CACHE.documents = documents;

                    return tick()
                })
                .catch()
        }
    }
</script>

{#each documents as document}
    <p>{document.name}</p>
{/each}
