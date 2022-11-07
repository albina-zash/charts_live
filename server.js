const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, { cors: { origin: '*' } });

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomColor = () => "#" + ((1<<24)*Math.random() | 0).toString(16);

io.on('connection', () => {
    setInterval(() => {
        let data = [
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 30), color : getRandomColor(), label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 25), color : getRandomColor(), label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 20), color : getRandomColor(), label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 15), color : getRandomColor(), label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 10), color : getRandomColor(), label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 5), color : getRandomColor(), label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now()), color : getRandomColor(), label: "COIN"},
        ];
        console.log(data);
        io.sockets.emit('pushdata', data);
    },50000);
});


server.listen(5000, () => {
    console.log('listening on *:5000');
});

