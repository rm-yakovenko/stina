import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeadingH5 } from 'components/Typography';
import arrowImage from 'assets/arrow.png';
import Box from '@material-ui/core/Box';
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
  CategoryNameMain,
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
              onClick={() => history.push(`/category/${category.id}`)}
            >
              <Box
                width="100%"
                position="relative"
                textAlign="center"
                onMouseEnter={() => setCurrentSlide(category.id)}
                onMouseLeave={() => setCurrentSlide(null)}
              >
                <CategoryNameTop isHover={currentSlide === category.id}>
                  <HeadingH5>{category.nameFirst}</HeadingH5>
                </CategoryNameTop>
                <CategoryImage src={category.image} />
                <CategoryLine isHover={currentSlide === category.id} />
                <CategoryNameBottom isHover={currentSlide === category.id}>
                  <HeadingH5>{category.nameSecond}</HeadingH5>
                </CategoryNameBottom>
              </Box>
              {currentSlide !== category.id && (
                <CategoryNameMain>
                  <HeadingH5>{category.name}</HeadingH5>
                </CategoryNameMain>
              )}
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
