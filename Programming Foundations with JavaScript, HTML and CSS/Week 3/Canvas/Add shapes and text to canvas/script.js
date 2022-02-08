function doRed() {
  var canvas = document.getElementById("can1");
  canvas.style.backgroundColor = "green";
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 60, 60);
  ctx.fillRect(80, 10, 60, 60);

  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Hello", 15, 45);
}

function doOrange() {
  var canvas = document.getElementById("can2");
  canvas.style.backgroundColor = "blue";
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "orange";
  ctx.fillRect(10, 10, 60, 60);
  ctx.fillRect(80, 10, 60, 60);

  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Hello", 15, 45);
}

/* See what happens when you use the button below to change the background color; 
the background color changes, but the rectangles and text remain in the canvas */
function changeColor() {
  var canvas1 = document.getElementById("can1");
  var canvas2 = document.getElementById("can2");

  canvas1.style.backgroundColor = "purple";
  canvas2.style.backgroundColor = "yellow";
}

// Extra Challenge!
function clearContext() {
  var canvas1 = document.getElementById("can1");
  var canvas2 = document.getElementById("can2");

  var ctx1 = canvas1.getContext("2d");
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

  var ctx2 = canvas2.getContext("2d");
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
}