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
  background-color: white;
  border: 1px solid black;
  width: 70%;
  padding: 8px 12px;
  min-height: 250px;
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
  font-size: 1em;
  font-weight: 600;
  display: flex;
  margin: 0;
`
export const CreatedBy = styled.div`
  font-size: .7em;
`
export const Main = styled.div`
`

export const BottomRow = styled.div`
  flex-direction: row;
  font-size: .8em;
  justify-self: flex-end;
`;
export const Span = styled.div`

`