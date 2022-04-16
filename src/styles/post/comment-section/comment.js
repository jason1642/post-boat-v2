import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
  background-color: #1a1a1b;
  color: #c6c9cb;
  margin: 3px 0px;
  padding: 7px 4px 7px 6px;
  border-radius: 7px;
  font-size: 14px;
`;

export const Body = styled.p`
  font-size: 14px;

`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const AuthorName = styled.div`
  font-size: 11px;
  font-weight: bold;
`;
export const DateCreated = styled.div`
  font-size: 10px;
`;
export const Footer = styled.div`
  display: flex;
  gap: 4px;
  font-size: 11px;
`;
export const Span = styled.div`
  color: #808384;
  &:hover{
    cursor: pointer;
  }
`;