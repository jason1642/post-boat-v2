import * as React from 'react';
import Container from '@mui/material/Container'

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (<Container>
    This is the header
  </Container>);
};

export default Header;
