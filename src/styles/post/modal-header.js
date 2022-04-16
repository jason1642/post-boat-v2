import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  margin: 0;
  /* width: 100%; */
  /* border: 1px solid black; */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);

`;

export const TopRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const Title = styled.div`
  font-size: 1.5em;
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