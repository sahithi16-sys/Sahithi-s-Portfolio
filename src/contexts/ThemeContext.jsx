import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateThemeColors = () => {
  return {
    primary: generateRandomColor(),
    secondary: generateRandomColor(),
    accent: generateRandomColor(),
    textPrimary: generateRandomColor(),
    textSecondary: generateRandomColor(),
    bgPrimary: generateRandomColor(),
    bgSecondary: generateRandomColor(),
  };
};

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [themeColors, setThemeColors] = useState(() => generateThemeColors());

  useEffect(() => {
    applyTheme(isDark, themeColors);
  }, [isDark, themeColors]);

  const applyTheme = (dark, colors) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const generateNewColors = () => {
    setThemeColors(generateThemeColors());
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, generateNewColors, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;