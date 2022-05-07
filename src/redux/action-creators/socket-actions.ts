import { CREATE_SOCKET } from "../constants";
import io from 'socket.io-client'

export const createSocket = (userId:string, url: string) => {
  
  console.log(userId)
 
  return (dispatch: any) => {
  const newSocket = io(url, { transports: ['websocket'], autoConnect: false })
    newSocket.auth = { user_id: userId}
    newSocket.connect()   
    console.log(newSocket)
      return dispatch({
        type: CREATE_SOCKET,
        payload: newSocket
      })
    }
}