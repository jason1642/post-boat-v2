import * as React from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Typography from '@mui/material/Typography'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { UserListSkeleton } from './Skeletons.jsx'
// import ListUserCard from './ListUserCard.tsx'
// import axios from 'axios'
import Avatar  from '@mui/material/Avatar';


interface IChatListProps {
  chatListUsersData: any,
  handleChangeCurrentChat: Function,
}
const styles = {
  container: {
    border: '1px solid white',
    minWidth: '20%',
    padding: '5px',
  },
  
}
const ChatList: React.FunctionComponent<IChatListProps> = ({ handleChangeCurrentChat, chatListUsersData }) => {
  // console.log(chatListUsersData)
  return (
    <List style={styles.container}>
      
      {
        chatListUsersData.length > 0 ? 
          chatListUsersData.map(ele =>
            <ListItemButton
              key={ele._id}
              // sx={{'&:hover': {cursor: 'pointer'}}}
              onClick={()=>handleChangeCurrentChat(ele)}
              alignItems='flex-start' >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: ele.preferences.avatar_color }}>{ele.username.split('')[0].toUpperCase()}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={ele.username}
                secondary={<Typography
                >Last online: Now</Typography>}
              
              />
            </ListItemButton>
            
            // <ListUserCard key={ele._id} userData={ele} />
          )
          : <UserListSkeleton />
    }
    </List>)
};

export default ChatList;
