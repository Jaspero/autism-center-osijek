export function scrollToId(id) {
    const selector = id || location.hash;

    if (selector) {
        const el = document.querySelector(selector);

        if (el) {
            el.scrollIntoView({
                block: 'start'
            })
        }
    }
}
