import React from 'react';
import { HeadingH6 } from 'components/Typography';
import useTranslation from 'hooks/useTranslation';
import Box from '@material-ui/core/Box';

import { SwiperContainer, StyledImage } from './style';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

function TransportSlider({ transports }) {
  const t = useTranslation();

  return (
    <SwiperContainer>
      {transports.map((transport) => (
        <Box padding="10px 0" key={transport.id}>
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
        </Box>
      ))}
    </SwiperContainer>
  );
}

export default TransportSlider;
