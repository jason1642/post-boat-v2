import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import {Container } from '../../styles/account-page/user-comments.js'
interface IUserCommentsProps {
}

const UserComments: React.FunctionComponent<IUserCommentsProps> = (props) => {
  const {currentUser}: any = useOutletContext()
  return (
    <Container>
      The current user is {currentUser.username}
    </Container>
  );
};

export default UserComments;
