import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, ErrorMessage} from '../../styles/account-page/user-posts.js'
import { useOutletContext } from 'react-router-dom';
import PostCard from '../post-card/PostCard.tsx'
import axios from 'axios'
interface IUserPostsProps {
  currentUser: any, 
  id: string,
  cardPadding: string,
}

const styles = {
  postAltStyles: {
    width: '70%',
  }
}

const UserPosts: React.FunctionComponent<IUserPostsProps> = () => {
  const { currentUser, id }: any = useOutletContext()
  const [postData, setPostData] = useState([])
  useEffect(() => {
    console.log(id)
    axios.get('http://localhost:3820/api/posts/findAllByUser/' + id).then(res => {
      console.log(res.data)
      setPostData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, []);
  

  return (
    <Container
    >
      {
        postData.length > 0 ?
          postData.map(ele =>
            <PostCard
              cardPadding="8px 12px 10px 10px"
              
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
