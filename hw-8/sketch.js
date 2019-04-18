// Create canvas with blue background that fits the screen.  

function setup() {
    createCanvas( windowWidth, windowHeight);
    background( 'blue');
}

// Over is my "X" value and down is my "Y" value. 
function draw() {
    let over = 10
    let down = 10

    // This basicly says that while our variable, "over", is less
    // than or equal to the width of the screen, then a 
    // rectangle will be drawn. 
    while ( over <= width) {
        fill(255);
        rect( over, down, over, down, 2);
        over = over + 10 // This line creates a new rectangle every frame that is 10 pixels to the left. 
        
    }
    // This says that as long as "x" is less than or equal
    // to the width of th screen, 
    // then a retangle will be drawn halfway down the screen. 
     for ( x = 0; x <= width; x += 10) {
        fill( random( 255) ); // Creating a random color for the rectangle loop.
        rect( 0, height / 2, over, down);
    }
    // The same is done here, except there is not random color
    // and it is at the bottom of the screen. 
        for ( x2 = 0; x2 <= height; x2 += 10) {
        fill(127); 
        rect( 0, height - 20, over, down);
        }

    }


