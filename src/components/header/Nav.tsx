import * as React from 'react';
import { useState, useEffect } from 'react';
import { removeToken } from '../api-helpers/user-api.ts'
import { List, Item } from '../../styles/nav.js'
import { getChatListUserInfo } from '../api-helpers/user-api.ts';
import { useLocation } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineMessage,
  AiFillMessage,
} from 'react-icons/ai/index.js'
import {BiLogOut} from 'react-icons/bi/index.js'
import {
  IoPersonOutline,
  IoPersonSharp,
  IoLogOutSharp
} from 'react-icons/io5/index.js'
interface INavProps {
  theme: string,
  currentUser: any,
}


const handleLogout = (user_id) => {
  localStorage.clear();
  removeToken({user_id});
 
  window.location.reload();
}



const Nav: React.FunctionComponent<INavProps> = ({ theme, currentUser }) => {
  const location = useLocation()

  const [newMessages, setNewMessages] = useState(0)

  const checkNewMessages = async (currentUser) => {
    await getChatListUserInfo(currentUser._id).then(res => {
      res.data.forEach(ele => {
        const mutualChat = ele.private_messages.find(r => r.recipient === currentUser._id)
        const isNewMessage = mutualChat.messages.filter(e => {
        return e.seen_by_recipient && !e.seen_by_recipient.seen && (e.sender === ele._id)
        })
        setNewMessages(prev=>prev + isNewMessage.length)
      })
    })
  }
  
  useEffect(() => {

    let intervalId
    setNewMessages(0)
    if (location.pathname.split('/')[1] !== 'messenger') {
      
      // intervalId = setInterval(() => {
         checkNewMessages(currentUser)
      //   console.log('string')
      // }, 1000 * 5)
    }
    
  
     
      return () => clearInterval(intervalId)
  


  }, [location]);

  useEffect(() => {
    // console.log(newMessages)
    if (location.pathname.split('/')[1] !== 'messenger') {    
         checkNewMessages(currentUser)
    }
  }, []);
  // console.log(currentUser)
  // Log in and register buttons are in ./GuestNav.tsx
  return (
    <List>
      <Item to={'/create-post'} >
        Create Post
        </Item>
      <Item to={'/'} >
        {theme === 'light' ? <AiFillHome/> : <AiOutlineHome />} 
      </Item>
      <Item to={`/user/${currentUser._id}`} >
        {theme === 'light' ? <IoPersonSharp /> : <IoPersonOutline />}
      </Item>
      
      <Item style={{ width: '3rem' }}to={'/messenger'} >
      
          <Badge
          // sx={{ height: '100%' }}
          color='info'
          badgeContent={newMessages}
        >{theme === 'light' ? <AiFillMessage /> : <AiOutlineMessage />}
          </Badge> 
      </Item>

      <Item onClick={() =>handleLogout(currentUser._id)} to='/'>
        {theme==='light' ? <BiLogOut/> : <IoLogOutSharp />}
      </Item>
    </List>
  );
};

export default Nav;
