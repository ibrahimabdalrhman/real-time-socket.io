const express = require('express');
const app = express();
const path=require('path')
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


io.on("connection", (socket) => {
    io.emit('chat message','New User Connected')
  socket.on("chat message", (msg) => {
          io.emit("chat message", msg);

  });
});



server.listen(3000, () => {
    console.log("Server Running on port 3000");
});