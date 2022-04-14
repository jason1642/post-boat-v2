import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { removeToken } from '../api-helpers/user-api.ts'
import {List, Item} from '../../styles/nav.js'
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
}


const handleLogout = ( ) => {
  localStorage.clear();
  // setUser(null)
  removeToken();
  // console.log('You are logged out')
  // console.log(localStorage)
  window.location.reload();
}

const Nav: React.FunctionComponent<INavProps> = ({ theme }) => {
  
  

  // Log in and register buttons are in ./GuestNav.tsx
  return (
    <List>
      <Item to={'/'} >
        {theme === 'light' ? <AiFillHome/> : <AiOutlineHome />} 
      </Item>
      <Item to={'/'} >
        {theme === 'light' ? <IoPersonSharp /> : <IoPersonOutline />}
      </Item>
      
      <Item to={'/'} >
        {theme === 'light' ? <AiFillMessage /> : <AiOutlineMessage />}
      </Item>

      <Item onClick={handleLogout} to='/'>
        {theme==='light' ? <BiLogOut/> : <IoLogOutSharp />}
      </Item>
    </List>
  );
};

export default Nav;
