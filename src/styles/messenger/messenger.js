import styled from 'styled-components';
import Container from '@mui/material/Container/Container.js'
import ListItem from '@mui/material/ListItem/ListItem.js'
import ListItemText from '@mui/material/ListItemText/ListItemText.js';
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

export const SingleMessageContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 75%;
  word-wrap: break-word;
  text-align: left;
  /* border: 1px solid green; */
  margin: 8px 0px;
  border-radius: 8px;
  gap: 5px;
`
export const MessageText = styled.div`
  display: flex;
  padding: 4px 10px;
  font-size: 1.1rem;
  border-radius: 8px;
  overflow: auto;
  /* border: 1px solid brown; */
  flex-direction: column;
  line-height: 1.6rem;
  /* width: 100%; */
`
export const DateSent = styled.div`
  display: flex;
  white-space: nowrap;
  align-self: center;
  font-size: .8rem;
  padding: 0px;
  margin: 0px;

`