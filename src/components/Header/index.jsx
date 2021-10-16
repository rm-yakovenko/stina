import React from 'react';
import logo from 'assets/logo.png';
import { HeadingLinks } from 'components/Typography';
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  LinksContainer,
  StyledLink,
} from './style';

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={logo} />
      </LogoContainer>
      <LinksContainer>
        <StyledLink>
          <HeadingLinks>ЕКО-ЦЕНТР</HeadingLinks>
        </StyledLink>
        <StyledLink>
          <HeadingLinks>ЯК ДОЇХАТИ</HeadingLinks>
        </StyledLink>
        <StyledLink>
          <HeadingLinks>ЩО ТУТ РОБИТИ</HeadingLinks>
        </StyledLink>
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
