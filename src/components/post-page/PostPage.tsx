import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Main, Span, Image, Text, ImageContainer, TopRow, BottomRow, CategoryName, Date, Title } from '../../styles/post/single-post-page.js'
import SideMenu from '../account-page/SideMenu.tsx'
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
    
  },[])

  return (
    
    !postData || !userData ? 
      <>404 Not Found</> : 
    <Container>
     
      
        <Main>
          <Header
            currentUser={currentUser}
            likePost={likePost}
            data={postData}
            savePost={savePost}
          />
          
          <Text>{postData.text}</Text>

          <CommentSection
            width={'100%'}
            data={postData}
            currentUser={currentUser}
          /> 
    </Main>
      

      <SideMenu onPostPage={true} paramsUserData={userData}/>

    </Container>
  );
};

export default PostPage;
