import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {removeToken} from '../api-helpers/user-api.ts'
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

// const Container = styled.div`
  
// `;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

`
const Item = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  /* border: ${({ theme }) => theme.border}; */
  padding: 6px;
  height: 100%;
  /* font-size: 12px; */
  margin: 0;
`

const handleLogout = ( ) => {
  localStorage.clear();
  // setUser(null)
  removeToken();
  console.log('You are logged out')
  console.log(localStorage)
  window.location.reload();
}

const Nav: React.FunctionComponent<INavProps> = ({ theme }) => {
  
  
  return (
    <List>
      <Item to={'/'} >
        {theme === 'light' ? <AiFillHome/> : <AiOutlineHome />} 
      </Item>
      <Item to={'/'} >
        {theme === 'light' ? <IoPersonSharp /> : <IoPersonOutline />}
      </Item>
      <Item to={'/register'} >Register</Item>
      <Item to={'/login'} >Login</Item>
      <Item to={'/'} >
        {theme === 'light' ? <AiFillMessage /> : <AiOutlineMessage />}
      </Item>

      {/* Log in */}
      {/* <Item to='/'>
        {theme === 'light'}
    </Item> */}

    
      <Item onClick={handleLogout} to='/'>
        {theme==='light' ? <BiLogOut/> : <IoLogOutSharp />}
      </Item>
    </List>
  );
};

export default Nav;
