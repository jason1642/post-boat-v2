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
  const { text, recipient, date_created, sender } = messageData
  const isFromRecipient = currentChat._id === sender
  console.log(currentChat._id, recipient)

  return (

<SingleMessageContainer
      style={{
        alignItems: isFromRecipient ? 'flex-start' : 'flex-end',
        alignSelf: isFromRecipient ? 'flex-start' : 'flex-end',
      }}
    >
<DateSent style={{order: isFromRecipient ? 2 : 0}}>{moment(date_created).format("MMM Do, h:mm a")}</DateSent>
    
              

        <MessageText
          style={{backgroundColor: isFromRecipient ? '#167ef3' : '#149214',}}
        >
        {text}
      </MessageText>
    </SingleMessageContainer>
  );
};

export default SingleMessage;
