import {  LOG_OUT_USER, VERIFY_USER_SUCCESS, VERIFY_USER_FAIL, LOG_IN_FAIL, REGISTER_USER, REGISTER_ERROR, REGISTER_SUCCESS, LOG_IN_SUCCESS } from "../constants";
import _ from 'lodash'

interface InitialStateTypes  {
  username: String;
  _id: String;
  email: String;
  created_at: Date;
  updated_at: Date;
  followers: Array<any>;
  following: Array<any>;
  bio: String;
  profile_image: String;
  authenticated: Boolean;
}

const initialState: InitialStateTypes = {
  username: undefined,
  _id: undefined,
  email: undefined,
  created_at: undefined, 
  updated_at: undefined,
  bio: undefined,
  followers: [],
  following: [],
  profile_image : '',
  authenticated: false
} 

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case LOG_IN_SUCCESS:
      // console.log('The current user is ', action.payload)
      // console.log(action.payload)
      return _.assign(action.payload,
        { authenticated: true })
    
    case VERIFY_USER_SUCCESS:
        // console.log(action.payload)
      return _.assign(action.payload,
        { authenticated: true })
    
    case VERIFY_USER_FAIL:
      // console.log(action.payload)
      return {
        ...state,
        status: 'error',
        authenticated: false
      }
    
    case LOG_IN_FAIL:
      return {
        ...state, 
        status: "error",
        authenticated: false
      };
    
    // case LOG_OUT_USER:
    //   return action.payload;
    
    // case REGISTER_USER:
    //   return action.payload;
    
    case REGISTER_SUCCESS: 
      return {
        ...state,
        status: 'success'
      }
    case REGISTER_ERROR:
      return {
        ...state,
        status: 'error'
      }

    default:
      return state;
  }
}

export default reducer; 