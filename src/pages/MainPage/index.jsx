import React from 'react';
import Header from 'components/Header';
import chirchImage from 'assets/chirch.png';
import facebookLogo from 'assets/facebook.png';
import pangeyaLogo from 'assets/pangeya.png';
import yutubeLogo from 'assets/ytube.png';
import gphotosLogo from 'assets/gphotos.png';
import embroderyImage from 'assets/embrodery.png';
import CategoriesSlider from './CategoriesSlider';
import VideosSlider from './VideosSlider';
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
} from './style';

function MainPage() {
  return (
    <MainPageContainer>
      <ImageContainer>
        <Header />
        <StyledImage src={chirchImage} />
        <HeroTextContent />
        <HeroBottomMenu>
          <SocialButtonsContainer>
            <SocialImage src={pangeyaLogo} />
            <SocialImage src={facebookLogo} />
            <SocialImage src={yutubeLogo} />
            <SocialImage src={gphotosLogo} />
          </SocialButtonsContainer>
        </HeroBottomMenu>
      </ImageContainer>
      <CategoriesSliderContainer>
        <CategoriesSlider />
      </CategoriesSliderContainer>
      <ImageContainer>
        <StyledImage src={embroderyImage} />
        <LeftSideTextContent />
      </ImageContainer>
      <VideosSlider />
    </MainPageContainer>
  );
}

export default MainPage;
