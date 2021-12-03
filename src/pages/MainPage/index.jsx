import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { useTranslation } from 'react-i18next';
import chirchImage from 'assets/chirch.png';
import facebookLogo from 'assets/facebook.png';
import pangeyaLogo from 'assets/pangeya.png';
import yutubeLogo from 'assets/ytube.png';
import gphotosLogo from 'assets/gphotos.png';
import embroderyImage from 'assets/embrodery.png';
import { MapCategoryButton } from 'components/Buttons';
import { HeadingH6, Body1 } from 'components/Typography';
import CategoriesSlider from './CategoriesSlider';
import VideosSlider from './VideosSlider';
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
  VideoSliderContainer,
  SocialImageYtube,
} from './style';

function MainPage() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const { t } = useTranslation();

  const categoriesMap = useCategoriesMap();

  return (
    <MainPageContainer>
      <ImageContainer>
        <StyledImage src={chirchImage} />
        <HeroTextContent>
          <Body1>
            <i>{t('heroText')}</i>
          </Body1>
        </HeroTextContent>
        <HeroBottomMenu>
          <SocialButtonsContainer>
            <Link href="http://pangeya.com.ua/" target="_blank">
              <SocialImage src={pangeyaLogo} />
            </Link>
            <Link
              href="https://www.facebook.com/stinaecocenter"
              target="_blank"
            >
              <SocialImage src={facebookLogo} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCS9k8Er19EUxesrVPbLtE_w/videos"
              target="_blank"
            >
              <SocialImageYtube src={yutubeLogo} />
            </Link>
            <Link
              href="https://photos.app.goo.gl/Mpfi1Xy9KbhnWj4V8"
              target="_blank"
            >
              <SocialImage src={gphotosLogo} />
            </Link>
          </SocialButtonsContainer>
        </HeroBottomMenu>
      </ImageContainer>
      <CategoriesSliderContainer>
        <CategoriesSlider />
      </CategoriesSliderContainer>
      <ImageContainer>
        <StyledImage src={embroderyImage} />
        <LeftSideTextContent>
          <Body1>
            <i>{t('embrText')}</i>
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
    </MainPageContainer>
  );
}

export default MainPage;
