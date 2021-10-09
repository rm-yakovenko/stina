import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { videos } from './videoUrls';
import { CategoryImage, StyledSwiperSlide } from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

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
  return (
    <Swiper loop slidesPerView={4} navigation>
      {videos.map((video) => (
        <SwiperSlide>
          <StyledSwiperSlide>
            <CategoryImage src={getVideoPreviewImg(video)} />
          </StyledSwiperSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default VideosSlider;
