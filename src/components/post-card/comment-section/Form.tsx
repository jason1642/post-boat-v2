import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Title, FormBox, SubmitButton, TextInput } from '../../../styles/post/comment-section/form.js'
import {commentOnPost} from '../../api-helpers/post-api.ts'

interface IFormProps {
  currentUser: any,
  postData: any
}

const Form: React.FunctionComponent<IFormProps> = ({ postData, currentUser }) => {

  const [userInput, setUserInput] = useState<string>('')
  const requestData = {
    post_id: postData._id,
    user_id: currentUser._id,
    text: userInput,
    author: {
      user_id: currentUser._id,
      username: currentUser.username,
      profile_image: 'someimage.jpg'
    }
  }
  const handleChange = (e) => {
    setUserInput(e.target.value)
    console.log(userInput)
  }

  // comment api helper needs an object - 
  // {post_id: string, user_id: string, text: string, author: {user_id: string, username: string, profile_image:string}}
  const handleSubmit = () => {
    commentOnPost(requestData).then(res => {
      console.log(res)
  
    })

  }
  return (
    <Container>
      <Title>Comment as {currentUser.username}</Title>
      <FormBox
        onSubmit={e => {
          e.preventDefault()
          if(userInput.length <= 2) return alert('Comment must be atleast two charaters.')
          handleSubmit()
          setUserInput('')
        }}
      >

        <TextInput
          placeholder='What are your thoughts?'
          name='comment'
          value={userInput}
          onChange={handleChange}
        />
        <SubmitButton
          type='submit'
          name='submit'
          />
      </FormBox>
    </Container>
  );
};

export default Form;
