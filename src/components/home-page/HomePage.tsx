import * as React from 'react';
import {Main,Container,  Wrapper} from '../../styles/homepage/homepage.js'
import CategoryNav from './category-nav/CategoryNav.tsx';
import Feed from './feed/Feed.tsx'
import SideMenu from './side-menu/SideMenu.tsx'
import GuestSideMenu from './side-menu/GuestSideMenu.tsx'
interface IHomePageProps {
  currentUser: any
}


// Pass current user props
const HomePage: React.FunctionComponent<IHomePageProps> = ({currentUser}) => {
  return (<Container>
  
    
    <Main>
      
      <Wrapper>
        <CategoryNav />
        <Feed currentUser={currentUser}/>
      </Wrapper>
      {
        currentUser._id ?
      
          <SideMenu currentUser={currentUser} />
          :
          <GuestSideMenu />
      }
    </Main>
    
  </Container>);
};

export default HomePage;
