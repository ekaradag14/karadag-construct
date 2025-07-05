import { createTheme } from '@mui/material/styles';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  borderRadius: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
  },
  brandShadows: [
    'none',
    '0px 4px 10px rgba(0, 162, 96, 0.1), 0px 2px 6px rgba(0, 162, 96, 0.05)',
    '0px 24px 48px -12px rgba(0, 162, 96, 0.18), 0px 4px 4px -2px rgba(0, 162, 96, 0.04)  ',
  ],
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: 'rgba(2, 183, 109, 1)',
      light: 'rgba(99, 185, 103, 1)',
      dark: 'rgb(0, 145, 87)',
    },

    brand: { 25: 'rgb(240, 254, 247)', 100: 'rgb(206,253,225)' },
    secondary: {
      main: 'rgba(123, 128, 154, 1)',
    },
    text: {
      secondary: 'rgba(123, 128, 154, 1)',
    },
    background: {
      default:
        'radial-gradient(circle at top left, rgb(240, 254, 247), #90caf97a)',
    },
    black: {
      main: 'rgba(0, 0, 0, 1)',
      dark: 'rgba(25, 25, 25, 1)',
    },
    darkBlue: {
      main: 'rgba(52, 70, 103, 1)',
    },
    darkMud: {
      main: 'rgba(79, 79, 82, 1)',
      light: 'rgba(224, 224, 224, 1)',
    },
    white: {
      main: 'rgba(255, 255, 255, 1)',
    },
    mustard: {
      main: 'rgba(229, 170, 112, 1)',
      light: 'rgba(248, 233, 214, 1)',
      dark: 'rgba(208, 150, 74, 1)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, #F0FEF7 0%, #CEFDE1 100%);',
        },
      },
    },
  },
});

export default theme;
