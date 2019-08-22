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
    .blog-navigation-mobile-label {
        display: none;
    }
    @media (max-width: 900px) {
        .blog-navigation {
            border-right: none;
            border-left: 4px solid var(--panel-tertiary);
            margin-bottom: 20px;
            margin-top: 40px;
            overflow: unset;
            max-height: unset;
        }
        .blog-navigation-mobile-label {
            display: block;
            position: absolute;
            top: -30px;
            font-size: 16px;
            line-height: 20px;
            left: -4px;
            color: var(--panel-secondary);
        }
    }
</style>

<nav class="blog-navigation">
    <span class="blog-navigation-mobile-label">
        <slot name="mobile-label"></slot>
    </span>
    <div class="blog-navigation-items">
        <slot name="items"></slot>
    </div>
</nav>
