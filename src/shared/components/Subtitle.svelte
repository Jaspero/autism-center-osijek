<style>
    .subtitle {
        font-size: 1.25em;
    }
</style>

<script>

    import {toSlug} from '../../shared/utility/to-slug';

    export let id = '';

    let slug;

    $: {
        slug = toSlug(id);
    }

</script>

<h2 id={slug} class="subtitle">
    <slot></slot>
</h2>
