var fgCanva = document.getElementById("fg-canva");
var bgCanva = document.getElementById("bg-canva");

var fgImage = null;
var bgImage = null;

function loadForegroundImage() {
  var imgFile = document.getElementById("fg-file");
  fgImage = new SimpleImage(imgFile);

  fgImage.drawTo(fgCanva);
}

function loadBackgroundImage() {
  var imgFile = document.getElementById("bg-file");
  bgImage = new SimpleImage(imgFile);

  bgImage.drawTo(bgCanva);
}

function createComposite() {
  var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
  var greenThreshold = 240;

  for (var pixel of fgImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > greenThreshold) {
      var bgPixel = bgImage.getPixel(x, y);
      output.setPixel(x, y, bgPixel);
    }
    else {
      output.setPixel(x, y, pixel);
    }
  }
  return output;
}

function doGreenScreen() {
  if (fgImage == null || !fgImage.complete()) {
    alert("Foreground not loaded!");
    return;
  }

  if (bgImage == null || !bgImage.complete()) {
    alert("Background not loaded!");
  }
  clearCanvas();

  var finalImage = createComposite();
  finalImage.drawTo(fgCanva);
}

function clearCanvas() {
  doClear(fgCanva);
  doClear(bgCanva);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}