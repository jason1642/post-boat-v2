import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const List = styled.ul`
display: flex;
margin: 0;
padding-left: 10px;

`
export const Item = styled(Link)`
color: ${({ theme }) => theme.text};
text-decoration: none;
/* border: ${({ theme }) => theme.border}; */
padding: 10px;
display: flex;
align-items: center;
  justify-content: center;
/* height: 100%; */

font-size: 2rem;
/* margin: 0; */
`
