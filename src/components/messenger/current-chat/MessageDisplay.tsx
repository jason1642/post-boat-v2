import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import SingleMessage from './SingleMessage.tsx';
import _ from 'lodash'
interface IMessageDisplayProps {
  currentUser: any,
  currentChat: any,
  socket: any,
  messageHistory: any,
}
const styles = {
  container: {
    border: '1px solid grey',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    height: 'auto',
    overflowY: 'scroll',
    width: '100%',
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'red',
      color: 'red',
      width: '0.4em'

    }
  },
  
}
const MessageDisplay: React.FunctionComponent<IMessageDisplayProps> = ({currentChat, currentUser, socket, messageHistory}) => {
 

  console.log(messageHistory)
  return (
    <Container style={styles.container}>
     <div>This is the start of your conversation</div>
      {
        messageHistory ? messageHistory.map(ele =>
          <SingleMessage key={ele._id} currentUser={currentUser} currentChat={currentChat} messageData={ele} />)
          : (<>No messages</>)
      }
      
    </Container>
  );
};

export default MessageDisplay;
