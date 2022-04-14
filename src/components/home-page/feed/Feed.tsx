import * as React from 'react';
import { Container } from '../../../styles/homepage/feed.js'
import PostCard from '../../post-card/PostCard.tsx'
interface IFeedProps {
}


const placeHolderArray = ['Post number ','Post number ','Post number ','Post number ','Post number ','Post number ','Post number ','Post number ','Post number ',]
const Feed: React.FunctionComponent<IFeedProps> = (props) => {
  return (
    <Container>
      This is the feed

      {placeHolderArray.map((ele, i) => <PostCard num={i} data={ele}/>)}
    </Container>
  );
};

export default Feed;
