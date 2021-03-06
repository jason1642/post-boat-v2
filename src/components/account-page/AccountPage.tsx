import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Main, Content} from '../../styles/account-page/account-page.js'
import type UserModel from '../../types/user-interface.js'
// @ts-ignore
import SideMenu from '../side-menu/SideMenu.tsx';
import { Outlet, useMatch, useParams } from 'react-router-dom';
import Nav from './Nav.tsx';
import { getAllPostsByUser } from '../api-helpers/post-api.ts';
import { getUserInfoById } from '../api-helpers/user-api.ts'
// import CurrentUserSideMenu from './/CurrentUserSideMenu.tsx'

interface IAccountPageProps {
  currentUser: UserModel,
  props: any,
}

const AccountPage: React.FunctionComponent<IAccountPageProps> = ({currentUser}) => {
  const { id } = useParams();
  const match = useMatch('/user/:id')
  const [postData, setPostData] = useState([])
  const [paramsUserData, setParamsUserData] = useState<any>()

  useEffect(() => {
    getAllPostsByUser(id).then(res => {
      setPostData(res.data)
      // console.log(res)
    }).catch(err => {
      console.log(err)
    })

  }, [paramsUserData]);

  useEffect(() => {
    if (id === currentUser._id) {
      document.title = 'My account'
    } else if (paramsUserData){
      document.title = 'Account - ' + paramsUserData.username
    } else {
      document.title = 'Account'
    }
  }, [paramsUserData]);
    // Must have id as dependency to refresh page upon going to the same path with a different id
   useEffect(() => {
      getUserInfoById(id).then(res => {
       console.log(res.data)
       setParamsUserData(res.data)
     }).catch(err => {
       console.log(err)
     })
    }, [id]);


  return (
    <Container>
      <Nav
        currentUser={currentUser}
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
        {
          currentUser._id === id ?
           <SideMenu paramsUserData={currentUser} currentUser={ currentUser} />
            : paramsUserData ?
              <SideMenu
                currentUser={currentUser}
              paramsUserData={paramsUserData}
            /> :<>404 NOT FOUND</>
        }
      </Main>

    </Container>
  );
};

export default AccountPage;
