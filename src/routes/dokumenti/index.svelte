<svelte:head>
    <title>CZA Osijek | Dokumenti</title>
    <meta name="description" content="Centar za autizam Osijek, najmoderniji regionalni centar za djecu s poremećajem iz spektra autizma.Saznajte o programima, terapijskim postupcima i aktivnostima." />
</svelte:head>

<script>
    import {scrollToId} from '../../shared/utility/scroll-to-id';
    import {tick} from 'svelte';
    import {CACHE} from '../../shared/consts/cache.const';

    export let documentsLoading = true;
    export let documents;

    if (process.browser) {

        if (CACHE.documents) {
            documents = CACHE.documents;
            documentsLoading = false;

            tick()
                    .then(() => {
                        scrollToId();
                    });
        } else {
            fetch(`dokumenti.json`)
                    .then(r => r.json())
                    .then(data => {
                        documents = data.documents;
                        documentsLoading = false;

                        CACHE.documents = documents;

                        return tick()
                    })
                    .catch()
        }
    }
</script>

<body>
    {#each documents as document}
        <p>{document.title}</p>
    {/each}
</body>
