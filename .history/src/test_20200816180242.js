let n = 1;
const string = `
<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
*::after{
    box-sizing: border-box;
}
*::before{
    box-sizing: border-box;
}
.skin{
    position: relative;
    background:#ffe600;
    height: 100vh;
}
.nose{
    border: 10px solid;
    border-color:black transparent transparent transparent;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: 50% 100%;
    animation:wave 500ms infinite;
}
.yuan{
    position: absolute;
    width: 18.5px;
    height: 7px;
    background:black;
    top:-16px;
    left:-9px;
    border-radius:14px 14px 0 0;
}
.face>img{
    position: absolute;
    border-radius: 50%;
    top: 50px;
    left: 50px;
}
.face.left>img{
    transform-origin: 0 0;
    transform: rotateY(180deg);

}
.eye{
    border:2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    margin-left: -32px;
    top: 100px;
    background:#2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content:"";
    display: block;
    border:3px solid white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background:#fff;
    position: relative;
    left: 8px;
    top:2px;
}
.left{
    transform: translateX(-100px);
}
.right{
    transform: translateX(100px);
}
.mouth{
    width:200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top:170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -7px;
}
.mouth .up .lip{
    border:5px solid black;
    height: 30px;
    width:100px;
     background:#ffe600;
    border-top-color:transparent ;
    border-right-color: transparent;
    left: 50%;
    margin-left: -50%;
    z-index: 1;
}
.mouth .up .lip.left{    
    border-radius: 0 0 0 50px;
    position: relative;
    transform: rotate(-20deg);
    position: absolute;
}
.mouth .up .lip.left::before{

    right: -6px;
 
}
.mouth .up .lip::before{
    content:"";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background:#ffe600;
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    position: relative;
    transform: rotate(20deg) translateX(48px) translateY(-18px);
    position: absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth .up .lip.right::before{

    left: -6px;
 
}
.mouth .down{
    height: 180px;
    position: absolute;
    top:0px;
    width: 100%;
    overflow:hidden;
}
.mouth .down .yuan1{
    border:3px solid black;
    height: 1000px;
    width: 150px;
    border-radius: 75px/300px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    background:#9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{

    background: #ff485f;
    height: 300px;
    width: 200px;
    position: absolute;
    bottom:-155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 120px;
}
.face{
    position: absolute;
    left: 50%;
    border:3px solid black;
    width: 88px;
    height: 88px;
    top:200px;
    margin-left: -44px;
    z-index:3;  
}
.face .left{
    transform: translateX(-200px);
    background:#ff0000;
    border-radius: 50%;
}
.face.left{
    transform: translateX(-200px);
    background:#ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(200px);
    background:#ff0000;
    border-radius: 50%;
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