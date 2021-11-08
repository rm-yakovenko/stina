import React from 'react';
import YouTube from 'react-youtube';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { StyledModal, ModalBody } from './style';

const extractYoutubeVideoId = (url = '') => {
  if (url.includes('youtu.be')) {
    const idIndex = url.lastIndexOf('/');
    return url.substr(idIndex + 1, url.length);
  }
  const queryParamsIndex = url.indexOf('?');
  const searchParams = url.substring(queryParamsIndex + 1);
  const urlParams = new URLSearchParams(searchParams);
  return urlParams.get('v');
};

function YouTubeModal({ currentVideo, open, onClose }) {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const opts = {
    height: matchesSm ? '240' : '480',
    width: matchesSm ? '462' : '854',
  };

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalBody>
          <YouTube
            videoId={extractYoutubeVideoId(currentVideo?.url)}
            opts={opts}
          />
        </ModalBody>
      </Fade>
    </StyledModal>
  );
}

export default YouTubeModal;
