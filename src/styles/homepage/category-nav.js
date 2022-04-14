import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const Container = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 80%;
  border-radius: 12px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Item = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 5px;


  &:hover{
    color: blue;
  }
`