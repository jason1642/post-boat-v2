import * as React from 'react';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CommentContainer, Main } from '../../styles/account-page/user-comments.js'
import UserPageCommentCard from './UserPageCommentCard.tsx'
import { getManyPostsFromCommentArray } from '../api-helpers/post-api.ts';
import {ErrorMessage } from '../../styles/account-page/user-posts.js'
interface IUserCommentsProps {
}

const UserComments: React.FunctionComponent<IUserCommentsProps> = (props) => {
  const {  paramsUserData }: any = useOutletContext()
    // user comments on TITLE on CATEGORY
    // Post author
  const [commentData, setCommentData] = useState(undefined)
    //Comment - header: likes timestamp
    // - body full text
    // - footer reply share delete(if yours)
    useEffect(() => {
      getManyPostsFromCommentArray(paramsUserData.created_comments).then(res => {
        console.log(res.data)
        setCommentData(res.data)
      })
    }, []);
  
  return (
  

    <Main>
      {/* The current user is {currentUser.username} */}
      {
        commentData && commentData.length > 0 ? commentData.map(ele =>
        
          <UserPageCommentCard
            key={ele[1]._id}
            commentData={ele[0]}
            postData={ele[1]}
          />) : 
          <ErrorMessage>
            <CommentContainer style={{ backgroundColor: 'transparent' }}>
              No comments yet
            </CommentContainer>
          </ErrorMessage>
      } 
    </Main>
  );
};

export default UserComments;
