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
  updateMessageHistory: Function,
}


const TextInput: React.FunctionComponent<ITextInputProps> = ({socket, currentChat, unshiftCurrentChatOnMessage, updateMessageHistory, currentUser}) => {
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
    if (currentChat._id && socket &&  getValues('message').trim() !== '') {
      await sendMessage(currentUser._id, currentChat._id, getValues('message').trim()).then(res => {
        updateMessageHistory(res.data)
        console.log(res.data)
        socket.emit("private message", {
        content,
        to: currentChat._id,
        });
        unshiftCurrentChatOnMessage(currentChat._id)
      },err=>console.log(err))
      
    }
    reset({message: ''})
    // register.message = ''
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit, onErrors)}>

      <div style={{width: '100%',backgroundColor: 'white'}}>
        <TextField
        sx={{opacity: '1',}}
        helperText={isInvalid && 'Message cannot exceed 200 characters.'}
        error={isInvalid}
        // margin='normal'
        fullWidth={true}
        label='Send message'
        // variant='standard'
        color='warning'
        placeholder='Send a message.'
        {...register('message', { minLength: 2, maxLength: 300 })}
      />
      </div>  
      
    {/* <button>submit</button> */}
    <Button type='submit' size='large' component='button' variant="contained">Send</Button>
  </FormContainer>);
};

export default TextInput;
