import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const HeadingH1 = styled((props) => (
  <Typography variant="h1" {...props} />
))``;

export const HeadingH2 = styled((props) => (
  <Typography variant="h2" {...props} />
))``;

export const HeadingH3 = styled((props) => (
  <Typography variant="h3" {...props} />
))``;

export const HeadingH4 = styled((props) => (
  <Typography variant="h4" {...props} />
))``;

export const HeadingH5 = styled((props) => (
  <Typography variant="h5" {...props} />
))``;

export const HeadingH6 = styled((props) => (
  <Typography variant="h6" {...props} />
))``;

export const HeadingLinks = styled(Typography)`
  font-size: 18px !important;
`;

export const Subtitle1 = styled((props) => (
  <Typography variant="subtitle1" {...props} />
))``;

export const Subtitle2 = styled((props) => (
  <Typography variant="subtitle2" {...props} />
))``;

export const Body1 = styled(Typography)`
  font-size: 20px !important;
`;

export const Body2 = styled((props) => (
  <Typography variant="body2" {...props} />
))``;
