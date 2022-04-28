import * as React from 'react';
import Container from '@mui/material/Container'
import axios from 'axios'


interface IChatListProps {

}
const styles = {
  container: {
    border: '1px solid white',
    width: '25%',
  },
  
}
const ChatList: React.FunctionComponent<IChatListProps> = (props) => {
  return (
    <Container style={styles.container}>
      
    This is the left side chat list of all current chats 

    </Container>)
};

export default ChatList;
