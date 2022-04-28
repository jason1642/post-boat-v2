import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import type UserModel from '../../types/user-interface.ts'
import ChatList from './ChatList.tsx'
import MessageDisplay from './MessageDisplay.tsx'
import io from 'socket.io-client'
interface IMessengerProps {
  currentUser: UserModel
}

const styles = {
  container: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '20px',
  border: '1px solid white',
  },
}


const Messenger: React.FunctionComponent<IMessengerProps> = ({currentUser}) => {
  const [socket, setSocket] = useState(null);
  const url = window.location.hostname === 'localhost' ? 'http://localhost:3880' : 'https://circle-chat1.herokuapp.com'
  
  useEffect(() => {
    // console.log(url)
    // var HOST = window.location.origin.replace(/^http/, 'ws')
    const newSocket = io(url, { transports: ["websocket"] } );
    setSocket(newSocket);
    console.log(newSocket)
    return () => 
      newSocket.close();
    
  }, []);

  useEffect(() => {
    // console.log(socket.connected)
  }, [socket]);
  
  return (
     <Container style={styles.container}  >
      <ChatList />
      <MessageDisplay /> 
    </Container>
  );
};

export default Messenger;
