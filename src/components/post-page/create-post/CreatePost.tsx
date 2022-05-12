import * as React from 'react';
import { useState, useEffect} from 'react';
import { useForm } from 'react-hook-form'
import _ from 'lodash'
import { ErrorMessage } from '@hookform/error-message'
import {Form, SubmitSuccessfulMessage, TextArea, Input, Label, Span, Title, InputWrapper, DropDownContainer, Option, SubmitButton} from '../../../styles/post/create-post.js'
import { ErrorComponent } from '../../resources/validation-options.tsx'
import MenuItem from '@mui/material/MenuItem/index.js'
import Select from '@mui/material/Select/index.js'
import { createPostOptions } from '../../resources/validation-options.tsx'
import { createPost } from '../../api-helpers/post-api.ts'
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

interface ICreatePostProps {
  currentUser: any,
}


// Create post: - after successful submit give verification message saying it was posted to that category
// Inputs = Title, author, category, text, images, 
const inputNames = ['title', 'images', 'text']
// Can take all names from category collection in database
const categoryNames = ['general', 'sports','gaming','programming', 'cooking']
const CreatePost: React.FunctionComponent<ICreatePostProps> = ({currentUser}) => {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const [didSubmit, setDidSubmit] = useState<boolean>(false)
  const [postId, setPostId] = useState<string>('')

  const onSubmit = async data => {
    console.log(data)
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
  console.log(didSubmit)
  
  useEffect(() => {
    document.title = 'Create Post'
  }, []);
  return (
    !didSubmit ?
    (<Form
      onSubmit={handleSubmit(onSubmit, onErrors)}> 
        <Title>Create Post</Title>
        <InputWrapper>
        
      {inputNames.map(name =>
        <Label key={name}>
          <Span>{_.capitalize(name)}</Span>
      {name !== 'text' ? <Input
        {...register(name, createPostOptions[name])}
        type='text'
        placeholder={_.capitalize(name)}
        name={name}
          /> : 
      <TextArea rows={4} maxRows={4} multiline {...register(name, createPostOptions[name])} placeholder='Text' name={name} /> 
      }
  <ErrorMessage
          name={name}
          errors={errors}
          render={({ message }) => <ErrorComponent message={message} />}
        />
        </Label>
        
      )}

          <DropDownContainer>
          <FormControl sx={{textAlign: 'left',}} variant='filled' fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>

      <Select {...register('category')} name='category'>

        {categoryNames.map(ele =>
            <MenuItem
            value={ele}
            key={ele}
            >{_.capitalize(ele)}</MenuItem>
          )}
              </Select>
              </FormControl>
          </DropDownContainer>
          


    </InputWrapper>
      <SubmitButton>Submit</SubmitButton>
    </Form>)
     : 
     (<SubmitSuccessfulMessage>
        Successfully created post. Thank you for using PostBoat!
        <Link to={`/post/${postId}`}>View Post</Link>
      </SubmitSuccessfulMessage>)
  );
};

export default CreatePost;