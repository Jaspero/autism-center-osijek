<svelte:head>
    <title>CZA Osijek</title>
    <meta name="description" content="Centar za autizam Osijek, najmoderniji regionalni centar za djecu s poremećajem iz spektra autizma.Saznajte o programima, terapijskim postupcima i aktivnostima." />
</svelte:head>

<script>
    let loading = true;
    let documents = [];
    let hasMore;

    function loadMore() {

        let url = `dokumenti.json`;

        if (hasMore) {
            url += `?cursor=${hasMore}`;
        }

        fetch(url)
                .then(r => r.json())
                .then(data => {
                    hasMore = data.hasMore;
                    loading = false;
                });
    }

    if (process.browser) {
        loadMore();
    }
</script>

<body></body>
