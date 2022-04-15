import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, CommentSection, Comment,  } from '../../styles/modal.js'
import Modal from 'react-modal/dist/react-modal.js'

interface IPostModalProps {
  modalIsOpen: boolean,
  closeModal: any,
  isOpen: boolean,
  data: any
}
const customStyles = {
  content: {
    top: '52%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflowY: 'scroll',
    minHeight: '512px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '50vw',
    position: 'absolute',
    marginTop: '10px',
    backgroundColor: 'darkgrey',
    opacity: '1'
  },
  overlay: {
    // backgroundColor: 'grey',
    
  }
};
const PostModal: React.FunctionComponent<IPostModalProps> = ({data, closeModal, modalIsOpen}) => {
  let subtitle;



  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{data.title}</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        {/* <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
        <CommentSection>

        </CommentSection>
      </Modal>
    </Container>
  );
};

export default PostModal;
