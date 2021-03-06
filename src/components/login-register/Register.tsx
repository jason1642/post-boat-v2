import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form, Input, SubmitSuccessfulMessage, Title, SubmitButton, Span, Label } from '../../styles/forms/forms.js'
import { createUser } from '../api-helpers/user-api.ts'
import _ from 'lodash'
import Button from '@mui/material/Button'
import { registerOptions } from '../resources/validation-options.tsx';
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
// Error components for a styled component within the render proprerty in error message
import {ErrorComponent} from '../resources/validation-options.tsx'


interface IRegisterProps {
}

// Have if ternary - if form not successfully submitted, show form, else show confirmation
const valueNames = ['username', 'email', 'bio', 'password',]


const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [didSubmit, setDidSubmit] = useState<boolean>(false)
  const onFormSubmit = async data => {
    console.log(data)
    await createUser(data).then(res => {
      console.log(res)
      setDidSubmit(true)
    })
  };
  const onErrors = errors => console.error(errors);
  useEffect(() => {
    document.title = 'Register'
  }, []);
  return (
    !didSubmit ?
    (<Form onSubmit={handleSubmit(onFormSubmit, onErrors)} >
        <Title onClick={() => {
                setDidSubmit(true)

      }}>Register</Title>

      {valueNames.map(name =>
        <Label key={name}>
          <Span>{_.capitalize(name)}</Span>
          <Input
            {...register(name, registerOptions[name])}
            type={name === ('username' || 'bio') ? 'text' : name}
            placeholder={_.capitalize(name)}
            name={name}
          />
          <ErrorMessage
            
          name={name}
          errors={errors}
          render={({ message }) => <ErrorComponent message={message} />}
        />
        </Label>)}
      
        {/* <SubmitButton type='submit' size='large' variant="contained">Submit</SubmitButton> */}
        <Button
          sx={{marginTop: '2rem'}}
          type='submit' size='large' component='button' variant="contained">Submit</Button>

      </Form>)
      
      : 
      (<SubmitSuccessfulMessage>
      SUCCESS</SubmitSuccessfulMessage>)
  )
};

export default Register;