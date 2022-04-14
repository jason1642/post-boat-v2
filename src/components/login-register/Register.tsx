import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form, Input, Title, SubmitButton, Span, ErrorDisplay, Label, ErrorItem } from '../../styles/forms/forms.js'
import { useNavigate} from 'react-router-dom';
import { createUser } from '../api-helpers/user-api.ts'
import _ from 'lodash'
import { removeLetters } from '../function-library/arrays.ts'
import {IoWarningOutline} from 'react-icons/io5/index.js'
 
interface IRegisterProps {
}
const valueNames = ['username', 'email', 'bio', 'password',]
const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const navigate = useNavigate()
const [errorMessages, setErrorMessages] = useState<Array<string>>(undefined)

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
    await createUser(userInput).then((res:any) => {
      if (res.data.errors) {
        // Remove backticks and parenthesis from strings
        setErrorMessages(removeLetters(res.data.errors))
      } else {
        console.log('successfully registered you as a user')
        window.location.reload()
      }
    },(err:any)=>console.log(err))
    
  }
  useEffect(() => {
    console.log(errorMessages)
  },[errorMessages])
  return (
    <Form
      onSubmit={handleSubmit}
      >
      <Title>Register</Title>

      <ErrorDisplay>
        {errorMessages && errorMessages.map(e => <ErrorItem><IoWarningOutline />{e}</ErrorItem>)}
      </ErrorDisplay>
      {valueNames.map(name =>
        <Label>
          <Span>{_.capitalize(name)}</Span><Input
        type={name === ('username' || 'bio') ? 'text' : name}
        value={userInput[name]}
        placeholder={_.capitalize(name)}
        onChange={handleInputChange}
        name={name}
      /></Label> )}
      
      
      <SubmitButton >Submit</SubmitButton>
    </Form>
  );
};

export default Register;