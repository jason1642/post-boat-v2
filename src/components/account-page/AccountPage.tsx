import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Main, Content} from '../../styles/account-page/account-page.js'
import type UserModel from '../../types/user-interface.js'
import SideMenu from './SideMenu.tsx';
import { Link,  Outlet, useParams } from 'react-router-dom';
import Nav from './Nav.tsx';
import { getAllPostsByUser } from '../api-helpers/post-api.ts';
import {getUserInfoById} from '../api-helpers/user-api.ts'
interface IAccountPageProps {
  currentUser: UserModel,
}

const AccountPage: React.FunctionComponent<IAccountPageProps> = ({currentUser}) => {
  const { id } = useParams();
  const [postData, setPostData] = useState([])
  const [paramsUserData, setParamsUserData] = useState()

  useEffect(() => {
    console.log(id)
    getAllPostsByUser(id).then(res => {
      // console.log(res.data, 'posts created by user')
      setPostData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, []);


   useEffect(() => {
      getUserInfoById(id).then(res => {
      //  console.log(res.data)
       setParamsUserData(res.data)
     }).catch(err => {
       console.log(err)
     })
    }, []);


  return (
    <Container>
      <Nav
        paramsId={id}
      />

      <Main>

        <Content>
          {
            paramsUserData && postData ?
          
              <Outlet context={{
                currentUser,
                postData,
                paramsUserData
              }} />
              : <>User Data Not Found,</>
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
