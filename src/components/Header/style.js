import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  width: 100%;
  height: 90px;
  background-color: transparent;
  z-index: 10000;
  transition: all 0.4s;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
`;

export const LogoImage = styled.img`
  width: ${(props) => (props.isScrolling ? '30%' : '47%')};
  height: auto;
  cursor: pointer;
  transition: all 0.4s;
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
