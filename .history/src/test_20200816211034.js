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
        btnPause.onclick = player.pause;
        btnPlay.onclick = player.play;
        btnSlow.onclick = player.slow;
        btnNormal.onclick = player.normal;
        btnFast.onclick = player.fast;
    },
    run: () => {
        n += 1;
        if (n > string.length) {
            window.clearInterval(id);
            return;
        }
        demo.innerHTML = string.substr(0, n);
        demo2.innerHTML = string.substr(0, n);
        demo.scrollTop = demo.scrollHeight;
    },
    play: () => {
        return setInterval(player.run, time);
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