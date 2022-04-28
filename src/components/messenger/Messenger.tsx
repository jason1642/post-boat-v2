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
  const [socket, setSocket] = useState<any>(null);
  const url = window.location.hostname === 'localhost' ? 'http://localhost:3880' : 'https://circle-chat1.herokuapp.com'




  
  useEffect(() => {
    const newSocket = io(url, { transports: ['websocket']})
    setSocket(newSocket)
    return () => {
      newSocket.close()
    }
  }, []);

  useEffect(() => {

  }, []);
  
  return currentUser ? (
     <Container style={styles.container} >
      <ChatList currentUser={currentUser}/>
      <MessageDisplay currentUser={currentUser}/> 
    </Container>
  ) : 
    (<>wewqe</>)
};

export default Messenger;
