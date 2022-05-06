import * as React from 'react';
import {Form, Input, Label, Title, Span, SubmitButton} from '../../styles/forms/forms.js'
import { ErrorComponent } from '../resources/validation-options.tsx';
import _ from 'lodash'
import Button from '@mui/material/Button'

import { bindActionCreators } from 'redux'
import { useDispatch} from 'react-redux';
import { userActions } from '../../redux/index.ts';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {useForm} from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { loginOptions } from '../resources/validation-options.tsx';

const valueNames = ['username', 'password',]

const Login = (props) => {

  const {register, formState: {errors}, handleSubmit } = useForm()
  const onErrors = errors => console.error(errors)


  const navigate = useNavigate()
 
  const dispatch = useDispatch()
  const { logInUser } = bindActionCreators(userActions, dispatch);



  const onFormSubmit = async data => {
    let timerInterval
    console.log(data)
    await logInUser(data).then(res => {
      if (res.payload.authenticated) {   
        Swal.fire({
          title: 'Successfully logged in!!',
          html: '...redirecting you to the home page now',
          timer: 1000,
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
    })
  };


  return (
    <Form
      onSubmit={handleSubmit(onFormSubmit, onErrors)}
  
      >
      <Title>Log in</Title>

      {valueNames.map(name => <Label key={name}>
        <Span>{_.capitalize(name)}</Span>
        <Input
        {...register(name, loginOptions[name])}
        type={name === 'username' ? 'text' : 'password'}
        placeholder={_.capitalize(name)}
        name={name}
      />
         <ErrorMessage
          name={name}
          errors={errors}
          render={({ message }) => <ErrorComponent message={message} />}
        />
      </Label> 
        )}
      {/* <SubmitButton>Submit</SubmitButton> */}
      <Button
          sx={{marginTop: '2rem'}}
          type='submit' size='large' component='button' variant="contained">Send</Button>
    </Form>
  );
};

export default Login;
