import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container} from '../../styles/account-page/user-posts.js'
import { useOutletContext } from 'react-router-dom';

interface IUserPostsProps {
}

const UserPosts: React.FunctionComponent<IUserPostsProps> = (props) => {
  const {currentUser}: any = useOutletContext()
  return (
    <Container>
      posts user: {currentUser.username}
    </Container>
  );
};

export default UserPosts;
