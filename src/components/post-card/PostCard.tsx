import * as React from 'react';
import {BottomRow, Container,CreatedBy, Span, Main, TopRow, Title} from '../../styles/post-card.js'
interface IPostCardProps {
  data: any,
  num: Number
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({data, num}) => {
  return (
    <Container>
      <TopRow>
        <CreatedBy>Posted by u/anon 9 hours ago</CreatedBy>
        <Title>This is the title that will describe this post</Title>
      </TopRow>

      <Main>
              {data + num}

    </Main>


      <BottomRow>
        <Span>52 comments</Span>
        <Span>Save</Span>
        <Span>Like</Span>
        <Span>Send</Span>
      </BottomRow>
    </Container>

  );
};

export default PostCard;
