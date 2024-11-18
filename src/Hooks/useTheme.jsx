import { ThemeContext} from '../Contexts/ThemeContext';
import { useContext } from 'react';

export default function useTheme() {
    
    let contexts = useContext(ThemeContext); 

    if (contexts === undefined) { 
        // equals to 'undefined' where it is used outside ThemeContextProvider

        new Error('theme context should be only used in ThemeContextProvider')

    }
    return contexts; // { theme : dark , changeTheme , isDark }
}