import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import chirchImage from 'assets/chirch.png';
import facebookLogo from 'assets/facebook.png';
import pangeyaLogo from 'assets/pangeya.png';
import yutubeLogo from 'assets/ytube.png';
import gphotosLogo from 'assets/gphotos.png';
import embroderyImage from 'assets/embrodery.png';
import { MapCategoryButton } from 'components/Buttons';
import { HeadingH6, Body1 } from 'components/Typography';
import Footer from 'components/Footer';
import CategoriesSlider from './CategoriesSlider';
import VideosSlider from './VideosSlider';
import LeafletMap from './LeafletMap';
import { categoriesMap } from './categoriesMap';
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
  VideoSliderContainer,
  SocialImageYtube,
} from './style';

function MainPage() {
  const topContainerRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const { t } = useTranslation();

  return (
    <MainPageContainer>
      <ImageContainer ref={topContainerRef}>
        <Header topContainerRef={topContainerRef} />
        <StyledImage src={chirchImage} />
        <HeroTextContent>
          <Body1>{t('heroText')}</Body1>
        </HeroTextContent>
        <HeroBottomMenu>
          <SocialButtonsContainer>
            <SocialImage src={pangeyaLogo} />
            <SocialImage src={facebookLogo} />
            <SocialImageYtube src={yutubeLogo} />
            <SocialImage src={gphotosLogo} />
          </SocialButtonsContainer>
        </HeroBottomMenu>
      </ImageContainer>
      <CategoriesSliderContainer>
        <CategoriesSlider />
      </CategoriesSliderContainer>
      <ImageContainer>
        <StyledImage src={embroderyImage} />
        <LeftSideTextContent>
          <Body1>{t('embrText')}</Body1>
        </LeftSideTextContent>
      </ImageContainer>
      <MapContainer>
        <StyledMap>
          <LeafletMap currentCategory={currentCategory} />
        </StyledMap>
        <MapCategoriesContainer>
          {categoriesMap.map((category) => (
            <MapCategoryItem key={category.id}>
              <MapCategoryButton selected={category.id === currentCategory?.id}>
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
      <VideoSliderContainer>
        <VideosSlider />
      </VideoSliderContainer>
      <Footer />
    </MainPageContainer>
  );
}

export default MainPage;
