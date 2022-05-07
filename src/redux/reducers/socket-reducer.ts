import { CREATE_SOCKET } from "../constants";

interface InitialStateTypes {
  connected: Boolean,
  id: string,
  auth: {
    user_id: string
  }
}

const initialState: InitialStateTypes = {
  connected: false,
  id: undefined,
  auth: {
    user_id: undefined
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SOCKET:
      console.log('CREATE SOCKET')
      return action.payload
  
    default:
      return state
  }
}
export default reducer;