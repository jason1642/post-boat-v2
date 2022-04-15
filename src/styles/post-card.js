import styled from 'styled-components';
import { Link } from 'react-router-dom';

// title, image, details(creator name, date, likes, category), buttons(like, follow, save, )
// Modal styling for full view with comment section\
// Top and bottom nav
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px 0px;
  background-color: ${({theme})=>theme.cardBackground};
  border: 1px solid black;
  width: 75%;

  padding: 8px 12px;
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
`;

export const TopRow = styled.div`
  
  height: 20%;
`
export const Title = styled.h3`
  font-size: .9em;
  padding: 3px 0px;
  font-weight: 600;
  display: flex;
  margin: 0;
`
export const CreatedBy = styled.div`
  font-size: 8px;
`
export const Main = styled.div`
  max-height: 512px;
  margin: 5px 0;
  /* height: 60%; */  
`
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
  padding: 4px;
  gap: 5px;
  flex-direction: row;
  font-size: .8em;
  justify-self: flex-end;
`;
export const Span = styled.div`

`