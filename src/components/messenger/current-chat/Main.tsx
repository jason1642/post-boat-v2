import * as React from 'react';
import MessageDisplay from './MessageDisplay.tsx'
import Header from './Header.tsx'
import TextInput from './TextInput.tsx'
interface IMainProps {
}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (<div>
    <Header />
    <MessageDisplay /> 
    <TextInput />
  </div>);
};

export default Main;
