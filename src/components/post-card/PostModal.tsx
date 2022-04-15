import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment'
import _ from 'lodash'
import { Container, Date, Span, BottomRow, ImageContainer, Image, TopRow, CategoryName,  Main, Title, Header, Comment, Text } from '../../styles/post/modal.js'
import Modal from 'react-modal/dist/react-modal.js'
import CommentSection from './comment-section/CommentSection.tsx'

interface IPostModalProps {
  modalIsOpen: boolean,
  closeModal: any,
  isOpen: boolean,
  data: any,
  likePost: any
}
const customStyles = {
  content: {
    top: '52%',
    left: '50%',
    right: 'auto',
    // bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflowY: 'scroll',
    minHeight: '512px',
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '60vw',
    maxWidth: '70vw',
    // position: 'absolute',
    marginTop: '10px',
    backgroundColor: '#272729',
    opacity: '1',
    
  },
  overlay: {
    // backgroundColor: 'grey',
    
  }
};
const PostModal: React.FunctionComponent<IPostModalProps> = ({data, likePost, closeModal, modalIsOpen}) => {
  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
}
  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Header>
          <TopRow>
            <CategoryName>/{_.capitalize(data.category)}</CategoryName>
            <Date>Posted: {_.capitalize(moment().startOf('day').fromNow(data.created_at))} ago</Date>
          </TopRow>
          <Title>
            {data.title}
          </Title>
          <BottomRow>
          <Span>{data.comments.length} {data.comments.length !== 1 ? 'Comments': 'Comment'}</Span>
            <Span onClick={()=>likePost(data._id, currentUser._id)}
            >{data.liked_by.length} {data.liked_by.length !== 1 ? 'Likes' : 'Like'}</Span>
          <Span>{data.saved_by.length} {data.saved_by.length !== 1 ? 'saves': 'save'}</Span>
            <Span style={{justifySelf:'flex-end'}}>More posts from {data.category}</Span>
          </BottomRow>
        </Header>
        {/* <button onClick={closeModal}>close</button>
        <div>I am a modal</div> */}
       
        <Main>
          {data.images.length > 0 &&
            <ImageContainer>
              <Image
                alt={data.title}
                src={'https://images.unsplash.com/photo-1649258895691-3f3ac37bc408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'}
                // src={data.images[0]}
              />
            </ImageContainer>
          }
          <Text>{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}{data.text}</Text>

        </Main>
        <CommentSection />
      </Modal>
    </Container>
  );
};

export default PostModal;
