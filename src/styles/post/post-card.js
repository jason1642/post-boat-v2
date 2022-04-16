import styled from 'styled-components';
import { Link } from 'react-router-dom';

// title, image, details(creator name, date, likes, category), buttons(like, follow, save, )
// Modal styling for full view with comment section\
// Top and bottom nav
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px 0px;
  background-color: ${({theme})=>theme.cardBackground};
  /* border: 1px solid black; */
  width: 80%;

  padding: 8px 12px 3px 12px;
  /* min-height: 96px; */
  /* max-height: 512px; */
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  & > *{ 
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 480px){
    width: 90%;
  }
`;

export const TopRow = styled.div`
    border-radius: 8px;

  height: 20%;
  @media (max-width: 480px){
    width: 100%;
    margin-left: 10px;
  }
`
export const Title = styled.h3`
  font-size: 1em;
  padding: 3px 0px;
  font-weight: 600;
  display: flex;
  margin: 0;
`
export const CreatedBy = styled.div`
  font-size: 7px;
`
export const Main = styled.div`
  
  max-height: 512px;
  margin: 5px 0;
  &:hover{
    cursor: pointer;
  }
  /* height: 60%; */  
`
export const Text = styled.div`
  font-size: .7em;
  padding: 4px 0px;
  line-height: 1.5em;
`;
export const ImageContainer = styled.div`
  max-width: 100%;
  height: 100%;
  max-height: 312px;
  /* object-fit: contain; */


`
export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  /* width: 100%; */
  max-height: 100%;
  object-fit: contain;
  position: relative;

`
export const BottomRow = styled.div`
  height: 10%;
  /* padding: 4px; */
  gap: 5px;
  flex-direction: row;
  font-size: 10px;
  justify-self: flex-end;
  align-self: flex-start;
  margin-top: 4px;
  @media (max-width: 480px){
    width: 100%;
    margin-left: 10px;
  }
`;
export const Span = styled.div`

  &:hover{
    cursor: pointer;
  }
`