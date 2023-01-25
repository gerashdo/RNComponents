import { createContext, useEffect, useReducer } from "react"
import { Appearance, AppState } from "react-native";
import { useColorScheme } from "react-native";
import { lightTheme, themeReducer, ThemeState, darkTheme } from './themeReducer';

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

    // const colorScheme = useColorScheme()

    // const [ theme, dispatch ] = useReducer( 
    //     themeReducer, 
    //     ( colorScheme === 'light' ? lightTheme: darkTheme )   
    // )

    const [ theme, dispatch ] = useReducer( 
        themeReducer, 
        ( Appearance.getColorScheme() === 'light' ? lightTheme: darkTheme )   
    )

    useEffect(() => {
      AppState.addEventListener( 'change', ( status ) => {
        if( status === 'active' ){
            ( Appearance.getColorScheme() === 'light' )
                ? setLightMode()
                : setDarkMode()
        }
      })
    }, [])
    

    // IOS/android?
    // useEffect(() => {
    //     ( colorScheme === 'light' )
    //         ? setLightMode()
    //         : setDarkMode()

    // }, [ colorScheme ])
    

    const setDarkMode = () => {
        dispatch({ type: 'set_dark_theme' })
    }
    const setLightMode = () => {
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