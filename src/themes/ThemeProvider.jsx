document.documentElement.classList.add("theme-anime");
import React, { useEffect } from "react";

export default function ThemeProvider({ children }) {
  useEffect(() => {
    // Apply anime theme to <html>
    document.documentElement.classList.add("theme-anime");

    return () => {
      document.documentElement.classList.remove("theme-anime");
    };
  }, []);

  return <>{children}</>;
}
