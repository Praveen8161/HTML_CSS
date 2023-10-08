const divEle = document.createElement("div");

divEle.setAttribute("class","div-class");

console.log(divEle);

divEle.innerHTML = `<p> Hello There</p>
<ul><li>mango</li></ul>`;

divEle.innerHTML += `<p>who is it</p>
<ul><li>Apple</li></ul>`;
//------------------------------------------------------
const secEle = document.createElement("section");

secEle.setAttribute("class","sec-class");

secEle.innerText = `there is it
<p>who is it</p>       <ul><li>Apple</li></ul>`;

secEle.innerText += "there is it <p>who is it</p>       <ul><li>Apple</li></ul>";

console.log(secEle);
//------------------------------------------------------
const asiEle = document.createElement("aside");

asiEle.setAttribute("class","asi-class");

asiEle.textContent += `there is it                 <p>who is`;
console.log(asiEle);
//------------------------------------------------------------

console.log(secEle.innerText);
console.log(asiEle.innerText);

//--------------------------------------------------------------

console.log(secEle.textContent);
console.log(asiEle.textContent === asiEle.innerText);

//---------------------------------------------------------------

const artEle = document.createElement("article");
artEle.setAttribute("class","art-class");

const artText = document.createTextNode("This is a article text");

artEle.append(artText);

console.log(artEle);

//-----------------------------------------------------------------

let prac = document.querySelector(".prac-class");

prac.textContent = "This is a text added to the div-class";

console.log(prac);

//-------------------------------------------------------------------

prac.append(artEle,"but he is not so bad",divEle,secEle,"there he is again----------------------------------");

let prac1 = document.createElement("p");

prac1.innerText = "this is a wanted poster";
prac.appendChild(prac1);

//-------------------------------------------------------------------

// let pracOfDiv = document.querySelector("div-class");

// console.log(pracOfDiv);   ---- not working

//--------------------------------------------------------------------

//PRACTICE Modifiying excisting text

let ulEleAdd = document.querySelector("div ul li");

ulEleAdd.innerText = "pinapple";

//--------------------------------------------------

let divAdd = document.querySelector(".modifier"); //change the existing class

divAdd.setAttribute("class","changed");

divAdd.classList.add("active","stalker"); //add extra class

divAdd.classList.remove("active"); //remove an extra class

divAdd.classList.toggle("sub"); // would remove the class if it exits or add it if it dosen't

//------------------------------------------------------------------

//Remove Chils Element

let remPar = document.querySelector(".container");

let remchi = document.querySelector(".container p");

remPar.removeChild(remchi);

//---------------------------------------------------------------


