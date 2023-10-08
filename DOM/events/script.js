// alert("Welcome");

// prompt("what is your name:");

// confirm("your age is 25 right?");


let inp = document.querySelector(".res");
console.log(inp.textContent);

function promptMsg(){
    let name = prompt();
    console.log(name);
    let resu = document.querySelector(".result");

    resu.innerText += name;
}

let timeDisplay = document.getElementById("time");
let timer = 10;
function timerCount(){
    console.log(timer);
    timer--;
    let id = setTimeout(timerCount,1000);
    timeDisplay.innerText = timer;
    timer === 0 ? clearTimeout(id): "" ;

}

timerCount();

