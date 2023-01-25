import { createContext } from "react"

interface ThemeContextProps {
    theme: any;
    setDarkMode: () => void;
    setLightMode: () => void;
}

export const ThemeContext = createContext( {} as ThemeContextProps )

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({ children }: Props) => {

    const theme = null

    const setDarkMode = () => {
        console.log('DarkTheme')
    }
    const setLightMode = () => {
        console.log('LightTheme')
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