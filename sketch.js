var inc = 0.1;
var scl = 10;
var cols, rows;
var ciclo = 0;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

let forceF;
let saveI = false;

function setup() {
  createCanvas(1024, 720);
//  colorMode(HSB, 255);




  reset();
}


function draw() {


  ciclo += inc;
  var yoff = 0;
  for (var x = 0; x < cols; x++) {
    var xoff = 0;
    for (var y = 0; y < rows; y++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 10.4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(forceF);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);

    }
    yoff += inc;
    zoff += inc;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    // particles[i].bounce();
    particles[i].edges();
    particles[i].show();
  }


}


function reset(){

  setTimeout(reset, random(10000, 90000));
  if (saveI) {
    saveCanvas('imagen', 'png');

  }
  saveI = true;
    background(2);
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowfield = new Array(cols * rows);
  forceF = random(0.01, 16);
  let modo = floor(random(5));
  let bl = floor(random(7));


//   switch (bl) {
//   case 0:
//   blendMode(REPLACE);
//
//       break;
//   case 1:
//   blendMode(OVERLAY); // funciona wf01 (42)
//
//       break;
//   case 2:
//   blendMode(BLEND);
//
//       break;
//   case 3:
//   blendMode(SCREEN);
//
//       break;
//   case 4:
//   blendMode(ADD);
//
//       break;
//   case 5:
//   blendMode(SOFT_LIGHT);
//
//       break;
//   case 6:
//   blendMode(HARD_LIGHT);
//   break;
//
//   case 7:
// blendMode(DODGE); // balnco funcona sobre negro 1 solo tono
// break;
//   }

  for (var i = 0; i < 100; i++) {

    switch (modo) {
    case 0:
        particles[i] = new Particle(random(width), random(height), floor(random(255)), floor(random(55)), floor(random(200,255)), random(9, 25), random(0.1, 10), random(0.0001, 0.01));
        break;
    case 1:
        particles[i] = new Particle(width/2, height/2, floor(random(255)), floor(random(55)), floor(random(200,255)), random(9, 25), random(0.1, 10), random(0.0001, 0.01));
        break;
    case 2:
        particles[i] = new Particle(random(width), height/2, floor(random(255)), floor(random(55)), floor(random(200,255)), random(9, 25), random(0.1, 10), random(0.0001, 0.01));
        break;
    case 3:
        particles[i] = new Particle(2, random(height), floor(random(255)), floor(random(55)), floor(random(200,255)), random(9, 25), random(0.1, 10), random(0.0001, 0.01));
        break;
    case 4:
        particles[i] = new Particle(random(width), 2, floor(random(255)), floor(random(55)), floor(random(200,255)), random(9, 25), random(0.1, 10), random(0.0001, 0.01));
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
  }


}

function mousePressed(){
  reset();
}
