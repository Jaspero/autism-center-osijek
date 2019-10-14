<div class="carousel">
    <div class="slides" bind:this={siema}>
        <slot></slot>
    </div>
    <ul class="bullets">
        {#each pips as pip, i}
            <li class="bullet" on:click={() => go(i)}></li>
        {/each}
    </ul>
</div>

<style>
    .carousel {
        position: relative;
        width: 100%;
    }
    .bullets {
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
    }
    .bullet {
        margin: 6px;
        border-radius: 100%;
        background-color: rgba(255,255,255,0.75);
        box-shadow: 0 0 4px black;
        height: 8px;
        width: 8px;
    }
</style>

<script>
    import Siema from 'siema'
    import { onMount } from 'svelte'

    export let perPage = 3;
    export let loop = true;
    export let autoplay = 0;
    export let startIndex = 0;

    let siema;
    let controller;
    let timer;

    $: pips = controller ? controller.innerElements : [];

    onMount(() => {
        controller = new Siema({
            selector: siema,
            startIndex,
            perPage,
            loop
        });

        if (autoplay) {
            timer = setInterval(right, autoplay);
        }

        return () => {
            if (timer) {
                clearTimeout(timer)
            }

            try {
                controller.destroy()
            } catch (e) {}
        }
    });

    function left() {
        controller.prev()
    }

    function right() {
        controller.next()
    }

    function go(index) {
        controller.goTo(index)
    }
</script>
