import * as React from 'react';
import MessageDisplay from './MessageDisplay.tsx'
import Header from './Header.tsx'
import TextInput from './TextInput.tsx'
import Container from '@mui/material/Container'
interface IMainProps {
}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (<Container maxWidth='xl'>
    <Header />
    <MessageDisplay /> 
    <TextInput />
  </Container>);
};

export default Main;
