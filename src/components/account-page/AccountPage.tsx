import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Main, Header, Content} from '../../styles/account-page/account-page.js'
import type UserModel from '../../types/user-interface.js'
import SideMenu from './SideMenu.tsx';
import { Link,  Outlet, useParams } from 'react-router-dom';
import Nav from './Nav.tsx';


interface IAccountPageProps {
  currentUser: UserModel,
}

const AccountPage: React.FunctionComponent<IAccountPageProps> = ({currentUser}) => {
  const { id } = useParams();
  return (
    <Container>
      <Nav
        userId={id}
      />

      <Main>

        <Content>

          <Outlet context={{currentUser, id}} />
          {/* 
          Routes: Posts, Comments
          Current user routes: Posts, Comments, Saved Posts,
           Liked Posts, Following, Followers, Category Subscripitions
          */}


      </Content>

        <SideMenu />
      </Main>

    </Container>
  );
};

export default AccountPage;
