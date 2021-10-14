import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowImage from 'assets/arrow.png';
import { categories } from './categories';

import {
  CategoryImage,
  StyledSwiperSlide,
  SliderPrev,
  SliderNext,
  SwiperContainer,
  ArrowImageLeft,
  ArrowImageRight,
} from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

function CategoriesSlider() {
  const swiperRef = useRef(null);

  return (
    <SwiperContainer>
      <Swiper loop slidesPerView={5} ref={swiperRef}>
        {categories.map((categorie) => (
          <SwiperSlide key={categorie.id}>
            <StyledSwiperSlide>
              <CategoryImage src={categorie.image} />
            </StyledSwiperSlide>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderPrev>
        <ArrowImageLeft
          src={arrowImage}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
      </SliderPrev>
      <SliderNext>
        <ArrowImageRight
          src={arrowImage}
          onClick={() => swiperRef.current.swiper.slideNext()}
        />
      </SliderNext>
    </SwiperContainer>
  );
}

export default CategoriesSlider;
