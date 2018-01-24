var grassX;
var grassY;
var rockX;
var rockY;
var cloudX;
var cloudY;
var cloudRadius
function setup(){
	createCanvas(500,500);
	fill(0,200,100);
	rect(0,250,500,250);
	fill(214, 255, 252);
	rect(0,0,500,250);
	fill(200,0,0)
	fill(0,200,0)
	for (var i = 0; i <= 20; i++) {
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
		fill(255,100)
		cloudX = random(50,450);
		cloudY = random(50,200);
		cloudRadius = random(20,50);
		ellipse(cloudX,cloudY,cloudRadius);
	}
}

function draw(){
}