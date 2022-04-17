import styled from 'styled-components';


export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${({theme})=>theme.cardBackground};
  border-radius: 8px;
  padding: 15px 5px;
  flex-grow: 2;
`;
export const Item = styled.div`

`