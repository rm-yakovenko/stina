import React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

function Theme({ children }) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h6 = {
    fontSize: '1.25rem',
    '@media (max-width:1400px)': {
      fontSize: '1rem',
    },
  };

  theme.typography.h5 = {
    fontSize: '1.5rem',
    '@media (max-width:1400px)': {
      fontSize: '1.2rem',
    },
  };

  theme.typography.h4 = {
    fontSize: '2rem',
    '@media (max-width:1400px)': {
      fontSize: '1.4rem',
    },
  };

  theme.typography.body1 = {
    fontSize: '1.2rem',
    lineHeight: '1.55rem',
    '@media (max-width:1400px)': {
      fontSize: '1rem',
    },
  };

  theme.typography.subtitle1 = {
    fontSize: '1rem',
    lineHeight: '1.75rem',
    '@media (max-width:1400px)': {
      lineHeight: '1.45rem',
    },
  };

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  );
}

export default Theme;
