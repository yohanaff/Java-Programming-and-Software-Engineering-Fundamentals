function upload(){
  var fileinput = document.getElementById("fileinput");
  var image = new SimpleImage(fileinput);
  var canvas = document.getElementById("canva");

  image.drawTo(canvas);
}