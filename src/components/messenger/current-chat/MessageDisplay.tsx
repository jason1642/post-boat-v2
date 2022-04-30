import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import SingleMessage from './SingleMessage.tsx';
import { getMessageHistory } from '../../api-helpers/user-api.ts'
import _ from 'lodash'
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
  // const [recipientData, setRecipientData] = useState({
  //   username: '',
  //   bio: '',
  //   email: '',
  // })
  useEffect(() => {
    console.log(currentChat)
    getMessageHistory(currentUser._id, currentChat._id).then(res => {
      console.log(res.data)
      setMessageHistory(res.data.messages)

      // setRecipientData(_.pick(res.data, ['username', 'bio', 'email', '_id']))
    }, err => console.log(err))

  }, [currentChat]);
 
  return (
    <Container style={styles.container}>
     
      {
        messageHistory ? messageHistory.map(ele =>
          <SingleMessage key={ele._id} currentUser={currentUser} currentChat={currentChat} messageData={ele} />)
          : <>No messages</>
      }
      
    </Container>
  );
};

export default MessageDisplay;
