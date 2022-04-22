import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import _ from 'lodash'
import { ErrorMessage } from '@hookform/error-message'
import {Form, SubmitSuccessfulMessage, Input, Label, Span, Title, DropDownContainer, Option, SubmitButton, Select} from '../../../styles/forms/forms.js'
import { ErrorComponent } from '../../resources/validation-options.tsx'
import { createPostOptions } from '../../resources/validation-options.tsx'
import { createPost } from '../../api-helpers/post-api.ts'
import { Link } from 'react-router-dom';
interface ICreatePostProps {
  currentUser: any,
}


// Create post: - after successful submit give verification message saying it was posted to that category
// Inputs = Title, author, category, text, images, 
const inputNames = ['title', 'text', 'images']
// Can take all names from category collection in database
const categoryNames = ['general', 'sports','gaming','programming', 'cooking']
const CreatePost: React.FunctionComponent<ICreatePostProps> = ({currentUser}) => {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [didSubmit, setDidSubmit] = useState<boolean>(false)
  const [postId, setPostId] = useState<string>('')

  const onSubmit = async data => {
    console.log(currentUser._id)
    await createPost(_.assign(data, {
      author: { 
        user_id: currentUser._id,
        username: currentUser.username,
        profile_image: '',
      }
    })).then(res => {
      console.log(res)
      setDidSubmit(true)
      setPostId(res.data._id)
    }).catch(err=>console.log(err))
  }
  const onErrors = errors => console.error(errors);

  return (
    !didSubmit ?
    <Form
      onSubmit={handleSubmit(onSubmit, onErrors)}> 
        <Title>Create Post</Title>
      {inputNames.map(name =>
        <Label key={name}>
          <Span>{_.capitalize(name)}</Span>
      <Input
        {...register(name, createPostOptions[name])}
        type='text'
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

      <DropDownContainer>
        Category
      <Select {...register('category')} name='category'>

        {categoryNames.map(ele =>
            <Option
            value={ele}
            key={ele}
            >{_.capitalize(ele)}</Option>
          )}
      </Select>
    </DropDownContainer>
      
      <SubmitButton>Submit</SubmitButton>
    </Form>
     : 
     (<SubmitSuccessfulMessage>
        Successfully created post. Thank you for using PostBoat!
        <Link to={`/post/${postId}`}>View Post</Link>
      </SubmitSuccessfulMessage>)
  );
};

export default CreatePost;