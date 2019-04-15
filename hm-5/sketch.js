function setup() {
   createCanvas(windowWidth, windowHeight);
   frameRate(20); // Change regular frame rate
   noCursor(); // remove cursor
}

let bodyW = 40 // setting variable where bodyW stands for Body Width
let armSwingAngle = 0;

function draw() {
    background( 75);
    
     // Sandbox the yellow square
    push(); 
    stroke( 213, 243, 15);
    strokeWeight(3);
    fill( 'yellow'); 
    // Place square origin
    rect( windowWidth/2, windowHeight/2, 20, 20);
    // Erase and redraw the yellow square for every draw loop
    // over one pixel and down two pixels
    windowWidth = windowWidth + 1
    windowHeight = windowHeight + 2
    pop();

    // Create movement for the right arm
     armSwingAngle = armSwingAngle + 10

    // Creating a sandbox for the person
    push();
    // Make the person follow the cursor
    translate( mouseX, mouseY) 
    
    // Legs
    strokeWeight( 3);
    stroke( 'brown');
    fill( 'tan');
    triangle( -30, 135, -10, 320, -80, 320);
    triangle( 30, 135, 10, 320, 80, 320);
    
    // Body
    noStroke();
    fill( 0, 255, 0);
    rect( -bodyW, -25, bodyW * 2, 190);

    // Head
    push();
    strokeWeight(10);
    stroke( 0, 0, 0);
    fill( 255, 255, 255,);
    ellipse( 0, -40, 100); 
    // Eyes
    strokeWeight(10);
    point( -20, -60);
    point( 20, -60);
    // Mouth
    strokeWeight(10);
    fill( 'red');
    quad( -20, -30, 20, -30, 18, 22, -18, 22);

    // Arms
    strokeWeight( 10);
    // Right Arm
    push();
    // Using the translate function and variables to draw arms in relation to the body
    translate( bodyW, 35);
    // Apply swinging arm variable to the line
    rotate( radians (armSwingAngle) ); 
    line( -5, 0, 125, 35);
    pop();
    // Left Arm
    push();
    translate( -bodyW, 35);
    // Allowing the left arm to move based on how you
    // move the "cursor"
    rotate(radians (mouseX + -mouseY) );
    line( 5, 0, -125, 35);
    pop();
    pop();
}
