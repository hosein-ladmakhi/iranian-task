import { Vazirmatn } from 'next/font/google';
import { createTheme } from '@mui/material';

const inter = Vazirmatn({ subsets: ['latin'] });

export const defaultTheme = createTheme({
  typography: { fontFamily: inter.style.fontFamily },
});
