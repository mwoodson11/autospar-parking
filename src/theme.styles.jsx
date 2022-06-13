import { ThemeProvider } from 'styled-components';

const theme = {
    color: {
        primary: '#FFFFFF',
        secondary: '#022f4a',
        background: '#FFFFFF',
        accent: '#fe4801',
        buttonHover: '#0065F2',
        headerBackground: '#0065F2',
    },
    font: {
        size: {
        extraSmall: '14px',
        small: '16px',
        medium: '18px',
        large: '20px',
        extraLarge: '24px',
        titleLarge: '42px',
        mobileLarge: '30px',
        },
        family: 'sans-serif',
        main: 'Raleway, sans-serif',
        logo: 'Roboto',
    },
    sizes: {
        headerHeight: '50px',
    },
    breakpoint: {
        mobile: '375px',
        tablet: '600px',
        laptop: '1200px',
        desktop: '1600px',
    },
};

const Theme = ({ children }) => {

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;