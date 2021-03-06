import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Item, Title, Button } from '../../styles/account-page/side-menu.js'
import moment from 'moment'
interface ICurrentUserSideMenuProps {
  currentUser: any,
}

const CurrentUserSideMenu: React.FunctionComponent<ICurrentUserSideMenuProps> = ({currentUser}) => {
  return (
    <Container>
      <Title>u/{currentUser.username}</Title>
      <Item>Joined {moment(currentUser.created_at).fromNow()}</Item>
      <Item>Followers: {currentUser.followers.length}</Item>
      <Item>Following: {currentUser.following.length}</Item>

    </Container>
  ) ;
};

export default CurrentUserSideMenu;
