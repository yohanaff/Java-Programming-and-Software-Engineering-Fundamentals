//Try It! Using Variables, Methods and Functions

//Create and print a new SimpleImage from one of the images in the environment
var image = new SimpleImage("palm-and-beach.png");
print(image);

//Experiment with the following methods: getWidth, getHeight, getPixel, getRed, getGreen, getBlue
//returns the image's height, or number of pixels in the Y direction	
print(image.getWidth());
//returns the image's width, or number of pixels in the X direction	
print(image.getHeight());

//returns the pixel in this image at the coordinate (x, y)
print(image.getPixel(0, 0));

//returns the value of the pixel's red, green or blue component (always in the range 0-255)
print(image.getRed(0, 0));
print(image.getGreen(0, 0));
print(image.getBlue(0, 0));

//Write a function that prints the width and height of an image.
function dimensions() {
    var wh = image.getWidth() + " x " + image.getHeight();
    return wh;
}

print(dimensions(image));

//Rampup Programming Exercise - Variables, Methods and Functions

//Write a function named numberPixels that calculates the total number of pixels in an image
function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    var pixels = height * width;
    return pixels;
}

var result = numberPixels("chapel.png");
print(result);

result = numberPixels("dinos.png");
print(result);

//Write a function named perimeter that calculates the number of pixels in the perimeter of an image
function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    p = someImg.getHeight() * 2 + someImg.getWidth() * 2;
    return p;
}

print(perimeter("rodger.png"));

/* Write a function named printPixel that prints the red, blue and green values of a pixel,
 in that order, one on each line, and identifies each one */
function printPixel(nameImage, xpos, ypos) {
    var someImg = new SimpleImage(nameImage);
    print("red is " + someImg.getRed(xpos, ypos));
    print("green is " + someImg.getGreen(xpos, ypos));
    print("blue is " + someImg.getBlue(xpos, ypos));
}

printPixel("drewgreen.png", 10, 10);
printPixel("drewgreen.png", 250, 500);

//Write a function named sumPixel that calculates and returns the sum of the red, blue and green values of a pixel
function sumPixel(nameOfImage, xpos, ypos) {
    var someImg = new SimpleImage(nameOfImage);
    var result = someImg.getRed(xpos, ypos) + someImg.getGreen(xpos, ypos) + someImg.getBlue(xpos, ypos);
    return result;
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png", 10, 10);
print(answer);

//Try It! Using For Loops

//Make a yellow square that is 200 pixels wide and 200 pixels high
var img = new SimpleImage(200, 200);

for (var pixel of img.values()) {
    pixel.setRed(255);
    pixel.setGreen(255);
}

print(img);

//What if you wanted to make your image magenta instead of yellow?
for (var pixel of img.values()) {
    pixel.setRed(255);
    pixel.setBlue(255);
}

print(img);

//Rampup: Programming Exercise - Loops and Conditionals

//Turn the chapel red
var image = new SimpleImage("chapel.png");
for (var pixel of image.values()) {
    pixel.setRed(255);
}

print(image);

//Remove all the red
for (var pixel of image.values()) {
    pixel.setRed(0);
}

print(image);

//Turn the eggs less red
var image = new SimpleImage("eastereggs.jpg");

for (var pixel of image.values()) {
    if (pixel.getRed() > 70) {
        pixel.setRed(70);
    }
}

print(image);

//Add Thick Black Line to Bottom of Owen
var image = new SimpleImage("astrachan.jpg");
for (var pixel of image.values()) {
    if (pixel.getY() >= image.getHeight() - 10) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}
print(image);

//Green square in top left corner
var image = new SimpleImage("chapel.png");

for (var pixel of image.values()) {
    if (pixel.getX() <= 50 && pixel.getY() <= 50) {
        pixel.setRed(0);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}

print(image);

//Rectangle of any color in top right corner
function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    for (var pixel of someImage.values()) {

        if (pixel.getX() > someImage.getWidth() - cornerWidth &&
            pixel.getY() < cornerHeight) {

            pixel.setRed(red);
            pixel.setGreen(green);
            pixel.setBlue(blue);
        }
    }
    return someImage;
}

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);

//Changes in Red
function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for (var pixel of picture.values()) {
        pixel.setRed(red);
        pixel.setGreen(0);
        pixel.setBlue(0);

        if (pixel.getRed() < 255) {
            red = red + 1;
        }
        if (pixel.getRed() == 255) {
            red = 0;
        }
    }
    return picture;
}

var result = changeRed(256, 200);
print(result);

//Modify the function changeRed so that numbers for blue and green can also be passed in
//Add two parameters, one for the blue color and one for the green color
function changeRed(width, height, green, blue) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for (var pixel of picture.values()) {
        pixel.setRed(red);
        //Set blue to be the blue number passed in and green to be the green number passed in. 
        pixel.setGreen(green);
        pixel.setBlue(blue);

        if (pixel.getRed() < 255) {
            red = red + 1;
        }
        if (pixel.getRed() == 255) {
            red = 0;
        }
    }
    return picture;
}

var result = changeRed(256, 200, 200, 100);
print(result);

//Programming Exercise: Modifying Images

//Part 1
var image = new SimpleImage("hilton.jpg");

w = image.getWidth();

for (var pixel of image.values()) {
    x = pixel.getX();

    if (x < w / 3) {
        pixel.setRed(255);
    }
    else if (x < 2 * w / 3) {
        pixel.setGreen(255);
    }
    else {
        pixel.setBlue(255);
    }
}

print(image);

//Part 2
var image = new SimpleImage("hilton.jpg");

function swapRedGreen(pixel) {
    var newGreen = pixel.getRed();
    var newRed = pixel.getGreen();
    pixel.setGreen(newGreen);
    pixel.setRed(newRed);
    return pixel;
}

for (var pixel of image.values()) {
    swapRedGreen(pixel);
}

print(image);

//Part 3
var image = new SimpleImage("duke_blue_devil.png");
print(image);

for (var pixel of image.values()) {
    /* Since the RGB values of white color (the background of duke_blue_devil.png) is R: 255, G: 255: B: 255, 
    the blue value of each pixel must be less than 255, otherwise it will change the entire image to yellow */
    if (pixel.getBlue() != 255) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}

print(image);

//Programming Exercise: Advanced Modifying Images

//Part 1 