// declare variables xPos and yPos
var xPos;
var yPos;
// declare a var called xSpeed;
var xSpeed;
// declare a var called ySpeed
var ySpeed;
// declare a variable called img 
var img;
// declare a var for image width, assign 40 
// declare a var for image height, assign 30
var imageWidth = 40;
var imageHeight = 30;
// use the preload()function to load an image, 
// format: img = loadImage('assets/imageName.png');
// you'll need to create a folder called assets, and include the png there

function setup() {
  // create a canvas at least 400 x 400
  can = createCanvas(400,400);
  can.parent("sketch-holder");
  img = loadImage("../../../Images/B&Wback.png");
  // set xPos to be half of the width 
  // set yPos to be half of the height
  xPos = width/2;
  yPos = height/2
  // assign xSpeed and ySpeed 
  // with random values between 1 and 10
  xSpeed = random(1,10);
  ySpeed = random(1,10);
  //Accelration
  yAccel = .1;
}

function draw(){
  background(0);                 // set the background to black

  image(img,xPos,yPos,imageWidth,imageHeight);// draw the image at the (xPos, yPos) coordinate,
  // using the template image(img, xPos, yPos, width, height)

  xPos += xSpeed; // add the xSpeed to xPos
  yPos += ySpeed;// add the ySpeed to yPos
  ySpeed += yAccel;
  // if we reach the edge of the canvas
  // turn around (toggle xSpeed negative to positive)
  if(xPos<0|| xPos>width-imageWidth){
    xSpeed *= -1;
  }
  if(yPos<0 || yPos>height-imageHeight){
    ySpeed *= -1;
  }
  // same as above, toggle ySpeed if we hit the top or bottom
}