import * as React from 'react';
import {removeToken} from '../api-helpers/user-api.ts'
import {
  AiOutlineHome,
  AiFillHome,
} from 'react-icons/ai/index.js'

import {List, Item} from '../../styles/nav.js'

interface INavProps {
  theme: string,
}

const GuestNav: React.FunctionComponent<INavProps> = ({ theme }) => {
  
  
  return (
    <List>
      <Item to={'/'} >
        {theme === 'light' ? <AiFillHome/> : <AiOutlineHome />} 
      </Item>

      <Item to={'/register'} >Register</Item>
      <Item to={'/login'} >Login</Item>


     
    
   
    </List>
  );
};

export default GuestNav;
