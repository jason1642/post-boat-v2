import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import type UserModel from '../../types/user-interface.ts'
import ChatList from './ChatList.tsx'
import Main from './current-chat/Main.tsx'
import io from 'socket.io-client'
import { getChatListUserInfo } from '../api-helpers/user-api.ts';




interface IMessengerProps {
  currentUser: UserModel
}

const styles = {
  container: {
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  marginTop: '10px',
  border: '1px solid red',
  height: '85%',
    fontSize: '1.4rem',
  width: '95%',
  },
}

const Messenger: React.FunctionComponent<IMessengerProps> = ({currentUser}) => {
  const url = window.location.hostname === 'localhost' ? 'http://localhost:3880' : 'https://circle-chat1.herokuapp.com'
  const [socket, setSocket] = useState<any>(null);
  const [chatListUsersData, setChatListUsersData] = useState<Array<any>>()
  const [currentChat, setCurrentChat] = useState()
  


  
  useEffect(() => {
    const newSocket = io(url, { transports: ['websocket']})
    setSocket(newSocket)
    console.log(newSocket)
    return () => {
      newSocket.close()
    }
  }, []);

  useEffect(() => {
    // Get list of users info from private_messages list
    // Create handleCurrentChat to get latest chat by default, based on updated_on date from object
    getChatListUserInfo(currentUser._id).then(res => {
      console.log(res.data)
      setChatListUsersData(res.data)

      setCurrentChat(res.data[0])
    }, (err)=>console.log(err))
  }, []);
  

  const handleChangeCurrentChat = async (selectedUser: any) => {
    setCurrentChat(selectedUser)
    console.log(selectedUser)
  }



  return currentUser ? (
    <Container
      maxWidth='xl'
      style={styles.container} >
      {chatListUsersData ? <ChatList handleChangeCurrentChat={handleChangeCurrentChat} chatListUsersData={chatListUsersData} currentUser={currentUser} /> : <>No chats found</>}
      {currentChat ? <Main currentChat={currentChat} currentUser={currentUser} /> : <>No current chat</>}
    </Container>
  ) : 
    (<div>wewqe</div>)
};

export default Messenger;
