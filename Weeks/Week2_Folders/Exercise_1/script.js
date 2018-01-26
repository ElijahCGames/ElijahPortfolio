
function setup(){
  var can = createCanvas(600,600);
  can.parent("sketch-holder");
  background(255);
}

function draw(){
  noStroke();
  fill(0,200,200);
  for (var x = 0; x < width; x+=width/10) {
    for(var y = 0; y <height; y+=height/10) {
      ellipse(x+width/20,y+height/20,min(width/20,height/20));
    }
  }
}