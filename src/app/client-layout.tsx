"use client";

import { ThemeProvider, createTheme, CssBaseline, Theme } from "@mui/material";
import "../lib/i18n"; // Initialize i18n in client component

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