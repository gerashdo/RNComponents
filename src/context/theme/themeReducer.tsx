import { Theme } from "@react-navigation/native"

type ThemeAction = 
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'dark' | 'light';
    dividerColor: string;

}

export const lightTheme: ThemeState = {
    dark: false,
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.5)',
    colors: {
        primary: 'green',
        background: 'white',
        card: 'green',
        text: 'yellow',
        border: 'purple',
        notification: 'red',
    }
}

export const darkTheme: ThemeState = {
    dark: false,
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.5)',
    colors: {
        primary: 'green',
        background: 'black',
        card: 'green',
        text: 'yellow',
        border: 'purple',
        notification: 'red',
    }
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