import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
  background-color: ${({ theme }) => theme.commentBackground};
  color: ${({theme})=>theme.text};
  margin: 3px 0px;
  padding: 10px;
  border-radius: 7px;
  /* font-size: 1rem; */
`;

export const Body = styled.p`
  font-size: 1rem;
  text-align: left;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const AuthorName = styled.div`
  font-size: .9rem;
  font-weight: bold;
`;
export const DateCreated = styled.div`
  font-size: .9rem;
`;
export const Footer = styled.div`
  display: flex;
  gap: 4px;
  font-size: 11px;
`;
export const Span = styled.div`
  color: #808384;
  display: flex;
  font-size: .8rem;
  &:hover{
    cursor: pointer;
  }
`;