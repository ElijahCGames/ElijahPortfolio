//Array of Object Variables
var ston = [];
var leng = 0;
//Game State Set
var gameState = "start";
var gameMode = "nothing"
var gameModes = ["classic","target","party"];
//Stone in Play
var aimingStone;
//Target Set
var targ;
//Scores
var scoreValue = 0;
var highScore = 0;
//Powerups
var pUp = [];
var types = [
	small = {
		color:[0,200,0],
		id:0
	},
	fast = {
		color:[157, 243, 14],
		id:1
	},
	slip = {
		color:[0,200,200],
		id:2
	},
	mass = {
		color:[56, 12, 10],
		id:3
	},
	curly = {
		color:[244, 66, 209],
		id:4
	},
	sup = {
		color:[200,0,0],
		id:5
	}
];
//Curling Counting
redWins = 0;
yellowWins = 0;
lastWin = 0;
wins = [redWins,yellowWins];
colors = [[196, 15, 15],[247, 243, 14]];
//Round set
var throws = 0;
var throwNum = 0;
var targetNum = 5;
var classicNum = 12;
var partyNum = 8;
//End Set
var ends = 0;
var endNum = 6;
var partyEnds = 2;
//Somethings
var inMotion = 0;
//Aesthtics
var font;



function setup() {
  can = createCanvas(200,600);
  can.parent("sketch-holder");
  angleMode(DEGREES);
  rectMode(CENTER);
  textFont('Abril Fatface');
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
  }else if(gameState == "sliding"){
  	sliding();
  }else if(gameState == "interval"){
  	interval();
  }
  if(gameState != "start" && gameState != "interval"){
  	UI();
  	if(gameMode == "party"){
  		powerUpManager();
  	}
  }
}

//To Start the Game
function keyReleased(){
	if(gameMode == "sliding" && keyCode == 81){
		nextStone();
	}
}

function keyPressed(){
	return false;
}

//To inititate curling
function mouseReleased(){
	if(gameState == "aiming" && mouseY<450){
		aimingStone.speedSet();
		gameState = "curling";
	}
	if(gameState == "start"){
		for(var i=0;i<3;i++){
			if(pressed(i)){
				gameState = "aiming";
				gameMode = gameModes[i];
				targ = new Target();
				var firstStone = new Stone();
				ston.push(firstStone);
				if(gameMode == "classic"){
					yellowWins = 0;
					redWins = 0;
					throwNum = classicNum;
				}
				if(gameMode == "party"){
					throwNum = partyNum;
					endNum = partyEnds;
					yellowWins = 0;
					redWins = 0;
					var newPower = new Powerup();
					pUp.push(newPower);
				}
			}
		}
	}
	if(gameState == "interval"){
		if(pressed(2)){
			gameState = "aiming";
			var firstStone = new Stone();
			ston.push(firstStone);
			if(gameMode == "party"){
				pUp = [];
				var newPower = new Powerup();
				pUp.push(newPower);
			}
		}
	}
}

//Sets up the background
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
	stroke(200,0,0);
	line(0,450,width,450);
}

function UI(){
	if(gameMode == "target"){
		throwNum = targetNum;
	  	targ.display();
	  	text("Score: " + scoreValue + " Throws: " + throws, 5, 10);
	  	text("High Score: " + highScore , 5, 20);
  	}
  	if(gameMode == "classic" || gameMode == "party"){
  		for(var i=0; i<throwNum-throws;i++){
  			if(i%2 == 1){
  				fill(colors[lastWin]);
  				ellipse(20,600-i*10,15);
  			}else{
  				fill(colors[lastLose()])
  				ellipse(width-20,590-i*10,15);
  			}
  		}
  		fill(colors[lastWin]);
  		text(wins[lastWin],20,470);
  		fill(colors[lastLose()]);
  		text(wins[lastLose()],width-20,470);
  	}
}

function powerUpManager(){
	for (var i = pUp.length - 1; i >= 0; i--) {
		pUp[i].display();
		pUp[i].detect(i);
	}
}
//When GameState = start
function startScreen(){
	fill(0);
	noStroke();
	textAlign(CENTER);
	if(gameMode == "target"){
		 text("High Score: " + highScore,width/2,260);
	}
	if(gameMode == 'classic'){
		if(redWins>yellowWins){
			text("RED WINS",width/2,240);
		}else if(yellowWins>redWins){
			text("YELLOW WINS",width/2,240);
		}else if(redWins == yellowWins){
			text("YOU TIED",width/2,200);
			text("I'm too lazy to implment an",width/2,220);
			text("extra end so just play again!",width/2,240);
		}
		text("Red Points: " + redWins + " Yellow Points: " + yellowWins ,width/2,260);
	}
  text("Click where you want the stone to go",width/2,280);
  text("Use A and D to add curl to the stone",width/2,300);
  hover(0);
  fill(244, 241, 66);
  rect(width/2,320,150,20);
  hover(1);
  fill(239, 65, 52);
  rect(width/2,350,150,20);
  hover(2);
  fill(51, 108, 239);
  rect(width/2,380,150,20);
  fill(0);
  noStroke();
  text("Classic Mode (2p)",width/2,325);
  text("Target Mode",width/2,355);
  text("Party Mode",width/2,385);
  ston = [];
  pUp = [];
  leng = 0;
}

