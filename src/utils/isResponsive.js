export default function isResponsive() {
    let device;
    let width = window.outerWidth

    if (width < 450) {
        device = checkDevice("mobile", width)
    } else {
        device = checkDevice("desktop", width)
    }
    return device
}

function checkDevice(client, width) {
    let device = JSON.parse(`{
    "device": "${client}",
    "width": "${width}"
    }`);

    return device
}

export function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}
