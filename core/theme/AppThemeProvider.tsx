'use client';

import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './defaultTheme';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AppThemeProvider({ children }: Props) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
