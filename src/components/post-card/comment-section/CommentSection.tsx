import * as React from 'react';
// import { useState, useEffect } from 'react';
import {Container, CommentContainer, GuestMessage, Title} from '../../../styles/post/comment-section/comment-section.js'
import Comment from './Comment.tsx';
import  type {CommentModel} from '../../../types/comment-interface.ts'
import type {PostModel} from '../../../types/post-interface.ts'
import Form from './Form.tsx'

interface ICommentSectionProps {
  data: PostModel,
  currentUser: any,
  width: string,
}

const CommentSection: React.FunctionComponent<ICommentSectionProps> = ({data, currentUser, width}) => {
  
  

  return (
    <Container width={width}>
      <Title>Comments ({data.comments.length})</Title>
      {
        currentUser._id ? <Form
        postData={data}
        currentUser={currentUser}
        /> :
          <GuestMessage>
            Sign in to comment
          </GuestMessage>
          
      }
      


      <CommentContainer>
      {data.comments.map((ele: CommentModel, i: number) =>
        <Comment
          postData={data}
          currentUser={currentUser}
          key={i}
          // commentModel={CommentModel}
        commentData={ele} />)}
      </CommentContainer>
    </Container>
  );
};

export default CommentSection;
