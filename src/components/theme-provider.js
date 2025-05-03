"use client";

import { memo } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider component that wraps the application with next-themes provider
 * for theme management functionality
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 * @returns {React.ReactElement} Themed application wrapper
 */
const ThemeProvider = memo(function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
});

export { ThemeProvider };