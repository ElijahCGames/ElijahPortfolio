let song, fft;
let speed, changeX, changeY, rateY, panX, sum = 0;
let noise = 20;
let ampli = [];
function preload() {
  song = loadSound('https://ia800709.us.archive.org/5/items/SymphonyNo.9Iv.FinaleAllegroConFuoco/04Dvok_Symphony9InEMinorOp.95B178_fromTheNewWorld_-4.AllegroConFuoco.mp3');
}

function setup() {
  can = createCanvas(windowWidth,windowHeight);
  can.parent("sketch-holder");
  background(100);
  song.play();
  fft = new p5.FFT();
}

function draw() {
  songControl();
  imageControl();
}

function songControl(){
  changeX = mouseX-pmouseX;
  changeY = mouseY-pmouseY;
  distance = dist(mouseX,mouseY,pmouseX,pmouseY);
  rateY = map(mouseY,0,windowHeight,1.2,.8);
  panX = map(mouseX,100,windowWidth-100,-1,1);
  if(changeX == 0 && changeY == 0){
    quietDown();
  }else{
    raiseUp();
    speed = rateY;
  }
   ampli.push(distance);
   if(ampli.length>10){
    ampli.splice(0,1);
   }
   for(d of ampli){
    sum += d;
   }
   var av = sum/ampli.length;
   song.setVolume(av/50);
   song.rate(speed);
   song.pan(panX);
   sum = 0;
}

function imageControl(){
  background(100);
  noStroke();
  let spect = fft.analyze(64);
    for(var e = 0; e<8; e++){
      for(var a = 0; a<8; a++){
        var i = (e*8)+a
        var aSize = map(a,0,7,-1,1);
        var panSize = aSize*song.getPan();
        var panP = map(panSize,-1,1,.3,1.7)
        fill(spect[i]);
        ellipse(map(a,0,7,100,width-100),map(e,7,0,50,height-50),spect[i]*(i/32)*panP)
      }
    }
  fill(175, 132, 63);
  beginShape();
    vertex(mouseX,mouseY);
    vertex(map(mouseX,0,width,width/2,width-100),height);
    vertex(map(mouseX,0,width,width/2+50,width-50),height);
  endShape(CLOSE);
  stroke(244, 223, 66);
  line(mouseX,mouseY,pmouseX,pmouseY);
}

function quietDown(){
  noise--;
  if(noise < 0){
    noise = 0;
    speed = 0;
  }
}

function raiseUp(){
  noise++;
  if(noise >= 20){
    noise = 20;
  }
}