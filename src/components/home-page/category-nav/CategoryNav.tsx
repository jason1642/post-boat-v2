import * as React from 'react';
import {Container, Item} from '../../../styles/homepage/category-nav.ts'
import _ from 'lodash'
import { useParams } from 'react-router-dom'

interface ICategoryNavProps {
}

const categoryArray = ['general', 'sports', 'gaming', 'programming', 'cooking']
const CategoryNav: React.FunctionComponent<ICategoryNavProps> = (props) => {
  const {category} = useParams()
  // console.log(category)
  
  
  // Display names of different categories, highlight current one
  // Queries on click and sets value in parameter
  // /general and / display the same posts
  return (
    <Container>
      
      {categoryArray.map(ele =>
        <Item
          key={ele}
          color={category === ele && 'green' }
          to={'/category/' + ele}>{_.capitalize(ele)}</Item>)}
    </Container>
  );
};

export default CategoryNav;
