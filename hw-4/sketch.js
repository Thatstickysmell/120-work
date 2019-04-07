function setup() {
    // Setup basic elements

    createCanvas(500, 500);
    background( 'Purple');
    
    // Move everything to the center of the canvas
    translate( 250, 250);

    // Cape
    fill( '#ff8896');
    triangle( 0, -220, 200, 200, -200, 200,);
    // Arms
    push();
    strokeWeight( 15 );
    line( -200, 0, 200, 0,);
    // Thumbs
    stroke( 0, 0, 155);
    strokeWeight( 2 );
    fill( 'rgb( 99, 97, 198)');  
    ellipse( -205, -10, 10, 60);
    ellipse( 205, -10, 10, 60);
    // Hands
    fill( 'rgb( 99, 97, 148)');    
    strokeWeight( 0 );                                                                                                                                                                                                                                                                   
    ellipse( -200, 0, 40, 50);
    ellipse( 200, 0, 40, 50);
    pop();
// Body
push();
noStroke();
fill( 'rgb( 45, 140, 100)');
rect( -50, -100, 100, 300,);
fill( 'rgb( 145, 40, 100)');
rect( -40, -80, 80, 300, 4);
fill( 'rgb( 145, 40, 255)');
rect( -30, -60, 60, 300, 8);
fill( 'rgb( 145, 170, 255)');
rect( -20, -40, 40, 280, 16);
pop();
// Head
push();
fill( 'rgb( 200, 200, 200)');
ellipse( 0, -150, 170, 150);
// Eyes
strokeWeight( 20 );
point( -50, -175);
point( 50, -175);
// Hair
push();
noStroke();
fill( 'orange');
quad( -60, -240, 60, -220, 80, -200, -80, -200)
pop();
strokeWeight( 1 );
// Mouth
fill( ' lightgreen');
arc( 0, -129, 70, 50, 0, PI, CHORD);
pop();

// Feet
push();
strokeWeight( 15 );
fill( 'grey');
triangle( 0, 150, 200, 240, -200, 244);
strokeWeight( 3 );
line( 0, 150, 0, 250);
pop();
}