import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container} from '../../styles/account-page/user-posts.js'
import { useOutletContext } from 'react-router-dom';
import PostCard from '../post-card/PostCard.tsx'
import axios from 'axios'
interface IUserPostsProps {
  currentUser: any, 
  id: string
}

const UserPosts: React.FunctionComponent<IUserPostsProps> = () => {
  const { currentUser, id }: any = useOutletContext()
  const [postData, setPostData] = useState()
  useEffect(() => {
    console.log(id)
    axios.get('http://localhost:3820/api/posts/findAllByUser/' + id).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, []);
  
  return (
    <Container>
      Posts from: {currentUser.username}
      {

      }
    </Container>
  );
};

export default UserPosts;
