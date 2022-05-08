import * as React from 'react';
import { useState, useEffect } from 'react';

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
  currentUser: any,
  currentChat: any,
}
const LinkWrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  margin: 1px 0px;
  height: 5rem;
  width: 100%;
  background-color: ${({theme})=>theme.cardBackground};

`;
const styles = {
  container: {
    border: '1px solid grey',
    minWidth: '20%',
    padding: '5px',
    borderRadius: '5px',
  },
  
}
// 
const checkListItemForNewMessage = (chatFriendData, currentUser) => { 
  // console.log(chatFriendData.private_messages.find(r => r.recipient === currentUser._id))
  const mutualChat = chatFriendData.private_messages.find(r => r.recipient === currentUser._id)
  const isNewMessage = mutualChat.messages.filter(e => {
    // console.log(e.seen_by_recipient)
    return e.seen_by_recipient && !e.seen_by_recipient.seen && (e.sender === chatFriendData._id)
  })
  return isNewMessage.length
}
  


const ChatList: React.FunctionComponent<IChatListProps> = ({currentChat, handleChangeCurrentChat, currentUser, chatListUsersData }) => {
  // console.log(chatListUsersData)
 
  return (
    <List
      sx={{width: 1/4}}
      style={styles.container}>
      
      {
        chatListUsersData && chatListUsersData.length > 0 ? 
          chatListUsersData.map(ele =>

            <Badge
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              color={'info'}
              sx={{ width: 1 }} 
              max={9}
              key={ele._id}
              onClick={()=>handleChangeCurrentChat(ele)}
              invisible={currentChat._id === ele._id ? true : false}
              badgeContent={checkListItemForNewMessage(ele, currentUser)} >
              <LinkWrapper
                
                to={`/messenger/${ele._id}`}>
            <ListItemButton
              sx={{backgroundColor: 'grey'}}
              
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
                >Last online: {ele.active ? 'Now' : moment(ele.updated_at).calendar()}</Typography>}
              
              />
            </ListItemButton>
              </LinkWrapper>
              </Badge>

            // <ListUserCard key={ele._id} userData={ele} />
          )
          : <UserListSkeleton />
    }
    </List>)
};

export default ChatList;
