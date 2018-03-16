let canvas, h3, x = 100, y = 100, cx = 0, cy = 0, cxSpeed = 1, cySpeed = 1, xSpeed = -10, ySpeed = -7,ex=150,ey=150;
function setup() {
  canvas = createCanvas(200, 200);
  canvas.position(200, 200);
}

function draw() {
  background(0,0,200);
  fill(0);
  rect(x, y, 50, 50); 
  ellipse(ex,ey,30,30);
  canvas.position(cx,cy);
  x += xSpeed;
  y += ySpeed;
  ex -= cxSpeed;
  ey -= cySpeed;
  cx += cxSpeed;
  cy += cySpeed;

  if(x<0 || x>width-50){
  	xSpeed*= -1
  }
  if(y<0 || y>height-50){
  	ySpeed*= -1
  }
  if(cx<0 || cx>windowWidth-200){
  	cxSpeed *= -1
  }
  if(cy<0 || cy>windowHeight-200){
  	cySpeed *= -1
  }
 }