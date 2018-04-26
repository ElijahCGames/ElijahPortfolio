var images = [];
var objects = [];
var numImages = 3;
var numObjects = 25;

function preload(){
  for(let i=0; i < numImages; i++){
    images[i] = loadImage('Assets/' + i + '.png');
  }
}

function setup() {
  can = createCanvas(400,400);
  can.parent("sketch-holder");
  for(var i=0; i<numObjects; i++){
    var b = new Box(100,200,random(images));
    objects[i] = b;
  }
  background(255);
  print(objects);
  print(images);
}

function draw(){
  background(255);
  for (var i = objects.length - 1; i >= 0; i--) {
    objects[i].display();
    objects[i].move();
    objects[i].bounce();
  }
}

function mouseClicked(){
  for (var i = objects.length - 1; i >= 0; i--) {
    objects[i].clicked(mouseX,mouseY);
  }
}

class Box{
  constructor(xpos,ypos,_image){
    this.x = xpos;
    this.y = ypos;
    this.img = _image;
    this.w = 60
    this.h = 60
    this.xSpeed = random(-3,3);
    this.ySpeed = random(-3,3);
  }
  display(){
    image(this.img,this.x,this.y,this.w,this.h);
  }
  clicked(_x,_y){
    if(this.x<_x && this.x+this.w>_x && this.y<_y && this.y+this.y>_y){
      this.img = random(images);
    }
  }
  move(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  bounce(){
    if(this.x<0 || this.x+this.w>width){
      this.xSpeed = -this.xSpeed;
    }
    if(this.y<0 || this.y+this.h>height){
      this.ySpeed = -this.ySpeed;
    }
  }
}