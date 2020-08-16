import string from "./css.js"

let n = 1;
const btnPause = document.querySelector("#btnPause");
const btnPlay = document.querySelector("#btnPlay");
const btnSlow = document.querySelector("#btnSlow");
const btnNormal = document.querySelector("#btnNormal");
const btnFast = document.querySelector("#btnFast");
const demo2 = document.querySelector("#demo2");
const demo = document.querySelector("#demo");
let time = 100;
let id
const player = {
    init: () => {
        demo.innerText = string.substr(0, n);
        demo2.innerHTML = string.substr(0, n);
        player.play();
        player.bindEvents();

    },
    bindEvents: () => {
        const hashTable = {
            "btnPause": player.pause,
            "btnPlay": player.play,
            "btnSlow": player.slow,
            "btnNormal": player.normal,
            "btnFast": player.fast,
        }

    },
    run: () => {
        n += 1;
        if (n > string.length) {
            window.clearInterval(id);
            return;
        }
        demo.innerText = string.substr(0, n);
        demo2.innerHTML = string.substr(0, n);
        demo.scrollTop = demo.scrollHeight;
    },
    play: () => {
        id = setInterval(player.run, time);
    },
    pause: () => {
        window.clearInterval(id);
    },
    slow: () => {
        player.pause();
        time = 300;
        player.play();
    },
    normal: () => {
        player.pause();
        time = 100;
        player.play();
    },
    fast: () => {
        player.pause();
        time = 0;
        player.play();
    }
}

player.init();