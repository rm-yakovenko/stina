import styled from 'styled-components';
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
  height: 80px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
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
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  width: 90%;
  height: auto;
  display: block;
`;

export const StyledCollapse = styled.div`
  ${({ theme, ...props }) => `
    position: absolute;
    transform: translatey(-30%);
    top: 50%;
    left: 0;
    background: transparent;
    width: ${props.in ? '700px' : '0'};
    height: 400px;
    transition: width 1s ease 0.3s;
    z-index: 100;
    overflow: hidden;
  `}
`;

export const StyledCollapseBody = styled.div`
  width: 700px;
  padding: 40px;
  box-sizing: border-box;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const TeamHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  text-transform: uppercase;
  box-sizing: border-box;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px 0;
`;

export const StyledSliderButton = styled.div`
  width: 90%;
  background: ${(props) => (props.active ? 'grey' : '#e1e1e1')};
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 8px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  box-shadow: ${(props) => (props.active ? 'none' : '0 5px 5px grey')};
`;
