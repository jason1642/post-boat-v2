import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import axios from 'axios'
const app = express();

const baseUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3880' : 'http://localhost:3880';
const api = axios.create({
  baseURL: baseUrl 
})  

console.log(process.env.NODE_ENV)
// io is being used as a middleware on the messages path, so the socketserver can run. Not sure if this works

export const socketServer = () => {

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
    origin: baseUrl,
    methods: ["GET", "POST"],
    credentials: true
    }
})
server.listen(3880, () => console.log(`Server running on port 8080`))

  console.log('this is the socket server')
  io.on('connection', (socket) => {
    console.log('A user connected');
    // Public chat only, room chats emit via chat-room router
    socket.on('sent message', async (arg) => {
      await api.post(`/api/chat_room/message/${arg.room_id}`, arg);
  
    
    })
    socket.on('disconnect', (socket) => {
      console.log('A user has disconnected')
    })

    // Simple join chat room via route room_id parameter, see room-chat router
    socket.on('join chatroom', (room) => {
      socket.join(room)
    })


    
  })


  io.listen(8080, console.log('listening on port 8080'))
  // socket.on("connect_error", (err) => {
  //   console.log(`connect_error due to ${err.message}`);
  // });



}