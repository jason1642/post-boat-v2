import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Section, Item, AccountImage, Title} from '../../../styles/homepage/side-menu.js'
import { FaRegUserCircle } from 'react-icons/fa/index.js'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
interface ISideMenuProps {
  currentUser: any
}

const styles = {
  icon: {
    height: '100%',
    width: 'auto',
  }
}
const SideMenu: React.FunctionComponent<ISideMenuProps> = ({ currentUser }) => {
  const { active, username, preferences } = currentUser;
  return (
    <Container>
      <div style={{fontSize: '2rem', borderBottom:'2px solid grey'}}>My Account</div>
      <Section>
        <Title>{currentUser.username}</Title>
        {/* <Badge color={active ? 'success' : 'warning'} variant='dot' overlap='circular' badgeContent={''} > */}
      <Avatar sx={{ bgcolor:  preferences.avatar_color}}>{username.split('')[0].toUpperCase()}</Avatar>

      {/* </Badge> */}
        <Item>Followers: {currentUser.followers.length}</Item>
        <Item>Following: {currentUser.following.length}</Item>
        <Item>Saved posts: {currentUser.saved_posts.length}</Item>
        </Section>
    </Container>
  );
};

export default SideMenu;
