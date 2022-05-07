import * as React from 'react';
import moment from 'moment'
import { BsCheck2All } from 'react-icons/bs/index.js'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton';
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
  const { text, recipient, created_at, sender } = messageData
  const isFromRecipient = currentChat._id === sender
  // console.log(currentChat._id, recipient)
  // console.log(messageData)
  return (

<SingleMessageContainer
      style={{
        flexDirection: isFromRecipient ? 'row-reverse' : 'row',
        alignItems: isFromRecipient ? 'flex-start' : 'flex-end',
        alignSelf: isFromRecipient ? 'flex-start' : 'flex-end',
      }}
    ><div style={{ display: 'flex',  alignSelf: isFromRecipient ? 'flex-start' : 'flex-end',}}>
      {messageData.sender === currentUser._id  && <>{(messageData.seen_by_recipient && messageData.seen_by_recipient.seen) && messageData.seen_by_recipient !== undefined ?
          <Tooltip placement='left' title={`Seen ${moment(messageData.seen_by_recipient.date_seen).format("MMM Do, h:mm a")}`}><span><IconButton disabled><BsCheck2All style={{ color: 'green' }} /></IconButton></span></Tooltip>
          :
          <Tooltip title={`Delivered`} placement='left'><span><IconButton disabled><BsCheck2All /></IconButton></span></Tooltip>
      }</>}
<DateSent style={{order: isFromRecipient ? 2 : 0, }}>{moment(created_at).format("MMM Do, h:mm a")}</DateSent>
    
      </div>
              

        <MessageText
          style={{backgroundColor: isFromRecipient ? '#167ef3' : '#149214',}}
        >
        {text}
      </MessageText>
    </SingleMessageContainer>
  );
};

export default SingleMessage;
