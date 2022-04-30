import * as React from 'react';
import { Container, InfoBox, TopRow, BottomRow, AvatarWrapper, } from '../../styles/messenger/list-user-card.js'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

interface IListUserCardProps {
  userData: any,
}


const ListUserCard: React.FunctionComponent<IListUserCardProps> = ({ userData }) => {
  const { preferences, username } = userData;
  // console.log(userData)
  return (
    <Container>
      <AvatarWrapper>
        
      <Badge color='success' variant='dot' overlap='circular' badgeContent={''} >
      <Avatar sx={{ bgcolor:  preferences.avatar_color}}>{username.split('')[0].toUpperCase()}</Avatar>

      </Badge>
      </AvatarWrapper>
      <InfoBox>

        <TopRow>
          {username}
      </TopRow>
        <BottomRow>
          Last online: Now
      </BottomRow>
      </InfoBox>
    </Container>
  );
};

export default ListUserCard;
