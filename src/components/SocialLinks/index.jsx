import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import facebookLogo from 'assets/facebook.png';
import pangeyaLogo from 'assets/pangeya.png';
import yutubeLogo from 'assets/ytube.png';
import gphotosLogo from 'assets/gphotos.png';

import { SocialImage, SocialImageYtube } from './style';

function SocialLinks() {
  return (
    <>
      <Link href="http://pangeya.com.ua/" target="_blank">
        <Box width="60px" display="flex" justifyContent="center">
          <SocialImage src={pangeyaLogo} />
        </Box>
      </Link>
      <Link href="https://www.facebook.com/stinaecocenter" target="_blank">
        <Box width="60px" display="flex" justifyContent="center">
          <SocialImage src={facebookLogo} />
        </Box>
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCS9k8Er19EUxesrVPbLtE_w/videos"
        target="_blank"
      >
        <Box width="60px" display="flex" justifyContent="center">
          <SocialImageYtube src={yutubeLogo} />
        </Box>
      </Link>
      <Link href="https://photos.app.goo.gl/Mpfi1Xy9KbhnWj4V8" target="_blank">
        <Box width="60px" display="flex" justifyContent="center">
          <SocialImage src={gphotosLogo} />
        </Box>
      </Link>
    </>
  );
}

export default SocialLinks;
