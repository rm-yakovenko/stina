import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const MainPageContainer = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const HeroTextContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90px;
  right: 0;
  bottom: 100px;
  width: 30%;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const HeroBottomMenu = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.8;
`;

export const SocialButtonsContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SocialImage = styled.img`
  height: 45px;
  width: auto;
`;

export const CategoriesSliderContainer = styled.div`
  padding: 20px;
  box-shadow: 0 15px 15px black;
`;

export const CategoryImage = styled.img``;

export const VideoImage = styled.img`
  width: 450px;
  height: auto;
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

export const StyledSwiperSlide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftSideTextContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 30%;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const MapContainer = styled.div`
  display: flex;
  height: 700px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MapCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledMap = styled.div`
  width: 70%;
`;

export const MapCategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const StyledLocationIcon = styled(LocationOnIcon)`
  color: ${(props) => (props.color ? props.color : 'red')};
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
