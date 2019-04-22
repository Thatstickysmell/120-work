// Create sun array.
let sun = [];

function setup() {
    // Set the angle mode to degrees from radians
    angleMode( DEGREES);

  createCanvas(windowWidth, 800);
  // set how many sun rays will be made 
    for (let i = 0; i < 15; i++){
      sun.push(new Rays());
    }

  }
function draw() {
  background('rgb( 0, 155, 155)');
    for (let i = 0; i < sun.length; i++) {
      sun[i].move();
      sun[i].display();
  }
}
class Rays {
    constructor() {
            this.topX = 0
            this.topY = 0
            this.leftX = 0
            this.leftY = 20
            this.rightX = 20
            this.rightY = 20
      this.shift = 5;
      this.color = ('rgb( 255, 255, 0)');
    }
move() {
  this.topX += random(-this.shift, this.shift);
  this.topY += random(-this.shift, this.shift);
}
display() {
    noStroke();
  fill(this.color);
  rotate( random( 0, 360) );
  triangle( this.topX, this.topY, this.leftX, this.leftY, this.rightX, this.rightY);
  this.topX += 1
  this.topY += 1
  }
}