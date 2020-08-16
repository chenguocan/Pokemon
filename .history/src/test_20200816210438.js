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

const player = {

    run: () => {
        n += 1;
        if (n > string.length) {
            window.clearInterval(id);
            return;
        }
        demo.innerHTML = string.substr(0, n);
        demo2.innerHTML = string.substr(0, n);
        demo.scrollTop = demo.scrollHeight;
        console.log(string);
    },
    play: () => {
        return setInterval(player.run, time);
    },
    pause: () => {
        window.clearInterval(id);
    },
    slow: () => {
        player.pause()
        time = 300
        id = player.paly()
    },
    normal: () => {
        player.pause();
        time = 100;
        id = player.play();
    },
    fast: () => {
        player.pause()
        time = 0
        id = palyer.paly()
    }
}
let id = player.play();
btnPause.onclick = () => {
    player.pause();
}
btnPlay.onclick = () => {
    id = player.play();
}
btnSlow.onclick = player.slow;
btnNormal.onclick = player.normal;
btnFast.onclick = player.fast;