<script>
    let hrefValue;
    export {
        hrefValue as href
    };
</script>

<style>
    .blog-navigation {
        position: sticky;
        top: calc(80px + 20px);
        display: flex;
        flex-direction: column;
        border-right: 4px solid var(--panel-tertiary);
        padding: 5px 0;
        max-height: calc(100vh - 80px - 20px - 20px);
        overflow: auto;
    }
    .blog-navigation-item {
        text-align: right;
        padding: 5px 20px 5px 5px;
        transition: .2s;
    }
    .blog-navigation-item:hover {
        color: var(--primary-theme);
    }
    .blog-navigation-title {
        font-size: 16px;
        text-align: right;
        padding: 5px 20px 5px 5px;
    }
    .blog-navigation-item + .blog-navigation-title {
        margin-top: 10px;
    }
    @media (max-width: 900px) {
        .blog-navigation {
            border-right: none;
            border-left: 4px solid var(--panel-tertiary);
            margin-bottom: 40px;
            margin-top: 40px;
            overflow: unset;
            max-height: unset;
        }
        .blog-navigation-mobile-label {
            content: 'pero';
            position: absolute;
            top: -30px;
            font-size: 16px;
            line-height: 20px;
            left: -4px;
            color: var(--panel-secondary);
        }
        .blog-navigation-item {
            text-align: left;
            padding: 5px 5px 5px 20px;
        }
        .blog-navigation-title {
            text-align: left;
            padding: 5px 5px 5px 20px;
        }
    }
</style>

<nav class="blog-navigation">
    <span class="blog-navigation-mobile-label">
        <slot name="mobile-navigation-label"></slot>
    </span>
    <h1 class="blog-navigation-title">
        <slot name="title"></slot>
    </h1>
    <slot class="blog-navigation-item" name="items" href="{hrefValue}"></slot>
</nav>
