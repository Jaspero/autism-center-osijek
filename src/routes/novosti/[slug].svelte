<script context="module">
    export async function preload({params}) {
        const res = await this.fetch(`novosti/${params.slug}.json`);
        const data = await res.json();
        if (res.status === 200) {
            return {item: data};
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<svelte:head>
    <title>CZA Osijek | {item.title}</title>
</svelte:head>

<script>
    export let item;
</script>

{@html item.content}