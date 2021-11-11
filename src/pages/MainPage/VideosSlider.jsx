import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import YouTubeModal from 'components/YouTubeModal';
import { extractYoutubeVideoId } from 'helpers/videoHelpers';
import arrowImage from 'assets/arrow.png';
import { videos } from './videoUrls';
import {
  VideoImage,
  StyledSwiperVideoSlide,
  SliderPrev,
  SliderNext,
  SwiperContainer,
  ArrowImageLeft,
  ArrowImageRight,
  StyledYouTubeIcon,
} from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const getVideoPreviewImg = (url) => {
  const id = extractYoutubeVideoId(url);
  return id && `https://img.youtube.com/vi/${id}/sddefault.jpg`;
};

function VideosSlider() {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(null);

  const [isYouTubeModalOpen, setYouTubeModalOpen] = useState(false);

  const toggleYuuTubeModal = () => {
    setYouTubeModalOpen(!isYouTubeModalOpen);
  };

  return (
    <>
      <SwiperContainer>
        <Swiper loop slidesPerView={4} ref={swiperRef}>
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <StyledSwiperVideoSlide
                onMouseEnter={() => setCurrentSlide(video)}
                onMouseLeave={() => setCurrentSlide(null)}
                onClick={toggleYuuTubeModal}
              >
                <VideoImage
                  src={getVideoPreviewImg(video.url)}
                  isHover={currentSlide?.id === video.id}
                />
                <StyledYouTubeIcon style={{ fontSize: 100 }} />
              </StyledSwiperVideoSlide>
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
      <YouTubeModal
        open={isYouTubeModalOpen}
        onClose={toggleYuuTubeModal}
        currentVideo={currentSlide}
      />
    </>
  );
}

export default VideosSlider;
