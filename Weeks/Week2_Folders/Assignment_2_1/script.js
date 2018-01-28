var div = 10;
var divider = 6.5;
var rad = div/divider;

function setup(){
  var can = createCanvas(600,600);
  can.parent("sketch-holder");
  background(255,255,255);
}

function draw(){
  if(mouseIsPressed){
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
  if(mouseReleased){
    if(mouseX>9 && mouseX<50 && mouseY>9 && mouseY<30){

    }
  }
  rect(10,10,50,20);
  textSize(20);
  text("Clear",11,12,50,20);  
}

function mouseReleased() {
  if(mouseX>9 && mouseX<60 && mouseY>9 && mouseY<30){
      background(random(0,255),random(0,255),random(0,255));
  }
}