import * as React from 'react';
import { HeaderContainer, ProfilePicture } from '../../../styles/messenger/messenger'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import ListUserCard from '../ListUserCard.tsx'

interface IHeaderProps {
  currentChat: any,
}

const Header: React.FunctionComponent<IHeaderProps> = ({currentChat}) => {
  // console.log(currentChat)
  return (<HeaderContainer>
      {/* color=success if online */}
    {/* <ProfilePicture>
      <Badge color='success' variant='dot' overlap='circular' badgeContent={''} >

          <Avatar sx={{ bgcolor: 'purple' }}>we</Avatar>

      </Badge>
      
    </ProfilePicture> */}
   {currentChat ?  <ListUserCard userData={currentChat} /> : <>Nothing</>}

  </HeaderContainer>);
};

export default Header;
