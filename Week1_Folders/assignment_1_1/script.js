var grassX;
var grassY;

function setup(){
	createCanvas(500,500);
	fill(0,200,100);
	rect(0,250,500,250);
	fill(214, 255, 252);
	rect(0,0,500,250);
}

function draw(){
	fill(0,200,0)
	for (var i = 0; i <= 10; i++) {
		grassX = random(0,500);
		grassY = random(250,500);
		for (var i = 0; i <= 10; i++) {
			bezier(grassX,grassY,grassX,grassY-10,
				   grassX+random(-15,15),grassY-random(0,30),
				    grassX+random(-15,15),grassY-random(0,30)); 
		}
	}
}