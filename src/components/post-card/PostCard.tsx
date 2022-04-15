import * as React from 'react';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai/index.js'
import {BottomRow, ImageContainer, Image, Container,CreatedBy, Span, Main, TopRow, Title} from '../../styles/post-card.js'
interface IPostCardProps {
  data: any,
  num: Number
}

const PostCard: React.FunctionComponent<IPostCardProps> = ({data, num}) => {
  console.log(data)
  return (
    <Container>
      <TopRow>
        <CreatedBy>Posted by u/anon 9 hours ago</CreatedBy>
        <Title>This is the title that will describe this post</Title>
      </TopRow>

      <Main>
        <ImageContainer>
          <Image alt='placeholder' src={'https://images.unsplash.com/photo-1649258895691-3f3ac37bc408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'}/>
      </ImageContainer>
    </Main>


      <BottomRow>
        <Span><AiOutlineHeart style={{color: 'red'}} /></Span>
        <Span>52 comments</Span>
        <Span>Save</Span>
        <Span>Like</Span>
        <Span>Send</Span>
      </BottomRow>
    </Container>

  );
};

export default PostCard;
