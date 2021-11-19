import styled from 'styled-components';
import Link from '@material-ui/core/Link';

export const FooterContainer = styled.div`
  background-color: black;
  display: flex;
  padding: 40px 60px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogosContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none !important;
  color: white !important;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

export const StyledContact = styled.div`
  color: white;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

export const StyledLogo1 = styled.img`
  width: 100%;
  height: auto;
  padding-bottom: 30px;
`;

export const StyledLogo2 = styled.img`
  width: 90%;
  height: auto;
  padding-bottom: 30px;
`;

export const StyledLogo3 = styled.img`
  width: 70%;
  height: auto;
`;
