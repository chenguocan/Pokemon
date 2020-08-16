let n = 1
const string = "大家好,这里是及人谷,我是学生"
const demo = document.querySelector("#demo");
const handler = setInterval(() => {
    n += 1;
    demo.innerHTML = n;
})