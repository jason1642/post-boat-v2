import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  flex-direction: column;
  padding-left: 10px;
  padding-top: 12px;
`;



export const UserListSkeleton = () => {

  return (<Container>
    <div>
      <Skeleton variant='circular' height={40} width={40} />
    <Skeleton width={140}/>
    </div>
    <div>
      <Skeleton variant='circular' height={40} width={40} />
    <Skeleton width={140}/>
    </div>
    <div>
      <Skeleton variant='circular' height={40} width={40} />
    <Skeleton width={140}/>
    </div>
    <div>
      <Skeleton variant='circular' height={40} width={40} />
    <Skeleton width={140}/>
    </div>
    
    
  </Container>)
}

export const HeaderAvatarSkeletion = () => {

  return (
    <Skeleton>

    </Skeleton>
  )
}