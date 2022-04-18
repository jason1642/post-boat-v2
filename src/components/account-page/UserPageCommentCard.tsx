import * as React from 'react';
import { useState, useEffect } from 'react';
import {Body, BottomRow, CommentContainer, Span, TopRow} from '../../styles/account-page/user-comments.js'


interface IUserPageCommentCardProps {
  data: any,
}

const UserPageCommentCard: React.FunctionComponent<IUserPageCommentCardProps> = ({data}) => {
  return (
    <CommentContainer>
      <TopRow>
        <Span>
          {data.author.username} commented on {}
        </Span>
      </TopRow>
      <Body>

      {data.text}
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
