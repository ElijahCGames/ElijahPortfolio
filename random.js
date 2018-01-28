var tilesX = 10
var tilesY = 10

function setup(){
  var can = createCanvas(500,500);
  can.parent("sketch-holder");
  fill(200,0,0);
}

function draw(){
  noStroke();
  for (var x = 0; x <tilesX; x++) {
    if(x%2==0){
      fill(0,200,0);
    }else{
      fill(200,0,0)
    }
    for (var y = 0; y < tilesY; y++) {
      rect((width/tilesX)*x,(height/tilesY)*y,
           (width/tilesX)*(x+1),(height/tilesY)*(y+1));
    }
  }
}