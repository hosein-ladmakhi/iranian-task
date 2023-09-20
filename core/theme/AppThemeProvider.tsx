'use client';

import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './defaultTheme';
import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';

interface Props {
  children: ReactNode;
}

const cacheRtl = createCache({
  key: 'next-app-rtl',
  stylisPlugins: [rtlPlugin],
});

export default function AppThemeProvider({ children }: Props) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
