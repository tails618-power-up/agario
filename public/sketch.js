//CLIENT
let socket;
let player;
let zoom = 1;


function setup(){
    createCanvas(800,800);
    player = new Blob(0,0,30, "#ffff00");

    
    socket = io.connect('http://localhost:3000');
    socket.on("foods", (foods) => {
        console.log(foods);
        /*fill(255,0,0);
        ellipse(data.x, data.y, 20,20);*/
        for (let i = 0; i < foods.length; i++){
            food = new Blob(foods[i][0], foods[i][1], 10, "random")
            food.show();
            /*if(player.can_eat(foods[i])){
                foods.splice(i,1);
            }*/
        }
    })
}

function draw(){
    //background(255);
    fill(220);
    //rect(-4*width, -4*height, 8*width, 8*height);

    translate(width/2, height/2);
    let newzoom = 30/player.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom);
    translate(-player.pos.x, -player.pos.y);

    /*for (let i = 0; i < foods.length; i++){
        foods[i].show();
        if(player.can_eat(foods[i])){
            foods.splice(i,1);
        }
    }*/
    player.update();
    player.constrain(-4*width, 4*width, -4*height, 4*height);
    player.show();
}