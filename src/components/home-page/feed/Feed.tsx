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
const fetchPostsData = async (category: string | undefined) => 
   category ? await api.get('/api/posts/findAllByCategory/' + category)
    .then(e => e.data)
    : await api.get('/api/posts/findAll').then(ele => ele.data)
  // console.log(posts)
  
  

const Feed: React.FunctionComponent<IFeedProps> = (props) => {

  const [feedData, setFeedData] = useState<any>()
  const { category } = useParams()
  
  useEffect(() => {
    fetchPostsData(category).then(res=>{setFeedData(res)})
    console.log(feedData)
      
  }, [category]);


  return (
    <Container>
      {/* {console.log(feedData.length)} */}
      {feedData && feedData.length > 0 ?
        
        feedData.map(ele =>
          <PostCard
            cardPadding="8px 12px 3px 12px"
            key={ele._id}
            data={ele} />):
      'There are no posts yet.' 
      }
    </Container>
  );
};

export default Feed;
