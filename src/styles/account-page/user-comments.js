import styled from 'styled-components';
// PAGE SECTION COT
export const Main = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
`;









// COMMENT CARD
export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  margin: 5px;
  width: 500px;
  &>* {
    display: flex;
    color: black;
  }
`;

export const TopRow = styled.div`
  background-color: yellow;
  /* padding: 2px 2px 2px 8px; */
  width: 100%;

`;

export const Body = styled.div`
  background-color: green;
  text-align: left;
  font-size: 24px;

  padding: 8px;
  padding-left: 8px; 
`
export const BottomRow = styled.div`
  background-color: red;
  padding: 2px 2px 2px 8px;
`
export const Span = styled.div`
  display: inline-flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  padding: 1px 5px;
`