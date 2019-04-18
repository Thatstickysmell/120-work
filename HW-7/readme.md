Zach Kessler, HW-7 Creative Coding 1

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

## This is  a rundown of  how the bouncing ball code works.
- Line 3 creates the objects `ball`.
- Lines 4 through 10 are variables within the object.
- Lines 12 through 15 create our canvas and determine the size  and background color of the canvas.
- Line 19 starts a looping draw functions.
- Lines 21 and 22 move the ball over 1 pixel and down 1 pixel every frame.
- Line 25 sets the width boundary for the bouncy ball with true and false statements.
- Line 26 is the result of this if statement if the statement is true.
If this statement,  is true, then `ball.delta_x`,  is now   `ball.delta_x = -1 * ball.delta_x`.  This will bounce the ball on the left and right boundaries.
- Line 28 sets the height boundary for the bouncing ball using true and false statements.
- Line 29 will follow the same procedure as line 26, except this will apply to the up and down boundaries.
-Line 32 will fill objects white.
- Line 33 draws a circle and its'
parameters include variables to determine its size and positioning.
- Line 36 makes something happen when the mouse is pressed.
- Lines 37 and 38 is the result of what happens when the mouse is pressed. in this case, when the mouse is pressed, the computer looks at the parameters and finds what it is we are trying to alter, which is `mouseX` and `mouseY`. Then the computer looks at its current parameters and then changes the pattern based on our last 2 parameters that were added.


## How did I alter the sketch?
I altered this sketch by erasing the ball every frame. Then I made the background color change from white to black every time the ball reached the center of the canvas. Additionally, I have set it up so that every time the background is white, the ball is black, and everytime the background is black, the ball is white. I have also changed the speed of the bouncing ball.
