import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  /* flex-direction: column; */
`;



export const UserListSkeleton = () => {

  return (<Container>
    <Skeleton variant='circular' height={40} width={40} />
    {/* <Skeleton height={40} width={100}/> */}
    <Skeleton width={100}/>
  </Container>)
}

export const HeaderAvatarSkeletion = () => {

  return (
    <Skeleton>

    </Skeleton>
  )
}