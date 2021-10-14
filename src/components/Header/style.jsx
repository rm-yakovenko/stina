import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from 'theme/colors';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: ${colors.lightBlue};
  box-shadow: 0 5px 5px grey;
  z-index: 100;
`;

export const LogoContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
`;

export const LogoImage = styled.img`
  width: 47%;
  height: auto;
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
