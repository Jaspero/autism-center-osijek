<script>
    export let classValue;
    export let hrefValue;
    export let subtitleValue;
    export let titleValue;
    export let textValue;
    export let imageValue;
    export let relValue = '';
</script>

<style>
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-shadow: 0 0 0 1px var(--panel-tertiary);
        padding: 40px 0 20px;
        transition: .2s;
    }
    .card.card-has-image {
        padding: 40px 0 0;
    }
    .card:hover {
        background: white;
        box-shadow: 0 0 0 1px var(--panel-tertiary), 0 0 25px 0 rgba(0,0,0,.3);
    }
    .card:hover > .card-highlight {
        visibility: visible;
        opacity: 1;
    }
    .card-subtitle {
        font-size: .75em;
        text-transform: uppercase;
        letter-spacing: .1em;
        font-weight: normal;
        padding: 0 20px;
        margin: 0;
        opacity: .75;
    }
    .card-title {
        font-size: 1.5em;
        padding: 0 20px;
    }
    .card-text {
        padding: 0 20px;
    }
    .card-image {
        height: 200px;
        width: 100%;
        max-width: unset;
        object-fit: cover;
    }
    .card-highlight {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        background: var(--primary-theme);
        border-bottom-left-radius: 40px;
        transition: .2s;
        visibility: hidden;
        opacity: 0;
    }
</style>

<a rel={relValue} href="{hrefValue}" class="card {classValue} {imageValue ? 'card-has-image' : ''}">
    {#if subtitleValue}
    <h2 class="card-subtitle">{subtitleValue}</h2>
    {/if}
    {#if titleValue}
    <h1 class="card-title">{titleValue}</h1>
    {/if}
    {#if textValue}
    <p class="card-text">{textValue}</p>
    {/if}
    {#if imageValue}
    <img class="card-image" src={imageValue} alt="">
    {/if}
    <div class="card-highlight" aria-hidden="true"></div>
</a>
