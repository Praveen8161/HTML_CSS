//SET TIMEOUT
let isDelivered = false;
const time = window.setTimeout((e)=>{
    console.log("Offer Activated");
    isDelivered = true;
},5000);

isDelivered === true ? clearTimeout(time):"";

//SET INTERVAL

let tick = 0;

let inter = setInterval((e)=>{
    handleTick();
},3000);

function handleTick(){
    console.log(tick);
    tick++;
    tick === 10 ? clearInterval(inter) : "";
}



