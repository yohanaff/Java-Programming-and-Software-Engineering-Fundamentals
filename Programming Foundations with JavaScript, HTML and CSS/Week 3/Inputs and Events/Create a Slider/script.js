function doColor() {
  var canvas = document.getElementById("can");
  var colorInput = document.getElementById("clr");
  canvas.style.backgroundColor = colorInput.value;
}

function doSquare() {
  var slider = document.getElementById("slider");
  var length = slider.value;
  var canvas = document.getElementById("can");
  var context = canvas.getContext("2d");

  /* Cleans the already drawn squares so that new squares don't overlap each other, 
   so it's possible to "shrink" the squares through the slider */
  context.clearRect(0,0,canvas.width,canvas.height);

  context.fillStyle = "yellow";
  context.fillRect(10,10,length,length);
  context.fillRect(parseInt(length)+20,10,length,length);
  context.fillRect(length*3,10,length,length);
}