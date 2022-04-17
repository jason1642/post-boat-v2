import * as React from 'react';
import { useState, useEffect } from 'react';
import {CommentContainer} from '../../styles/account-page/user-comments.js'


interface IUserPageCommentCardProps {
  data: any,
}

const UserPageCommentCard: React.FunctionComponent<IUserPageCommentCardProps> = ({data}) => {
  return (
    <CommentContainer>
      This is a comment
      {data.text}
    </CommentContainer>
  );
};

export default UserPageCommentCard;
