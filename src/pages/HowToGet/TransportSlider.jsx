import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeadingH6 } from 'components/Typography';
import arrowImage from 'assets/arrow.png';
import useTranslation from 'hooks/useTranslation';
import Box from '@material-ui/core/Box';

import {
  SliderPrev,
  SliderNext,
  ArrowImageTop,
  ArrowImageBottom,
  SwiperContainer,
  StyledImage,
} from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

function TransportSlider({ transports }) {
  const swiperRef = useRef(null);
  const t = useTranslation();

  const slidesPerView = transports.length > 5 ? 5 : transports.length;
  console.log(slidesPerView);

  return (
    <SwiperContainer>
      <Swiper loop slidesPerView={3} ref={swiperRef} direction="vertical">
        {transports.map((transport) => (
          <SwiperSlide key={transport.id}>
            <Box display="flex" alignItems="center" padding="0 20px">
              <Box
                width="100px"
                height="100px"
                borderRadius="50%"
                overflow="hidden"
              >
                <StyledImage src={transport.imageUrl} />
              </Box>
              <Box marginLeft="10px">
                <HeadingH6>{`${t(transport.name)}, ${t(
                  transport.type,
                )}`}</HeadingH6>
                <HeadingH6>{t(transport.contact)}</HeadingH6>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderPrev>
        <ArrowImageTop
          src={arrowImage}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
      </SliderPrev>
      <SliderNext>
        <ArrowImageBottom
          src={arrowImage}
          onClick={() => swiperRef.current.swiper.slideNext()}
        />
      </SliderNext>
    </SwiperContainer>
  );
}

export default TransportSlider;
