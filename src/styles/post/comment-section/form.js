import styled from 'styled-components';
import Button from '@mui/material/Button/index.js'
import TextField from '@mui/material/TextField/index.js';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* background-color: purple; */
`;
export const Title = styled.div`
  display: flex;
  font-size: 1rem;
  padding: 4px;
  text-align: left;
  align-self: flex-start;
  margin: 3px 0px 3px 8%;
`
export const FormBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 90%;
`

export const Label = styled.label`
  width: 100%;
  display: flex;
  padding: 3px;
  align-items: center;
  flex-direction: column;
  margin: 10px 0px;
  /* height: 45px; */
  justify-content: flex-start;
  @media(max-width: 480px){
    width: 90%;
    align-items: center;
  }

`
export const TextInput = styled(TextField)`
  display: flex;
  width: 100%;
  padding: 10px;
  min-height: 95px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${({theme})=>theme.text};
  background-color: ${({theme})=>theme.inverseBackground};
  /* padding-bottom: 20px; */
  font-size: 1rem;
  resize: none;
  &:focus-visible{
    /* border-width: 0px; */
  }
`;
export const SubmitButton = styled(Button)`
  padding: 5px 10px;
  border-radius: 6px;
  border-width: 0px;
  margin: 6px;
  align-self: flex-end;
  &:hover{
    cursor: pointer;
  }
`

