export const getColor = (color) => {
  switch (color) {
    case 'white':
      return theme.colors.white;
    case 'primary':
      return theme.colors.primary;
    case 'light-blue':
      return theme.colors.lightBlue;
    case 'pink':
      return theme.colors.pink;
    case 'yellow':
      return theme.colors.yellow;
    case 'grey':
      return theme.colors.grey;
    case 'red':
      return theme.colors.red;
    case 'background':
      return theme.colors.background;
    default:
      return '#ffffff';
  }
};
export const configuration = {
  fontSizes: {
    banner: { desktop: 100, tablet: 64, mobile: 32 },
    huge: { desktop: 50, tablet: 40, mobile: 25 },
    big: { desktop: 40, tablet: 30, mobile: 20 },
    large: { desktop: 34, tablet: 28, mobile: 22 },
    medium: { desktop: 30, tablet: 25, mobile: 15 },
    normal: { desktop: 20, tablet: 16, mobile: 13 },
    small: { desktop: 15, tablet: 13, mobile: 13 },
    tiny: { desktop: 13, tablet: 10, mobile: 10 },
    nano: { desktop: 12, tablet: 10, mobile: 10 },
  },
  letterSpacing: {
    banner: { desktop: -4, tablet: -2, mobile: -2 },
    huge: { desktop: -2, tablet: -1, mobile: -1 },
    big: { desktop: -2, tablet: -1, mobile: -1 },
    large: { desktop: -2, tablet: -1, mobile: -1 },
    medium: { desktop: -2, tablet: -1, mobile: -1 },
    normal: { desktop: -1, tablet: -1, mobile: -1 },
    small: { desktop: 0, tablet: -1, mobile: -1 },
    tiny: { desktop: 0, tablet: 0, mobile: 0 },
    nano: { desktop: 0, tablet: 0, mobile: 0 },
  },
  lineHeight: {
    huge: { desktop: 70, tablet: 50, mobile: 31.25 },
    big: { desktop: 50, tablet: 30, mobile: 25 },
    large: { desktop: 42.5, tablet: 36, mobile: 33 },
    medium: { desktop: 37.5, tablet: 30, mobile: 18.75 },
    normal: { desktop: 35, tablet: 30, mobile: 17.5 },
    small: { desktop: 26.25, tablet: 30, mobile: 17.5 },
    tiny: { desktop: 22.75, tablet: 30, mobile: 17.5 },
    nano: { desktop: 21, tablet: 20, mobile: 17.5 },
  },
};

export const theme = {
  layout: {
    desktopWidth: '80%',
    mobileWidth: '95%',
    mainContentPadding: 24,
  },
  header: {
    height: 56,
  },
  mediaQueries: {
    mobileBreakpoint: '48rem',
    mobilePixel: 768,
    smallMobilePixel: 320,
    desktopPixel: 1024,
    footerMinWidth: '50rem',
  },
  colors: {
    darkBlue: '#0A0B1D',
    white: '#FFFFFF',
    primary: '#7EFBFA',
    lightBlue: '#95CFF5',
    pink: '#DA3DB0',
    yellow: '#F4AC3C',
    grey: '#879BA8',
    red: '#C61a09',
    background: '#20264E',
  },
  fontFamily: {
    syncopate: 'syncopate-bold',
    'syncopate-regular': 'syncopate-regular',
    basier: 'basier-square-mono-regular',
  },
  ...configuration,
};

export default theme;
