var array = [];
var length;
var numLines = 20;
var theta = 0;

function setup() {
  can = createCanvas(600,600);
  can.parent("sketch-holder");
  angleMode(DEGREES);
  background(0);
  //Intilaizing the Seed Line
  seeding();
  sending();
}
  
function draw(){
  for (var i = 1; i <= numLines; i++){
    var endPoint = declaring(i);
    var beginPoint = array[i-1];
    stroke(((i-1)/numLines)*255,((i-1)/numLines)*255);
    strokeWeight(.5);
    line(beginPoint.x,beginPoint.y,endPoint.x,endPoint.y);
    array[i] = endPoint;
  }
  theta++;
}

function declaring(e){
  var lastLine = array[e-1];
    var lineObj = {
      x: lastLine.x + (length*cos(theta*.5*e)),
      y: lastLine.y - (length*sin(theta*.5*e))
    }
  return(lineObj);
}

function sending(){
  for (var i = 1; i <= numLines; i++) {
    var lineObject = declaring(i);
    append(array,lineObject);
  }
  print(array);
}

function seeding(){
  var seed = {
    x: width/2,
    y: height/2
  };
  array = [seed];
  length = (width/2)/numLines;
}