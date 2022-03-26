import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import romaImage from 'assets/roma.jpg';
import embroderyImage from 'assets/embrodery.png';
import { MapCategoryButton, BlackButton } from 'components/Buttons';
import { HeadingH6, HeadingH5, Body1 } from 'components/Typography';
import SocialLinks from 'components/SocialLinks';
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
  SocialButtonsContainer,
  CategoriesSliderContainer,
  LeftSideTextContent,
  MapContainer,
  MapCategoriesContainer,
  StyledMap,
  MapCategoryItem,
  StyledLocationIcon,
  AboutContainer,
} from './style';

function MainPage({ topContainerRef }) {
  const [currentCategory, setCurrentCategory] = useState(null);
  const t = useTranslation();
  const strings = t(mainPage);

  const history = useHistory();

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
              <SocialLinks />
            </SocialButtonsContainer>
          </HeroBottomMenu>
        </ImageContainer>
        <AboutContainer>
          <HeadingH5>{strings.about}</HeadingH5>
          <Box marginTop="50px">
            <BlackButton onClick={() => history.push('/category/1')}>
              <HeadingH5>{strings.navLink3}</HeadingH5>
            </BlackButton>
          </Box>
        </AboutContainer>
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
