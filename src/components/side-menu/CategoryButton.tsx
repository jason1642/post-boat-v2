import * as React from 'react';
import { useState, useEffect } from 'react';
import {Section, Title, SubscribeButton} from '../../styles/account-page/side-menu.js'
import { subscribeToCategory, getCategoryByName } from '../api-helpers/user-api.ts'
import Button from '@mui/material/Button';

interface ICategoryButtonProps {
  postData: any, 
  currentUser: any,

}

const CategoryButton: React.FunctionComponent<ICategoryButtonProps> = ({postData, currentUser}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)

  const handleSubscribeToCommunity = async () => {
    await subscribeToCategory(currentUser._id, postData.category).then(res => {
      console.log(res)
      setIsSubscribed(!isSubscribed)
    }, err=> console.log(err))
  }

  useEffect(() => {
    getCategoryByName(postData.category).then(res => {
      if (currentUser.category_subscriptions.find(e => e === res.data._id)) {
        setIsSubscribed(true)
      }
    })
  }, []);
  return <Section>
  <Title>Community: </Title>
    <Button
      variant='contained'
      sx={{ width: 140, fontSize: 9 }} 
    onClick={handleSubscribeToCommunity}
    >
    {isSubscribed ? 'Unsubscribe from' : 'Subscribe to'}  {postData.category}</Button>
</Section>;
};

export default CategoryButton;
