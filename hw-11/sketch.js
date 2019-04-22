let tri = {};
tri.topX = 10
tri.topY = 10
tri.leftX = 0
tri.leftY = 20
tri.rightX = 20
tri.rightY = 20

    



function setup() {
    createCanvas( 400, 400);
    frameRate(2);
}

function draw() {
    translate( 100, 100);
    angleMode( DEGREES);
    background( 'blue');
    
    noStroke();
    fill( 'yellow');
    rotate( random( 15, 45) );
    triangle( tri.topX, tri.topY, tri.leftX, tri.leftY, tri.rightX, tri.rightY);
}