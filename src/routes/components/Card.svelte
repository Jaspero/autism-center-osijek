<script>
    let className;
    let hrefValue;
    export {
        className as class,
        hrefValue as href
    };
</script>

<style>
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-shadow: 0 0 0 1px var(--tertiary);
        padding: 0;
        transition: .2s;
    }
    .card:hover {
        background: white;
        box-shadow: 0 0 0 1px var(--tertiary), 0 0 25px 0 rgba(0,0,0,.3);
    }
    .card:hover > .card-highlight {
        visibility: visible;
        opacity: 1;
    }
    .card-subtitle {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: .1em;
        font-weight: normal;
        opacity: .75;
        padding: 0 20px;
    }
    .card-subtitle:not(:empty) {
        margin-top: 40px;
    }
    .card-subtitle:empty {
        display: none;
    }
    .card-subtitle:empty + .card-title {
        margin-top: 40px;
    }
    .card-title {
        font-size: 24px;
        padding: 0 20px;
        margin-bottom: 20px;
    }
    .card-title:empty {
        display: none;
    }
    .card-content {
        padding: 0 20px;
        margin-bottom: 20px;
    }
    .card-content:empty {
        display: none;
    }
    .card-image:empty {
        padding-top: 20px;
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

<a href="{hrefValue}" class="card {className}">
    <h2 class="card-subtitle">
        <slot name="subtitle"></slot>
    </h2>
    <h1 class="card-title">
        <slot name="title"></slot>
    </h1>
    <p class="card-content">
        <slot name="content"></slot>
    </p>
    <div class="card-image">
        <slot name="image"></slot>
    </div>
    <div class="card-highlight" aria-hidden="true"></div>
</a>


