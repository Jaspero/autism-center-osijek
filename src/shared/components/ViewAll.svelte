<script>
    let className;
    let hrefValue;
    export {
        className as class,
        hrefValue as href
    };
</script>

<style>
    .view-all {
        display: block;
        text-align: right;
        box-shadow: 0 0 0 1px var(--panel-tertiary);
        color: var(--panel-primary);
        font-weight: 500;
        transition: .2s;
    }
    .view-all::after {
        content: '→';
        display: inline-block;
        margin-left: 5px;
    }
    .view-all:hover {
        color: var(--primary-theme);
        background: white;
        box-shadow: 0 0 0 1px var(--panel-tertiary), 0 0 25px 0 rgba(0,0,0,.3);
    }
</style>

<a href="{hrefValue}" class="view-all {className}">
    <slot></slot>
</a>


