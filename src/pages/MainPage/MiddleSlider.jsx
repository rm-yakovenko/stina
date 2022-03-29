import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Body1 } from 'components/Typography';
import useTranslation from 'hooks/useTranslation';
import { mainPage } from 'strings/mainPage';
import embroderyImage from 'assets/embrodery.jpg';
import embroderyImage2 from 'assets/embrodery2.jpg';
import embroderyImage3 from 'assets/embrodery3.jpg';
import embroderyImage4 from 'assets/embrodery4.jpg';
import embroderyImage5 from 'assets/embrodery5.jpg';
import SwiperCore, { Autoplay } from 'swiper';

import {
  SwiperContainer,
  ImageContainer,
  StyledImage,
  LeftSideTextContent,
  SliderButtonsContainer,
  SwiperPaginationButton,
} from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const slides = [
  { id: 0, src: embroderyImage },
  { id: 1, src: embroderyImage2 },
  { id: 2, src: embroderyImage3 },
  { id: 3, src: embroderyImage4 },
  { id: 4, src: embroderyImage5 },
];

function MiddleSlider() {
  SwiperCore.use([Autoplay]);

  const t = useTranslation();
  const strings = t(mainPage);

  const swiperRef = useRef(null);

  const defaultSlideIndex = 0;
  const [currentSlide, setCurrentSlide] = useState(defaultSlideIndex);

  useEffect(() => {
    if (!swiperRef) {
      return;
    }
    swiperRef.current.swiper.on('slideChange', (e) => {
      setCurrentSlide(e.realIndex);
    });
  }, [swiperRef]);

  return (
    <SwiperContainer>
      <SliderButtonsContainer>
        {slides.map((slide) => (
          <SwiperPaginationButton
            active={slide.id === currentSlide}
            onClick={() => {
              swiperRef.current.swiper.slideTo(slide.id + 1);
            }}
          />
        ))}
      </SliderButtonsContainer>
      <LeftSideTextContent>
        <Body1>
          <i>{strings.embrText}</i>
        </Body1>
      </LeftSideTextContent>

      <Swiper
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        ref={swiperRef}
        modules={[Autoplay]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <ImageContainer>
              <StyledImage src={slide.src} />
            </ImageContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
}

export default MiddleSlider;
