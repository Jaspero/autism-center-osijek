<script>
    export let classValue;
    export let imageValue;
    export let nameValue;
    export let roleValue;
</script>

<style>
    .member {
        border-radius: 4px;
        text-align: center;
        transition: .2s;
    }
    .member:hover {
        background: white;
        box-shadow: 0 0 25px 0 rgba(0,0,0,.3);
    }
    .member-image {
        margin-bottom: 1em;
    }
    .member-name {
        font-size: 1em;
        margin-bottom: .5em;
        color: var(--panel-primary);
    }
    .member-role {
        font-size: .75em;
    }
</style>

<article class="member {classValue}">
    <img class="member-image" src={imageValue} alt={nameValue}>
    <h1 class="member-name">{nameValue}</h1>
    <p class="member-role">{roleValue}</p>
</article>
