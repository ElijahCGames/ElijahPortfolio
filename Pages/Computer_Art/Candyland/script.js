/*Elijah Cobb
Artg:2260 Programming Basics: Section 2
ecobb81@gmail.com 
Assignment 2.1
Title: Candyland*/

var div = 10;
var divider = 6.5;
var rad = div/divider;

function setup(){
  var can = createCanvas(600,600);
  can.parent("sketch-holder");
  background(255, 188, 130);
}

function draw(){
  noStroke();
  for (var x = 0; x < width; x+=width/div) {
    for(var y = 0; y <height; y+=height/div) {
      if(x/(width/div)%2 == 0 && y/(height/div)%2==0){
        fill((255/width)*x,0,(255/height)*y);
      }else if(x/(width/div)%2==0){
        fill(0,(255/width)*x,0)
      }else if(y/(height/div)%2==0){
        fill((255/height)*y,0,0)
      }else{
        fill(0,(255/width)*x,(255/height)*y);
      }
      ellipse(x+width/div,y+height/div,min(width/rad,height/rad));
    }
  }
}