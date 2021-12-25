import React from 'react';
import Box from '@material-ui/core/Box';
import footerLogo1 from 'assets/footerLogo1.png';
import footerLogo3 from 'assets/footerLogo3.png';
import { HeadingH6 } from 'components/Typography';
import { links } from './links';
import { contacts } from './contacts';
import {
  FooterContainer,
  LinksContainer,
  ContactsContainer,
  LogosContainer,
  StyledLink,
  StyledContact,
  StyledLogo1,
  StyledLogo3,
} from './style';

function Footer() {
  return (
    <FooterContainer>
      <Box width="33%" display="flex" justifyContent="flex-start">
        <LinksContainer>
          {links.map((link) => (
            <StyledLink href={link.url} target="_blank" key={link.name}>
              <HeadingH6>{link.name}</HeadingH6>
            </StyledLink>
          ))}
        </LinksContainer>
      </Box>
      <Box width="33%" display="flex" justifyContent="center">
        <ContactsContainer>
          {contacts.map((contact) => (
            <StyledContact key={contact}>
              <HeadingH6>{contact}</HeadingH6>
            </StyledContact>
          ))}
        </ContactsContainer>
      </Box>
      <Box width="33%" display="flex" justifyContent="flex-end">
        <LogosContainer>
          <StyledLogo1 src={footerLogo1} />
          <StyledLogo3 src={footerLogo3} />
        </LogosContainer>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
