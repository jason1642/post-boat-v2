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
  padding: 8px;

  margin: 5px 0px;
  width: 85%;
  border-radius: 13px;
  border-width: 0px;
`
export const Label = styled.label`
  width: 66%;
  display: flex;
  padding: 3px;
  align-items: center;
  /* border: 1px solid black; */
  gap: 5px;
  justify-content: space-between;


`
export const Span = styled.div`
  width: 15%;
  /* margin: 0 3px; */
  text-align: right;
  padding-right: 3px;
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

export const ErrorDisplay = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;

`
export const ErrorItem = styled.div`
  color: #b63d3d;
  margin: 3px 0;
  
`
