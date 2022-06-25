function changeColor() {
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");

  divElement1.className = "blue";
  divElement2.className = "orange";
}

//Write two doColor() functions

function doPurple() {
  var divElement1 = document.getElementById("div1");
  divElement1.style.backgroundColor = "purple";
}

function doYellow() {
  var divElement2 = document.getElementById("div2");
  divElement2.style.backgroundColor = "yellow";
}