var array = [];
var length;
var numLines = 20;
var theta = 0;

function setup() {
  can = createCanvas(600,600);
  can.parent("sketch-holder");
  numLines = floor(random(2,20));
  print(numLines);
  angleMode(DEGREES);
  background(0);

  //Intilaizing the Seed Line
  seeding();
  //Sends the beginging line objects to the array
  sending();
}
  
function draw(){
  //draws the line based on the declared array
  for (var i = 1; i <= numLines; i++){
    var endPoint = declaring(i);
    var beginPoint = array[i-1];
    //Sets stroke colors so that the center is black and outside is white
    stroke(map(i,1,numLines,0,255),map(i,1,numLines,0,255));
    strokeWeight(.5);
    if(frameCount%10 == 0){
      line(map(beginPoint.x,0,width,width,0),beginPoint.y,map(endPoint.x,0,width,width,0),endPoint.y);
    }
    line(beginPoint.x,beginPoint.y,endPoint.x,endPoint.y);
    array[i] = endPoint;
  }
  theta++;
}

function declaring(e){
  //Sets the line coordinates for all lines when called
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
}

function seeding(){
  var seed = {
    x: width/2,
    y: height/2
  };
  array = [seed];
  length = (width/2)/numLines;
}