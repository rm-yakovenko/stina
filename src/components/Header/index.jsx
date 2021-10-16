import React, { useState } from 'react';
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
  const [isScrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100 && !isScrolling) {
      setScrolling(true);
    }

    if (window.scrollY <= 100 && isScrolling) {
      setScrolling(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return (
    <HeaderContainer isScrolling={isScrolling}>
      <LogoContainer isScrolling={isScrolling}>
        <LogoImage src={logo} isScrolling={isScrolling} />
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
