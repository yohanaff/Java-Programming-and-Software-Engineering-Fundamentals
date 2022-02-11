var canva1 = document.getElementById("canva1");
var canva2 = document.getElementById("canva2");
var image;
var grayImage;

function upload() {
  var fileinput = document.getElementById("fileinput");
  image = new SimpleImage(fileinput);
  grayImage = image;

  image.drawTo(canva1);
  grayImage.drawTo(canva2);
}

function makeGray() {
  for (var pixel of grayImage.values()) {
    var avarege = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avarege);
    pixel.setGreen(avarege);
    pixel.setBlue(avarege);
  }
  grayImage.drawTo(canva2);
}