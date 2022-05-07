import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container } from '../../../styles/homepage/feed.js'
import PostCard from '../../post-card/PostCard.tsx'
import { useParams } from 'react-router-dom'
import {getAllByCategoryName} from '../../api-helpers/post-api.ts'
interface IFeedProps {
  
}


const Feed: React.FunctionComponent<IFeedProps> = (props) => {

  const [feedData, setFeedData] = useState<any>()
  const { category } = useParams()
  
  useEffect(() => {
    getAllByCategoryName(category).then(res => {
      setFeedData(res)
    })
      
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
