<script>
    export let cards = 2;
    export let cardsItt = [];
    export let classValue;
    export let hasSubtitle;
    export let hasTitle;
    export let hasContent;
    export let hasImage;

    for(let i = 0; i < cards; i++) {
        cardsItt.push(i);
    }

</script>

<style>
    .card-placeholder {
        display: flex;
        flex-wrap: wrap;
    }
    .card-placeholder-item {
        padding: 40px 20px 20px;
        box-shadow: 0 0 0 1px var(--panel-tertiary);
    }
    .card-placeholder-item-subtitle {
        height: 12px;
        width: 30%;
        background: #ddd;
    }
    .card-placeholder-item-title {
        height: 24px;
        width: 80%;
        background: #ccc;
    }
    .card-placeholder-item-content {
        height: 12px;
        background: #ddd;
        margin-bottom: .5em;
    }
    .card-placeholder-item-content-first {
        width: 95%;
    }
    .card-placeholder-item-content-second {
        width: 100%;
    }
    .card-placeholder-item-content-third {
        width: 60%;
    }
    .card-placeholder-item-image {
        object-fit: cover;
        height: 150px;
        max-width: unset;
        width: calc(100% + 40px);
        margin: 20px -20px -20px;
        background: #ddd;
    }
</style>

<div class="card-placeholder" aria-label="Učitavanje sadržaja.">
    {#each cardsItt as cards}
        <div class="card-placeholder-item {classValue}">
                {#if hasSubtitle}
                    <p class="card-placeholder-item-subtitle"></p>
                {/if}
                {#if hasTitle}
                    <p class="card-placeholder-item-title"></p>
                {/if}
                {#if hasContent}
                    <p class="card-placeholder-item-content card-placeholder-item-content-first"></p>
                    <p class="card-placeholder-item-content card-placeholder-item-content-second"></p>
                    <p class="card-placeholder-item-content card-placeholder-item-content-third"></p>
                {/if}
                {#if hasImage}
                    <img class="card-placeholder-item-image" src="assets/images/placeholder.svg" alt="">
                {/if}
            </div>
    {/each}
</div>
