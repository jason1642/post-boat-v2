import * as React from 'react';
import { useState, useEffect } from 'react';
import {Body, BoldTitle, BottomRow, CommentContainer, Span, TopRow} from '../../styles/account-page/user-comments.js'
import _ from 'lodash'
// post data of corresponding comment data
interface IUserPageCommentCardProps {
  commentData: any, 
  postData: any,
}

const UserPageCommentCard: React.FunctionComponent<IUserPageCommentCardProps> = ({commentData, postData}) => {


  return (
    <CommentContainer>
      <TopRow>
        <BoldTitle style={{paddingLeft:'4px'}}>{commentData.author.username}</BoldTitle>
        <Span style={{color: 'darkgrey'}}>commented on</Span>
          <BoldTitle>{postData.title}</BoldTitle>
        <Span>In category:</Span>
          <BoldTitle>{_.capitalize(postData.category)}</BoldTitle>
      </TopRow>
      <Body>

      {commentData.text}
      </Body>
      <BottomRow>
        <Span>{postData.liked_by.length} Likes</Span>
        <Span>Reply</Span>

      </BottomRow>
    </CommentContainer>
  );
};

export default UserPageCommentCard;
