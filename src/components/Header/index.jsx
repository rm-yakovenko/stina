import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logoUk from 'assets/logo.png';
import logoEng from 'assets/logo_eng.png';
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
} from './style';

const logo = {
  uk: logoUk,
  en: logoEng,
};

function Header() {
  const [isScrolling, setScrolling] = useState(false);
  const t = useTranslation();
  const strings = t(mainPage);

  const history = useHistory();

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
      <LogoContainer
        isScrolling={isScrolling}
        onClick={() => history.push('/')}
      >
        <LogoImage src={t(logo)} isScrolling={isScrolling} />
      </LogoContainer>
      <LinksContainer>
        <StyledLink to="/eco-center">
          <HeadingLinks>{strings.navLink1}</HeadingLinks>
        </StyledLink>
        <StyledLink to="/how-to-get">
          <HeadingLinks>{strings.navLink2}</HeadingLinks>
        </StyledLink>
        <Language />
        <AdminButton />
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
