import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, CategoryName, Title, TopRow, BottomRow,Span, Date } from '../../../styles/post/modal-header.js'
import moment from 'moment'
import {Link} from 'react-router-dom'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai/index.js'
import { BsSave, BsSaveFill} from 'react-icons/bs/index.js'
import _ from 'lodash'

interface IHeaderProps {
  data: any,
  likePost: Function,
  currentUser: any,
  savePost: Function,
}
interface LikedSaved {
  liked: boolean,
  saved: boolean
}
const Header: React.FunctionComponent<IHeaderProps> = ({data, likePost, savePost, currentUser}) => {
  const [likesNum, setLikesNum] = useState(data.liked_by.length)
  const [likedSaved, setLikedSaved] = useState<LikedSaved>({
    liked: false,
    saved: false
  })
  const [savedNum, setSavedNum ] = useState(data.saved_by.length)
  useEffect(() => {
    if (currentUser._id) {
      const isLiked = data.liked_by.find((e:string) => e === currentUser._id)
      const isSaved = data.saved_by.find((c:string) => c === currentUser._id)
      isLiked ? setLikedSaved(prev => ({ ...prev, liked: true })) : setLikedSaved(prev=>({...prev, liked: false}))
      isSaved ? setLikedSaved(prev => ({ ...prev, saved: true })) : setLikedSaved(prev => ({ ...prev, saved: false }))
      


    }



    console.log(likedSaved)
  }, [])
  


  return (
    <Container>

      <TopRow>
        <CategoryName>/{_.capitalize(data.category)}</CategoryName>
        <Date>Posted by u/{data.author.username} {moment().startOf('day').fromNow(data.created_at)} ago</Date>
      </TopRow>

      <Title>
        {data.title}
      </Title>

      <BottomRow>
        <Span>{data.comments.length} {data.comments.length !== 1 ? 'Comments': 'Comment'}</Span>
         
        
        <Span onClick={() => {
          likePost(data._id, currentUser._id).then(res => { setLikesNum(res.data.length) })

          setLikedSaved(prev => ({ ...prev, liked: !likedSaved.liked }))
          }
        }>
            {likedSaved.liked  ?
            <AiFillHeart style={{color: 'red', fontSize: '16px'}} /> :
            <AiOutlineHeart style={{ color: 'red', fontSize: '16px' }} />}
          {likesNum} {data.liked_by.length !== 1 ? 'Likes' : 'Like'}
        </Span>
        

        <Span
          onClick={() => {
            savePost(data._id, currentUser._id).then(res => { setSavedNum(res.data.length) })

            setLikedSaved(prev => ({ ...prev, saved: !likedSaved.saved }))
          }}
        >
          
          {likedSaved.saved  ?
            <BsSaveFill style={{color: 'green', fontSize: '14px'}} /> :
            <BsSave style={{ color: 'black', fontSize: '14px' }} />}{savedNum} {data.saved_by.length !== 1 ? 'Saves' : 'Save'}</Span>
        


        <Span
          style={{ justifySelf: 'flex-end' }}>
          <Link
            style={{color: 'inherit',textDecoration: 'none'}}
            to={`/category/` + data.category}
          >More posts from /{data.category}</Link></Span>
      </BottomRow>
      
    </Container>
  );
};

export default Header;
