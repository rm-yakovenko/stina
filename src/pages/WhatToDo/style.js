import styled from 'styled-components';
import * as colors from 'theme/colors';
import Box from '@material-ui/core/Box';

export const PageContainer = styled.div`
  padding-top: 90px;
`;

export const CategoryContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 'auto';
  display: block;
`;

export const CategoryTextContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: ${(props) => props.$position === 'right' && 0};
  left: ${(props) => props.$position === 'left' && 0};
  bottom: 0;
  width: 32%;
  padding: 30px 10px;
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
`;

export const ButtonGrey = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 30px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  border-style: none;
  box-shadow: ${(props) => (props.$clicked ? 'none' : '3px 3px 3px 3px grey')};
  background: ${(props) => (props.$clicked ? 'grey' : 'lightGrey')};
  transition: all 0.2s ease;
`;

export const BottomContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 190px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const SwiperBox = styled(Box)`
  height: 190px;
  width: 190px;
  display: flex;
  align-items: center;
`;

export const SwiperContainer = styled.div`
  position: absolute;
  left: ${(props) => props.$position === 'right' && 0};
  right: ${(props) => props.$position === 'left' && 0};
  bottom: 0;
  width: 68%;
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
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.$image})`};
  background-position: center;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  transform: ${(props) => props.$isHover && 'scale(1.1)'};
  transition: all 0.4s ease;
`;

export const StyledSwiperSlideInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${(props) =>
    props.$isHover ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0)'};
  transition: all 0.4s ease;
`;

export const ArticleDescription = styled.div`
  position: absolute;
  left: ${(props) => props.$position === 'left' && 0};
  right: ${(props) => props.$position === 'right' && 0};
  bottom: 0;
  width: 32%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
`;

export const CategoryHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: ${colors.lightBlue};
  cursor: pointer;
  border-top: 1px solid lightGrey;
`;

export const SocialLinksContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.lightBlue};
  border-top: 1px solid lightgrey;
  box-shadow: 0 5px 5px grey;
`;
