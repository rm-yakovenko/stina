import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import romaImage from 'assets/roma.jpg';
import ecocenterImage from 'assets/ecocenter.jpg';
import { MapCategoryButton, BlackButton } from 'components/Buttons';
import { HeadingH6, HeadingH5, Body1 } from 'components/Typography';
import SocialLinks from 'components/SocialLinks';
import VideosSlider from 'components/VideosSlider';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import useTranslation from 'hooks/useTranslation';
import useOnScreen from 'hooks/useOnScreen';
import { mainPage } from 'strings/mainPage';
import CategoriesSlider from './CategoriesSlider';
import LeafletMap from './LeafletMap';
import { useCategoriesMap } from './categoriesMap';
import MiddleSlider from './MiddleSlider';
import {
  MainPageContainer,
  ImageContainer,
  StyledImage,
  HeroTextContent,
  HeroBottomMenu,
  SocialButtonsContainer,
  CategoriesSliderContainer,
  MapContainer,
  MapCategoriesContainer,
  StyledMap,
  MapCategoryItem,
  StyledLocationIcon,
  AboutContainer,
  EcoCenterContainer,
  EcoCenterText,
  MapCategoryName,
} from './style';

function MainPage({ topContainerRef }) {
  const categoriesMap = useCategoriesMap();
  const defaultMapCategory = categoriesMap.find((cat) => cat.id === 9);

  const [showLoader, setShowLoader] = useState(true);

  const [currentCategory, setCurrentCategory] = useState(defaultMapCategory);

  const t = useTranslation();
  const strings = t(mainPage);

  const history = useHistory();

  const ecoCenterRef = useRef(null);
  const visibleEcoCenter = useOnScreen(ecoCenterRef.current);

  const categoriesRef = useRef(null);
  const mainImageRef = useRef(null);

  const handleScroll = () => {
    //console.log(categoriesRef.current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    mainImageRef.current.onload = () => {
      setShowLoader(false);
    };
  }, [mainImageRef]);

  return (
    <>
      {showLoader && <Spinner />}
      <Header topContainerRef={topContainerRef} />
      <MainPageContainer>
        <ImageContainer>
          <StyledImage src={romaImage} ref={mainImageRef} />
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
        <MiddleSlider />
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
                <MapCategoryName>
                  <HeadingH6>{category.name}</HeadingH6>
                </MapCategoryName>
              </MapCategoryItem>
            ))}
          </MapCategoriesContainer>
        </MapContainer>
        <EcoCenterContainer ref={ecoCenterRef}>
          <StyledImage src={ecocenterImage} />
          <EcoCenterText visible={visibleEcoCenter}>Texts</EcoCenterText>
        </EcoCenterContainer>
        <VideosSlider />
      </MainPageContainer>
    </>
  );
}

export default MainPage;
