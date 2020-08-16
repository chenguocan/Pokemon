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

let id = play();
const player = {
    run: () => {
        if (n > string.length) {
            window.clearInterval(id);
            return;
        }
        demo.innerHTML = string.substr(0, n);
        demo2.innerHTML = string.substr(0, n);
        demo.scrollTop = demo.scrollHeight
    },
    play: () => {
        return setInterval(run, time);
    },
    pause: () => {
        window.clearInterval(id);
    },
    slow: () => {
        pause()
        time = 300
        id = paly()
    },
    fase: () => {
        pause()
        time = 0
        id = paly()
    }
}