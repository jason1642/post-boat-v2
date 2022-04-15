import styled from 'styled-components';
// import {Link} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  border-radius: 12px;
  justify-content: flex-start;
  background-color: ${({theme})=>theme.cardBackground};
  align-items: center;
  /* height: 100%; */
  flex-grow: 2;
  /* background-color: purple; */
  font-size: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

export const Item = styled.li`
  border: 1px solid black;
  padding: 5px;
`