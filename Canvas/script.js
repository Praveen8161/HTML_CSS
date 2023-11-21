const canva = document.getElementById("canva");
const ctx = canva.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(10,10,100,200);

ctx.strokeRect(100,220,50,50);
ctx.clearRect(99,218,70,60);

ctx.beginPath();
ctx.moveTo(300,200);
ctx.lineWidth = 50;
ctx.lineTo(400,300);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();