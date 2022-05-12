import styled from 'styled-components';


export const Container = styled.div`

  /* width: 80%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  /* border-radius: 9px; */
  gap: 8px;
  overflow-y: scroll;
  max-height: 95vh;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
  display: none;
}
@media (max-width: 480px){
    width: 100%;
    padding-top: 10px;
    /* justify-content: center; */
  }
`;

