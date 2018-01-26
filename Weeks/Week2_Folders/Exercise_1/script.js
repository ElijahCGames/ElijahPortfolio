
function setup(){
  var can = createCanvas(600,600);
  can.parent("sketch-holder");
  background(255);
}

function draw(){
  noStroke();
  for (var x = 0; x < width; x+=width/10) {
    for(var y = 0; y <height; y+=height/10) {
      if(x/(width/10)%2 == 0 && y/(height/10)%2==0){
        fill(255);
      }else if(x/(width/10)%2==0){
        fill(0,(255/width)*x,0)
      }else if(y/(height/10)%2==0){
        fill(0,0,(255/height)*y)
      }else{
        fill(0,(255/width)*x,(255/height)*y);
      }
      ellipse(x+width/20,y+height/20,min(width/20,height/20));
    }
  }
}