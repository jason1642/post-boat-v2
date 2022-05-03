import * as React from 'react';
import { Container, InfoBox, TopRow, BottomRow, AvatarWrapper, } from '../../styles/messenger/list-user-card.js'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import moment from 'moment'
interface IListUserCardProps {
  userData: any,
  pathname: string,
}


const ListUserCard: React.FunctionComponent<IListUserCardProps> = ({ pathname, userData }) => {
  const { preferences, username } = userData;
  console.log(userData)
  return (
    <Container to={pathname}>
      <AvatarWrapper>
        
      <Badge color={userData.active ? 'success' : 'warning'} variant='dot' overlap='circular' badgeContent={''} >
      <Avatar sx={{ bgcolor:  preferences.avatar_color}}>{username.split('')[0].toUpperCase()}</Avatar>

      </Badge>
      </AvatarWrapper>
      <InfoBox>

        <TopRow>
          {username}
      </TopRow>
        <BottomRow>
          Last online: {moment(userData.updated_at).calendar()}
      </BottomRow>
      </InfoBox>
    </Container>
  );
};

export default ListUserCard;
