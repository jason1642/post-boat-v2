import styled from 'styled-components';
// import {Link} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  border-radius: 12px;
  justify-content: flex-start;
  background-color: ${({theme})=>theme.cardBackground};
  align-items: center;
  /* height: 100%; */
  margin-top: 1em;
  flex-grow: 2;
  /* height: 90vh; */
  max-width: 340px;
  /* background-color: purple; */
  font-size: 10px;
  @media (max-width: 480px){
    display: none !important;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 0px;
  gap: 5px;
`;
export const AccountImage = styled.div`
  height: 45px;
`;
export const Item = styled.div`
  display: block;
  /* border: 1px solid black; */
  font-size: 1rem;
  padding: 5px;
`

export const Title = styled.div`
  font-size: 1.4rem;
`;