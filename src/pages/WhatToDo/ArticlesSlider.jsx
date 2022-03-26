import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeadingH5, Body1 } from 'components/Typography';
import Fade from '@material-ui/core/Fade';
import useTranslation from 'hooks/useTranslation';
import arrowImage from 'assets/arrow.png';

import {
  SliderPrev,
  SliderNext,
  SwiperContainer,
  ArrowImageLeft,
  ArrowImageRight,
  StyledSwiperSlide,
  StyledSwiperSlideInnerContainer,
  BottomContainer,
  ArticleDescription,
  SwiperBox,
} from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

function ArticlesSlider({ articles, position, currentCategoryId }) {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(null);
  const t = useTranslation();

  const slidesPerView = articles.length > 5 ? 5 : articles.length;

  const handleNextSlide = () => {
    if (articles.length < 6) {
      return;
    }
    swiperRef.current.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    if (articles.length < 6) {
      return;
    }
    swiperRef.current.swiper.slidePrev();
  };

  const history = useHistory();

  return (
    <BottomContainer>
      <SwiperContainer $position={position}>
        <Swiper loop slidesPerView={slidesPerView} ref={swiperRef}>
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <SwiperBox
                onMouseEnter={() => setCurrentSlide(article)}
                onMouseLeave={() => setCurrentSlide(null)}
              >
                <StyledSwiperSlide
                  $image={article.thumb}
                  $isHover={article.id === currentSlide?.id}
                >
                  <StyledSwiperSlideInnerContainer
                    $isHover={article.id === currentSlide?.id}
                    onClick={() =>
                      history.push(
                        `/category/${currentCategoryId}/articles/${article.id}`,
                      )
                    }
                  >
                    {article.id === currentSlide?.id && (
                      <HeadingH5>{t(article.header)}</HeadingH5>
                    )}
                  </StyledSwiperSlideInnerContainer>
                </StyledSwiperSlide>
              </SwiperBox>
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderPrev>
          <ArrowImageLeft src={arrowImage} onClick={handlePrevSlide} />
        </SliderPrev>
        <SliderNext>
          <ArrowImageRight src={arrowImage} onClick={handleNextSlide} />
        </SliderNext>
      </SwiperContainer>
      <Fade in={Boolean(currentSlide)}>
        <ArticleDescription $position={position}>
          <Body1>{t(currentSlide?.description)}</Body1>
        </ArticleDescription>
      </Fade>
    </BottomContainer>
  );
}

export default ArticlesSlider;
