import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Header, Span, Footer, Body, AuthorName, DateCreated} from '../../../styles/post/comment-section/comment.js'
import { likeComment } from '../../api-helpers/post-api.ts'
import moment from 'moment'
interface ICommentProps {
  commentData: any,
  currentUser: any,
  postData: any
}

const Comment: React.FunctionComponent<ICommentProps> = ({ postData, commentData, currentUser }) => {
  
  const requestData = {
    post_id: postData._id,
    user_id: currentUser._id,
    comment_id: commentData._id
  }
  return (
    <Container>
      <Header>
        <AuthorName>{commentData.author.username} - </AuthorName>
        <DateCreated>&nbsp;{moment(commentData.created_at).fromNow()}</DateCreated>
      </Header>
      <Body>
        {commentData.text}
      </Body>
      <Footer>

        <Span
          
        >{commentData.liked_by.length} Likes</Span>
        <Span>Reply</Span>
        <Span
        onClick={() => {
          likeComment(requestData)
        }}
        >Like</Span>
      </Footer>
    </Container>
  );
};

export default Comment;
