import * as React from 'react';
import styled from 'styled-components';
import Nav from './Nav.tsx'
import Toggle from '../../styles/dark-mode/ToggleModeButton';
import {IoBoatOutline,IoBoatSharp} from 'react-icons/io5/index.js'
const Container = styled.header`
  background-color: ${({ theme }) => theme.header} ;
  border: 1px solid white;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 46px;
`;
const Title = styled.div`


`
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
interface IHeaderProps {
  theme: string,
  themeToggler: any
}

const Header: React.FunctionComponent<IHeaderProps> = ({ theme, themeToggler }) => {
  return (
    <Container>
      <Title>POST 
        { theme === 'light' ? <IoBoatSharp /> : <IoBoatOutline/>  }
        BOAT
      </Title>
    <Wrapper>
      <Toggle theme={theme} toggleTheme={themeToggler} />

      <Nav theme={theme}/>
    </Wrapper>
    </Container>
  )
};

export default Header;
