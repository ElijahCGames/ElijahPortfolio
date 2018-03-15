var data;

function preload(){
	data = loadJSON("https://raw.githubusercontent.com/Book81able/corpora/master/data/sports/olympics.json");
}

function setup() {
  can = createCanvas(1000,600);
  can.parent("sketch-holder");
  background(255);
  var summers = data.olympics.summer
  var wid = width/summers.length
  var rio = summers[summers.length - 1];
  for(var i = 0; i<summers.length;i++){
    var eventhei = (summers[i].events/rio.events)*height
    fill(200,0,0,50);
    rect(wid*i,height-eventhei,wid,height);
    var countryhei = (summers[i].countries/rio.countries)*height
    fill(0,200,0,50);
    rect(wid*i,height-countryhei,wid,height);
    var athlhei = (summers[i].athletes/rio.athletes)*height
    fill(0,0,200,50);
    rect(wid*i,height-athlhei,wid,height);
  }
 }