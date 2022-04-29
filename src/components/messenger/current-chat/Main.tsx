import * as React from 'react';
import MessageDisplay from './MessageDisplay.tsx'
import Header from './Header.tsx'
import TextInput from './TextInput.tsx'
// import Container from '@mui/material/Container'
import styled from 'styled-components';
interface IMainProps {
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;
`;

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (<Container >
    <Header />
    <MessageDisplay /> 
    <TextInput />
  </Container>);
};

export default Main;
