import * as React from 'react';
import { useState, useEffect } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { FormContainer, UserInput, Submit } from '../../../styles/messenger/messenger.js'

interface ITextInputProps {

}
type Inputs = {
  
}

const TextInput: React.FunctionComponent<ITextInputProps> = (props) => {
  const { register, watch, handleSubmit, formState: {errors} } = useForm() 
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  console.log(errors)


  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      !isInvalid && value.message.length > 200 ? setIsInvalid(true) : setIsInvalid(false)
 
      console.log(value.message.length, name, type)
    });
    // console.log(subscription)
    return () => subscription.unsubscribe()
  }, [watch]);


  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>

           
      <TextField
        sx={{opacity: '1', backgroundColor: '#a8a7a7e8', padding: '5px', borderRadius: '10px',}}
        helperText={isInvalid && 'Message cannot exceed 200 characters.'}
        error={isInvalid}
        fullWidth={true}
        disableUnderline={true}
        variant='standard'
        placeholder='Send a message.'
        {...register('message', { maxLength: 300 })}
      />

    <Submit type='submit' value='Send'/>
  </FormContainer>);
};

export default TextInput;
