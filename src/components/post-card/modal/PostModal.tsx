import * as React from 'react';
// import _ from 'lodash'
import { ImageContainer, Image, Main, Text } from '../../../styles/post/modal.js'
import { ReactModal as Modal } from '../../../styles/post/modal.js';
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
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    // overflowY: 'scroll',
    // minHeight: '712px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '60vw',
    maxWidth: '60vw',
    marginTop: '10px',
    height: '95%',
    zIndex: '16',
    outline: 'none',
    // backgroundColor: '#262626',
    
  },
  overlay: {
    backgroundColor: 'transparent',
    
  }
};
const PostModal: React.FunctionComponent<IPostModalProps> = ({currentUser, data, savePost, likePost, closeModal, modalIsOpen}) => {
  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    document.title = data.title
    subtitle.style.color = 'black';
  }
  
  
  return (
   
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
        clostModal={closeModal}
        />

        <Main>
          {data.images.length > 0 &&
            <ImageContainer>
              <Image
                // alt={data.title}
                src={data.images[0]}
              />
            </ImageContainer>
          }
          <Text>{data.text}</Text>

        </Main>
        <CommentSection
          data={data}
          currentUser={currentUser}
        />
      </Modal>
  );
};

export default PostModal;
