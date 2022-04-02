import styled from 'styled-components';

export const PageContainer = styled.div`
  padding-top: 90px;
  flex-grow: 1;
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

export const BottomContainer = styled.div`
  display: flex;
  padding: 5px;
`;

export const BottomContainerMapSection = styled.div`
  width: 70%;
  height: 700px;
  border: 4px solid lightGrey;
  border-radius: 5px;
`;

export const BottomContainerSliderSection = styled.div`
  width: 30%;
  height: 700px;
`;

export const SliderPrev = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
`;

export const SliderNext = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
`;

export const ArrowImageTop = styled.img`
  width: 90px;
  height: auto;
  transform: rotate(90deg);
  cursor: pointer;
  opacity: 0.6;
`;

export const ArrowImageBottom = styled.img`
  width: 90px;
  height: auto;
  transform: rotate(-90deg);
  cursor: pointer;
  opacity: 0.6;
`;

export const SwiperContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
