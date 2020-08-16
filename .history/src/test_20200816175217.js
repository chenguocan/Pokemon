let n = 1
const string = `
    body{
        color:red;
    }
`
const demo = document.querySelector("#demo");
demo.innerHTML = string.substr(0, n);
let id = setInterval(() => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id);
        return
    }
    demo.innerHTML = string.substr(0, n);
    console.log(string);
}, 300)