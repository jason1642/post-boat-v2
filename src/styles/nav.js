import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const List = styled.ul`
display: flex;
margin: 0;
padding: 0;

`
export const Item = styled(Link)`
color: ${({ theme }) => theme.text};
text-decoration: none;
/* border: ${({ theme }) => theme.border}; */
padding: 6px;
height: 100%;
/* font-size: 12px; */
margin: 0;
`
