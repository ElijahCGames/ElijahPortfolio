
function setup(){
  createCanvas(500,500);
  fill(200,0,0);

}

function draw(){
  stroke(100);
  background(255);
  for (var i = 0; i <= 1; i+=.1) {
    fill(200,0,0 )
    ellipse(width*i,450,50,50);
    fill(0,0,200);
    rect(50,50,50,50);
    fill(0,200,0);
    triangle(50,200,30,400,500,60)
    stroke(200,0,0);
    line(width/2*i,400,250-((250-mouseX)*i),400-((400-mouseY)*i));
    stroke(0,0,200);
    line((width)-(width/2)*i,400,250-((250-mouseX)*i),400-((400-mouseY)*i));
  }
}