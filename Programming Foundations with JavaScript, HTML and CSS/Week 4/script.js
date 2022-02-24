var canva = document.getElementById("canva");
var fileinput = document.getElementById("fileinput");
var image;
var grayImage;
var redImage;
var trigonometrySharkImage;
var windowPane;

function ImageIsLoaded(image) {
  if (image == null || !image.complete()) {
    return true;
  } else {
    return false;
  }
}

function upload() {
  image = new SimpleImage(fileinput);
  image.drawTo(canva);
}

function clearCanvas() {
  doClear(canva);
  fileinput = document.getElementById("fileinput");
}

function doClear(canva) {
  var context = canva.getContext("2d");
  context.clearRect(0, 0, canva.width, canva.height);
}

function resetImage() {
  doClear(canva);
  image = new SimpleImage(fileinput);
  image.drawTo(canva);
}

function filterGray() {
  if (ImageIsLoaded(image)) {
    alert("Image not loaded");
  } else {

    grayImage = image;

    for (var pixel of grayImage.values()) {
      var avarege = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(avarege);
      pixel.setGreen(avarege);
      pixel.setBlue(avarege);
    }
    grayImage.drawTo(canva);
  }
}

function filterRed() {
  if (ImageIsLoaded(image)) {
    alert("Image not loaded");
  } else {

    redImage = image;

    for (var pixel of redImage.values()) {
      var avarege = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

      if (avarege < 128) {
        pixel.setRed(avarege * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen((avarege * 2) - 255);
        pixel.setBlue((avarege * 2) - 255);

      }
    }
    redImage.drawTo(canva);
  }
}

function filterTrigonometryShark() {
  if (ImageIsLoaded(image)) {
    alert("Image not loaded");
  } else {

    trigonometrySharkImage = image;

    for (var pixel of trigonometrySharkImage.values()) {
      var x = pixel.getX();
      var y = pixel.getY();

      pixel.setBlue(255);
    }

    for (x = 0; x < image.width; x++) {
      for (y = 0; y < image.height; y++) {

        var trigonometrySharkPixel = trigonometrySharkImage.getPixel(x, y);

        if (y < image.height / 5 + 100 * Math.sin(x / 100)) {
          trigonometrySharkPixel.setRed(139);
          trigonometrySharkPixel.setGreen(170);
          trigonometrySharkPixel.setBlue(201);
        } else if (y > (image.height * 4) / 5 + 100 * Math.sin(x / 100)) {
          trigonometrySharkPixel.setRed(139);
          trigonometrySharkPixel.setGreen(170);
          trigonometrySharkPixel.setBlue(201);
        }
      }
    }

    trigonometrySharkImage.drawTo(canva);
  }
}

function filterWindowPane() {
  if (ImageIsLoaded(image)) {
    alert("Image not loaded");
  } else {

    windowPane = image;

    var w = windowPane.getWidth();
    var h = windowPane.getHeight();

    for (var pixel of windowPane.values()) {
      var x = pixel.getX();
      var y = pixel.getY();

      function setColor() {
        pixel.setRed(227);
        pixel.setGreen(212);
        pixel.setBlue(117);
      }

      var borderW = w / 25;
      var borderH = h / 25;
      //border
      if (x <= borderW || x >= w - borderW || y <= borderH || y >= h - borderH) {
        setColor();
      }

      var thickness = w / 50;

      //vertical 1/3
      if (x < w / 3 && x > (w / 3 - thickness)) {
        setColor();
      }

      //vertical 2/3
      if ((x >= w / 3 && x < 2 * w / 3) && (x >= 2 * w / 3 - thickness)) {
        setColor();
      }

      //horzintal 2/3
      if (y < h / 3 && y > (h / 3 - thickness)) {
        setColor();
      }

      //horizontal 2/3
      if ((y >= h / 3 && y < 2 * h / 3) && (y >= 2 * h / 3 - thickness)) {
        setColor();
      }
    }
    windowPane.drawTo(canva);
  }
}