<script>
    export let classValue;
    export let hrefValue;
    export let imageValue;
</script>

<style>
    .gallery-card {
        box-shadow: 0 0 0 1px var(--panel-tertiary);
        padding: 0;
    }
    .gallery-card-image {
        position: relative;
        padding-bottom: 66%;
    }
    .gallery-card-image-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>

<a href="{hrefValue}" class="gallery-card {classValue}">
    <div class="gallery-card-image">
        <img class="gallery-card-image-inner" src={imageValue} alt="">
    </div>
</a>
