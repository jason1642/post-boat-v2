import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { FormContainer, UserInput, Submit } from '../../../styles/messenger/messenger.js'
import Button from '@mui/material/Button'
import {sendMessage} from '../../api-helpers/user-api.ts'

interface ITextInputProps {
  socket: any,
  currentUser: any,
  currentChat: any,
}
type Inputs = {
  content: any
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({socket, currentChat, currentUser}) => {
  const { register, watch, handleSubmit, reset, getValues, formState: {errors} } = useForm() 

  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  // console.log(errors)

  const onErrors = errors => console.error(errors)

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      !isInvalid && value.message.length > 200 ? setIsInvalid(true) : setIsInvalid(false)
 
      console.log(value.message.length, name, type)
    });
    // console.log(currentChat)
    return () => subscription.unsubscribe()
  }, [watch]);



  const onSubmit = async (content) => {
    console.log(getValues('message'))
    if (currentChat._id && socket) {
      await sendMessage(currentUser._id, currentChat._id, getValues('message'))
      socket.emit("private message", {
        content,
        to: currentChat._id,
      });
    }
    reset({message: ''})
    // register.message = ''
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit, onErrors)}>

           
      <TextField
        sx={{opacity: '1', backgroundColor: '#a8a7a7e8', padding: '5px', borderRadius: '10px',}}
        helperText={isInvalid && 'Message cannot exceed 200 characters.'}
        error={isInvalid}
        fullWidth={true}
        // disableUnderline={true}
        variant='standard'
        placeholder='Send a message.'
        {...register('message', { minLength: 2, maxLength: 300 })}
      />
    <button>submit</button>
    {/* <Button size='large' variant="contained">Send</Button> */}
  </FormContainer>);
};

export default TextInput;
