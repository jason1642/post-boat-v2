import {app} from './app.mjs'
import 'dotenv/config';
import db from './database.mjs';
import axios from 'axios'
import http from 'http'
import { Server } from 'socket.io'
const port = 3880; 
// console.log(io)
const baseUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3880' : 'http://localhost:3880';

// const api = axios.create({
//   baseURL: baseUrl 
// })  



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
   console.log(socket)
    next();
  });
// console.log('this is the socket server')
io.on('connection', (socket) => {
  console.log('A user connected');
console.log(socket.user_id, 'this is the socket id  ')
  
  socket.join(socket.user_id)
  
  socket.on("private message", ({ content, to }) => {
    console.log(socket.user_id, to)
    socket.to(to).to(socket.user_id).emit("private message", { 
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



db.connect()

  