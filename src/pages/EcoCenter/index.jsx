import React, { useRef, useEffect, useState } from 'react';
import VideosSlider from 'components/VideosSlider';
import {
  HeadingH4,
  HeadingH5,
  HeadingH6,
  Subtitle1Bold,
} from 'components/Typography';
import useTranslation from 'hooks/useTranslation';
import { ecoCenter } from 'strings/ecoCenter';
import facebookLogo from 'assets/facebook.png';
import pangeyaLogo from 'assets/pangeya.png';
import yutubeLogo from 'assets/ytube.png';
import gphotosLogo from 'assets/gphotos.png';
import topImage from 'assets/eco-center/top.jpg';
import hataImage from 'assets/eco-center/hata.jpg';
import Link from '@material-ui/core/Link';
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
  SocialImage,
  SocialImageYtube,
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
  );
}

export default EcoCenter;
