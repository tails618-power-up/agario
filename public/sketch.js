//CLIENT
let socket;
let player;
let zoom = 1;
let foodList = [];

function setup(){
    createCanvas(800,800);
    player = new Blob(0,0,30, "#ffff00");

    
    socket = io.connect('http://localhost:3000');
    
    window.setInterval(sendposition, 100);
    socket.on("foods", (foods) => {
        
        console.log(foods);
        /*fill(255,0,0);
        ellipse(data.x, data.y, 20,20);*/
        for(let foodItem in foods){
            food = new Blob(foods[foodItem][0], foods[foodItem][1], 10, foods[foodItem][2], foods[foodItem][3]);
            foodList.push(food);
            console.log(food);
            /*if(player.can_eat(foods[i])){
                foods.splice(i,1);
            }*/
        }
    })
}



function sendposition(){
    console.log(player.pos);
    let data = {
        x: player.pos.x,
        y: player.pos.y,
        size: player.r,
        color: player.color
    }
    socket.emit("playerposition", data);
}

function draw(){
    background(255);
    fill(220);
    rect(-4*width, -4*height, 8*width, 8*height);

    translate(width/2, height/2);
    let newzoom = 30/player.r;
    zoom = lerp(zoom, newzoom, 0.1);
    scale(zoom);
    translate(-player.pos.x, -player.pos.y);

    for (let i = 0; i < foodList.length; i++){
        foodList[i].show();
        if(player.can_eat(foodList[i])){
            let data = {
                id: foodList[i].id
            }
            socket.emit("removeBlob", data);
            foodList.splice(i,1);
        }
    }
    player.update();
    player.constrain(-4*width, 4*width, -4*height, 4*height);
    player.show();
}