import styled from 'styled-components';
// import Button from '@mui/material/Button'

export const Form = styled.form`
  background-color: ${({ theme }) => theme.elementBackground};
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  /* padding-top: 40px; */
  /* border: 1px solid green; */
  border-radius: 8px;
  /* height: 50%; */
  min-height: 70vh;
  width: 65%;
  margin: auto;
  /* padding-top: 50px; */
  /* margin-top: 5px; */
  @media(max-width: 480px){
    width: 90%;
    margin-top: 30px;
    justify-content: flex-start;
  }

`;
export const Input = styled.input`
  padding: 7px 7px 7px 8px;
  margin: 5px 0px;
  width: 100%;
  font-size: 1rem;
  min-height: 1.7rem;
  border-radius: 13px;
  border-width: 0px;
  @media(max-width: 480px){
    width: 80%;
    flex-grow: 2;
    padding: 10px;
  }
`
export const DropDownContainer = styled.div`
  /* border: 1px solid white; */
  display: flex;
  width: 50%;
  font-size: 14px;
  gap: 5px;
`
export const Select = styled.select`


`
export const Option = styled.option`
  
`;
export const Label = styled.label`
  width: 50%;
  display: flex;
  padding: 3px;
  align-items: center;
  flex-direction: column;
  margin: 10px 0px;
  height: 45px;
  justify-content: flex-start;
  @media(max-width: 480px){
    width: 90%;
    align-items: center;
  }

`
export const Span = styled.div`
    width: 100%;
  font-size: 12px;
  /* margin: 0 3px; */
  text-align: left;
  margin-right: 5px;
  
  @media(max-width: 480px){
    text-align: left;
    font-size: 13px;
    width: 80%;
  }
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  margin: 0px;
  margin-top: 10px;
  font-size: 3rem;
  padding: 0px;
  @media(max-width: 480px){
    width: 90%;
    margin-top: 40px;
    /* justify-content: center; */
    align-items: center;
  }
`;
export const SubmitButton = styled.button`
  border-radius: 13px;
  padding: 10px 14px;
  border-width: 0px;
  margin: 35px;
  font-size: 18px;
  background-color: ${({theme})=>theme.buttonBackground};
  &:hover{
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  color: red;
  width: 70%; 
  text-align: left;
  /* margin-right: 10%; */
  justify-content: space-around;
  /* align-items: flex-end; */
  /* align-self: flex-start; */
  font-size: 10px;
`

export const SubmitSuccessfulMessage = styled.div`
  background-color: darkgreen;
  display: flex;
  flex-direction: column;
  /* transition: ; */
  align-items: center;
  justify-content: space-evenly;
  /* padding-top: 40px; */
  /* border: 1px solid green; */
  border-radius: 8px;
  height: 100%;
  min-height: 60vh;
  width: 65%;
  margin: 0 auto;
  margin-top: 10px;
  transition: display 3s;
  @media(max-width: 480px){
    width: 90%;
    margin-top: 30px;
    justify-content: flex-start;
  }
`
