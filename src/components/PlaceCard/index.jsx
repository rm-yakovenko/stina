import React from 'react';
import useTranslation from 'hooks/useTranslation';
import { mainPage } from 'strings/mainPage';

import { Link as ReactLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Subtitle1 } from 'components/Typography';

import {
  MainContainer,
  HeadingContainer,
  ImageContainer,
  LinkContainer,
  StyledImage,
} from './style';

function PlaceCard({ placeData, size }) {
  const t = useTranslation();
  const strings = t(mainPage);

  const countSize = (containerSize) => {
    switch (containerSize) {
      case 'large':
        return '300px';
      case 'medium':
        return '200px';
      default:
        return '200px';
    }
  };

  const renderLink = (link) => {
    if (link.includes('http') || link.includes('www')) {
      return (
        <Link href={link} target="_blank">
          {strings.readMore}
        </Link>
      );
    }

    return <ReactLink to={link}>{strings.readMore}</ReactLink>;
  };

  return (
    <MainContainer>
      <HeadingContainer>
        <Subtitle1>{t(placeData.name)}</Subtitle1>
      </HeadingContainer>
      <ImageContainer size={countSize(size)}>
        <StyledImage src={placeData.imageUrl} />
      </ImageContainer>
      <LinkContainer>
        {placeData.pageLink && (
          <Subtitle1>{renderLink(placeData.pageLink)}</Subtitle1>
        )}
      </LinkContainer>
    </MainContainer>
  );
}

export default PlaceCard;
