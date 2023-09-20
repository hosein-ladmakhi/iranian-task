import { Vazirmatn } from "next/font/google";
import { createTheme } from "@mui/material";
import { BLUE_GREY_COLOR, WHITE_COLOR } from "@/constants";

const inter = Vazirmatn({ subsets: ["latin"] });

export const defaultTheme = createTheme({
  typography: { fontFamily: inter.style.fontFamily },
  direction: "rtl",
  palette: {
    primary: {
      main: WHITE_COLOR,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: BLUE_GREY_COLOR[800],
          color: WHITE_COLOR,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: WHITE_COLOR,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: WHITE_COLOR,
        },
      },
    },
  },
});
