import * as React from 'react';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Main } from '../../styles/account-page/user-comments.js'
import UserPageCommentCard from './UserPageCommentCard.tsx'
import { getManyPostsFromCommentArray } from '../api-helpers/post-api.ts';

interface IUserCommentsProps {
}

const UserComments: React.FunctionComponent<IUserCommentsProps> = (props) => {
  const { currentUser, paramsUserData }: any = useOutletContext()
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
          <>You have not made any comments yet</>
      } 
    </Main>
  );
};

export default UserComments;
