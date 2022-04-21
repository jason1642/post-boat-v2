import * as React from 'react';
import { useState, useEffect } from 'react';
import {Body, BoldTitle, BottomRow, CommentContainer, Span, TopRow, LeftSide, RightSide} from '../../styles/account-page/user-comments.js'
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
        <LeftSide>
        <BoldTitle to={`/user/${commentData.author.user_id}`} style={{paddingLeft:'4px', overflow: 'visible', color: 'orange'}}>{commentData.author.username}</BoldTitle>
          <Span style={{ flexGrow: '1',overflow: 'visible', }}>commented on</Span>
        <BoldTitle
          style={{display: 'inline-block', width: 'calc(80%)', fontSize: '10px', color: 'skyblue', textOverflow:'ellipsis'}}
          to={`/post/${postData._id}`}>{postData.title}</BoldTitle>
        </LeftSide>
        <RightSide>
        <Span>In category:</Span>
          <BoldTitle style={{color: 'green'}} to={`/category/${postData.category}`}>{_.capitalize(postData.category)}</BoldTitle>
          </RightSide>
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
