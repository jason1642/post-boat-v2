import styled from 'styled-components';
import Modal from 'react-modal/dist/react-modal.js'


export const ReactModal = styled(Modal)`
  /* max-width: 50%; */
  background-color: ${({theme})=>theme.modalBackground};
  /* background-color: white; */
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 10px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
}
@media (max-width: 480px){
    width: 95vw;
    max-width: 95vw !important;
    padding-top: 10px;
    height: 90vh !important;
    
  }
`;

export const Text = styled.p`
  line-height: 20px;
  padding: 8px;
  font-size: 13px;
  
`;



export const Main = styled.div`
  /* display: flex;
  flex-direction: column; */
`
export const ImageContainer = styled.div`
  display: flex;
   max-width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  max-height: 312px;
  margin: 14px auto;
`;

export const Image = styled.img`
  max-height: 312px;
  max-width: 50%;
  /* width: 100%; */
  
  object-fit: contain;
  position: relative;
`;