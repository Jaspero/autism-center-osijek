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

<style>
    .gallery-backdrop {
        position: fixed;
        z-index: 11;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.75);
    }
    .gallery-wrapper {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .gallery-close {
        cursor: pointer;
        position: absolute;
        z-index: 2;
        top: 10px;
        right: 10px;
        width: 50px;
        height: 50px;
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        background: none;
        font-size: 50px;
        color: white;
        text-shadow: 0 0 4px black;
    }
    .gallery-img {
        width: 100vw;
        height: 100vh;
        object-fit: contain;
        padding-bottom: 40px;
    }
</style>

{#if open}
    <div class="gallery-backdrop" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
        <div class="gallery-wrapper" in:fade="{{duration: 600}}">
            <Carousel perPage={1} startIndex={selected}>
                {#each gallery as image}
                    <img src={image} alt="Gallery view" style="width: 100vw; height: 100vh; object-fit: contain;">
                {/each}
            </Carousel>
        </div>
        <button class="gallery-close" on:click={close}>×</button>
    </div>
{/if}
