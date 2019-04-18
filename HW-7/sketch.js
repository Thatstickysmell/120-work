

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    if ( ball.y > height / 2) {
        background(0);
    } else {
        background(255);
    }
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    if ( ball.y >= height / 2) {
        fill (255);
    } else {
        fill(0);
     }

    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 5, 21);
    ball.scale_y = map(mouseY, 0, height, 5, 11);
}
