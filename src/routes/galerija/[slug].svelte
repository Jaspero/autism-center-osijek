<script context="module">
    export async function preload({params}) {
        const res = await this.fetch(`galerija/${params.slug}.json`);
        const data = await res.json();
        if (res.status === 200) {
            return { item: data };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<svelte:head>
    <title>CZA Osijek | {item.title}</title>
</svelte:head>

<script>
    import GalleryCard from "./components/GalleryCard.svelte";
    import Title from "../../shared/components/Title.svelte";
    import BlogArticle from "../../shared/components/BlogArticle.svelte";

    export let item;

</script>

<section class="grid generic-section">
    <div class="col-6 col-m-8 col-s-10 col-xs-12">
        <BlogArticle>
            <Title>{item.title}</Title>
            <div class="grid">
                {#each item.images as image}
                    <GalleryCard
                        classValue="col-4 col-xs-6"
                        imageValue={image}>
                    </GalleryCard>
                {/each}
            </div>
        </BlogArticle>
    </div>
</section>
