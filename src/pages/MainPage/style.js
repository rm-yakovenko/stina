import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Popup } from 'react-leaflet';

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
  top: 0;
  right: 0;
  bottom: 100px;
  width: 32%;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
`;

export const HeroBottomMenu = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100px;
  width: 32%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
`;

export const SocialButtonsContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CategoriesSliderContainer = styled.div`
  padding: 20px;
  box-shadow: 0 15px 15px black;
`;

export const CategoryImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 50%;
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
  flex-direction: column;
  cursor: pointer;
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
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const MapContainer = styled.div`
  position: relative;
  display: flex;
  height: 800px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const MapCategoriesContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-top: 40px;
  padding-bottom: 10px;
  padding-right: 40px;
  background-color: transparent;
  z-index: 1000;
`;

export const StyledMap = styled.div`
  position: relative;
  width: 100%;
  padding: 30px;
  padding-bottom: 40px;
`;

export const MapCategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const StyledLocationIcon = styled(LocationOnIcon)`
  color: ${(props) => (props.color ? props.color : 'red')};
  font-size: 35px !important;
`;

export const SwiperContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
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

export const CategoryNameTop = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  height: ${(props) => (props.isHover ? '50%' : '0%')};
  width: 80%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  text-transform: uppercase;
  transition: height 0.5s;
`;

export const CategoryNameBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  height: ${(props) => (props.isHover ? '50%' : '0%')};
  width: 80%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  text-transform: uppercase;
  transition: height 0.5s;
`;

export const CategoryLine = styled.div`
  position: absolute;
  bottom: 50%;
  left: 10%;
  height: 1px;
  width: 80%;
  background-color: ${(props) => (props.isHover ? 'grey' : 'transparent')};
  transition: ${(props) => (props.isHover ? 'all .1s .4s' : 'all .1s')};
`;

export const MapBoxContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledMapPopup = styled(Popup)`
  width: fit-content;

  .leaflet-popup-content {
    margin: 0;
  }
  .leaflet-popup-content-wrapper {
    padding: 0;
  }
`;

export const AboutContainer = styled.div`
  padding: 50px 20%;
  text-align: center;
`;

export const SliderButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  padding: 30px;
  top: 0;
  right: 0;
  z-index: 100;
`;

export const SwiperPaginationButton = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 5px;
  cursor: pointer;
  background-color: rgba(255, 255, 255);
  opacity: ${(props) => (props.active ? 1 : 0.4)};
`;

export const EcoCenterContainer = styled.div`
  position: relative;
`;

export const EcoCenterText = styled.div`
  position: absolute;
  left: 0;
  top: 25%;
  width: 40%;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const CategoryNameMain = styled.div`
  text-transform: uppercase;
  text-align: center;
  padding: 0 20px;
`;

export const MapCategoryName = styled.div`
  text-transform: uppercase;
`;
