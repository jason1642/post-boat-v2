import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme})=>theme.cardBackground};
  border-radius: 8px;
  padding: 15px 5px;
  height: 75vh;
  flex-grow: 2;
  gap: 3px;
`; 
export const Item = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 3px;
`
export const ItemButton = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 3px;
  &:hover{
    cursor: pointer;
    color: lightblue;
  }
`
export const Title = styled.div`

`

export const Button = styled.div`
  background-color: grey;
  padding: 5px 10px;
  border-radius: 6px;
  &:hover{
    cursor: pointer;
  }
`
export const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  &:hover{
    color: #44b2ff;
  }
`


export const FollowButton = styled.div`
  /* backgr */
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

`
export const ListItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  background-color: #8080802b;
  border-radius: 4px;
  padding: 5px 0px;
  &:hover{
    color: orange;
  }
` 



export const Section = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-top: 15px;
  gap: 7px;
`

export const SubscribeButton = styled.div`
  background-color: grey;
  width: 60%;
  border-radius: 8px;
  background-color: darkslateblue;
  font-size: 12px;
  margin: 0 auto;
  padding: 5px 9px;
  &:hover{
    cursor: pointer;

  }
`

export const Span = styled.div`
  font-size: 12px;
`;