function hover(button){
	if(pressed(button)){
  		noStroke();
  }else{
  	stroke(0);
  }
}

function pressed(button){
	if(mouseX>(width/2)-75 && mouseX<(width/2)+75 && mouseY>310+30*button && mouseY<330+30*button){
		return true;
	}else{
		return false;
	}
}

function aiming(){
	aimingStone = ston[leng];
	aimingStone.aiming();
	for(var i = 0; i<=leng; i++){
  		ston[i].display(i);
  	}
}

function curling(){
	aimingStone.turning();
	for(var i = 0; i<=leng; i++){
  		ston[i].display(i);
  	}
}

function sliding(){
	aimingStone.move(leng);
	for(var i = 0; i<=leng; i++){
	  	ston[i].display(i);
	  	ston[i].collide();
	  	if(ston[i].collided){
	  		ston[i].bounceMove(i);
	  	}
	  	if(ston[i].justCollided){
	  		var currentFrame = frameCount
	  		if(currentFrame + 10 < frameCount){
	  			ston[i].justCollided = false;
	  		}
	  	}
	}
}

function interval(){
	background(colors[lastWin]);
	groundElements();
	fill(0);
	noStroke();
	text("End #" + ends,width/2,height/2+20);
  	text("Red: " + redWins + " Yellow: " + yellowWins,width/2,height/2+40);
	if(lastWin == 0){
  		text("Red Wins",width/2,height/2);
  		text("Yellow has the Hammer",width/2,height/2+60);
	}else{
		text("Yellow Wins",width/2,height/2);
		text("Red has the Hammer",width/2,height/2+60);
	}
	hover(2);
	fill(51, 108, 239);
  	rect(width/2,380,150,20);
  	noStroke();
  	fill(0);
  	text("Next End",width/2,385);
  	ston = [];
  	leng = 0;
}
//Calculates Scores
function scoring(){
	var protoScore = dist(targ.x,targ.y,aimingStone.x,aimingStone.y);
	var refinedScore = round(map(protoScore,0,100,10000,0));
	if(refinedScore<0){
		refinedScore = 0;
	}
	scoreValue += refinedScore;
	targ = new Target();
	if(highScore<scoreValue){
			highScore = scoreValue;
	}
}

function tallying(){
	var tallyHelper = [];
	for(var i = 0; i<=leng; i++){
		var distance = dist(ston[i].x,ston[i].y,width/2,100);
		ston[i].dist = round(distance);
		tallyHelper.push(round(distance));
	}
	sort(tallyHelper);
	for(var i = 0; i<=leng; i++){
		if(ston[i].dist == tallyHelper[0]){
			if(lastWin==0){
				if(i%2 == 0){
					redWins++;
					checkNext(tallyHelper,"Red",1);
					lastWin = 0
				}else{
					yellowWins++
					checkNext(tallyHelper,"Yellow",1);
					lastWin = 1
				}
			}else{
				if(i%2 == 0){
					yellowWins++;
					checkNext(tallyHelper,"Yellow",1);
					lastWin = 1
				}else{
					redWins++;
					checkNext(tallyHelper,"Red",1);
					lastWin = 0
				}
			}
		}
	}
	print(redWins + ", " + yellowWins);
	print(lastWin);
}

function lastLose(){
	return(abs(lastWin-1));
}

