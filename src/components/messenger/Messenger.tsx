import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import type UserModel from '../../types/user-interface.ts'
import ChatList from './ChatList.tsx'
import Main from './current-chat/Main.tsx'
import io from 'socket.io-client'
import { getChatListUserInfo, getMessageHistory } from '../api-helpers/user-api.ts';

interface IMessengerProps {
  currentUser: UserModel
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  position: 'relative',
  flexDirection: 'row',
  marginTop: '10px',
  border: '1px solid red',
  height: '85%',
  fontSize: '1.4rem',
    // width: '95%',
  maxWidth: '95vw',
  },
}

const Messenger: React.FunctionComponent<IMessengerProps> = ({currentUser}) => {
  const url = window.location.hostname === 'localhost' ? 'http://localhost:3880' : 'https://circle-chat1.herokuapp.com'
  const [socket, setSocket] = useState<any>(null);
  const [chatListUsersData, setChatListUsersData] = useState<Array<any>>()
  const [currentChat, setCurrentChat] = useState<any>()
  const [messageHistory, setMessageHistory] = useState<Array<any>>()


  // To create private messaging
  // 1 When a user connects, store their connection in an object keyed by their username or any other data structure that ensures you can find a specific users connection
  // 2 When one users wants to message another, send the server an even stating such
  // 3 The server looks up jeffs socketio connection in the object from step 1
  // 4 The server uses this connection to send the user(and only that users) the private message
  
  useEffect(() => {
    // autoConnect is set to false so the connection is not established right away,
    // so I can manually call socket.connect()
    const newSocket = io(url, { transports: ['websocket'], autoConnect: false})
    setSocket(newSocket)
    console.log(currentUser)
    newSocket.auth = { user_id: currentUser._id}
    newSocket.connect()    
    newSocket.onAny((event, ...args) => {
      console.log(event, args);
    });
    newSocket.on(currentUser._id, ({ content, from }) => {
      console.log(content, from)
      setMessageHistory(prev=> [...prev, content])
      console.log(messageHistory)
    });
    return () => {  newSocket.close() }
  }, []);

  useEffect(() => {
    console.log(socket)
  }, [socket]); 
  useEffect(() => {
    // Get list of users info from private_messages list
    // Create handleCurrentChat to get latest chat by default, based on updated_on date from object
    getChatListUserInfo(currentUser._id).then(res => {
      // console.log(res.data)
      setChatListUsersData(res.data)

      setCurrentChat(res.data[0])
    }, (err)=>console.log(err))
  }, []);
  

  const handleChangeCurrentChat = async (selectedUser: any) => {
    setCurrentChat(selectedUser)
    // console.log(selectedUser)
  }

  useEffect(() => {
    console.log(messageHistory)
    if (currentChat) {
      getMessageHistory(currentUser._id, currentChat._id).then(res => {
        // console.log(res.data)
        setMessageHistory(res.data.messages)
        // socket.on('private message', ({ content, from }) => {
        //   console.log('An incoming message', content)
        // })
      
      }, err => console.log(err))
    }
  }, [currentChat]);
  const updateMessageHistory = (message) => {
    setMessageHistory(prev=> [...prev, message])
  } 
  return currentUser ? (
    <Container
      maxWidth='xl'
      style={styles.container} >
      {chatListUsersData ? <ChatList handleChangeCurrentChat={handleChangeCurrentChat} chatListUsersData={chatListUsersData} currentUser={currentUser} /> : <>No chats found</>}
      {currentChat ? <Main updateMessageHistory={updateMessageHistory} messageHistory={messageHistory} socket={socket} currentChat={currentChat} currentUser={currentUser} /> : <>No current chat</>}
    </Container>
  ) : 
    (<div>wewqe</div>)
};

export default Messenger;
