import { Theme } from "@react-navigation/native"

type ThemeAction = 
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'dark' | 'light';
    dividerColor: string;
    secondary: string;
    buttonTextColor: string;

}

export const lightTheme: ThemeState = {
    dark: false,
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.5)',
    colors: {
        primary: 'green',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    },
    secondary: 'purple',
    buttonTextColor: 'white',
}

export const darkTheme: ThemeState = {
    dark: true,
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.5)',
    colors: {
        primary: '#77E0A7',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'purple',
        notification: 'red',
    },
    secondary: 'purple',
    buttonTextColor: 'black',
}

export const themeReducer = ( state: ThemeState , action: ThemeAction ) => {

    switch ( action.type ) {
        case 'set_light_theme':
            return { ...lightTheme }
        case 'set_dark_theme':
            return { ...darkTheme }
        default:
            return state;
    }

}