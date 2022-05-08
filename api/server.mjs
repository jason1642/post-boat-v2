import {app} from './app.mjs'
import 'dotenv/config';
import express from 'express'
import db from './database.mjs';
import path from 'path'
// import axios from 'axios'
// import http from 'http'
import { Server } from 'socket.io'
const port = process.env.PORT || 3880; 
console.log(port)
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://postboat.herokuapp.com' : 'http://localhost:3880';

// const api = axios.create({
//   baseURL: baseUrl 
// })  

db.connect()


if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));
}


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'), (err) => {
    if (err) {
      res.status(500).send(__dirname)
    }
  })
})
const server = app.listen(port, () => console.log('listening on port ' + port));






// const server = http.createServer(generalServer)
export const io = new Server(server, {
    cors: {
    origin: baseUrl,
    methods: ["GET", "POST"],
    credentials: true
    }
})


// server.listen(80, () => console.log(`Server running on port 8080`))
 io.use((socket, next) => {
    const user_id = socket.handshake.auth.user_id;
    console.log(user_id, 'this is the user id')
    if (!user_id) {
      return next(new Error("invalid username"));
    }
   socket.user_id = user_id;
  //  console.log(socket)
    next();
  });
// console.log('this is the socket server')
io.on('connection', (socket) => { 
  console.log('A user connected');
console.log(socket.user_id, 'this is the socket id  ')
  
  socket.join(socket.user_id)
  
  socket.on("private message", ({ content, to }) => {
    // console.log(content)
    socket.to(socket.user_id).emit("private message", { 
      content,
      from: socket.user_id,
      to
    });
  });


  socket.on('disconnect', () => {
    console.log('A user has disconnected')
    socket.removeAllListeners();

    socket.disconnect()
  })

  // Simple join chat room via route room_id parameter, see room-chat router
  socket.on('join chatroom', (room) => {
    socket.join(room)
  })



  
})







