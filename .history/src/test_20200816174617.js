let n = 1
const string = "大家好,这里是及人谷,我是学生"
const demo = document.querySelector("#demo");
demo.innerHTML = string.substr(from: 0, n);
const handler = setInterval(() => {
    n += 1;
    demo.innerHTML = n;
})