import * as React from 'react';
import { useState, useEffect } from 'react';
// import _ from 'lodash'
import { Container,  ImageContainer, Image, Main, Text } from '../../../styles/post/modal.js'
import Modal from 'react-modal/dist/react-modal.js'
import CommentSection from '../comment-section/CommentSection.tsx'
import Header from './Header.tsx'
import {PostModel} from '../../../type-interface.ts'
interface IPostModalProps {
  modalIsOpen: boolean,
  closeModal: Function,
  isOpen: boolean,
  data: PostModel,
  likePost: Function,
  currentUser: any,
  savePost: Function

}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflowY: 'scroll',
    // minHeight: '712px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '60vw',
    maxWidth: '60vw',
    marginTop: '10px',
    height: '90%',
    backgroundColor: '#272729',
    opacity: '1',
    
  },
  overlay: {
    // backgroundColor: 'grey',
    
  }
};
const PostModal: React.FunctionComponent<IPostModalProps> = ({currentUser, data, savePost, likePost, closeModal, modalIsOpen}) => {
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
          savePost={savePost}
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
        <CommentSection
          data={data}
        />
      </Modal>
    </Container>
  );
};

export default PostModal;
