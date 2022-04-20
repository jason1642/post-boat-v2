import styled from 'styled-components';


export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme})=>theme.cardBackground};
  border-radius: 8px;
  padding: 15px 5px;
  height: 75vh;
  flex-grow: 2;
`;
export const Item = styled.div`
  display: flex;
  font-size: 12px;
  
`

export const Title = styled.div`

`

export const Button = styled.div`

`
