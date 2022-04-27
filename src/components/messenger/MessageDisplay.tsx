import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'

interface IMessageDisplayProps {
}
const styles = {
  container: {
    border: '1px solid white',
    
  },
  
}
const MessageDisplay: React.FunctionComponent<IMessageDisplayProps> = (props) => {
  return (
    <Container style={styles.container}>
      This is the message display
    </Container>
  );
};

export default MessageDisplay;
