import React from 'react';
import logo from 'assets/logo.png';
import { HeaderContainer, LogoContainer, LogoImage } from './style';

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={logo} />
      </LogoContainer>
    </HeaderContainer>
  );
}

export default Header;
