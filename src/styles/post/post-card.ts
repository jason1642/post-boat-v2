import styled from 'styled-components';
import { Link } from 'react-router-dom';

// title, image, details(creator name, date, likes, category), buttons(like, follow, save, )
// Modal styling for full view with comment section\
// Top and bottom nav
interface Props{
  cardPadding: string,
  cardBackground: string,
  textAlign: string,
}
export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  margin: 4px 0px;
  background-color: ${({ theme }) => theme.cardBackground};
  
  width: 640px;
  padding: ${props=>props.cardPadding};
  /* padding: 8px 4px 12px 13px/; */
  /* min-height: 96px; */
  /* max-height: 512px; */
  border-radius: 8px;
  border: 1px solid #8080806e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0);
  & > *{ 
    display: flex;
    flex-direction: column;
    text-align: ${({textAlign})=>textAlign || 'left'};
    margin: 0;
    padding: 0;
  }
  @media (max-width: 480px){
    width: 90%;
  }
`;

export const Wrapper = styled.div`
   
`;

export const TopRow = styled.div`
    border-radius: 8px;
  /* margin-bottom: 5px; */
  padding: 3px;
  @media (max-width: 480px){
    width: 100%;
    margin-left: 10px;
  }
`
export const Title = styled.h3`
  font-size: 1.3em;
  padding: 3px 0px;
  font-weight: 500;
  display: flex;
  margin: 3px 0px;
  width: 100%;
  text-align: left;
`
export const CreatedBy = styled(Link)`
  font-size: .7rem;
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
  /* min-height: 10px; */
  display: flex;
  width: 100%;
  
  /* font-size: 1rem; */
  align-items: center;
  max-height: 512px;
  margin: 5px 0px;
  /* flex-grow: 1; */
  &:hover{
    cursor: pointer;
  }
  /* height: 60%; */  
`
export const Text = styled.div`
  /* display: flex; */
  text-align: left;
  font-size: 1em;
  word-wrap: break-word;
  max-width: 90%;
  padding: 4px;
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
  align-self: center;
  max-height: 100%;
  object-fit: contain;
  position: relative;

`
export const BottomRow = styled.div`
  min-height: 15px;
  padding: 8px 0px;
  gap: 5px;
  flex-direction: row;
  /* font-size: 1rem; */
  justify-self: flex-end;
  align-self: flex-start;
  width: 100%;
  @media (max-width: 480px){
    width: 100%;
    margin-left: 10px;
  }
`;
export const Span = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: .8rem;
  &:hover{
    cursor: pointer;
  }
`