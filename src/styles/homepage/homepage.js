import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;
  border-radius: 9px;
  max-height: 100%;
  & * {
    display: flex;
  }
  @media (max-width: 480px){
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: .8em;
  @media (max-width: 480px){
    /* text-align: center; */
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75%;
  @media (max-width: 480px){
    width: 100%;
  }
`;

export const Main = styled.div`
  flex-direction: row;
  /* display: flex; */
  height: 100%;
  width: 100%;
  gap: 10px;
  @media (max-width: 480px){
    flex-direction: column;
  }
`;