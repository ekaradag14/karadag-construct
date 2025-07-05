'use client'; // 👈 This runs only on the client side

import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

type MuiProviderProps = {
  children: ReactNode;
};

const MuiProvider = ({ children }: MuiProviderProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MuiProvider;