function checkNext(array,winner,place){
	for(var i = 0; i<=leng; i++){
		if(ston[i].dist == array[place]){
			if(winner == "Red"){
				if(lastWin==0){
					if(i%2 == 0){
						redWins++
						place++
						checkNext(array,"Red",place);
					}
				}else{
					if(i%2==1){
						redWins++
						place++
						checkNext(array,"Red",place);
					}
				}
			}else{
				if(lastWin==0){
					if(i%2 == 1){
						yellowWins++
						place++
						checkNext(array,"Yellow",place);
					}
				}else{
					if(i%2==0){
						yellowWins++
						place++
						checkNext(array,"Yellow",place);
					}
				}
			}
		}
	}
}
//Reset the loop
function nextStone(){
	if(gameMode == "target"){
		scoring();
	}
	for(s of ston){
		s.justCollided = false;
	}
	if(throws >= throwNum-1){
		if(gameMode == "classic" || gameMode == "party"){
			tallying();
			if(ends>=endNum-1){
				gameState = "start"
				ends = 0;
			}else{
				gameState = "interval"
				ends++;
			}
		}else{
		gameState = "start"
		}
		throws = 0;
		scoreValue = 0;
	}else{
		let newStone = new Stone();
		ston.push(newStone);
		leng++;
		aimingStone = ston[leng];
		throws++;
		if(gameMode == "party"){
			var newPower = new Powerup();
			pUp.push(newPower);
		}
		gameState = "aiming";
	}
}

class Stone{
	constructor(){
		this.x = width/2;
		this.y = 550;
		this.xDist = mouseX;
		this.yDist = mouseY;
		this.xSpeed = .11;
		this.ySpeed = .11;
		this.friction = .994
		this.curlRate = 0;
		this.roateSpeed = 0;
		this.collided = false;
		this.justCollided = false;
		this.dist = 0;
		this.diameter = 30;
		this.mass = 30;
	}
	//Show the Stones
	display(colorSet){
		if(gameState == "sliding"){
			this.rotateSpeed = -this.curlRate*30
		}
		noStroke();
		if(colorSet%2 == 0){
			fill(colors[lastWin]);
		}else{
			fill(colors[lastLose()]);
		}
		translate(this.x,this.y);
		ellipse(0,0,this.diameter);
		fill(200);
		rotate(this.rotateSpeed);
		rect(0,0,4,this.diameter*(2/3));
		rotate(-this.rotateSpeed);
		translate(-this.x,-this.y);
	}
	//Move the Stones after they cross the hog line
	move(stoneNum){
		this.y += this.ySpeed;
		this.x += this.xSpeed;
		this.xSpeed += this.curlRate/10000;
		this.ySpeed *= this.friction;
		this.xSpeed *= this.friction;
		this.curlRate*=this.friction;
		this.wallBounce(leng);
		if(this.xSpeed<.05 && this.xSpeed>-.05 && this.curlRate<2.5 && this.curlRate> -2.5){
			this.xSpeed = 0;
		}
		if(this.ySpeed>-.1 && this.ySpeed<.1){
			this.ySpeed = 0;
		}
		if(aimingStone == this && this.xSpeed == 0 && this.ySpeed == 0 && inMotion == 0){
			nextStone();
		}
	}
	//Aim the stone 
	aiming(){
		this.xDist=mouseX;
		this.yDist=mouseY;
		fill(255,0 );
		stroke(0);
		line(this.x,this.y,this.xDist,this.yDist);
		ellipse(this.xDist,this.yDist,20);
	}
	//Movement before the hog line
	turning(){
		this.y += this.ySpeed/2;
		this.x += this.xSpeed/2;
		this.ySpeed *= .997;
		this.xSpeed *= .997;
		if(this.y<450){
			gameState = "sliding";
		}
		if(keyIsDown(65)){
			this.curlRate--;
		}else if(keyIsDown(68)){
			this.curlRate++;
		}
		this.spinDirection(this.x,this.y,this.curlRate)
	}
	collide(){
		for (var i = ston.length - 1; i >= 0; i--) {
			if(ston[i]!== this){
				if(dist(this.x,this.y,ston[i].x,ston[i].y)<(this.diameter/2+ston[i].diameter/2)){
					if(this.ySpeed< -.1 || this.ySpeed>.1){
						if(!this.justCollided || !ston[i].justCollided){
						//Saving the speed of the slower stone, in case something happens
						var saveX = ston[i].xSpeed;
						var saveY = ston[i].ySpeed;
						//The Dot Products of things
						var multiston = ((((saveX-this.xSpeed)*(ston[i].x-this.x))+((saveY-this.ySpeed)*(ston[i].y-this.y)))/(sq(ston[i].x-this.x)+sq(ston[i].y-this.y)));
						//Setting the staionary stone speed
						ston[i].ySpeed = ston[i].ySpeed - (((2*this.mass)/(this.mass+ston[i].mass))*multiston*(ston[i].y-this.y));
						ston[i].xSpeed = ston[i].xSpeed - (((2*this.mass)/(this.mass+ston[i].mass))*multiston*(ston[i].x-this.x));
						//Setting the moving stone Speed
						this.ySpeed = this.ySpeed - (((ston[i].mass)/(this.mass+ston[i].mass))*multiston*(this.y-ston[i].y));
						this.xSpeed = this.xSpeed - (((ston[i].mass)/(this.mass+ston[i].mass))*multiston*(this.x-ston[i].x));
						//Telling the world about the collision
						if(ston[i].collided == false){
							inMotion++;
						}
						ston[i].collided = true;
						this.justCollided = true;
						ston[i].justCollided = true;
						}
					}
				}
			}
		}
	}
	bounceMove(stoneNum){
		if(aimingStone != this){
			this.y += this.ySpeed;
			this.x += this.xSpeed;
			this.ySpeed *= this.friction;
			this.xSpeed *= this.friction;
			this.wallBounce(stoneNum);
			if(this.ySpeed>-.1 && this.ySpeed<.1){
				this.ySpeed = 0;
			}
			if(this.xSpeed<.05 && this.xSpeed>-.05){
				this.xSpeed = 0;
			}
			if(this.xSpeed == 0 && this.ySpeed == 0){
				this.collided = false;
				inMotion--;
			}
		}
    }
    wallBounce(stoneNum){
    	if(gameMode != "classic"){
    		if(this.x<this.diameter/2 || this.x>width-this.diameter/2){
				this.xSpeed = -this.xSpeed;
				this.justCollided = false;
			}
		}
		if(gameMode == "classic"){
			if(this.x<0 || this.x>width || this.y<0){
				ston.splice(stoneNum,1,new BadMove());
				nextStone();
			}
		}
		if(gameMode == "party"){
			if(this.y<this.diameter/2 || this.y>451){
				this.ySpeed = -this.ySpeed;
				this.justCollided = false;
			}
		}
    }
	speedSet(){
		this.xSpeed = map(mouseX,0,width,-.7,.7);
		this.ySpeed = map(mouseY,0,height,-3.44,.4)
	}

