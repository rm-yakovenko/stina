import React from 'react';
import YouTube from 'react-youtube';
import { useTranslation } from 'react-i18next';
import { HeadingH4, Body1 } from 'components/Typography';
import { extractYoutubeVideoId } from 'helpers/videoHelpers';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { MainContainer, StyledImage } from './style';

function Article({ articleData = {} }) {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const opts = {
    height: matchesSm ? '240' : '480',
    width: matchesSm ? '462' : '854',
  };

  const { t } = useTranslation();

  const renderArticleBlock = (block) => {
    switch (block.type) {
      case 'text':
        return <Body1>{t(block.value)}</Body1>;
      case 'image':
        return (
          <Box padding="20px" display="flex" justifyContent="center">
            <StyledImage src={block.value} />
          </Box>
        );
      case 'video':
        return (
          <Box padding="20px" display="flex" justifyContent="center">
            <YouTube videoId={extractYoutubeVideoId(block.value)} opts={opts} />
          </Box>
        );
      default:
        return <></>;
    }
  };

  return (
    <MainContainer>
      <HeadingH4>{articleData.header}</HeadingH4>
      {articleData.blocks?.map((block) => renderArticleBlock(block))}
    </MainContainer>
  );
}

export default Article;
