import React, { useState, useRef, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import romaImage from 'assets/roma.jpg';
import facebookLogo from 'assets/facebook.png';
import pangeyaLogo from 'assets/pangeya.png';
import yutubeLogo from 'assets/ytube.png';
import gphotosLogo from 'assets/gphotos.png';
import embroderyImage from 'assets/embrodery.png';
import { MapCategoryButton } from 'components/Buttons';
import { HeadingH6, Body1 } from 'components/Typography';
import VideosSlider from 'components/VideosSlider';
import Header from 'components/Header';
import { getVideos, useVideosDispatch } from 'components/useVideos';
import { getPlaces, usePlacesDispatch } from 'components/usePlaces';
import useTranslation from 'hooks/useTranslation';
import { mainPage } from 'strings/mainPage';
import CategoriesSlider from './CategoriesSlider';
import LeafletMap from './LeafletMap';
import { useCategoriesMap } from './categoriesMap';
import {
  MainPageContainer,
  ImageContainer,
  StyledImage,
  HeroTextContent,
  HeroBottomMenu,
  SocialImage,
  SocialButtonsContainer,
  CategoriesSliderContainer,
  LeftSideTextContent,
  MapContainer,
  MapCategoriesContainer,
  StyledMap,
  MapCategoryItem,
  StyledLocationIcon,
  SocialImageYtube,
} from './style';

function MainPage({ topContainerRef }) {
  const [currentCategory, setCurrentCategory] = useState(null);
  const t = useTranslation();
  const strings = t(mainPage);

  const categoriesRef = useRef(null);
  const videosDispatch = useVideosDispatch();
  const placesDispatch = usePlacesDispatch();

  const handleScroll = () => {
    //console.log(categoriesRef.current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    getVideos(videosDispatch);
    getPlaces(placesDispatch);
  }, []);

  const categoriesMap = useCategoriesMap();

  return (
    <>
      <Header topContainerRef={topContainerRef} />
      <MainPageContainer>
        <ImageContainer>
          <StyledImage src={romaImage} />
          <HeroTextContent>
            <Body1>
              <i>{strings.heroText}</i>
            </Body1>
          </HeroTextContent>
          <HeroBottomMenu>
            <SocialButtonsContainer>
              <Link href="http://pangeya.com.ua/" target="_blank">
                <Box width="60px" display="flex" justifyContent="center">
                  <SocialImage src={pangeyaLogo} />
                </Box>
              </Link>
              <Link
                href="https://www.facebook.com/stinaecocenter"
                target="_blank"
              >
                <Box width="60px" display="flex" justifyContent="center">
                  <SocialImage src={facebookLogo} />
                </Box>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCS9k8Er19EUxesrVPbLtE_w/videos"
                target="_blank"
              >
                <Box width="60px" display="flex" justifyContent="center">
                  <SocialImageYtube src={yutubeLogo} />
                </Box>
              </Link>
              <Link
                href="https://photos.app.goo.gl/Mpfi1Xy9KbhnWj4V8"
                target="_blank"
              >
                <Box width="60px" display="flex" justifyContent="center">
                  <SocialImage src={gphotosLogo} />
                </Box>
              </Link>
            </SocialButtonsContainer>
          </HeroBottomMenu>
        </ImageContainer>
        <CategoriesSliderContainer ref={categoriesRef}>
          <CategoriesSlider />
        </CategoriesSliderContainer>
        <ImageContainer>
          <StyledImage src={embroderyImage} />
          <LeftSideTextContent>
            <Body1>
              <i>{strings.embrText}</i>
            </Body1>
          </LeftSideTextContent>
        </ImageContainer>
        <MapContainer>
          <StyledMap>
            <LeafletMap currentCategory={currentCategory} />
          </StyledMap>
          <MapCategoriesContainer>
            {categoriesMap.map((category) => (
              <MapCategoryItem key={category.id}>
                <MapCategoryButton
                  selected={category.id === currentCategory?.id}
                >
                  <StyledLocationIcon
                    color={category.color}
                    onClick={() => setCurrentCategory(category)}
                  />
                </MapCategoryButton>
                <HeadingH6>{category.name}</HeadingH6>
              </MapCategoryItem>
            ))}
          </MapCategoriesContainer>
        </MapContainer>
        <VideosSlider />
      </MainPageContainer>
    </>
  );
}

export default MainPage;
