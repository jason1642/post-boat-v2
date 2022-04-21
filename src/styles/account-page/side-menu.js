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
  mareeeeeeegin-top: 3px;
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
    color: blue;
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