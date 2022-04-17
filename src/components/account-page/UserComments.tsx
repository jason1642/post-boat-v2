import * as React from 'react';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios'
// import { useState, useEffect } from 'react';
import { Main } from '../../styles/account-page/user-comments.js'
import UserPageCommentCard from './UserPageCommentCard.tsx'
interface IUserCommentsProps {
}

const UserComments: React.FunctionComponent<IUserCommentsProps> = (props) => {
  const { currentUser, paramsUserData }: any = useOutletContext()
    // user comments on TITLE on CATEGORY
    // Post author
    //Comment - header: likes timestamp
    // - body full text
    // - footer reply share delete(if yours)
  
  return (
  

    <Main>
      The current user is {currentUser.username}

      {/* {
        paramsUserData.created_comments.map(ele =>
          <UserPageCommentCard
            data={ele}
          />)
      } */}
    </Main>
  );
};

export default UserComments;
