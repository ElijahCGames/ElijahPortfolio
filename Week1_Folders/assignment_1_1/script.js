var grassX;
var grassY;
var rockX;
var rockY;
var cloudX;
var cloudY;
var cloudRadius;
var brackX;
var branchY;
var branchDiam;
function setup(){
	createCanvas(500,500);
	fill(0,200,100);
	rect(0,250,500,250);
	fill(214, 255, 252);
	rect(0,0,500,250);
	fill(200,0,0);
	fill(0,200,0);
	for (var i = 0; i <= 40; i++) {
		grassX = random(0,500);
		grassY = random(250,500);
		for (var e = 0; e <= 10; e++) {
			bezier(grassX,grassY,grassX,grassY-10,
				   grassX+random(-15,15),grassY-random(0,30),
				    grassX+random(-15,15),grassY-random(0,30)); 
		}
	}
	for (var i = 0; i <= 10; i++) {
		fill(150);
		rockX = random(0,500);
		rockY = random(250,500);
		rockBottom = random(10,20) + rockY;
		rockRight = random(10,20) + rockX;
		quad(rockX,rockY, 
			rockX - random(1,10),rockBottom, 
			rockRight + random(1,20), rockBottom, 
			rockRight, rockY);
	}
	for (var i = 0; i <= 30; i++) {
		noStroke();
		fill(255,150)
		cloudX = random(50,450);
		cloudY = random(50,200);
		cloudRadius = random(20,50);
		ellipse(cloudX,cloudY,cloudRadius);
		ellipse(cloudX-20,cloudY+(cloudRadius/4),cloudRadius/1.5);
		ellipse(cloudX+20,cloudY+(cloudRadius/4),cloudRadius/1.5);
	}
	fill(127, 91, 53);
	quad(100,400,130,400,140,150,90,150);
	for (var i = 0; i <= 50; i++) {
		branchX = random(30,200);
		branchY = random(100,200);
		branchDiam = random(10,60);
		branchRad = branchDiam/2;
		fill(0,250,0);
		ellipse(branchX,branchY,branchDiam);
		fill(0,100,0);
		beginShape();
		vertex(branchX + branchRad, branchY);
		bezierVertex(branchX + branchRad, branchY+branchRad*1.5, 
					 branchX - branchRad, branchY+branchRad*1.5,
					 branchX - branchRad, branchY);
		bezierVertex(branchX + branchRad, branchY+branchRad-5, 
					 branchX - branchRad, branchY+branchRad-5,
					 branchX + branchRad, branchY);
		endShape();
	}
}

function draw(){
}