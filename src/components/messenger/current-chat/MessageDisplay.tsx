import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import {getMessageHistory} from '../../api-helpers/user-api.ts'
interface IMessageDisplayProps {
  currentUser: any,
  currentChat: any,
}
const styles = {
  container: {
    border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    height: 'auto',
  },
  
}
const MessageDisplay: React.FunctionComponent<IMessageDisplayProps> = ({currentChat, currentUser}) => {
  const [messageHistory, setMessageHistory] = useState<Array<any>>()
  useEffect(() => {
    // console.log(currentChat)
    getMessageHistory(currentUser._id, currentChat._id).then(res => {
      console.log(res.data.messages)
      setMessageHistory(res.data.messages)
    }, err => console.log(err))

  }, [currentChat]);
 
  return (
    <Container style={styles.container}>
     
      {
        messageHistory ? messageHistory.map(ele => <div>{ele.text}</div>) : <>No messages</>
      }
      
    </Container>
  );
};

export default MessageDisplay;
