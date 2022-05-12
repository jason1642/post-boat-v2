import * as React from 'react';
import { HeaderContainer } from '../../../styles/messenger/messenger'
import ListUserCard from '../ListUserCard.tsx'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar'
interface IHeaderProps {
  currentChat: any,
}
export const Container = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: flex-start; */
  align-items: center;

  gap: 10px;
  /* background-color: ${({theme})=>theme.cardBackground}; */
  /* border: 1px solid orange; */
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin: 0;
  padding: 5px;
  
  &:hover{
    cursor: pointer;

  }
`;  
const Header: React.FunctionComponent<IHeaderProps> = ({currentChat}) => {
  // console.log(currentChat)
  return (<HeaderContainer>
      {/* color=success if online */}
    {/* <ProfilePicture>
      <Badge color='success' variant='dot' overlap='circular' badgeContent={''} >

          <Avatar sx={{ bgcolor: 'purple' }}>we</Avatar>

      </Badge>
      
    </ProfilePicture> */}
    {currentChat ?
      <ListUserCard pathname={`/user/${currentChat._id}`} userData={currentChat} />
      : 
      <Container>
        <Avatar sx={{border: '1px solid grey'}}></Avatar>
        Select a user to start a conversation
      </Container>
      }

  </HeaderContainer>);
};

export default Header;
