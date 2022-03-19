import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from 'theme/colors';

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  background-color: ${(props) =>
    props.isScrolling ? colors.lightBlue : 'transparent'};
  z-index: 10000;
  transition: all 0.2s;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.isScrolling ? '-18px' : '30px')};
  left: 30px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isScrolling ? 'transparent' : 'white')};
  border-radius: 50%;
  box-shadow: ${(props) => (props.isScrolling ? 'none' : '0 5px 5px black')};
  transition: all 0.1s ease;
`;

export const LogoImage = styled.img`
  width: ${(props) => (props.isScrolling ? '30%' : '47%')};
  height: auto;
  cursor: pointer;
  transition: all 0.1s ease;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const LanguageContainer = styled.div``;

export const FlagImage = styled.img`
  width: 40px;
  height: auto;
`;
