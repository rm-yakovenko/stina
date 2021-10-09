import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { categories } from './categories';
import { CategoryImage, StyledSwiperSlide } from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

function CategoriesSlider() {
  return (
    <Swiper loop slidesPerView={4} navigation>
      {categories.map((categorie) => (
        <SwiperSlide key={categorie.id}>
          <StyledSwiperSlide>
            <CategoryImage src={categorie.image} />
          </StyledSwiperSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategoriesSlider;
