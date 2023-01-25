import { createContext, useReducer } from "react"
import { lightTheme, themeReducer, ThemeState } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkMode: () => void;
    setLightMode: () => void;
}

export const ThemeContext = createContext( {} as ThemeContextProps )

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({ children }: Props) => {

    const [ theme, dispatch ] = useReducer( themeReducer, lightTheme )

    const setDarkMode = () => {
        console.log('DarkTheme')
        dispatch({ type: 'set_dark_theme' })
    }
    const setLightMode = () => {
        console.log('LightTheme')
        dispatch({ type: 'set_light_theme' })
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkMode,
            setLightMode,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}