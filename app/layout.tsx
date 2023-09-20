import { ReactNode } from 'react';
import AppThemeProvider from '@/core/theme/AppThemeProvider';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html dir="rtl">
      <head></head>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
