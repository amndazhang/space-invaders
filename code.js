var x = 0;
draw = function() {
    background(255, 0, 0);
    
    // snowman
    strokeWeight(5);
    ellipse(200,80,60,60);
    ellipse(200,150,80,80);
    ellipse(200,240,100,100);
    line(100,80,160,150);
    line(300,80,240,150);
    
    // moving circle
    ellipse(x,300,20,20);
    x+=5;
};
