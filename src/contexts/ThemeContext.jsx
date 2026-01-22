import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const lightModeColors = {
  primary: "#667eea",
  secondary: "#764ba2",
  accent: "#f093fb",
  textPrimary: "#1a1a1a",
  textSecondary: "#666666",
  bgPrimary: "#ffffff",
  bgSecondary: "#f5f5f5",
  cardBg: "#f9f9f9",
};

const darkModeColors = {
  primary: "#667eea",
  secondary: "#764ba2",
  accent: "#f093fb",
  textPrimary: "#fafafa",
  textSecondary: "#aed6fc",
  bgPrimary: "#000000",
  bgSecondary: "#1a1a2e",
  cardBg: "#16213e",
};

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  const applyTheme = (dark) => {
    const root = document.documentElement;
    const colors = dark ? darkModeColors : lightModeColors;
    
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;