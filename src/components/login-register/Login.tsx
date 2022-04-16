import * as React from 'react';
import {Form, Input, Label, Title, Span, SubmitButton} from '../../styles/forms/forms.js'
import { useState } from 'react';
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { useDispatch} from 'react-redux';
import { userActions } from '../../redux/index.ts';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';


const valueNames = ['username', 'password',]

const Login = (props) => {
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',

  })
  const dispatch = useDispatch()
  const { logInUser } = bindActionCreators(userActions, dispatch);

  const handleInputChange = (e) => {
    setUserInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleLogin = async () => {
    let timerInterval
    await logInUser(userInput).then(res => {
      if (res.payload.authenticated) {   
        Swal.fire({
          title: 'Successfully logged in!!',
          html: '...redirecting you to the home page now',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b: any = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then(() => {
          navigate('/')
          window.location.reload()
        })
        
      } else {
        Swal.fire({
          title: 'Wrong username or password',
          icon: 'error',
          html: 'Sorry, wrong username or password. Please try again',
          timer: 1500,
          willClose: () => {
            clearInterval(timerInterval)
          }
        })
      }
    })}
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()
        await handleLogin()
      }}
      >
      <Title>Log in</Title>

      {valueNames.map(name =><Label><Span>{_.capitalize(name)}</Span><Input
        type={name === 'username' ? 'text' : 'password'}
        value={userInput[name]}
        placeholder={_.capitalize(name)}
        onChange={handleInputChange}
        name={name}
      /></Label> 
        )}
      
      <SubmitButton>Submit</SubmitButton>

    </Form>
  );
};

export default Login;
