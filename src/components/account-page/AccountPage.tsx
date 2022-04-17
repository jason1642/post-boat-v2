import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Main, Header, Content} from '../../styles/account-page/account-page.js'
import type UserModel from '../../types/user-interface.js'
import SideMenu from './SideMenu.tsx';
import { Link,  Outlet, useParams } from 'react-router-dom';
import Nav from './Nav.tsx';
import axios from 'axios'


interface IAccountPageProps {
  currentUser: UserModel,
}

const AccountPage: React.FunctionComponent<IAccountPageProps> = ({currentUser}) => {
  const { id } = useParams();
  const [postData, setPostData] = useState([])
  const [paramsUserData, setParamsUserData] = useState([])

  useEffect(() => {
    console.log(id)
    axios.get('http://localhost:3820/api/posts/findAllByUser/' + id).then(res => {
      console.log(res.data)
      setPostData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, []);


   useEffect(() => {
      axios.get('http://localhost:3820/api/user/' + id)
        .then(res => {
          console.log(res.data)
          setParamsUserData(res.data)
        }).catch(err => {
          console.log(err)
        })
    }, []);


  return (
    <Container>
      <Nav
        userId={id}
      />

      <Main>

        <Content>
          {
            paramsUserData ?
          
              <Outlet context={{
                currentUser,
                postData,
                paramsUserData
              }} />
              : <>User Data Not Foubd,</>
          }
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
