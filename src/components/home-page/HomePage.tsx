import * as React from 'react';
import {Main, Title} from '../../styles/homepage/homepage.js'
import CategoryNav from './category-nav/CategoryNav.tsx';
import Feed from './feed/Feed.tsx'
interface IHomePageProps {
}



const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (<Main>
    <Title>Home page</Title>
    <CategoryNav />

    <Feed />
  </Main>);
};

export default HomePage;
