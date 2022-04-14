import axios from 'axios';
import {  LOG_OUT_USER,VERIFY_USER_SUCCESS, VERIFY_USER_FAIL, LOG_IN_FAIL, REGISTER_USER, REGISTER_ERROR, REGISTER_SUCCESS, LOG_IN_SUCCESS } from "../constants";
const baseUrl = process.env.Node_ENV === 'production' ? 'http://localhost:3820' : 'http://localhost:3820';
const api = axios.create({
  baseURL: baseUrl,
});

export const logInUser = (userInput: any) => {
  // Uses /api/user/auth post to verify credentials, then grants a jwt and user info
  return (dispatch: any) => 
    api.post('/api/auth/login', userInput).then(res => {
      console.log(res.data)

      localStorage.setItem('authToken', res.data.token);
      api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
      console.log(localStorage)
      return dispatch({
        type: LOG_IN_SUCCESS,
        payload: res.data
      })
    })
      .catch(err => {
      console.log('CANNOT LOG IN')
      return dispatch({
        type:  LOG_IN_FAIL,
        payload: {status: 'error'}
      })
      })
}
      
export const verifyUser = () => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  // };
  return (dispatch: any) => {
    const token = localStorage.getItem('authToken')
    console.log(token)
  
      return api.post('/api/auth/verify',
        {
        token: token
      }).then(res => {
        console.log(res, 'verify route')
        return dispatch({
          type: VERIFY_USER_SUCCESS,
          payload: res.data
        })
  
      }, (err) => {
        console.log(err)
        return dispatch({
          type: VERIFY_USER_FAIL,
          payload: {status: 'error'}
        })
      })
  }
}
  
interface RegisterData {
  username: string,
  email: string,
  password: string,
  bio: string
}


export const registerUser = (userInput: RegisterData) => {
  

  return async (dispatch: any) => {
    await api.post('/api/user/create', userInput)
      .then(res => {
      console.log(res)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res
      })      
    }).catch(err => {
      dispatch({
        type: REGISTER_ERROR,
        payload: userInput
      })
      // console.log(err);
      // console.log('Sorry, your username or password is unavailable to use, try again');
      return err;
    });
  }
}