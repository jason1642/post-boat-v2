import _ from 'lodash';
import * as React from 'react';
// import { useState, useEffect } from 'react';
import {Container, Item} from '../../styles/account-page/nav.js'
import {useMatch  } from 'react-router-dom'
interface INavProps {
  paramsId: string,
}
const optionsData = {
  posts: {
    name: 'posts',
    path:'/user/:id/posts'
  },
  comments: {
    name: 'comments',
    path: '/user/:id/comments'
  },
  saved: {
  name: 'saved',
    path: '/user/:id/saved'
  }
}

const Nav: React.FunctionComponent<INavProps> = ({paramsId}) => {

  const match = useMatch('/user/:id/comments')
  // console.log(match)
  return (
    <Container>

      
        <Item
          style={{borderBottom: !match && '1px solid white'}}
        to={`/user/${paramsId}/${optionsData.posts.name}`}>
        {_.capitalize(optionsData.posts.name)}</Item> 
        <Item
          style={{borderBottom: match && '1px solid white'}}
        to={`/user/${paramsId}/${optionsData.comments.name}`}>
        {_.capitalize(optionsData.comments.name)}</Item> 
        {/* <Item
          style={{borderBottom: match && '1px solid white'}}
        to={`/user/${paramsId}/${optionsData.comments.name}`}>
        {_.capitalize(optionsData.comments.name)}</Item>  */}



    </Container>
  );
};

export default Nav;
