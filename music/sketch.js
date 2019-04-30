var playE;
var playG;
var playB;
var playD;
var playF;

let size = 50
let lineE = 300
let lineG = 240
let lineB = 180
let lineD = 120
let lineF = 60
function setup() {
    createCanvas( 525, 400);
    playE = new p5.Oscillator();
    playE.setType('sine');
    playE.amp(0.5);
    playE.freq(20);
    playE.start();

    playG = new p5.Oscillator();
    playG.setType('sine');
    playG.amp(0.5);
    playG.freq(24.5);
    playG.start();

    playB = new p5.Oscillator();
    playB.setType('sine');
    playB.amp(0.5);
    playB.freq(30.8);
    playB.start();

    playD = new p5.Oscillator();
    playD.setType('sine');
    playD.amp(0.5);
    playD.freq(36.7);
    playD.start();

    playF = new p5.Oscillator();
    playF.setType('sine');
    playF.amp(0.5);
    playF.freq(43.6);
    playF.start();
        
       
}

function draw() {
    background(0);
    scoreLines();
    noteE();
    noteA();
    noteB();
    noteD();
    noteHighE();

}

function scoreLines() {
stroke(255);
strokeWeight(5);
line(0, lineF, windowWidth, lineF);
line(0, lineD, windowWidth, lineD);
line(0, lineB, windowWidth, lineB);
line(0, lineG, windowWidth, lineG);
line(0, lineE, windowWidth, lineE);
}
function noteE(){
fill(255);
ellipse( 50, lineE, size);
line( 75, lineE, 75, lineE - 80);
}

function noteA(){
fill(255);
ellipse( 150, lineG - 30, size);
line( 175, lineG - 30, 175, 130);
}

function noteB() {
fill(255);
ellipse( 250, lineB, size);
line( 275, lineB, 275, 100);
}

function noteD() {
    fill(255);
    ellipse( 350, lineD, size);
    line( 375, lineD, 375, lineD - 80);
}

function noteHighE() {
fill(255);
ellipse( 450, lineF, size);
line( 475, lineF, 475, lineF - 80);
}

