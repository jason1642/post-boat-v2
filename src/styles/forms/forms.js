import styled from 'styled-components';


export const Form = styled.form`
  background-color: ${({ theme }) => theme.elementBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* padding-top: 40px; */
  /* border: 1px solid green; */
  height: 100%;
  min-height: 80vh;
  width: 70%;
  margin: 0 auto;
  margin-top: 10px;

`;
export const Input = styled.input`
  padding: 7px;

  margin: 10px 0px;
  width: 50%;
  border-radius: 13px;
  border-width: 0px;
  
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
`;
export const SubmitButton = styled.button`
  border-radius: 13px;
  padding: 8px 12px;
  border-width: 0px;
  font-size: 1em;
  background-color: ${({theme})=>theme.buttonBackground};
  &:hover{
    cursor: pointer;
  }
`;

