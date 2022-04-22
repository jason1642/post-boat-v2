import styled from 'styled-components';
import { Link } from 'react-router-dom'

interface Props {
  color: string
}

export const Container = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 80%;
  border-radius: 12px;
  justify-content: space-evenly;
  align-items: center;
  padding: 4px;
  margin-bottom: 10px;
`;
// If category name matches params category, turn green
export const Item = styled(Link)<Props>`
  color: ${({color})=>color};
  text-decoration: none;
  padding: 4px;
  font-size: .8em;

  &:hover{
    color: green;
  }
`