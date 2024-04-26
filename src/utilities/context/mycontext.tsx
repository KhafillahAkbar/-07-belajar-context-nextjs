import { themes } from '../themes/mythemes';
import { createContext } from 'react';

export const LevelContext = createContext(1);

export const ThemeContext = createContext({
    theme : themes.light,
    toggleTheme: () => {},
});