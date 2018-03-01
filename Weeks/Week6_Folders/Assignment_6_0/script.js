var ropeParts = [];
var objects = [];

var objectNum = 11;
var ropeLength = 200;
function setup() {
  can = createCanvas(600,600);
  can.parent("sketch-holder");
  rectMode(CENTER);
  for(var i = 0; i<ropeLength; i++){
  	var newPart = new RopeParts(i);
  	ropeParts.push(newPart);
  }
  for(var i = 0; i<objectNum; i++){
  	var newPart = new Obstacle();
  	objects.push(newPart);
  }
  background(255);
}

function draw(){
	ogVec = createVector(mouseX,mouseY);
	background(255,.5,3,3);
	for(part of ropeParts){
		part.move();
		part.object();
		part.display();
	}
	for(object of objects){
		object.display();
		object.move();
		object.sideCheck();
	}
}

class RopeParts{
	constructor(num){
		this.vec = createVector(0,0);
		this.ropeNum = num;
		this.force;
		this.grav = .5;
	}
	display(){
		//ellipse(this.vec.x,this.vec.y,10);
		if(this.ropeNum>0){
			push();
			strokeWeight(10);
			stroke(0,30);
			line(this.vec.x,this.vec.y,ropeParts[this.ropeNum - 1].vec.x,ropeParts[this.ropeNum - 1].vec.y);
			pop();
		}
	}
	move(){
		if(this.ropeNum == 0){
			this.force = p5.Vector.sub(ogVec, this.vec);
		}else{
			this.force = p5.Vector.sub(ropeParts[this.ropeNum - 1].vec, this.vec);
		}
		this.vec.y += this.grav;
		this.vec.x += this.grav;
		if(this.force.mag()>10){
			this.vec.add(this.force.div(5));
		}
	}
	object(){
		for(var item of objects){
			if(this.vec.dist(item.vect)<item.rad+5){
				var distance = p5.Vector.sub(this.vec,item.vect)
				distance.setMag(item.rad+5);
				this.vec = p5.Vector.add(item.vect,distance);
			}
		}
	}
}

class Obstacle{
	constructor(){
		this.vect = createVector(random(0,width),random(0,height));
		this.rad = random(30,70);
		this.vecl = createVector(random(-2,2),random(-2,2));
	}
	display(){
		push();
			noStroke();
			fill(255,1);
			translate(this.vect.x,this.vect.y);
			ellipse(0,0,this.rad*2);
			push();
				fill(0,200,100,3);
				rotate(frameCount/30);
				rect(0,0,this.rad,this.rad);
			pop();
		pop();
	}
	move(){
		this.vect.add(this.vecl);
	}
	sideCheck(){
		if(this.vect.x>this.rad+width){
			this.vect.x = -this.rad;
			this.vecl = createVector(random(-2,2),random(-2,2));
		}
		if(this.vect.x<-this.rad){
			this.vect.x = this.rad+width
			this.vecl = createVector(random(-2,2),random(-5,5));
		}
		if(this.vect.y>this.rad+height){
			this.vect.y = -this.rad
			this.vecl = createVector(random(-2,2),random(-2,2));
		}
		if(this.vect.y<-this.rad){
			this.vect.y = this.rad+height
			this.vecl = createVector(random(-2,2),random(-2,2));
		}
	}
}
