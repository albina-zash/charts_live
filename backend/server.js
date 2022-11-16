const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, { cors: { origin: '*' } });

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

io.on('connection', (socket) => {
    setInterval(() => {
        let data = [
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 30), color : "green", label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 25), color : "green", label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 20), color : "green", label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 15), color : "green", label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 10), color : "green", label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now() - 1000 * 5), color : "green", label: "COIN"},
            {number: getRandomInt(1, 100), time: new Date(Date.now()), color : "green", label: "COIN"},
        ];

        socket.emit('pushdata', data);
    },5000);
});


server.listen(5000, () => {
    console.log('listening on *:5000');
});

