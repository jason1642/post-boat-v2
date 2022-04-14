import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form, Input, Title, SubmitButton } from '../../styles/forms/forms.js'
import { useNavigate} from 'react-router-dom';
import { createUser } from '../api-helpers/user-api.ts'
import _ from 'lodash'
 
interface IRegisterProps {
}
const valueNames = ['username', 'email',  'bio','password',]
const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const navigate = useNavigate()

  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
    bio: '',
    email: ''
  })

  const handleInputChange = (e) => {
    setUserInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault() 
    await createUser(userInput).then(res => {
      console.log(res)
    },err=>console.log(err))
    // Axios post to express 
  }
  return (
    <Form
      onSubmit={handleSubmit}
      >
      <Title>Register</Title>

      {valueNames.map(name =>
        <Input
        type={name === ('username' || 'bio') ? 'text' : name}
        value={userInput[name]}
        placeholder={_.capitalize(name)}
        onChange={handleInputChange}
        name={name}
      />)}
      
      
      <SubmitButton >Submit</SubmitButton>
    </Form>
  );
};

export default Register;
