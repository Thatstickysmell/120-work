function setup() {
   createCanvas(windowWidth, windowHeight);
   frameRate(20);
}

let bodyW = 40 // setting variable where bodyW stands for Body Width
let armSwingAngle = 0 

function draw() {
    background( 75);

   push();
    let squareX = windowWidth/2
    let squareY = windowHeight/2
    stroke( 213, 243, 15);
    strokeWeight(3);
    fill( 'yellow'); 
    rect( windowWidth/2, windowHeight/2, 20, 20);
    squareX = squareX + 1;
    squareY = squareY + 1;
    pop();

     armSwingAngle = armSwingAngle + 10
    // Creating a sandbox for the person.
    push();
    // Make the person follow the cursor
    translate( mouseX, mouseY) 

    // Arms
    strokeWeight( 10);
    // Right Arm
    push();
    translate( bodyW, 35);
    rotate( radians (armSwingAngle) ); 
    line( -5, 0, 125, 35);
    pop();
    // Left Arm
    push();
    translate( -bodyW, 35);
    rotate(radians (mouseX + mouseY) );
    line( 5, 0, -125, 35);
    pop();
    
    
    // Legs
    strokeWeight( 3);
    stroke( 'brown');
    fill( 'tan');
    triangle( -30, 135, -10, 320, -80, 320);
    triangle( 30, 135, 10, 320, 80, 320);
    
    // Body
    noStroke();
    fill( 0, 255, 0);
    rect( -40, -25, 80, 190);
    pop();
}
