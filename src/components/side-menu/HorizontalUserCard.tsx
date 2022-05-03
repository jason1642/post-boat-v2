import * as React from 'react';
import { Container, InfoBox, TopRow, BottomRow, AvatarWrapper, } from '../../styles/messenger/list-user-card.js'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import moment from 'moment'
interface IHorizontalUserCardProps {
  userData: any,
  pathname: string,
}


const HorizontalUserCard: React.FunctionComponent<IHorizontalUserCardProps> = ({ pathname, userData }) => {
  const { preferences, username } = userData;
  console.log(userData)
  return (
    <Container style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}} to={pathname}>
      <AvatarWrapper >
        
      <Badge color={userData.active ? 'success' : 'warning'} variant='dot' overlap='circular' badgeContent={''} >
      <Avatar sx={{ fontSize: '1.6rem', bgcolor:  preferences.avatar_color}}>{username.split('')[0].toUpperCase()}</Avatar>

      </Badge>
      </AvatarWrapper>
      <InfoBox>

        <TopRow style={{margin: '0 auto', padding: '5px'}}>
          {username}
      </TopRow>
        <BottomRow>
          Last online: {moment(userData.updated_at).calendar()}
      </BottomRow>
      </InfoBox>
    </Container>
  );
};

export default HorizontalUserCard;