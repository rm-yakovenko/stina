import React from 'react';
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

function HeaderLight() {
  const t = useTranslation();
  const strings = t(mainPage);

  const history = useHistory();

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => history.push('/')}>
        <LogoImage src={t(logo)} />
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

export default HeaderLight;
