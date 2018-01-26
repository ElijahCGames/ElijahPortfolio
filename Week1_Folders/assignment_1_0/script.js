/*Elijah Cobb
Artg:2260 Programming Basics: Section 2
ecobb81@gmail.com 
Assignment 1.0
Title: Rodin*/

//Head
var HX = 250;
var HY = 100;
//Eyes
var EX = 293;
var EY = 88;
//Left Knee
var LKX= 290;
var LKY= 270;
//Left Foot
var LFX = 325;
var LFY = 400;
//Right Knee
var RKX = 275;
var RKY = 420;
//Right Foot
var RFX = 250;
var RFY = 495
//Pelvis
var PX = 230;
var PY = 350;
//Right Elbow
var REX = 280;
var REY = 280;
//Right Hand
var RHX = 259;
var RHY = 177;
//Left Elbow
var LEX = 316;
var LEY = 208;
// Left Hand
var LHX;
var LHY;
var theta;
var theDev = 5;
//Shoulder
var SX = 185;
var SY = 191;
function setup(){
  var can = createCanvas(500,500);
  can.parent("sketch-holder");
  background(225);
  frameRate(30);
}

function draw(){
  //Declaring Angles
  angleMode(DEGREES);
  LHX = LEX+(80*((mouseX-LEX)/(sqrt(sq(LEY-mouseY)+ sq(LEX-mouseX)))))
  LHY = LEY-(80*((LEY-mouseY)/(sqrt(sq(LEY-mouseY)+sq(LEX-mouseX)))))
  theta = asin(((LEY-mouseY)/(sqrt(sq(LEY-mouseY)+sq(LEX-mouseX)))))
  //Declaring Begining Objects
  background(225);
  fill(225);
  stroke(0);
  strokeWeight(5)
  //Body
  bezier(HX,HY,150,200,150,300,PX,PY);
  //Head
  fill(255);
  ellipse(HX,HY,150,150);
  //Eye
  ellipse(EX,EY,40,40);
  ellipse(EX+(15*((mouseX-EX)/(sqrt(sq(EY-mouseY)+ sq(EX-mouseX))))), 
               EY-(15*((EY-mouseY)/(sqrt(sq(EY-mouseY)+sq(EX-mouseX))))),5,5)
  //Mouth
  bezier(318,130,295,126,295,126,273,127)
  //Left Leg
  line(PX,PY,LKX,LKY);
  line(LKX,LKY,LFX,LFY);
  //Right Leg
  line(PX,PY,RKX,RKY);
  line(RKX,RKY,RFX,RFY);
  //Right Arm
  line(SX,SY,REX,REY);
  line(RHX,RHY,REX,REY);
  //Left Arm
  line(SX,SY,LEX,LEY);
  line(LEX,LEY,LHX,LHY);

  //Objects
  noStroke();
  fill(0,200,100);
  quad(424,411,444,414,500,41,480,38);

  fill(0);
  //Feets
  triangle(RFX-5,500,LFX-50,500,256,481);
  triangle(LFX-5,LFY,LFX+26,LFY,321,384);
  //Hands
  quad(RHX-10,RHY+6,RHX+10,RHY-6,RHX,RHY-18,RHX-20,RHY-6,);
  if(LHX>LEX){
  quad(LEX+(cos(theta+theDev)*80),LEY-(sin(theta+theDev)*80),
       LEX+(cos(theta-theDev)*80),LEY-(sin(theta-theDev)*80),
       LEX+(cos(theta-theDev)*100),LEY-(sin(theta-theDev)*100),
       LEX+(cos(theta+theDev)*100),LEY-(sin(theta+theDev)*100));
  }else{
    quad(LEX-(cos(theta+theDev)*80),LEY-(sin(theta+theDev)*80),
       LEX-(cos(theta-theDev)*80),LEY-(sin(theta-theDev)*80),
       LEX-(cos(theta-theDev)*100),LEY-(sin(theta-theDev)*100),
       LEX-(cos(theta+theDev)*100),LEY-(sin(theta+theDev)*100));
  }
  fill(255);
  //FinalObjects
  quad(LFX-20, LFY, LFX+20, LFY, LFX+800, height, LFX-50, height);
  triangle(RFX,500,0,500,75,0);
  rect(0,0,75,500)
}