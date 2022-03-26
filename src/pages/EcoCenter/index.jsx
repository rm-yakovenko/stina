import React, { useRef, useEffect, useState } from 'react';
import VideosSlider from 'components/VideosSlider';
import HeaderLight from 'components/HeaderLight';
import SocialLinks from 'components/SocialLinks';
import {
  HeadingH4,
  HeadingH5,
  HeadingH6,
  Subtitle1Bold,
} from 'components/Typography';
import useTranslation from 'hooks/useTranslation';
import { ecoCenter } from 'strings/ecoCenter';
import topImage from 'assets/eco-center/top.jpg';
import hataImage from 'assets/eco-center/hata.jpg';
import Box from '@material-ui/core/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowImage from 'assets/arrow.png';
import usePeople from './usePeople';
import useSlides from './slides';

import {
  PageContainer,
  TopContainer,
  TopContainerTextSection,
  TopContainerImageSection,
  TopImageContainer,
  Image,
  PersonImage,
  SocialLinksContainer,
  MiddleContainer,
  MiddleContainerText,
  MozaicSlideContainer,
  SliderNext,
  ArrowImageRight,
  SwiperContainer,
  PeopleContainer,
  StyledCollapse,
  TeamHeadingContainer,
  StyledCollapseBody,
} from './style';

function EcoCenter() {
  const swiperRef = useRef(null);
  const defaultSlideIndex = 0;
  const [currentSlide, setCurrentSlide] = useState(defaultSlideIndex);
  const people = usePeople();
  const slides = useSlides();
  const t = useTranslation();
  const strings = t(ecoCenter);

  useEffect(() => {
    if (!swiperRef) {
      return;
    }
    swiperRef.current.swiper.on('slideChange', (e) => {
      setCurrentSlide(e.realIndex);
    });
  }, [swiperRef]);

  return (
    <>
      <HeaderLight />
      <PageContainer>
        <TopContainer>
          <TopContainerTextSection>EcoCenter works!</TopContainerTextSection>
          <TopContainerImageSection>
            <TopImageContainer>
              <Image src={topImage} />
              <SocialLinksContainer>
                <Box
                  width="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <SocialLinks />
                </Box>
              </SocialLinksContainer>
            </TopImageContainer>
          </TopContainerImageSection>
        </TopContainer>
        <MiddleContainer>
          <Image src={hataImage} />
          <MiddleContainerText>
            Text Content
            <button
              type="button"
              onClick={() => {
                swiperRef.current.swiper.slideTo(2);
              }}
            >
              2
            </button>
            <button
              type="button"
              onClick={() => {
                swiperRef.current.swiper.slideTo(3);
              }}
            >
              3
            </button>
            <button
              type="button"
              onClick={() => {
                swiperRef.current.swiper.slideTo(4);
              }}
            >
              4
            </button>
          </MiddleContainerText>
        </MiddleContainer>
        <SwiperContainer>
          <Swiper loop slidesPerView={1} ref={swiperRef}>
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <MozaicSlideContainer>
                  <Image src={slide.src} />
                  <StyledCollapse in={slide.id === currentSlide}>
                    <StyledCollapseBody>
                      <Subtitle1Bold>{slide.text}</Subtitle1Bold>
                    </StyledCollapseBody>
                  </StyledCollapse>
                </MozaicSlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderNext>
            <ArrowImageRight
              src={arrowImage}
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
            />
          </SliderNext>
        </SwiperContainer>
        <TeamHeadingContainer>
          <HeadingH4>{strings.teamHead}</HeadingH4>
        </TeamHeadingContainer>
        <PeopleContainer>
          {people.map((person) => (
            <Box
              display="flex"
              flexDirection="column"
              width="19%"
              alignItems="center"
            >
              <PersonImage src={person.src} />
              <Box marginTop="10px">
                <HeadingH5>{person.name}</HeadingH5>
              </Box>
              <HeadingH6>{person.role}</HeadingH6>
            </Box>
          ))}
        </PeopleContainer>
        <VideosSlider />
      </PageContainer>
    </>
  );
}

export default EcoCenter;
