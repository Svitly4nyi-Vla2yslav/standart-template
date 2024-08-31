import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: ${(props) => props.theme.footerBackground};
  color: ${(props) => props.theme.footerText};
  text-align: center;
`;