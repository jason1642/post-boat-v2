import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container } from '../../../styles/homepage/feed.js'
import PostCard from '../../post-card/PostCard.tsx'
import {useParams} from 'react-router-dom'
import axios from 'axios'
interface IFeedProps {
  
}
const api = axios.create({
  baseURL: 'http://localhost:3820'
})

const Feed: React.FunctionComponent<IFeedProps> = (props) => {
const fetchPostsData = async (category: string | undefined) => {
  const posts = category ? await api.get('/api/posts/findAllByCategory/' + category)
    .then(e => e.data)
    : await api.get('/api/posts/findAll').then(ele => ele.data)
  console.log(posts)
  setFeedData(posts)
  
}
  const [feedData, setFeedData] = useState<any>([])
  const { category } = useParams()
  
  useEffect(() => {
    fetchPostsData(category)
    
      
  }, [category]);


  return (
    <Container>
      {/* {console.log(feedData.length)} */}
      {!feedData || feedData.length === 0 ?
        'There are no posts yet.' :
        feedData.map((ele, i: number) =>
          <PostCard key={i} data={ele} />)}
    </Container>
  );
};

export default Feed;
