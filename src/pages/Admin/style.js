import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import * as colors from 'theme/colors';

export const PageContainer = styled.div`
  display: flex;
  padding-top: 90px;
  flex-grow: 1;
`;

export const PlacesContainer = styled.div`
  width: 100%;
`;

export const ArticlesContainer = styled.div`
  width: 100%;
`;

export const TransportsContainer = styled.div`
  width: 100%;
`;

export const UsersContainer = styled.div`
  width: 100%;
`;

export const VideosContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  width: 300px;
  padding-top: 10px;
  background: ${colors.lightBlue};
`;

export const LinkContainer = styled.div`
  padding: 10px;
  background: ${(props) => (props.selected ? colors.GreenSheen : 'none')};
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none !important;
  cursor: pointer;
`;
export const VideoContainer = styled.div`
  width: 400px;
  height: auto;
  padding: 10px;
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledMenu = styled(Menu)`
  z-index: 10000 !important;
`;
