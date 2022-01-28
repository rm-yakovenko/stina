import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from 'theme/colors';

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => (props.isScrolling ? '80px' : '90px')};
  background-color: ${colors.lightBlue};
  box-shadow: 0 5px 5px grey;
  z-index: 10000;
  transition: all 0.4s;
`;

export const LogoContainer = styled.div`
  position: fixed;
  top: ${(props) => (props.isScrolling ? '-18px' : '10px')};
  left: 50vw;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isScrolling ? 'transparent' : 'white')};
  border-radius: 50%;
  transition: all 0.4s;
`;

export const LogoImage = styled.img`
  width: ${(props) => (props.isScrolling ? '30%' : '47%')};
  height: auto;
  cursor: pointer;
  transition: all 0.4s;
`;

export const LinksContainer = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const LanguageContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 10px;
`;

export const FlagImage = styled.img`
  width: 40px;
  height: auto;
`;

export const HutContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.isScrolling ? '12px' : '16px')};
  left: 120px;
  width: 60px;
  height: 60px;
  transition: all 0.4s;
`;

export const HutImage = styled.img`
  width: 100%;
  height: auto;
`;
