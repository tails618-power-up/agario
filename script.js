function draw(){
    background(100);
    /*if(mouseIsPressed){
        fill(0);
    }
    else{
        fill(255);
    }

    ellipse(mouseX, mouseY, 80, 80);
    
    fill(50);
    ellipse(mouseX+40, mouseY+40, 80, 80)*/
    strokeWeight(4);
    fill('#ffff00');
    ellipse(mouseX, mouseY, 80, 80);
    fill(0);
    ellipse(mouseX-10, mouseY-10, 5, 10);
    ellipse(mouseX+10, mouseY-10, 5, 10);
    noFill();
    arc(mouseX, mouseY+10, 20, 20, 0, PI, OPEN)
}
function setup(){
    createCanvas(600,400);
}