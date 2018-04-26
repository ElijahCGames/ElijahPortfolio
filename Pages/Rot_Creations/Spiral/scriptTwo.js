var theta = 0;
var length = 100;
var xturn;
var yturn;
var pivZip;
var pivOne;
var pivTwo;
function setup() {
  can = createCanvas(600,600);
  can.parent("sketch-holder");
  angleMode(DEGREES);
  background(255);
  pivZip = random(0,3);
  pivOne = random(0,3);
  pivTwo = random(0,3);
  print (pivZip + ", " + pivOne + ", " + pivTwo);
}
  
function draw(){
  strokeWeight(.1);
  xturn = width/2+(length*cos(theta*pivZip))
  yturn = height/2-(length*sin(theta*pivZip))
  xpiv = xturn+(length*cos(theta*pivOne))
  ypiv = yturn-(length*sin(theta*pivOne))
  line(width/2,height/2,xturn,yturn);
  line(xturn,yturn,xpiv,ypiv);
  line(xpiv,ypiv,xpiv+(length*cos(2*pivTwo*theta)),ypiv-(length*sin(pivTwo*theta)));
  theta ++;
}