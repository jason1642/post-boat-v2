import styled from 'styled-components';


export const Container = styled.div`

  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border-radius: 9px;
  overflow-y: scroll;
  max-height: 95vh;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
  display: none;
}
`;

