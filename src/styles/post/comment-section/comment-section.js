import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({width})=> width ? width : 'auto'};
  /* background-color: green; */
  font-size: 40px;
  height: 100%;
  /* border: 1px solid white; */
`;
export const Title = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  border-top: 1px solid black;
  padding: 7px 0px;
  margin: 10px 0px;
`
export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 15px;
  /* background-color: burlywood; */
`;

export const GuestMessage = styled.div`
  display: flex;
  /* border: 1px solid black; */
  justify-content: center;
  align-items: center;
  font-size: 27px;
  font-weight: 300;
`