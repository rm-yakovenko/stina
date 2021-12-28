import React, { useState } from 'react';
import logo from 'assets/logo.png';
import hut from 'assets/hut.png';
import { HeadingLinks } from 'components/Typography';
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();

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
          <HeadingLinks>{t('navLink1')}</HeadingLinks>
        </StyledLink>
        <StyledLink to="/how-to-get">
          <HeadingLinks>{t('navLink2')}</HeadingLinks>
        </StyledLink>
        <StyledLink to="#">
          <HeadingLinks>{t('navLink3')}</HeadingLinks>
        </StyledLink>
        <StyledLink to="/admin">
          <HeadingLinks>Admin</HeadingLinks>
        </StyledLink>
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
