var b;
function setup() {
  // create a canvas at least 400 x 400
  can = createCanvas(30,200);
  can.parent("sketch-holder");
  colorMode(HSB,100)
  background(255);
  b = new Box();
}

function draw(){
  background(255);
  b.display();
  b.move();
  b.teleport();
}

class Box{
  constructor(){
    this.y = 50;
    this.color = random(0,100);
  }
  display(){
    fill(this.color,100,100);
    noStroke();
    rect(0,this.y,width,width);
  }
  move(){
    this.y += -1;
  }
  teleport(){
    if(this.y+width <= 0){
      this.y = height;
      this.color = random(0,100);
    }
  }
}