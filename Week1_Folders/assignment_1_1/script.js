/*Elijah Cobb
Artg:2260 Programming Basics: Section 2
ecobb81@gmail.com 
Assignment 1.1
Title: Procedural Pastorial*/

//Variables
var grassX;
var grassY;
var rockX;
var rockY;
var cloudX;
var cloudY;
var cloudRadius;
var treeX;
var brackX;
var branchY;
var branchDiam;
var theta = 45;

function setup(){
	createCanvas(500,500);
	noStroke();
	fill(0,200,100);
	rect(0,250,500,250);
	fill(214, 255, 252);
	rect(0,0,500,250);


	//Rocks
	fill(150);
	strokeWeight(2);
	stroke(5);
	for (var i = 0; i <= 10; i++) {
		rockX = random(0,500);
		rockY = random(250,500);
		rockBottom = random(10,20) + rockY;
		rockRight = random(10,20) + rockX;
		quad(rockX,rockY, 
			rockX - random(1,10),rockBottom, 
			rockRight + random(1,20), rockBottom, 
			rockRight, rockY);
	}
	//Grass
	fill(0,200,0);
	strokeWeight(1);
	stroke(0,100,0);
	for (var i = 0; i <= 40; i++) {
		grassX = random(0,500);
		grassY = random(250,500);
		for (var e = 0; e <= 10; e++) {
			bezier(grassX,grassY,grassX,grassY-10,
				   grassX+random(-15,15),grassY-random(0,30),
				    grassX+random(-15,15),grassY-random(0,30)); 
		}
	}
	//Clouds
	noStroke();
	fill(255,150);
	for (var i = 0; i <= 30; i++) {
		cloudX = random(50,450);
		cloudY = random(50,200);
		cloudRadius = random(20,50);
		ellipse(cloudX,cloudY,cloudRadius);
		ellipse(cloudX-20,cloudY+(cloudRadius/4),cloudRadius/1.5);
		ellipse(cloudX+20,cloudY+(cloudRadius/4),cloudRadius/1.5);
	}
	//Tree
	fill(127, 91, 53);
	treeX = random(50,450);
	quad(treeX-15,400,treeX+15,400,treeX+25,150,treeX-25,150);
	//Leaves
	for (var i = 0; i <= 50; i++) {
		branchX = randomGaussian(treeX,40);
		branchY = randomGaussian(150,50);
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
	angleMode(DEGREES);
	frameRate(40);
	//Sun
	stroke(255,225,0);
	line(500,0,
		 500-cos(theta)*100,sin(theta)*100);
	stroke(242, 255, 0);
	line(500,0,
		 500-cos(theta+10)*100,sin(theta+10)*100);
	stroke(255, 153, 0);
	line(500,0,
		 500-cos(theta-10)*100,sin(theta-10)*100);
	noStroke();
	fill(255, 225, 0);
	ellipse(500,0,100);
	theta += 26;

}