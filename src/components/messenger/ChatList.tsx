import * as React from 'react';
import Container from '@mui/material/Container'
import { UserListSkeleton } from './Skeletons.jsx'
import ListUserCard from './ListUserCard.tsx'
import axios from 'axios'


interface IChatListProps {
  chatListUsersData: any,
}
const styles = {
  container: {
    border: '1px solid white',
    width: '25%',
    padding: '5px',
  },
  
}
const ChatList: React.FunctionComponent<IChatListProps> = ({ chatListUsersData }) => {
  console.log(chatListUsersData)
  return (
    <Container style={styles.container}>
      
      {
        chatListUsersData.length > 0 ? 
          chatListUsersData.map(ele => <ListUserCard key={ele._id} userData={ele} />)
          : <UserListSkeleton />
    }
    </Container>)
};

export default ChatList;
