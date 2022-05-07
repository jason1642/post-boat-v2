import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import type UserModel from '../../types/user-interface.ts'
import ChatList from './ChatList.tsx'
import Main from './current-chat/Main.tsx'
import io from 'socket.io-client'
import { getChatListUserInfo, getMessageHistory, getBasicPublicUserInfo, readMessages } from '../api-helpers/user-api.ts';
import {useParams, useNavigate} from 'react-router-dom'
interface IMessengerProps {
  currentUser: UserModel,
}


const styles = {
  container: {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  flexDirection: 'row',
  paddingTop: '60px',
  height: '85%',
  fontSize: '1.4rem',
  maxWidth: '95vw',
  },
}

const Messenger: React.FunctionComponent<IMessengerProps> = ({currentUser}) => {
  const url = window.location.hostname === 'localhost' ? 'http://localhost:3880' : 'https://postboat.herokuapp.com'
  const [socket, setSocket] = useState<any>(null);
  const [chatListUsersData, setChatListUsersData] = useState<Array<any>>()
  const [currentChat, setCurrentChat] = useState<any>()
  const [messageHistory, setMessageHistory] = useState<Array<any>>(undefined)
  const [didLoad, setDidLoad] = useState(false)
  const [currentChatId, setCurrentChatId] = useState()
  const {id} = useParams()
  const navigate = useNavigate()
  // console.log(currentUser.active)
  // To create private messaging
  // 1 When a user connects, store their connection in an object keyed by their username or any other data structure that ensures you can find a specific users connection
  // 2 When one users wants to message another, send the server an even stating such
  // 3 The server looks up jeffs socketio connection in the object from step 1
  // 4 The server uses this connection to send the user(and only that users) the private message
  
  useEffect(() => {
    // autoConnect is set to false so the connection is not established right away,
    // so I can manually call socket.connect()
    const newSocket = io(url, { transports: ['websocket'], autoConnect: false})
    setSocket(newSocket)
    newSocket.auth = { user_id: currentUser._id}
    newSocket.connect()    
    newSocket.onAny((event, ...args) => {
      console.log(event, args);
    });
    newSocket.on(currentUser._id, ({ content, from }) => {
      setMessageHistory(prev => [...prev, content])

    });
    return () => {  newSocket.close() }
  }, []);

  
  useEffect(() => {
    // console.log('render')
    // Get list of users info from private_messages list
    // Create handleCurrentChat to get latest chat by default, based on updated_on date from object
    getChatListUserInfo(currentUser._id).then(async res => {
      res.data.sort((a,b) => new Date(b.updated_at) -  new Date(a.updated_at))
      setChatListUsersData(res.data)
      const findParamsChat = res.data.find(ele => ele._id === id)
    
      if (!id) {
        setCurrentChat(res.data[0])
        setMessageHistory(res.data[0].private_messages.find(c => c.recipient === currentUser._id).messages)
        // console.log(currentUser._id)
        await readMessages(currentUser._id, res.data[0]._id).then(r => {
        })
        return 
      }
      if (findParamsChat) {
        setCurrentChat(findParamsChat)
        setMessageHistory(findParamsChat.private_messages.find(e => e.sender === id).messages)
  
        await readMessages(currentUser._id, findParamsChat.private_messages.find(e => e.sender === id).sender).then(r => {
        })
      } else {
        await getBasicPublicUserInfo(id).then(r => {
          if (r.status === 401 || r.status === 404) {
            navigate('/messenger')
            
            window.location.reload()
            return 
          } else {
            setCurrentChat(r.data)
          }
          
        }).catch( err => {
          console.log('error!!')
        })
      }
      
    }, (err)=>console.log(err))
  }, [currentChatId]);
  
  const handleChangeCurrentChat = async (selectedUser: any) => {
    // setCurrentChat(selectedUser)
    setCurrentChatId(selectedUser)
      }

  const updateMessageHistory = (message) => {
    setMessageHistory(prev=> [...prev, message])
  } 
  return currentUser ? (
    <Container
      maxWidth='xl'
      sx={styles.container} >
      {chatListUsersData ? <ChatList handleChangeCurrentChat={handleChangeCurrentChat} chatListUsersData={chatListUsersData} currentUser={currentUser} /> : <>No chats found</>}
      {currentChat && messageHistory ? <Main didLoad={didLoad} updateMessageHistory={updateMessageHistory} messageHistory={messageHistory} socket={socket} currentChat={currentChat} currentUser={currentUser} /> : <>No current chat</>}
    </Container>
  ) : 
    (<div>wewqe</div>)
};

export default Messenger;
