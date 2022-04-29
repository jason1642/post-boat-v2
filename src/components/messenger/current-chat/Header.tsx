import * as React from 'react';
import { HeaderContainer, ProfilePicture } from '../../../styles/messenger/messenger'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (<HeaderContainer>
    <ProfilePicture>
      {/* color=success if online */}
      <Badge color='success' variant='dot' overlap='circular' badgeContent={''} >

          <Avatar sx={{ bgcolor: 'purple' }}>we</Avatar>

      </Badge>
      
    </ProfilePicture>
    

  </HeaderContainer>);
};

export default Header;
