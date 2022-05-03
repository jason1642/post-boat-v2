import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const Container = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  /* border: 1px solid orange; */
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin: 0;
  padding: 5px;
  
  &:hover{
    cursor: pointer;

  }
`;  

export const AvatarWrapper = styled.div`



`

export const InfoBox = styled.div`
  display: flex;
  flex-grow: 4;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1rem;
`;

export const BottomRow = styled.div`

`
export const TopRow = styled.div`

`