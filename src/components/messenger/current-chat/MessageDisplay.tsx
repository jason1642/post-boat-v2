import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import Container from '@mui/material/Container'
import SingleMessage from './SingleMessage.tsx';
// import _ from 'lodash'
import styled from 'styled-components';

const NewMessageNotification = styled.div`
  position: sticky;
  bottom: 0px;
  width: 30%;
  border-radius: 8px;
  opacity: .5;
  align-self: center;
  padding: 5px;
  background-color: grey;
  &:hover{
    cursor: pointer;
  }
`;
interface IMessageDisplayProps {
  currentUser: any,
  currentChat: any,
  socket: any,
  messageHistory: any,
}
const styles = {
  container: {
    border: '1px solid grey',
    borderRadius: '4px',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    flex: '1 1 auto',
    height: 'auto',
    overflowY: 'scroll',
    width: '100%',
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'red',
      color: 'red',
      width: '0.4em'

    }
  },
  
}
const MessageDisplay: React.FunctionComponent<IMessageDisplayProps> = ({currentChat, currentUser, socket, messageHistory}) => {
  const messagesEndRef = useRef(null)
  const footerRef = useRef(null)
  const [newMessage, setNewMessage] = useState(false)

  useEffect(() => {
    if (messageHistory.length > 0 && messageHistory[messageHistory.length - 1].sender !== currentUser._id) {
      setNewMessage(true)
    }
  console.log(messageHistory)
    // console.log(currentChat)
  }, [currentChat, messageHistory]);



  useEffect(() => {
    const { scrollHeight, scrollTop, clientHeight } = messagesEndRef.current
    if (scrollTop + clientHeight !== scrollHeight) {
      footerRef.current.scrollIntoView({ behavior: "auto" })
    }
  }, [currentChat, messageHistory]);
  return (
    <Container ref={messagesEndRef}
      onScroll={() => {
        const { scrollHeight, scrollTop, clientHeight } = messagesEndRef.current
        // console.log(scrollHeight)
        if (scrollTop + clientHeight === scrollHeight) {
         setNewMessage(false)
       } 
      }}
      sx={styles.container}>
     <div >This is the start of your conversation</div>
      {
        messageHistory ? messageHistory.map(ele =>
          <SingleMessage key={ele._id} currentUser={currentUser} currentChat={currentChat} messageData={ele} />)
          : (<>No messages</>)
      }
      <NewMessageNotification
        onClick={() => {
          footerRef.current.scrollIntoView({ behavior: "auto" })
          setNewMessage(false)
        }}
        style={{display: newMessage ? 'flex' : 'none'}}>New message</NewMessageNotification>
      <div ref={footerRef}></div>
    </Container>
  );
};

export default MessageDisplay;
