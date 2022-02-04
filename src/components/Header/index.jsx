import React, { useState } from 'react';
import logo from 'assets/logo.png';
import hut from 'assets/hut.png';
import useTranslation from 'hooks/useTranslation';
import { mainPage } from 'strings/mainPage';
import { HeadingLinks } from 'components/Typography';
import AdminButton from 'pages/Admin/AdminButton';
import Language from './Language';

import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  LinksContainer,
  StyledLink,
  HutContainer,
  HutImage,
} from './style';

function Header({ topContainerRef }) {
  const [isScrolling, setScrolling] = useState(false);

  const t = useTranslation();
  const strings = t(mainPage);

  const handleScroll = () => {
    if (window.scrollY >= 100 && !isScrolling) {
      setScrolling(true);
    }

    if (window.scrollY <= 100 && isScrolling) {
      setScrolling(false);
    }
  };

  const handleScrollTop = () => {
    topContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <HeaderContainer isScrolling={isScrolling}>
      <Language />
      <StyledLink to="/">
        <HutContainer isScrolling={isScrolling}>
          <HutImage src={hut} />
        </HutContainer>
      </StyledLink>
      <LogoContainer isScrolling={isScrolling}>
        <LogoImage
          src={logo}
          isScrolling={isScrolling}
          onClick={handleScrollTop}
        />
      </LogoContainer>
      <LinksContainer>
        <StyledLink to="/eco-center">
          <HeadingLinks>{strings.navLink1}</HeadingLinks>
        </StyledLink>
        <StyledLink to="/how-to-get">
          <HeadingLinks>{strings.navLink2}</HeadingLinks>
        </StyledLink>
        <StyledLink to="#">
          <HeadingLinks>{strings.navLink3}</HeadingLinks>
        </StyledLink>
        <AdminButton />
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
