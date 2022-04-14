import * as React from 'react';
import {Form, Input, Title, SubmitButton} from '../../styles/forms/forms.js'
import { useState, useEffect } from 'react';
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch} from 'react-redux';
import { userActions } from '../../redux/index.ts';
import e from 'express';

interface ILoginProps {
}
const valueNames = ['username', 'password',]

const Login: React.FunctionComponent<ILoginProps> = (props) => {

  const [userInput, setUserInput] = useState({
    username: '',
    password: '',

  })
  const dispatch = useDispatch()
  const { logInUser } = bindActionCreators(userActions, dispatch);

  const handleInputChange = (e) => {
    // console.log(e)
    setUserInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleLogin = async () =>
    await logInUser(userInput).then(userData => {
      console.log(userData)
        
  },err=>console.log(err))
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()
        handleLogin()
      }}
      >
      <Title>Log in</Title>

      {valueNames.map(name =><Input
        type={name === 'username' ? 'text' : 'password'}
        value={userInput[name]}
        placeholder={_.capitalize(name)}
        onChange={handleInputChange}
        name={name}
      />
        )}
      
      <SubmitButton>Submit</SubmitButton>

    </Form>
  );
};

export default Login;
