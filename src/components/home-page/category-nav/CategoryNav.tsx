import * as React from 'react';
import styled from 'styled-components';
import {Container, Item} from '../../../styles/homepage/category-nav.js'

interface ICategoryNavProps {
}

const categoryArray = ['general', 'sports', 'gaming', 'programming', 'cooking']
const CategoryNav: React.FunctionComponent<ICategoryNavProps> = (props) => {
  
  
  
  // Display names of different categories, highlight current one
  // Queries on click and sets value in parameter
  // /general and / display the same posts
  return (
    <Container>
      Categories
      {categoryArray.map(ele => <Item to={'/category/' + ele}>{ele}</Item>)}
    </Container>
  );
};

export default CategoryNav;
