import * as React from 'react';
import { useState, useEffect } from 'react';
// import _ from 'lodash'
import { Container,  ImageContainer, Image, Main, Text } from '../../../styles/post/modal.js'
import Modal from 'react-modal/dist/react-modal.js'
import CommentSection from '../comment-section/CommentSection.tsx'
import Header from './Header.tsx'
interface IPostModalProps {
  modalIsOpen: boolean,
  closeModal: any,
  isOpen: boolean,
  data: any,
  likePost: any,
  currentUser: any,

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
const PostModal: React.FunctionComponent<IPostModalProps> = ({currentUser, data, likePost, closeModal, modalIsOpen}) => {
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
     
        <Header
          currentUser={currentUser}
          likePost={likePost}
          data={data}
        />

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
