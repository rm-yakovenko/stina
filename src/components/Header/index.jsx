import React from 'react';
import logo from 'assets/logo.png';
import { HeadingH6 } from 'components/Typography';
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
          <HeadingH6>ЕКО-ЦЕНТР</HeadingH6>
        </StyledLink>
        <StyledLink>
          <HeadingH6>ЯК ДОЇХАТИ</HeadingH6>
        </StyledLink>
        <StyledLink>
          <HeadingH6>ЩО ТУТ РОБИТИ</HeadingH6>
        </StyledLink>
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
