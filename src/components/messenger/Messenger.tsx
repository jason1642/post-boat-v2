import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import type UserModel from '../../types/user-interface.ts'
import ChatList from './ChatList.tsx'
import MessageDisplay from './MessageDisplay.tsx'
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
  
  
  return (
     <Container style={styles.container}>
      <ChatList />
      <MessageDisplay /> 
    </Container>
  );
};

export default Messenger;
