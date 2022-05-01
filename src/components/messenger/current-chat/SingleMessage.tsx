import * as React from 'react';
import moment from 'moment'
import { SingleMessageContainer, MessageText, DateSent } from '../../../styles/messenger/messenger.js'
interface ISingleMessageProps {
  messageData: any,
  currentChat: any,
  currentUser: any,
}

// const Container = styled.div`
//   border: 1px solid orange;
//   margin-top: 5px;
// `;

// Name, message, and data. Background colors of green and blue
const SingleMessage: React.FunctionComponent<ISingleMessageProps> = ({messageData, currentChat, currentUser}) => {
  const { text, recipient, date_created} = messageData
  console.log(messageData)
  return (
    <SingleMessageContainer
      style={{
        alignItems: currentChat._id === recipient ? 'flex-start' : 'flex-end',
        alignSelf: currentChat._id === recipient ? 'flex-start' : 'flex-end',
        backgroundColor: currentChat._id === recipient ? '#167ef3' : '#149214',
      }}
    >
              <DateSent >{moment(date_created).format("MMM Do, YYYY")}</DateSent>

      <MessageText >
        {text} from: {currentChat._id === recipient ? currentChat.username : currentUser.username}
      </MessageText>
    </SingleMessageContainer>
  );
};

export default SingleMessage;
