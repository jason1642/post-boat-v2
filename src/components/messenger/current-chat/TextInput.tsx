import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { FormContainer, UserInput, Submit } from '../../../styles/messenger/messenger.js'

interface ITextInputProps {

}
type Inputs = {
  
}

const TextInput: React.FunctionComponent<ITextInputProps> = (props) => {
  const { register, handleSubmit, formState: {errors} } = useForm() 

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (<FormContainer onSubmit={handleSubmit(onSubmit)}>
    <TextField defaultValue='Send a message.' {...register('message', {required: true})} />

    <Submit type='submit' />
  </FormContainer>);
};

export default TextInput;
