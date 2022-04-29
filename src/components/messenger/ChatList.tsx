import * as React from 'react';
import Container from '@mui/material/Container'
import axios from 'axios'


interface IChatListProps {
  chatListUsersData: any,
}
const styles = {
  container: {
    border: '1px solid white',
    width: '25%',
  },
  
}
const ChatList: React.FunctionComponent<IChatListProps> = ({chatListUsersData}) => {
  return (
    <Container style={styles.container}>
      
    This is the left side chat list of all current chats 
      {
        chatListUsersData.length > 0 ? 
          chatListUsersData.map(ele => <div>ele.</div>)
          : <div>None found</div>
    }
    </Container>)
};

export default ChatList;
