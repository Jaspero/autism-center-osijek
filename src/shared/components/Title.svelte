<style>
    .title {
        position: relative;
        font-size: 2em;
        padding-bottom: .5em;
    }
    .title::after {
         content: '';
         position: absolute;
         left: 0;
         bottom: 0;
         width: 50px;
         height: 4px;
         background: var(--primary-theme);
    }
    @media (max-width: 900px) {
        .title {
            font-size: 1.5em;
        }
    }
</style>

<h1 class="title">
    <slot></slot>
</h1>
