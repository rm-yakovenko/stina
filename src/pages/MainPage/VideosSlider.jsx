import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowImage from 'assets/arrow.png';
import { videos } from './videoUrls';
import {
  VideoImage,
  StyledSwiperSlide,
  SliderPrev,
  SliderNext,
  SwiperContainer,
  ArrowImageLeft,
  ArrowImageRight,
} from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const extractYoutubeVideoId = (url) => {
  if (url.includes('youtu.be')) {
    const idIndex = url.lastIndexOf('/');
    return url.substr(idIndex + 1, url.length);
  }
  const queryParamsIndex = url.indexOf('?');
  const searchParams = url.substring(queryParamsIndex + 1);
  const urlParams = new URLSearchParams(searchParams);
  return urlParams.get('v');
};

const getVideoPreviewImg = (url) => {
  const id = extractYoutubeVideoId(url);
  return id && `https://img.youtube.com/vi/${id}/sddefault.jpg`;
};

function VideosSlider() {
  const swiperRef = useRef(null);

  return (
    <SwiperContainer>
      <Swiper loop slidesPerView={4} ref={swiperRef}>
        {videos.map((video) => (
          <SwiperSlide>
            <StyledSwiperSlide>
              <VideoImage src={getVideoPreviewImg(video)} />
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

export default VideosSlider;