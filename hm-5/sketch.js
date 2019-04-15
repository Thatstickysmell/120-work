function setup() {
   createCanvas(windowWidth, windowHeight);
   frameRate(20);
}

let bodyW = 40 // setting variable where bodyW stands for Body Width
let armSwingAngle = 0 // 

function draw() {
    background( 75);
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
    push();
    
    rotate(radians (mouseX + mouseY) );
    line( -bodyW, 35, -125, 35);
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
