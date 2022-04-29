import * as React from 'react';
import styled from 'styled-components';
import Nav from './Nav.tsx'
import Toggle from '../../styles/dark-mode/ToggleModeButton';
import { IoBoatOutline, IoBoatSharp } from 'react-icons/io5/index.js'
import { Link } from 'react-router-dom';
import GuestNav from './GuestNav.tsx';

const Container = styled.header`
  background-color: ${({ theme }) => theme.header} ;
  /* border: 1px solid white; */
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 46px;
`;
const Title = styled(Link)`
  text-decoration: none;
  color: ${({theme})=>theme.text};
  padding-left: 10px;
  font-size: 1.5rem;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
interface IHeaderProps {
  theme: string,
  themeToggler: any,
  currentUser: any
}

const Header: React.FunctionComponent<IHeaderProps> = ({ theme, themeToggler, currentUser }) => {
  return (
    <Container>
      <Title to='/'>POST 
        { theme === 'light' ? <IoBoatSharp /> : <IoBoatOutline/>  }
        BOAT
      </Title>
      <Wrapper>
      {currentUser.authenticated && <div style={{fontSize:"8px"}}>Sailing as {currentUser.username}</div>}
      <Toggle theme={theme} toggleTheme={themeToggler} />
        {
          currentUser.authenticated ?
            <Nav currentUser={currentUser} theme={theme} />
            : <GuestNav currentUser={currentUser} theme={theme} />

    }
    </Wrapper>
    </Container>
  )
};

export default Header;
