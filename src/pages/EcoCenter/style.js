import styled from 'styled-components';
import Collapse from '@material-ui/core/Collapse';
import * as colors from 'theme/colors';

export const PageContainer = styled.div`
  padding-top: 90px;
`;

export const TopContainer = styled.div`
  display: flex;
`;

export const TopContainerTextSection = styled.div`
  width: 40%;
  padding: 20px;
`;

export const TopContainerImageSection = styled.div`
  width: 60%;
`;

export const TopImageContainer = styled.div``;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const SocialImage = styled.img`
  height: 55px;
  width: auto;
  cursor: pointer;
`;

export const SocialImageYtube = styled.img`
  height: 45px;
  width: auto;
  cursor: pointer;
`;

export const MiddleContainer = styled.div`
  position: relative;
`;

export const MiddleContainerText = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 35%;
  background: ${colors.lightBlue};
  opacity: 0.9;
`;

export const MozaicSlideContainer = styled.div``;

export const SliderPrev = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
`;

export const SliderNext = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
`;

export const ArrowImageLeft = styled.img`
  width: 90px;
  height: auto;
  cursor: pointer;
  opacity: 0.6;
`;

export const ArrowImageRight = styled.img`
  width: 90px;
  height: auto;
  transform: rotate(180deg);
  cursor: pointer;
  opacity: 0.6;
`;

export const SwiperContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const PeopleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const PersonImage = styled.img`
  width: 15%;
  height: auto;
  display: block;
`;

export const StyledCollapse = styled.div`
  position: absolute;
  top: 42%;
  left: 0;
  background: white;
  width: ${(props) => (props.in ? '200px' : '0px')};
  height: 100px;
  transition: width 1s ease 0.3s;
  z-index: 100;
  overflow: hidden;
`;
