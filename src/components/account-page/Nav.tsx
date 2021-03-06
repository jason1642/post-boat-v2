import _ from 'lodash';
import * as React from 'react';
import {Container, Item} from '../../styles/account-page/nav.js'
import {useMatch } from 'react-router-dom'
interface INavProps {
  paramsId: string,
  currentUser: any,
}

const Nav: React.FunctionComponent<INavProps> = ({ paramsId, currentUser }) => {
  const baseMatch = useMatch('/user/:id/')
  const pathOptions = [
    { name: 'posts', path_match: useMatch('/user/:id/posts') || baseMatch  ? true : false },
    { name: 'comments', path_match: useMatch('/user/:id/comments') },
    { name: 'saved', path_match: useMatch('/user/:id/saved') }
  ]

  return (
    <Container>

      {pathOptions.map(ele =>
        <Item
          style={{borderBottom: ele.path_match && '1px solid white', display: (ele.name === 'saved' && currentUser._id !== paramsId) && 'none'}}
        to={`/user/${paramsId}/${ele.name}`}>
        {_.capitalize(ele.name)}</Item> 
        )}
    


    </Container>
  );
};

export default Nav;