	spinDirection(x,y,theta){
		if(theta>0){
			for(var i = 0; i<=theta;i++){
				var xEnd = 50*cos(90-i) + x;
				var yEnd = y-50*sin(90-i);
				stroke(0,200,0);
				line(x,y,xEnd,yEnd);
			}
		}else if(theta<0){
			for(var i = 0;i>=theta;i--){
				var xEnd = 50*cos(90-i) + x;
				var yEnd = y-50*sin(90-i);
				stroke(0,200,0);
				line(x,y,xEnd,yEnd);
			}
		}
	}
}
class Target{
	constructor(){
		this.x = random(10,200);
		this.y = random(10,300);
	}
	display(){
		fill(0);
		rect(this.x,this.y,20,5);
		rect(this.x,this.y,5,20);
		noStroke();
		textAlign(LEFT);
}
}
class Powerup{
	constructor(){
		this.x = random(15,width-15);
		this.y = random(200,400);
		this.type = random(types);
		this.diam = 30
	}
	display(){
		fill(this.type.color);
		ellipse(this.x,this.y,this.diam);
	}
	detect(index){
		var stoneDistance = dist(aimingStone.x,aimingStone.y,this.x,this.y)
		if(stoneDistance<aimingStone.diameter/2+this.diam/2){
			this.diam = stoneDistance;
			if(stoneDistance<aimingStone.diameter/2){
				this.power();
				pUp.splice(index,1)
			}
		}
	}
	power(){
		if(this.type.id == 0){
			aimingStone.diameter /= 2;
			aimingStone.mass /= 2;
		}else if(this.type.id == 1){
			aimingStone.xSpeed *= 5;
			aimingStone.ySpeed *= 5;
		}else if(this.type.id == 2){
			var tiny = 1 - aimingStone.friction;
			aimingStone.friction += tiny/2;
		}else if(this.type.id == 3){
			aimingStone.mass *= 4;
			aimingStone.diameter *= 1.2;
		}else if(this.type.id == 4){
			aimingStone.curlRate *= 10;
		}else if(this.type.id == 5){
			if(this.x<30){
				this.x=30;
			}
			if(this.x>width-30){
				this.x = width-30;
			}
			aimingStone.mass *=10;
			aimingStone.diameter *= 1.5;
			aimingStone.xSpeed *= 4
			aimingStone.ySpeed *= 4
			aimingStone.culrRate *=10;
		}
	}
}

//I love this. It's a botched way to make it so stones that leave the area aren't counted but everything else works
//It's great
//I love it
//It will cause NOOOOOOOOO bugs
//Yeah
//No Bugs
//Or an invertabrates for that matter.
class BadMove{
	constructor(){
		this.x = 10000;
		this.y = 10000;
	}
	display(){

	}
	collide(){

	}
}