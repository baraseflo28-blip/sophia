"use client";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "../lib/i18n"; // Initialize i18n in client component

interface ClientLayoutProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    background: {
      default: "transparent",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
  },
});

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}