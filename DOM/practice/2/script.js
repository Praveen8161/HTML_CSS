let eveCreate = document.querySelectorAll("div");

eveCreate.forEach((node) => {
    const head = node.querySelector("h1");
    const btn = node.querySelector("button");

    btn.addEventListener("click",(e) =>{
        head.style.color = "white";
        head.style.backgroundColor = "indigo";
    });
});

// let pgHd = document.querySelector(".page-heading");

// let btn  = document.querySelector(".btn");

// btn.addEventListener("click",(e) => {
//     // console.log(e);
//     pgHd.style.color = "white";
//     pgHd.style.backgroundColor = "indigo";

// });

// setTimeout((e)=>{
//     pgHd.style.color = "white";
//     pgHd.style.backgroundColor = "indigo";
// }, 5000);


function clickFun(){
    const para = document.querySelector(".sec1 > p");

    para.style.color = "red";
}

let input1 = document.querySelector(".inp1");
input1.addEventListener("change",(e) => {
    console.log(e.target.value);
});

let input2 = document.querySelector(".inp2");

input2.addEventListener("keyup",(e)=>{
    console.log(e.target.value);
});
