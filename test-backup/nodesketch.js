//CLIENT
let socket;

function setup(){
    createCanvas(400,400);
    background(100);
    socket = io.connect('http://localhost:3000');

    socket.on("serverdraw", (data) => {
        console.log("other client: " + data.x + "," + data.y);
        fill(255,0,0);
        ellipse(data.x, data.y, 20,20);
    })
}

function mouseDragged(){
    
    let data = {
        x: mouseX,
        y: mouseY
    }
    
    console.log(data);
    socket.emit("clientdraw", data);

    
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX,mouseY,20,20);
}