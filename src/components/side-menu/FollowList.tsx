import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { getmanyUsers } from '../api-helpers/user-api.ts';
import {List, Title, ListItem} from '../../styles/account-page/side-menu.js'
interface IFollowListProps {
  type: string,
  data: any,
  title: string,
  handleListClose: Function,

}

const FollowList: React.FunctionComponent<IFollowListProps> = ({type, title, data, handleListClose}) => {

  const [usersArray, setUsersArray] = useState<Array<any>>([])
  useEffect(() => {
    const whichArray = type === 'following' ? data.following : data.followers
    getmanyUsers(whichArray).then(res => {
      setUsersArray(res.data)
      console.log(res)
    }).catch(err => { 
      console.log(err)
    })
    return () => {
      setUsersArray([])
    }
  }, []);
  useEffect(() => {
    console.log(usersArray)
  }, []);
  return (
    <List>
      <Button onClick={()=>handleListClose()}>Back</Button>
      <Title style={{marginBottom: '10px'}}>{data.username}{title}</Title>
      {
        usersArray.length > 0 && usersArray.map(ele =>
          <ListItem
            key={ele._id}
            to={`/user/${ele._id}`}>{ele.username}</ListItem>)
      }
    </List>
  );
};

export default FollowList;
