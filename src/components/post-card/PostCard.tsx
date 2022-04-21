import * as React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai/index.js'
import moment from 'moment'
import { BottomRow, Text, ImageContainer, Image, Container, CreatedBy, Span, Main, TopRow, Title } from '../../styles/post/post-card.ts'
import PostModal from './modal/PostModal.tsx';
import { likePost, savePost } from '../api-helpers/post-api.ts'
import { useSelector, useDispatch } from 'react-redux';

interface IPostCardProps {
  data: any,
  num: Number,
  modalIsOpen: boolean,
  cardPadding: string,
  textAlign: string,
}
const styles = {
  heartIcon: {
    color: 'red',
    height: '100%',
    width: '18px',
   
  },
  
}
const PostCard: React.FunctionComponent<IPostCardProps> = ({data, cardPadding}) => {
  // console.log(data)


  const [modalIsOpen, setIsOpen] = React.useState(false);
  const currentUser = useSelector((state: any) => state.currentUser);

  useEffect(() => {
    // console.log(currentUser)
  }, [])
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Container
      cardPadding={cardPadding}
      textAlign={'center'}
    >
      <TopRow>
        <CreatedBy to={`/user/${data.author.user_id}`}>Posted by u/<b>{data.author.username}</b>&nbsp;{moment().startOf('day').fromNow(data.created_at)} ago</CreatedBy>
        <Title
          onClick={openModal}
        >{data.title}</Title>
      </TopRow>

      <Main
        onClick={openModal}
      >
        {data.images.length === 0 ?
          <Text>{data.text} </Text>
          :
          <ImageContainer
            textAlign={'center'}
          >
            <Image alt='placeholder' src={'https://images.unsplash.com/photo-1649258895691-3f3ac37bc408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'} />
          </ImageContainer>
        }
    </Main>


      <BottomRow
        onClick={openModal}
      >
        <Span><AiOutlineHeart style={styles.heartIcon} /></Span>
        <Span>{data.liked_by.length} Likes</Span>
        <Span>{data.comments.length} {data.comments.length !== 1 ? 'Comments': 'Comment'}</Span>
        
        {currentUser._id && <Span>Send</Span>}

        </BottomRow>
      <PostModal
        currentUser={currentUser}
        savePost={savePost}
        likePost={likePost}
        data={data}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen} />
    </Container>

  );
};

export default PostCard;
