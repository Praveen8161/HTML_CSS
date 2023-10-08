// createElement,
// setAttribute
// getElementById, 
// querySelector vs querySelectorAll
// innerHTML vs innerText
// appendChild vs append

// console.log(window.document.body);

//creating element
let newEle = document.createElement("div");

//setting Arributes
newEle.setAttribute("class","js-class js-class-2")
newEle.setAttribute("id","js-id")



// // console.log(newEle);

// //getting element by id
// let headEle = document.getElementById("head-id");
// console.log(headEle);

// //getting element by class

// let subHead = document.getElementsByClassName("quary-class");

// //Query selector
// //even in multiple-class it only gives first element 
// let queEle = document.querySelector(".quary-class");

// //we can also select by element

// let divEle = document.querySelector("h3");

// divEle.style.color = "red"

// //query selector all

// let queryElementAll = document.querySelectorAll(".quary-class");
// // console.log(queryElementAll);

// const color = ["brown","green","red","blue"];

// for(var i=0; i<queryElementAll.length; i++){
//     queryElementAll[i].style.backgroundColor = color[i];
// }

// //inner html

// let divEle = document.createElement("div");
// divEle.innerHTML += `
// <h2 class="div-heading">new inner html</h2>
// <p>this is a new inner element added by inner html</p>`;

// //inner text

// divEle.innerText += `<p>this is a new inner element added by inner text</p>`;

// //text content
// divEle.innnerText += "Hello it is a inner text         and it's a added space";
// divEle.textContent += "Hello it is a text content         and it's a added space";
// console.log(divEle.innnerText);
// console.log(divEle.textContent); //it's better


// //append
// //it will make the created elements to be shown in window screen
// //it will take multiple nodes (element and text)
// //it doesn't not return

// document.body.append(divEle,"Appending text");

// //append child
// //it will only take one elements (node) can't take (text)
// //it will returns the elements

// document.body.appendChild(divEle,divEle,"Appending text");




// //-------------------------------------------------------------------
// //short task
// //create element p and a with atttibute
// //p
// let para = document.createElement("p");

// para.setAttribute("class","sec-heading main-2");
// para.setAttribute("id","para-id para-main");

// // console.log(para);

// //a

// let anc = document.createElement("a");
// anc.setAttribute("href","https://www.google.com/");
// anc.setAttribute("target","_blank");

// // console.log(anc);
// //------------------------------------------------------------------------

// //Event Listenrs

let content1 = document.querySelector(".content");

let btn = document.querySelector(".para-btn");

let name1 = document.getElementById("name");

btn.addEventListener("click",(e) => {
    content1.style.color = "red";
    content1.style.fontStyle = "italic";
    console.log(newEle.value);
    console.log(name1.value);
});
