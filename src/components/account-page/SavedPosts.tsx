import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container } from '../../styles/account-page/user-posts.js'
import PostCard from '../post-card/PostCard.tsx'
import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import { getManyPostsFromIdArray } from '../api-helpers/post-api.ts'
interface ISavedPostsProps {
}

const SavedPosts: React.FunctionComponent<ISavedPostsProps> = () => {
  const {id} = useParams()
  const { currentUser }: any = useOutletContext()
  const [savedPosts, setSavedPosts] = useState([])
  useEffect(() => {
    getManyPostsFromIdArray(currentUser.saved_posts).then(res => {
      setSavedPosts(res.data)
      console.log(res.data)
    }).catch(err=>console.log(err))
  }, []);

  return currentUser._id === id ?  (
    <Container>
    
      {
        savedPosts[0] ? savedPosts.map(ele =>
          <PostCard
            cardPadding='8px'
            key={ele._id}
            data={ele}
          />) :
          <>You have no posts saved</>
      }
    </Container>
  ) :
    <Navigate to={`/user/${id}`} replace />
};

export default SavedPosts;
