////////// Array /////////////

let arr = 0;

let bgColor =  [ 'red', 'green', 'blue']

function setup() {
    createCanvas( windowWidth, 500);
}



function draw() {
   
    background( bgColor[arr]);
    eater(); 
    hotDog();
    arr = ( arr + 1) % bgColor.length;

}

/////////////// First Function //////////////////

function eater() {
    push(); 
    // Head
    fill( 'tan');
    noStroke(); 
    rect( 150, 50, 200, 400, 40);
    pop();

    // Nose
    push();
    noStroke();
    fill( 'tan');
    ellipse( 350, 250, 200);
    pop();

    push();
    // Nosteral
    fill(0);
    triangle( 370, 250, 395, 225, 395, 250);
    pop();

    // Lips
    push();
    noStroke();
    fill( 'pink');
    triangle( 250, 350, 350, 350, 325, 400);
    pop();

    // Mouth
    push();
    noStroke();
    fill( 255);
    triangle( 260, 353, 350, 350, 325, 400);
    pop();

    // Eye
    push();
    stroke(2);
    fill( 255);
    ellipse( 285, 140, 70, 50);
    push();
    fill( 'green');
    ellipse( 285, 140, 35, 25);
    pop();
    strokeWeight(5);
    point( 285, 140);
    pop();
    
    // Hat
    push();
    noStroke();
    fill('orange');
    rect(100, 25, 350, 50, 5);
    rect(125, 10, 200, 50);
    pop();
}

/////////////////// Second Function /////////////////////
function hotDog () {

    push();
    fill( 'rgb( 238, 178, 88)');
    ellipse( mouseX, mouseY, 200, 80);
    push();
    noStroke();
    fill( 'rgb( 255, 86, 67)');
    rect( mouseX + 125, mouseY + 5, -250, -10, );
    pop();
    pop();

}