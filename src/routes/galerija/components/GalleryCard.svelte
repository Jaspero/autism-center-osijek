<script>
    import { createEventDispatcher } from 'svelte';

    export let classValue;
    export let imageValue;

    const dispatch = createEventDispatcher();

    const select = () => dispatch('selected');
</script>

<style>
    .gallery-card {
        box-shadow: 0 0 0 1px var(--panel-tertiary);
        padding: 0;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .gallery-card-image {
        position: relative;
        padding-bottom: 66%;
        overflow: hidden;
    }
    .gallery-card-image:hover > .gallery-card-image-inner {
        opacity: .8;
    }
    .gallery-card-image-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: .2s;
    }
</style>

<button class="gallery-card {classValue}" on:click={select}>
    <div class="gallery-card-image">
        <img class="gallery-card-image-inner" src={imageValue} alt="">
    </div>
</button>
