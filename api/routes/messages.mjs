import User from '../models/user.mjs';
import express from 'express';
import mongoose from 'mongoose';

const messageRouter = express.Router()

// /api/messages/send-private-message/
console.log()
class chatClass {
  constructor(sender_id, recipient_id, object_id) {
    this._id = object_id;
    this.sender = sender_id;
    this.recipient = recipient_id;
    this.messages = []
  }
}
// req: user_id, recipient_id, message, 
const sendPrivateMessage = async (req, res) => {
  let sender, recipient
  try {await User.findOne({_id: req.body.user_id}).then(e=>sender=e) } catch(err) {res.status(404).send('Cannot find sender user')}
  try {await User.findOne({_id: req.body.recipient_id}).then(c=>recipient=c) } catch(err) {res.status(404).send('Cannot find recipient user')}
  

  // Since the private_messages value is new to the user document model, it will initialize a new property if one doesn't already exist
  // If the private_messages property does exist but a chat has never been initialized with the sender and recipient before, initialize a new chat 
  if (sender.private_messages === undefined) {
    sender.private_messages = [new chatClass(sender._id, recipient._id, new mongoose.Types.ObjectId())]
  } else if (sender.private_messages.find(c => c.recipient === recipient._id) === undefined) {
    sender.private_messages.push(new chatClass(sender._id, recipient._id, new mongoose.Types.ObjectId()))
  }

  if (recipient.private_messages === undefined) {
    recipient.private_messages = [new chatClass(recipient._id, sender._id, new mongoose.Types.ObjectId())]
  } else if (recipient.private_messages.find(x=>x.recipient === sender._id) === undefined) {
    recipient.private_messages.push(new chatClass(recipient._id, sender._id, new mongoose.Types.ObjectId()))
  }



// Looks for the index of the object inside the private_messages property that contains their respective recipients _id 
// After finding index, push a message to the chat object within the respective private_messages array 
  const newMessage = {
    _id: new mongoose.Types.ObjectId(),
    sender: sender._id,
    recipient: recipient._id,
    text: req.body.message,
  }
  
  const senderChatIndex = sender.private_messages.findIndex(e=>e.recipient === recipient._id)
  const recipientChatIndex = recipient.private_messages.findIndex(v=>v.recipient === sender._id)
  console.log(sender)
  sender.private_messages[senderChatIndex].messages.push(newMessage)
  recipient.private_messages[recipientChatIndex].messages.push(newMessage)

  await sender.save()
  await recipient.save()
  
  return res.send(sender.private_messages)


}

messageRouter.post('/send-private-message', sendPrivateMessage)



export default messageRouter;

