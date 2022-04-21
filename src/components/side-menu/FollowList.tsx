import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { getmanyUsers } from '../api-helpers/user-api.ts';
import {List, Title, Item} from '../../styles/account-page/side-menu.js'
import { totalmem } from 'os';
interface IFollowListProps {
  type: string,
  data: any,
  title: string,
  handleListClose: Function,

}

const FollowList: React.FunctionComponent<IFollowListProps> = ({type, title, data, handleListClose}) => {

  const [usersArray, setUsersArray] = useState<Array<any>>()
  useEffect(() => {
    const whichArray = type === 'following' ? data.following : data.followers
    getmanyUsers(whichArray).then(res => {
      console.log(res)
    }).catch(err => { 
      cosole.log(err)
    })
  }, []);
  return (
    <List>
      <Button onClick={()=>handleListClose()}>Back</Button>
      <Title>{data.username}{title}</Title>
      {
        usersArray && usersArray.map(ele=><Item>ele.username</Item>)
      }
    </List>
  );
};

export default FollowList;
