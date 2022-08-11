import React, { FunctionComponent } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import themeConfig from './utils/config.util';

interface ThemeProps {
  children: React.ReactNode;
}

const Theme: FunctionComponent<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={themeConfig}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
