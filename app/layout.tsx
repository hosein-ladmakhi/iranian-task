import { ReactNode } from "react";
import MainLayout from "@/shared/MainLayout";
import { AppThemeProvider } from "@/core/theme";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html dir="rtl">
      <head></head>
      <body>
        <AppThemeProvider>
          <MainLayout>{children}</MainLayout>
        </AppThemeProvider>
      </body>
    </html>
  );
}
