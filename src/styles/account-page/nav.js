import styled from 'styled-components';
import { Link} from 'react-router-dom'
export const Container = styled.div`
  display: flex;
  width: 85%;
  padding: 2px 10px;
  max-width: 1280px;
  margin-top: 4px;
  border-radius: 4px;
  background-color: ${({theme})=>theme.elementBackground};
`;

export const Item = styled(Link)`
  display: flex;

  padding: 8px;
  font-size: 1.1em;
  text-decoration: none;
  color: ${({theme})=>theme.text};
`;