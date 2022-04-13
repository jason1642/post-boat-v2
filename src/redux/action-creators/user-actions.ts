import axios from 'axios';
import {  LOG_OUT_USER, VERIFY_USER, VERIFY_USER_FAIL, LOG_IN_FAIL, REGISTER_USER, REGISTER_ERROR, REGISTER_SUCCESS, LOG_IN_SUCCESS } from "../constants";
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
      
      return dispatch({
        type: LOG_IN_SUCCESS,
        payload: res.data
      })
    })
      .catch(err => {
      console.log('CANNOT LOG IN')
      return dispatch({
        type:  LOG_IN_FAIL,
        payload: userInput
      })})}