import * as React from 'react';
import Container from "@mui/material/Container"
interface ISingleMessageProps {
  messageData: any,
  currentChat: any,
  currentUser: any,
}
// Name, message, and data. Background colors of green and blue
const SingleMessage: React.FunctionComponent<ISingleMessageProps> = ({messageData, currentChat, currentUser}) => {
  const { text, recipient, } = messageData
  // console.log(messageData.recipient, currentChat)
  return (
    <Container>
      {text} from: {currentChat.recipient === recipient ? currentChat.username : currentUser.username}
    </Container>
  );
};

export default SingleMessage;
