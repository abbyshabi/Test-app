import React from 'react';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles} from '../../Stylesheets/Global'
import media from '../../Stylesheets/media';

const secondaryColor = '#9DD858';
const defaultTheme = {
  colors: {
    primary: '#234C56',
    secondary: secondaryColor,
    tertiary: '#9DD858',
    white: '#FFFFFF',
    black: '#000000',
    border: '#4C5C6D',
    grey: '#A4A59A',
    green: secondaryColor,
    systemFail: '#AE4036',
    systemSuccess: '#219653',
    systemPending: '#2D9CDB',
    statusSuccess: '#6FCF97',
    statusRejected: '#EB5757',
    colorPrimary: '#FBFDFF',
    text: '#4C5C6D',
    text2: '#A5ADB6',
    text3: '#234C56',
    disabled: '#D3D4D8',
    red: '#B35151',
    yellow: '#CC9E58',
    backgroundGrey: '#E5E5E5',
    facebookBlue: '#3B5998',
    button: secondaryColor
  },
  fontWeight: {
    regular: 400,
    semiBold: 600
  },
  fontFamily: {
    default:
      '"Proxima Nova", "Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  breakpoints: {
    mobile: '767px',
    tablet: '979px',
    medium: '1199px'
  }
  // 👆 default theme
};

const OriginateLibThemeProvider = ({ children, theme = {} }) => {
  const _theme = {
    __OriginateLib: { ...defaultTheme, ...theme }
    // Namespace the theme for the user
  };
  return <ThemeProvider theme={_theme} >
    <React.Fragment>
    {children}
    <GlobalStyles/>
  </React.Fragment>
    </ThemeProvider>;
};

export { OriginateLibThemeProvider as ThemeProvider, defaultTheme };
