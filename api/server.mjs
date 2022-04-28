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
const io = new Server(server, {
    cors: {
    origin: baseUrl,
    methods: ["GET", "POST"],
    credentials: true
    }
})


// server.listen(80, () => console.log(`Server running on port 8080`))

// console.log('this is the socket server')
io.on('connection', (socket) => {
  console.log('A user connected');
  // Public chat only, room chats emit via chat-room router
  // socket.on('sent message', async (arg) => {
  //   await api.post(`/api/chat_room/message/${arg.room_id}`, arg);

  
  // })
  socket.on('disconnect', (socket) => {
    console.log('A user has disconnected')
  })

  // Simple join chat room via route room_id parameter, see room-chat router
  socket.on('join chatroom', (room) => {
    socket.join(room)
  })


  
})


db.connect()

  