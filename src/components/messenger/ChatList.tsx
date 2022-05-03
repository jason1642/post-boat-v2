import * as React from 'react';
import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Typography from '@mui/material/Typography'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Badge from '@mui/material/Badge'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { UserListSkeleton } from './Skeletons.jsx'
import moment from 'moment'
// import ListUserCard from './ListUserCard.tsx'
// import axios from 'axios'
import Avatar  from '@mui/material/Avatar';


interface IChatListProps {
  chatListUsersData: any,
  handleChangeCurrentChat: Function,
}
const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: ${({theme})=>theme.text};
`;
const styles = {
  container: {
    border: '1px solid grey',
    minWidth: '20%',
    padding: '5px',
    borderRadius: '5px',
  },
  
}
const ChatList: React.FunctionComponent<IChatListProps> = ({ handleChangeCurrentChat, chatListUsersData }) => {
  // console.log(chatListUsersData)
  return (
    <List style={styles.container}>
      
      {
        chatListUsersData.length > 0 ? 
          chatListUsersData.map(ele =>
        <LinkWrapper to={`/messenger/${ele._id}`}>
            <ListItemButton
              key={ele._id}
              // sx={{'&:hover': {cursor: 'pointer'}}}
              onClick={()=>handleChangeCurrentChat(ele)}
              alignItems='flex-start' >
              
              
              <ListItemAvatar>
              <Badge color={ele.active ? 'success' : 'warning'} variant='dot' overlap='circular' badgeContent={''} >

                <Avatar sx={{ bgcolor: ele.preferences.avatar_color }}>{ele.username.split('')[0].toUpperCase()}</Avatar>
              </Badge>
              </ListItemAvatar>
              <ListItemText
                
                primary={ele.username}
                secondary={<Typography
                sx={{fontSize: '.7rem'}}
                >Last online: {moment(ele.updated_at).calendar()}</Typography>}
              
              />
            </ListItemButton>
            </LinkWrapper>
            // <ListUserCard key={ele._id} userData={ele} />
          )
          : <UserListSkeleton />
    }
    </List>)
};

export default ChatList;
