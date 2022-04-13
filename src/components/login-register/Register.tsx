import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form, Input, Title, SubmitButton } from '../../styles/forms/forms.js'
interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
    bio: '',
    email: ''
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
      <Title>Register</Title>
      <Input
        type='text'
        value={userInput.username}
        placeholder=''
        onChange={handleInputChange}
        name='username'
      />
      <Input
        type='email'
        value=''
        placeholder=''
        onChange={handleInputChange}
        name=''
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

export default Register;
