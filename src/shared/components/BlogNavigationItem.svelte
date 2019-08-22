<script>
    let hrefValue;
    export let isTitle;
    export {
        hrefValue as href
    };
</script>

<style>
    .blog-navigation-item {
        display: flex;
        text-align: right;
        justify-content: flex-end;
        padding: 5px 20px 5px 5px;
        transition: .2s;
    }
    .blog-navigation-item-title {
        font-weight: bold;
    }
    .blog-navigation-item:hover {
        color: var(--primary-theme);
    }
    @media (max-width: 900px) {
        .blog-navigation-item {
            text-align: left;
            justify-content: flex-start;
            padding: 5px 5px 5px 20px;
        }
    }
</style>

<span class="blog-navigation-item {isTitle === true ? 'blog-navigation-item-title' : ''}">
    <slot name="item" href="{hrefValue}"></slot>
</span>

