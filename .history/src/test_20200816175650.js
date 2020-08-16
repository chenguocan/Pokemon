let n = 1
const string = `
<style>
    body{
        background:red;
    }
</style>
`
const demo2 = document.querySelector("#demo2");
const demo = document.querySelector("#demo");
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
let id = setInterval(() => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id);
        return
    }
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    console.log(string);
}, 300)