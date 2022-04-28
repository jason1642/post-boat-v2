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
const MessageDisplay: React.FunctionComponent<IMessageDisplayProps> = ({}) => {

  useEffect(() => {
    // console.log(currentUser)
  }, []);
 
  return (
    <Container style={styles.container}>
     
      <div>Messages</div>
      
    </Container>
  );
};

export default MessageDisplay;
