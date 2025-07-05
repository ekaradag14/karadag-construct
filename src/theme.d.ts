// This import is required to extend the theme
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    borderRadius: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    brandShadows: string[];
  }

  interface ThemeOptions {
    borderRadius?: {
      xxs?: string;
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
    };
    brandShadows?: string[];
  }

  // Extending the palette
  interface Palette {
    black: {
      main: string;
      dark: string;
    };
    brand: { [key: number]: string };
    darkBlue: {
      main: string;
    };
    darkMud: {
      main: string;
      light: string;
    };
    white: {
      main: string;
    };
    mustard: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    black?: {
      main?: string;
      dark?: string;
    };
    brand?: { [key: number]: string };
    darkBlue?: {
      main?: string;
    };
    darkMud?: {
      main?: string;
      light?: string;
    };
    white?: {
      main?: string;
    };
    mustard?: {
      main?: string;
      light?: string;
      dark?: string;
    };
  }
}
