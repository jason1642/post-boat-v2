import styled from 'styled-components';
// PAGE SECTION COT
export const Main = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  padding: 5px;
  /* width: 90%; */
`;







// COMMENT CARD
export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */
  border-radius: 8px;
  margin: 5px;
  padding: 6px;
  /* color: ${({theme})=>theme.text}; */
  background-color: ${({theme})=>theme.cardBackground};
  width: 500px;
  &>* {
    color: ${({theme})=>theme.text};

    display: flex;
    color: black;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px 8px 0px 0px;
  height: 22px;
  color: ${({theme})=>theme.text};
  width: 100%;
`;

export const Body = styled.div`
  text-align: left;
  font-size: 13px;
  color: ${({theme})=>theme.text};

  padding: 8px;
  padding-left: 4px; 
`
export const BottomRow = styled.div`
  padding: 3px 2px 3px 4px;
  color: ${({theme})=>theme.text};
  border-radius: 0px 0px 8px 8px;
`
export const BoldTitle = styled.span`
  display: inline-flex;
  font-size: 10px;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  overflow: hidden; 
  max-width: 45%;
  word-wrap: break-word;
  padding: 0;
  margin: 0%;
  max-height: 3.6em;
  line-height: 1.8em;
  height: 100%;
  text-align: left;
  text-overflow: ellipsis;
`
export const Span = styled.div`
  display: inline-flex;
  font-size: 10px;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 0px 2px;
`