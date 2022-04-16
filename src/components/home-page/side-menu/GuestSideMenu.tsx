import * as React from 'react';
// import { useState, useEffect } from 'react';
import {Container, Section, Item, AccountImage, Title} from '../../../styles/homepage/side-menu.js'
interface ISideMenuProps {

}


const GuestSideMenu: React.FunctionComponent<ISideMenuProps> = () => {
  return (
    <Container>
      <Section>
        <Title>By having an account on PostBoat, you can: </Title>
        <Item>Creates posts</Item>
        <Item>Like and save posts</Item>
        <Item>Comment and reply to comments</Item>
        <Item>Follow other users</Item>
        </Section>
    </Container>
  );
};

export default GuestSideMenu;
