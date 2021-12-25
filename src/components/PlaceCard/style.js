import styled from 'styled-components';
import * as colors from 'theme/colors';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 5px grey;
`;

export const HeadingContainer = styled.div`
  background: ${colors.PlaceBack};
  padding: 5px;
`;

export const ImageContainer = styled.div`
  padding: 0 5px;
  width: ${(props) => props.size};
  height: auto;
`;

export const LinkContainer = styled.div`
  background: ${colors.PlaceBack};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
