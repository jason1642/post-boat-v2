import * as React from 'react';
import MessageDisplay from './MessageDisplay.tsx'
import Header from './Header.tsx'
import TextInput from './TextInput.tsx'
// import Container from '@mui/material/Container'
import styled from 'styled-components';
interface IMainProps {
  currentChat: any,
  currentUser: any,
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
`;

const Main: React.FunctionComponent<IMainProps> = ({currentChat, currentUser}) => {
  return (<Container >
    <Header currentChat={currentChat}/>
    <MessageDisplay currentUser={currentUser} currentChat={currentChat} /> 
    <TextInput />
  </Container>);
};

export default Main;
