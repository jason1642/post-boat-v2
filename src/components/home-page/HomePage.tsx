import * as React from 'react';
import {Main,Container, Title, Wrapper} from '../../styles/homepage/homepage.js'
import CategoryNav from './category-nav/CategoryNav.tsx';
import Feed from './feed/Feed.tsx'
import SideMenu from './side-menu/SideMenu.tsx'
interface IHomePageProps {
  currentUser: any
}


// Pass current user props
const HomePage: React.FunctionComponent<IHomePageProps> = ({currentUser}) => {
  return (<Container>
  
    
    <Main>
      
      <Wrapper>
        <CategoryNav />
        <Feed />
      </Wrapper>
      
      <SideMenu currentUser={currentUser}/>

    </Main>
    
  </Container>);
};

export default HomePage;
