import styled from 'styled-components';

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
  font-size: 10px;
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
export const TextInput = styled.textarea`
  width: 100%;
  padding: 10px;
  min-height: 95px;
  color: ${({theme})=>theme.text};
  background-color: ${({theme})=>theme.elementBackground};
  /* padding-bottom: 20px; */
  resize: none;
  &:focus-visible{
    /* border-width: 0px; */
  }
`;
export const SubmitButton = styled.input`
  padding: 5px 10px;
  border-radius: 6px;
  border-width: 0px;
  margin: 6px;
  align-self: flex-end;
  &:hover{
    cursor: pointer;
  }
`

