import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeadingH5 } from 'components/Typography';
import arrowImage from 'assets/arrow.png';
import { useCategories } from './categories';

import {
  CategoryImage,
  StyledSwiperSlide,
  SliderPrev,
  SliderNext,
  SwiperContainer,
  ArrowImageLeft,
  ArrowImageRight,
  CategoryNameTop,
  CategoryNameBottom,
  CategoryLine,
} from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

function CategoriesSlider() {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(null);

  const history = useHistory();

  const categories = useCategories();

  return (
    <SwiperContainer>
      <Swiper loop slidesPerView={5} ref={swiperRef}>
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <StyledSwiperSlide
              onMouseEnter={() => setCurrentSlide(category.id)}
              onMouseLeave={() => setCurrentSlide(null)}
              onClick={() => history.push(`/category/${category.id}`)}
            >
              <CategoryNameTop isHover={currentSlide === category.id}>
                <HeadingH5>{category.nameFirst}</HeadingH5>
              </CategoryNameTop>
              <CategoryImage src={category.image} />
              <CategoryLine isHover={currentSlide === category.id} />
              <CategoryNameBottom isHover={currentSlide === category.id}>
                <HeadingH5>{category.nameSecond}</HeadingH5>
              </CategoryNameBottom>
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
