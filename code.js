var x = 200;
var y = 350;
var drawCharacter = function() {
    strokeWeight(5);
    stroke(255,0,0);
    arc(x,y,60,50,180,360);
    stroke(255, 170, 0);
    arc(x,y,50,40,180,360);
    stroke(255, 251, 0);
    arc(x,y,40,30,180,360);
    stroke(59, 219, 67);
    arc(x,y,30,20,180,360);
    stroke(59, 167, 217);
    arc(x,y,20,10,180,360);
    stroke(126, 60, 217);
    arc(x,y,10,0,180,360);
};

draw = function() {
    background(132, 137, 148);
    drawCharacter();
    if (keyCode === RIGHT){
        x++;
    } 
    if (keyCode === LEFT){
        x--;
    }
};
