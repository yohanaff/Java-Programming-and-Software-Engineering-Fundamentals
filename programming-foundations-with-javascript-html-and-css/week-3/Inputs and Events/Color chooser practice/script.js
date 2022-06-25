function doBlue() {
  var canvas = document.getElementById("can");
  canvas.style.backgroundColor = "blue";
}

function doColor() {
  var canvas = document.getElementById("can");
  var colorInput = document.getElementById("clr");
  canvas.style.backgroundColor = colorInput.value;
}