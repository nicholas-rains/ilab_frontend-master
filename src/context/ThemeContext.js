import React, { createContext, useState } from 'react';
import { themeData } from "../theme/themeData";

export const ThemeContext = createContext("");

function ThemeContextProvider(props) {
  // Always use the light theme
  const [theme, setTheme] = useState(themeData.defaultTheme);

  // Optionally, remove toggleTheme if dark mode is no longer desired:
  const toggleTheme = () => {
    // This can be left empty or removed altogether if the toggle is removed from your UI
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
