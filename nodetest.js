const expresslib = require("express");
const socketlib = require("socket.io")

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

/*
let sum = 0;
for (let i = 0; i < 20; i++){
    console.log(i);
    sum += i;
}
console.log(sum);
*/