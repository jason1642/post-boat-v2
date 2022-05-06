import * as React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai/index.js'
import moment from 'moment'
import { BottomRow, Text, ImageContainer, Image, Container, CreatedBy, Span, Main, TopRow, Title } from '../../styles/post/post-card.ts'
import PostModal from './modal/PostModal.tsx';
import { likePost, savePost } from '../api-helpers/post-api.ts'
import { useSelector } from 'react-redux';

interface IPostCardProps {
  data: any,
  num: Number,
  modalIsOpen: boolean,
  cardPadding: string,
  textAlign: string,
}

interface LikedSaved {
  likes: {
    is_liked: boolean,
    total_likes: number
  }
  saves: {
    is_saved: boolean, 
    total_saves: number
  }
}

const styles = {
  heartIcon: {
    color: 'red',
    height: '100%',
    width: '18px',
  },
}
const PostCard: React.FunctionComponent<IPostCardProps> = ({ data, cardPadding }) => {


  const [modalIsOpen, setIsOpen] = useState(false);
  const currentUser = useSelector((state: any) => state.currentUser);

  const [likedSaved, setLikedSaved] = useState<LikedSaved>({
    likes: {
      is_liked: false,
      total_likes: data.liked_by.length
    },
    saves: {
      is_saved: false,
      total_saves: data.saved_by.length
    }
  })

  useEffect(() => {
    console.log(data, likedSaved)
    if (currentUser._id){
      if(currentUser.liked_posts.find(pId => pId === data._id))
      setLikedSaved(prev => ({
        ...prev,
        likes: {
          ...prev.likes,
          is_liked: true
        }
      }))
    if (currentUser.saved_posts.find(sId => sId === data._id))
      setLikedSaved(prev => ({
        ...prev, 
        saves: {
          ...prev.saves,
          is_saved: true
        }
      }))
  }
    
    
    // console.log(likedSaved)
    
  }, [])
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleSetState = (name: string, property: string, length?:number) => {
    // ex : name = likes, isnamed = is_liked: string
    if (isNaN(length) === false) {
      setLikedSaved(prev => {
        return ({
          ...prev,
          [name]: {
            ...prev[name],
            [property]: length
          }
        })
      })
    } else {
      setLikedSaved(prev => {
        // console.log(prev[name][property])
        return ({
          ...prev,
          [name]: {
            ...prev[name],
            [property]: !prev[name][property]
          }
        })
      })
    }
    // console.log(likedSaved)
  }
  // console.log(data, likedSaved)
  return (
    <Container
      cardPadding={cardPadding}
      textAlign={'center'}
    >
      <TopRow>
        <CreatedBy to={`/user/${data.author.user_id}`}>Posted by u/<b>{data.author.username}</b>&nbsp;{moment().startOf('day').fromNow(data.created_at)} ago</CreatedBy>
        <Title
          onClick={openModal}
        >{data.title}</Title>
      </TopRow>

      <Main onClick={openModal}>
        {data.images.length === 0 ?
          <Text>{data.text} </Text>
          :
          <ImageContainer
            textAlign={'center'}
          >
            {/* <Image alt='placeholder' src={'https://images.unsplash.com/photo-1649258895691-3f3ac37bc408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'} /> */}
          </ImageContainer>
        }
    </Main>


      <BottomRow>
        <Span onClick={() => {
          currentUser._id && likePost(data._id, currentUser._id).then(res => {
            console.log(res.data.length)
            handleSetState('likes', 'total_likes', res.data.length)
            handleSetState('likes', 'is_liked')
            console.log(likedSaved.likes.total_likes)
          })
          
        }}>
          {likedSaved.likes.is_liked ? <AiFillHeart style={styles.heartIcon} /> : <AiOutlineHeart style={styles.heartIcon} />}
          </Span>
        <Span>{likedSaved.likes.total_likes} Likes</Span>
        <Span>{data.comments.length} {data.comments.length !== 1 ? 'Comments': 'Comment'}</Span>
        
        {currentUser._id &&
          <Span
            style={{backgroundColor: 'grey', padding: '2px 5px',borderRadius: '8px', color: 'black',}}
            onClick={() => {
              currentUser._id && savePost(data._id, currentUser._id).then(res => {
                handleSetState('saves', 'total_saves', res.data.length)
                handleSetState('saves', 'is_saved')
              })
            }}
          >{ likedSaved.saves.is_saved ? 'Unsave' : 'Save'}</Span>}

        </BottomRow>
      <PostModal
        currentUser={currentUser}
        savePost={savePost}
        likePost={likePost}
        data={data}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen} />
    </Container>

  );
};

export default PostCard;
