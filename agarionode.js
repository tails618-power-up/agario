//SERVER
const expresslib = require("express");
const socketlib = require("socket.io")
const width = 800;
const height = 800;

let foods = [];

let app = expresslib();
let server = app.listen(3000);

app.use(expresslib.static("public"));

console.log("Server was started");

let io = socketlib(server);

io.sockets.on('connection', (socket) => {
    console.log("New client connection" + socket.id);

    socket.on("clientdraw", (data) => {
        console.log(data);
        // all other sockets
        socket.broadcast.emit("serverdraw", data);

        //all sockets including the one that sent the data
        //io.sockets.emit("serverdraw", data);")
    })
})

for (let i = 0; i < 500; i++){
    let foodx = Math.random() * (8 * width) - (4 * width);
    let foody = Math.random() * (8 * height) - (4 * height);
    //foods[i] = new Blob(foodx, foody, 10, "random");
}