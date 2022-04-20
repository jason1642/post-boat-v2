import * as React from 'react';
// import { useState, useEffect } from 'react';
import {Container, Title, Item, Button} from '../../styles/account-page/side-menu.js'
import moment from 'moment'
interface ISideMenuProps {
  currentUser: any,
  paramsUserData: any,
  
}

const SideMenu: React.FunctionComponent<ISideMenuProps> = ({paramsUserData }) => {
  
  // Follow button, change icon toggle
  return (
    <Container>
      <Title>u/{paramsUserData.username}</Title>
      <Item>Joined {moment().startOf('day').fromNow(paramsUserData.created_at)} ago</Item>
      <Item>Followers: {paramsUserData.followers.length}</Item>
      <Item>Following: {paramsUserData.following.length}</Item>
      <Button>Follow</Button>
    </Container>
  );
};

export default SideMenu;
