import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { FormContainer, UserInput, Submit } from '../../../styles/messenger/messenger.js'
import Button from '@mui/material/Button'
interface ITextInputProps {
  socket: any,
  currentUser: any,
  currentChat: any,
}
type Inputs = {
  content: any
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({socket, currentChat, currentUser}) => {
  const { register, watch, handleSubmit, formState: {errors} } = useForm() 

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
    if (currentChat._id) {
      console.log(currentChat._id)

      socket.emit("private message", {
        content,
        to: currentChat._id,
      });
      // this.selectedUser.messages.push({
      //   content,
      //   fromSelf: true,
      // });
    }
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
        {...register('message', { maxLength: 300 })}
      />
    <button>submit</button>
    {/* <Button size='large' variant="contained">Send</Button> */}
  </FormContainer>);
};

export default TextInput;
