import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Section, Item, AccountImage, Title} from '../../../styles/homepage/side-menu.js'
import {FaRegUserCircle} from 'react-icons/fa/index.js'
interface ISideMenuProps {
  currentUser: any
}

const styles = {
  icon: {
    height: '100%',
    width: 'auto',
  }
}
const SideMenu: React.FunctionComponent<ISideMenuProps> = ({currentUser}) => {
  return (
    <Container>
      <Section>
        <Title>{currentUser.username}</Title>
        <AccountImage>
          <FaRegUserCircle
            style={styles.icon}
          />
        </AccountImage>
        <Item>Followers: {currentUser.followers.length}</Item>
        <Item>Following: {currentUser.following.length}</Item>
        <Item>Saved posts: {currentUser.saved_posts.length}</Item>
        </Section>
    </Container>
  );
};

export default SideMenu;
