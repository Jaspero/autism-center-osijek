<script>
    import { createEventDispatcher } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Carousel from '../../../shared/components/Carousel.svelte';

    export let gallery = [];
    export let selected = null;
    export let open = false;

    const dispatch = createEventDispatcher();

    function close() {
        open = false;
        dispatch('close');
    }
</script>

{#if open}
    <div class="gallery-backdrop" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
        <div class="gallery-wrapper relative ai-center jc-center" in:fly="{{y: 200, duration: 600}}">
            <div class="gallery-view flex ai-center jc-center">
                <Carousel perPage={1} startIndex={selected} class="relative">
                    <div>
                        <img src="assets/icons/gallery-arrow-left.svg" alt="">
                    </div>
                    {#each gallery as image}
                        <div class="slide-content ta-center">
                            <img src={image} alt="Gallery view" class="obj-cover gallery-image">
                        </div>
                    {/each}
                    <div>
                        <img src="assets/icons/gallery-arrow-right.svg" alt="">
                    </div>
                </Carousel>
            </div>
            <div class="close-gallery">
                <img src="assets/icons/cancel.svg" alt="Close gallery" on:click={close}>
            </div>
        </div>
    </div>
{/if}
