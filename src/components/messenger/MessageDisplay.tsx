import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'

interface IMessageDisplayProps {
  currentUser: any,
}
const styles = {
  container: {
    border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
  },
  
}
const MessageDisplay: React.FunctionComponent<IMessageDisplayProps> = ({currentUser}) => {

  useEffect(() => {
    console.log(currentUser)
  }, []);

  return (
    <Container style={styles.container}>
      <div>This is the message display</div>
      {currentUser.private_messages.length === 0 ? <>You have no chats yet</>
        :
        currentUser.private_messages.map(ele=><>A chat with a specific user</>)
        }
    </Container>
  );
};

export default MessageDisplay;
