var ston = [];
var leng = 0;
var gameState = "start";
var aimingStone;

function setup() {
  can = createCanvas(200,600);
  can.parent("sketch-holder");
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw(){
  background(255);
  groundElements();
  if(gameState == "start"){
  	startScreen();
  }else if(gameState == "aiming"){
 	aiming();
  }else if(gameState == "curling"){
  	curling();
  }
}

function keyReleased(){
	if(gameState == "start" && keyCode == 32){
		gameState = "aiming";
		ston[0] = new Stone();
	}
	return false;
}

function groundElements(){
	noStroke();
	fill(15, 84, 196);
	ellipse(width/2,100,160);
	fill(255);
	ellipse(width/2,100,120);
	fill(196, 15, 15)
	ellipse(width/2,100,80);
	fill(255);
	ellipse(width/2,100,40);
}

function mouseReleased(){
	if(gameState == "aiming"){
		aimingStone.speedSet();
		gameState = "curling";
	}
}

function startScreen(){
	 fill(0);
  text("Press Space to Start",40,300);
}

function aiming(){
	aimingStone = ston[leng];
	aimingStone.aiming();
	for(var i = 0; i<=leng; i++){
  		ston[i].display(i);
  	}
}

function curling(){
	for(var i = 0; i<=leng; i++){
  		ston[i].display(i);
  		ston[i].move();
  	}
}

function nextStone(){
	let newStone = new Stone();
	ston.push(newStone);
	leng++;
	aimingStone = ston[leng];
	print(ston);
	gameState = "aiming";
}

class Stone{
	constructor(){
		this.x = width/2;
		this.y = 550;
		this.xDist = mouseX;
		this.yDist = mouseY;
		this.xSpeed = .11;
		this.ySpeed = .11;
	}
	display(colorSet){
		noStroke();
		if(colorSet%2 ==0){
			fill(196, 15, 15);
		}else{
			fill(247, 243, 14);
		}
		translate(this.x,this.y);
		ellipse(0,0,30);
		fill(200);
		rotate(((width/2)-this.x)*-8);
		rect(0,0,4,20);
		rotate((width/2-this.x)*8 );
		translate(-this.x,-this.y);
	}
	move(){
		this.y += this.ySpeed;
		this.x += this.xSpeed;
		this.ySpeed *= .994;
		this.xSpeed *= .994;
		if(this.xSpeed<.05 && this.xSpeed>-.05){
			this.xSpeed = 0;
		}
		if(this.ySpeed>-.1 && this.ySpeed<.1){
			this.ySpeed = 0;
		}
		if(aimingStone == this && this.xSpeed == 0 && this.ySpeed == 0){
			nextStone();
		}
	}
	aiming(){
		this.xDist=mouseX;
		this.yDist=mouseY;
		fill(255);
		stroke(0);
		line(this.x,this.y,this.xDist,this.yDist);
		ellipse(this.xDist,this.yDist,20);
	}
	speedSet(){
		this.xSpeed = map(mouseX,0,width,-.7,.7);
		this.ySpeed = map(mouseY,0,height,-3.44,.4)
	}
}