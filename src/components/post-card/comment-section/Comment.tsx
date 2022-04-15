import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container} from '../../../styles/post/comment-section/comment.js'

interface ICommentProps {
  commentData: any
}

const Comment: React.FunctionComponent<ICommentProps> = ({commentData}) => {
  return (
    <Container>
      {commentData.text}
    </Container>
  );
};

export default Comment;
