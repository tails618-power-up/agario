let player;
let foods = [];
let zoom = 1;


function setup(){
    createCanvas(800,800);
    player = new Blob(0,0,30, "#ffff00");

    for (let i = 0; i < 500; i++){
        let foodx = random(-4 * width, 4*width);
        let foody = random(-4*height, 4*height);
        foods[i] = new Blob(foodx, foody, 10, "random");
    }
}

function draw(){
    background(255);
    fill(220);
    rect(-4*width, -4*height, 8*width, 8*height);

    translate(width/2, height/2);
    let newzoom = 30/player.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom);
    translate(-player.pos.x, -player.pos.y)

    for (let i = 0; i < foods.length; i++){
        foods[i].show();
        if(player.can_eat(foods[i])){
            foods.splice(i,1);
        }
    }
    player.update();
    player.constrain(-4*width, 4*width, -4*height, 4*height);
    player.show();
}