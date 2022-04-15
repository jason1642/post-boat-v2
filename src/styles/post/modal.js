import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 50%; */
  display: flex;
  height: auto;
  z-index: 50;
  overflow-y: scroll;
`;
export const CommentSection = styled.div`
  
`;
export const Comment = styled.div`
  
`;

export const Text = styled.p`
  line-height: 20px;
  padding: 5px;
  font-size: 13px;
  
`;



export const Main = styled.div`
  /* display: flex;
  flex-direction: column; */
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