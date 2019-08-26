<style>
    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 100px 0;
    }
    .loading:after {
        content: '';
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px solid rgba(0,0,0,.25);
        border-top-color: var(--primary-theme);
        animation: loading .7s infinite cubic-bezier(0.5, 0.25, 0.5, 0.75);
    }
    @keyframes loading {
        from { transform: rotate(0); }
        to   { transform: rotate(360deg); }
    }
</style>

<div class="loading"></div>
