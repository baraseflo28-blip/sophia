"use client";

import { ThemeProvider, createTheme, CssBaseline, Theme } from "@mui/material";

interface ClientLayoutProps {
  children: React.ReactNode;
  theme: Theme;
}

export default function ClientLayout({ children, theme }: ClientLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}