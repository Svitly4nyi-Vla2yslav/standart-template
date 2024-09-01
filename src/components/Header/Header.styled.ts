import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:  fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  @media ${(props) => props.theme.device.desktop} {
    padding: 0.5rem;
  
  } 
`;

export const Nav = styled.nav`
   ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0 40px;
  }

  @media ${(props) => props.theme.device.mobile} {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;


  @media ${(props) => props.theme.device.mobile} {
      padding: 0 40px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
       background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerText};
    display: block;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;