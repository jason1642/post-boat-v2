import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, ErrorMessage} from '../../styles/account-page/user-posts.js'
import { useOutletContext } from 'react-router-dom';
import PostCard from '../post-card/PostCard.tsx'
interface IUserPostsProps {
  currentUser: any, 
  id: string,
  cardPadding: string,
}


const UserPosts: React.FunctionComponent<IUserPostsProps> = () => {
  const { currentUser, postData, paramsUserData }: any = useOutletContext()
  // const [postData, setPostData] = useState([])

  


  return (
    <Container
    >
      {
        postData.length > 0 ?
          postData.map((ele, i) =>
            <PostCard
              cardPadding="8px 12px 10px 10px"
              key={i}
              data={ele}
            />
          )
          : 
          <ErrorMessage>
            This user has no posts yet.
          </ErrorMessage>
      }
    </Container>
  );
};

export default UserPosts;
