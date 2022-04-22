import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Title, FormBox, SubmitButton, TextInput } from '../../../styles/post/comment-section/form.js'
import {commentOnPost} from '../../api-helpers/post-api.ts'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { commentOptions } from '../../resources/validation-options.tsx';
import {ErrorComponent } from '../../resources/validation-options.tsx'
interface IFormProps {
  currentUser: any,
  postData: any
}

const Form: React.FunctionComponent<IFormProps> = ({ postData, currentUser }) => {
  const {register, formState: {errors}, handleSubmit} = useForm()


  // comment api helper needs an object - 
  // {post_id: string, user_id: string, text: string, author: {user_id: string, username: string, profile_image:string}}
  const onSubmit = (data) => {
    commentOnPost({
    post_id: postData._id,
    user_id: currentUser._id,
    text: data.comment,
    author: {
      user_id: currentUser._id,
      username: currentUser.username,
      profile_image: 'someimage.jpg'
    }
  }).then(res => {
      console.log(res)
    })
  }
  const onErrors = errors => console.error(errors);

  return (
    <Container>
      <Title>Comment as {currentUser.username}</Title>
      <FormBox onSubmit={()=>handleSubmit(onSubmit, onErrors)}>

        <TextInput
          {...register('comment', commentOptions.comment)}
          placeholder='What are your thoughts?'
          name='comment'

        />
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems:'center',}}>
          <ErrorMessage
          name={'comment'}
          errors={errors}
          render={({ message }) => <ErrorComponent message={message} />}
        />
        <SubmitButton
          type='submit'
          name='submit'
          />
        </div>
        
      </FormBox>
    </Container>
  );
};

export default Form;
