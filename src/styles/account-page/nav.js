import styled from 'styled-components';
import { Link} from 'react-router-dom'
export const Container = styled.div`
  display: flex;
  width: 85%;
  padding: 2px 10px;
  background-color: darkslategrey;
`;

export const Item = styled(Link)`
  display: flex;
  padding: 10px;
  text-decoration: none;
  color: ${({theme})=>theme.text};
`;