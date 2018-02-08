function setup(){
  var can = createCanvas(500,500);
  can.parent("sketch-holder");
  background(0);
}

function draw(){
  stroke(255);
  for (var i = 0; i<width;i+=1){
    line(i,0,i,sq((i-(width/2))/10));
  }
}