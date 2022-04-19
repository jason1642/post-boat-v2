import _ from 'lodash';
import * as React from 'react';
// import { useState, useEffect } from 'react';
import {Container, Item} from '../../styles/account-page/nav.js'

interface INavProps {
  paramsId: string,
}
const itemsArray = ['posts', 'comments']
const Nav: React.FunctionComponent<INavProps> = ({paramsId}) => {

  return (
    <Container>

      {itemsArray.map(ele=><Item
        style={{borderBottom:'1px solid white'}}
        to={`/user/${paramsId}/${ele}`}>{_.capitalize(ele)}</Item> )}




    </Container>
  );
};

export default Nav;
