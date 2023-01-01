import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext(null);

export const ThemeContextProvider = () => {
  const [lightMode, setLightMode] = useState(false);

  const darkTheme = {
    colors: {
      background: '#141D2F',
      themeBtn: '#fff',
      card: '#1E2A47',
      textNorm: '#fff',
      textBolded: '#FFF',
    },
  };
  const lightTheme = {
    colors: {
      background: '#F6F8FF',
      themeBtn: '#4B6A9B',
      card: '#FEFEFE',
      textNorm: '#697C9A',
      textBolded: '#2B3442',
    },
  };

  const changeTheme = () => {
    setLightMode(prevState => !prevState);
  };

  useEffect(() => {
    localStorage.getItem('theme') === 'light' && setLightMode(true);
  }, []);

  useEffect(() => {
    const mode = lightMode ? 'light' : 'dark';

    localStorage.setItem('theme', mode);
  }, []);

  return (
    <ThemeContext.Provider value={{ changeTheme, lightMode }}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}></ThemeProvider>
    </ThemeContext.Provider>
  );
};
