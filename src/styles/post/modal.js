import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 50%; */
  display: flex;
  z-index: 50;
  overflow-y: scroll;
`;
export const CommentSection = styled.div`
  
`;
export const Comment = styled.div`
  
`;
export const Title = styled.div`
  font-size: 1.5em;
  margin: 0;
  padding: 10px 0px;
`;
export const Text = styled.p`
  line-height: 20px;
  padding: 5px;
  font-size: 13px;
  
`;
export const Header = styled.div`
  padding: 10px;
  width: 100%;
  border: 1px solid black;
`;
export const TopRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const BottomRow= styled.div`
  display: flex;
  width: 100%;
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  font-size: 9px;
`;
export const Span = styled.div`
  display: flex;
  margin: 0 4px;
`;
export const CategoryName = styled.div`
  font-size: 10px;
  font-weight: bold;
  margin-right: 6px;
`;
export const Date = styled.div`
  font-size: 8px;
`;
export const Main = styled.div`

`
export const ImageContainer = styled.div`
  display: flex;
   max-width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  max-height: 312px;
  margin: 14px auto;
`;

export const Image = styled.img`
  max-height: 312px;
  max-width: 50%;
  /* width: 100%; */
  
  object-fit: contain;
  position: relative;
`;