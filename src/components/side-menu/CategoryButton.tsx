import * as React from 'react';
import { useState, useEffect } from 'react';
import {Section, Title, SubscribeButton, Span, LinkButton} from '../../styles/account-page/side-menu.js'
import { subscribeToCategory, getCategoryByName } from '../api-helpers/user-api.ts'
import Button from '@mui/material/Button';

interface ICategoryButtonProps {
  postData: any, 
  currentUser: any,

}

const CategoryButton: React.FunctionComponent<ICategoryButtonProps> = ({postData, currentUser}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [categoryData, setCategoryData] = useState<any>(undefined)
  const handleSubscribeToCommunity = async () => {
    await subscribeToCategory(currentUser._id, postData.category).then(res => {
      console.log(res)
      setIsSubscribed(!isSubscribed)
    }, err=> console.log(err))
  }

  useEffect(() => {
    getCategoryByName(postData.category).then(res => {
      setCategoryData(res.data)
      if (currentUser.category_subscriptions.find(e => e === res.data._id)) {
        setIsSubscribed(true)
      }
    })
  }, []);
  return <Section>
    <LinkButton to={`/category/${postData.category}`}>Community: /{postData.category}</LinkButton>

    {categoryData && <Span>{categoryData.followers.length} members</Span>}
    <SubscribeButton
    onClick={handleSubscribeToCommunity}
    >
    {isSubscribed ? 'Unsubscribe' : 'Subscribe'}</SubscribeButton>
</Section>;
};

export default CategoryButton;
