import * as React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai/index.js'
import moment from 'moment'
import {BottomRow, Text, ImageContainer, Image, Container,CreatedBy, Span, Main, TopRow, Title} from '../../styles/post-card.js'
import PostModal from './PostModal.tsx';
interface IPostCardProps {
  data: any,
  num: Number,
  modalIsOpen: boolean
}
const styles = {
  heartIcon: {
    color: 'red',
    height: '100%',
    width: '16px',
   
  },
  
}
const PostCard: React.FunctionComponent<IPostCardProps> = ({data, num}) => {
  console.log(data)
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }  return (
    <Container>
      <TopRow>
        <CreatedBy>Posted by u/{data.author.username} {moment().startOf('day').fromNow(data.created_at)} ago</CreatedBy>
        <Title>{data.title}</Title>
      </TopRow>

      <Main
        onClick={openModal}
      >
        {data.images.length === 0 ?
          <Text>{data.text} </Text>
          :
          <ImageContainer>
            <Image alt='placeholder' src={'https://images.unsplash.com/photo-1649258895691-3f3ac37bc408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'} />
          </ImageContainer>
        }
    </Main>


      <BottomRow>
        <Span><AiOutlineHeart style={styles.heartIcon} /></Span>
        <Span>{data.comments.length} {data.comments.length !== 1 ? 'Comments': 'Comment'}</Span>
        <Span>Save</Span>
        <Span>Like</Span>
        <Span>Send</Span>
      </BottomRow>
      <PostModal
        data={data}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen} />
    </Container>

  );
};

export default PostCard;
