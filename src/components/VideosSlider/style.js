import styled from 'styled-components';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const VideoImage = styled.img`
  width: 90%;
  height: auto;
  transform: ${(props) =>
    props.isHover ? 'scale(1.1) rotate(0.02deg)' : 'scale(1)'};
  transition: all 0.5s;
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

export const StyledSwiperVideoSlide = styled.div`
  width: 100%;
  height: 38vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const VideoSliderContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
`;

export const SwiperContainer = styled.div`
  position: relative;
`;

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

export const StyledYouTubeIcon = styled(YouTubeIcon)`
  position: absolute;
  color: white;
  opacity: 0.7;
  font-size: 100px !important;
  transform: ${(props) => props.$isHover && 'scale(1.3) rotate(0.02deg)'};
  transition: all 0.5s !important;
`;
