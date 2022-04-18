import * as React from 'react';
import { useState, useEffect } from 'react';
import {Body, BottomRow, CommentContainer, Span, TopRow} from '../../styles/account-page/user-comments.js'


interface IUserPageCommentCardProps {
  commentData: any, 
  postData: any,
}

const UserPageCommentCard: React.FunctionComponent<IUserPageCommentCardProps> = ({commentData, postData}) => {
  return (
    <CommentContainer>
      <TopRow>
        <Span>
          {commentData.author.username} commented on {postData.title}
        </Span>
      </TopRow>
      <Body>

      {commentData.text}
      </Body>
      <BottomRow>
        <Span>Reply</Span>
        <Span>Likes</Span>
        <Span></Span>

      </BottomRow>
    </CommentContainer>
  );
};

export default UserPageCommentCard;
