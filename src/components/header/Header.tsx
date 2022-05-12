import * as React from 'react';
import styled from 'styled-components';
import Nav from './Nav.tsx'
import Toggle from '../../styles/dark-mode/ToggleModeButton';
import { IoBoatOutline, IoBoatSharp } from 'react-icons/io5/index.js'
import { Link } from 'react-router-dom';
import GuestNav from './GuestNav.tsx';
import IconButton from '@mui/material/IconButton';

const Container = styled.header`
  /* background-color: ${({ theme }) => theme.header} ; */
  /* border: 1px solid white; */
  /* position: fixed; */
  display: flex;
  /* padding: 15px 0px; */
  /* margin-bottom: 15px; */
  z-index: 5;
  width: 100%;
  /* background-color: grey; */
  justify-content: space-between;
  align-items: center;

  min-height: 46px;
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
  padding-right: 15px;
  height: 100%;
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
      {currentUser.authenticated && <div style={{fontSize:"1rem"}}>Sailing as {currentUser.username}</div>}
        <IconButton sx={{height: 'inherit'}}><Toggle theme={theme} toggleTheme={themeToggler} />
        </IconButton> 
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
