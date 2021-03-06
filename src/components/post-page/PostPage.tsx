import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Main, Span, Image, Text, ImageContainer, TopRow, BottomRow, CategoryName, Date, Title } from '../../styles/post/single-post-page.js'
import SideMenu from '../side-menu/SideMenu.tsx'
import { getOnePost } from '../api-helpers/post-api.ts'
import { useParams } from 'react-router-dom'
import { getUserInfoById } from '../api-helpers/user-api.ts'
import Header from '../post-card/modal/Header.tsx'
import CommentSection from '../post-card/comment-section/CommentSection.tsx'
import { likePost, savePost } from '../api-helpers/post-api.ts';
interface IPostPageProps {
  currentUser: any,
}


const PostPage: React.FunctionComponent<IPostPageProps> = ({ currentUser }) => {
  const {id} = useParams()
  const [postData, setPostData] = useState<any>()
  const [userData, setUserData] = useState()
  useEffect(() => {
    getOnePost(id).then(res => {
      console.log(res.data)
      setPostData(res.data)
      getUserInfoById(res.data.author.user_id).then(ele => {
        setUserData(ele.data)
        console.log(ele.data)
      })
    }).catch(err => {
      console.log(err)
    })
  }, []);

  useEffect(() => {
    console.log(postData)
  },[postData])

  return (
    
    postData && userData ? 
      
    <Container>
     
        <Main>
          <Header
            currentUser={currentUser}
            likePost={likePost}
            data={postData}
            savePost={savePost}
            onPostPage={true}
          />
          
          {postData.images.length > 0 &&
            <ImageContainer>
              <Image
                // alt={data.title}
                src={postData.images[0]}
              />
            </ImageContainer>
          }
          <Text>{postData.text}</Text>
          

          <CommentSection
            width={'100%'}
            data={postData}
            currentUser={currentUser}
          /> 
    </Main>
      

        <SideMenu postData={postData} currentUser={currentUser} onPostPage={true} paramsUserData={userData}/>

      </Container>
    : <>404 Not Found</> 


  );
};

export default PostPage;
