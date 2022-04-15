import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Title, FormBox, SubmitButton, TextInput } from '../../../styles/post/comment-section/form.js'
interface IFormProps {
}

const Form: React.FunctionComponent<IFormProps> = (props) => {

  const [userInput, setUserInput] = useState<string>('')

  return (
    <Container>
      <Title>Comment as </Title>
      <FormBox
        // onSubmit={}
      >

        <TextInput
          placeholder='What are your thoughts?'
          name='comment'
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
