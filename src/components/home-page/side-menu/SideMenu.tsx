import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, List, Item} from '../../../styles/homepage/side-menu.js'
interface ISideMenuProps {
}

const SideMenu: React.FunctionComponent<ISideMenuProps> = (props) => {
  return (
    <Container>
      <List>
        <Item>Here are the rules</Item>
        <Item>Here are the rules</Item>
        <Item>Here are the rules</Item>
        <Item>Here are the rules</Item>
        <Item>Here are the rules</Item>
        </List>
    </Container>
  );
};

export default SideMenu;
