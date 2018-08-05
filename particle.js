
function Particle(x, y, r, g, b, s, maxS, sf){
  this.pos = createVector(x, y);//createVector(random(width), height/2);
  this.vel = p5.Vector.random2D();
  this.acc = p5.Vector.random2D();
  this.maxspeed = maxS;
  this.h = 0;
  this.g = 0;
  this.r = r;
  this.g = g;
  this.b = b;
  this.s = s;
  this.s1 = s;
  this.sf = sf;


  this.prevPos = this.pos.copy();

  this.bounce = function(){
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.mult(-1);
    }if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.mult(-1);
    }
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    // this.bounce();
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors){
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.show = function(){

      col = this.r;

      this.s = lerp(this.s, 0, 0.02);
      strokeWeight((this.s*2));
      stroke(col, col);
      fill(map(this.s, 0, this.s, 0, 255),col);
      line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);

      this.updatePev();
      if (this.s <= 0.2) {
        cont++;
         print(cont);
        if (cont >= ve) {
          cont = 0;
          reset();
      }
  }


  }

  this.updatePev = function(){
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
  }

  this.edges = function(){
    if (this.pos.x > width){
       this.pos.x = 0;
       this.updatePev();
     }if (this.pos.x < 0){
       this.pos.x = width;
       this.updatePev();
     }if (this.pos.y > height){
       this.pos.y = 0;
       this.updatePev();
     }if (this.pos.y < 0){
       this.pos.y = height;
       this.updatePev();
     }

  }
}
