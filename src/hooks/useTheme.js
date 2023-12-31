import { useEffect, useState } from 'react';
import { themes } from 'components/ThemeStatus/ThemeProvider';

export const useTheme = () => {
  const getTheme = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`;
    if (Object.values(themes).includes(theme)) return theme;

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) return themes.dark;

    return themes.dark;
  };
  const [theme, setTheme] = useState(getTheme);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    window?.localStorage?.setItem('theme', mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window?.localStorage?.getItem('theme');
    localTheme ? setTheme(localTheme) : setTheme('dark');
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
