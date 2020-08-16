import string from "./css.js"

let n = 1;
const btnPause = document.querySelector("#btnPause");
const btnPlay = document.querySelector("#btnPlay");
const btnSlow = document.querySelector("#btnSlow");
const btnNormal = document.querySelector("#btnNormal");
const btnFast = document.querySelector("#btnFast");
const demo2 = document.querySelector("#demo2");
const demo = document.querySelector("#demo");
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
let time = 100;
const run = () => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id);
        return
    }
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    demo.scrollTop = demo.scrollHeight;
}

let id = setInterval(() => {
    run();
}, time)

btnPause.onclick = () => {
    window.clearInterval(id);
}
btnPlay.onclick = () => {
    id = setInterval(() => {
        run()
    }, time);
}
btnSlow.onclick = () => {
    window.clearInterval(id);
    time = 300;
    id = setInterval(() => {
        run()
    }, time)
}
btnNormal.onclick = () => {
    window.clearInterval(id);
    time = 100;
    id = setInterval(() => {
        run()
    }, time)
}
btnFast.onclick = () => {
    window.clearInterval(id);
    time = 0;
    id = setInterval(() => {
        run()
    }, time)
}