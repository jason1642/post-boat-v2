import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container} from '../../../styles/post/comment-section/comment-section.js'
import Comment from './Comment.tsx';
import  type {CommentModel} from '../../../types/comment-interface.ts'
import type {PostModel} from '../../../types/post-interface.ts'
import Form from './Form.tsx'

interface ICommentSectionProps {
  data: PostModel
}

const CommentSection: React.FunctionComponent<ICommentSectionProps> = ({data}) => {
  
  
  
  
  return (
    <Container>
      <Form

      />


      {data.comments.map((ele: CommentModel, i: number) =>
        <Comment
          key={i}
          // commentModel={CommentModel}
        commentData={ele} />)}
    </Container>
  );
};

export default CommentSection;
