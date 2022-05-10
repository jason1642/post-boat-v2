import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container'
import type UserModel from '../../types/user-interface.ts'
import ChatList from './ChatList.tsx'
import Main from './current-chat/Main.tsx'
// import io from 'socket.io-client'
import { getChatListUserInfo, getMessageHistory, getBasicPublicUserInfo, readMessages } from '../api-helpers/user-api.ts';
import { useParams, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

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

const Messenger: React.FunctionComponent<IMessengerProps> = ({ currentUser }) => {

  const [chatListUsersData, setChatListUsersData] = useState<Array<any>>()
  const [currentChat, setCurrentChat] = useState<any>()
  const [messageHistory, setMessageHistory] = useState<Array<any>>(undefined)
  const [didLoad, setDidLoad] = useState(false)
  const [currentChatId, setCurrentChatId] = useState()

  const navigate = useNavigate()
  const socket = useSelector((state:any)=>state.socket)
  const { id } = useParams()
  
  // console.log(currentUser.active)
  // To create private messaging
  // 1 When a user connects, store their connection in an object keyed by their username or any other data structure that ensures you can find a specific users connection
  // 2 When one users wants to message another, send the server an even stating such
  // 3 The server looks up jeffs socketio connection in the object from step 1
  // 4 The server uses this connection to send the user(and only that users) the private message
  
  useEffect(() => {
    // autoConnect is set to false so the connection is not established right away,
    // so I can manually call socket.connect()
    
    // const newSocket = io(url, { transports: ['websocket'], autoConnect: false })
    // newSocket.auth = { user_id: currentUser._id}
    // newSocket.connect()
    // console.log(newSocket)
    
    const chatInstance = async() => {
      console.log(id)
     await getChatListUserInfo(currentUser._id)
      .then(async res => {
      res.data.sort((a,b) => new Date(b.updated_at) -  new Date(a.updated_at))
        setChatListUsersData(res.data)

    }, (err) => console.log(err))
    }
    
    // newSocket.onAny((event, ...args) => {
      //   console.log(event, args);
      // });
    if (socket.connected === true && currentChat) {
      console.log('socket on!')
      console.log(currentChat)
      socket.on(currentUser._id, ({ content, from }) => {
        console.log(currentChat)
        if (from === currentChat._id) {
          console.log('from current chat!')
          setMessageHistory(prev => [...prev, content])
        } else {
          console.log('running else!')
          chatInstance()
        }

      });
    }
    // return () => {  socket.close() }
  }, [socket.connected]);


  
  useEffect(() => {
    // Get list of users info from private_messages list
    // Create handleCurrentChat to get latest chat by default, based on updated_on date from object
    

    const chatInstance = async() => {
      console.log(id)
     await getChatListUserInfo(currentUser._id)
      .then(async res => {
      res.data.sort((a: any,b: any) => new Date(b.updated_at) -  new Date(a.updated_at))
        setChatListUsersData(res.data)
        
        const findParamsChat = res.data.find(ele => {
          console.log(id)
          return ele._id === id
        })
        console.log(id)
        if (!id) {
        console.log('!ID FIRST IF')
        setCurrentChat(res.data[0])
          setMessageHistory(res.data[0].private_messages.find(c => c.recipient === currentUser._id).messages)
          console.log(res.data[0].private_messages.find(c => c.recipient === currentUser._id).messages)
        // console.log(currentUser._id)
        await readMessages(currentUser._id, res.data[0]._id).then(r => {
        })
        return 
      }
        if (findParamsChat) {
          console.log('FINDPARAMSCHAT')
          console.log(findParamsChat)
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
            console.log('LAST ELSE BLOCK')
            setCurrentChat(r.data)
            // setChatListUsersData(prev => [...prev, r.data])
            console.log(chatListUsersData)
            setMessageHistory([])
          }
          
        }).catch( err => {
          console.log('error!!')
        })
      }
      
    }, (err) => console.log(err))
    }


    console.log('render')
    chatInstance()

    console.log(messageHistory)
  }, [id, currentChatId]);
  
  const handleChangeCurrentChat = async (selectedUser: any) => {
    // setCurrentChat(selectedUser)
    setCurrentChatId(selectedUser)
      }

  const updateMessageHistory = (message) => {
    setMessageHistory(prev=> [...prev, message])
  } 
  return currentUser ? (
    <Container
      maxWidth='lg'
      sx={styles.container} >
      {chatListUsersData && currentChat ? <ChatList currentChat={currentChat} currentUser={currentUser} handleChangeCurrentChat={handleChangeCurrentChat} chatListUsersData={chatListUsersData}  /> : <>No chats found</>}
      {currentChat && messageHistory
        ? <Main
          didLoad={didLoad}
          updateMessageHistory={updateMessageHistory}
          messageHistory={messageHistory}
          socket={socket}
          currentChat={currentChat}
          currentUser={currentUser} />
        : <>No current chat</>}
    </Container>
  ) : 
    (<div>wewqe</div>)
};

export default Messenger;
