let ship = {};
ship.posX = 0
ship.posY = 250
ship.cenX = 300

// Set global variables
let starX;
let starY;
let starSize = 3;
// Set how far appart a star can be placed
// from the star created before it. 
let starMaxMove = 75;

function setup() {
    createCanvas( windowWidth, 600 );
    background( 'rgb( 0, 0, 35)' );
    
    starX = width * 0.5;
    starY = height * 0.5;
}

function draw() {
    
    let leftWall = 50;
    let rightWall = windowWidth - ship.cenX;

  // cs is the mouseX, but constrained
  // between the leftWall and rightWall!
  let cs = constrain(mouseX, leftWall, rightWall);


  // Draw xm and xc as circles.
    noStroke();
    fill( 125);
    rect( cs, ship.posY, ship.posY, 100, 10);


    ship.posX += 1;
    ship.posX %= width;
    ship.posX = ship.posX + 1
    pop();

// Generate stars in relation to the middle of the screen
translate( starX, starY);

    // Allowing these variables to loop random arguments
    // between 0 and 256
    let red = floor( random(256) );
    let green = floor( random(256) );
    let blue = floor( random(256) );

    push();
    noStroke();
    fill( red, green, blue);
    ellipse( starY, starY, starSize);
    // This seems to keeps the stars generating on the screen more often
    starX = starX % width
    starY = starY % height
    // This will randomize the position of the stars
    starX += random( starMaxMove % -windowWidth, -starMaxMove % windowHeight );
    starY += random( -starMaxMove % windowWidth, starMaxMove % -windowHeight );
    pop();
}
