import * as React from 'react';
import { useState, useEffect } from 'react';
import {Container, Title, Item, LinkButton, ItemButton, Section, SubscribeButton, FollowButton} from '../../styles/account-page/side-menu.js'
import moment from 'moment'
import Button from '@mui/material/Button';
import { followUser, subscribeToCategory } from '../api-helpers/user-api.ts'
import FollowList from './FollowList.tsx'
import CategoryButton from './CategoryButton.tsx'
import {Link} from 'react-router-dom'
// import {RiUserFollowFill, RiUserUnfollowFill} from 'react-icons/ri/index.js'
// import { Link } from 'react-router-dom';
interface ISideMenuProps {
  currentUser: any,
  paramsUserData: any,
  onPostPage: boolean,
  postData: any,
}


const ButtonRender = (isFollowing:boolean, handleFollow: Function) => {
  if (isFollowing) {
    return <Button size='small' onClick={()=>handleFollow()} sx={{ width: 100, fontSize: 10 }} variant='contained'>Unfollow</Button>
  }
  
  return (
    <Button size='small' onClick={()=>handleFollow()} sx={{ width: 100, fontSize: 10 }} variant='contained'>Follow</Button>
  )
}

const SideMenu: React.FunctionComponent<ISideMenuProps> = ({paramsUserData, onPostPage, currentUser, postData }) => {
  
  const [isFollowing, setIsFollowing] = useState(false)
  const [followersNum, setFollowersNum] = useState<number>(paramsUserData.followers.length)
  const [followingList, setFollowingList] = useState<boolean>(false)
  const [followerList, setFollowerList] = useState<boolean>(false)

  const handleFollow = async () => {
    await followUser(currentUser._id, paramsUserData._id).then(res => {
      // console.log(res)
      setIsFollowing(!isFollowing)
      setFollowersNum(res.data.followers.length)
    }).catch(err => {
      console.log(err)
    })
  }
  const handleListClose = () => {
    setFollowerList(false)
    setFollowingList(false)
}

 
// console.log(onPostPage, postData)
  useEffect(() => {
    const isUserFollowing = currentUser.following.find(uid => uid === paramsUserData._id)
    console.log(isUserFollowing)
    if(isUserFollowing) setIsFollowing(true)
  }, []);
  return (
    <Container>
      {
        followingList ? <FollowList title=" is Following" type={'following'} data={paramsUserData} handleListClose={handleListClose}/> : 
          followerList ? <FollowList title="'s Followers" type={'followers'} data={paramsUserData} handleListClose={handleListClose} /> :
            <>
      {onPostPage ?
        <LinkButton to={`/user/${paramsUserData._id}`}>u/{paramsUserData.username} </LinkButton>
        :
         <Title>u/{paramsUserData.username}</Title>

    }
      <Item>Joined {moment(paramsUserData.created_at).fromNow()}</Item>
              <ItemButton  onClick={()=>setFollowerList(true)}>Followers: {followersNum}</ItemButton>
      <ItemButton onClick={()=> setFollowingList(true)}>Following: {paramsUserData.following.length}</ItemButton>

      {currentUser._id && paramsUserData._id !== currentUser._id ?
        ButtonRender(isFollowing, handleFollow) : <></>}
      </>

        
      }
      <Link style={{textDecoration:'none',color: 'inherit'}} to={`/messenger/${paramsUserData._id}`}><Button variant='contained'>Send message</Button></Link>

      {
        onPostPage && postData && 
        <CategoryButton
          currentUser={currentUser}
          postData={postData} />
      }
    </Container>
  );
};

export default SideMenu;


