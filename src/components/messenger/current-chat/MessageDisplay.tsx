import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import SingleMessage from './SingleMessage.tsx';
import { getMessageHistory } from '../../api-helpers/user-api.ts'
import _ from 'lodash'
interface IMessageDisplayProps {
  currentUser: any,
  currentChat: any,
  socket: any,

}
const styles = {
  container: {
    border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    height: 'auto',
  },
  
}
const MessageDisplay: React.FunctionComponent<IMessageDisplayProps> = ({currentChat, currentUser, socket}) => {
  const [messageHistory, setMessageHistory] = useState<Array<any>>()
 
  useEffect(() => {
    // console.log(currentChat)
    getMessageHistory(currentUser._id, currentChat._id).then(res => {
      // console.log(res.data)
      setMessageHistory(res.data.messages)
      // socket.on('private message', ({ content, from }) => {
      //   console.log('An incoming message', content)
      // })
    }, err => console.log(err))

  }, [currentChat]);
 
  return (
    <Container style={styles.container}>
     
      {
        messageHistory ? messageHistory.map(ele =>
          <SingleMessage key={ele._id} currentUser={currentUser} currentChat={currentChat} messageData={ele} />)
          : (<>No messages</>)
      }
      
    </Container>
  );
};

export default MessageDisplay;
