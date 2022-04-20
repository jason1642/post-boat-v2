import * as React from 'react';
// import { useState, useEffect } from 'react';
import {Container, Title, Item, LinkButton, Button} from '../../styles/account-page/side-menu.js'
import moment from 'moment'
import { Link } from 'react-router-dom';
interface ISideMenuProps {
  currentUser: any,
  paramsUserData: any,
  onPostPage: boolean,

}

const SideMenu: React.FunctionComponent<ISideMenuProps> = ({paramsUserData, onPostPage }) => {
  
  // Follow button, change icon toggle
  return (
    <Container>
      {onPostPage ?
        <LinkButton to={`/user/${paramsUserData._id}`}>u/{paramsUserData.username} </LinkButton>
        :
         <Title>u/{paramsUserData.username}</Title>

    }
      <Item>Joined {moment().startOf('day').fromNow(paramsUserData.created_at)} ago</Item>
      <Item>Followers: {paramsUserData.followers.length}</Item>
      <Item>Following: {paramsUserData.following.length}</Item>
      <Button>Follow</Button>
    </Container>
  );
};

export default SideMenu;
