import * as React from 'react';
import MessageDisplay from './MessageDisplay.tsx'
import Header from './Header.tsx'
import TextInput from './TextInput.tsx'
// import Container from '@mui/material/Container'
import styled from 'styled-components';
interface IMainProps {
  currentChat: any,
  currentUser: any,
  socket: any,
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

const Main: React.FunctionComponent<IMainProps> = ({currentChat, updateMessageHistory, currentUser, socket, messageHistory}) => {
  return (<Container >
    {currentChat ? <>
    <Header currentChat={currentChat}/>
    <MessageDisplay messageHistory={messageHistory} socket={socket} currentUser={currentUser} currentChat={currentChat} /> 
    <TextInput updateMessageHistory={updateMessageHistory} currentChat={currentChat} currentUser={currentUser} socket={socket} />
      </>
      : 
      <>
      
      </>
    }
    </Container>);
};

export default Main;
