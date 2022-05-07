import * as React from 'react';
import { useState, useEffect } from 'react';

import MessageDisplay from './MessageDisplay.tsx'
import Header from './Header.tsx'
import TextInput from './TextInput.tsx'
// import Container from '@mui/material/Container'
import styled from 'styled-components';
interface IMainProps {
  currentChat: any,
  currentUser: any,
  socket: any,
  didLoad: Boolean,
  messageHistory: any,
  updateMessageHistory: Function,

}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
`;

const Main: React.FunctionComponent<IMainProps> = ({currentChat, didLoad, updateMessageHistory, currentUser, socket, messageHistory}) => {
  useEffect(() => {
    // console.log(messageHistory)
  }, [messageHistory]);
      // console.log(messageHistory)

  return (<Container >

      <Header currentChat={currentChat} />
      
      <MessageDisplay
        didLoad={didLoad}
        messageHistory={messageHistory}
        currentUser={currentUser}
        currentChat={currentChat} /> 
      
      <TextInput
        updateMessageHistory={updateMessageHistory}
        currentChat={currentChat}
        currentUser={currentUser}
        socket={socket} />

    </Container>);
};

export default Main;
