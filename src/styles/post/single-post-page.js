import styled from 'styled-components';


export const Container = styled.div`
   display: flex;
  padding: 10px;
  width: 85%;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-around;
  /* gap: 25px; */
  border-top: 1px solid grey;
 overflow-y: auto;
  &::-webkit-scrollbar {
  display: none;
}
`;
export const Main = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  width: 65%;
  align-items: center;
  /* background-color: royalblue; */
  overflow-y: auto;
  &::-webkit-scrollbar {
  display: none;
}

`;
export const ImageContainer = styled.div`
  display: flex;
   max-width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  max-height: 470px;
  margin: 14px auto;
`;

export const Image = styled.img`
  max-height: 100%;
  /* max-width: 50%; */
  /* width: 100%; */
  
  object-fit: contain;
  position: relative;
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


export const Text = styled.p`
  line-height: 20px;
  padding: 8px;
  width: 100%;
  font-size: 1rem;
  text-align: left;

`;