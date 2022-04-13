import * as React from 'react';
import {Form, Input, Title, SubmitButton} from '../../styles/forms/forms.js'
import { useState, useEffect } from 'react';

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {

  const [userInput, setUserInput] = useState({
    username: '',
    password: '',

  })

  const handleInputChange = (e) => {
    console.log(e)
    setUserInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // Axios post to express 
  }
  return (
    <Form
      onSubmit={handleSubmit}
      >
      <Title>Log in</Title>
      <Input
        type='text'
        value={userInput.username}
        placeholder=''
        onChange={handleInputChange}
        name='username'
      />
   
      <Input
        type='password'
        value={userInput.password}
        placeholder='Password'
        onChange={handleInputChange}
        name='password'
      />
      <SubmitButton />
    </Form>
  );
};

export default Login;
