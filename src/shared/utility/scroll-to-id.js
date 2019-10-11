export function scrollToId(id) {
    const el = document.querySelector(id || location.hash);
    el.scrollIntoView({
        block: 'start'
    })
}
