import * as React from 'react';
// import { useState, useEffect } from 'react';
import {Container, Item} from '../../styles/account-page/nav.js'

interface INavProps {
  userId: string,
}

const Nav: React.FunctionComponent<INavProps> = ({userId}) => {

  return (
    <Container>
      <Item to={`/user/${userId}/posts`}>Posts</Item>
      <Item to={`/user/${userId}/comments`}>Comments</Item>
      {/* <Item to={`/user/${userId}/comments`}></Item>
      <Item to={`/user/${userId}/comments`}></Item>
      <Item to={`/user/${userId}/comments`}></Item> */}
    </Container>
  );
};

export default Nav;
