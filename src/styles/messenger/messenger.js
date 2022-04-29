import styled from 'styled-components';
import Container from '@mui/material/Container/Container.js'

export const HeaderContainer = styled(Container)`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  padding: 10px 20px;
  gap: 10px;
`;

export const UserInput = styled.input`

`
export const ProfilePicture = styled.div`
  display: flex;
`;
export const Submit = styled.input`
  font-size: 1.3rem;
  padding: 5px 10px;
  border-radius: 5px;
`