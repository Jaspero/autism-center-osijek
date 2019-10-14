<script>
    import { webpSupported } from '../../routes/_layout.svelte';

    const fireshopUrl = 'https://firebasestorage.googleapis.com/v0/b/autism-center-osijek.appspot.com/o/';

    let classValue = '';
    let altValue = '';
    let prefix = '';
    let srcValue;

    export {
        classValue as class,
        altValue as alt,
        srcValue as src,
        prefix
    };

    let url = '';

    $: {
        let valToUse = srcValue.replace(
            /(\.jpg|\.jpeg|\.png)/i,
            `${webpSupported ? '.webp' : '$1'}`
        );

        if (prefix) {
            valToUse = fireshopUrl + prefix + valToUse.split(fireshopUrl)[1];
        }

        url = valToUse;
    }

</script>

<img class={classValue} src={url} alt={altValue}>
