import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import Container from '@mui/material/Container'
import SingleMessage from './SingleMessage.tsx';
// import _ from 'lodash'
import styled from 'styled-components';
import { readMessages } from '../../api-helpers/user-api.ts';

const NewMessageNotification = styled.div`
  position: sticky;
  text-align: center;
  align-items: center;
  justify-content: center;
  /* display: flex; */
  bottom: 5px;
  width: 30%;
  border-radius: 8px;
  opacity: .5;
  align-self: center;
  padding: 5px;
  background-color: grey;
  &:hover{
    cursor: pointer;
    opacity: 0.2;
  }
`;
const Span = styled.div`
  display: flex;
  padding: 5px 0px;
  margin-top: .5rem;
  width: 100%;
  justify-content: center;
`;
interface IMessageDisplayProps {
  currentUser: any,
  currentChat: any,
  socket: any,
  messageHistory: any,
  didLoad: Boolean,
}
const styles = {
  container: {
    border: '1px solid grey',
    // borderLeft: '0px solid black',
    borderRadius: '4px',
    display: 'flex',
    position: 'relative',
    // justifyContent: 'center',
    // minHeight: '90%',
    alignItems: 'stretch',
    flexDirection: 'column',
    flex: '1 1 auto',
    // height: '100%',
    overflowY: 'auto',
    width: '100%',
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'red',
      color: 'red',
      width: '0.4em'

    }
  },
  
}
const MessageDisplay: React.FunctionComponent<IMessageDisplayProps> = ({currentChat, didLoad, currentUser, messageHistory}) => {
  const messagesEndRef = useRef(null)
  const footerRef = useRef(null)
  const [newMessage, setNewMessage] = useState(false)


  useEffect(() => {
    // if the last message was from another user and if the message was not seen
    const { scrollHeight, scrollTop, clientHeight } = messagesEndRef.current
    
    if (messageHistory.length > 0
      && messageHistory[messageHistory.length - 1].sender !== currentUser._id
      && messageHistory[messageHistory.length - 1].seen_by_recipient
      && messageHistory[messageHistory.length - 1].seen_by_recipient.seen === false
      && scrollTop + clientHeight !== scrollHeight) {
      setNewMessage(true)
    }      
  }, [ messageHistory]);



  useEffect(() => {
    footerRef.current.scrollIntoView({ behavior: "auto" })

  }, [didLoad, currentChat]);



  useEffect(() => {
    const { scrollHeight, scrollTop, clientHeight } = messagesEndRef.current
    if (scrollTop + clientHeight !== scrollHeight) {
      footerRef.current.scrollIntoView({ behavior: "auto" })
    }
  }, [currentChat,]);




 
// useEffect(() => {
//   const { scrollHeight, scrollTop, clientHeight } = messagesEndRef.current
//   if (scrollTop + clientHeight === scrollHeight) {
//     footerRef.current.scrollIntoView({ behavior: "auto" })
//   }
// }, [messageHistory]);
  return (
    <Container ref={messagesEndRef}
      maxWidth='md'
      onScroll={async() => {
        const { scrollHeight, scrollTop, clientHeight } = messagesEndRef.current
        if (scrollTop + clientHeight === scrollHeight) {
          await readMessages(currentUser._id, currentChat._id)
         setNewMessage(false)
       } 
      }}
      sx={styles.container}>
     
      { currentChat ? 
        <Span>This is the start of your conversation</Span>
        : <Span>Begin a conversation by looking for a user!</Span>
      }
      {
        messageHistory && currentChat ? messageHistory.map(ele =>
          <SingleMessage key={ele._id} currentUser={currentUser} currentChat={currentChat} messageData={ele} />)
          : (<></>)
      }
      <NewMessageNotification
        onClick={() => {
          footerRef.current.scrollIntoView({ behavior: "auto" })
          setNewMessage(false)
        }}
        style={{display: newMessage ? 'flex' : 'none'}}>New message!</NewMessageNotification>
      <div style={{position:'relative', bottom:'0'}} ref={footerRef}></div>
    </Container>
  );
};

export default MessageDisplay;
