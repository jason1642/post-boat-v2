import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  padding: 10px;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  text-align: left;
  /* border: 1px solid black; */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);

`;
export const CreatedBy = styled(Link)`
  font-size: 9px;
  width: 100%;
  text-align: left;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  &:hover{
    cursor: pointer;
    color: orange;
  }
`
export const Main = styled.div`
  min-height: 10px;
  max-height: 512px;
  margin: 5px 0;
  flex-grow: 1;
  &:hover{
    cursor: pointer;
  }
  /* height: 60%; */  
`
export const TopRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const Title = styled.div`
  font-size: 20px;
  margin: 0;
  padding: 10px 0px;
`;
export const BottomRow= styled.div`
  display: flex;
  width: 100%;
  height: 12px;
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  font-size: 9px;
`;

export const CategoryName = styled.div`
  font-size: 10px;
  font-weight: bold;
  margin-right: 6px;
`;
export const Date = styled.div`
  font-size: 8px;
`;


export const Span = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  gap: 5px;
  margin: 0 4px;
  &:hover{
    cursor: pointer;
  }
`;