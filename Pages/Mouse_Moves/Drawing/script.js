/*Elijah Cobb
Artg:2260 Programming Basics: Section 2
ecobb81@gmail.com 
Assignment 2.1
Title: Drawing Application*/

var height = 600;
var width = 600;

var rectangle = 0;

var lineColorR = 0;
var lineColorG = 0;
var lineColorB = 0;

var colorSide = width - 220;
var colorTop = 110;
var colorSpan = 40;
var colorRadius = 30;

var lineSide = width - 220 - colorRadius/2;
var lineTop = colorTop - colorRadius/2;

var colorCheck = 0;
var lineCheck = 0;

var strokeW = 1;

var can;


function setup(){
  can = createCanvas(600,600);
  can.parent("sketch-holder");
  background(255,255,255);
}

function draw(){
  stroke(lineColorR,lineColorG,lineColorB);
  strokeWeight(strokeW);
  if(mouseIsPressed){
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
  strokeWeight(1);
  stroke(0);
  UI();
  if(rectangle == 1){
      menu();
  }
}

function mouseReleased() {
  if(mouseX>9 && mouseX<60 && mouseY>9 && mouseY<30){
      background(255);
  }
  if(mouseX>9 && mouseX<60 && mouseY>34 && mouseY<56){
      saveCanvas(can, 'drawing', 'jpg');
  }
  if(mouseX>width-60 && mouseX<width-10 && mouseY<60 && mouseY>10){
      if(rectangle == 0){
        rectangle = 1;
      }else if(rectangle == 1){
        rectangle = 0;
        demenu();
      }
  }
  if(rectangle == 1){
    menuTest();
  }
}

function menu(){
  fill(255);
  rect(width-250,10,240,200);
  noStroke();
  stroke(0);
  fill(180);
  triangle(width-50,20,width-20,20,width-35,50);
  fill(255);
  ellipse(width-210,50,60);
  ellipse(width-100,50,60);
  fill(lineColorR,lineColorG,lineColorB);
  ellipse(width-155,50,strokeW);
  fill(0);
  rect(width-230,45,40,10);
  rect(width-120,45,40,10);
  rect(width-105,30,10,40);
  fill(255);
  for(var x = 0; x<4; x++){
    for(var y = 0; y<3; y++){
      bubbleColor(colorCheck);
      ellipse(colorSide+x*colorSpan,colorTop+y*colorSpan,colorRadius);
      colorCheck++;
    }
  }
  colorCheck = 0;
}

function demenu(){
  fill(255);
  noStroke();
  rect(width-250,10,242,202);
}

function UI(){
  fill(255);
  rect(10,10,50,20);
  rect(10,35,50,20);
  rect(width-60,10,50,50);
  fill(0);
  textSize(20);
  text("Clear",11,12,50,20);  
  text("Save",11,37,50,20);
  fill(180);
  triangle(width-50,20,width-20,20,width-35,50);
}

function menuTest(){
  for(var x = 0; x<4; x++){
    for(var y = 0; y<3; y++){
        if(mouseX>lineSide+(x*colorSpan) &&
           mouseX<lineSide+((x+1)*colorSpan)&&
           mouseY>lineTop+(y*colorSpan) &&
           mouseY<lineTop+((y+1)*colorSpan)){
            lineColor(lineCheck);
        }
        lineCheck++;
    }
  }
  lineCheck = 0;
  if(mouseX>width-130 && 
     mouseX<width-70 &&
     mouseY>20 &&
     mouseY< 80){
        strokeW ++;
  }
  if(mouseX>width-240 && 
     mouseX<width-180 &&
     mouseY>20 &&
     mouseY< 80){
        strokeW --;
  }
  if(strokeW<=0){
    strokeW = 1;
  }
}

function bubbleColor(num){
  if(num==0){
    fill(0,0,0);
  }else if(num==1){
    fill(150,150,150);
  }else if(num==2){
    fill(255,255,255);
  }else if(num==3){
    fill(0,200,0);
  }else if(num==4){
    fill(200,0,0);
  }else if(num==5){
    fill(0,0,200);
  }else if(num==6){
    fill(200,200,0);
  }else if(num==7){
    fill(0,200,200);
  }else if(num==8){
    fill(200,0,200);
  }else if(num==9){
    fill(170, 66, 244);
  }else if(num==10){
    fill(255, 185, 22);
  }else if(num==11){
    fill(145, 110, 65);
  }
}

function lineColor(num){
  if(num==0){
    lineColorR = 0;
    lineColorG = 0;
    lineColorB = 0;
  }else if(num==1){
    lineColorR = 150;
    lineColorG = 150;
    lineColorB = 150;
  }else if(num==2){
    lineColorR = 255;
    lineColorG = 255;
    lineColorB = 255;
  }else if(num==3){
    lineColorR = 0;
    lineColorG = 200;
    lineColorB = 0;
  }else if(num==4){
    lineColorR = 200;
    lineColorG = 0;
    lineColorB = 0;
  }else if(num==5){
    lineColorR = 0;
    lineColorG = 0;
    lineColorB = 200;
  }else if(num==6){
    lineColorR = 200;
    lineColorG = 200;
    lineColorB = 0;
  }else if(num==7){
    lineColorR = 0;
    lineColorG = 200;
    lineColorB = 200;
  }else if(num==8){
    lineColorR = 200;
    lineColorG = 0;
    lineColorB = 200;
  }else if(num==9){
    lineColorR = 170;
    lineColorG = 66;
    lineColorB = 244;
  }else if(num==10){
    lineColorR = 255;
    lineColorG = 185;
    lineColorB = 22;
  }else if(num==11){
    lineColorR = 145;
    lineColorG = 110;
    lineColorB = 65;
  }
}